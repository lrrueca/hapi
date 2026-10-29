import hono from "@hono/vite-dev-server";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig, loadEnv } from "vite";
import viteSSRComponents from "vite-ssr-components/plugin";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  process.env = { ...process.env, ...env };
  return {
    plugins: [
      tailwindcss(),
      viteSSRComponents(),
      hono({
        entry: "src/index.tsx",
        adapter: {
          env: {
            APPKEY: process.env.APPKEY,
            PROD: process.env.PROD,
          },
        },
      }),
    ],
    resolve: {
      tsconfigPaths: true,
    },
  };
});
