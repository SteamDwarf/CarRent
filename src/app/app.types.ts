export type PartialContactData = Partial<ContactData>;

interface ContactData {
    name: string | null | undefined;
    phone: string | null | undefined;
    car: string | null | undefined;
}

export interface ServerResponse {
    message: string;
    success: number;
}

export interface CarData {
    image: string;
    name: string;
    gear: string;
    engine: number;
    places: number;
}