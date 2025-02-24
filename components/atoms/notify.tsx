import React from "react"
import { IconType } from "react-icons"
import { HoverEffect } from "./hover-effect"

interface Props {
    icon : React.ReactElement<IconType>
    counter : number
}

export const Notify = ({ icon, counter } : Props) => {
    return (
        <HoverEffect>
            <div className="relative">
                {icon}
                <div className="w-5 aspect-square rounded-full bg-red-500 -top-1 -right-1 absolute text-white flex justify-center items-center text-xs">{`${counter}`}</div>
            </div>
        </HoverEffect>
    )
}