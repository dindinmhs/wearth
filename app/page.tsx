import { AuroraHero } from "@/components/organism/hero";
import { ArticleCard } from "@/components/articles/ArticleCard";
import { Articles } from '@/data/articles';
import Link from 'next/link';
import { Navbar, SolutuinSection, TestimoniPage } from "@/components/organism";
import { FooterSection } from "@/components/organism/footer";


export default function Home() {
  return (
    <div className="bg-gray-950">
      <Navbar/>
      <AuroraHero/>
      {/* <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Articles.map((article, index) => (
            <Link href={`/articles/${article.slug}`} key={index}>
              <ArticleCard
                title={article.title}
                description={article.description}
                image={article.image}
                date={article.date}
                slug={article.slug}
              />
            </Link>
          ))}
        </div>
      </div> */}
      <div className="h-screen">

      </div>
      <SolutuinSection/>
      <TestimoniPage/>
      <FooterSection/>
    </div>
  );
}
