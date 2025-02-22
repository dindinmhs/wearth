import { Navbar, AuroraHero } from "@/components/organism";

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
