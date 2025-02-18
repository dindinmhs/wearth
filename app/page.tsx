import { Navbar } from "@/components/molecules";
import { AuroraHero } from "@/components/organism/hero";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-gray-950">
      <Navbar/>
      <AuroraHero/>
      <div className="h-screen">
        Latar belakang
      </div>
    </div>
  );
}
