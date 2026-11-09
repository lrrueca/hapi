import { Icon } from "@/components/Icon.js";
import type { FC } from "hono/jsx";

// components
const AppLogo: FC = ({ href }) => {
  return (
    <a href={href} class="px-4 flex items-center gap-2">
      <span>
        <img src="/Selecta_2003.svg" alt="App Logo" width="24" />
      </span>
      <span>Hapi</span>
    </a>
  );
};
const Li: FC = ({ href, content, children }) => {
  return (
    <li>
      <a
        href={href}
        class="is-drawer-close:tooltip is-drawer-close:tooltip-right"
        data-tip={content}
      >
        {children}
        <span class="is-drawer-close:hidden">{content}</span>
      </a>
    </li>
  );
};
const DrawerSide: FC = () => {
  return (
    <div class="drawer-side is-drawer-close:overflow-visible">
      <label
        for="drawer-dashboard"
        aria-label="close sidebar"
        class="drawer-overlay"
      />

      {/* Sidebar content here */}
      <div class="flex min-h-full flex-col items-start bg-base-100 is-drawer-close:w-14 is-drawer-open:w-64">
        <ul class="menu w-full grow relative">
          <li class="flex flex-row lg:hidden">
            <label
              for="drawer-dashboard"
              class="ml-auto btn btn-ghost hover:[background:none] hover:[border:none] hover:[outline:none] hover:[box-shadow:none]"
            >
              <Icon icon="ph:x-thin" />
            </label>
          </li>
          <Li href="/distributor/dashboard" content="Dashboard">
            <Icon icon="ph:squares-four-thin" />
          </Li>
          <Li href="/distributor/accounts" content="Accounts">
            <Icon icon="ph:address-book-thin" />
          </Li>
          <Li href="/distributor/users" content="Users">
            <Icon icon="ph:users-three-thin" />
          </Li>
          <Li href="/distributor/freezers" content="Freezers">
            <Icon icon="ph:browser-thin" />
          </Li>
          <Li href="/distributor/cabcon" content="Cabcon">
            <Icon icon="ph:barcode-thin" />
          </Li>
          <Li href="/distributor/deployments" content="Deployments">
            <Icon icon="ph:calendar-blank-thin" />
          </Li>
          <Li href="/distributor/pullout" content="Pullout">
            <Icon icon="ph:calendar-minus-thin" />
          </Li>
          <Li
            href="/distributor/subject-for-pullout"
            content="Subject For Pullout"
          >
            <Icon icon="ph:calendar-dot-thin" />
          </Li>
          <Li href="/distributor/products" content="Products">
            <Icon icon="ph:ice-cream-thin" />
          </Li>
          <Li href="/distributor/orders" content="Orders">
            <Icon icon="ph:receipt-thin" />
          </Li>
          <Li href="/distributor/bad-orders" content="Bad Orders">
            <Icon icon="ph:receipt-x-thin" />
          </Li>
        </ul>
      </div>
    </div>
  );
};
const Main: FC = ({ children }) => {
  return (
    <>
      <input
        id="drawer-dashboard"
        type="checkbox"
        class="drawer-toggle inline"
      />
      <div class="drawer-content">
        {/* Navbar */}
        <nav class="navbar w-full bg-base-100">
          <label
            for="drawer-dashboard"
            aria-label="open sidebar"
            class="btn btn-square btn-ghost drawer-button"
          >
            {/* Sidebar toggle icon */}
            <Icon icon="ph:sidebar-simple-thin" />
          </label>
          {/* app logo */}
          <AppLogo href="/distributor/dashboard" />
        </nav>

        {/* Page content here */}
        <div class="p-4 bg-gray-50">{children}</div>
      </div>
      <DrawerSide />
    </>
  );
};

// layout
export const Layout: FC = ({ children }) => {
  return (
    <div class="drawer lg:drawer-open">
      <Main>{children}</Main>
    </div>
  );
};
