export interface TradeItem {
  id: string;
  name: string;
  image: string;
  description: string;
  condition: 'New' | 'Like New' | 'Very Good' | 'Good' | 'Gently Used';
  brand: string;
  size: string;
  owner: {
    name: string;
    avatar: string;
    location: string;
    phone: string;
    email: string;
    address: string;
  };
  requestedItem: {
    id: string;
    name: string;
    image: string;
    description: string;
    condition: string;
    brand: string;
    size: string;
    owner: {
      name: string;
      avatar: string;
      location: string;
      phone: string;
      email: string;
      address: string;
    };
    status: 'pending' | 'accepted' | 'rejected';
  };
  createdAt: string;
}

export const TradeItems: TradeItem[] = [
  {
    id: '1',
    name: 'Organic Cotton Dress',
    image: '/images/products/Oversized.jpg',
    description: 'Handcrafted organic cotton dress made with natural dyes. Worn only twice for special occasions. Elegant design with sustainable materials.',
    condition: 'Like New',
    brand: 'EcoChic',
    size: 'M',
    owner: {
      name: 'Sarah Green',
      avatar: '/images/products/Oversized.jpg',
      location: 'Jakarta Selatan',
      phone: '+62 812-3456-7890',
      email: 'sarahgreen@email.com',
      address: 'Jl. Sudirman No. 123, Jakarta Selatan',
    },
    requestedItem: {
      id: 'offer1',
      name: 'Upcycled Denim Jacket',
      image: '/images/products/Oversized.jpg',
      description: 'One-of-a-kind denim jacket created from vintage jeans. Hand-embroidered details and custom eco-friendly patches make this a unique sustainable fashion piece.',
      condition: 'Good',
      brand: 'ReWear',
      size: 'L',
      owner: {
        name: 'John Doe',
        avatar: '/images/products/Oversized.jpg',
        location: 'Jakarta Barat',
        phone: '+62 812-9876-5432',
        email: 'johndoe@email.com',
        address: 'Jl. Kebon Jeruk No. 45, Jakarta Barat',
      },
      status: 'pending'
    },
    createdAt: '2024-02-15',
  },
  {
    id: '2',
    name: 'Hemp Linen Shirt',
    image: '/images/products/Oversized.jpg',
    description: 'Premium hemp-linen blend shirt in natural ecru color. Breathable and perfect for tropical climate. Minimal carbon footprint in production.',
    condition: 'Good',
    brand: 'NatureFiber',
    size: 'S',
    owner: {
      name: 'Maya Putri',
      avatar: '/images/products/Oversized.jpg',
      location: 'Bandung',
      phone: '+62 822-1234-5678',
      email: 'mayaputri@email.com',
      address: 'Jl. Dago No. 78, Bandung',
    },
    requestedItem: {
      id: 'offer2',
      name: 'Bamboo Fiber Cardigan',
      image: '/images/products/Oversized.jpg',
      description: 'Soft and lightweight bamboo fiber cardigan in sage green. Naturally antibacterial and temperature-regulating properties.',
      condition: 'Like New',
      brand: 'BambooEssentials',
      size: 'M',
      owner: {
        name: 'Aditya Wijaya',
        avatar: '/images/products/Oversized.jpg',
        location: 'Yogyakarta',
        phone: '+62 878-9876-5432',
        email: 'adityaw@email.com',
        address: 'Jl. Malioboro No. 56, Yogyakarta',
      },
      status: 'accepted'
    },
    createdAt: '2024-03-05',
  },
  {
    id: '3',
    name: 'Recycled Polyester Raincoat',
    image: '/images/products/Oversized.jpg',
    description: 'Waterproof raincoat made from recycled plastic bottles. Stylish and functional with adjustable hood and pockets.',
    condition: 'New',
    brand: 'GreenStorm',
    size: 'XL',
    owner: {
      name: 'Budi Santoso',
      avatar: '/images/products/Oversized.jpg',
      location: 'Surabaya',
      phone: '+62 857-3456-7890',
      email: 'budisantoso@email.com',
      address: 'Jl. Pemuda No. 34, Surabaya',
    },
    requestedItem: {
      id: 'offer3',
      name: 'Tencel Jumpsuit',
      image: '/images/products/Oversized.jpg',
      description: 'Elegant black jumpsuit made from Tencel lyocell. Breathable, biodegradable, and produced in a closed-loop process.',
      condition: 'Good',
      brand: 'EcoLuxe',
      size: 'S',
      owner: {
        name: 'Lina Kusuma',
        avatar: '/images/products/Oversized.jpg',
        location: 'Jakarta Utara',
        phone: '+62 813-2468-1357',
        email: 'linakusuma@email.com',
        address: 'Jl. Pluit Raya No. 67, Jakarta Utara',
      },
      status: 'rejected'
    },
    createdAt: '2024-03-18',
  }
];