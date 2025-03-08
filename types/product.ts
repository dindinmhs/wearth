export interface ProductType {
    id: string;
    name: string;
    price: number;
    images: string[]
    category: string;
    brand: string;
    description: string;
    features: string[];
    sizes: string[]
    condition? : string;
}