import { Icon } from "@/components/Icon.js";
import type { Account, Freezer } from "@/lib/types.js";
import { UserEditItem } from "@routes/distributor/users/users.component.js";
import type { FC } from "hono/jsx";
import _ from "lodash";

const freezerModels = [
  { "swing-up-freezer": "Swing-up Freezer" },
  { "sliding-glass": "Sliding Glass" },
  { "curved-sliding-glass": "Curved Sliding Glass" },
  { "lighted-curved-sliding-glass": "Lighted Curved Sliding Glass" },
];

const freezerCapacities = [8, 9, 12, 15, 18, 24];
const freezerBrands = [
  { aucma: "Aucma" },
  { hiron: "Hiron" },
  { haier: "Haier" },
  { liebherr: "Leibherr" },
];

export interface FreezerDataProps {
  freezer: Freezer;
  account: Account;
  deployment: {
    date: string;
  };
}

export const FreezerAddForm: FC = () => {
  return (
    <div class="drawer drawer-end">
      <input
        id="drawer-add-freezer-form"
        type="checkbox"
        class="drawer-toggle"
      />
      <div class="drawer-side">
        <label
          for="drawer-add-freezer-form"
          aria-label="close sidebar"
          class="drawer-overlay"
        />
        <div class="menu bg-base-200 min-h-full w-80 p-4 relative">
          <div class="w-min absolute right-0">
            <label
              for="drawer-add-freezer-form"
              class="btn btn-ghost hover:[background:none] hover:[border:none] hover:[outline:none] hover:[box-shadow:none]"
            >
              <Icon icon="ph:x" />
            </label>
          </div>

          <fieldset class="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4 mt-10">
            <legend class="fieldset-legend">Add Freezer</legend>

            <label for="freezer-model" class="label">
              Model
            </label>
            <select id="freezer-model" class="select">
              <option disabled selected>
                Select Model
              </option>
              {freezerModels.map((m, idx) =>
                Object.entries(m).map(([key, value]) => (
                  <option key={`${idx}-${key}`} value={key}>
                    {value}
                  </option>
                )),
              )}
            </select>

            <label for="freezer-capacity" class="label">
              Capacity
            </label>
            <select id="freezer-capacity" class="select">
              <option disabled selected>
                Select Capacity
              </option>
              {freezerCapacities.map((c, idx) => (
                <option key={`${idx}-${c}`}>{c}</option>
              ))}
            </select>

            <label for="freezer-brand" class="label">
              Brand
            </label>
            <select id="freezer-brand" class="select">
              <option disabled selected>
                Select Brand
              </option>
              {freezerBrands.map((b, idx) =>
                Object.entries(b).map(([key, value]) => (
                  <option key={`${idx}-${key}`} value={key}>
                    {value}
                  </option>
                )),
              )}
            </select>

            <label for="freezer-year-model" class="label">
              Year Model
            </label>
            <input
              id="freezer-year-model"
              type="number"
              class="input"
              placeholder="Year Model"
              required
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

export const FreezerEditItem: FC<{ item: Freezer }> = ({ item }) => {
  return (
    <div class="drawer drawer-end">
      <input
        id={`freezer-edit-form-${item.id}`}
        type="checkbox"
        class="drawer-toggle"
      />
      <div class="drawer-side">
        <label
          for={`freezer-edit-form-${item.id}`}
          aria-label="close sidebar"
          class="drawer-overlay"
        />
        <div class="menu bg-base-200 min-h-full w-80 p-4 flex flex-col gap-2">
          <label for={`freezer-edit-form-${item.id}`} class="ml-auto">
            <Icon icon="ph:x" />
          </label>
          <form>
            <fieldset class="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
              <legend class="fieldset-legend text-gray-500">
                Edit Freezer Details
              </legend>

              <label for="freezer-model" class="label">
                Model
              </label>
              <select id="freezer-model" class="select">
                <option disabled selected>
                  {_.startCase(item.model)}
                </option>
                {freezerModels.map((m, idx) =>
                  Object.entries(m).map(([key, value]) => (
                    <option key={`${idx}-${key}`} value={key}>
                      {value}
                    </option>
                  )),
                )}
              </select>

              <label for="freezer-capacity" class="label">
                Capacity
              </label>
              <select id="freezer-capacity" class="select">
                <option disabled selected>
                  {item.capacity}
                </option>
                {freezerCapacities.map((c, idx) => (
                  <option key={`${idx}-${c}`}>{c}</option>
                ))}
              </select>

              <label for="freezer-brand" class="label">
                Brand
              </label>
              <select id="freezer-brand" class="select">
                <option disabled selected>
                  {item.brand}
                </option>
                {freezerBrands.map((b, idx) =>
                  Object.entries(b).map(([key, value]) => (
                    <option key={`${idx}-${key}`} value={key}>
                      {value}
                    </option>
                  )),
                )}
              </select>

              <label for="freezer-year-model" class="label">
                Year Model
              </label>
              <input
                id="freezer-year-model"
                type="number"
                class="input"
                placeholder="Year Model"
                value={item.yearModel}
                required
              />

              <label for="freezer-barcode" class="label">
                Barcode
              </label>
              <input
                id="freezer-barcode"
                type="text"
                class="input"
                placeholder="Barcode"
                value={item.barcode}
                required
              />

              <button class="btn btn-neutral mt-4">Submit</button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};

export const FreezerToolbar: FC = () => {
  return (
    <>
      <div class="px-4 place-self-center justify-self-end flex flex-row gap-2">
        <label class="btn btn-sm btn-outline rounded-full">
          <button>
            <Icon icon="ph:calendar-blank" />
          </button>
        </label>

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
                    id="search-freezer"
                    type="search"
                    required
                    placeholder="Search"
                    autofocus
                  />
                </label>
                <span class="text-xs">Search by Freezer ID or Barcode</span>
              </fieldset>

              {/* account type */}
              <fieldset class="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4 flex flex-col gap-4">
                <legend class="fieldset-legend">Filter</legend>
                <select
                  id="select-freezer-model"
                  class="select select-bordered w-full"
                >
                  <option disabled selected>
                    Select Model
                  </option>
                  {freezerModels.map((m, idx) =>
                    Object.entries(m).map(([key, value]) => (
                      <option key={`${idx}-${key}`} value={key}>
                        {value}
                      </option>
                    )),
                  )}
                </select>

                <label for="freezer-capacity" class="label">
                  Capacity
                </label>
                <select
                  id="freezer-capacity"
                  class="select select-bordered w-full"
                >
                  <option disabled selected>
                    Select Capacity
                  </option>
                  {freezerCapacities.map((c, idx) => (
                    <option key={`${idx}-${c}`}>{c}</option>
                  ))}
                </select>

                <label for="freezer-brand" class="label">
                  Brand
                </label>
                <select
                  id="freezer-brand"
                  class="select select-bordered w-full"
                >
                  <option disabled selected>
                    Select Brand
                  </option>
                  {freezerBrands.map((b, idx) =>
                    Object.entries(b).map(([key, value]) => (
                      <option key={`${idx}-${key}`} value={key}>
                        {value}
                      </option>
                    )),
                  )}
                </select>

                <label for="freezer-year-model" class="label">
                  Year Model
                </label>
                <input
                  id="freezer-year-model"
                  type="number"
                  class="input w-full"
                  placeholder="Year Model"
                  required
                />
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
          for="drawer-add-freezer-form"
          class="btn btn-neutral btn-sm rounded-full"
        >
          <Icon icon="ph:user-circle-plus" />
        </label>
      </div>
    </>
  );
};

export const FreezerDataItem: FC<{ item: FreezerDataProps }> = ({ item }) => {
  return (
    <>
      <li class="grid grid-cols-1 md:grid-cols-2 grid-rows-[1ft_1ft_30px] md:grid-rows-[1fr_50px] gap-2 border-gray-200 rounded bg-base-100 p-4">
        {/* box-1 */}
        <div class="col-1 row-1 flex flex-col gap-2 px-4">
          <span class="text-xs md:text-sm">{`ID: ${item.freezer.id}`}</span>
          <span class="text-lg lg:text-2xl font-bold">{`${_.startCase(item.freezer.brand)} - ${_.startCase(item.freezer.model)}`}</span>
          <span class="text-xs border-t border-gray-200">Barcode:</span>
          <span class="text-sm font-semibold">{item.freezer.barcode}</span>
          <span class="text-xs border-t border-gray-200">Capacity Unit:</span>
          <span class="text-sm font-semibold">{`${item.freezer.capacity}${item.freezer.unit}`}</span>
          <span class="text-xs border-t border-gray-200">Year Model:</span>
          <span class="text-sm font-semibold">{item.freezer.yearModel}</span>
          <span class="text-xs border-t border-gray-200">Status</span>
          <span class="text-sm font-semibold">Deployed</span>
          <span class="text-xs border-t border-gray-200">Deployment Date:</span>
          <span class="text-sm font-semibold">{item.deployment.date}</span>
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
              <span class="text-xs">Account:</span>
              <span class="text-sm font-semibold">{item.account.name}</span>

              <span class="text-xs border-t border-gray-200">ID:</span>
              <span class="text-sm font-semibold">{item.account.id}</span>

              <span class="text-xs border-t border-gray-200">
                Account Type:
              </span>
              <span class="text-sm font-semibold">
                {_.startCase(item.account.type)}
              </span>
              <span class="text-xs border-t border-gray-200">Status:</span>
              <span class="text-sm font-semibold">
                {item.account.isActive ? "Active" : "Idle"}
              </span>
              <span class="text-xs border-t border-gray-200">Address:</span>
              <span class="text-sm font-semibold">
                {item.account.addressLine1}
              </span>
              <span class="text-sm font-semibold">
                {item.account.addressLine2}
              </span>
              <span class="text-xs border-t border-gray-200">Phone:</span>
              <span class="text-sm font-semibold">{item.account.phone}</span>
            </div>
          </div>
        </div>

        {/* box-2 - medium to large devices */}
        <div class="hidden col-1 md:col-2 md:row-1 md:flex flex-col gap-2 p-4 bg-gray-100 text-xs md:text-base">
          <span class="text-xs hidden md:block">Account:</span>
          <span class="text-sm font-semibold">{item.account.name}</span>

          <span class="text-xs border-t border-gray-200 hidden md:block">
            ID:
          </span>
          <span class="text-sm font-semibold">{item.account.id}</span>

          <span class="text-xs border-t border-gray-200 hidden md:block">
            Account Type:
          </span>
          <span class="text-sm font-semibold">
            {_.startCase(item.account.type)}
          </span>
          <span class="text-xs border-t border-gray-200 hidden md:block">
            Status:
          </span>
          <span class="text-sm font-semibold">
            {item.account.isActive ? "Active" : "Idle"}
          </span>

          <span class="text-xs border-t border-gray-200 hidden md:block">
            Address:
          </span>

          <span class="text-sm font-semibold text-balance hidden md:block">
            {item.account.addressLine1}
          </span>
          <span class="text-sm font-semibold text-balance hidden md:block">
            {item.account.addressLine2}
          </span>

          <span class="text-xs border-t border-gray-200 hidden md:block">
            Phone:
          </span>
          <span class="text-sm font-semibold text-balance hidden md:block">
            {item.account.phone}
          </span>
        </div>

        {/* box-3 */}
        <div class="col-span-full row-3 md:row-2 flex flex-row gap-2 items-center border-t border-gray-200 p-4">
          <div class="tooltip" data-tip="Edit">
            <label for={`freezer-edit-form-${item.freezer.id}`}>
              <Icon icon="ph:note-pencil" />
            </label>
          </div>

          <button class="tooltip" data-tip="Delete">
            <Icon icon="ph:eraser" />
          </button>
        </div>
      </li>

      {/* account edit form drawer component */}
      <FreezerEditItem item={item.freezer} />
    </>
  );
};

export const FreezerDataList: FC<{ items: FreezerDataProps[] }> = ({
  items,
}) => {
  return (
    <ul class="grid grid-cols-1 gap-4">
      {items.map((item) => (
        <FreezerDataItem item={item} />
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
