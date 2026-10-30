import { Hono } from "hono";
import { Layout } from "./layout.js";
import style from "./accounts.css?inline";
import { Icon } from "@/components/Icon.js";

const accountsRouter = new Hono();

accountsRouter.get("/accounts", (c) => {
  return c.render(
    <>
      <style>{style}</style>
      <Layout>
        <div id="distributor-account-management-page">
          <h2>Accounts Management</h2>
          <div class="my-4 flex gap-4">
            <button class="btn btn-soft">All</button>
            <button class="btn btn-soft">Dealer</button>
            <button class="btn btn-soft">Hapistore</button>
            <button class="btn btn-soft">Active</button>
            <button class="btn btn-soft">Not Active</button>
            <label class="input ml-auto">
              <Icon icon="ph:magnifying-glass-thin" width="16" />
              <input
                type="search"
                required
                placeholder="Search by Name or Address"
              />
            </label>
            <div class="drawer drawer-end w-min">
              <input id="my-drawer-5" type="checkbox" class="drawer-toggle" />
              <div class="drawer-content w-min">
                <label for="my-drawer-5" class="drawer-button btn btn-soft">
                  <Icon icon="ph:user-circle-plus-thin" />
                  <span>Add</span>
                </label>
              </div>
              <div class="drawer-side">
                <label
                  for="my-drawer-5"
                  aria-label="close sidebar"
                  class="drawer-overlay"
                ></label>
                <div class="menu bg-base-200 min-h-full w-85 p-4">
                  <fieldset class="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                    <legend class="fieldset-legend">Create New Account</legend>

                    <label class="label">Account Name</label>
                    <input
                      type="text"
                      class="input"
                      placeholder="Account Name"
                    />

                    <button class="btn btn-neutral mt-4">Add</button>
                  </fieldset>
                </div>
              </div>
            </div>
          </div>
          <div class="overflow-x-auto">
            <table class="table table-zebra">
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Name</th>
                  <th>Address</th>
                  <th>Phone</th>
                  <th>ISR Code</th>
                  <th>SAP Code</th>
                  <th>Type</th>
                  <th>Active</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>01M650R0AFEHY4P24XCWQWEB9R</td>
                  <td>Hodkiewicz-Runolfsdottir</td>
                  <td>99109 Michigan Center</td>
                  <td>966 469 1760</td>
                  <td>6YU7W01CG90</td>
                  <td>1CH9GQ9FR70</td>
                  <td>distributor</td>
                  <td>yes</td>
                  <td>
                    <button class="btn btn-ghost tooltip" data-tip="Edit">
                      <Icon icon="ph:note-pencil-thin" />
                    </button>
                    <button class="btn btn-ghost tooltip" data-tip="Delete">
                      <Icon icon="ph:eraser-thin" />
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>01M650V6G07ZYNMTKAE7DGAH0M</td>
                  <td>Howe, Cronin and Orn</td>
                  <td>5 Colorado Center</td>
                  <td>571 379 5396</td>
                  <td>7N29RQ2JJ42</td>
                  <td>7CE5MJ1RV66</td>
                  <td>dealer</td>
                  <td>yes</td>
                  <td>
                    <button class="btn btn-ghost tooltip" data-tip="Edit">
                      <Icon icon="ph:note-pencil-thin" />
                    </button>
                    <button class="btn btn-ghost tooltip" data-tip="Delete">
                      <Icon icon="ph:eraser-thin" />
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>01M650V6G1BZD7EJ8SMSSJRKN5</td>
                  <td>Bruen and Sons</td>
                  <td>2 Summerview Alley</td>
                  <td> 616 700 4928 </td>
                  <td>9YF5VV2QN73</td>
                  <td>4QK2A89YM13</td>
                  <td>store</td>
                  <td>yes</td>
                  <td>
                    <button class="btn btn-ghost tooltip" data-tip="Edit">
                      <Icon icon="ph:note-pencil-thin" />
                    </button>
                    <button class="btn btn-ghost tooltip" data-tip="Delete">
                      <Icon icon="ph:eraser-thin" />
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </Layout>
    </>,
    { title: "Accounts" },
  );
});

export default accountsRouter;
