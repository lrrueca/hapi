export interface Account {
    id: string;
    type: string;
    active: boolean;
    parentId: string;
    name: string;
    address: string;
    phone: string;
    isrCode: string;
    sapCode: string;
}

export interface Freezer {
    id: string;
    model: string;
    capacity: number;
    unit: string;
    brand: string;
    yearModel: number;
    barcode: string;
    distributorId: string;
}
