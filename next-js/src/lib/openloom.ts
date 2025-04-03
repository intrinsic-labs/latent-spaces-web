import { BlogPost } from "./blog";



/**
 * OpenLoom Content
 */
const openLoomContent = `
# The OpenLoom Protocol

## Introduction

The OpenLoom Protocol is a protocol for sharing and managing loom trees.


`

/**
 * OpenLoom Data
 */
export async function getOpenLoomData(): Promise<BlogPost> {
    return openLoomData;
}

const openLoomData =  {
    id: '5',
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