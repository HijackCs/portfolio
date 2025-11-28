import { defineContentConfig, defineCollection, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    blog: defineCollection({
      type: 'page',
      source: 'blog/*.md',
      schema: z.object({
        title: z.string(),
        description: z.string(),
        published: z.date(),
        category: z.string(),
        image: z.string().optional(),
        tags: z.array(z.string()),
        featured: z.boolean().default(false),
        readingTime: z.number(),
        author: z.object({
          name: z.string(),
          bio: z.string(),
          avatar: z.string().optional()
        })
      })
    })
  }
})
