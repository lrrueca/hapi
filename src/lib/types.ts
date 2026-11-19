export interface Account {
    id: string;
    type: string;
    isActive: boolean;
    parentId: string;
    distributorId: string;
    name: string;
    addressLine1: string;
    addressLine2: string;
    phone: string;
    isrCode: string;
    sapCode: string;
    createdAt: string;
    updatedAt: string;
    deletedAt: string;
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

export interface Deployment {
    id: string;
    origin: string;
    /** Status of the origin side deployment.
     * 'processing' 'pending' 'cancelled'
     * 'for-delivery' 'in-transit' 'delivered'
     * 'for-pullout' 'subject-for-pullout'
     * 'for-replacement - broken unit' 'for-replacement - upgrade' 'for-replacement - downgrade'
     */
    originStatus: string;
    destination: string;
    /** Status of the destination side deployment.
     * 'processing' 'pending' 'cancelled'
     * 'to-recieve' 'received'
     * 'pullout-by-dealer' 'pullout-by-distributor'
     */
    destinationStatus: string;
    address: string;
    deploymentDate: string;
    freezers: Freezer[];
}
