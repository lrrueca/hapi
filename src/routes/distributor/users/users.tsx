import { DashboardHeader } from "@/components/DashboardHeader.js";
import { Hono } from "hono";
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
      <DashboardHeader header="User Management" icon="ph:users" />
      <UserToolbar />
      <UserList items={data} />
      <Pagination />

      {/* drawer components */}
      <UserAddForm />
    </>,
    { title: "Users" },
  );
});

export default userRouter;
