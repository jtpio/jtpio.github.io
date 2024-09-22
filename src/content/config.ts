import { defineCollection, z } from "astro:content";

const repos = defineCollection({
  type: "data",
  schema: z.object({
    name: z.string(),
    tags: z.array(z.string()),
    draft: z.boolean().optional(),
    repoUrl: z.string().optional(),
    weight: z.number().optional(),
  }),
});

const talks = defineCollection({
  type: "data",
  schema: z.object({
    event: z.string(),
    date: z.coerce.date(),
    title: z.string(),
    location: z.string().optional(),
    tags: z.array(z.string()),
    videoUrl: z.string().optional(),
    description: z.string().optional(),
  }),
});

const tutorials = defineCollection({
  type: "data",
  schema: z.object({
    event: z.string(),
    date: z.coerce.date(),
    title: z.string(),
    location: z.string().optional(),
    tags: z.array(z.string()),
    videoUrl: z.string().optional(),
    description: z.string().optional(),
  }),
});

const jupyterTips = defineCollection({
  type: "data",
  schema: z.object({
    date: z.coerce.date(),
    title: z.string(),
    location: z.string().optional(),
    tags: z.array(z.string()),
    videoUrl: z.string().optional(),
    description: z.string().optional(),
  }),
});

const blog = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    tags: z.array(z.string()),
    draft: z.boolean().optional(),
    external: z
      .object({
        name: z.string(),
        url: z.string().url(),
      })
      .optional(),
  }),
});

const legal = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
  }),
});

export const collections = {
  blog,
  jupyterTips,
  legal,
  repos,
  talks,
  tutorials,
};
