"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { motion } from "framer-motion"

const SLIDE_DURATION = 10000;

export const ReviewSection = () => {
    const [index, setIndex] = useState(0);
    const intervalRef = useRef<NodeJS.Timeout | null>(null);

    const resetTimer = (newIndex: number) => {
        if (intervalRef.current) clearInterval(intervalRef.current);
        setIndex(newIndex);

        intervalRef.current = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % heroData.length);
        }, SLIDE_DURATION);
    };

    useEffect(() => {
        resetTimer(0);
        return () => {
            if (intervalRef.current) clearInterval(intervalRef.current);
        };
    }, []);

    return (
        <div className="grid md:grid-cols-2 grid-cols-1 items-center overflow-hidden">
            {/* Bagian Teks */}
            <div className="flex flex-col h-fit gap-2 md:h-[400px]">
                <div className="flex flex-col gap-3 flex-1 justify-center">
                    <h1 className="text-3xl lg:text-6xl font-bold">{heroData[index].title}</h1>
                    <p className="mt-2 text-gray-600 lg:text-xl text-base">{heroData[index].description}</p>
                </div>
                {/* Progress Indicator */}
                <div className="w-[100px] flex gap-2 p-2">
                    {heroData.map((_, i) => (
                        <div 
                            key={i} 
                            onClick={() => resetTimer(i)}
                            className="w-full h-1 bg-gray-300 cursor-pointer rounded-lg relative overflow-hidden"
                        >
                            <motion.div 
                                animate={{ width: i === index ? "100%" : "0%" }}
                                transition={{ duration: SLIDE_DURATION / 1000 }}
                                className={`h-full ${i <= index ? "bg-forest" : "bg-gray-400"}`}
                            />
                        </div>
                    ))}
                </div>
            </div>

            {/* Bagian Gambar dengan Horizontal Scroll */}
            <div className="relative w-full h-full flex justify-center items-center overflow-hidden">
                <motion.div 
                    animate={{ x: `-${index * 100}%` }} 
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                    className="flex w-full"
                >
                    {heroData.map((data, i) => (
                        <div key={i} className="w-full flex justify-center items-center flex-shrink-0">
                            <Image 
                                alt={data.title} 
                                src={data.image} 
                                width={500} 
                                height={500}
                                priority 
                                className="w-[300px] h-[300px] md:w-[400px] md:h-[400px] object-cover"
                            />
                        </div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
}

const heroData = [
    {
        title : 'Sustainable Fashion, Your Way.',
        description : 'Buy, swap, and discover eco-friendly fashion that suits your style.',
        image : 'https://res.cloudinary.com/dokktqvdq/image/upload/v1740878103/download-removebg-preview_awpqth.png'
    },
    {
        title : 'Learn & Take Action for a Greener Future.',
        description : 'Read insightful articles about textile waste, eco-friendly materials, and how you can make a difference.',
        image : 'https://res.cloudinary.com/dokktqvdq/image/upload/v1740878084/Smartrac_Is_Bringing_Green_RFID_Tags_to_Market-removebg-preview_emvyxe.png'
    },
];
