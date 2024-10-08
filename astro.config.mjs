import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), preact({ compat: true })],
  vite: {
    ssr: {
      noExternal: ["react-hook-form"]
    }
  }
});
