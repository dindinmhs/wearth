"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { SquareButton } from "../atoms"

const SLIDE_DURATION = 10000 

export const HeroSection = () => {
    const [index, setIndex] = useState(0);
    const [progress, setProgress] = useState(0);
    const intervalRef = useRef<NodeJS.Timeout | null>(null);
    const progressRef = useRef<NodeJS.Timeout | null>(null);

    const resetTimer = (newIndex: number) => {
        if (intervalRef.current) clearInterval(intervalRef.current);
        if (progressRef.current) clearInterval(progressRef.current);

        setIndex(newIndex);
        setProgress(0);

        intervalRef.current = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % heroData.length);
            setProgress(0);
        }, SLIDE_DURATION);

        progressRef.current = setInterval(() => {
            setProgress((prev) => (prev < 100 ? prev + (100 / (SLIDE_DURATION / 100)) : 100));
        }, 100);
    };

    useEffect(() => {
        resetTimer(0);
        return () => {
            if (intervalRef.current) clearInterval(intervalRef.current);
            if (progressRef.current) clearInterval(progressRef.current);
        };
    }, []);

    return (
        <div className="grid grid-cols-2 h-[400px] items-center">
            <div className="h-full flex flex-col">
                <div className="w-[100px] flex gap-2 p-2">
                    {heroData.map((_, i) => (
                        <div 
                            key={i} 
                            onClick={() => resetTimer(i)}
                            className="w-full h-1 bg-gray-300 cursor-pointer rounded-lg relative overflow-hidden"
                        >
                            <motion.div 
                                initial={{ width: 0 }}
                                animate={{ width: i === index ? `${progress}%` : "100%" }}
                                transition={{ duration: i === index ? 0.1 : 0 }}
                                className={`h-full ${i === index ? "bg-forest" : "bg-gray-400"}`}
                            />
                        </div>
                    ))}
                </div>
                <AnimatePresence mode="wait">
                    <motion.div
                        key={index} 
                        initial={{ opacity: 0, x: -50 }} 
                        animate={{ opacity: 1, x: 0 }} 
                        exit={{ opacity: 0, x: -50 }} 
                        transition={{ duration: 1.2 }}
                        className="flex flex-col gap-3 flex-1 justify-center"
                    >
                        <h1 className="text-3xl lg:text-6xl font-bold">{heroData[index].title}</h1>
                        <p className="mt-2 text-gray-600 lg:text-xl text-base">{heroData[index].description}</p>
                    </motion.div>
                </AnimatePresence>
                <SquareButton icon title="EXPLORE" type="dark"/>
            </div>

            <AnimatePresence mode="wait">
                <motion.div
                    key={index} 
                    initial={{ opacity: 0, x: 50 }} 
                    animate={{ opacity: 1, x: 0 }} 
                    exit={{ opacity: 0, x: 50 }} 
                    transition={{ duration: 1.2 }}
                    className="w-full h-full flex justify-center items-center"
                >
                    <Image 
                        alt={heroData[index].title} 
                        src={heroData[index].image} 
                        width={200} 
                        height={200} 
                        className="w-[400px] h-[400px] object-cover rounded-xl"
                    />
                </motion.div>
            </AnimatePresence>
        </div>
    );
}

const heroData = [
    {
        title : 'Sustainable Fashion, Your Way.',
        description : 'Buy, swap, and discover eco-friendly fashion that suits your style.',
        image : 'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D.jpg'
    },
    {
        title : 'Learn & Take Action for a Greener Future.',
        description : 'Read insightful articles about textile waste, eco-friendly materials, and how you can make a difference.',
        image : 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1440&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D.jpg'
    },
]
