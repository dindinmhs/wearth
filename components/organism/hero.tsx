"use client"

import { animate, useMotionTemplate, useMotionValue, motion, useScroll } from "framer-motion"
import { Model } from "../molecules"
import { useEffect, useRef } from "react"

const COLORS = ['#13FFAA', '#1E67C6', '#CE84CF', '#DD335C']

export const AuroraHero = () => {
    const color = useMotionValue(COLORS[0])
    const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 110%, ${color}, #020617 50%)`

    useEffect(()=>{
        animate(color, COLORS, {
            ease: 'easeInOut',
            duration: 10,
            repeat: Infinity,
            repeatType: 'mirror'
        })
    },[])

    return (
        <motion.div style={{
            backgroundImage,
        }} className="h-screen relative bg-gray-950">
            <div className="absolute z-10 inset-0 pt-24 flex flex-col items-center gap-2">
                <h2 className="text-4xl text-white font-bold">
                    Ubah <span className="text-gradient">gaya</span> hidupmu
                </h2>
                <h2 className="text-4xl text-white font-bold">
                    Selamatkan <span className="text-gradient">planet</span> kita
                </h2>
                {/* <WordAnimate/> */}
            </div>
            <Model/>
        </motion.div>
    )
}