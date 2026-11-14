import { Hono } from "hono";
import { Layout } from "../layout.js";
import { getAllAsync } from "./cabconCode.api.js";
import {
  Header,
  Toolbar,
  Pagination,
  DataList,
  DrawerAddForm,
  DrawerFilter,
} from "./cabconCode.ui.js";

const cabconCodeRouter = new Hono();

cabconCodeRouter.get("/", async (c) => {
  const items = await getAllAsync();
  return c.render(
    <>
      <Layout>
        <Header />
        <Toolbar />
        <div class="flex flex-col gap-2">
          <DataList items={items} />
        </div>
        <Pagination />
      </Layout>
      {/* drawers */}
      <DrawerFilter />
      <DrawerAddForm />
    </>,
    { title: "Cabcon Code" },
  );
});

export default cabconCodeRouter;
