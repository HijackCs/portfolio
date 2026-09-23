// Génère public/og-image.png (1200x630) - image OG/Twitter par défaut du site.
// Rasterisé via sharp (déjà présent grâce à @nuxt/image). Lancer: node scripts/generate-og.mjs
import sharp from 'sharp'
import { fileURLToPath } from 'node:url'
import { dirname, resolve } from 'node:path'

const __dirname = dirname(fileURLToPath(import.meta.url))
const out = resolve(__dirname, '../public/og-image.png')

const W = 1200
const H = 630

const svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="sig" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#3b82f6"/>
      <stop offset="1" stop-color="#7c3aed"/>
    </linearGradient>
    <radialGradient id="orbA" cx="0.5" cy="0.5" r="0.5">
      <stop offset="0" stop-color="#3b82f6" stop-opacity="0.35"/>
      <stop offset="1" stop-color="#3b82f6" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="orbB" cx="0.5" cy="0.5" r="0.5">
      <stop offset="0" stop-color="#7c3aed" stop-opacity="0.35"/>
      <stop offset="1" stop-color="#7c3aed" stop-opacity="0"/>
    </radialGradient>
    <pattern id="grid" width="48" height="48" patternUnits="userSpaceOnUse">
      <path d="M48 0H0V48" fill="none" stroke="#232b3d" stroke-width="1" stroke-opacity="0.5"/>
    </pattern>
  </defs>

  <rect width="${W}" height="${H}" fill="#0d1117"/>
  <rect width="${W}" height="${H}" fill="url(#grid)"/>
  <circle cx="120" cy="180" r="320" fill="url(#orbA)"/>
  <circle cx="1080" cy="470" r="300" fill="url(#orbB)"/>

  <rect x="80" y="250" width="56" height="6" rx="3" fill="url(#sig)"/>

  <text x="78" y="160" font-family="Helvetica, Arial, sans-serif" font-size="26" letter-spacing="6" fill="#3b82f6" font-weight="600">HUGOSCHRODER.DEV</text>

  <text x="76" y="350" font-family="Helvetica, Arial, sans-serif" font-size="86" fill="#f0f4ff" font-weight="700">Hugo Schroder</text>
  <text x="80" y="430" font-family="Helvetica, Arial, sans-serif" font-size="40" fill="#c3cbe0" font-weight="600">Ingénieur logiciel</text>

  <text x="80" y="510" font-family="Helvetica, Arial, sans-serif" font-size="28" fill="#8892a4" font-weight="400">Applications mobiles · SaaS · IoT &amp; systèmes embarqués</text>
</svg>`

await sharp(Buffer.from(svg)).png().toFile(out)
console.log('OG image written:', out)
