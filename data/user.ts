export interface UserStats {
  totalTrades: number;
  successTrades: number;
  pendingTrades: number;
  rejectedTrades: number;
  rating: number;
  reviews: number;
  totalSales: number;
  completedSales: number;
  activeSales: number;
  totalEarnings: string;
}

export interface UserItem {
  id: string;
  name: string;
  image: string;
  category: string;
  brand: string;
  description: string;
  createdAt: string;
  status: 'active' | 'sold' | 'traded' | 'pending';
  price?: string;
}

export const userData: {
  id: string;
  name: string;
  avatar: string;
  location: string;
  phone: string;
  email: string;
  address: string;
  joinDate: string;
  stats: UserStats;
  saleItems: UserItem[];
} = {
  id: "user1",
  name: "Sarah Green",
  avatar: "/images/products/Oversized.jpg",
  location: "Jakarta Selatan",
  phone: "+62 812-3456-7890",
  email: "sarahgreen@email.com",
  address: "Jl. Sudirman No. 123, Jakarta Selatan",
  joinDate: "February 15, 2024",
  stats: {
    totalTrades: 15,
    successTrades: 12,
    pendingTrades: 2,
    rejectedTrades: 1,
    rating: 4.8,
    reviews: 28,
    totalSales: 25,
    completedSales: 20,
    activeSales: 5,
    totalEarnings: "Rp 2.500.000"
  },
  saleItems: [
    {
      id: "s1",
      name: "Vintage Denim Jacket",
      image: "/images/products/Oversized.jpg",
      category: "Fashion",
      brand: "Levi's",
      description: "Classic vintage denim jacket with distressed details. Perfect for casual wear. Size M.",
      price: "Rp 350.000",
      status: "active",
      createdAt: "2024-02-20"
    },
    {
      id: "s2",
      name: "Air Max 97",
      image: "/images/products/Oversized.jpg",
      category: "Fashion",
      brand: "Nike",
      description: "Original Nike Air Max 97 in silver colorway. Only worn twice. Size 42.",
      price: "Rp 1.800.000",
      status: "active",
      createdAt: "2024-02-18"
    },
    {
      id: "s3",
      name: "GG Marmont Belt",
      image: "/images/products/Oversized.jpg",
      category: "Fashion",
      brand: "Gucci",
      description: "Authentic Gucci GG Marmont belt in black leather. Width: 2cm. Length: 90cm.",
      price: "Rp 4.500.000",
      status: "active",
      createdAt: "2024-02-15"
    }
  ],
};