export interface TradeItem {
  id: string;
  name: string;
  image: string;
  description: string;
  condition: 'New' | 'Like New' | 'Good' | 'Fair';
  category: string;
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
    condition: string;
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
    name: 'Bamboo Water Bottle',
    image: '/images/products/Oversized.jpg',
    description: 'Eco-friendly bamboo water bottle, used for 2 months, still in great condition',
    condition: 'Like New',
    category: 'Bottles',
    owner: {
      name: 'Sarah Green',
      avatar: '/images/products/Oversized.jpg',
      location: 'Jakarta Selatan',
      phone: '+62 812-3456-7890',
      email: 'sarahgreen@email.com',
      address: 'Jl. Sudirman No. 123, Jakarta Selatan'
    },
    requestedItem: {
      id: 'offer1',
      name: 'Glass Water Bottle',
      image: '/images/products/Oversized.jpg',
      condition: 'Good',
      owner: {
        name: 'John Doe',
        avatar: '/images/products/Oversized.jpg',
        location: 'Jakarta Barat',
        phone: '+62 812-9876-5432',
        email: 'johndoe@email.com',
        address: 'Jl. Kebon Jeruk No. 45, Jakarta Barat'
      },
      status: 'pending'
    },
    createdAt: '2024-02-15'
  }
];