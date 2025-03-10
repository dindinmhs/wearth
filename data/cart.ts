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
    id: "1",
    name: "Woolrich Recycled Wool Sweater",
    price: 799000,
    quantity: 2,
    size: "L",
    image:
      "https://res.cloudinary.com/dokktqvdq/image/upload/v1741610173/sustyle/rbneuj8giodqk5bubog1.jpg",
  },
  {
    id: "2",
    name: "Everlane Sustainable Linen Shirt",
    price: 499000,
    quantity: 1,
    size: "XL",
    image:
      "https://res.cloudinary.com/dokktqvdq/image/upload/v1741610173/sustyle/nv48r9ohgpdkyyfdfget.jpg",
  },
];
