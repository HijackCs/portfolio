export default defineEventHandler(async (event) => {
  // Récupérer tous les articles de blog
  // queryCollection est auto-importé par Nuxt Content
  const blogPosts = await queryCollection(event, 'blog').all()

  // Pages statiques
  const staticPages = [
    { loc: '/', priority: 1.0, changefreq: 'weekly' },
    { loc: '/blog', priority: 0.9, changefreq: 'weekly' },
    { loc: '/projects', priority: 0.9, changefreq: 'monthly' },
    { loc: '/contact', priority: 0.7, changefreq: 'monthly' },
    { loc: '/simulateur-prix', priority: 0.95, changefreq: 'monthly' },
  ]

  // Générer les URLs dynamiques pour le blog
  const dynamicPages = blogPosts.map(post => ({
    loc: post.path,
    lastmod: post.published,
    priority: 0.8,
    changefreq: 'monthly'
  }))

  const allPages = [...staticPages, ...dynamicPages]
  const baseUrl = 'https://hugoschroder.dev'

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${allPages.map(page => `
  <url>
    <loc>${baseUrl}${page.loc}</loc>
    ${page.lastmod ? `<lastmod>${new Date(page.lastmod).toISOString()}</lastmod>` : ''}
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join('')}
</urlset>`

  // Définir le header Content-Type pour que le navigateur sache que c'est du XML
  setResponseHeader(event, 'Content-Type', 'application/xml')
  
  return sitemap
})
