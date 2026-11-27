import { Hono } from "hono";

const dashboardRouter = new Hono();

dashboardRouter.get("/", (c) => {
  return c.render(<div>Dashboard page coming soon...</div>, {
    title: "Dashboard",
  });
});

export default dashboardRouter;
