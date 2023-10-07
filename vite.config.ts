/// <reference types="vitest" />
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  cacheDir: "./node_modules/.vite/ffx-starter-template",

  plugins: [tsconfigPaths()],

  // Uncomment this if you are using workers.
  // worker: {
  //  plugins: [],
  // },

  test: {
    cache: {
      dir: "./node_modules/.vitest",
    },
    coverage: {
      provider: "v8",
    },
    environment: "node",
    globals: true,
    include: ["test/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts}"],
  },
});
