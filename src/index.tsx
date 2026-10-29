import distributorRouter from "@/routes/distributor/dashboard.js";
import { serveStatic } from "@hono/node-server/serve-static";
import { Hono } from "hono";
import { renderer } from "./renderer.js";
import { serveStatic } from "@hono/node-server/serve-static";

const app = new Hono<HonoEnv>();
app.use("/static/*", serveStatic({ root: "./public" }));
app.use("*", renderer);

app.get("/", async (c) => {
  return c.render(
    <>
      <div class="h-dvh flex">
        <div class="m-auto">
          <div class="w-min m-auto h-14">
            <h1>Hapi</h1>
          </div>
          <fieldset class="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
            <legend class="fieldset-legend">Login</legend>

            <label class="label">Username</label>
            <input type="email" class="input" placeholder="Username" />

            <label class="label">Password</label>
            <input type="password" class="input" placeholder="Password" />

            <button class="btn btn-neutral mt-4">Login</button>
          </fieldset>
        </div>
      </div>
    </>,
    { title: "Login" },
  );
});

app.route("/distributor", distributorRouter);

export default app;
