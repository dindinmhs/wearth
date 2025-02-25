"use client"

import { testimoniData } from "@/data"
import { CardTestiominal } from "../molecules"
import useMeasure from "react-use-measure"
import { useMotionValue, motion, animate } from "framer-motion"
import { useEffect } from "react"

export const TestimoniPage = () => {
    let [ref, {width}] = useMeasure()

    const xTranslation = useMotionValue(0)

    useEffect(()=>{
        let controls;
        let finalPotions = -width / 2 - 5

        controls = animate(xTranslation, [0, finalPotions], {
            ease : "linear",
            duration : 25,
            repeat : Infinity,
            repeatType : "loop",
            repeatDelay : 0
        })

        return controls.stop
    },[xTranslation, width])

    return (
        <section className="bg-gray-100 py-10">
            <h3 className="text-head">Testimonials</h3>
            <p className="text-center w-1/2 mx-auto">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores excepturi eaque cumque at, sequi molestiae iure! Debitis totam alias atque delectus expedita nam, iure asperiores, maiores odit corporis eligendi optio.</p>
            <div className="flex overflow-hidden">
                <motion.div ref={ref} style={{ x : xTranslation }} className="flex gap-4">
                    {[...testimoniData, ...testimoniData].map((item, idx)=>(
                        <CardTestiominal
                            key={idx}
                            name={item.name}
                            comment={item.comment}
                            src={item.src}
                        />
                    ))}
                </motion.div>
            </div>
        </section>
    )
}