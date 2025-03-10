"use client";

import { CtaSection, HeroSection, NavbarDashboard, NavbarMobile, ReviewSection } from "@/components/organism"
import { ArticleBentoCard } from "@/components/articles/ArticleCard";
import { ProductCard } from "@/components/products/ProductCard";
import { Articles } from '@/data/articles';
import { Products } from '@/data/products';
import Link from 'next/link';
import { FooterSection } from "@/components/organism/footer";
import Image from "next/image";
import { IoArrowForward } from "react-icons/io5";
import { TrendingStyles } from "@/data/trending";
import CountUp from 'react-countup';
import { useEffect, useRef, useState } from "react";

const HomePage = () => { 
    const limitedProducts = Products.slice(0, 7);
    const [inView, setInView] = useState(false);
    const impactSectionRef = useRef(null);
    
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setInView(true);
                } else {
                    setInView(false);
                }
            },
            { threshold: 0.1 }
        );
        
        // Store the current value of the ref in a variable
        const currentRef = impactSectionRef.current;
        
        if (currentRef) {
            observer.observe(currentRef);
        }
        
        return () => {
            // Use the stored variable in the cleanup function
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, []);
    
    return (
        <>
            <NavbarDashboard/>
            <NavbarMobile/>
            <main className="pt-[5.7rem] mx-auto flex flex-col gap-16 px-6 md:px-4"> 
                <HeroSection/>
                {/* Products Section */}
                <div className="container mx-auto">
                    <div className="mb-8">
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">Just In</h3>
                        <p className="text-gray-600">Freshly uploaded secondhand fashion — stylish, sustainable, and ready for you.</p>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
                        {limitedProducts.map((product) => (
                            <Link href={'/products/1'} key={product.id}>
                                <ProductCard {...product} />
                            </Link>
                        ))}
                        <Link className="group" href={'/explore'}>
                            <div className="overflow-hidden cursor-pointer transition-all group-hover:text-forest duration-150">
                                <div className="relative h-48 w-full overflow-hidden rounded-lg">
                                    <Image
                                        src="https://res.cloudinary.com/dokktqvdq/image/upload/v1741618221/69575652141_1_dwn1or.png"
                                        alt={'explore more'}
                                        fill
                                        className="object-cover transition-transform duration-300 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 backdrop-blur-sm flex items-center justify-center">
                                        <div className="h-20 w-20 rounded-full bg-black/70 p-3 flex items-center justify-center">
                                            <IoArrowForward className="w-8 h-8 text-white group-hover:-rotate-45 transition"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="px-2 py-3 flex gap-2 items-center">
                                    <h3 className="font-medium">
                                        Explore More
                                    </h3>
                                    <IoArrowForward size={20} className="group-hover:translate-x-3 transition"/>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>

                {/* Trending Sustainable Styles Section */}
                <div className="container mx-auto">
                    <div className="mb-8">
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">Trending Sustainable Styles</h3>
                        <p className="text-gray-600">Find out whats popular right now. Discover the top sustainable fashion pieces that everyones talking about.</p>
                    </div>
                    
                    <div className="grid grid-cols-12 gap-4">
                        {/* Left column - large image */}
                        <div className="col-span-12 md:col-span-4 relative h-[450px] overflow-hidden rounded-lg group">
                            <Image
                                src={TrendingStyles[0].image}
                                alt={TrendingStyles[0].title}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
                                <div className="transform translate-y-2 opacity-80 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                                    <h4 className="text-white text-xl font-semibold mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">{TrendingStyles[0].title}</h4>
                                    <p className="text-white/80 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">{TrendingStyles[0].description}</p>
                                </div>
                            </div>
                        </div>
                        
                        {/* Middle column */}
                        <div className="col-span-12 md:col-span-5 flex flex-col gap-4">
                            {/* Middle top - large image */}
                            <div className="relative h-[280px] overflow-hidden rounded-lg group">
                                <Image
                                    src={TrendingStyles[1].image}
                                    alt={TrendingStyles[1].title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
                                    <div className="transform translate-y-2 opacity-80 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                                        <h4 className="text-white text-xl font-semibold mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">{TrendingStyles[1].title}</h4>
                                        <p className="text-white/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500">{TrendingStyles[1].description}</p>
                                    </div>
                                </div>
                            </div>
                            
                            {/* Middle bottom - two small images */}
                            <div className="grid grid-cols-2 gap-4 h-[150px]">
                                <div className="relative overflow-hidden rounded-lg group">
                                    <Image
                                        src={TrendingStyles[2].image}
                                        alt={TrendingStyles[2].title}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-4">
                                        <div className="transform translate-y-2 opacity-80 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                                            <h4 className="text-white text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-500">{TrendingStyles[2].title}</h4>
                                            <p className="text-white/80 text-xs mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500 line-clamp-2">{TrendingStyles[2].description}</p>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="relative overflow-hidden rounded-lg group">
                                    <Image
                                        src={TrendingStyles[3].image}
                                        alt={TrendingStyles[3].title}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-4">
                                        <div className="transform translate-y-2 opacity-80 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                                            <h4 className="text-white text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-500">{TrendingStyles[3].title}</h4>
                                            <p className="text-white/80 text-xs mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500 line-clamp-2">{TrendingStyles[3].description}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        {/* Right column */}
                        <div className="col-span-12 md:col-span-3 flex flex-col gap-4">
                            {/* Right top - small image */}
                            <div className="relative h-[150px] overflow-hidden rounded-lg group">
                                <Image
                                    src={TrendingStyles[4].image}
                                    alt={TrendingStyles[4].title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-4">
                                    <div className="transform translate-y-2 opacity-80 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                                        <h4 className="text-white text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-500">{TrendingStyles[4].title}</h4>
                                        <p className="text-white/80 text-xs mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500 line-clamp-2">{TrendingStyles[4].description}</p>
                                    </div>
                                </div>
                            </div>
                            
                            {/* Right bottom - medium image */}
                            <div className="relative h-[280px] overflow-hidden rounded-lg group">
                                <Image
                                    src={TrendingStyles[5].image}
                                    alt={TrendingStyles[5].title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-4">
                                    <div className="transform translate-y-2 opacity-80 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                                        <h4 className="text-white text-lg font-semibold mb-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500">{TrendingStyles[5].title}</h4>
                                        <p className="text-white/80 text-sm mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500 line-clamp-2">{TrendingStyles[5].description}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                {/* Articles Section */}
                <div className="container mx-auto">
                <div className="mb-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Latest Articles</h3>
                    <p className="text-gray-600">Explore insightful stories, tips, and trends in sustainable fashion — empowering you to make conscious choices with style.</p>
                </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                
                 {/* Sustainable Impact Section */}
                <div ref={impactSectionRef} className="container mx-auto py-10">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 lg:gap-20 max-w-6xl mx-auto px-4">
                        <div className="flex flex-col sm:flex-row items-center text-center sm:text-left">
                            <div className="relative w-16 h-16 mb-3 sm:mb-0 sm:mr-4 flex-shrink-0">
                                <Image 
                                    src="https://res.cloudinary.com/dokktqvdq/image/upload/v1741624271/sustyle/jhkle0bsxyljo3r0r3w4.png" 
                                    alt="Textile Waste" 
                                    width={64} 
                                    height={64}
                                    className="object-contain"
                                />
                                <div className="absolute top-0 right-0 bg-[#2c6e49] text-white text-xs px-1.5 py-0.5 rounded-bl-md rounded-tr-md">
                                    15K+
                                </div>
                            </div>
                            <div>
                                <h4 className="text-3xl sm:text-4xl font-bold bg-clip-text mb-1">
                                    {inView && <CountUp end={15000} duration={2.5} separator="," decimals={0} decimal="." suffix="+" />}
                                    {!inView && "0+"}
                                </h4>
                                <p className="text-gray-600 text-sm sm:text-base">Kg Textile Waste Diverted</p>
                            </div>
                        </div>
                        
                        <div className="flex flex-col sm:flex-row items-center text-center sm:text-left">
                            <div className="relative w-16 h-16 mb-3 sm:mb-0 sm:mr-4 flex-shrink-0">
                                <Image 
                                    src="https://res.cloudinary.com/dokktqvdq/image/upload/v1741624271/sustyle/oofoadac4kd7szwpa5q7.png" 
                                    alt="Recycled Garments" 
                                    width={64} 
                                    height={64}
                                    className="object-contain"
                                />
                                <div className="absolute top-0 right-0 bg-[#2c6e49] text-white text-xs px-1.5 py-0.5 rounded-bl-md rounded-tr-md">
                                    10K+
                                </div>
                            </div>
                            <div>
                                <h4 className="text-3xl sm:text-4xl font-bold bg-clip-text mb-1">
                                    {inView && <CountUp end={10000} duration={2} separator="," decimals={0} decimal="." suffix="+" />}
                                    {!inView && "0+"}
                                </h4>
                                <p className="text-gray-600 text-sm sm:text-base">Garments Recycled</p>
                            </div>
                        </div>
                        
                        <div className="flex flex-col sm:flex-row items-center text-center sm:text-left">
                            <div className="relative w-16 h-16 mb-3 sm:mb-0 sm:mr-4 flex-shrink-0">
                                <Image 
                                    src="https://res.cloudinary.com/dokktqvdq/image/upload/v1741624271/sustyle/uk3rf18t0rwd4inhusva.png" 
                                    alt="Sustainable Materials" 
                                    width={64} 
                                    height={64}
                                    className="object-contain"
                                />
                                <div className="absolute top-0 right-0 bg-[#2c6e49] text-white text-xs px-1.5 py-0.5 rounded-bl-md rounded-tr-md">
                                    25+
                                </div>
                            </div>
                            <div>
                                <h4 className="text-3xl sm:text-4xl font-bold bg-clip-text mb-1">
                                    {inView && <CountUp end={25} duration={1.5} separator="," decimals={0} decimal="." suffix="+" />}
                                    {!inView && "0+"}
                                </h4>
                                <p className="text-gray-600 text-sm sm:text-base">Sustainable Materials Used</p>
                            </div>
                        </div>
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