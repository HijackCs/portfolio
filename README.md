# Hugo Schroder Portfolio

A modern, elegant portfolio and blog built with Nuxt 4, Vue 3, TailwindCSS, and @nuxt/content. Showcasing my work, skills, and insights as a freelance web developer.

---

## Features

- **Personal Portfolio**: Highlighting projects, skills, and services.
- **Integrated Blog**: Technical articles, tutorials, and thoughts on web development.
- **Modern UI**: Responsive, accessible design with TailwindCSS and custom layouts.
- **Content Management**: Blog powered by @nuxt/content for easy markdown-based publishing.
- **SEO Optimized**: Meta tags and Open Graph support for improved discoverability.
- **Fast & Scalable**: Built with Nuxt 4 and Vue 3 for high performance.

---

## Getting Started

### Prerequisites
- Node.js (v18+ recommended)
- npm, pnpm, yarn, or bun

### Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/yourusername/portfolio.git
cd portfolio
npm install # or yarn, pnpm, bun
```

### Development

Start the development server:

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to view your portfolio.

### Production

Build for production:

```bash
npm run build
npm run preview
```

---

## Project Structure

- `app/pages` — Main pages: Home, About, Projects, Blog, Contact
- `app/pages/blog` — Blog index and dynamic post pages
- `components` — Reusable UI components
- `public` — Static assets (images, favicon, etc.)
- `nuxt.config.ts` — Nuxt configuration

---

## Blog

- Write posts in Markdown using @nuxt/content
- Dynamic routing for each article (`/blog/[slug]`)
- Featured articles, tags, categories, and reading time
- Author and SEO meta information per post

---

## Customization

- Edit `nuxt.config.ts` for site metadata and modules
- Add or update blog posts in the content directory
- Customize styles via TailwindCSS

---

## Credits

Created by [Hugo Schroder](https://hugoschroder.dev)

---

## License

[MIT](LICENSE)
