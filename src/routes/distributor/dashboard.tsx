import { Hono } from "hono";
import { Layout } from "./layout.js";

const distributorRouter = new Hono();

distributorRouter.get("/dashboard", (c) => {
  return c.render(
    <Layout>
      <div>Dashboard page coming soon...</div>
    </Layout>,
    { title: "Distributor Dashboard" },
  );
});

export default distributorRouter;
