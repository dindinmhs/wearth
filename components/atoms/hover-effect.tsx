import React from "react"

export const HoverEffect = ({children} : { children : React.ReactNode }) => {
    return (
        <div className="w-12 aspect-square p-2 rounded-full">
            {children}
        </div>
    )
}