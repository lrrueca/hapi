import { DashboardHeader } from "@/components/DashboardHeader.js";
import { Hono } from "hono";
import {
  FreezerAddForm,
  FreezerDataList,
  FreezerToolbar,
  Pagination,
} from "./freezers.component.js";
import { getAllAsync } from "./freezers.handler.js";

const freezerRouter = new Hono();

freezerRouter.get("/", async (c) => {
  const data = await getAllAsync();
  return c.render(
    <>
      <DashboardHeader header="Freezer Management" icon="ph:browser" />
      <FreezerToolbar />

      <div class="flex flex-col gap-4">
        <FreezerDataList items={data} />
      </div>

      <Pagination />

      {/* drawers */}
      <FreezerAddForm />
    </>,
    { title: "Freezers" },
  );
});

export default freezerRouter;
