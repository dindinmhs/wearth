import { NavbarDashboard } from "@/components/organism";
import { BackButton } from "@/components/atoms/BackButton";
import Image from "next/image";
import { IoTimeOutline } from "react-icons/io5";
import { Breadcrumb } from "@/components/atoms/Breadcrumb";

export default function Page() {
  // Static article data
  const article = {
    title: "The Environmental Impact of Fast Fashion",
    description: "How the fast fashion industry contributes to pollution, waste, and climate change.",
    image: "/images/articles/article1.jpg",
    date: "2024-01-15",
    content: `Climate change is one of the most pressing issues of our time, affecting ecosystems and communities worldwide. As global temperatures continue to rise, we're witnessing unprecedented changes in weather patterns, rising sea levels, and the increasing frequency of extreme weather events.

    The primary driver of climate change is the emission of greenhouse gases, particularly carbon dioxide, from human activities. Industrial processes, deforestation, and the burning of fossil fuels contribute significantly to this environmental crisis. The effects are far-reaching, impacting everything from agriculture to coastal communities.

    Scientists have observed numerous indicators of climate change:
    • Rising global temperatures
    • Melting polar ice caps
    • Increasing ocean acidification
    • More frequent extreme weather events
    • Changes in precipitation patterns
    • Loss of biodiversity

    To address these challenges, we need coordinated global action. This includes transitioning to renewable energy sources, implementing sustainable agricultural practices, and protecting vital ecosystems like rainforests that act as carbon sinks.

    Individual actions also play a crucial role. By making conscious choices about our consumption, transportation, and energy use, we can contribute to the solution. Every small step towards sustainability helps in the collective effort to combat climate change.`,
    slug: "environmental-impact-fast-fashion"
  };

  return (
    <>
      <NavbarDashboard />
      <main className="pb-16 bg-gray-50 min-h-screen">
        <div className="max-w-3xl mx-auto px-4">
          <div className="pt-20 flex gap-2 md:flex-row flex-col md:items-center md:mb-6">
            <BackButton/>
            <span className="md:block hidden">/</span>
            <Breadcrumb 
              items={[
                { label: 'Home', href: '/' },
                { label: 'Explore', href: '/explore' },
                { label: article.title }
              ]} 
            />
          </div>
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