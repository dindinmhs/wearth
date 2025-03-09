export interface ProductType {
    id: string;
    name: string;
    price: number;
    images: string[]
    category: string;
    brand: string;
    description: string;
    features: string[];
    size: string;
    condition? : string;
    seller: {
        name: string;
        avatar: string;
        joinDate: string;
    }
}