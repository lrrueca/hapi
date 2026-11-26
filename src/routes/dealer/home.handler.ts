
import mockProducts from "@lib/seed/products.json" with { type: "json" };
import type { Product } from "@lib/types/product.types.js";

export const getAllAsync = async (): Promise<Product[]> => {
  return mockProducts;
};
