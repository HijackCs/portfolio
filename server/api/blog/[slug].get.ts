import { promises as fs } from 'fs'
import { join } from 'path'
import matter from 'gray-matter'
import { marked } from 'marked'

export default defineEventHandler(async (event) => {
  const slug = getRouterParam(event, 'slug')
  
  if (!slug) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Slug is required'
    })
  }
  
  try {
    // Read the specific markdown file
    const contentDir = join(process.cwd(), 'content', 'blog')
    const filePath = join(contentDir, `${slug}.md`)
    
    // Check if file exists
    try {
      await fs.access(filePath)
    } catch {
      throw createError({
        statusCode: 404,
        statusMessage: 'Article not found'
      })
    }
    
    const fileContent = await fs.readFile(filePath, 'utf-8')
    const { data: frontmatter, content } = matter(fileContent)
    
    // Convert markdown to HTML
    const htmlContent = marked(content)
    
    const article = {
      _path: `/blog/${slug}`,
      slug,
      ...frontmatter,
      content: htmlContent
    }
    
    console.log(`[API] Found article: ${(frontmatter as any).title || slug}`)
    return article
  } catch (error: any) {
    if (error.statusCode) {
      throw error
    }
    console.error('[API] Error fetching article:', error)
    throw createError({
      statusCode: 500,
      statusMessage: 'Internal server error'
    })
  }
})
