import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  base: "/astro/public_html/",
  integrations: [tailwind(), react()],
});
