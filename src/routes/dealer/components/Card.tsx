import type { FC } from "hono/jsx";
import type { Product } from "@/lib/types/product.types.js";

export const Card: FC<{ item: Product }> = ({ item }) => {
  return (
    <li class="p-2 border border-gray-200 min-h-[3lh]">
      <div>{item.name}</div>
      <img src={item.imageUrl} alt="selecta" />
    </li>
  );
};

export const CardList: FC<{ items: Product[] }> = ({ items }) => {
  return (
    <ul class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
      {items.map((item, index) => (
        <Card item={item} />
      ))}
    </ul>
  );
};
