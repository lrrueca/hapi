import distributorRouter from "@/routes/distributor/dashboard.js";
import accountsRouter from "@/routes/distributor/accounts.js";
import { serveStatic } from "@hono/node-server/serve-static";
import { Hono } from "hono";
import { renderer } from "./renderer.js";

const app = new Hono<HonoEnv>();
app.use("/static/*", serveStatic({ root: "./public" }));
app.use("*", renderer);

app.get("/", async (c) => {
  return c.render(
    <>
      <div class="h-dvh flex">
        <div class="m-auto">
          <div class="flex items-center justify-center gap-2 h-16">
            <img src="/Selecta_2003.svg" alt="App Logo" width="36" />
            <h1 class="text-2xl">Hapi</h1>
          </div>
          <fieldset class="fieldset bg-base-200 border-base-300 rounded-box border p-4 w-[clamp(280px,80vw,360px)]">
            <legend class="fieldset-legend">Login</legend>

            <label for="email" class="label">
              Username
            </label>
            <input
              id="email"
              type="email"
              class="input w-full"
              placeholder="Username"
              autocomplete="email"
            />

            <label for="password" class="label">
              Password
            </label>
            <input
              id="password"
              type="password"
              class="input w-full"
              placeholder="Password"
            />

            <button class="btn btn-neutral mt-4">Login</button>
          </fieldset>
        </div>
      </div>
    </>,
    { title: "Login" },
  );
});

app.route("/distributor", distributorRouter);
app.route("/distributor", accountsRouter);

export default app;
