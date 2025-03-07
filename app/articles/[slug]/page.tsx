import { NavbarDashboard } from "@/components/organism";
import { BackButton } from "@/components/atoms/BackButton";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Articles } from "@/data/articles";
import { IoTimeOutline } from "react-icons/io5";
import { Breadcrumb } from "@/components/atoms/Breadcrumb";


export default function Page({ params }: { params: { slug: string } }) {
  const article = Articles.find(article => article.slug === params.slug);
  
  if (!article) {
    notFound();
  }

  return (
    <>
      <NavbarDashboard />
      <main className="pt-20 pb-16 bg-white min-h-screen">
        <div className="max-w-3xl mx-auto px-4">
          <BackButton href="/" />
          <Breadcrumb 
              items={[
                { label: 'Home', href: '/' },
                { label: article.title }
              ]} 
            />
          <article>
            {/* Article Header */}
            <header className="mb-8">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                {article.title}
              </h1>
              <div className="flex items-center gap-2 text-gray-500 mb-8">
                <IoTimeOutline className="text-xl" />
                <time className="text-base">
                  {new Date(article.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </time>
              </div>

              {/* Featured Image */}
              {article.image && (
                <div className="relative aspect-[16/9] rounded-lg overflow-hidden">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    priority
                    className="object-cover"
                  />
                </div>
              )}
            </header>

            {/* Article Content */}
            <div className="prose prose-lg max-w-none">
              <div className="text-gray-700 leading-relaxed space-y-6">
                {article.content.split('\n').map((paragraph, index) => (
                  paragraph.trim() && (
                    <p key={index} className="text-lg">
                      {paragraph.trim()}
                    </p>
                  )
                ))}
              </div>
            </div>
          </article>
        </div>
      </main>
    </>
  );
}