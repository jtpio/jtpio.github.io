import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const repos = defineCollection({
  loader: glob({ pattern: "**/*.yaml", base: "./src/content/repos" }),
  schema: z.object({
    name: z.string(),
    tags: z.array(z.string()),
    draft: z.boolean().optional(),
    repoUrl: z.string().optional(),
    weight: z.number().optional(),
  }),
});

const talks = defineCollection({
  loader: glob({ pattern: "**/*.yaml", base: "./src/content/talks" }),
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
  loader: glob({ pattern: "**/*.yaml", base: "./src/content/tutorials" }),
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
  loader: glob({ pattern: "**/*.yaml", base: "./src/content/jupyterTips" }),
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
  loader: glob({
    pattern: "**/*.{md,mdx}",
    base: "./src/content/blog",
    generateId: ({ data }) => data.slug as string,
  }),
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
  loader: glob({ pattern: "**/*.md", base: "./src/content/legal" }),
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
