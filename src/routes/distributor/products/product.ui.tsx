import { Icon } from "@/components/Icon.js";
import {
  badges,
  brands,
  packaging,
  unitSize,
} from "@/lib/config/product.config.js";
import type { FC } from "hono/jsx";
import type { DataListProps, DataProps } from "./product.types.js";

export const Header: FC = () => {
  return (
    <div class="self-center flex flex-row items-center gap-2">
      <Icon icon="ph:calendar-blank-thin" />
      <h2 class="font-semibold text-gray-500 md:text-xl">Product Management</h2>
    </div>
  );
};

export const DrawerAddForm: FC = () => {
  return (
    <div class="drawer drawer-end">
      <input
        id="drawer-new-product-form"
        type="checkbox"
        class="drawer-toggle"
      />
      <div class="drawer-side">
        <label
          for="drawer-new-product-form"
          aria-label="close sidebar"
          class="drawer-overlay"
        />
        <div class="menu bg-base-200 min-h-full w-80 p-4 relative">
          <div class="w-min absolute right-0">
            <label
              for="drawer-new-product-form"
              class="btn btn-ghost hover:[background:none] hover:[border:none] hover:[outline:none] hover:[box-shadow:none]"
            >
              <Icon icon="ph:x-thin" />
            </label>
          </div>

          <fieldset class="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4 mt-10">
            <legend class="fieldset-legend">New Product</legend>

            <label for="product-name" class="label">
              Product Name
            </label>
            <input
              id="product-name"
              type="text"
              class="input"
              placeholder="Product Name"
            />

            <label for="product-description" class="label">
              Description
            </label>
            <textarea
              id="product-description"
              class="textarea"
              placeholder="Description"
            />

            <label for="product-brand" class="label">
              Brand
            </label>
            <input id="product-brand" type="text" class="input" />

            <label for="product-size" class="label">
              Size
            </label>
            <input id="product-size" type="number" class="input" />

            <label for="product-unit-size" class="label">
              Size
            </label>
            <select id="product-unit-size">
              <option disable selected>
                Select Unit Size
              </option>
              {unitSize.map((us) => (
                <option>{us}</option>
              ))}
            </select>

            <label for="product-packaging" class="label">
              Packaging
            </label>
            <select id="product-packaging">
              <option disable selected>
                Select Packaging
              </option>
              {packaging.map((p) => (
                <option>{p}</option>
              ))}
            </select>

            <label for="product-price" class="label">
              Price
            </label>
            <input id="product-price" type="number" class="input" />

            <label for="product-badge" class="label">
              Badge
            </label>
            <select id="product-badge">
              <option disable selected>
                Select Badge
              </option>
              {badges.map((b) => (
                <option>{b}</option>
              ))}
            </select>

            <label for="product-is-active" class="label">
              <input type="checkbox" class="toggle" />
              Is Available
            </label>

            <button class="btn btn-neutral mt-4">Submit</button>
          </fieldset>
        </div>
      </div>
    </div>
  );
};

export const DrawerEditForm: FC<DataProps> = ({ item }) => {
  return (
    <div class="drawer drawer-end">
      <input
        id={`product-edit-form-${item.id}`}
        type="checkbox"
        class="drawer-toggle"
      />
      <div class="drawer-side">
        <label
          for={`product-edit-form-${item.id}`}
          aria-label="close sidebar"
          class="drawer-overlay"
        />

        <div class="menu bg-base-200 min-h-full w-80 p-4 relative">
          <div class="w-min absolute right-0">
            <label
              for={`product-edit-form-${item.id}`}
              class="btn btn-ghost hover:[background:none] hover:[border:none] hover:[outline:none] hover:[box-shadow:none]"
            >
              <Icon icon="ph:x-thin" />
            </label>
          </div>

          <fieldset class="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4 mt-10">
            <legend class="fieldset-legend">Edit Product</legend>

            <label for="product-edit-name" class="label">
              Product Name
            </label>
            <input
              id="product-edit-name"
              type="text"
              class="input"
              value={item.name}
            />

            <label for="product-edit-description" class="label">
              Description
            </label>
            <textarea id="product-edit-description" class="textarea">
              {item.description}
            </textarea>

            <label for="product-edit-brand" class="label">
              Brand
            </label>
            <select id="product-edit-brand">
              <option disabled selected>
                {item.brand}
              </option>
              {brands.map((b) => (
                <option value="">{b}</option>
              ))}
            </select>

            <label for="product-edit-size" class="label">
              Size
            </label>
            <input
              id="product-edit-size"
              type="number"
              value={item.size}
              class="input"
            />

            <label for="product-edit-unit-size" class="label">
              Size
            </label>
            <select id="product-edit-unit-size">
              <option disabled selected>
                {item.unitSize}
              </option>
              {unitSize.map((us) => (
                <option>{us}</option>
              ))}
            </select>

            <label for="product-edit-packaging" class="label">
              Packaging
            </label>
            <select id="product-edit-packaging">
              <option disabled selected>
                {item.packaging}
              </option>
              {packaging.map((p) => (
                <option>{p}</option>
              ))}
            </select>

            <label for="product-edit-price" class="label">
              Price
            </label>
            <input
              id="product-edit-price"
              type="number"
              value={item.price}
              class="input"
            />

            <label for="product-edit-badge" class="label">
              Badge
            </label>
            <select id="product-edit-badge">
              <option disabled selected>
                {item.badge}
              </option>
              {badges.map((b) => (
                <option>{b}</option>
              ))}
            </select>

            <label for="product-edit-is-active" class="label">
              <input
                type="checkbox"
                class="toggle"
                checked={item.isAvailable}
              />
              Is Available
            </label>

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
          <li class="mt-10">Brands</li>
          {brands.map((brand) => (
            <li>
              <label class="p-0">
                <input type="checkbox" class="checkbox" />
                {brand}
              </label>
            </li>
          ))}

          <li class="mt-10">Unit Size</li>
          {unitSize.map((us) => (
            <li>
              <label class="p-0">
                <input type="checkbox" class="checkbox" />
                {us}
              </label>
            </li>
          ))}

          <li class="mt-10">Packaging Size</li>
          {packaging.map((p) => (
            <li>
              <label class="p-0">
                <input type="checkbox" class="checkbox" />
                {p}
              </label>
            </li>
          ))}

          <li class="mt-10">Badge</li>
          {badges.map((b) => (
            <li>
              <label class="p-0">
                <input type="checkbox" class="checkbox" />
                {b}
              </label>
            </li>
          ))}

          <li>
            <label for="product-is-active" class="label">
              <input type="checkbox" class="toggle" />
              Is Active
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

export const Toolbar: FC = () => {
  const header = "Product Management";
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
      <label for="drawer-new-product-form" class="btn btn-neutral">
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
            <div class="text-lg text-gray-500 font-semibold">{item.name}</div>
            <div class="flex flex-col gap-2">
              <span class="text-gray-500">Description:</span>
              <span class="text-gray-500 font-semibold">
                {item.description}
              </span>
            </div>
            <div class="flex flex-col gap-2">
              <span class="text-gray-500">Brand:</span>
              <span class="text-gray-500 font-semibold">{item.brand}</span>
            </div>
          </div>

          {/* box 2*/}
          <div class="flex flex-col p-4 bg-gray-100">
            <div class="text-sm text-gray-500">Unit Packaging</div>
            <div class="text-sm md:text-base text-gray-500 font-semibold">
              {`${item.size}${item.unitSize}`} &middot; {item.packaging}
            </div>
            <div class="flex flex-col gap-2 mt-2 border-t border-gray-200">
              <span class="text-sm text-gray-500">Badge</span>
              <span class="text-sm md:text-base text-gray-500 font-semibold">
                {item.badge}
              </span>
            </div>
            <div class="flex flex-col gap-2 mt-2 border-t border-gray-200">
              <span class="text-sm text-gray-500">Available</span>
              <span class="text-sm md:text-base text-gray-500 font-semibold">
                {item.isAvailable}
              </span>
            </div>
          </div>

          {/* box 3*/}
          <span class="p-4 h-12 flex flex-row gap-4 items-center border-t border-gray-200">
            <label for={`product-edit-form-${item.id}`}>
              <Icon icon="ph:note-pencil-thin" />
            </label>
            <button>
              <Icon icon="ph:eraser-thin" />
            </button>
          </span>

          {/* box 4 - drawer edit form */}
          <DrawerEditForm item={item} />
        </div>
      ))}
    </>
  );
};
