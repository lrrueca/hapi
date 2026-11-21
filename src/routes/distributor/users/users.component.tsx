import { Icon } from "@/components/Icon.js";
import type { User } from "@/lib/types.js";
import type { FC } from "hono/jsx";
import _ from "lodash";

const userRole = [
  { "dealer-admin": "Dealer Admin" },
  { "dealer-user": "Dealer User" },
  { "hapistore-admin": "Hapistore Admin" },
  { "hapistore-user": "Hapistore User" },
  { "direct-store-admin": "Direct Store Admin" },
  { "direct-store-user": "Direct Store User" },
];

export const UserAddForm: FC = () => {
  return (
    <div class="drawer drawer-end">
      <input id="drawer-add-user-form" type="checkbox" class="drawer-toggle" />
      <div class="drawer-side">
        <label
          for="drawer-add-user-form"
          aria-label="close sidebar"
          class="drawer-overlay"
        />
        <div class="menu bg-base-200 min-h-full w-80 p-4 relative">
          <div class="w-min absolute right-0">
            <label
              for="drawer-add-user-form"
              class="btn btn-ghost hover:[background:none] hover:[border:none] hover:[outline:none] hover:[box-shadow:none]"
            >
              <Icon icon="ph:x-thin" />
            </label>
          </div>

          <fieldset class="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4 mt-10">
            <legend class="fieldset-legend">Add User</legend>

            <label for="user-first-name" class="label">
              First Name
            </label>
            <input
              id="user-first-name"
              type="text"
              class="input"
              placeholder="First Name"
              required
            />

            <label for="user-middle-name" class="label">
              Middle Name
            </label>
            <input
              id="user-middle-name"
              type="text"
              class="input"
              placeholder="Middle Name"
              required
            />

            <label for="user-last-name" class="label">
              Last Name
            </label>
            <input
              id="user-last-name"
              type="text"
              class="input"
              placeholder="Last Name"
              required
            />

            <label for="user-address-line-1" class="label">
              Address Line 1
            </label>
            <input
              id="user-address-line-1"
              type="text"
              class="input"
              placeholder="Address Line 1"
              required
            />

            <label for="user-address-line-2" class="label">
              Address Line 2
            </label>
            <input
              id="user-address-line-2"
              type="text"
              class="input"
              placeholder="Town, City, Province, Region"
              required
            />

            <label for="user-phone-no" class="label">
              Phone No.
            </label>
            <input
              id="user-phone-no"
              type="tel"
              class="input"
              placeholder="Phone no."
              required
            />

            <label for="user-username" class="label">
              Username
            </label>
            <input
              id="user-username"
              type="text"
              class="input"
              placeholder="Username"
              required
            />

            <label for="user-role" class="label">
              Role
            </label>

            <select id="user-role" class="select">
              <option selected disabled>
                Select User Role
              </option>
              {userRole.map((ur, idx) =>
                Object.entries(ur).map(([key, value]) => (
                  <option key={`${idx}-${key}`} value={key}>
                    {value}
                  </option>
                )),
              )}
            </select>

            <button class="btn btn-neutral mt-4">Submit</button>
          </fieldset>
        </div>
      </div>
    </div>
  );
};

export const UserEditItem: FC<{ item: User }> = ({ item }) => {
  return (
    <div class="drawer drawer-end">
      <input
        id={`user-edit-form-${item.id}`}
        type="checkbox"
        class="drawer-toggle"
      />
      <div class="drawer-side">
        <label
          for={`user-edit-form-${item.id}`}
          aria-label="close sidebar"
          class="drawer-overlay"
        />
        <div class="menu bg-base-200 min-h-full w-80 p-4 flex flex-col gap-2">
          <label for={`user-edit-form-${item.id}`} class="ml-auto">
            <Icon icon="ph:x-thin" />
          </label>
          <form>
            <fieldset class="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
              <legend class="fieldset-legend text-gray-500">
                Edit User Details
              </legend>

              <label for="user-first-name" class="label">
                First Name
              </label>
              <input
                id="user-first-name"
                type="text"
                class="input"
                placeholder="First Name"
                value={item.firstName}
                required
              />

              <label for="user-middle-name" class="label">
                Middle Name
              </label>
              <input
                id="user-middle-name"
                type="text"
                class="input"
                placeholder="Middle Name"
                value={item.middleName}
                required
              />

              <label for="user-last-name" class="label">
                Last Name
              </label>
              <input
                id="user-last-name"
                type="text"
                class="input"
                placeholder="Last Name"
                value={item.lastName}
                required
              />

              <label for="user-address-line-1" class="label">
                Address Line 1
              </label>
              <input
                id="user-address-line-1"
                type="text"
                class="input"
                placeholder="Address Line 1"
                value={item.addressLine1}
                required
              />

              <label for="user-address-line-2" class="label">
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

              <label for="user-phone-no" class="label">
                Phone No.
              </label>
              <input
                id="user-phone-no"
                type="tel"
                class="input"
                placeholder="Phone no."
                value={item.phone}
                required
              />

              <label for="user-username" class="label">
                Username
              </label>
              <input
                id="user-username"
                type="text"
                class="input"
                placeholder="Username"
                value={item.username}
                required
              />

              <label for="user-role" class="label">
                Role
              </label>
              <select id="user-role" class="select">
                <option disabled selected>
                  {_.startCase(item.role)}
                </option>
                {userRole.map((ur, idx) =>
                  Object.entries(ur).map(([key, value]) => (
                    <option key={`${idx}-${key}`} value={key}>
                      {value}
                    </option>
                  )),
                )}
              </select>

              <label class="label cursor-pointer mt-2">
                <input
                  type="checkbox"
                  class="checkbox"
                  checked={item.isActive}
                />
                <span class="label-text text-sm text-gray-500">Is Active</span>
              </label>

              <button class="btn btn-outline mt-4">Reset Password</button>
              <button class="btn btn-neutral mt-4">Submit</button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};

export const UserToolbar: FC = () => {
  const header = "Accounts Management";
  return (
    <>
      <div class="place-self-center justify-self-end flex flex-row gap-2">
        {/* search */}
        <label class="btn btn-sm btn-outline rounded-full">
          <button onclick="top_drawer.showModal()">
            <Icon icon="ph:sliders-horizontal-thin" />
          </button>
        </label>

        {/* search modal */}
        <dialog id="top_drawer" class="modal modal-top">
          <div class="modal-box w-[clamp(320px,100%,600px)] max-w-none mx-auto rounded-b-box flex flex-col gap-4">
            <div class="modal-action mt-0">
              <form method="dialog">
                <button class="btn btn-sm btn-ghost">
                  <Icon icon="ph:x-thin" />
                </button>
              </form>
            </div>

            <form action="" class="flex flex-col gap-4">
              {/* search */}
              <fieldset class="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
                <legend class="fieldset-legend">Search</legend>
                <label class="input w-full mx-auto">
                  <Icon icon="ph:magnifying-glass-thin" />
                  <input
                    id="search-user"
                    type="search"
                    required
                    placeholder="Search"
                    autofocus
                  />
                </label>
                <span class="text-xs">Search by User ID, Name or Address</span>
              </fieldset>

              {/* user role */}
              <fieldset class="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4 flex flex-col gap-4">
                <legend class="fieldset-legend">Filter</legend>
                <select
                  id="select-user-role"
                  class="select select-bordered w-full"
                >
                  <option disabled selected>
                    Select User Role
                  </option>
                  {userRole.map((ur, idx) =>
                    Object.entries(ur).map(([key, value]) => (
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

        {/* add user button */}
        <label
          for="drawer-add-user-form"
          class="btn btn-neutral btn-sm rounded-full"
        >
          <Icon icon="ph:user-circle-plus-thin" />
        </label>
      </div>
    </>
  );
};

export const UserItem: FC<{ item: User }> = ({ item }) => {
  return (
    <>
      <li class="grid grid-cols-1 md:grid-cols-2 grid-rows-[1ft_1ft_30px] md:grid-rows-[1fr_50px] gap-2 border-gray-200 rounded bg-base-100 p-4">
        {/* box-1 */}
        <div class="col-1 row-1 flex flex-col gap-2 px-4">
          <span class="text-xs md:text-sm">{`ID: ${item.id}`}</span>
          <span class="text-lg lg:text-2xl font-bold">{`${item.firstName} ${item.middleName} ${item.lastName}`}</span>
          <span class="text-xs border-t border-gray-200">Role:</span>
          <span class="text-sm font-semibold">{_.startCase(item.role)}</span>
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
                <Icon icon="ph:arrow-line-down-thin" width="16" />
                <span class="text-sm">More</span>
              </span>
            </span>
            <span class="icon-close hidden">
              <span class="flex flex-row items-center gap-1">
                <Icon icon="ph:arrow-line-up-thin" width="16" />
                <span class="text-sm">Less</span>
              </span>
            </span>
          </div>

          <div class="collapse-content p-0">
            <div class="flex flex-col gap-2 p-4 bg-gray-100 text-xs">
              <span class="text-xs">Account Name:</span>
              <span class="text-sm font-semibold">{item.accountName}</span>
              <span class="text-xs border-t border-gray-200">
                Account Type:
              </span>
              <span class="text-sm font-semibold">
                {_.startCase(item.accountType)}
              </span>
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
          <span class="text-xs border-t border-gray-200">Account Name:</span>
          <span class="text-sm font-semibold">{item.accountName}</span>
          <span class="text-xs border-t border-gray-200">Account Type:</span>
          <span class="text-sm font-semibold">
            {_.startCase(item.accountType)}
          </span>
          <span class="text-xs border-t border-gray-200">Enlisted Date:</span>
          <span class="text-sm font-semibold">{item.createdAt}</span>
        </div>

        {/* box-3 */}
        <div class="col-span-full row-3 md:row-2 flex flex-row gap-2 items-center border-t border-gray-200 p-4">
          <div class="tooltip" data-tip="Edit">
            <label for={`user-edit-form-${item.id}`}>
              <Icon icon="ph:note-pencil-thin" />
            </label>
          </div>

          <button class="tooltip" data-tip="Delete">
            <Icon icon="ph:eraser-thin" />
          </button>
        </div>
      </li>

      {/* account edit form drawer component */}
      <UserEditItem item={item} />
    </>
  );
};

export const UserList: FC<{ items: User[] }> = ({ items }) => {
  return (
    <ul class="grid grid-cols-1 gap-4">
      {items.map((item) => (
        <UserItem item={item} />
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
