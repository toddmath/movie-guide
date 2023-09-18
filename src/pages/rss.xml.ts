import rss from "@astrojs/rss"
import type { APIContext, APIRoute } from 'astro';

export const GET: APIRoute = ({ site }) => {
  return rss({
    // `<title>` field in output xml
    title: "Movie Guide",
    // `<description>` field in output xml
    description: "A guide to the best movies",
    // Pull in your project "site" from the endpoint context
    // https://docs.astro.build/en/reference/api-reference/#contextsite
    site: site ?? new URL("localhost:4321"),
    // Array of `<item>`s in output xml
    // See "Generating items" section for examples using content collections and glob imports
    items: [],
    // (optional) inject custom xml
    customData: `<language>en-us</language>`,
    // ex. use your stylesheet from "public/rss/styles.xsl"
    stylesheet: '/rss/styles.xsl',
  })
}