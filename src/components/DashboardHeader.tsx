import type { FC } from "hono/jsx";
import { Icon } from "./Icon.js";

interface Props {
  header: string;
}

export const DashboardHeader: FC<Props> = ({ header }) => {
  return (
    <div class="self-center flex flex-row items-center gap-2">
      <Icon icon="ph:address-book-thin" />
      <h2 class="font-semibold text-gray-500 text-xl">{header}</h2>
    </div>
  );
};
