"use client"

import { animate, useMotionTemplate, useMotionValue, motion } from "framer-motion"
import { Model, WordAnimate } from "../molecules"
import { useEffect } from "react"

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
                <h2 className="text-7xl text-gradient">
                    Wearth
                </h2>
                <WordAnimate/>
            </div>
            <Model/>
        </motion.div>
    )
}