import { DashboardHeader } from "@/components/DashboardHeader.js";
import { UserAddForm } from "@routes/distributor/users/users.component.js";
import { Hono } from "hono";
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
      <DashboardHeader header="Account Management" icon="ph:address-book" />
      <AccountToolbar />
      <AccountList items={data} />
      <Pagination />

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
      <DashboardHeader header="Lorem Dealer Users" icon="ph:users" />
      <AccountUserToolbar userCount={data.length} />
      <AccountUserList items={data} />
      {/* drawer components */}
      <UserAddForm />
    </>,
    { title: "Account Users" },
  );
});

export default accountsRouter;
