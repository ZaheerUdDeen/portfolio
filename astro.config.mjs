import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from "@astrojs/tailwind";
import react from '@astrojs/react';
// https://astro.build/config
import image from "@astrojs/image";

// https://astro.build/config
export default defineConfig({
  // site: 'https://astro-modern-personal-website.netlify.app',
  site: 'https://ZaheerUdDeen.github.io',
  base: '/portfolio',
  integrations: [mdx(), sitemap(), tailwind(), react(), image(
    {
      serviceEntryPoint: '@astrojs/image/sharp',
      cacheDir: "./.cache/image",
      logLevel: 'debug',
    }
  )]
});