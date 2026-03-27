import { defineCollection, z, reference } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
    loader: glob({ pattern: '**/*.mdx', base: './src/content/projects' }),
    schema: z.object({
        title: z.string(),
        description: z.string(),
        heroImage: z.string().optional(),
        pubDate: z.date().optional(),
        tags: z.array(z.string()).optional(),
        featured: z.boolean().optional(),
        updatedDate: z.date().optional(),

        lead: z.string().optional(),
        status: z.string().optional(),
        collaborators: z.array(z.string()).optional(),

        relatedSoftware: z.array(z.string()).optional(),
    }),
});

const software = defineCollection({
    loader: glob({ pattern: '**/*.mdx', base: './src/content/software' }),
    schema: z.object({
        title: z.string(),
        description: z.string(),
        version: z.string().optional(),
        technologies: z.array(z.string()).optional(),
        heroImage: z.string().optional(),
        relatedProjectId: z.string().optional(),
    }),
});

const publications = defineCollection({
    loader: glob({ pattern: '**/*.mdx', base: './src/content/publications' }),
    schema: z.object({
        title: z.string(),
        authors: z.string(),
        pubDate: z.string(),
        description: z.string(),
        url: z.string().optional(),
    }),
});

export const collections = { projects, software, publications };
