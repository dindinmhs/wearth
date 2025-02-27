import { AuroraHero } from "@/components/organism/hero";
import { Navbar, ProblemSection, SolutuinSection, TestimoniPage } from "@/components/organism";
import { FooterSection } from "@/components/organism/footer";


export default function Home() {
  return (
    <div className="bg-gray-950">
      <Navbar/>
      <AuroraHero/>
      <ProblemSection/>
      <SolutuinSection/>
      <TestimoniPage/>
      <FooterSection/>
    </div>
  );
}
