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
  condition: string;
  brand: string;
  description: string;
  createdAt: string;
  status: "active" | "sold" | "traded" | "pending";
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
  name: "John Doe",
  avatar:
    "https://res.cloudinary.com/dokktqvdq/image/upload/v1741620664/sustyle/yt5mv1skywmczqrwinky.jpg",
  location: "Jakarta Selatan",
  phone: "+62 812-3456-7890",
  email: "johndoe@email.com",
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
    totalEarnings: "Rp 2.500.000",
  },
  saleItems: [
    {
      id: "s1",
      name: "Upcycled Denim Jacket",
      image:
        "https://res.cloudinary.com/dokktqvdq/image/upload/v1741620358/sustyle/orlw1s9rrzl6gtecacsc.png",
      condition: "Good",
      brand: "Levi'S",
      description:
        "One-of-a-kind denim jacket created from vintage jeans. Hand-embroidered details and custom eco-friendly patches make this a unique sustainable fashion piece.",
      price: "Rp 350.000",
      status: "active",
      createdAt: "2024-02-20",
    },
    {
      id: "s2",
      name: "Air Max 97",
      image:
        "https://res.cloudinary.com/dokktqvdq/image/upload/v1741621398/sustyle/aiaglnkz0amsrrgou2qf.jpg",
      condition: "Good",
      brand: "Nike",
      description:
        "Original Nike Air Max 97 in silver colorway. Only worn twice. Size 42.",
      price: "Rp 1.800.000",
      status: "active",
      createdAt: "2024-02-18",
    },
    {
      id: "s3",
      name: "GG Marmont Belt",
      image:
        "https://res.cloudinary.com/dokktqvdq/image/upload/v1741621507/sustyle/vead7ynnja4c1xekrpet.jpg",
      condition: "Like New",
      brand: "Gucci",
      description:
        "Authentic Gucci GG Marmont belt in black leather. Width: 2cm. Length: 90cm.",
      price: "Rp 4.500.000",
      status: "active",
      createdAt: "2024-02-15",
    },
  ],
};
