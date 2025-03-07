import { HeroSection, NavbarDashboard, NavbarMobile, ReviewSection } from "@/components/organism"
import { ArticleCard } from "@/components/articles/ArticleCard";
import { ProductCard } from "@/components/products/ProductCard";
import { Articles } from '@/data/articles';
import { Products } from '@/data/products';
import Link from 'next/link';
import { FooterSection } from "@/components/organism/footer";

const HomePage = () => { 
    return (
        <>
            <NavbarDashboard/>
            <NavbarMobile/>
            <main className="pt-20 w-11/12 mx-auto"> 
                <HeroSection/>
                {/* Products Section */}
                <div className="container mx-auto px-4 py-16">
                    <div className="mb-8">
                        <h2 className="text-3xl font-bold text-gray-900 mb-2">New Arrivals</h2>
                        <p className="text-gray-600">Discover our sustainable fashion collection</p>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
                        {Products.map((product) => (
                            <Link href={`/products/${product.id}`} key={product.id}>
                                <ProductCard {...product} />
                            </Link>
                        ))}
                    </div>
                </div>

                {/* Articles Section */}
                <div className="container mx-auto px-4 py-16">
                    <div className="mb-8">
                        <h2 className="text-3xl font-bold text-gray-900 mb-2">Fashion Stories</h2>
                        <p className="text-gray-600">Latest updates from the world of sustainable fashion</p>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
                        {Articles.map((article, index) => (
                            <Link href={`/articles/${article.slug}`} key={index}>
                                <ArticleCard
                                    title={article.title}
                                    description={article.description}
                                    image={article.image}
                                    date={article.date}
                                />
                            </Link>
                        ))}
                    </div>
                </div>
                <ReviewSection/>
            </main>
            <FooterSection/>
        </>
    )
}

export default HomePage