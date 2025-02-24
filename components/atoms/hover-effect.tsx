import React from "react"

export const HoverEffect = ({children} : { children : React.ReactNode }) => {
    return (
        <div className="w-12 aspect-square p-2 hover:bg-gray-300 dark:hover:bg-gray-700 rounded-full">
            {children}
        </div>
    )
}