import type { FC } from "hono/jsx";

export const NotFoundPage: FC = () => {
  return (
    <div>
      <div class="hero min-h-screen">
        <div class="hero-content text-neutral-content text-center">
          <div class="max-w-md">
            <h1>404 - Page Not Found</h1>
            <p class="mb-5">The page you are looking for does not exist.</p>
            <a href="javascript:history.back()" class="btn btn-ghost link">
              Go back to previous page
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
