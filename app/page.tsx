"use client";

import { HeroSection, NavbarDashboard, NavbarMobile, ReviewSection } from "@/components/organism"
import { ArticleCard } from "@/components/articles/ArticleCard";
import { ProductCard } from "@/components/products/ProductCard";
import { Articles } from '@/data/articles';
import { Products } from '@/data/products';
import Link from 'next/link';
import { useState } from "react";
import { motion } from "framer-motion";

const HomePage = () => { 
    const [isLoginOpen, setIsLoginOpen] = useState(false);
    const [isSignupOpen, setIsSignupOpen] = useState(false);
    
    return (
        <>
            <NavbarDashboard/>
            <NavbarMobile 
                onLoginClick={() => setIsLoginOpen(true)}
                onSignupClick={() => setIsSignupOpen(true)}
            />
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
                            <Link href={`/products/1`} key={product.id}>
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
                            <Link href={'/articles/environmental-impact-fast-fashion'} key={index}>
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

            {/* Login Drawer */}
            {isLoginOpen && (
                <motion.div 
                    className="fixed inset-0 bg-black bg-opacity-50 z-50"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={() => setIsLoginOpen(false)}
                >
                    <motion.div 
                        className="absolute bottom-0 left-0 right-0 bg-white rounded-t-3xl p-6"
                        initial={{ y: "100%" }}
                        animate={{ y: 0 }}
                        exit={{ y: "100%" }}
                        transition={{ type: "spring", damping: 25, stiffness: 300 }}
                        drag="y"
                        dragConstraints={{ top: 0 }}
                        dragElastic={0.2}
                        onDragEnd={(_, info) => {
                            if (info.offset.y > 100) {
                                setIsLoginOpen(false);
                            }
                        }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="w-16 h-1 bg-gray-300 rounded mx-auto mb-6"></div>
                        <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
                        <form className="space-y-4">
                            <div>
                                <label className="block text-gray-700 mb-2">Email</label>
                                <input 
                                    type="email" 
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                                    placeholder="Enter your email"
                                />
                            </div>
                            <div>
                                <label className="block text-gray-700 mb-2">Password</label>
                                <input 
                                    type="password" 
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                                    placeholder="Enter your password"
                                />
                            </div>
                            <button 
                                type="submit"
                                className="w-full bg-green-600 text-white py-3 rounded-lg font-medium hover:bg-green-700 transition-colors"
                            >
                                Login
                            </button>
                        </form>
                        <p className="text-center mt-4">
                            Don't have an account?{" "}
                            <button 
                                className="text-green-600 font-medium"
                                onClick={() => {
                                    setIsLoginOpen(false);
                                    setIsSignupOpen(true);
                                }}
                            >
                                Sign up
                            </button>
                        </p>
                    </motion.div>
                </motion.div>
            )}

            {/* Signup Drawer */}
            {isSignupOpen && (
                <motion.div 
                    className="fixed inset-0 bg-black bg-opacity-50 z-50"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={() => setIsSignupOpen(false)}
                >
                    <motion.div 
                        className="absolute bottom-0 left-0 right-0 bg-white rounded-t-3xl p-6"
                        initial={{ y: "100%" }}
                        animate={{ y: 0 }}
                        exit={{ y: "100%" }}
                        transition={{ type: "spring", damping: 25, stiffness: 300 }}
                        drag="y"
                        dragConstraints={{ top: 0 }}
                        dragElastic={0.2}
                        onDragEnd={(_, info) => {
                            if (info.offset.y > 100) {
                                setIsSignupOpen(false);
                            }
                        }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="w-16 h-1 bg-gray-300 rounded mx-auto mb-6"></div>
                        <h2 className="text-2xl font-bold text-center mb-6">Sign Up</h2>
                        <form className="space-y-4">
                            <div>
                                <label className="block text-gray-700 mb-2">Full Name</label>
                                <input 
                                    type="text" 
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                                    placeholder="Enter your full name"
                                />
                            </div>
                            <div>
                                <label className="block text-gray-700 mb-2">Email</label>
                                <input 
                                    type="email" 
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                                    placeholder="Enter your email"
                                />
                            </div>
                            <div>
                                <label className="block text-gray-700 mb-2">Password</label>
                                <input 
                                    type="password" 
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                                    placeholder="Create a password"
                                />
                            </div>
                            <button 
                                type="submit"
                                className="w-full bg-green-600 text-white py-3 rounded-lg font-medium hover:bg-green-700 transition-colors"
                            >
                                Create Account
                            </button>
                        </form>
                        <p className="text-center mt-4">
                            Already have an account?{" "}
                            <button 
                                className="text-green-600 font-medium"
                                onClick={() => {
                                    setIsSignupOpen(false);
                                    setIsLoginOpen(true);
                                }}
                            >
                                Login
                            </button>
                        </p>
                    </motion.div>
                </motion.div>
            )}
        </>
    )
}

export default HomePage