import { ProductType } from "@/types";

export const Products: ProductType[] = [
  {
    id: "1",
    name: "Organic Cotton Oversized T-Shirt",
    price: 299000,
    images: [
      "https://res.cloudinary.com/dokktqvdq/image/upload/v1740879483/Mens_Short_Sleeve_The_Wizard_of_Oz_Graphic_T-Shirt___Black___Regular_Medium___Shirts_Tops_Graphic_T-shirts_viv5wo.jpg",
    ],
    category: "T-Shirts",
    brand: "EcoWear",
    description:
      "Made from 100% organic cotton, this oversized t-shirt combines comfort with sustainability. The breathable fabric ensures all-day comfort while minimizing environmental impact. Each piece is crafted using water-saving techniques and natural dyes.",
    features: [
      "Made from 100% organic cotton",
      "Water-saving production process",
      "Natural dye coloring",
      "Zero plastic packaging",
      "Fair trade certified",
    ],
    size: "M",
    condition: "New",
    seller: {
      name: "EcoFashion Store",
      avatar: "/images/avatars/seller1.jpg",
      joinDate: "Jan 2022",
    },
    is3d: true,
  },
  {
    id: "2",
    name: "Recycled Denim High-Waist Jeans",
    price: 599000,
    images: [
      "https://res.cloudinary.com/dokktqvdq/image/upload/v1741610172/sustyle/n1pd3ngbljftrfolumh9.webp",
    ],
    category: "Pants",
    brand: "GreenDenim",
    description:
      "These high-waist jeans are crafted from recycled denim and organic cotton blend. Each pair saves approximately 1,800 gallons of water compared to traditional jean production. Features a modern cut with sustainable style.",
    features: [
      "Made from 80% recycled denim",
      "Saves 1,800 gallons of water in production",
      "Reinforced stitching for durability",
      "Eco-friendly washing process",
      "Biodegradable buttons and rivets",
    ],
    size: "28",
    condition: "Like New",
    seller: {
      name: "Sustainable Closet",
      avatar: "/images/avatars/seller2.jpg",
      joinDate: "Mar 2022",
    },
  },
  {
    id: "3",
    name: "Bamboo Fiber Maxi Dress",
    price: 799000,
    images: [
      "https://res.cloudinary.com/dokktqvdq/image/upload/v1741610172/sustyle/mk1s5f3imgag0sveb6eq.jpg",
    ],
    category: "Dresses",
    brand: "NatureFashion",
    description:
      "This elegant maxi dress is made from sustainable bamboo fiber, known for its silky smooth texture and natural temperature regulation. Perfect for both casual and semi-formal occasions while maintaining eco-conscious style.",
    features: [
      "Sustainable bamboo fiber material",
      "Natural temperature regulation",
      "Anti-bacterial properties",
      "UV protection",
      "Wrinkle-resistant",
    ],
    size: "S",
    condition: "New",
    seller: {
      name: "Green Wardrobe",
      avatar: "/images/avatars/seller3.jpg",
      joinDate: "Nov 2021",
    },
  },
  {
    id: "4",
    name: "Recycled Polyester Windbreaker",
    price: 899000,
    images: [
      "https://res.cloudinary.com/dokktqvdq/image/upload/v1741610173/sustyle/qbhpshyh4yn9uzeg5upr.jpg",
    ],
    category: "Outerwear",
    brand: "EcoWear",
    description:
      "A lightweight windbreaker made from recycled polyester sourced from ocean plastic. This versatile piece features water-resistant properties and packs into its own pocket, making it perfect for unpredictable weather.",
    features: [
      "Made from recycled ocean plastic",
      "Water-resistant coating",
      "Packs into pocket",
      "Reflective details for visibility",
      "Breathable mesh lining",
    ],
    size: "L",
    condition: "Gently Used",
    seller: {
      name: "EcoFashion Store",
      avatar: "/images/avatars/seller1.jpg",
      joinDate: "Jan 2022",
    },
    is3d: true,
  },
  {
    id: "5",
    name: "Organic Cotton Hoodie",
    price: 699000,
    images: [
      "https://res.cloudinary.com/dokktqvdq/image/upload/v1741610173/sustyle/ey9g0npcarqumffknpke.jpg",
    ],
    category: "Hoodies",
    brand: "EcoComfort",
    description: "A soft and breathable hoodie made from 100% organic cotton.",
    features: [
      "Made from organic cotton",
      "Breathable and moisture-wicking",
      "Ribbed cuffs and hem",
      "No synthetic fibers",
      "Eco-friendly dyes",
    ],
    size: "M",
    condition: "New",
    seller: {
      name: "Sustainable Closet",
      avatar: "/images/avatars/seller2.jpg",
      joinDate: "Apr 2022",
    },
  },
  {
    id: "6",
    name: "Recycled Wool Sweater",
    price: 799000,
    images: [
      "https://res.cloudinary.com/dokktqvdq/image/upload/v1741610173/sustyle/rbneuj8giodqk5bubog1.jpg",
    ],
    category: "Sweaters",
    brand: "GreenKnit",
    description:
      "A warm sweater made from 100% recycled wool for comfort and sustainability.",
    features: [
      "100% recycled wool",
      "Soft and insulating",
      "Hand-stitched details",
      "Biodegradable materials",
      "Plastic-free packaging",
    ],
    size: "L",
    condition: "Like New",
    seller: {
      name: "Green Wardrobe",
      avatar: "/images/avatars/seller3.jpg",
      joinDate: "Nov 2021",
    },
    is3d: true,
  },
  {
    id: "7",
    name: "Sustainable Linen Shirt",
    price: 499000,
    images: [
      "https://res.cloudinary.com/dokktqvdq/image/upload/v1741610173/sustyle/nv48r9ohgpdkyyfdfget.jpg",
    ],
    category: "Shirts",
    brand: "EcoStyle",
    description:
      "A lightweight linen shirt perfect for casual and semi-formal wear.",
    features: [
      "100% sustainable linen",
      "Naturally breathable",
      "Handwoven fabric",
      "Biodegradable buttons",
      "Fair trade certified",
    ],
    size: "XL",
    condition: "New",
    seller: {
      name: "EcoFashion Store",
      avatar: "/images/avatars/seller1.jpg",
      joinDate: "Jan 2022",
    },
  },
  {
    id: "8",
    name: "Recycled Cotton Joggers",
    price: 649000,
    images: [
      "https://res.cloudinary.com/dokktqvdq/image/upload/v1741610172/sustyle/yncvbhrdofs4t2su803c.jpg",
    ],
    category: "Pants",
    brand: "EcoWear",
    description:
      "Comfortable joggers made from recycled cotton, designed for everyday wear.",
    features: [
      "Made from recycled cotton",
      "Elastic waistband with drawstring",
      "Breathable and lightweight",
      "Durable stitching",
      "Machine washable",
    ],
    size: "L",
    condition: "New",
    seller: {
      name: "Sustainable Closet",
      avatar: "/images/avatars/seller2.jpg",
      joinDate: "Mar 2022",
    },
  },
];
