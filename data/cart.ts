export interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  size: string;
  image: string;
}

export const CartItems: CartItem[] = [
  {
    id: '1',
    name: 'Eco-Friendly Water Bottle',
    price: 250000,
    quantity: 2,
    size: 'M',
    image: '/images/products/Oversized.jpg'
  },
  {
    id: '2',
    name: 'Bamboo Utensil Set',
    price: 150000,
    quantity: 1,
    size: 'L',
    image: '/images/products/Jeans.jpg'
  }
];