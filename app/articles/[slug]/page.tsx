import { Navbar } from "@/components/organism";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Articles } from "@/data/articles";

export default function Page({ params }: { params: { slug: string } }) {
  const article = Articles.find(article => article.slug === params.slug);
  
  if (!article) {
    notFound();
  }

  return (
    <div className="bg-gray-950 min-h-screen">
      <Navbar/>
      <main className="container mx-auto px-4 py-16 max-w-4xl">
        <article className="prose prose-invert lg:prose-xl mx-auto">
          <header className="mb-12 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              {article.title}
            </h1>
            <div className="text-gray-400 text-sm md:text-base font-medium">
              Published on {new Date(article.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </div>
          </header>
          
          <div className="relative w-full aspect-[16/9] my-8">
            <Image
              src={article.image}
              alt={article.title}
              fill
              priority
              className="object-cover rounded-xl shadow-2xl"
            />
          </div>

          <div className="mt-12">
            <div className="text-gray-200 leading-relaxed text-lg space-y-6">
              {article.content}
            </div>
          </div>
        </article>
      </main>
    </div>
  );
}