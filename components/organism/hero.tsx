// "use client"

// import { useState, useEffect, useRef } from "react"
// import Image from "next/image"
// import { motion, AnimatePresence } from "framer-motion"
// import { SquareButton } from "../atoms"

// const SLIDE_DURATION = 10000 

// export const HeroSection = () => {
//     const [index, setIndex] = useState(0);
//     const [progress, setProgress] = useState(0);
//     const intervalRef = useRef<NodeJS.Timeout | null>(null);
//     const progressRef = useRef<NodeJS.Timeout | null>(null);

//     const resetTimer = (newIndex: number) => {
//         if (intervalRef.current) clearInterval(intervalRef.current);
//         if (progressRef.current) clearInterval(progressRef.current);

//         setIndex(newIndex);
//         setProgress(0);

//         intervalRef.current = setInterval(() => {
//             setIndex((prevIndex) => (prevIndex + 1) % heroData.length);
//             setProgress(0);
//         }, SLIDE_DURATION);

//         progressRef.current = setInterval(() => {
//             setProgress((prev) => (prev < 100 ? prev + (100 / (SLIDE_DURATION / 100)) : 100));
//         }, 100);
//     };

//     useEffect(() => {
//         resetTimer(0);
//         return () => {
//             if (intervalRef.current) clearInterval(intervalRef.current);
//             if (progressRef.current) clearInterval(progressRef.current);
//         };
//     }, []);

//     return (
//         <div className="grid md:grid-cols-2 grid-cols-1 items-center overflow-hidden">
//             <div className="flex flex-col h-fit gap-2 md:h-[400px]">
//                 <div className="w-[100px] flex gap-2 p-2">
//                     {heroData.map((_, i) => (
//                         <div 
//                             key={i} 
//                             onClick={() => resetTimer(i)}
//                             className="w-full h-1 bg-gray-300 cursor-pointer rounded-lg relative overflow-hidden"
//                         >
//                             <motion.div 
//                                 initial={{ width: 0 }}
//                                 animate={{ width: i === index ? `${progress}%` : "100%" }}
//                                 transition={{ duration: i === index ? 0.1 : 0 }}
//                                 className={`h-full ${i <= index ? "bg-forest" : "bg-gray-400"}`}
//                             />
//                         </div>
//                     ))}
//                 </div>
//                 <AnimatePresence mode="wait">
//                     <motion.div
//                         key={index} 
//                         initial={{ opacity: 0, x: -50 }} 
//                         animate={{ opacity: 1, x: 0 }} 
//                         exit={{ opacity: 0, x: -50 }} 
//                         transition={{ duration: 1.2 }}
//                         className="flex flex-col gap-3 flex-1 justify-center"
//                     >
//                         <h1 className="text-3xl lg:text-6xl font-bold">{heroData[index].title}</h1>
//                         <p className="mt-2 text-gray-600 lg:text-xl text-base">{heroData[index].description}</p>
//                     </motion.div>
//                 </AnimatePresence>
//                 <div className="hidden md:block">
//                     <SquareButton icon title="EXPLORE" type="dark"/>
//                 </div>
//             </div>
//             <div>
//                 <AnimatePresence mode="wait">
//                     <motion.div
//                         key={index} 
//                         initial={{ opacity: 0, x: 50 }} 
//                         animate={{ opacity: 1, x: 0 }} 
//                         exit={{ opacity: 0, x: 50 }} 
//                         transition={{ duration: 1.2 }}
//                         className="w-full h-full flex justify-center items-center"
//                     >
//                         <Image 
//                             alt={heroData[index].title} 
//                             src={heroData[index].image} 
//                             width={500} 
//                             height={500}
//                             priority 
//                             className="w-[300px] h-[300px] md:w-[400px] md:h-[400px] object-cover"
//                         />
//                     </motion.div>
//                 </AnimatePresence>
//                 <div className="block md:hidden">
//                     <SquareButton icon title="EXPLORE" type="dark"/>
//                 </div>
//             </div>
//         </div>
//     );
// }

// const heroData = [
//     {
//         title : 'Sustainable Fashion, Your Way.',
//         description : 'Buy, swap, and discover eco-friendly fashion that suits your style.',
//         image : 'https://res.cloudinary.com/dokktqvdq/image/upload/v1740878103/download-removebg-preview_awpqth.png'
//     },
//     {
//         title : 'Learn & Take Action for a Greener Future.',
//         description : 'Read insightful articles about textile waste, eco-friendly materials, and how you can make a difference.',
//         image : 'https://res.cloudinary.com/dokktqvdq/image/upload/v1740878084/Smartrac_Is_Bringing_Green_RFID_Tags_to_Market-removebg-preview_emvyxe.png'
//     },
// ]
import Link from 'next/link';

export const HeroSection = () => {
    return (
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
            {/* Background Parallax */}
            <div 
                className="absolute inset-0 bg-fixed bg-cover bg-center"
                style={{
                    backgroundImage: `url('https://res.cloudinary.com/dokktqvdq/image/upload/v1741482239/15301084332_1_qku0kl.jpg')`
                }}
            >
                <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/90" />
            </div>

            {/* Content */}
            <div className="relative z-10 text-center text-white px-4">
                <h1 className="text-5xl font-bold mb-4">Redefining Fashion for a Greener Future</h1>
                <p className="text-lg mb-6">
                    Discover sustainable fashion through secondhand shopping, barter deals, and eco-conscious missions.
                </p>
                <Link className="bg-white text-black px-6 py-3 rounded-full hover:bg-gray-300 transition" href="/explore">
                        Explore Now
                </Link>
            </div>
        </section>
    );
};




