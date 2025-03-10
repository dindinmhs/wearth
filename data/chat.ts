export interface Message {
  id: string;
  text: string;
  sender: string;
  timestamp: string;
}

export interface Chat {
  id: string;
  user: {
    name: string;
    avatar: string;
    lastSeen: string;
  };
  messages: Message[];
}

export const ChatData: Chat[] = [
  {
    id: "1",
    user: {
      name: "Sarah Green",
      avatar: "/images/products/Oversized.jpg",
      lastSeen: "2 menit yang lalu",
    },
    messages: [
      {
        id: "m1",
        text: "Halo, saya tertarik dengan jaket Levi's anda",
        sender: "Sarah Green",
        timestamp: "10:30",
      },
      {
        id: "m2",
        text: "Halo! Ya, masih tersedia",
        sender: "John Doe",
        timestamp: "10:32",
      },
    ],
  },
  {
    id: "2",
    user: {
      name: "Emma Wilson",
      avatar:
        "https://res.cloudinary.com/dokktqvdq/image/upload/v1741621896/sustyle/qig3chjb6fj2jqavfc9d.jpg",
      lastSeen: "5 menit yang lalu",
    },
    messages: [
      {
        id: "m3",
        text: "Apakah anda mau menukar Nike Air Max dengan Jordan 1s saya?",
        sender: "Emma Wilson",
        timestamp: "Kemarin",
      },
    ],
  },
];
