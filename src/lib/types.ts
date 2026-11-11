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

export interface User {
    id: string;
    role: string;
    active: boolean;
    firstName: string;
    middleName: string;
    lastName: string;
    addressLine1: string;
    addressLine2: string;
    phone: string;
    username: string;
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
