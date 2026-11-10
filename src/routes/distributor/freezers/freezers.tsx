import { Icon } from "@/components/Icon.js";
import type { Freezer } from "@lib/types.js";
import { Hono } from "hono";
import type { FC } from "hono/jsx";
import _ from "lodash";
import { Layout } from "../layout.js";
import { freezerMockData } from "./freezers.mock.js";

const freezers: Freezer[] = freezerMockData;
const models: string[] = [
  "Swing-up Freezer",
  "Sliding-Glass Freezer",
  "Curved Sliding-Glass Freezer",
  "Lighted Curved Sliding-Glass Freezer",
];
const brands: string[] = ["Aucma", "Haier", "Hiron", "Liebherr"];
const capacities: string[] = ["8cu", "12cu", "15cu", "18cu"];
const currentYear = new Date().getFullYear();
const years = Array.from({ length: 20 }, (_, i) => currentYear - i);

interface FreezerItemProps {
  freezer: Freezer;
}

const Header: FC = () => {
  return (
    <div class="self-center flex flex-row items-center gap-2">
      <Icon icon="ph:browser-thin" />
      <h2 class="font-semibold text-gray-500 text-xl">Freezer Management</h2>
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
          <li class="mt-10">Model</li>
          {models.map((model, index) => (
            <li>
              <label class="p-0">
                <input type="checkbox" class="checkbox" />
                {model}
              </label>
            </li>
          ))}
          <li class="mt-4 border-t border-gray-200">Brands</li>
          {brands.map((brand, index) => (
            <li>
              <label class="p-0">
                <input type="checkbox" class="checkbox" />
                {brand}
              </label>
            </li>
          ))}
          <li class="mt-4 border-t border-gray-200">Capacity</li>
          {capacities.map((capacity, index) => (
            <li>
              <label class="p-0">
                <input type="checkbox" class="checkbox" />
                {capacity}
              </label>
            </li>
          ))}
          <li class="mt-4 border-t border-gray-200">Year</li>
          <select name="year" class="select select-bordered">
            <option value="">All Years</option>
            {years.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>

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
        id="drawer-new-freezer-form"
        type="checkbox"
        class="drawer-toggle"
      />
      <div class="drawer-side">
        <label
          for="drawer-new-freezer-form"
          aria-label="close sidebar"
          class="drawer-overlay"
        />
        <div class="menu bg-base-200 min-h-full w-80 p-4 relative">
          <div class="w-min absolute right-0">
            <label
              for="drawer-new-freezer-form"
              class="btn btn-ghost hover:[background:none] hover:[border:none] hover:[outline:none] hover:[box-shadow:none]"
            >
              <Icon icon="ph:x-thin" />
            </label>
          </div>

          <fieldset class="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4 mt-10">
            <legend class="fieldset-legend">New Freezer</legend>

            <label for="freezer-model" class="label">
              Model
            </label>
            <input
              type="text"
              class="input"
              placeholder="Freezer Model"
              list="freezer-model"
            />
            <datalist id="freezer-model">
              <option>Swing-up Freezer</option>
              <option>Sliding Glass Freezer</option>
              <option>Curved Sliding Glass Freezer</option>
              <option>Curved Sliding Glass Lighted Freezer</option>
            </datalist>

            <label for="freezer-capacity" class="label">
              Capacity
            </label>
            <input
              type="text"
              class="input"
              placeholder="Freezer Capacity"
              list="freezer-capacity"
            />
            <datalist id="freezer-capacity">
              <option>8cu</option>
              <option>9cu</option>
              <option>12cu</option>
              <option>15cu</option>
            </datalist>

            <label for="freezer-brand" class="label">
              Brand
            </label>
            <input
              type="text"
              class="input"
              placeholder="Freezer Brand"
              list="freezer-brand"
            />
            <datalist id="freezer-brand">
              <option>Aucma</option>
              <option>Haier</option>
              <option>Hiron</option>
              <option>Liebherr</option>
            </datalist>

            <label for="freezer-year-model" class="label">
              Year Model
            </label>
            <input
              id="freezer-year-model"
              type="number"
              min="1900"
              max="2100"
              step="1"
              placeholder="YYYY"
              value={new Date().getFullYear().toString()}
              class="input input-bordered w-full max-w-xs"
            />

            <label for="freezer-barcode" class="label">
              Barcode
            </label>
            <input
              id="freezer-barcode"
              type="text"
              class="input"
              placeholder="Barcode"
              required
            />

            <button class="btn btn-neutral mt-4">Submit</button>
          </fieldset>
        </div>
      </div>
    </div>
  );
};
const DrawerEditForm: FC<FreezerItemProps> = ({ freezer }) => {
  const {
    id,
    model,
    capacity,
    unit,
    brand,
    yearModel,
    barcode,
    distributorId,
  } = freezer;

  return (
    <div class="drawer drawer-end">
      <input id={`form-freezer-${id}`} type="checkbox" class="drawer-toggle" />

      <div class="drawer-side">
        <label
          for={`form-freezer-${id}`}
          aria-label="close sidebar"
          class="drawer-overlay"
        />

        <div class="menu bg-base-200 min-h-full w-80 p-4 relative">
          <div class="w-min absolute right-0">
            <label
              for={`form-freezer-${id}`}
              class="btn btn-ghost hover:[background:none] hover:[border:none] hover:[outline:none] hover:[box-shadow:none]"
            >
              <Icon icon="ph:x-thin" />
            </label>
          </div>

          <fieldset class="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4 mt-10">
            <legend class="fieldset-legend">Edit Freezer Details</legend>

            <label for="freezer-model" class="label">
              Model
            </label>
            <input
              type="text"
              class="input"
              placeholder="Freezer Model"
              list="freezer-model"
              value={_.startCase(model)}
            />
            <datalist id="freezer-model">
              <option>Swing-up Freezer</option>
              <option>Sliding Glass Freezer</option>
              <option>Curved Sliding Glass Freezer</option>
              <option>Curved Sliding Glass Lighted Freezer</option>
            </datalist>

            <label for="freezer-capacity" class="label">
              Capacity
            </label>
            <input
              type="text"
              class="input"
              placeholder="Freezer Capacity"
              list="freezer-capacity"
              value={`${capacity + unit}`}
            />
            <datalist id="freezer-capacity">
              <option>8cu</option>
              <option>9cu</option>
              <option>12cu</option>
              <option>15cu</option>
            </datalist>

            <label for="freezer-brand" class="label">
              Brand
            </label>
            <input
              type="text"
              class="input"
              placeholder="Freezer Brand"
              list="freezer-brand"
              value={_.startCase(brand)}
            />
            <datalist id="freezer-brand">
              <option>Aucma</option>
              <option>Haier</option>
              <option>Hiron</option>
              <option>Liebherr</option>
            </datalist>

            <label for="freezer-year-model" class="label">
              Year Model
            </label>
            <input
              id="freezer-year-model"
              type="number"
              min="1900"
              max="2100"
              step="1"
              placeholder="YYYY"
              value={yearModel}
              class="input input-bordered w-full max-w-xs"
            />

            <label for="freezer-barcode" class="label">
              Barcode
            </label>
            <input
              id="freezer-barcode"
              type="text"
              class="input"
              placeholder="Barcode"
              required
              value={barcode}
            />

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
    <div class="w-full md:w-auto place-self-center justify-self-end flex flex-row gap-4">
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
      <label for="drawer-new-freezer-form" class="btn btn-neutral">
        New
      </label>
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

const FreezerItem: FC<FreezerItemProps> = ({ freezer }) => {
  const {
    id,
    model,
    capacity,
    unit,
    brand,
    yearModel,
    barcode,
    distributorId,
  } = freezer;
  return (
    <>
      <div
        id={`freezer-${id}`}
        class="p-4 border border-gray-200 bg-base-100 rounded grid grid-cols-1 grid-rows-[1fr_36px]"
      >
        <div class="grid grid-cols-1 grid-rows-[1ft_50px] md:grid-cols-2 lg:grid-cols-[2fr_1fr] md:gap-4">
          <div class="flex flex-col gap-2">
            <span class="text-xs text-gray-400 font-medium">Barcode</span>
            <div class="text-xs md:text-base text-gray-500 font-semibold">
              {barcode}
            </div>
            <span class="text-xs text-gray-400 font-medium border-t border-gray-200">
              Brand-Model
            </span>
            <div class="text-sm md:text-lg lg:text-xl text-gray-500 font-bold">{`${_.startCase(brand)} - ${_.startCase(model)}`}</div>
          </div>

          <div class="pb-4 flex flex-col gap-2">
            <div class="text-sm text-gray-500 font-semibold md:hidden">
              {`${capacity}${unit}`} &middot; {yearModel}
            </div>

            <div class="border-t border-gray-200 flex flex-col gap-2 md:hidden">
              <span class="text-xs text-gray-400 font-medium">
                Distributor ID
              </span>
              <span class="text-sm text-gray-500 font-medium">
                {distributorId}
              </span>
            </div>

            <div class="p-4 hidden md:flex flex-col gap-2 bg-gray-50 rounded">
              <span class="text-xs text-gray-400 font-medium">Capacity</span>
              <span class="text-gray-500 font-bold">{`${capacity}${unit}`}</span>
              <span class="text-xs text-gray-400 font-medium border-t border-gray-200">
                Year Model
              </span>
              <span class="text-gray-500 font-bold">{yearModel}</span>
              <span class="text-xs text-gray-400 font-medium border-t border-gray-200">
                Distributor ID
              </span>
              <span class="text-gray-500 font-bold">{distributorId}</span>
            </div>
          </div>
        </div>

        <span class="h-12 flex flex-row gap-4 items-center border-t border-gray-200">
          <label for={`form-freezer-${id}`}>
            <Icon icon="ph:note-pencil-thin" />
          </label>
          <button>
            <Icon icon="ph:eraser-thin" />
          </button>
        </span>
      </div>
      {/* drawer */}
      <DrawerEditForm freezer={freezer} />
    </>
  );
};

const freezerRouter = new Hono();

freezerRouter.get("/", (c) => {
  return c.render(
    <>
      <Layout>
        <Header />
        <Toolbar />

        <div class="flex flex-col gap-4">
          {freezers.map((f, i) => (
            <>
              <FreezerItem key={i} freezer={f} />
            </>
          ))}
        </div>

        <Pagination />
      </Layout>
      {/* drawers */}
      <DrawerFilter />
      <DrawerAddForm />
    </>,
    { title: "Freezers" },
  );
});

export default freezerRouter;
