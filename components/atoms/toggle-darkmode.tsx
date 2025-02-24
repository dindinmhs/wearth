"use client"

import { IoIosMoon, IoIosSunny } from "react-icons/io"
import { HoverEffect } from "./hover-effect"
import { useEffect, useState } from "react"

export const ToggleDarkmode = () => {
    const [isDarkmode, setDarkmode] = useState(false)

    useEffect(()=>{
        if (isDarkmode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [isDarkmode])

    return (
        <button onClick={()=>setDarkmode(!isDarkmode)}>
            <HoverEffect>
                {isDarkmode?<IoIosMoon className="w-full h-full"/>:<IoIosSunny className="w-full h-full"/>}
            </HoverEffect>
        </button>
    )
}