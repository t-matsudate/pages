import { defineConfig } from 'astro/config';
import react from "@astrojs/react";
import mdx from "@astrojs/mdx";

import sitemap from "@astrojs/sitemap";
import path from 'node:path';

const stylesPath = path.resolve("src", "styles");
const fontAwesomePath = path.resolve("node_modules", "@fortawesome", "fontawesome-free", "scss");
const additionalData = `@import "${fontAwesomePath}/fontawesome";
@import "${fontAwesomePath}/solid";
@import "${fontAwesomePath}/brands";
@import "${stylesPath}/common";
`;

// https://astro.build/config
export default defineConfig({
  integrations: [react(), mdx(), sitemap()],
  vite: {
    css: {
      preprocessorOptions: {
        scss: { additionalData }
      }
    }
  }
});
