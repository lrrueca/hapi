import { Hono } from "hono";
import { Layout } from "../layout.js";
import { getAllAsync } from "./product.handlers.js";
import {
  DataList,
  DrawerAddForm,
  DrawerFilter,
  Header,
  Pagination,
  Toolbar,
} from "./product.ui.js";

const productRoute = new Hono();

productRoute.get("/", async (c) => {
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
    { title: "Products" },
  );
});

export default productRoute;
