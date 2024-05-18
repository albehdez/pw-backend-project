interface car_situation {
    id: number;
    type_situation: string;
}
export interface CarInterface {
    brand: string;
    number_seats: number;
    km_available: number;
    license_plate: string;
    car_situation: car_situation;
}
export {};
