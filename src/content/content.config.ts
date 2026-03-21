import { defineCollection, z } from 'astro:content';
// importar glob desde astro/loaders
import { glob } from 'astro/loaders';

const projects = defineCollection({
    loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/projects' }),
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
    loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/publications' }),
    schema: z.object({
        title: z.string(),
        authors: z.string(),
        pubDate: z.string(),
        description: z.string(),
        url: z.string().optional(),
    }),
});

export const collections = { projects, publications };
