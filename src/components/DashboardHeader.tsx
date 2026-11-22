import type { FC } from "hono/jsx";
import { Icon } from "./Icon.js";

export const DashboardHeader: FC<{ header: string; icon: string }> = ({
  header,
  icon,
}) => {
  return (
    <div class="self-center flex flex-row items-center gap-2">
      <Icon icon={icon} />
      <h2 class="font-semibold text-gray-500 text-xl">{header}</h2>
    </div>
  );
};
