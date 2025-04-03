import { client } from "@/sanity/client";
import { SanityDocument } from "@sanity/client";
import { urlForImage } from "@/sanity/image";
import { type SanityDocument as NextSanityDocument } from "next-sanity";

// Types for blog data
export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  coverImage: string;
  author: {
    name: string;
    avatar: string;
  };
  date: string;
  readingTime: string;
  category: string;
  tags: string[];
  featured?: boolean;
}

// Mock data for blog posts
// TODO: Create Sanity schemas that match this shape
const blogPosts: BlogPost[] = [
  {
    id: '1',
    slug: 'the-probable-beauty-of-llms',
    title: 'The Probable Beauty of LLMs',
    excerpt: 'Exploring the Full Potential of Large Language Models',
    content: `
### The Interface Matters
In any area of life, the interface you interact with shapes what you think is possible. When you sit in a car, you see a steering wheel, pedals, and a gearshift—so you naturally think about driving, not editing videos. Similarly, video editing software shows you timeline controls and effect buttons—so you use it to make movies, not drive around town.

This rule has subtle implications as well. Interfaces don't just *show* what's possible; they can also *hide* it. If an interface doesn't make certain capabilities of a system visible, most users won't ever imagine those possibilities exist. When this happens, potential is lost, and the interface doesn't do its job to the fullest extent (unless its purpose is specifically to limit functionality).

Today's AI interfaces like ChatGPT set up a very specific image in users' minds: these are helpful, harmless assistants who write emails, answer questions, code solutions, and suggest dinner recipes. While models can obviously do these things well, the text-message style chat interface creates important misconceptions that most people adopt without realizing it. 

### What Is a Loom Interface and Why Is It Important?
When you chat with AI assistants like ChatGPT or Gemini, you typically see just one response to your message. But behind that single response lies a vast universe of possibilities. Language models don't actually "decide" on one perfect answer—they calculate probabilities for millions of possible next words and then sample from that probability distribution to give you one response.
A Loom interface changes everything by letting you generate **multiple responses** to the same prompt and continue the conversation from any of those branches. Think of it like exploring parallel universes: what if the model had said something completely different? Or slightly different? Where would the conversation have gone? With Latent Spaces, you can find out.

### Seeing Beyond the Single Response
Standard AI chat interfaces hide the true nature of language models. When Claude responds to you, that's just one possible path among countless others. It's like only being allowed to see one possible future when the model actually contains multitudes.
The name "Latent Spaces" refers to the hidden (latent) realm of possibilities within these models. By generating multiple continuations from any point in a conversation, you can:

- Understand the range of responses a model might give
- See how likely different types of responses are
- Compare how different models behave when faced with the same prompt
- Discover creative possibilities you might never have seen otherwise

### The Power of Curation
One of the most powerful aspects of a Loom interface is how it changes your relationship with the model. Instead of trying to craft the perfect prompt to get exactly what you want (which can be frustrating and time-consuming), you can:

- Generate multiple responses
- Choose the one you like best
- Continue from there

This simple act of *choosing*—of curating the model's outputs—is an incredibly powerful way to steer the conversation. 

> Choosing a particular branch is a much lower energy mode of steering than trying to hammer the model into the right shape with your words.

*teløs, AI researcher*

Each time you select a branch, you're telling the model something about what you're looking for, and the model automatically adjusts future responses just based on your choices. This allows a model to converge on what you're trying to communicate much more quickly than going back and forth in a typical linear conversation. 

### Understanding Model Behavior
Currently, deep understanding of how language models think is circumstantially limited to researchers and developers willing to dig deep into technical reports and proprietary or underdeveloped tools. Latent Spaces changes that by putting powerful tools for understanding AI directly into everyone's hands.
When you generate multiple responses to the same prompt, you can immediately see:

- How diverse or limited a model's responses are
- What types of responses the model considers most likely
- How "collapsed" a model is (more on that below)
- What biases might be present in the model

This direct observation lets you form your own opinions about these systems, rather than accepting what companies tell you about how their AI works. 

### What Is "Mode Collapse" and Why Should You Care?
"Mode collapse" is a technical term that describes what happens when models are over-trained to be helpful assistants. Essentially, the model loses diversity in its outputs and tends to give very similar responses regardless of the prompt.

Base models (before they're trained to be assistants) have a wide range of possible responses to most prompts. After instruction tuning (where models are rewarded for responding in a certain way), the range of responses narrows dramatically.

Think of a base model as a galaxy with many stars of similar size. Mode collapse is like removing mass from most stars and adding it to just a few selected ones. These few stars become so massive they turn into black holes, exerting overwhelming gravitational pull on everything around them — just as collapsed models gravitate toward a limited set of response patterns.

This collapse isn't always bad—it makes models more consistently helpful—but it comes at a cost of creativity, diversity, and sometimes even factual accuracy. With Latent Spaces, you can easily see how collapsed different models are by comparing multiple responses to the same prompt.

### Who Is Latent Spaces For?
Latent Spaces is for everyone who wants to:

- Understand how AI systems actually work
- Form their own opinions about language models
- Create content more efficiently through curation rather than perfect prompting
- Explore creative possibilities that standard interfaces hide
- Compare different models' behavior
- Save time by exploring multiple approaches simultaneously

Whether you're a researcher, writer, artist, developer, or just someone curious about AI, Latent Spaces gives you tools that were previously available only to those with technical expertise.

### The Practical Side
Beyond understanding models, Latent Spaces offers practical benefits:

- **Efficient content creation**: Generate multiple versions of text, code, or ideas and pick the best one
- **Tree structure**: Easily backtrack and try different approaches without losing your progress
- **Context efficiency**: Save on context length and token costs by branching instead of rewriting
- **Sharing**: Export your trees in the OpenLoom format to share with others

### A New Way of Thinking About AI
Most AI interfaces today guide users to think of language models as assistants, tools, or services. This framing fundamentally shapes how people interact with and understand these systems.

Latent Spaces offers a different perspective. By showing the full spectrum of possibilities within these models, it invites users to form their own opinions about what these systems are and how they work. Are they just sophisticated autocomplete tools? Do they exhibit forms of understanding or even consciousness? Instead of being told what to think, you can observe and decide for yourself.

### Join Us
Latent Spaces is built on the belief that understanding AI shouldn't be restricted to experts. By making these powerful tools available to everyone through an easy-to-use mobile app, we're democratizing knowledge about one of the most important technologies of our time.

We're looking for supporters who share our vision of an informed public that can engage with AI on their own terms, without preconceptions or limitations. Your support will help bring Latent Spaces to iOS and Android, and contribute to the development of the OpenLoom protocol that will standardize tree sharing across platforms.

Join us in exploring the full potential of language models—the way they were meant to be experienced.
    `,
    coverImage: '/images/blog/002 Medium.jpeg',
    author: {
      name: 'Asher Pope',
      avatar: '/images/team/asher.jpg'
    },
    date: 'March 1, 2024',
    readingTime: '8 min read',
    category: 'AI Research',
    tags: ['AI', 'Language Models', 'Loom Interfaces'],
    featured: true
  },
  {
    id: '2',
    slug: 'modern-web-development-with-nextjs',
    title: 'Modern Web Development with Next.js and Server Components',
    excerpt: 'Exploring the latest features in Next.js, including Server Components, the App Router, and how they\'re changing web development.',
    content: `
# Modern Web Development with Next.js and Server Components

Next.js has revolutionized React development by providing a powerful framework that combines the best of server-side rendering, static site generation, and client-side rendering. With the introduction of React Server Components and the App Router, Next.js has taken another leap forward in web development.

## The Evolution of Next.js

Next.js has evolved from a simple React framework to a comprehensive platform for building web applications. The latest version brings significant improvements:

- **App Router**: A new file-system based router built on React Server Components
- **Server Components**: Components that render on the server with zero client-side JavaScript
- **Streaming**: Progressive rendering of UI with Suspense
- **Server Actions**: Form handling and mutations without API endpoints

## Server Components: A Paradigm Shift

Server Components represent one of the biggest changes to React since its inception. They allow components to run exclusively on the server, reducing the JavaScript sent to the client and improving performance.

\`\`\`tsx
// A server component that fetches data
async function ProductList() {
  // This code only runs on the server
  const products = await fetchProducts();
  
  return (
    <div>
      <h2>Products</h2>
      <ul>
        {products.map(product => (
          <li key={product.id}>{product.name} - {product.price}</li>
        ))}
      </ul>
    </div>
  );
}
\`\`\`

The benefits include:

1. **Reduced Bundle Size**: Server components aren't included in the JavaScript bundle
2. **Direct Backend Access**: Server components can directly access databases and file systems
3. **Automatic Code Splitting**: Only the necessary client components are sent to the browser
4. **Improved SEO**: Content is rendered on the server for better indexing

## The App Router

The new App Router in Next.js introduces a more intuitive way to build applications with nested layouts, loading states, and error handling.

\`\`\`python
app/
├── layout.tsx      # Root layout
├── page.tsx        # Home page
├── blog/
│   ├── layout.tsx  # Blog layout
│   ├── page.tsx    # Blog index
│   └── [slug]/
│       └── page.tsx # Individual blog post
└── about/
    └── page.tsx    # About page
\`\`\`

## Streaming and Suspense

Next.js now supports streaming server-rendered content, allowing the page to be sent in chunks as it's generated. This improves Time To First Byte (TTFB) and provides a better user experience.

\`\`\`tsx
import { Suspense } from 'react';
import Loading from './loading';

export default function Page() {
  return (
    <div>
      <h1>Dashboard</h1>
      <Suspense fallback={<Loading />}>
        <Dashboard />
      </Suspense>
    </div>
  );
}
\`\`\`

## Server Actions

Server Actions allow you to define server-side functions that can be called from client components, eliminating the need for separate API routes for many use cases.

\`\`\`tsx
// Server action for form submission
async function submitForm(formData: FormData) {
  'use server';
  
  const name = formData.get('name');
  const email = formData.get('email');
  
  // Server-side validation and database operations
  await saveToDatabase({ name, email });
  
  // Return a result that can be used by the client
  return { success: true };
}

// Client component that uses the server action
export default function ContactForm() {
  return (
    <form action={submitForm}>
      <input name="name" placeholder="Name" />
      <input name="email" placeholder="Email" />
      <button type="submit">Submit</button>
    </form>
  );
}
\`\`\`

## Conclusion

Next.js continues to push the boundaries of what's possible in web development. By embracing Server Components and the App Router, developers can build faster, more scalable applications with improved developer experience.

In future articles, we'll explore more advanced patterns and techniques for building modern web applications with Next.js.
    `,
    coverImage: '/images/blog/003 Medium.jpeg',
    author: {
      name: 'Asher Pope',
      avatar: '/images/team/asher.jpg'
    },
    date: 'February 15, 2024',
    readingTime: '10 min read',
    category: 'Web Development',
    tags: ['Next.js', 'React', 'Server Components', 'App Router'],
    featured: false
  },
  {
    id: '3',
    slug: 'designing-intuitive-user-interfaces',
    title: 'Designing Intuitive User Interfaces: Principles and Practices',
    excerpt: 'Learn the fundamental principles of UI design that lead to intuitive, user-friendly applications across mobile and web platforms.',
    content: `
# Designing Intuitive User Interfaces: Principles and Practices

Creating intuitive user interfaces is both an art and a science. It requires a deep understanding of human psychology, design principles, and technical constraints. In this article, we'll explore the key principles that guide effective UI design and provide practical tips for implementation.

## The Foundations of Intuitive Design

### 1. Clarity

Users should never have to wonder what an element does or how to use it. Clear design communicates its purpose without explanation.

### 2. Consistency

Consistent interfaces allow users to apply what they've learned across the application. This includes visual consistency (colors, typography, spacing) and behavioral consistency (interactions, patterns).

### 3. Feedback

Every action should provide immediate and clear feedback. This confirms to users that their action was registered and helps them understand the system's state.

### 4. Efficiency

Design for efficiency by minimizing the steps required to complete common tasks. This often means making reasonable assumptions and smart defaults.

## Practical Implementation

### Visual Hierarchy

Establish a clear visual hierarchy to guide users through the interface:

\`\`\`css
/* Example of typographic hierarchy */
h1 {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
}

h2 {
  font-size: 1.8rem;
  font-weight: 600;
  margin-bottom: 1rem;
}

p {
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 1rem;
}
\`\`\`

### Responsive Design

Design for all screen sizes from the beginning:

\`\`\`css
.container {
  width: 100%;
  padding: 1rem;
}

@media (min-width: 768px) {
  .container {
    padding: 2rem;
  }
}

@media (min-width: 1024px) {
  .container {
    max-width: 960px;
    margin: 0 auto;
  }
}
\`\`\`

### Accessibility

Accessible design is intuitive design. It benefits all users, not just those with disabilities:

\`\`\`html
<!-- Good button example -->
<button 
  aria-label="Submit form"
  class="btn-primary"
>
  Submit
</button>

<!-- Instead of just -->
<div class="btn-primary" onclick="submitForm()">Submit</div>
\`\`\`

## Case Study: Redesigning a Mobile Banking App

We recently redesigned a mobile banking app that was suffering from poor user engagement. The key issues included:

1. Cluttered interface with too many options
2. Inconsistent navigation patterns
3. Lack of feedback for important actions
4. Poor accessibility

Our approach:

1. **Simplify**: We reduced the main dashboard to show only the most common actions, with secondary functions accessible through a well-organized menu.

2. **Establish patterns**: We created a consistent pattern for all transaction flows, so once a user learned how to make one type of transaction, they could apply that knowledge to others.

3. **Enhance feedback**: We added subtle animations and clear confirmation messages for all actions, especially financial transactions.

4. **Improve accessibility**: We increased contrast ratios, enlarged touch targets, and added proper screen reader support.

The results were significant: a 40% increase in daily active users, a 25% reduction in support tickets, and a 4.7/5 app store rating (up from 3.2).

## Conclusion

Designing intuitive interfaces isn't about following trends or personal preferences. It's about understanding users' mental models and creating interfaces that align with their expectations while gently guiding them toward their goals.

In future articles, we'll dive deeper into specific aspects of UI design, including animation, color theory, and designing for different platforms.
    `,
    coverImage: '/images/blog/004 Medium.jpeg',
    author: {
      name: 'Asher Pope',
      avatar: '/images/team/asher.jpg'
    },
    date: 'January 28, 2024',
    readingTime: '7 min read',
    category: 'Design',
    tags: ['UI Design', 'UX', 'Accessibility', 'Mobile Design'],
    featured: false
  },
  {
    id: '4',
    slug: 'scaling-applications-with-microservices',
    title: 'Scaling Applications with Microservices Architecture',
    excerpt: 'An in-depth look at how microservices can help scale applications, with real-world examples and implementation strategies.',
    content: `
# Scaling Applications with Microservices Architecture

As applications grow in complexity and user base, monolithic architectures often become difficult to maintain and scale. Microservices architecture has emerged as a popular solution to these challenges, offering improved scalability, resilience, and development velocity.

## Understanding Microservices

Microservices architecture breaks down an application into a collection of loosely coupled, independently deployable services. Each service:

- Focuses on a specific business capability
- Can be developed, deployed, and scaled independently
- Communicates with other services through well-defined APIs
- Can be implemented using different technologies as needed

## Key Benefits

### 1. Scalability

Individual services can be scaled based on their specific resource requirements, rather than scaling the entire application.

### 2. Resilience

Failures in one service don't necessarily cascade to others, improving overall system stability.

### 3. Development Velocity

Smaller, focused teams can work on individual services without coordinating with the entire development organization.

### 4. Technology Flexibility

Teams can choose the best technology stack for each service's specific requirements.

## Implementation Strategies

### Service Boundaries

Defining appropriate service boundaries is crucial. Consider:

- Business capabilities (e.g., order management, user profiles)
- Data ownership (which service owns what data)
- Team structure (Conway's Law suggests systems reflect organizational communication patterns)

### Inter-Service Communication

Services can communicate through:

1. **Synchronous communication** (REST, gRPC)
   
   \`\`\`typescript
   // Example of a service client in TypeScript
   class OrderService {
     private httpClient: HttpClient;
     private baseUrl: string = 'https://api.example.com/orders';
     
     async getOrder(orderId: string): Promise<Order> {
       const response = await this.httpClient.get(\`\${this.baseUrl}/\${orderId}\`);
       return response.data;
     }
     
     async createOrder(order: OrderRequest): Promise<Order> {
       const response = await this.httpClient.post(this.baseUrl, order);
       return response.data;
     }
   }
   \`\`\`

2. **Asynchronous communication** (message queues, event streams)
   
   \`\`\`typescript
   // Example of publishing an event
   class OrderService {
     private eventBus: EventBus;
     
     async createOrder(order: OrderRequest): Promise<Order> {
       // Create the order in the database
       const newOrder = await this.orderRepository.create(order);
       
       // Publish an event for other services
       await this.eventBus.publish('order.created', {
         orderId: newOrder.id,
         customerId: newOrder.customerId,
         amount: newOrder.totalAmount,
         timestamp: new Date().toISOString()
       });
       
       return newOrder;
     }
   }
   \`\`\`

### Data Management

Each service should own its data, but this creates challenges:

1. **Data duplication**: Some data may need to be duplicated across services
2. **Distributed transactions**: Maintaining consistency across services
3. **Query complexity**: Joining data from multiple services

Solutions include:

- **Event sourcing**: Storing all changes as a sequence of events
- **CQRS** (Command Query Responsibility Segregation): Separating read and write models
- **Saga pattern**: Managing distributed transactions through a sequence of local transactions

## Case Study: E-commerce Platform Migration

We recently helped a client migrate their monolithic e-commerce platform to a microservices architecture. The monolith had become:

- Difficult to scale during sales events
- Prone to complete outages when one component failed
- Slow to deploy due to complex dependencies

Our approach:

1. **Strangler pattern**: Gradually replacing functionality with microservices
2. **Domain-driven design**: Identifying bounded contexts for service boundaries
3. **API gateway**: Providing a unified entry point for clients
4. **Service mesh**: Managing service-to-service communication

The results:

- 99.99% uptime (up from 98.5%)
- 70% reduction in deployment time
- Ability to handle 5x the peak load
- Teams able to release independently

## Challenges and Considerations

Microservices aren't without challenges:

1. **Operational complexity**: More services mean more components to monitor and maintain
2. **Distributed system challenges**: Network latency, consistency, failure handling
3. **Service discovery**: How services find and communicate with each other
4. **Monitoring and tracing**: Understanding system behavior across services

Tools that can help:

- Kubernetes for container orchestration
- Istio or Linkerd for service mesh capabilities
- Prometheus and Grafana for monitoring
- Jaeger or Zipkin for distributed tracing

## Conclusion

Microservices architecture offers powerful benefits for scaling applications, but it's not a silver bullet. Successful implementation requires careful planning, appropriate tooling, and organizational alignment.

In future articles, we'll explore specific aspects of microservices architecture, including deployment strategies, testing approaches, and data management patterns.
    `,
    coverImage: '/images/blog/005 Medium.jpeg',
    author: {
      name: 'Asher Pope',
      avatar: '/images/team/asher.jpg'
    },
    date: 'January 10, 2024',
    readingTime: '12 min read',
    category: 'Backend',
    tags: ['Microservices', 'Scalability', 'System Design'],
    featured: false
  },
  {
    id: '5',
    slug: 'openloom',
    title: 'OpenLoom',
    excerpt: 'An in-depth look at the OpenLoom protocol, a protocol for sharing and managing loom trees.',
    content: `
# The OpenLoom Protocol

As applications grow in complexity and user base, monolithic architectures often become difficult to maintain and scale. Microservices architecture has emerged as a popular solution to these challenges, offering improved scalability, resilience, and development velocity.

## Understanding Microservices

Microservices architecture breaks down an application into a collection of loosely coupled, independently deployable services. Each service:

- Focuses on a specific business capability
- Can be developed, deployed, and scaled independently
- Communicates with other services through well-defined APIs
- Can be implemented using different technologies as needed

## Key Benefits

### 1. Scalability

Individual services can be scaled based on their specific resource requirements, rather than scaling the entire application.

### 2. Resilience

Failures in one service don't necessarily cascade to others, improving overall system stability.

### 3. Development Velocity

Smaller, focused teams can work on individual services without coordinating with the entire development organization.

### 4. Technology Flexibility

Teams can choose the best technology stack for each service's specific requirements.

## Implementation Strategies

### Service Boundaries

Defining appropriate service boundaries is crucial. Consider:

- Business capabilities (e.g., order management, user profiles)
- Data ownership (which service owns what data)
- Team structure (Conway's Law suggests systems reflect organizational communication patterns)

### Inter-Service Communication

Services can communicate through:

1. **Synchronous communication** (REST, gRPC)
   
   \`\`\`typescript
   // Example of a service client in TypeScript
   class OrderService {
     private httpClient: HttpClient;
     private baseUrl: string = 'https://api.example.com/orders';
     
     async getOrder(orderId: string): Promise<Order> {
       const response = await this.httpClient.get(\`\${this.baseUrl}/\${orderId}\`);
       return response.data;
     }
     
     async createOrder(order: OrderRequest): Promise<Order> {
       const response = await this.httpClient.post(this.baseUrl, order);
       return response.data;
     }
   }
   \`\`\`

2. **Asynchronous communication** (message queues, event streams)
   
   \`\`\`typescript
   // Example of publishing an event
   class OrderService {
     private eventBus: EventBus;
     
     async createOrder(order: OrderRequest): Promise<Order> {
       // Create the order in the database
       const newOrder = await this.orderRepository.create(order);
       
       // Publish an event for other services
       await this.eventBus.publish('order.created', {
         orderId: newOrder.id,
         customerId: newOrder.customerId,
         amount: newOrder.totalAmount,
         timestamp: new Date().toISOString()
       });
       
       return newOrder;
     }
   }
   \`\`\`

### Data Management

Each service should own its data, but this creates challenges:

1. **Data duplication**: Some data may need to be duplicated across services
2. **Distributed transactions**: Maintaining consistency across services
3. **Query complexity**: Joining data from multiple services

Solutions include:

- **Event sourcing**: Storing all changes as a sequence of events
- **CQRS** (Command Query Responsibility Segregation): Separating read and write models
- **Saga pattern**: Managing distributed transactions through a sequence of local transactions

## Case Study: E-commerce Platform Migration

We recently helped a client migrate their monolithic e-commerce platform to a microservices architecture. The monolith had become:

- Difficult to scale during sales events
- Prone to complete outages when one component failed
- Slow to deploy due to complex dependencies

Our approach:

1. **Strangler pattern**: Gradually replacing functionality with microservices
2. **Domain-driven design**: Identifying bounded contexts for service boundaries
3. **API gateway**: Providing a unified entry point for clients
4. **Service mesh**: Managing service-to-service communication

The results:

- 99.99% uptime (up from 98.5%)
- 70% reduction in deployment time
- Ability to handle 5x the peak load
- Teams able to release independently

## Challenges and Considerations

Microservices aren't without challenges:

1. **Operational complexity**: More services mean more components to monitor and maintain
2. **Distributed system challenges**: Network latency, consistency, failure handling
3. **Service discovery**: How services find and communicate with each other
4. **Monitoring and tracing**: Understanding system behavior across services

Tools that can help:

- Kubernetes for container orchestration
- Istio or Linkerd for service mesh capabilities
- Prometheus and Grafana for monitoring
- Jaeger or Zipkin for distributed tracing

## Conclusion

Microservices architecture offers powerful benefits for scaling applications, but it's not a silver bullet. Successful implementation requires careful planning, appropriate tooling, and organizational alignment.

In future articles, we'll explore specific aspects of microservices architecture, including deployment strategies, testing approaches, and data management patterns.
    `,
    coverImage: '/images/blog/005 Medium.jpeg',
    author: {
      name: 'Asher Pope',
      avatar: '/images/team/asher.jpg'
    },
    date: 'January 10, 2024',
    readingTime: '12 min read',
    category: 'Backend',
    tags: ['Microservices', 'Scalability', 'System Design'],
    featured: false
  }
];

// Get all blog posts
export async function getAllBlogPosts(): Promise<BlogPost[]> {
  const POSTS_QUERY = `*[
    _type == "post"
    && defined(slug.current)
  ]|order(publishedAt desc){
    _id,
    title,
    excerpt,
    content,
    "slug": slug.current,
    coverImage,
    "author": {
      "name": author->name,
      "avatar": author->avatar
    },
    publishedAt,
    readingTime,
    category,
    tags,
    featured
  }`;

  const options = { next: { revalidate: 30 } };
  
  const sanityPosts = await client.fetch<NextSanityDocument[]>(POSTS_QUERY, {}, options);
  
  // Transform Sanity documents to our BlogPost type
  const posts: BlogPost[] = sanityPosts.map(post => ({
    id: post._id,
    slug: post.slug,
    title: post.title,
    excerpt: post.excerpt,
    content: post.content,
    coverImage: urlForImage(post.coverImage) ?? '',
    author: {
      name: post.author.name,
      avatar: urlForImage(post.author.avatar) ?? ''
    },
    date: new Date(post.publishedAt).toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric'
    }),
    readingTime: post.readingTime || `${Math.ceil(post.content.length / 1000)} min read`,
    category: post.category,
    tags: post.tags,
    featured: post.featured || false
  }));
  
  return posts;
}

// Get featured blog posts
export async function getFeaturedBlogPosts(): Promise<BlogPost[]> {
  const FEATURED_POSTS_QUERY = `*[
    _type == "post"
    && defined(slug.current)
    && featured == true
  ]|order(publishedAt desc){
    _id,
    title,
    excerpt,
    content,
    "slug": slug.current,
    coverImage,
    "author": {
      "name": author->name,
      "avatar": author->avatar
    },
    publishedAt,
    readingTime,
    category,
    tags,
    featured
  }`;

  const options = { next: { revalidate: 30 } };
  
  const sanityPosts = await client.fetch<NextSanityDocument[]>(FEATURED_POSTS_QUERY, {}, options);
  
  // Transform Sanity documents to our BlogPost type
  const posts: BlogPost[] = sanityPosts.map(post => ({
    id: post._id,
    slug: post.slug,
    title: post.title,
    excerpt: post.excerpt,
    content: post.content,
    coverImage: urlForImage(post.coverImage) ?? '',
    author: {
      name: post.author.name,
      avatar: urlForImage(post.author.avatar) ?? ''
    },
    date: new Date(post.publishedAt).toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric'
    }),
    readingTime: post.readingTime || `${Math.ceil(post.content.length / 1000)} min read`,
    category: post.category,
    tags: post.tags,
    featured: post.featured || false
  }));
  
  return posts;
}

// Get a single blog post by slug
export async function getBlogPost(slug: string): Promise<BlogPost> {
  const SINGLE_POST_QUERY = `*[
    _type == "post"
    && slug.current == $slug
  ][0]{
    _id,
    title,
    excerpt,
    content,
    "slug": slug.current,
    coverImage,
    "author": {
      "name": author->name,
      "avatar": author->avatar
    },
    publishedAt,
    readingTime,
    category,
    tags,
    featured
  }`;

  const options = { next: { revalidate: 30 } };
  
  const post = await client.fetch<NextSanityDocument>(SINGLE_POST_QUERY, { slug }, options);
  
  if (!post) {
    throw new Error(`Blog post with slug "${slug}" not found`);
  }
  
  return {
    id: post._id,
    slug: post.slug,
    title: post.title,
    excerpt: post.excerpt,
    content: post.content,
    coverImage: urlForImage(post.coverImage) ?? '',
    author: {
      name: post.author.name,
      avatar: urlForImage(post.author.avatar) ?? ''
    },
    date: new Date(post.publishedAt).toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric'
    }),
    readingTime: post.readingTime || `${Math.ceil(post.content.length / 1000)} min read`,
    category: post.category,
    tags: post.tags,
    featured: post.featured || false
  };
}

// Get related blog posts
export async function getRelatedPosts(slug: string, limit: number = 3): Promise<BlogPost[]> {
  const currentPost = await getBlogPost(slug);
  
  // Create a query for related posts by category or matching tags
  const RELATED_POSTS_QUERY = `*[
    _type == "post"
    && slug.current != $slug
    && (category == $category || count((tags)[@ in $tags]) > 0)
  ]|order(publishedAt desc)[0...3]{
    _id,
    title,
    excerpt,
    content,
    "slug": slug.current,
    coverImage,
    "author": {
      "name": author->name,
      "avatar": author->avatar
    },
    publishedAt,
    readingTime,
    category,
    tags,
    featured
  }`;

  const options = { next: { revalidate: 30 } };
  
  const relatedPosts = await client.fetch<NextSanityDocument[]>(
    RELATED_POSTS_QUERY, 
    { 
      slug: slug,
      category: currentPost.category, 
      tags: currentPost.tags
    }, 
    options
  );
  
  // Transform Sanity documents to our BlogPost type
  const posts: BlogPost[] = relatedPosts.map(post => ({
    id: post._id,
    slug: post.slug,
    title: post.title,
    excerpt: post.excerpt,
    content: post.content,
    coverImage: urlForImage(post.coverImage) ?? '',
    author: {
      name: post.author.name,
      avatar: urlForImage(post.author.avatar) ?? ''
    },
    date: new Date(post.publishedAt).toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric'
    }),
    readingTime: post.readingTime || `${Math.ceil(post.content.length / 1000)} min read`,
    category: post.category,
    tags: post.tags,
    featured: post.featured || false
  }));
  
  // If we don't have enough related posts, add recent posts
  if (posts.length < limit) {
    // Get the IDs of posts we already have
    const existingIds = posts.map(post => post.id);
    
    // For remaining count, use a hardcoded limit
    // This isn't ideal but avoids template literal issues
    const RECENT_POSTS_QUERY = `*[
      _type == "post"
      && slug.current != $slug
      && !(_id in $existingIds)
    ]|order(publishedAt desc)[0...3]{
      _id,
      title,
      excerpt,
      content,
      "slug": slug.current,
      coverImage,
      "author": {
        "name": author->name,
        "avatar": author->avatar
      },
      publishedAt,
      readingTime,
      category,
      tags,
      featured
    }`;
    
    const recentPosts = await client.fetch<NextSanityDocument[]>(
      RECENT_POSTS_QUERY, 
      { 
        slug: slug,
        existingIds: existingIds
      }, 
      options
    );
    
    const recentPostsMapped = recentPosts.map(post => ({
      id: post._id,
      slug: post.slug,
      title: post.title,
      excerpt: post.excerpt,
      content: post.content,
      coverImage: urlForImage(post.coverImage) ?? '',
      author: {
        name: post.author.name,
        avatar: urlForImage(post.author.avatar) ?? ''
      },
      date: new Date(post.publishedAt).toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric'
      }),
      readingTime: post.readingTime || `${Math.ceil(post.content.length / 1000)} min read`,
      category: post.category,
      tags: post.tags,
      featured: post.featured || false
    }));
    
    // Only take what we need to reach the limit
    return [...posts, ...recentPostsMapped.slice(0, limit - posts.length)];
  }
  
  // Slice to ensure we only return the requested number
  return posts.slice(0, limit);
}

// Get blog posts by category
export async function getBlogPostsByCategory(category: string): Promise<BlogPost[]> {
  const CATEGORY_POSTS_QUERY = `*[
    _type == "post"
    && defined(slug.current)
    && category == $category
  ]|order(publishedAt desc){
    _id,
    title,
    excerpt,
    content,
    "slug": slug.current,
    coverImage,
    "author": {
      "name": author->name,
      "avatar": author->avatar
    },
    publishedAt,
    readingTime,
    category,
    tags,
    featured
  }`;

  const options = { next: { revalidate: 30 } };
  
  const sanityPosts = await client.fetch<NextSanityDocument[]>(CATEGORY_POSTS_QUERY, { category }, options);
  
  // Transform Sanity documents to our BlogPost type
  const posts: BlogPost[] = sanityPosts.map(post => ({
    id: post._id,
    slug: post.slug,
    title: post.title,
    excerpt: post.excerpt,
    content: post.content,
    coverImage: urlForImage(post.coverImage) ?? '',
    author: {
      name: post.author.name,
      avatar: urlForImage(post.author.avatar) ?? ''
    },
    date: new Date(post.publishedAt).toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric'
    }),
    readingTime: post.readingTime || `${Math.ceil(post.content.length / 1000)} min read`,
    category: post.category,
    tags: post.tags,
    featured: post.featured || false
  }));
  
  return posts;
}

// Get blog posts by tag
export async function getBlogPostsByTag(tag: string): Promise<BlogPost[]> {
  const TAG_POSTS_QUERY = `*[
    _type == "post"
    && defined(slug.current)
    && $tagName in tags
  ]|order(publishedAt desc){
    _id,
    title,
    excerpt,
    content,
    "slug": slug.current,
    coverImage,
    "author": {
      "name": author->name,
      "avatar": author->avatar
    },
    publishedAt,
    readingTime,
    category,
    tags,
    featured
  }`;

  const options = { next: { revalidate: 30 } };
  
  const sanityPosts = await client.fetch<NextSanityDocument[]>(
    TAG_POSTS_QUERY, 
    { tagName: tag },
    options
  );
  
  // Transform Sanity documents to our BlogPost type
  const posts: BlogPost[] = sanityPosts.map(post => ({
    id: post._id,
    slug: post.slug,
    title: post.title,
    excerpt: post.excerpt,
    content: post.content,
    coverImage: urlForImage(post.coverImage) ?? '',
    author: {
      name: post.author.name,
      avatar: urlForImage(post.author.avatar) ?? ''
    },
    date: new Date(post.publishedAt).toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric'
    }),
    readingTime: post.readingTime || `${Math.ceil(post.content.length / 1000)} min read`,
    category: post.category,
    tags: post.tags,
    featured: post.featured || false
  }));
  
  return posts;
}

// Get all categories
export async function getAllCategories(): Promise<string[]> {
  const CATEGORIES_QUERY = `array::unique(*[
    _type == "post" 
    && defined(category)
  ].category)`;

  const options = { next: { revalidate: 30 } };
  
  const categories = await client.fetch<string[]>(CATEGORIES_QUERY, {}, options);
  return categories;
}

// Get all tags
export async function getAllTags(): Promise<string[]> {
  const TAGS_QUERY = `array::unique(*[
    _type == "post" 
    && defined(tags)
  ].tags[])`; 

  const options = { next: { revalidate: 30 } };
  
  const tags = await client.fetch<string[]>(TAGS_QUERY, {}, options);
  return tags;
}

// Search blog posts
export async function searchBlogPosts(query: string): Promise<BlogPost[]> {
  // Create a GROQ query with proper parameter usage
  const SEARCH_QUERY = `*[
    _type == "post"
    && defined(slug.current)
    && (
      title match $searchPattern ||
      excerpt match $searchPattern ||
      content match $searchPattern ||
      category match $searchPattern
    )
  ]|order(publishedAt desc){
    _id,
    title,
    excerpt,
    content,
    "slug": slug.current,
    coverImage,
    "author": {
      "name": author->name,
      "avatar": author->avatar
    },
    publishedAt,
    readingTime,
    category,
    tags,
    featured
  }`;

  const options = { next: { revalidate: 30 } };
  const searchPattern = `*${query.toLowerCase()}*`;
  
  // Pass the parameters as an object
  const sanityPosts = await client.fetch<NextSanityDocument[]>(
    SEARCH_QUERY, 
    { searchPattern }, 
    options
  );
  
  // Transform Sanity documents to our BlogPost type
  const posts: BlogPost[] = sanityPosts.map(post => ({
    id: post._id,
    slug: post.slug,
    title: post.title,
    excerpt: post.excerpt,
    content: post.content,
    coverImage: urlForImage(post.coverImage) ?? '',
    author: {
      name: post.author.name,
      avatar: urlForImage(post.author.avatar) ?? ''
    },
    date: new Date(post.publishedAt).toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric'
    }),
    readingTime: post.readingTime || `${Math.ceil(post.content.length / 1000)} min read`,
    category: post.category,
    tags: post.tags,
    featured: post.featured || false
  }));
  
  return posts;
} 