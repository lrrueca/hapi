import { Icon } from "@/components/Icon.js";
import type { FC } from "hono/jsx";

export const Layout: FC = ({ children }) => {
  return (
    <div class="drawer lg:drawer-open">
      <input id="my-drawer-4" type="checkbox" class="drawer-toggle inline" />
      <div class="drawer-content">
        {/* Navbar */}
        <nav class="navbar w-full bg-base-300">
          <label
            for="my-drawer-4"
            aria-label="open sidebar"
            class="btn btn-square btn-ghost drawer-button"
          >
            {/* Sidebar toggle icon */}
            <Icon icon="ph:sidebar-simple-thin" />
          </label>
          <div class="px-4 flex items-center gap-2">
            <span>
              <img src="/Selecta_2003.svg" alt="App Logo" width="24" />
            </span>
            <span>Hapi</span>
          </div>
        </nav>

        {/* Page content here */}
        <div class="p-4">{children}</div>
      </div>

      <div class="drawer-side is-drawer-close:overflow-visible">
        <label
          for="my-drawer-4"
          aria-label="close sidebar"
          class="drawer-overlay"
        ></label>
        <div class="flex min-h-full flex-col items-start bg-base-200 is-drawer-close:w-14 is-drawer-open:w-64">
          {/* Sidebar content here */}
          <ul class="menu w-full grow">
            <li>
              <a
                href="/distributor/dashboard"
                class="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                data-tip="Dashboard"
              >
                <Icon icon="ph:squares-four-thin" />
                <span class="is-drawer-close:hidden">Dashboard</span>
              </a>
            </li>
            <li>
              <a
                href="/distributor/accounts"
                class="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                data-tip="Accounts"
              >
                <Icon icon="ph:user-square-thin" />
                <span class="is-drawer-close:hidden">Accounts</span>
              </a>
            </li>
            <li>
              <a
                href="/distributor/users"
                class="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                data-tip="Users"
              >
                <Icon icon="ph:user-thin" />
                <span class="is-drawer-close:hidden">Users</span>
              </a>
            </li>
            <li>
              <a
                href="/distributor/freezers"
                class="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                data-tip="Freezers"
              >
                <Icon icon="ph:browser-thin" />
                <span class="is-drawer-close:hidden">Freezers</span>
              </a>
            </li>
            <li>
              <a
                href="/distributor/cabcon"
                class="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                data-tip="Cabcon"
              >
                <Icon icon="ph:barcode-thin" />
                <span class="is-drawer-close:hidden">Cabcon</span>
              </a>
            </li>
            <li>
              <a
                href="/distributor/deployments"
                class="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                data-tip="Deployments"
              >
                <Icon icon="ph:calendar-blank-thin" />
                <span class="is-drawer-close:hidden">Deployments</span>
              </a>
            </li>
            <li>
              <a
                href="/distributor/pullout"
                class="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                data-tip="Pullout"
              >
                <Icon icon="ph:calendar-minus-thin" />
                <span class="is-drawer-close:hidden">Pullout</span>
              </a>
            </li>
            <li>
              <a
                href="/distributor/subject-for-pullout"
                class="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                data-tip="Subject For Pullout"
              >
                <Icon icon="ph:calendar-dot-thin" />
                <span class="is-drawer-close:hidden">Subject For Pullout</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
