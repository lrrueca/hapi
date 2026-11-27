import { Hono } from "hono";
import { jsxRenderer } from "hono/jsx-renderer";

import Main from "./_components/DashboardLayout.js";
import accountsRouter from "./accounts/accounts.js";
import cabconCodeRouter from "./cabconCode/cabconCode.js";
import dashboardRouter from "./dashboard/dashboard.js";
import deploymentRouter from "./deployments/deployments.js";
import freezerRouter from "./freezers/freezers.js";
import userRouter from "./users/users.js";

export const distributorRouter = new Hono();
distributorRouter.use(
  "*",
  jsxRenderer(({ children, Layout }) => (
    <Layout>
      <div class="drawer lg:drawer-open">
        <Main>{children}</Main>
      </div>
    </Layout>
  )),
);

distributorRouter.route("/dashboard", dashboardRouter);
distributorRouter.route("/accounts", accountsRouter);
distributorRouter.route("/users", userRouter);
distributorRouter.route("/freezers", freezerRouter);
distributorRouter.route("/deployments", deploymentRouter);
distributorRouter.route("/cabcon/code", cabconCodeRouter);

export default distributorRouter;
