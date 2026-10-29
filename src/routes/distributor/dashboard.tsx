import { Icon } from "@/components/Icon.js";
import { Hono } from "hono";

const distributorRouter = new Hono();

distributorRouter.get("/dashboard", (c) => {
  return c.render(
    <>
      <div class="drawer lg:drawer-open">
        <input id="my-drawer-4" type="checkbox" class="drawer-toggle inline" />
        <div class="drawer-content">
          {/* Navbar */}
          <nav class="navbar w-full bg-base-300">
            <label
              htmlFor="my-drawer-4"
              aria-label="open sidebar"
              class="btn btn-square btn-ghost drawer-button"
            >
              {/* Sidebar toggle icon */}
              <Icon icon="ph:sidebar-simple-thin" />
            </label>
            <div class="px-4">Hapi</div>
          </nav>

          {/* Page content here */}
          <div class="p-4">Page Content</div>
        </div>

        <div class="drawer-side is-drawer-close:overflow-visible">
          <label
            htmlFor="my-drawer-4"
            aria-label="close sidebar"
            class="drawer-overlay"
          ></label>
          <div class="flex min-h-full flex-col items-start bg-base-200 is-drawer-close:w-14 is-drawer-open:w-64">
            {/* Sidebar content here */}
            <ul class="menu w-full grow">
              {/* List item */}
              <li>
                <button
                  class="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                  data-tip="Homepage"
                >
                  {/* Home icon */}
                  <Icon icon="ph:house-simple-thin" />
                  <span class="is-drawer-close:hidden">Homepage</span>
                </button>
              </li>

              {/* List item */}
              <li>
                <button
                  class="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                  data-tip="Settings"
                >
                  {/* Settings icon */}
                  <Icon icon="ph:sliders-horizontal-thin" />
                  <span class="is-drawer-close:hidden">Settings</span>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>,
    { title: "Distributor Dashboard" },
  );
});

export default distributorRouter;
