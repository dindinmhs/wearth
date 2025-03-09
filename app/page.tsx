"use client";

import { CtaSection, HeroSection, NavbarDashboard, NavbarMobile, ReviewSection } from "@/components/organism"
import { ArticleBentoCard } from "@/components/articles/ArticleCard";
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
            <main className="w-11/12 pt-[5.7rem] mx-auto flex flex-col gap-16"> 
                <HeroSection/>
                {/* Products Section */}
                <div className="container mx-auto">
                    <div className="mb-8">
                        <h2 className="text-3xl font-bold text-gray-900 mb-2">New Arrivals</h2>
                        <p className="text-gray-600">Discover our sustainable fashion collection</p>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
                        {Products.map((product) => (
                            <Link href={'/products/1'} key={product.id}>
                                <ProductCard {...product} />
                            </Link>
                        ))}
                    </div>
                </div>
                {/* Articles Section */}
                <div className="container mx-auto">
                    <div className="mb-8">
                        <h2 className="text-3xl font-bold text-gray-900 mb-2">Fashion Stories</h2>
                        <p className="text-gray-600">Latest updates from the world of sustainable fashion</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
                        <div className="grid md:grid-rows-2 gap-4">
                            <Link href={'/articles/environmental-impact-fast-fashion'}>
                                <ArticleBentoCard
                                    title={Articles[0].title}
                                    image={Articles[0].image}
                                    date={Articles[0].date}
                                    otherStyle="h-[250px] md:h-[200px]"
                                />
                            </Link>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {Articles.slice(1, 3).map((article, index) => (
                                    <Link href={'/articles/environmental-impact-fast-fashion'} key={index}>
                                        <ArticleBentoCard
                                            title={article.title}
                                            image={article.image}
                                            date={article.date}
                                            otherStyle="h-[250px] md:h-[200px]"
                                        />
                                    </Link>
                                ))}
                            </div>
                        </div>
                        <Link href={'/articles/environmental-impact-fast-fashion'}>
                            <ArticleBentoCard
                                title={Articles[3].title}
                                image={Articles[3].image}
                                date={Articles[3].date}
                                otherStyle="h-[300px] md:h-full"
                            />
                        </Link>
                    </div>
                </div>

                <ReviewSection/>
            </main>
            <CtaSection/>
            <FooterSection/>
        </>
    )
}

export default HomePage