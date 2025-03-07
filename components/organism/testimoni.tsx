"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { testimoniData } from "@/data";

const SLIDE_DURATION = 5000;

export const ReviewSection = () => {
    const [index, setIndex] = useState(0);
    const [initialLoad, setInitialLoad] = useState(true); // Penanda untuk awal agar semua abu
    const intervalRef = useRef<NodeJS.Timeout | null>(null);

    const resetTimer = (newIndex: number) => {
        if (intervalRef.current) clearInterval(intervalRef.current);
        setIndex(newIndex);
        setInitialLoad(false); // Setelah progress pertama dimulai, ubah menjadi false

        intervalRef.current = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % testimoniData.length);
        }, SLIDE_DURATION);
    };

    useEffect(() => {
        const timeout = setTimeout(() => resetTimer(0), 1000); // Delay untuk progress pertama
        return () => {
            clearTimeout(timeout);
            if (intervalRef.current) clearInterval(intervalRef.current);
        };
    }, []);

    return (
        <div className="grid md:grid-cols-2 grid-cols-1 items-center overflow-hidden pb-12 gap-4">
            {/* Bagian Teks */}
            <div className="flex flex-col h-fit gap-2 md:h-[400px]">
                <div className="flex flex-col gap-3 flex-1 justify-center">
                    <h1 className="text-3xl lg:text-6xl font-bold">What Our Customers Think</h1>
                    <p className="mt-2 text-gray-600 lg:text-xl text-base">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt tempore beatae distinctio repellendus aliquam veritatis quibusdam atque facilis odit, itaque dolore officia, culpa accusamus ad suscipit quidem ipsum. Corporis, odio.</p>
                </div>
                {/* Progress Indicator */}
                <div className="w-full flex gap-2 p-2">
                    {testimoniData.map((_, i) => (
                        <div 
                            key={i} 
                            onClick={() => resetTimer(i)}
                            className="w-full h-3 bg-gray-300 cursor-pointer rounded-lg relative overflow-hidden"
                        >
                            <motion.div 
                                animate={{ width: initialLoad ? "0%" : i === index ? "100%" : i < index ? "100%" : "0%" }}
                                transition={{ duration: SLIDE_DURATION / 1000 }}
                                className={`h-full ${i === index ? "bg-black" : i < index ? "bg-black" : "bg-gray-300"}`}
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
                        <div key={i} className="w-full flex flex-shrink-0 flex-col bg-black h-full justify-between p-6">
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
