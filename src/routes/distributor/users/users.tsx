import { DashboardHeader } from "@/components/DashboardHeader.js";
import { Hono } from "hono";
import { Layout } from "../layout.js";
import {
  UserAddForm,
  UserList,
  UserToolbar,
  Pagination,
} from "./users.component.js";
import { getAllAsync } from "./users.handler.js";

const userRouter = new Hono();

userRouter.get("/", async (c) => {
  const data = await getAllAsync();
  return c.render(
    <>
      <Layout>
        <DashboardHeader header="User Management" icon="ph:users" />
        <UserToolbar />
        <UserList items={data} />
        <Pagination />
      </Layout>

      {/* drawer components */}
      <UserAddForm />
    </>,
    { title: "Users" },
  );
});

export default userRouter;
