import { ProductType } from "@/types";

export const Products : ProductType[] = [
  {
    id: '1',
    name: 'Organic Cotton Oversized T-Shirt',
    price: 299000,
    images: [
      '/images/products/Windbreaker.jpg',
      'https://res.cloudinary.com/dokktqvdq/image/upload/v1740879476/I_m_Just_Here_for_the_Fireworks_Graphic_Tee_-_White___3XL_wlbxm2.jpg',
      'https://res.cloudinary.com/dokktqvdq/image/upload/v1740879483/Mens_Short_Sleeve_The_Wizard_of_Oz_Graphic_T-Shirt___Black___Regular_Medium___Shirts_Tops_Graphic_T-shirts_viv5wo.jpg'
    ],
    category: 'T-Shirts',
    brand: 'EcoWear',
    description: 'Made from 100% organic cotton, this oversized t-shirt combines comfort with sustainability. The breathable fabric ensures all-day comfort while minimizing environmental impact. Each piece is crafted using water-saving techniques and natural dyes.',
    features: [
      'Made from 100% organic cotton',
      'Water-saving production process',
      'Natural dye coloring',
      'Zero plastic packaging',
      'Fair trade certified'
    ],
    size: 'M',
    condition: 'New',
    seller: {
      name: 'EcoFashion Store',
      avatar: '/images/avatars/seller1.jpg',
      joinDate: 'Jan 2022'
    },
    is3d : true
  },
  {
    id: '2',
    name: 'Recycled Denim High-Waist Jeans',
    price: 599000,
    images: [
      '/images/products/Windbreaker.jpg',
      'https://res.cloudinary.com/dokktqvdq/image/upload/v1740879476/I_m_Just_Here_for_the_Fireworks_Graphic_Tee_-_White___3XL_wlbxm2.jpg',
      'https://res.cloudinary.com/dokktqvdq/image/upload/v1740879483/Mens_Short_Sleeve_The_Wizard_of_Oz_Graphic_T-Shirt___Black___Regular_Medium___Shirts_Tops_Graphic_T-shirts_viv5wo.jpg'
    ],
    category: 'Pants',
    brand: 'GreenDenim',
    description: 'These high-waist jeans are crafted from recycled denim and organic cotton blend. Each pair saves approximately 1,800 gallons of water compared to traditional jean production. Features a modern cut with sustainable style.',
    features: [
      'Made from 80% recycled denim',
      'Saves 1,800 gallons of water in production',
      'Reinforced stitching for durability',
      'Eco-friendly washing process',
      'Biodegradable buttons and rivets'
    ],
    size: '28',
    condition: 'Like New',
    seller: {
      name: 'Sustainable Closet',
      avatar: '/images/avatars/seller2.jpg',
      joinDate: 'Mar 2022'
    }
  },
  {
    id: '3',
    name: 'Bamboo Fiber Maxi Dress',
    price: 799000,
    images: [
      '/images/products/Windbreaker.jpg',
      'https://res.cloudinary.com/dokktqvdq/image/upload/v1740879476/I_m_Just_Here_for_the_Fireworks_Graphic_Tee_-_White___3XL_wlbxm2.jpg',
      'https://res.cloudinary.com/dokktqvdq/image/upload/v1740879483/Mens_Short_Sleeve_The_Wizard_of_Oz_Graphic_T-Shirt___Black___Regular_Medium___Shirts_Tops_Graphic_T-shirts_viv5wo.jpg'
    ],
    category: 'Dresses',
    brand: 'NatureFashion',
    description: 'This elegant maxi dress is made from sustainable bamboo fiber, known for its silky smooth texture and natural temperature regulation. Perfect for both casual and semi-formal occasions while maintaining eco-conscious style.',
    features: [
      'Sustainable bamboo fiber material',
      'Natural temperature regulation',
      'Anti-bacterial properties',
      'UV protection',
      'Wrinkle-resistant'
    ],
    size: 'S',
    condition: 'New',
    seller: {
      name: 'Green Wardrobe',
      avatar: '/images/avatars/seller3.jpg',
      joinDate: 'Nov 2021'
    }
  },
  {
    id: '4',
    name: 'Recycled Polyester Windbreaker',
    price: 899000,
    images: [
      '/images/products/Windbreaker.jpg',
      'https://res.cloudinary.com/dokktqvdq/image/upload/v1740879476/I_m_Just_Here_for_the_Fireworks_Graphic_Tee_-_White___3XL_wlbxm2.jpg',
      'https://res.cloudinary.com/dokktqvdq/image/upload/v1740879483/Mens_Short_Sleeve_The_Wizard_of_Oz_Graphic_T-Shirt___Black___Regular_Medium___Shirts_Tops_Graphic_T-shirts_viv5wo.jpg'
    ],
    category: 'Outerwear',
    brand: 'EcoWear',
    description: 'A lightweight windbreaker made from recycled polyester sourced from ocean plastic. This versatile piece features water-resistant properties and packs into its own pocket, making it perfect for unpredictable weather.',
    features: [
      'Made from recycled ocean plastic',
      'Water-resistant coating',
      'Packs into pocket',
      'Reflective details for visibility',
      'Breathable mesh lining'
    ],
    size: 'L',
    condition: 'Gently Used',
    seller: {
      name: 'EcoFashion Store',
      avatar: '/images/avatars/seller1.jpg',
      joinDate: 'Jan 2022'
    },
    is3d : true
  },
  {
    id: '5',
    name: 'T Shirt',
    price: 899000,
    images: [
      '/images/products/Windbreaker.jpg',
      'https://res.cloudinary.com/dokktqvdq/image/upload/v1740879476/I_m_Just_Here_for_the_Fireworks_Graphic_Tee_-_White___3XL_wlbxm2.jpg',
      'https://res.cloudinary.com/dokktqvdq/image/upload/v1740879483/Mens_Short_Sleeve_The_Wizard_of_Oz_Graphic_T-Shirt___Black___Regular_Medium___Shirts_Tops_Graphic_T-shirts_viv5wo.jpg'
    ],
    category: 'Outerwear',
    brand: 'EcoWear',
    description: 'A lightweight windbreaker made from recycled polyester sourced from ocean plastic. This versatile piece features water-resistant properties and packs into its own pocket, making it perfect for unpredictable weather.',
    features: [
      'Made from recycled ocean plastic',
      'Water-resistant coating',
      'Packs into pocket',
      'Reflective details for visibility',
      'Breathable mesh lining'
    ],
    size: 'M',
    condition: 'New',
    seller: {
      name: 'Sustainable Closet',
      avatar: '/images/avatars/seller2.jpg',
      joinDate: 'Apr 2022'
    }
  },
  {
    id: '6',
    name: 'T Shirt',
    price: 899000,
    images: [
      '/images/products/Windbreaker.jpg',
      'https://res.cloudinary.com/dokktqvdq/image/upload/v1740879476/I_m_Just_Here_for_the_Fireworks_Graphic_Tee_-_White___3XL_wlbxm2.jpg',
      'https://res.cloudinary.com/dokktqvdq/image/upload/v1740879483/Mens_Short_Sleeve_The_Wizard_of_Oz_Graphic_T-Shirt___Black___Regular_Medium___Shirts_Tops_Graphic_T-shirts_viv5wo.jpg'
    ],
    category: 'Outerwear',
    brand: 'EcoWear',
    description: 'A lightweight windbreaker made from recycled polyester sourced from ocean plastic. This versatile piece features water-resistant properties and packs into its own pocket, making it perfect for unpredictable weather.',
    features: [
      'Made from recycled ocean plastic',
      'Water-resistant coating',
      'Packs into pocket',
      'Reflective details for visibility',
      'Breathable mesh lining'
    ],
    size: 'S',
    condition: 'Like New',
    seller: {
      name: 'Green Wardrobe',
      avatar: '/images/avatars/seller3.jpg',
      joinDate: 'Nov 2021'
    },
    is3d : true
  },
  {
    id: '7',
    name: 'T Shirt',
    price: 899000,
    images: [
      '/images/products/Windbreaker.jpg',
      'https://res.cloudinary.com/dokktqvdq/image/upload/v1740879476/I_m_Just_Here_for_the_Fireworks_Graphic_Tee_-_White___3XL_wlbxm2.jpg',
      'https://res.cloudinary.com/dokktqvdq/image/upload/v1740879483/Mens_Short_Sleeve_The_Wizard_of_Oz_Graphic_T-Shirt___Black___Regular_Medium___Shirts_Tops_Graphic_T-shirts_viv5wo.jpg'
    ],
    category: 'Outerwear',
    brand: 'EcoWear',
    description: 'A lightweight windbreaker made from recycled polyester sourced from ocean plastic. This versatile piece features water-resistant properties and packs into its own pocket, making it perfect for unpredictable weather.',
    features: [
      'Made from recycled ocean plastic',
      'Water-resistant coating',
      'Packs into pocket',
      'Reflective details for visibility',
      'Breathable mesh lining'
    ],
    size: 'XL',
    condition: 'Gently Used',
    seller: {
      name: 'EcoFashion Store',
      avatar: '/images/avatars/seller1.jpg',
      joinDate: 'Jan 2022'
    }
  },
  {
    id: '8',
    name: 'T Shirt',
    price: 899000,
    images: [
      '/images/products/Windbreaker.jpg',
      'https://res.cloudinary.com/dokktqvdq/image/upload/v1740879476/I_m_Just_Here_for_the_Fireworks_Graphic_Tee_-_White___3XL_wlbxm2.jpg',
      'https://res.cloudinary.com/dokktqvdq/image/upload/v1740879483/Mens_Short_Sleeve_The_Wizard_of_Oz_Graphic_T-Shirt___Black___Regular_Medium___Shirts_Tops_Graphic_T-shirts_viv5wo.jpg'
    ],
    category: 'Outerwear',
    brand: 'EcoWear',
    description: 'A lightweight windbreaker made from recycled polyester sourced from ocean plastic. This versatile piece features water-resistant properties and packs into its own pocket, making it perfect for unpredictable weather.',
    features: [
      'Made from recycled ocean plastic',
      'Water-resistant coating',
      'Packs into pocket',
      'Reflective details for visibility',
      'Breathable mesh lining'
    ],
    size: 'L',
    condition: 'New',
    seller: {
      name: 'Sustainable Closet',
      avatar: '/images/avatars/seller2.jpg',
      joinDate: 'Mar 2022'
    }
  },
];