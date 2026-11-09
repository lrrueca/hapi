import { Hono } from "hono";
import { Layout } from "../layout.js";

const dashboardRouter = new Hono();

dashboardRouter.get("/", (c) => {
  return c.render(
    <Layout>
      <div>Dashboard page coming soon...</div>
    </Layout>,
    { title: "Dashboard" },
  );
});

export default dashboardRouter;
