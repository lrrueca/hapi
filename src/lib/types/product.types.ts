export interface Product {
  id: string;
  name: string;
  description: string;
  brand: string;
  packaging: string;
  price: number;
  currency: string;
  tags: string[];
  imageUrl: string;
  weight: number;
  weightUnit: string;
  badge: string;
  isAvailable: boolean;
  createdAt: Date | string;
  updatedAt: Date | string;
  deletedAt: Date | string | null;
}
