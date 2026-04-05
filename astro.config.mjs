// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
    site: 'https://example-domain-please-replace.com',
    vite: {
        plugins: [tailwindcss()],
    },
    server: {
        host: '0.0.0.0',
    },

    integrations: [mdx(), sitemap()],
});
