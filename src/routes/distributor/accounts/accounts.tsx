import { DashboardHeader } from "@/components/DashboardHeader.js";
import { UserAddForm } from "@routes/distributor/users/users.component.js";
import { Hono } from "hono";
import { Layout } from "../layout.js";
import {
  AccountAddForm,
  AccountList,
  AccountToolbar,
  AccountUserList,
  AccountUserToolbar,
  Pagination,
} from "./accounts.component.js";
import { getAccountUsersAsync, getAllAsync } from "./accounts.handler.js";

const accountsRouter = new Hono();

accountsRouter.get("/", async (c) => {
  const data = await getAllAsync();
  return c.render(
    <>
      <Layout>
        <DashboardHeader header="Account Management" icon="ph:address-book" />
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

accountsRouter.get("/users/:id", async (c) => {
  const data = await getAccountUsersAsync();
  return c.render(
    <>
      <Layout>
        <DashboardHeader header="Lorem Dealer Users" icon="ph:users" />
        <AccountUserToolbar userCount={data.length} />
        <AccountUserList items={data} />
      </Layout>
      {/* drawer components */}
      <UserAddForm />
    </>,
    { title: "Account Users" },
  );
});

export default accountsRouter;
