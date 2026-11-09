import { Icon } from "@/components/Icon.js";
import { Hono } from "hono";
import type { FC } from "hono/jsx";
import { Layout } from "../layout.js";

interface User {
  firstName: string;
  middleName: string;
  lastName: string;
  address: string;
  phone: string;
  role: string;
  active: boolean;
}

interface UserItemProps {
  user: User;
}

// mock data
const mockUsers: User[] = [
  {
    firstName: "Kendall",
    middleName: "Micah",
    lastName: "Dach",
    address:
      "52686 Hodkiewicz Garden Apt. 924, Leannatown, Arizona, 58021-8846, Andorra",
    phone: "1-799-776-2813",
    role: "dealer-admin",
    active: false,
  },
  {
    firstName: "Carmen",
    middleName: "Shiloh",
    lastName: "Marquardt",
    address: "3113 Wolf Fork Suite 714, Kassulkestead, Florida, 40028, Canada",
    phone: "364.282.0102 x8223",
    role: "hapistore-user",
    active: true,
  },
  {
    firstName: "Maximus",
    middleName: "Leslie",
    lastName: "Jerde",
    address: "4892 Jillian Ramp Apt. 549, Stanmouth, Kentucky, 16150, Pakistan",
    phone: "1-924-855-6379 x33290",
    role: "dealer-admin",
    active: true,
  },
  {
    firstName: "Prudence",
    middleName: "Drew",
    lastName: "Ankunding",
    address:
      "3122 Union Street Suite 380, New Burdetteside, Utah, 78044, Nepal",
    phone: "1-526-361-7308",
    role: "hapistore-admin",
    active: false,
  },
  {
    firstName: "Joaquin",
    middleName: "Avery",
    lastName: "Schumm",
    address:
      "43755 Kautzer Creek Apt. 560, Poway, Tennessee, 27538-7629, Eritrea",
    phone: "928.308.0850 x4084",
    role: "hapistore-admin",
    active: false,
  },
];

const Header: FC = () => {
  return (
    <div class="self-center flex flex-row items-center gap-2">
      <Icon icon="ph:users-three-thin" />
      <h2 class="font-semibold text-gray-500 text-xl">User Management</h2>
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
                Select Role Type
              </option>
              <option>Dealer-Admin</option>
              <option>Dealer-User</option>
              <option>Hapistore-Admin</option>
              <option>Hapistore-User</option>
            </select>

            <label for="first-name" class="label">
              First Name
            </label>
            <input
              id="first-name"
              type="text"
              class="input"
              placeholder="First Name"
              required
            />

            <label for="middle-name" class="label">
              Middle Name
            </label>
            <input
              id="middle-name"
              type="text"
              class="input"
              placeholder="Middle Name"
              required
            />

            <label for="last-name" class="label">
              Last Name
            </label>
            <input
              id="last-name"
              type="text"
              class="input"
              placeholder="Last Name"
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
      <input id="drawer-edit-user-form" type="checkbox" class="drawer-toggle" />

      <div class="drawer-side">
        <label
          for="drawer-edit-user-form"
          aria-label="close sidebar"
          class="drawer-overlay"
        />

        <div class="menu bg-base-200 min-h-full w-80 p-4 relative">
          <div class="w-min absolute right-0">
            <label
              for="drawer-edit-user-form"
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
                Select Role Type
              </option>
              <option>Dealer-Admin</option>
              <option>Dealer-User</option>
              <option>Hapistore-Admin</option>
              <option>Hapistore-User</option>
            </select>

            <label for="first-name" class="label">
              First Name
            </label>
            <input
              id="first-name"
              type="text"
              class="input"
              placeholder="First Name"
              required
            />

            <label for="middle-name" class="label">
              Middle Name
            </label>
            <input
              id="middle-name"
              type="text"
              class="input"
              placeholder="Middle Name"
              required
            />

            <label for="last-name" class="label">
              Last Name
            </label>
            <input
              id="last-name"
              type="text"
              class="input"
              placeholder="Last Name"
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
        <Icon icon="ph:user-plus-thin" />
      </label>
    </div>
  );
};
const UserItemSM: FC<UserItemProps> = ({ user }) => {
  const { firstName, middleName, lastName, address, phone, role, active } =
    user;
  return (
    <div class="p-4 flex flex-col gap-2 border border-gray-200 bg-base-100 rounded sm:hidden sm:invisible">
      <span class="text-xs text-gray-400 font-bold  leading-6">
        01a1bf3e-e74b-77f2-8510-4609bcb78deb
      </span>
      <span class="text-gray-500 font-bold">{`${firstName} ${middleName} ${lastName}`}</span>
      <span class="text-sm text-gray-500 font-semibold">
        {`${role
          .split("-")
          .map((t) => t.charAt(0).toUpperCase() + t.slice(1))
          .join(" ")}`}{" "}
        &middot; {`${active === true ? "Active" : "Not Active"}`}
      </span>

      <span class="text-sm text-gray-500 font-semibold border-t border-gray-200">
        Address
      </span>
      <span class="text-gray-500 font-semibold"> {`${address}`} </span>

      <span class="text-gray-500 font-semibold flex flex-row items-center gap-2">
        <Icon icon="ph:device-mobile-thin" />
        <span>{`${phone}`}</span>
      </span>

      <span class="h-12 flex flex-row gap-4 items-center border-t border-gray-200">
        <label for="drawer-edit-user-form">
          <Icon icon="ph:note-pencil-thin" />
        </label>
        <button>
          <Icon icon="ph:eraser-thin" />
        </button>
      </span>
    </div>
  );
};
const UserItemMD: FC<UserItemProps> = ({ user }) => {
  const { firstName, middleName, lastName, address, phone, role, active } =
    user;
  return (
    <div class="p-4 hidden invisible md:flex md:visible flex-col gap-2 border border-gray-200 bg-base-100 rounded">
      <div class="flex flex-row gap-2">
        <div class="basis-1/2 flex flex-col gap-2">
          <span class="text-xs text-gray-400 font-bold leading-6">
            01a1bf3e-e74b-77f2-8510-4609bcb78deb
          </span>
          <span class="text-gray-500 font-bold md:text-xl lg:text-2xl">{`${firstName} ${middleName} ${lastName}`}</span>
          <span class="text-sm text-gray-500 font-semibold">
            {`${role
              .split("-")
              .map((t) => t.charAt(0).toUpperCase() + t.slice(1))
              .join(" ")}`}{" "}
            &middot; {`${active === true ? "Active" : "Not Active"}`}
          </span>
        </div>

        <div class="p-4 basis-1/2 flex flex-col gap-2 bg-gray-50">
          <span class="text-sm text-gray-500 font-semibold">Address</span>
          <span class="text-gray-500 font-semibold"> {`${address}`} </span>

          <span class="text-gray-500 font-semibold flex flex-row items-center gap-2">
            <Icon icon="ph:device-mobile-thin" />
            <span>{`${phone}`}</span>
          </span>
        </div>
      </div>

      <span class="h-12 flex flex-row gap-4 items-center border-t border-gray-200">
        <label for="drawer-edit-user-form">
          <Icon icon="ph:note-pencil-thin" />
        </label>
        <button>
          <Icon icon="ph:eraser-thin" />
        </button>
      </span>
    </div>
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

const userRouter = new Hono();

userRouter.get("/", (c) => {
  return c.render(
    <>
      <Layout>
        <div class="min-h-[calc(100vh-96px)] grid grid-rows-[50px_50px_1fr_100px] gap-4">
          <Header />
          <Toolbar />

          <div class="flex flex-col gap-4">
            {mockUsers.map((user, index) => (
              <>
                <UserItemSM key={index} user={user} />
                <UserItemMD key={index} user={user} />
              </>
            ))}
          </div>

          <Pagination />
        </div>
      </Layout>

      {/* drawers */}
      <DrawerFilter />
      <DrawerAddForm />
      <DrawerEditForm />
    </>,
    { title: "Users" },
  );
});

export default userRouter;
