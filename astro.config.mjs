// @ts-check

import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import netlify from '@astrojs/netlify';

// https://astro.build/config
// Netlify: usa este adapter para que las rutas y el API funcionen en Netlify (Node no se ejecuta ahí).
export default defineConfig({
  site: 'https://zekiri.io',
  output: 'server',
  adapter: netlify(),
  vite: {
      plugins: [tailwindcss()],
    },

  integrations: [react()],
});