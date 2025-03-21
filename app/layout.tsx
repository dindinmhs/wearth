import type { Metadata } from "next";
import { Montserrat, Inter } from "next/font/google";
import "./globals.css";
import { ChatPopup } from "@/components/organism/ChatPopup";

const monsterrat  = Montserrat({
  variable: "--font-montserrat",
  weight : ["500", "700"],
  subsets : ["latin"]
})

const inter  = Inter({
  variable: "--font-inter",
  weight : ["400","500", "700"],
  subsets : ["latin"]
})

export const metadata: Metadata = {
  title: "Sustyle",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${monsterrat.className} ${inter.className} antialiased text-black dark:text-black bg-gray-50 duration-200`}
      >
        {children}
        <ChatPopup />
    </body>
    </html>
  );
}
