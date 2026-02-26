const escapeXml = (value: string) => {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;')
}

export default defineEventHandler(async (event) => {
  const baseUrl = 'https://hugoschroder.dev'
  const posts = await queryCollection(event, 'blog')
    .order('published', 'DESC')
    .limit(50)
    .all()

  const items = posts.map((post) => {
    const title = escapeXml(post.title || '')
    const description = escapeXml(post.description || '')
    const link = `${baseUrl}${post.path}`
    const pubDate = post.published ? new Date(post.published).toUTCString() : new Date().toUTCString()
    return `
      <item>
        <title>${title}</title>
        <link>${link}</link>
        <guid>${link}</guid>
        <pubDate>${pubDate}</pubDate>
        <description>${description}</description>
      </item>`
  }).join('')

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>Hugo Schroder - Blog</title>
    <link>${baseUrl}/blog</link>
    <description>Articles sur le développement web, le SEO technique et le freelance.</description>
    <language>fr-FR</language>
    ${items}
  </channel>
</rss>`

  setResponseHeader(event, 'Content-Type', 'application/rss+xml')
  return rss
})
