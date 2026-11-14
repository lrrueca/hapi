import { Icon } from "@/components/Icon.js";
import type { FC } from "hono/jsx";
import type { CabconCode } from "./cabconCode.types.js";
import _ from "lodash";

interface DataListProps {
  items: CabconCode[];
  error?: string;
}

export const Header: FC = () => {
  return (
    <div class="self-center flex flex-row items-center gap-2">
      <Icon icon="ph:calendar-blank-thin" />
      <h2 class="font-semibold text-gray-500 md:text-xl">
        Cabcon Code Management
      </h2>
    </div>
  );
};

export const DrawerAddForm: FC = () => {
  return (
    <div class="drawer drawer-end">
      <input
        id="drawer-new-cabcon-form"
        type="checkbox"
        class="drawer-toggle"
      />
      <div class="drawer-side">
        <label
          for="drawer-new-cabcon-form"
          aria-label="close sidebar"
          class="drawer-overlay"
        />
        <div class="menu bg-base-200 min-h-full w-80 p-4 relative">
          <div class="w-min absolute right-0">
            <label
              for="drawer-new-cabcon-form"
              class="btn btn-ghost hover:[background:none] hover:[border:none] hover:[outline:none] hover:[box-shadow:none]"
            >
              <Icon icon="ph:x-thin" />
            </label>
          </div>

          <fieldset class="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4 mt-10">
            <legend class="fieldset-legend">New Cabcon Code</legend>

            <label for="cabcon-code-month" class="label">
              Code Month
            </label>
            <input
              id="cabcon-code-month"
              type="text"
              class="input"
              placeholder="Code Month"
            />

            <label for="cabcon-code-status" class="label">
              Status
            </label>
            <select id="cabcon-code-status" class="select">
              <option disabled selected>
                Select Status
              </option>
              <option>Open</option>
              <option>Closed</option>
            </select>

            <label for="cabcon-code-start-date" class="label">
              Start Date
            </label>
            <input id="cabcon-code-start-date" type="date" class="input" />

            <label for="cabcon-code-end-date" class="label">
              End Date
            </label>
            <input id="cabcon-code-end-date" type="date" class="input" />

            <button class="btn btn-neutral mt-4">Submit</button>
          </fieldset>
        </div>
      </div>
    </div>
  );
};

export const DrawerFilter: FC = () => {
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
          <li class="mt-10">Status</li>
          <li>
            <label class="p-0">
              <input type="checkbox" class="checkbox" />
              Open
            </label>
          </li>
          <li>
            <label class="p-0">
              <input type="checkbox" class="checkbox" />
              Closed
            </label>
          </li>

          <li>
            <span>Date</span>
          </li>

          <li>
            <label for="cabcon-code-filter-start-date">Start Date</label>
          </li>
          <li>
            <input
              id="cabcon-code-filter-start-date"
              type="date"
              class="input"
            />
          </li>
          <li>
            <label for="cabcon-code-filter-end-date">End Date</label>
          </li>
          <li>
            <input id="cabcon-code-filter-end-date" type="date" class="input" />
          </li>

          <li class="mt-4">
            <button class="btn btn-neutral">Apply Filter</button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export const Toolbar: FC = () => {
  const header = "Cabcon Management";
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

      {/* add cabcon button */}
      <label for="drawer-new-cabcon-form" class="btn btn-neutral">
        New
      </label>
    </div>
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

export const DataList: FC<DataListProps> = ({ items, error }) => {
  return (
    <>
      {items.map((item) => (
        <div
          key={item.id}
          class="p-4 grid grid-rows=[1fr_1fr_50px] lg:grid-rows-[1fr-50px] grid-cols-1 md:grid-cols-2 md:gap-4 bg-base-100 border border-gray-200 rounded"
        >
          {/* box 1*/}
          <div class="flex flex-col gap-2 p-4 ">
            <div class="text-lg text-gray-500 font-semibold">
              {item.codeMonth}
            </div>
            <div class="text-sm text-gray-500">
              Status:
              <span class="font-semibold">{` ${_.startCase(item.status)}`}</span>
            </div>
          </div>

          {/* box 2*/}
          <div class="flex flex-col p-4 bg-gray-100">
            <div class="text-sm text-gray-500">Start Date</div>
            <div class="text-sm md:text-base text-gray-500 font-semibold">
              {item.startDate}
            </div>
            <div class="text-sm text-gray-500 mt-2 border-t border-gray-200">
              End Date
            </div>
            <div class="text-sm md:text-base text-gray-500 font-semibold">
              {item.endDate}
            </div>
          </div>

          {/* box 3*/}
          <span class="p-4 h-12 flex flex-row gap-4 items-center border-t border-gray-200">
            <label for={`cabcon-code-edit-form-${item.id}`}>
              <Icon icon="ph:note-pencil-thin" />
            </label>
            <button>
              <Icon icon="ph:eraser-thin" />
            </button>
          </span>

          {/* box 4 - drawer edit form */}
          <div class="drawer drawer-end">
            <input
              id={`cabcon-code-edit-form-${item.id}`}
              type="checkbox"
              class="drawer-toggle"
            />
            <div class="drawer-side">
              <label
                for={`cabcon-code-edit-form-${item.id}`}
                aria-label="close sidebar"
                class="drawer-overlay"
              />

              <div class="menu bg-base-200 min-h-full w-80 p-4 relative">
                <div class="w-min absolute right-0">
                  <label
                    for={`cabcon-code-edit-form-${item.id}`}
                    class="btn btn-ghost hover:[background:none] hover:[border:none] hover:[outline:none] hover:[box-shadow:none]"
                  >
                    <Icon icon="ph:x-thin" />
                  </label>
                </div>

                <fieldset class="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4 mt-10">
                  <legend class="fieldset-legend">Edit Cabcon Code</legend>

                  <label for="cabcon-code-month" class="label">
                    Code Month
                  </label>
                  <input
                    id="cabcon-code-month"
                    type="text"
                    class="input"
                    placeholder="Code Month"
                    value={item.codeMonth}
                  />

                  <label for="cabcon-code-status" class="label">
                    Status
                  </label>
                  <select id="cabcon-code-status" class="select">
                    <option disabled selected>
                      {_.startCase(item.status)}
                    </option>
                    <option>Open</option>
                    <option>Closed</option>
                  </select>

                  <label for="cabcon-code-start-date" class="label">
                    Start Date
                  </label>
                  <input
                    id="cabcon-code-start-date"
                    type="date"
                    class="input"
                  />

                  <label for="cabcon-code-end-date" class="label">
                    End Date
                  </label>
                  <input id="cabcon-code-end-date" type="date" class="input" />

                  <button class="btn btn-neutral mt-4">Submit</button>
                </fieldset>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};
