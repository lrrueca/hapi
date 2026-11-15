export interface Product {
    id: string;
    name: string;
    description: string;
    brand: string;
    size: number;
    unitSize: string;
    packaging: string;
    price: number;
    currency: string;
    badge: string;
    isAvailable: boolean;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date;
}

export interface DataListProps {
    items: Product[];
    error?: string;
}

export interface DataProps {
    item: Product;
}
