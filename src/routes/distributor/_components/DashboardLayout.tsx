import { AppLogo } from "@/components/AppLogo.js";
import { Icon } from "@/components/Icon.js";
import type { FC } from "hono/jsx";
import { useRequestContext } from "hono/jsx-renderer";

interface Nav {
  href: string;
  label: string;
  icon: string;
}

const NavItem: FC<{ item: Nav }> = ({ item }) => {
  const c = useRequestContext();
  const currentPath = c.req.path;
  const isActive =
    item.href === "/distributor/dashboard"
      ? currentPath === item.href
      : currentPath.startsWith(item.href);

  return (
    <li>
      <a
        href={item.href}
        class={`is-drawer-close:tooltip is-drawer-close:tooltip-right ${isActive ? "menu-active" : ""}`}
        data-tip={item.label}
      >
        <Icon icon={item.icon} />
        <span class="is-drawer-close:hidden">{item.label}</span>
      </a>
    </li>
  );
};

const DrawerSide: FC = () => {
  const navItems: Nav[] = [
    {
      href: "/distributor/dashboard",
      label: "Dashboard",
      icon: "ph:squares-four",
    },
    {
      href: "/distributor/accounts",
      label: "Accounts",
      icon: "ph:address-book",
    },
    { href: "/distributor/users", label: "Users", icon: "ph:users-three" },
    { href: "/distributor/freezers", label: "Freezers", icon: "ph:browser" },
    {
      href: "/distributor/cabcon/code",
      label: "Cabcon Code",
      icon: "ph:barcode",
    },
    {
      href: "/distributor/deployments",
      label: "Deployments",
      icon: "ph:calendar-blank",
    },
    {
      href: "/distributor/pullout",
      label: "Pullout",
      icon: "ph:calendar-minus",
    },
    {
      href: "/distributor/subject-for-pullout",
      label: "Subject For Pullout",
      icon: "ph:calendar-dot",
    },
    { href: "/distributor/products", label: "Products", icon: "ph:ice-cream" },
    { href: "/distributor/orders", label: "Orders", icon: "ph:receipt" },
    {
      href: "/distributor/bad-orders",
      label: "Bad Orders",
      icon: "ph:receipt-x",
    },
  ];

  return (
    <div class="drawer-side is-drawer-close:overflow-visible">
      <label
        for="drawer-dashboard"
        aria-label="close sidebar"
        class="drawer-overlay"
      />

      {/* Sidebar content here */}
      <div class="flex min-h-full flex-col items-start bg-base-100 is-drawer-close:w-14 is-drawer-open:w-64">
        <ul class="menu w-full grow relative flex flex-col gap-4 mt-1.5">
          <li class="flex flex-row lg:hidden">
            <label
              for="drawer-dashboard"
              class="ml-auto btn btn-ghost hover:[background:none] hover:[border:none] hover:[outline:none] hover:[box-shadow:none]"
            >
              <Icon icon="ph:x-thin" />
            </label>
          </li>
          {navItems.map((item) => (
            <NavItem item={item} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export const Main: FC = ({ children }) => {
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
            class="drawer-button swap"
          >
            {/* Sidebar toggle icon */}
            <span class="swap-off [:checked~*_&]:opacity-0">
              <Icon icon="ph:sidebar-simple" />
            </span>

            {/* 2. Icon shown when drawer is OPEN */}
            <span class="swap-on [:checked~*_&]:opacity-100">
              <Icon icon="ph:sidebar-fill" />
            </span>
          </label>
          {/* app logo */}
          <AppLogo href="/distributor/dashboard" />
        </nav>

        {/* Page content here */}
        <div class="p-4 bg-gray-50 min-h-[calc(100vh-64px)] grid grid-rows-[50px_50px_1fr_100px] gap-4">
          {children}
        </div>
      </div>
      <DrawerSide />
    </>
  );
};

export default Main;
