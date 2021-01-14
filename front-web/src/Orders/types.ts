export type Product = {
    id: number;
    name: string;
    price: number;
    description: string;
    imageUri: string;
}
// Rename Symbol F2 - para renomear todas as ocorrências
export type OrderLocationData = {
    address: string;
    latitude: number;
    longitude: number;
}

type ProductId = {
    id: number;
}

export type OrderPayload = {
    products: ProductId[];
} & OrderLocationData;