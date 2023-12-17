import { defineConfig } from 'astro/config';
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

import react from "@astrojs/react";
import path from 'node:path';

const styles = path.resolve('src', 'styles');
const components = path.resolve('src', 'components');
const layouts = path.resolve('src', 'layouts');
const pages = path.resolve('src', 'pages');
const fontawesome = path.resolve('node_modules', '@fortawesome', 'fontawesome-free', 'scss');
const additionalData = `@import "${styles}/common";
@import "${fontawesome}/fontawesome";
@import "${fontawesome}/solid";
@import "${fontawesome}/regular";
@import "${fontawesome}/brands";`;

// https://astro.build/config
export default defineConfig({
  site: "https://t-matsudate.github.io",
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData
        }
      }
    },
    resolve: {
      alias: {
        "@components": components,
        "@layouts": layouts,
        "@pages": pages,
        "@styles": styles
      }
    }
  },
  integrations: [mdx(), sitemap(), react()]
});
