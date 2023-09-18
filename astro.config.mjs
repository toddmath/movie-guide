import partytown from "@astrojs/partytown";
import prefetch from "@astrojs/prefetch";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from 'astro/config';

import netlify from "@astrojs/netlify/functions";

// https://astro.build/config
export default defineConfig({
  integrations: [prefetch(), sitemap(), tailwind(), partytown()],
  adapter: netlify({
    edgeMiddleware: true,
    // functionPerRoute: true,
  }),
  output: "hybrid",
});