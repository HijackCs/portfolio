import { promises as fs } from 'fs'
import { join } from 'path'
import matter from 'gray-matter'

export default defineEventHandler(async (event) => {
  try {
    // Read markdown files directly from content/blog directory
    const contentDir = join(process.cwd(), 'content', 'blog')
    
    // Check if directory exists
    try {
      await fs.access(contentDir)
    } catch {
      console.log('[API] Content directory not found, returning empty array')
      return []
    }
    
    const files = await fs.readdir(contentDir)
    const markdownFiles = files.filter(file => file.endsWith('.md'))
    
    const articles = await Promise.all(
      markdownFiles.map(async (file) => {
        const filePath = join(contentDir, file)
        const fileContent = await fs.readFile(filePath, 'utf-8')
        const { data: frontmatter, content } = matter(fileContent)
        
        return {
          _path: `/blog/${file.replace('.md', '')}`,
          ...frontmatter,
          content
        }
      })
    )
    
    // Sort by published date (newest first)
    const sortedArticles = articles.sort((a, b) => {
      const dateA = new Date(a.published || '1970-01-01')
      const dateB = new Date(b.published || '1970-01-01')
      return dateB.getTime() - dateA.getTime()
    })
    
    console.log(`[API] Found ${sortedArticles.length} blog articles`)
    return sortedArticles
  } catch (error) {
    console.error('[API] Error fetching blog articles:', error)
    // Return empty array on error
    return []
  }
})
