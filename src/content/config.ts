import { defineCollection, z } from 'astro:content';

const dispatchesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.date(),
    tag: z.string().optional(),
    description: z.string().optional(),
  }),
});

export const collections = {
  'dispatches': dispatchesCollection,
};
