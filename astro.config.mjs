import partytown from "@astrojs/partytown";
import prefetch from "@astrojs/prefetch";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from 'astro/config';

import netlify from "@astrojs/netlify/edge-functions";

// https://astro.build/config
export default defineConfig({
  integrations: [prefetch(), sitemap(), tailwind(), partytown()],
  adapter: netlify(),
  output: "hybrid",
  // adapter: netlify({
  //   edgeMiddleware: true
  // })
});