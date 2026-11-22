import { Icon } from "@/components/Icon.js";
import type { Account, User } from "@/lib/types.js";
import { UserEditItem } from "@routes/distributor/users/users.component.js";
import type { FC } from "hono/jsx";
import _ from "lodash";

const accountType = [
  { dealer: "Dealer" },
  { hapistore: "Hapistore" },
  { "direct-store": "Direct" },
];

export const AccountAddForm: FC = () => {
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
              <Icon icon="ph:x" />
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
              {accountType.map((at, idx) =>
                Object.entries(at).map(([key, value]) => (
                  <option key={`${idx}-${key}`} value={key}>
                    {value}
                  </option>
                )),
              )}
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

export const AccountEditItem: FC<{ item: Account }> = ({ item }) => {
  return (
    <div class="drawer drawer-end">
      <input
        id={`account-edit-form-${item.id}`}
        type="checkbox"
        class="drawer-toggle"
      />
      <div class="drawer-side">
        <label
          for={`account-edit-form-${item.id}`}
          aria-label="close sidebar"
          class="drawer-overlay"
        />
        <div class="menu bg-base-200 min-h-full w-80 p-4 flex flex-col gap-2">
          <label for={`account-edit-form-${item.id}`} class="ml-auto">
            <Icon icon="ph:x" />
          </label>
          <form>
            <fieldset class="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
              <legend class="fieldset-legend text-gray-500">
                Edit Account Details
              </legend>

              <label for="account-type" class="label">
                Account Type
              </label>
              <select id="account-type" class="select">
                <option disabled selected>
                  {_.startCase(item.type)}
                </option>
                {accountType.map((at, idx) =>
                  Object.entries(at).map(([key, value]) => (
                    <option key={`${idx}-${key}`} value={key}>
                      {value}
                    </option>
                  )),
                )}
              </select>

              <label for="account-name" class="label">
                Account Name
              </label>
              <input
                id="account-name"
                type="text"
                class="input"
                placeholder="Name"
                value={item.name}
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
                value={item.addressLine1}
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
                value={item.addressLine2}
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
                value={item.phone}
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
                value={item.sapCode}
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
                value={item.isrCode}
                required
              />

              <label class="label cursor-pointer mt-2">
                <input
                  type="checkbox"
                  class="checkbox"
                  checked={item.isActive}
                />
                <span class="label-text text-sm text-gray-500">Is Active</span>
              </label>

              <button class="btn btn-neutral mt-4">Submit</button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};

export const AccountToolbar: FC = () => {
  const header = "Accounts Management";
  return (
    <>
      <div class="px-4 place-self-center justify-self-end flex flex-row gap-2">
        {/* search */}
        <label class="btn btn-sm btn-outline rounded-full">
          <button onclick="top_drawer.showModal()">
            <Icon icon="ph:sliders-horizontal" />
          </button>
        </label>

        {/* search modal */}
        <dialog id="top_drawer" class="modal modal-top">
          <div class="modal-box w-[clamp(320px,100%,600px)] max-w-none mx-auto rounded-b-box flex flex-col gap-4">
            <div class="modal-action mt-0">
              <form method="dialog">
                <button class="btn btn-sm btn-ghost">
                  <Icon icon="ph:x" />
                </button>
              </form>
            </div>

            <form action="" class="flex flex-col gap-4">
              {/* search */}
              <fieldset class="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
                <legend class="fieldset-legend">Search</legend>
                <label class="input w-full mx-auto">
                  <Icon icon="ph:magnifying-glass" />
                  <input
                    id="search-account"
                    type="search"
                    required
                    placeholder="Search"
                    autofocus
                  />
                </label>
                <span class="text-xs">
                  Search by Account ID, Name or Address
                </span>
              </fieldset>

              {/* account type */}
              <fieldset class="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4 flex flex-col gap-4">
                <legend class="fieldset-legend">Filter</legend>
                <select
                  id="select-account-type"
                  class="select select-bordered w-full"
                >
                  <option disabled selected>
                    Select Account Type
                  </option>
                  {accountType.map((at, idx) =>
                    Object.entries(at).map(([key, value]) => (
                      <option key={`${idx}-${key}`} value={key}>
                        {value}
                      </option>
                    )),
                  )}
                </select>

                <label class="label cursor-pointer gap-2">
                  <input type="checkbox" class="checkbox" />
                  <span class="label-text text-sm text-gray-800">
                    Is Active
                  </span>
                </label>
              </fieldset>

              <div class="mt-4 flex justify-end gap-2">
                <button
                  type="button"
                  class="btn btn-ghost"
                  onclick="top_drawer.close()"
                >
                  Cancel
                </button>
                <button type="submit" class="btn btn-neutral">
                  Apply
                </button>
              </div>
            </form>
          </div>
        </dialog>

        {/* add account button */}
        <label
          for="drawer-add-account-form"
          class="btn btn-neutral btn-sm rounded-full"
        >
          <Icon icon="ph:user-circle-plus" />
        </label>
      </div>
    </>
  );
};

export const AccountItem: FC<{ item: Account }> = ({ item }) => {
  return (
    <>
      <li class="grid grid-cols-1 md:grid-cols-2 grid-rows-[1ft_1ft_30px] md:grid-rows-[1fr_50px] gap-2 border-gray-200 rounded bg-base-100 p-4">
        {/* box-1 */}
        <div class="col-1 row-1 flex flex-col gap-2 px-4">
          <span class="text-xs md:text-sm">{`ID: ${item.id}`}</span>
          <span class="text-lg lg:text-2xl font-bold">{item.name}</span>
          <span class="text-xs border-t border-gray-200">Account Type:</span>
          <span class="text-sm font-semibold">{_.startCase(item.type)}</span>
          <span class="text-xs border-t border-gray-200">Address:</span>
          <span class="text-sm text-balance font-semibold">
            {item.addressLine1}
          </span>
          <span class="text-sm text-balance font-semibold">
            {item.addressLine2}
          </span>
          <span class="text-xs border-t border-gray-200 md:hidden">Phone:</span>
          <span class="text-sm font-semibold text-balance md:hidden">
            {item.phone}
          </span>
          <span class="text-xs border-t border-gray-200 md:hidden">
            Status:
          </span>
          <span class="text-sm text-balance font-semibold md:hidden">
            {item.isActive ? "Active" : "Idle"}
          </span>
        </div>

        {/* box-2 - small devices */}
        <div class="md:hidden collapse bg-base-100">
          <input type="checkbox" class="peer" />
          <div class="collapse-title p-0 px-4 mb-4 flex flex-row items-center btn btn-outline w-full border-gray-500 text-gray-500 peer-checked:[&_.icon-open]:hidden peer-checked:[&_.icon-close]:block">
            <span class="icon-open">
              <span class="flex flex-row items-center gap-1">
                <Icon icon="ph:arrow-line-down" width="16" />
                <span class="text-sm">More</span>
              </span>
            </span>
            <span class="icon-close hidden">
              <span class="flex flex-row items-center gap-1">
                <Icon icon="ph:arrow-line-up" width="16" />
                <span class="text-sm">Less</span>
              </span>
            </span>
          </div>
          <div class="collapse-content p-0">
            <div class="flex flex-col gap-2 p-4 bg-gray-100 text-xs">
              <span class="text-xs">SAP Code:</span>
              <span class="text-sm font-semibold">{item.isrCode}</span>
              <span class="text-xs border-t border-gray-200">ISR Code:</span>
              <span class="text-sm font-semibold">{item.sapCode}</span>
              <span class="text-xs border-t border-gray-200">
                Enlisted Date:
              </span>
              <span class="text-sm font-semibold">{item.createdAt}</span>
            </div>
          </div>
        </div>

        {/* box-2 - medium to large devices */}
        <div class="hidden col-1 md:col-2 md:row-1 md:flex flex-col gap-2 p-4 bg-gray-100 text-xs md:text-base">
          <span class="text-xs hidden md:block">Status:</span>
          <span class="text-sm text-balance font-semibold hidden md:block">
            {item.isActive ? "Active" : "Idle"}
          </span>
          <span class="text-xs border-t border-gray-200 hidden md:block">
            Phone:
          </span>
          <span class="text-sm font-semibold text-balance hidden md:block">
            {item.phone}
          </span>
          <span class="text-xs border-t border-gray-200">SAP Code:</span>
          <span class="text-sm font-semibold">{item.isrCode}</span>
          <span class="text-xs border-t border-gray-200">ISR Code:</span>
          <span class="text-sm font-semibold">{item.sapCode}</span>
          <span class="text-xs border-t border-gray-200">Enlisted Date:</span>
          <span class="text-sm font-semibold">{item.createdAt}</span>
        </div>

        {/* box-3 */}
        <div class="col-span-full row-3 md:row-2 flex flex-row gap-2 items-center border-t border-gray-200 p-4">
          <a
            class="tooltip"
            data-tip="Users"
            href={`/distributor/accounts/users/${item.id}`}
          >
            <Icon icon="ph:users" />
          </a>
          <div class="tooltip" data-tip="Edit">
            <label for={`account-edit-form-${item.id}`}>
              <Icon icon="ph:note-pencil" />
            </label>
          </div>

          <button class="tooltip" data-tip="Delete">
            <Icon icon="ph:eraser" />
          </button>
        </div>
      </li>

      {/* account edit form drawer component */}
      <AccountEditItem item={item} />
    </>
  );
};

export const AccountList: FC<{ items: Account[] }> = ({ items }) => {
  return (
    <ul class="grid grid-cols-1 gap-4">
      {items.map((item) => (
        <AccountItem item={item} />
      ))}
    </ul>
  );
};

export const AccountUserItem: FC<{ item: User }> = ({ item }) => {
  return (
    <>
      <li class="grid grid-cols-1 md:grid-cols-2 grid-rows-[1ft_1ft_30px] md:grid-rows-[1fr_50px] gap-2 border-gray-200 rounded bg-base-100 p-4">
        {/* box-1 */}
        <div class="col-1 row-1 flex flex-col gap-2 px-4">
          <span class="text-xs md:text-sm">{`ID: ${item.id}`}</span>
          <span class="text-lg lg:text-2xl font-bold">{`${item.firstName} ${item.middleName} ${item.lastName}`}</span>
          <span class="text-sm font-semibold">{_.startCase(item.role)}</span>
        </div>

        {/* box-2 */}
        <div class="md:hidden collapse bg-base-100">
          <input type="checkbox" class="peer" />
          <div class="collapse-title p-0 px-4 mb-4 flex flex-row items-center btn btn-outline w-full border-gray-500 text-gray-500 peer-checked:[&_.icon-open]:hidden peer-checked:[&_.icon-close]:block">
            <span class="icon-open">
              <span class="flex flex-row items-center gap-1">
                <Icon icon="ph:arrow-line-down" width="16" />
                <span class="text-sm">More</span>
              </span>
            </span>
            <span class="icon-close hidden">
              <span class="flex flex-row items-center gap-1">
                <Icon icon="ph:arrow-line-up" width="16" />
                <span class="text-sm">Less</span>
              </span>
            </span>
          </div>
          <div class="collapse-content p-0">
            <div class="flex flex-col gap-2 p-4 bg-gray-100 text-xs">
              <span class="text-xs">Status:</span>
              <span class="text-sm font-semibold">
                {item.isActive ? "Active" : "Idle"}
              </span>

              <span class="text-xs">Address:</span>
              <span class="text-sm text-balance font-semibold">
                {item.addressLine1}
              </span>
              <span class="text-sm text-balance font-semibold">
                {item.addressLine2}
              </span>

              <span class="text-xs">Phone:</span>
              <span class="text-sm font-semibold">{item.phone}</span>

              <span class="text-xs border-t border-gray-200">
                Enlisted Date:
              </span>
              <span class="text-sm font-semibold">{item.createdAt}</span>
            </div>
          </div>
        </div>

        {/* box-2 - medium to large devices */}
        <div class="hidden col-1 md:col-2 md:row-1 md:flex flex-col gap-2 p-4 bg-gray-100 text-xs md:text-base">
          <span class="text-xs hidden md:block">Status:</span>
          <span class="text-sm text-balance font-semibold hidden md:block">
            {item.isActive ? "Active" : "Idle"}
          </span>

          <span class="text-xs">Address:</span>
          <span class="text-sm text-balance font-semibold">
            {item.addressLine1}
          </span>
          <span class="text-sm text-balance font-semibold">
            {item.addressLine2}
          </span>

          <span class="text-xs border-t border-gray-200 hidden md:block">
            Phone:
          </span>
          <span class="text-sm font-semibold text-balance hidden md:block">
            {item.phone}
          </span>
          <span class="text-xs border-t border-gray-200">Enlisted Date:</span>
          <span class="text-sm font-semibold">{item.createdAt}</span>
        </div>

        {/* box-3 */}
        <div class="col-span-full row-3 md:row-2 flex flex-row gap-2 items-center border-t border-gray-200 p-4">
          <div class="tooltip" data-tip="Edit">
            <label for={`user-edit-form-${item.id}`}>
              <Icon icon="ph:note-pencil" />
            </label>
          </div>

          <button class="tooltip" data-tip="Delete">
            <Icon icon="ph:eraser" />
          </button>
        </div>
      </li>
      <UserEditItem item={item} />
    </>
  );
};

export const AccountUserToolbar: FC<{ userCount: number }> = ({
  userCount,
}) => {
  return (
    <div class="px-4 flex flex-row items-center gap-2">
      <div>{`Users: ${userCount}`}</div>
      <a
        class="ml-auto btn btn-sm btn-outline rounded-full border-gray-500 text-gray-500"
        href="/distributor/accounts"
      >
        Back
      </a>
      <label
        for="drawer-add-user-form"
        class="btn btn-neutral btn-sm rounded-full"
      >
        <Icon icon="ph:user-plus" />
      </label>
    </div>
  );
};

export const AccountUserList: FC<{ items: User[] }> = ({ items }) => {
  return (
    <ul class="flex flex-col gap-4">
      {items.slice(0, 3).map((item) => (
        <AccountUserItem item={item} />
      ))}
    </ul>
  );
};

export const Pagination: FC = () => {
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
