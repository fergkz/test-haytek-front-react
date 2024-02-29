
export type PackBox = {
    BoxType: string;
    ItemsQuantity: number;
    OrdersIds: string[];
}

export type Pack = {
    DeliveryDate: string;
    CarrierId: string;
    CarrierName: string;
    AddressStreet: string;
    AddressComplement: string;
    AddressNeighborhood: string;
    AddressZipCode: string;
    AddressCity: string;
    AddressState: string;
    Boxes: PackBox[];
}