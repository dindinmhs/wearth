"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { testimoniData } from "@/data";

const SLIDE_DURATION = 5000;

export const ReviewSection = () => {
    const [index, setIndex] = useState(0);
    const [progress, setProgress] = useState(0); // Track progress separately
    const intervalRef = useRef<NodeJS.Timeout | null>(null);
    const progressIntervalRef = useRef<NodeJS.Timeout | null>(null);

    const resetTimer = (newIndex: number) => {
        // Clear existing intervals
        if (intervalRef.current) clearInterval(intervalRef.current);
        if (progressIntervalRef.current) clearInterval(progressIntervalRef.current);
        
        // Reset progress and set new index
        setProgress(0);
        setIndex(newIndex);
        
        // Create new progress interval that updates more frequently
        const progressStep = 100 / (SLIDE_DURATION / 100); // Update every 100ms
        progressIntervalRef.current = setInterval(() => {
            setProgress(prev => {
                const newProgress = prev + progressStep;
                if (newProgress >= 100) {
                    return 0;
                }
                return newProgress;
            });
        }, 100);
        
        // Set slide transition interval
        intervalRef.current = setInterval(() => {
            setIndex(prevIndex => {
                const nextIndex = (prevIndex + 1) % testimoniData.length;
                setProgress(0); // Reset progress when changing slides
                return nextIndex;
            });
        }, SLIDE_DURATION);
    };

    useEffect(() => {
        // Start first timer after a short delay
        const timeout = setTimeout(() => resetTimer(0), 500);
        
        // Cleanup function
        return () => {
            clearTimeout(timeout);
            if (intervalRef.current) clearInterval(intervalRef.current);
            if (progressIntervalRef.current) clearInterval(progressIntervalRef.current);
        };
    }, []);

    return (
        <div className="grid md:grid-cols-2 grid-cols-1 items-center overflow-hidden pb-12 gap-4 container mx-auto">
            {/* Bagian Teks */}
            <div className="flex flex-col h-fit gap-2 md:h-[400px]">
                <div className="flex flex-col gap-3 flex-1 justify-center">
                <h1 className="text-3xl lg:text-6xl font-bold">What Our Community Says</h1>
                <p className="mt-2 text-gray-600 lg:text-xl text-base">
                    Hear from our customers who are embracing sustainable fashion — one thoughtful choice at a time.
                </p>

                </div>
                {/* Progress Indicator */}
                <div className="w-full flex gap-2 p-2">
                    {testimoniData.map((_, i) => (
                        <div 
                            key={i} 
                            onClick={() => resetTimer(i)}
                            className="w-full h-3 bg-gray-300 cursor-pointer rounded-lg relative overflow-hidden"
                        >
                            <div 
                                style={{ 
                                    width: i === index ? `${progress}%` : i < index ? '100%' : '0%',
                                    transition: i === index ? 'width 100ms linear' : 'none'
                                }}
                                className={`h-full ${i === index || i < index ? "bg-black" : "bg-gray-300"}`}
                            />
                        </div>
                    ))}
                </div>
            </div>

            {/* Bagian Gambar dengan Horizontal Scroll */}
            <div className="relative w-full flex justify-center items-center h-full rounded-xl overflow-hidden">
                <motion.div 
                    animate={{ x: `-${index * 100}%` }} 
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                    className="flex w-full h-full items-center"
                >
                    {testimoniData.map((data, i) => (
                        <div key={i} className={`w-full flex flex-shrink-0 flex-col h-full justify-between p-6 ${i%2 == 0?'bg-black':'bg-forest'}`}>
                            <Image 
                                alt={data.name} 
                                src={data.src} 
                                width={500} 
                                height={500}
                                priority 
                                className="w-[100px] h-[100px] object-cover rounded-full mx-auto"
                            />
                            <p className="w-9/12 text-white text-2xl italic">{data.comment}</p>
                            <h3 className="text-white font-medium text-xl">{data.name}</h3>
                        </div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
}