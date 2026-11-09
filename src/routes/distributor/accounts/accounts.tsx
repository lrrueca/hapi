import { Icon } from "@/components/Icon.js";
import { Hono } from "hono";
import type { FC } from "hono/jsx";
import { Layout } from "../layout.js";

const Header: FC = () => {
  return (
    <div class="self-center flex flex-row items-center gap-2">
      <Icon icon="ph:address-book-thin" />
      <h2 class="font-semibold text-gray-500 text-xl">Account Management</h2>
    </div>
  );
};
const DrawerFilter: FC = () => {
  return (
    <div class="drawer drawer-end">
      <input id="drawer-filter" type="checkbox" class="drawer-toggle" />
      <div class="drawer-side">
        <label
          for="drawer-filter"
          aria-label="close sidebar"
          class="drawer-overlay"
        />
        <ul class="menu bg-base-200 min-h-full w-80 p-4 leading-10 relative">
          <li class="w-min absolute right-0">
            <label
              for="drawer-filter"
              class="btn btn-ghost hover:[background:none] hover:[border:none] hover:[outline:none] hover:[box-shadow:none]"
            >
              <Icon icon="ph:x-thin" />
            </label>
          </li>
          <li class="mt-10">Account Type</li>
          <li>
            <label class="p-0">
              <input type="checkbox" class="checkbox" />
              Dealer
            </label>
          </li>
          <li>
            <label class="p-0">
              <input type="checkbox" class="checkbox" />
              Hapistore
            </label>
          </li>
          <li class="mt-4 border-t border-gray-200">Status</li>
          <li>
            <label class="p-0">
              <input type="checkbox" class="checkbox" />
              Active
            </label>
          </li>
          <li>
            <label class="p-0">
              <input type="checkbox" class="checkbox" />
              Not Active
            </label>
          </li>
          <li class="mt-4">
            <button class="btn btn-neutral">Apply Filter</button>
          </li>
        </ul>
      </div>
    </div>
  );
};
const DrawerAddForm: FC = () => {
  return (
    <div class="drawer drawer-end">
      <input
        id="drawer-add-account-form"
        type="checkbox"
        class="drawer-toggle"
      />
      <div class="drawer-side">
        <label
          for="drawer-add-account-form"
          aria-label="close sidebar"
          class="drawer-overlay"
        />
        <div class="menu bg-base-200 min-h-full w-80 p-4 relative">
          <div class="w-min absolute right-0">
            <label
              for="drawer-add-account-form"
              class="btn btn-ghost hover:[background:none] hover:[border:none] hover:[outline:none] hover:[box-shadow:none]"
            >
              <Icon icon="ph:x-thin" />
            </label>
          </div>

          <fieldset class="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4 mt-10">
            <legend class="fieldset-legend">Add Account</legend>

            <label for="account-type" class="label">
              Account Type
            </label>
            <select id="account-type" class="select">
              <option disabled selected>
                Select Account Type
              </option>
              <option>Dealer</option>
              <option>Hapistore</option>
            </select>

            <label for="account-name" class="label">
              Account Name
            </label>
            <input
              id="account-name"
              type="text"
              class="input"
              placeholder="Name"
              required
            />

            <label for="address-line-1" class="label">
              Address Line 1
            </label>
            <input
              id="address-line-1"
              type="text"
              class="input"
              placeholder="Address Line 1"
              required
            />

            <label for="address-line-2" class="label">
              Address Line 2
            </label>
            <input
              id="address-line-2"
              type="text"
              class="input"
              placeholder="Town, City, Province, Region"
              required
            />

            <label for="phone-no" class="label">
              Phone No.
            </label>
            <input
              id="phone-no"
              type="tel"
              class="input"
              placeholder="Phone no."
              required
            />

            <label for="sap-code" class="label">
              SAP Code
            </label>
            <input
              id="sap-code"
              type="text"
              class="input"
              placeholder="SAP Code"
              required
            />

            <label for="isr-code" class="label">
              ISR Code
            </label>
            <input
              id="isr-code"
              type="text"
              class="input"
              placeholder="ISR Code"
              required
            />

            <button class="btn btn-neutral mt-4">Submit</button>
          </fieldset>
        </div>
      </div>
    </div>
  );
};
const DrawerEditForm: FC = () => {
  return (
    <div class="drawer drawer-end">
      <input
        id="drawer-edit-account-form"
        type="checkbox"
        class="drawer-toggle"
      />

      <div class="drawer-side">
        <label
          for="drawer-edit-account-form"
          aria-label="close sidebar"
          class="drawer-overlay"
        />

        <div class="menu bg-base-200 min-h-full w-80 p-4 relative">
          <div class="w-min absolute right-0">
            <label
              for="drawer-edit-account-form"
              class="btn btn-ghost hover:[background:none] hover:[border:none] hover:[outline:none] hover:[box-shadow:none]"
            >
              <Icon icon="ph:x-thin" />
            </label>
          </div>

          <fieldset class="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4 mt-10">
            <legend class="fieldset-legend">Add Account</legend>

            <label for="account-type" class="label">
              Account Type
            </label>
            <select id="account-type" class="select">
              <option disabled selected>
                Select Account Type
              </option>
              <option>Dealer</option>
              <option>Hapistore</option>
            </select>

            <label for="account-name" class="label">
              Account Name
            </label>
            <input
              id="account-name"
              type="text"
              class="input"
              placeholder="Name"
              required
            />

            <label for="address-line-1" class="label">
              Address Line 1
            </label>
            <input
              id="address-line-1"
              type="text"
              class="input"
              placeholder="Address Line 1"
              required
            />

            <label for="address-line-2" class="label">
              Address Line 2
            </label>
            <input
              id="address-line-2"
              type="text"
              class="input"
              placeholder="Town, City, Province, Region"
              required
            />

            <label for="phone-no" class="label">
              Phone No.
            </label>
            <input
              id="phone-no"
              type="tel"
              class="input"
              placeholder="Phone no."
              required
            />

            <label for="sap-code" class="label">
              SAP Code
            </label>
            <input
              id="sap-code"
              type="text"
              class="input"
              placeholder="SAP Code"
              required
            />

            <label for="isr-code" class="label">
              ISR Code
            </label>
            <input
              id="isr-code"
              type="text"
              class="input"
              placeholder="ISR Code"
              required
            />

            <span class="label">Status</span>
            <div class="flex flex-row items-center gap-4">
              <label
                for="status-active"
                class="flex flex-row items-center gap-2"
              >
                <input type="checkbox" class="checkbox" />
                <span>Active</span>
              </label>
              <label
                for="status-active"
                class="flex flex-row items-center gap-2"
              >
                <input type="checkbox" class="checkbox" />
                <span>Not Active</span>
              </label>
            </div>

            <button class="btn btn-neutral mt-4">Submit</button>
          </fieldset>
        </div>
      </div>
    </div>
  );
};
const DrawerAccountDetails: FC = () => {
  return (
    <div class="drawer drawer-end">
      <input
        id="drawer-account-details"
        type="checkbox"
        class="drawer-toggle"
      />

      <div class="drawer-side">
        <label
          for="drawer-account-details"
          aria-label="close sidebar"
          class="drawer-overlay"
        />

        <div class="menu bg-base-200 min-h-full w-80 p-4 leading-6 relative">
          <div class="w-min absolute right-0">
            <label
              for="drawer-account-details"
              class="btn btn-ghost hover:[background:none] hover:[border:none] hover:[outline:none] hover:[box-shadow:none]"
            >
              <Icon icon="ph:x-thin" />
            </label>
          </div>

          {/* account details */}
          <div class="flex flex-col gap-2 mt-10">
            <div class="flex flex-row items-center">
              <div class="justify-self-start">Account Details</div>
            </div>

            <span class="text-sm text-gray-400">Account Id</span>
            <span class="text-nowrap font-semibold text-gray-500">
              01a1b8a7-88f0-7a93-85ba-03314e7a4065
            </span>
            <span class="text-sm text-gray-400 border-t border-gray-200">
              Account Name
            </span>
            <span class="font-semibold text-gray-500">
              Hodkiewicz-Runolfsdottir
            </span>
            <span class="text-sm text-gray-400 border-t border-gray-200">
              Account Type
            </span>
            <span class="font-semibold text-gray-500">Dealer</span>
            <span class="text-sm text-gray-400 border-t border-gray-200">
              Status
            </span>
            <span class="font-semibold text-gray-500">Active</span>
            <span class="text-sm text-gray-400 border-t border-gray-200">
              Address
            </span>
            <span class="font-semibold text-gray-500">
              8 Marina Boulevard Marina Bay Financial Centre, Tower 1 #42-01A,
              Penthouse Suite Level, Philippines
            </span>
            <span class="text-sm text-gray-400 border-t border-gray-200">
              Phone
            </span>
            <span class="font-semibold text-gray-500">0966-469-1760</span>
            <span class="text-sm text-gray-400 border-t border-gray-200">
              SAP Code
            </span>
            <span class="font-semibold text-gray-500">1CH9GQ9FR70</span>
            <span class="text-sm text-gray-400 border-t border-gray-200">
              ISR Code
            </span>
            <span class="font-semibold text-gray-500">6YU7W01CG90 </span>
          </div>
        </div>
      </div>
    </div>
  );
};
const Toolbar: FC = () => {
  const header = "Accounts Management";
  return (
    <div class="place-self-center justify-self-end flex flex-row gap-4">
      {/* search */}
      <label class="input border-gray-400">
        <Icon icon="ph:magnifying-glass-thin" />
        <input id="search" type="search" placeholder="Search" />
      </label>

      {/* filter */}
      <label
        for="drawer-filter"
        class="drawer-button btn btn-outline border-gray-400"
      >
        <Icon icon="ph:funnel-simple-thin" />
      </label>

      {/* add account button */}
      <label for="drawer-add-account-form" class="btn btn-neutral">
        <Icon icon="ph:user-circle-plus-thin" />
      </label>
    </div>
  );
};
const TableMD: FC = () => {
  return (
    <div class="flex flex-col gap-4">
      {/* first item */}
      <div class="overflow-x-auto lg:hidden bg-gray-100">
        <div class="p-4 flex flex-col leading-4 border border-gray-200 rounded">
          <div class="w-[36ch] truncate text-xs font-semibold text-gray-400">
            01a1b8a7-88f0-7a93-85ba-03314e7a4065
          </div>
          <div class="text-xl text-gray-500 font-bold leading-12">
            Hodkiewicz-Runolfsdottir
          </div>
          <div class="pb-4 text-gray-500 font-semibold border-b border-gray-200">
            <span class="font-bold text-gray-500">Dealer &middot; Active</span>
            <span class="hidden mt-2 md:block font-normal text-sm">
              8 Marina Boulevard Marina Bay Financial Centre, Tower 1 #42-01A,
              Penthouse Suite Level, Philippines
            </span>
          </div>
          <div class="flex flex-row items-center gap-4 mt-4">
            <label for="drawer-account-details">
              <Icon icon="ph:dots-three-bold" width="24" />
            </label>
            <label for="drawer-edit-account-form">
              <Icon icon="ph:note-pencil-thin" width="24" />
            </label>
            <button>
              <Icon icon="ph:eraser-thin" width="24" />
            </button>
          </div>
        </div>
      </div>

      {/* second item */}
      <div class="overflow-x-auto lg:hidden bg-gray-100">
        <div class="p-4 flex flex-col leading-4 border border-gray-200 rounded">
          <div class="w-[36ch] truncate text-xs font-semibold text-gray-400">
            01a1b8a7-88f0-7a93-85ba-03314e7a4065
          </div>
          <div class="text-xl text-gray-500 font-bold leading-12">
            Hodkiewicz-Runolfsdottir
          </div>
          <div class="pb-4 text-gray-500 font-semibold border-b border-gray-200">
            <span class="font-bold text-gray-500">Dealer &middot; Active</span>
            <span class="hidden mt-2 md:block font-normal text-sm">
              8 Marina Boulevard Marina Bay Financial Centre, Tower 1 #42-01A,
              Penthouse Suite Level, Philippines
            </span>
          </div>
          <div class="flex flex-row items-center gap-4 mt-4">
            <label for="drawer-account-details">
              <Icon icon="ph:dots-three-bold" width="24" />
            </label>
            <label for="drawer-edit-account-form">
              <Icon icon="ph:note-pencil-thin" width="24" />
            </label>
            <button>
              <Icon icon="ph:eraser-thin" width="24" />
            </button>
          </div>
        </div>
      </div>

      {/* third item */}
      <div class="overflow-x-auto lg:hidden bg-gray-100">
        <div class="p-4 flex flex-col leading-4 border border-gray-200 rounded">
          <div class="w-[36ch] truncate text-xs font-semibold text-gray-400">
            01a1b8a7-88f0-7a93-85ba-03314e7a4065
          </div>
          <div class="text-xl text-gray-500 font-bold leading-12">
            Hodkiewicz-Runolfsdottir
          </div>
          <div class="pb-4 text-gray-500 font-semibold border-b border-gray-200">
            <span class="font-bold text-gray-500">Dealer &middot; Active</span>
            <span class="hidden mt-2 md:block font-normal text-sm">
              8 Marina Boulevard Marina Bay Financial Centre, Tower 1 #42-01A,
              Penthouse Suite Level, Philippines
            </span>
          </div>
          <div class="flex flex-row items-center gap-4 mt-4">
            <label for="drawer-account-details">
              <Icon icon="ph:dots-three-bold" width="24" />
            </label>
            <label for="drawer-edit-account-form">
              <Icon icon="ph:note-pencil-thin" width="24" />
            </label>
            <button>
              <Icon icon="ph:eraser-thin" width="24" />
            </button>
          </div>
        </div>
      </div>

      {/* fourth item */}
      <div class="overflow-x-auto lg:hidden bg-gray-100">
        <div class="p-4 flex flex-col leading-4 border border-gray-200 rounded">
          <div class="w-[36ch] truncate text-xs font-semibold text-gray-400">
            01a1b8a7-88f0-7a93-85ba-03314e7a4065
          </div>
          <div class="text-xl text-gray-500 font-bold leading-12">
            Hodkiewicz-Runolfsdottir
          </div>
          <div class="pb-4 text-gray-500 font-semibold border-b border-gray-200">
            <span class="font-bold text-gray-500">Dealer &middot; Active</span>
            <span class="hidden mt-2 md:block font-normal text-sm">
              8 Marina Boulevard Marina Bay Financial Centre, Tower 1 #42-01A,
              Penthouse Suite Level, Philippines
            </span>
          </div>
          <div class="flex flex-row items-center gap-4 mt-4">
            <label for="drawer-account-details">
              <Icon icon="ph:dots-three-bold" width="24" />
            </label>
            <label for="drawer-edit-account-form">
              <Icon icon="ph:note-pencil-thin" width="24" />
            </label>
            <button>
              <Icon icon="ph:eraser-thin" width="24" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
const TableLG: FC = () => {
  return (
    <>
      {/* table display on tablet, laptop and desktop devices */}
      <div class="overflow-x-auto hidden lg:flex flex-col gap-8">
        {/* first data row */}
        <div class="p-4 grid grid-cols-[2fr_1fr] gap-4 leading-8 border border-gray-200 rounded bg-gray-50">
          <div>
            <div class="text-sm font-semibold text-gray-400">
              01M650R0AFEHY4P24XCWQWEB9R
            </div>
            <div class="text-2xl font-bold text-gray-500">
              Hodkiewicz-Runolfsdottir
            </div>
            <div class="text-gray-500 font-bold">
              Distributor &middot; Active
            </div>
            <div class="text-gray-500">
              8 Marina Boulevard Marina Bay Financial Centre, Tower 1 #42-01A,
              Penthouse Suite Level, Philippines
            </div>
          </div>
          <div class="p-4 py-2 bg-gray-100">
            <div>
              <div class="text-sm text-gray-500">Phone</div>
              <div>966 469 1760</div>
            </div>
            <div>
              <div class="text-sm text-gray-500 border-t border-gray-200">
                SAP Code
              </div>
              <div>6YU7W01CG90</div>
            </div>
            <div>
              <div class="text-sm text-gray-500 border-t border-gray-200">
                ISR Code
              </div>
              <div>1CH9GQ9FR70</div>
            </div>
          </div>
          <div class="flex flex-row border-t border-gray-200 col-span-full">
            <button class="btn btn-ghost tooltip" data-tip="Edit">
              <Icon icon="ph:note-pencil-thin" />
            </button>
            <button class="btn btn-ghost tooltip" data-tip="Delete">
              <Icon icon="ph:eraser-thin" />
            </button>
          </div>
        </div>

        {/* second data row */}
        <div class="p-4 grid grid-cols-[2fr_1fr] gap-4 leading-8 border border-gray-200 rounded bg-gray-50">
          <div>
            <div class="text-sm font-semibold text-gray-400">
              01a1b9a5-282a-7a91-8957-1ec6f7da8074
            </div>
            <div class="text-2xl font-bold text-gray-500">
              Hodkiewicz-Runolfsdottir
            </div>
            <div class="text-gray-500 font-bold">
              Distributor &middot; Active
            </div>
            <div class="text-gray-500">
              8 Marina Boulevard Marina Bay Financial Centre, Tower 1 #42-01A,
              Penthouse Suite Level, Philippines
            </div>
          </div>
          <div class="p-4 py-2 bg-gray-100">
            <div>
              <div class="text-sm text-gray-500">Phone</div>
              <div>966 469 1760</div>
            </div>
            <div>
              <div class="text-sm text-gray-500 border-t border-gray-200">
                SAP Code
              </div>
              <div>6YU7W01CG90</div>
            </div>
            <div>
              <div class="text-sm text-gray-500 border-t border-gray-200">
                ISR Code
              </div>
              <div>1CH9GQ9FR70</div>
            </div>
          </div>
          <div class="flex flex-row border-t border-gray-200 col-span-full">
            <button class="btn btn-ghost tooltip" data-tip="Edit">
              <Icon icon="ph:note-pencil-thin" />
            </button>
            <button class="btn btn-ghost tooltip" data-tip="Delete">
              <Icon icon="ph:eraser-thin" />
            </button>
          </div>
        </div>

        {/* third data row */}
        <div class="p-4 grid grid-cols-[2fr_1fr] gap-4 leading-8 border border-gray-200 rounded bg-gray-50">
          <div>
            <div class="text-sm font-semibold text-gray-400">
              01a1b9a5-0287-7033-b3bd-de74050a0fdc
            </div>
            <div class="text-2xl font-bold text-gray-500">
              Hodkiewicz-Runolfsdottir
            </div>
            <div class="text-gray-500 font-bold">
              Distributor &middot; Active
            </div>
            <div class="text-gray-500">
              8 Marina Boulevard Marina Bay Financial Centre, Tower 1 #42-01A,
              Penthouse Suite Level, Philippines
            </div>
          </div>
          <div class="p-4 py-2 bg-gray-100">
            <div>
              <div class="text-sm text-gray-400">Phone</div>
              <div>966 469 1760</div>
            </div>
            <div>
              <div class="text-sm text-gray-400 border-t border-gray-200">
                SAP Code
              </div>
              <div>6YU7W01CG90</div>
            </div>
            <div>
              <div class="text-sm text-gray-400 border-t border-gray-200">
                ISR Code
              </div>
              <div>1CH9GQ9FR70</div>
            </div>
          </div>
          <div class="flex flex-row border-t border-gray-200 col-span-full">
            <button class="btn btn-ghost tooltip" data-tip="Edit">
              <Icon icon="ph:note-pencil-thin" />
            </button>
            <button class="btn btn-ghost tooltip" data-tip="Delete">
              <Icon icon="ph:eraser-thin" />
            </button>
          </div>
        </div>

        {/* fourth data row */}
        <div class="p-4 grid grid-cols-[2fr_1fr] gap-4 leading-8 border border-gray-200 rounded bg-gray-50">
          <div>
            <div class="text-sm font-semibold text-gray-400">
              01a1b9a5-0287-7033-b3bd-de74050a0fdc
            </div>
            <div class="text-2xl font-bold text-gray-500">
              Hodkiewicz-Runolfsdottir
            </div>
            <div class="text-gray-500 font-bold">
              Distributor &middot; Active
            </div>
            <div class="text-gray-500">
              8 Marina Boulevard Marina Bay Financial Centre, Tower 1 #42-01A,
              Penthouse Suite Level, Philippines
            </div>
          </div>
          <div class="p-4 py-2 bg-gray-100">
            <div>
              <div class="text-sm text-gray-400">Phone</div>
              <div>966 469 1760</div>
            </div>
            <div>
              <div class="text-sm text-gray-400 border-t border-gray-200">
                SAP Code
              </div>
              <div>6YU7W01CG90</div>
            </div>
            <div>
              <div class="text-sm text-gray-400 border-t border-gray-200">
                ISR Code
              </div>
              <div>1CH9GQ9FR70</div>
            </div>
          </div>
          <div class="flex flex-row border-t border-gray-200 col-span-full">
            <button class="btn btn-ghost tooltip" data-tip="Edit">
              <Icon icon="ph:note-pencil-thin" />
            </button>
            <button class="btn btn-ghost tooltip" data-tip="Delete">
              <Icon icon="ph:eraser-thin" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
const Pagination: FC = () => {
  return (
    <div class="place-self-center flex justify-center">
      <div class="join">
        <button class="join-item btn">«</button>
        <button class="join-item btn">Page 22</button>
        <button class="join-item btn">»</button>
      </div>
    </div>
  );
};

const accountsRouter = new Hono();

accountsRouter.get("/", (c) => {
  return c.render(
    <>
      <Layout>
        <div class="grid grid-rows-[1fr_1fr_15fr_100px] gap-4">
          <Header />
          <Toolbar />

          <div>
            <TableMD />
            <TableLG />
          </div>

          <Pagination />
        </div>
      </Layout>

      {/* drawers */}
      <DrawerFilter />
      <DrawerAddForm />
      <DrawerEditForm />
      <DrawerAccountDetails />
    </>,
    { title: "Accounts" },
  );
});

export default accountsRouter;
