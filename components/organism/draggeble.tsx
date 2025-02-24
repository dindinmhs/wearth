"use client"

import { imagesBanner } from '@/data'
import { motion, useMotionValue } from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'

const DRAG_BUFFER = 50

export const DragSection = () => {
    const [dragging, setDragging] = useState(false)
    const [imgIdx, setImgIdx] = useState(0)
    const dragX = useMotionValue(0)
    const dragEnd = () => {
        setDragging(true)
        const x = dragX.get()
        if (x <= -DRAG_BUFFER && imgIdx < imagesBanner.length - 1) {
            setImgIdx(prev => prev + 1)
        } else if (x >= DRAG_BUFFER && imgIdx > 0) {
            setImgIdx(prev => prev - 1)
        }
    }
    return (
        <div>
            <div className="overflow-hidden rounded-lg">
                <motion.div 
                    className="flex cursor-grab active:cursor-grabbing" 
                    dragConstraints={{ left : 0, right : 0 }} 
                    drag="x"
                    onDragStart={()=>setDragging(true)}
                    onDragEnd={dragEnd}
                    style={{ x : dragX }}
                    animate={{ translateX : `-${imgIdx*100}%` }}>
                        {imagesBanner.map((data, idx:number) => (
                            <div key={idx} className="shrink-0 w-full relative h-[10rem] sm:h-[18rem] md:h-[23rem]">
                                <Image
                                    src={data.src}
                                    alt={data.name}
                                    width={2000}
                                    height={2000}
                                    className="w-full h-full"
                                />
                                <div className="absolute inset-0"></div>
                            </div>
                        ))}
                </motion.div>
            </div>
            <div className="flex gap-x-2 w-fit mx-auto my-6">
                {imagesBanner.map((data, idx:number) => (
                    <button 
                        key={idx} 
                        onClick={()=>setImgIdx(idx)} 
                        className={`${imgIdx === idx ? "dark:bg-neutral-200 bg-gray-700" : "dark:bg-neutral-500 bg-gray-400"} w-2 h-2 rounded-full`}/>
                ))}
            </div>
        </div>
    )
}