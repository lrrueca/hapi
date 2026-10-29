import { Style } from "hono/css";
import { jsxRenderer } from "hono/jsx-renderer";
import { Link, ViteClient } from "vite-ssr-components/hono";

declare module "hono" {
  interface ContextRenderer {
    (content: string | Promise<string>, props: { title: string }): Response;
  }
}

export const renderer = jsxRenderer(({ title, children }) => {
  return (
    <html>
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="icon"
          type="image/svg+xml; charset=utf-8"
          href="/Selecta_2003.svg"
        />
        {import.meta.env.PROD ? (
          <Link rel="stylesheet" href="/assets/lib.css" />
        ) : (
          <Link rel="stylesheet" href="/src/styles/lib.css" />
        )}
        <Style />
        <title>{title}</title>
        <ViteClient />
      </head>
      <body>{children}</body>
    </html>
  );
});

export default renderer;
