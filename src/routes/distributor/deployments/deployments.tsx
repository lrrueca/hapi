import { Hono } from "hono";
import { Layout } from "../layout.js";
import type { FC } from "hono/jsx";
import { Icon } from "@/components/Icon.js";
import type { Deployment } from "@/lib/types.js";
import DeploymentService from "./deployment.service.js";
import _ from "lodash";

const Header: FC = () => {
  return (
    <div class="self-center flex flex-row items-center gap-2">
      <Icon icon="ph:calendar-blank-thin" />
      <h2 class="font-semibold text-gray-500 text-xl">Deployment Management</h2>
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

interface DataListProps {
  items: Deployment[];
  error?: string;
}

const Data: FC<DataListProps> = ({ items, error }) => {
  return (
    <>
      {items.map((item) => (
        <div
          key={item.id}
          class="p-4 grid grid-rows=[1fr_1fr_50px] lg:grid-rows-[1fr-50px] grid-cols-1 md:grid-cols-2 md:gap-4 bg-base-100 border border-gray-200 rounded"
        >
          {/* box-1 */}
          <div class="p-4 flex flex-col gap-4">
            <div class="flex flex-col">
              <span class="text-sm text-gray-400">Deployment Date:</span>
              <span>{item.deploymentDate}</span>
            </div>
            <div class="flex flex-col border-t border-gray-200">
              <span class="text-sm text-gray-400">Destination:</span>
              <span>{item.destination}</span>
              <div class="flex flex-col py-2">
                <span class="text-sm text-gray-400 ">Destination Status:</span>
                <span>{_.startCase(item.destinationStatus)}</span>
              </div>
              <div class="flex flex-col py-2">
                <span class="text-sm text-gray-400 ">Address:</span>
                <span>{item.address}</span>
              </div>
            </div>
            <div class="flex flex-col border-t border-gray-200">
              <span class="text-sm text-gray-400">Origin:</span>
              <span>{item.origin}</span>
              <div class="flex flex-col py-2">
                <span class="text-sm text-gray-400">Origin Status:</span>
                <span>{_.startCase(item.originStatus)}</span>
              </div>
            </div>
          </div>

          {/* box-2 */}
          <div class=" p-4 bg-gray-100">
            <span class="block mb-4 font-semibold">
              Freezers: {`${item.freezers.length} Total`}
            </span>
            <div class="flex flex-col gap-2">
              {/* first 3 freezer items */}
              {item.freezers.slice(0, 3).map((freezer, idx) => (
                <div key={freezer.id} class="not-last:border-b border-gray-200">
                  <div data-index={`${idx}`} class="flex flex-col gap-1 mt-2">
                    <div class="text-xs text-gray-400">{freezer.barcode}</div>
                    <div>{`${_.startCase(freezer.brand)} - ${_.startCase(freezer.model)}`}</div>
                    <div class="text-sm text-gray-400">
                      {`${freezer.capacity}${freezer.unit}`} &middot;{" "}
                      {`${freezer.yearModel}`}
                    </div>
                  </div>
                </div>
              ))}

              {/* other freezers to toggle visibility */}
              {item.freezers.length > 3 && (
                <details class="collapse flex flex-col" name="other-freezers">
                  <summary class="collapse-title p-0 flex flex-row gap-2">
                    <Icon icon="ph:plus-thin" width="16" />
                    <span>{`${item.freezers.length - 3} `}More</span>
                  </summary>
                  <div class="collapse-content p-0 flex flex-col gap-2">
                    {item.freezers.slice(3).map((freezer, idx) => (
                      <div
                        key={freezer.id}
                        class="not-last:border-b border-gray-200"
                      >
                        <div
                          data-index={`${idx}`}
                          class="flex flex-col gap-1 mt-2"
                        >
                          <div class="text-xs text-gray-400">
                            {freezer.barcode}
                          </div>
                          <div>{`${_.startCase(freezer.brand)} - ${_.startCase(freezer.model)}`}</div>
                          <div class="text-sm text-gray-400">
                            {`${freezer.capacity}${freezer.unit}`} &middot;{" "}
                            {`${freezer.yearModel}`}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </details>
              )}
            </div>
          </div>

          {/* box 3 */}
          <span class="p-4 h-12 flex flex-row gap-4 items-center border-t border-gray-200">
            <label for={`deployment-edit-form-${item.id}`}>
              <Icon icon="ph:note-pencil-thin" />
            </label>
            <button>
              <Icon icon="ph:eraser-thin" />
            </button>
          </span>

          {/* drawer side - edit form */}
          <div class="drawer drawer-end">
            <input
              id={`deployment-edit-form-${item.id}`}
              type="checkbox"
              class="drawer-toggle"
            />
            <div class="drawer-side">
              <label
                for={`deployment-edit-${item.id}`}
                aria-label="close sidebar"
                class="drawer-overlay"
              />

              <div class="menu bg-base-200 min-h-full w-80 p-4 relative">
                <div class="w-min absolute right-0">
                  <label
                    for={`deployment-edit-form-${item.id}`}
                    class="btn btn-ghost hover:[background:none] hover:[border:none] hover:[outline:none] hover:[box-shadow:none]"
                  >
                    <Icon icon="ph:x-thin" />
                  </label>
                </div>

                <fieldset class="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4 mt-10">
                  <legend class="fieldset-legend">
                    Edit Deployment Details
                  </legend>

                  <label for={`deployment-date-${item.id}`} class="label">
                    Deployment Date
                  </label>
                  <input
                    id={`deployment-date-${item.id}`}
                    type="text"
                    class="input"
                    value={item.deploymentDate}
                  />

                  <label
                    for={`deployment-destination-${item.id}`}
                    class="label"
                  >
                    Destination
                  </label>
                  <input
                    id={`deployment-destination-${item.id}`}
                    type="text"
                    class="input"
                    value={item.destination}
                  />

                  <label
                    for={`deployment-destination-status-${item.id}`}
                    class="label"
                  >
                    Destination Status
                  </label>
                  <select
                    id={`deployment-destination-status-${item.id}`}
                    class="select"
                  >
                    <option disabled selected>
                      {item.destinationStatus}
                    </option>
                    <option>to-recieve</option>
                    <option>received</option>
                    <option>cancelled</option>
                  </select>

                  <label for={`deployment-origin-${item.id}`} class="label">
                    Origin
                  </label>
                  <input
                    id={`deployment-origin-${item.id}`}
                    type="text"
                    class="input"
                    value={item.origin}
                  />

                  <label
                    for={`deployment-origin-status-${item.id}`}
                    class="label"
                  >
                    Destination Status
                  </label>
                  <select
                    id={`deployment-origin-status-${item.id}`}
                    class="select"
                  >
                    <option disabled selected>
                      {item.originStatus}
                    </option>
                    <option>processing</option>
                    <option>pending</option>
                    <option>cancelled</option>
                    <option>for-delivery</option>
                    <option>in-transit</option>
                    <option>delivered</option>
                  </select>

                  {/* freezers to add or delete section */}
                  <div class="flex flex-col gap-4 p-4 mt-4 bg-gray-100 rounded">
                    <div class="flex flex-row items-center">
                      <span class="text-base">Freezers</span>
                      <span class="ml-auto">
                        <button class="btn btn-neutral text-xs">Add</button>
                      </span>
                    </div>
                    {item.freezers.map((freezer, idx) => (
                      <div
                        key={idx}
                        class="flex flex-col gap-1 p-2 border border-gray-200 bg-base-100 rounded"
                      >
                        <span class="text-xs">{freezer.barcode}</span>
                        <span class="text-lg text-balance">{`${_.startCase(freezer.brand)} - ${_.startCase(freezer.model)}`}</span>
                        <span class="text-xs">
                          {`${freezer.capacity}${freezer.unit}`} &middot;{" "}
                          {`${freezer.yearModel}`}
                        </span>
                        <span class="py-1 flex">
                          <button class="btn border-gray-200 text-xs p-1 px-2 ml-auto">
                            <Icon icon="ph:eraser-thin" width="18" />
                          </button>
                        </span>
                      </div>
                    ))}
                  </div>
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

const deploymentRouter = new Hono();
const service = new DeploymentService();

deploymentRouter.get("/", async (c) => {
  try {
    const items = await service.getAll();

    return c.render(
      <>
        <Layout>
          <Header />
          <Toolbar />

          <div class="flex flex-col gap-4">
            <Data items={items} />
          </div>

          <Pagination />
        </Layout>

        {/* TODO: drawer type components for filter and form */}
        {/*<DrawerFilter />*/}
        {/*<DrawerAddForm />*/}
      </>,
      { title: "Deployments" },
    );
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown Error";
    return c.html(<div>{message}</div>);
  }
});

export default deploymentRouter;
