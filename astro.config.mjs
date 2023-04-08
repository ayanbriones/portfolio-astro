import { defineConfig } from 'astro/config'
import react from '@astrojs/react'
import tailwind from '@astrojs/tailwind'

import image from '@astrojs/image'

// https://astro.build/config
export default defineConfig({
  integrations: [react(), tailwind(), image()],
  // site: 'https://portfolio.bryanthbriones.com/',
  // base: '/public_html/portfolio-bryanthbriones-com',
})
