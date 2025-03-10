import { ProductType } from "@/types";

export const Products: ProductType[] = [
  {
    id: "1",
    name: "Patagonia Organic Cotton Oversized T-Shirt",
    price: 299000,
    images: [
      "https://res.cloudinary.com/dokktqvdq/image/upload/v1741621119/sustyle/hoe2elzvpo9j0ipvvvl8.jpg",
      "https://res.cloudinary.com/dokktqvdq/image/upload/v1741620936/sustyle/so324xe5ck7613vyp5zz.png",
      "https://res.cloudinary.com/dokktqvdq/image/upload/v1741619125/sustyle/afjeq2v4vcebeeyqmc7a.png",
      "https://res.cloudinary.com/dokktqvdq/image/upload/v1741619124/sustyle/h9qyg0zcrvm6rstwklfh.png",
      "https://res.cloudinary.com/dokktqvdq/image/upload/v1741619122/sustyle/so5z996saw7fgj6vvpp1.png",
    ],
    category: "T-Shirts",
    brand: "Patagonia",
    description:
      "Made from 100% organic cotton, this oversized t-shirt combines comfort with sustainability. Patagonia ensures water-saving techniques and natural dyes for a minimal environmental impact.",
    features: [
      "100% organic cotton",
      "Water-saving production process",
      "Natural dye coloring",
      "Fair Trade Certified™",
      "Zero plastic packaging",
    ],
    size: "M",
    condition: "New",
    seller: {
      name: "Jonathan Smith",
      avatar:
        "https://res.cloudinary.com/dokktqvdq/image/upload/v1741618009/sustyle/t75kxckje24qzo18vhiv.jpg",
      joinDate: "Jan 2022",
    },
    is3d: true,
  },
  {
    id: "2",
    name: "Levi's WellThread Recycled Denim High-Waist Jeans",
    price: 599000,
    images: [
      "https://res.cloudinary.com/dokktqvdq/image/upload/v1741610172/sustyle/n1pd3ngbljftrfolumh9.webp",
    ],
    category: "Pants",
    brand: "Levi's",
    description:
      "Levi’s WellThread collection features high-waist jeans crafted from recycled denim and organic cotton blend, saving approximately 1,800 gallons of water per pair.",
    features: [
      "Made from 80% recycled denim",
      "Saves 1,800 gallons of water",
      "Eco-friendly washing process",
      "Biodegradable buttons and rivets",
      "Reinforced stitching for durability",
    ],
    size: "28",
    condition: "Like New",
    seller: {
      name: "Emily Johnson",
      avatar: "/images/avatars/seller2.jpg",
      joinDate: "Mar 2022",
    },
  },
  {
    id: "3",
    name: "Tentree Bamboo Fiber Maxi Dress",
    price: 799000,
    images: [
      "https://res.cloudinary.com/dokktqvdq/image/upload/v1741610172/sustyle/mk1s5f3imgag0sveb6eq.jpg",
    ],
    category: "Dresses",
    brand: "Tentree",
    description:
      "This elegant maxi dress by Tentree is made from sustainable bamboo fiber, known for its silky smooth texture and natural temperature regulation.",
    features: [
      "Sustainable bamboo fiber",
      "Natural temperature regulation",
      "Anti-bacterial properties",
      "UV protection",
      "Wrinkle-resistant",
    ],
    size: "S",
    condition: "New",
    seller: {
      name: "Michael Brown",
      avatar: "/images/avatars/seller3.jpg",
      joinDate: "Nov 2021",
    },
  },
  {
    id: "4",
    name: "Patagonia Recycled Polyester Windbreaker",
    price: 899000,
    images: [
      "https://res.cloudinary.com/dokktqvdq/image/upload/v1741610173/sustyle/qbhpshyh4yn9uzeg5upr.jpg",
    ],
    category: "Outerwear",
    brand: "Patagonia",
    description:
      "A lightweight windbreaker made from recycled polyester sourced from ocean plastic. This versatile piece features water-resistant properties and packs into its own pocket.",
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
      name: "Sarah Williams",
      avatar: "/images/avatars/seller1.jpg",
      joinDate: "Jan 2022",
    },
    is3d: true,
  },
  {
    id: "5",
    name: "Pact Organic Cotton Hoodie",
    price: 699000,
    images: [
      "https://res.cloudinary.com/dokktqvdq/image/upload/v1741610173/sustyle/ey9g0npcarqumffknpke.jpg",
    ],
    category: "Hoodies",
    brand: "Pact",
    description: "A soft and breathable hoodie made from 100% organic cotton.",
    features: [
      "100% organic cotton",
      "Breathable and moisture-wicking",
      "Ribbed cuffs and hem",
      "Eco-friendly dyes",
      "No synthetic fibers",
    ],
    size: "M",
    condition: "New",
    seller: {
      name: "Daniel Martinez",
      avatar: "/images/avatars/seller2.jpg",
      joinDate: "Apr 2022",
    },
  },
  {
    id: "6",
    name: "Woolrich Recycled Wool Sweater",
    price: 799000,
    images: [
      "https://res.cloudinary.com/dokktqvdq/image/upload/v1741610173/sustyle/rbneuj8giodqk5bubog1.jpg",
    ],
    category: "Sweaters",
    brand: "Woolrich",
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
      name: "Olivia Anderson",
      avatar: "/images/avatars/seller3.jpg",
      joinDate: "Nov 2021",
    },
    is3d: true,
  },
  {
    id: "7",
    name: "Everlane Sustainable Linen Shirt",
    price: 499000,
    images: [
      "https://res.cloudinary.com/dokktqvdq/image/upload/v1741610173/sustyle/nv48r9ohgpdkyyfdfget.jpg",
    ],
    category: "Shirts",
    brand: "Everlane",
    description:
      "A lightweight linen shirt perfect for casual and semi-formal wear.",
    features: [
      "100% sustainable linen",
      "Naturally breathable",
      "Handwoven fabric",
      "Biodegradable buttons",
      "Fair Trade Certified™",
    ],
    size: "XL",
    condition: "New",
    seller: {
      name: "James Wilson",
      avatar: "/images/avatars/seller1.jpg",
      joinDate: "Jan 2022",
    },
  },
  {
    id: "8",
    name: "Patagonia Recycled Cotton Joggers",
    price: 649000,
    images: [
      "https://res.cloudinary.com/dokktqvdq/image/upload/v1741610172/sustyle/yncvbhrdofs4t2su803c.jpg",
    ],
    category: "Pants",
    brand: "Patagonia",
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
      name: "Sophia Miller",
      avatar: "/images/avatars/seller2.jpg",
      joinDate: "Mar 2022",
    },
  },
];
