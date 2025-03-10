import React, { Dispatch, SetStateAction } from "react"

export const HoverEffect = ({children, isHover, setHover} : { children : React.ReactNode, isHover? : boolean, setHover? : Dispatch<SetStateAction<boolean>> }) => {
    if (setHover) {
        return (
            <div onMouseEnter={()=>setHover(true)} onMouseLeave={()=>setHover(false)} className={`w-12 aspect-square p-2 rounded-full ${isHover?'bg-gray-200':'bg-transparent'}`}>
                {children}
            </div>
        )
    }
    return (
        <div className={`w-12 aspect-square p-2 rounded-full ${isHover?'bg-gray-200':'bg-transparent'}`}>
            {children}
        </div>
    )
}