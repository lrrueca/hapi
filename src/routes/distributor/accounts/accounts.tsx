import { DashboardHeader } from "@/components/DashboardHeader.js";
import { Hono } from "hono";
import { Layout } from "../layout.js";
import {
  AccountAddForm,
  AccountList,
  AccountToolbar,
  Pagination,
} from "./accounts.component.js";
import { getAllAsync } from "./accounts.handler.js";

const accountsRouter = new Hono();

accountsRouter.get("/", async (c) => {
  const data = await getAllAsync();
  return c.render(
    <>
      <Layout>
        <DashboardHeader header="Account Management" />
        <AccountToolbar />
        <AccountList items={data} />
        <Pagination />
      </Layout>

      {/* drawer components */}
      <AccountAddForm />
    </>,
    { title: "Accounts" },
  );
});

export default accountsRouter;
