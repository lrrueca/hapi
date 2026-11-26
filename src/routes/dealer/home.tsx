import { Hono } from "hono";
import { getAllAsync } from "./home.handler.js";
import { CardList } from "./components/Card.js";
import { jsxRenderer } from "hono/jsx-renderer";
import { AppLogo } from "@/components/AppLogo.js";

const dealerRouter = new Hono();

dealerRouter.use(
  "*",
  jsxRenderer(({ children, Layout }) => (
    <Layout>
      <div class="grid grid-rows-[50px_min-h[calc(100dvh-132px)]_50px] gap-2">
        {/* header */}
        <div class="self-center">
          <AppLogo href="/dealer" />
        </div>

        {/* main */}
        {children}

        {/* footer */}
        <div class="px-4 self-center">Footer...</div>
      </div>
    </Layout>
  )),
);

dealerRouter.get("/", async (c) => {
  const data = await getAllAsync();
  return c.render(
    <div class="px-4 grid grid-rows-[50px_1fr]">
      <h1 class="col-span-full row-start-1 row-end-1">Dealer Home Page</h1>
      <CardList items={data} />
    </div>,
    { title: "Dealer-Home" },
  );
});

export default dealerRouter;
