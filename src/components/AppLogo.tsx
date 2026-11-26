import type { FC } from "hono/jsx";

export const AppLogo: FC = ({ href }) => {
  return (
    <a href={href} class="px-4 flex items-center gap-2">
      <span>
        <img src="/Selecta_2003.svg" alt="App Logo" width="24" />
      </span>
      <span>Hapi</span>
    </a>
  );
};
