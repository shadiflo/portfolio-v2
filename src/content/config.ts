import { defineCollection, z } from 'astro:content';

const posts = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.date(),
    category: z.enum([
      'frontend',
      'backend',
      'gaming',
      'ai',
    ]),
    tags: z.array(z.string()).default([]),
    image: z.string().optional(),
    author: z.string().default('Florin'),
  }),
});

export const collections = { posts };
