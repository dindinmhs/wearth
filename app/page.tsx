import { AuroraHero } from "@/components/organism/hero";
import { Navbar, SolutuinSection, TestimoniPage } from "@/components/organism";
import { FooterSection } from "@/components/organism/footer";


export default function Home() {
  return (
    <div className="bg-gray-950">
      <Navbar/>
      <AuroraHero/>
      <div className="h-screen">

      </div>
      <SolutuinSection/>
      <TestimoniPage/>
      <FooterSection/>
    </div>
  );
}
