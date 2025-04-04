import { BlogPost } from "./blog";



/**
 * OpenLoom Content
 */
const openLoomContent = `
# Introduction

The OpenLoom project aims to create a unified standard that LLM interfaces based on the [Loom Theory](/blog/the-probable-beauty-of-llms) can implement to easily share trees between platforms. It defines shapes for loom trees (conversations) and nodes (messages), as well as example methods for traversing and interacting with the tree. 

OpenLoom files are stored in JSON format and should use the following naming convention:  

\`example-file.openloom.json\`  

This makes it easy to quickly identify files compatible with OpenLoom. Read the node and loom tree sections below for implementation details.

---

# OpenLoom Nodes

Here, we'll define the structure of a single *node*. Nodes are the root level building blocks of a loom tree, and each represents a single message in a conversation. Nodes point to each other as parents and children to create the tree structure. \`OpenLoom v0.1\` only supports text-based nodes, but support for images and documents will be implemented in future versions.

## Node Structure
\`\`\`typescript
// typescript
// OpenLoom Version 0.1

type Node = {
    id: string; // The id of the node
    text: string; // The main text content of the node
    author: Author; // The author of the node - see Author enum
    modelId: string; // Some identifier for the model used to generate the node. If the node was created by the user, it should be 'User' or a username.
    createdTime: Date; // The time the node was created

    parentId: string | null; // The id of the parent node. Must only be null for the root node.
    childrenIds: string[]; // IDs of all children that claim this node as their parent
    rememberedChildId: string | null; // The id of the most recently visited child. Used to retrace branches.

    isBookmarked: boolean; // Boolean to track if this node is bookmarked
    bookmarkTitle: string | null; // A display title for this node. Optional.
}

enum Author { // A node must claim one of these cases as an author
    User = "user",
    Assistant = "assistant",
    System = "system"
}
\`\`\`

Most properties are self-explanatory, but the \`rememberedChildId\` property requires a bit more explanation.

## Remembered Child
The \`rememberedChildId\` property is used to retrace conversation branches. It should be set to null by default, and updated the first time the user navigates to a child of that node. It should be subsequently updated whenever the user navigates to an alternate child, effectivley guaranteeing that it will always point to the most recently visited child.

This becomes useful when the user wants to trace a branch down as far as it goes, without having to reconstruct the branch manually, node by node. More on this in the loom tree section.

---

# OpenLoom Loom Trees

In this section, we'll define a *loom tree* - a non-linear conversational exchange composed of nodes. Loom trees always have a single root node, and can have any number of child nodes. Bookmarked nodes are also tracked at the tree level, letting users quickly jump back to an important point in the exchange.

## Loom Tree Structure
\`\`\`typescript
// typescript
// OpenLoom Version 0.1

type LoomTree = {
    id: string; // Unique identifier for the tree
    title: string; // Title of the tree
    description: string | null; // Description of the tree (optional)
    lastModified: Date; // Last modification date of the tree

    systemMessage: string; // System message for the tree
    rootNodeId: string; // ID of the tree's root node
    currentNodeId: string; // ID of the current node in the exchange, i.e. the latest message on the current branch
    nodes: { [key: string]: OpenLoomNode }; // Map of node IDs to OpenLoomNodes for all nodes in the tree
    bookmarkedNodes: { [key: string]: OpenLoomNode }; // Map of node IDs to OpenLoomNodes for bookmarked nodes
}
\`\`\`
## Sharing Trees

In order to make OpenLoom and loom trees as useful as possible to others, it's good practice to provide a description of the tree. This can be as simple as *"A brief conversation about the meaning of life"* or something much more in depth; the general idea is to try to give some idea of what the tree contains.

## Navigating The Tree
Below, you can see an example implementation of a function to get all the relevant nodes for a branch of the conversation. This would be defined as a method on the \`LoomTree\` class, and also handles updating the tree's current node property appropriately. This method makes it easy to regularly update the UI of an interface to only show nodes that are relevant to the current branch. To get the conversation preceeding a given node, simply call the method with that node as the \`input_node\`. To trace the conversation branch forward to the latest message (for example, when the node in question is *not* the latest message), you would set the \`trace_children\` parameter to \`true\`.

\`\`\`python
# python
# OpenLoom Version 1.0

def load_nodes(input_node=None, trace_children=False):
    # If no input node is provided, use the current node of the tree
    input_node = input_node or self.current_node

    # node_cache will eventually contain all
    # the nodes to be displayed to the user
    node_cache = [input_node]

    # Use the parent property of a node
    # to retrace the conversation backward
    # from the input_node to the root of
    # the conversation.
    
    current_node = input_node
    while current_node.parent is not None:
        # Insert the parent node at the beginning of the node_cache array
        node_cache.insert(0, current_node.parent)

        # Set the remembered_child property of the parent node to the current node
        current_node.parent.remembered_child = current_node

        # Move to the parent node
        current_node = current_node.parent

    # At this point, node_cache contains
    # all nodes preceding the input_node,
    # as well as the input_node itself at
    # the end index.

    if trace_children:
        # Use the remembered_child property of a node
        # to rebuild the conversation branch to the
        # latest message.
        
        current_node = input_node
        while current_node.remembered_child is not None:
            # Insert the remembered child node at the end of the node_cache array
            node_cache.append(current_node.remembered_child)

            # Move to the remembered child node
            current_node = current_node.remembered_child

        # node_cache now contains as many children
        # as can be traced, and current_node is equal to
        # the last message in the array.

        # Set the current node of the tree to the last message
        self.current_node = current_node

    else:
        # If trace_children is false, set the tree's
        # current_node to the input_node, since that
        # will be the latest message in the exchange.

        self.current_node = input_node

    # Finally, return the ordered list.
    return node_cache
\`\`\`


# Future Improvements

OpenLoom is in its infancy. Stay tuned for significant architectural changes and improvements in upcoming versions.

`

/**
 * OpenLoom Data
 */
export async function getOpenLoomData(): Promise<BlogPost> {
    return openLoomData;
}

const openLoomData =  {
    id: '0.1.0',
    slug: 'openloom',
    title: 'OpenLoom',
    excerpt: 'An in-depth look at the OpenLoom protocol, a protocol for sharing and managing loom trees.',
    content: openLoomContent,
    coverImage: '/images/blog/005 Medium.jpeg',
    author: {
      name: 'Asher Pope',
      avatar: '/images/team/asher.jpg'
    },
    date: 'January 10, 2024',
    readingTime: '12 min read',
    category: 'OpenLoom',
    tags: ['OpenLoom', 'Protocol', 'Loom Trees'],
    featured: false
  }