"use client"

import React, { useState } from "react"
import { IconType } from "react-icons"
import { HoverEffect } from "./hover-effect"

interface Props {
    icon : React.ReactElement<IconType>
    activeIcon : React.ReactElement<IconType>
    counter : number
}

export const Notify = ({ icon, counter, activeIcon } : Props) => {
    const [isHover, setHover] = useState(false)
    return (
        <HoverEffect>
            <div onMouseEnter={()=>setHover(true)} onMouseLeave={()=>setHover(false)} className="relative">
                {isHover?activeIcon:icon}
                <div className="w-5 aspect-square rounded-full bg-red-500 -top-1 -right-1 absolute text-white flex justify-center items-center text-xs">{`${counter}`}</div>
            </div>
        </HoverEffect>
    )
}