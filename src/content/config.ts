import { defineCollection, z } from 'astro:content';

const projects = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    heroImage: z.string().optional(),
    pubDate: z.date().optional(),
    tags: z.array(z.string()).optional(),
    featured: z.boolean().optional(),
    updatedDate: z.date().optional(),
  }),
});

const publications = defineCollection({
  schema: z.object({
    title: z.string(),
    authors: z.string(),
    pubDate: z.string(),
    description: z.string(),
    url: z.string().url(),
  }),
});

export const collections = { projects, publications };