import { revalidateTag } from "next/cache";
import { type NextRequest, NextResponse } from "next/server";
import { parseBody } from "next-sanity/webhook";

type WebhookPayload = {
  _type: string;
  _id: string;
  slug?: {
    current: string;
  };
};

export async function POST(req: NextRequest) {
  try {
    // Check if webhook secret is configured
    if (!process.env.SANITY_REVALIDATE_SECRET) {
      return new Response(
        "Missing environment variable SANITY_REVALIDATE_SECRET",
        { status: 500 },
      );
    }

    // Parse and validate the webhook body
    const { isValidSignature, body } = await parseBody<WebhookPayload>(
      req,
      process.env.SANITY_REVALIDATE_SECRET,
    );

    // Validate signature
    if (!isValidSignature) {
      const message = "Invalid signature";
      console.error(message);
      return new Response(JSON.stringify({ message, isValidSignature, body }), {
        status: 401,
      });
    }

    // Validate payload
    if (!body?._type) {
      const message = "Bad Request: Missing _type";
      console.error(message, body);
      return new Response(JSON.stringify({ message, body }), { status: 400 });
    }

    console.log("Webhook received:", {
      type: body._type,
      id: body._id,
      slug: body.slug?.current,
    });

    // Determine which tags to revalidate based on document type
    const tagsToRevalidate: string[] = [];

    switch (body._type) {
      case "post":
        // Revalidate general posts tag
        tagsToRevalidate.push("posts");
        tagsToRevalidate.push("featured-posts");
        tagsToRevalidate.push("categories");
        tagsToRevalidate.push("tags");

        // If we have a slug, revalidate the specific post tag
        if (body.slug?.current) {
          tagsToRevalidate.push(`post-${body.slug.current}`);
        }
        break;

      case "author":
        // When an author is updated, revalidate all posts (since they reference authors)
        tagsToRevalidate.push("posts");
        tagsToRevalidate.push("featured-posts");
        break;

      default:
        console.log(`Unhandled document type: ${body._type}`);
    }

    // Revalidate all tags
    if (tagsToRevalidate.length > 0) {
      tagsToRevalidate.forEach((tag) => {
        revalidateTag(tag, "max");
        console.log(`Revalidated tag: ${tag}`);
      });
    }

    return NextResponse.json({
      success: true,
      revalidated: true,
      tags: tagsToRevalidate,
      now: Date.now(),
    });
  } catch (err) {
    console.error("Webhook error:", err);
    return new Response((err as Error).message, { status: 500 });
  }
}
