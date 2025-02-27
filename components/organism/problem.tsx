"use client"

import { problemData } from "@/data";
import { motion } from "framer-motion"
import { useEffect, useState } from "react";
import { ChartProblem } from "../molecules";

export const ProblemSection = () => {
    const [isVisible, setVisible] = useState(0)

    useEffect(()=>{
        console.log(isVisible)
    }, [isVisible])
    
    return (
        <section className="grid grid-cols-2 gap-12">
            <div>
                {problemData.map((data, i)=>(
                    <motion.div
                        onViewportEnter={()=>setVisible(i)}
                        viewport={{amount:0.5, once : false}}
                        className="pl-16 pt-6 h-screen text-white flex flex-col justify-center" key={i}
                    >
                        <h3 className="font-bold text-4xl">{data.title}</h3>
                        <p className="text-xl mt-3">{data.description}</p>
                    </motion.div>
                ))}
            </div>
            <div className="relative">
                <div className="sticky top-0 h-screen flex items-center justify-center text-white">
                    {
                        isVisible == 0?
                        <ChartProblem/>:
                        isVisible == 1?
                        <p>ini 2</p>:
                        isVisible == 2?
                        <p>ini 3</p>: null
                    }
                </div>
            </div>
        </section>
    )
}