import React from "react"

const AuthLayout = ({ children } : { children : React.ReactNode }) => { 
    return (
        <div className="grid grid-cols-2 h-screen justify-items-center items-center">
            <div>
                {children}
            </div>
            <div className="w-full h-full justify-center items-center flex p-3">
                <div className="h-full w-full bg-gradient-to-tl from-pink-200 via-blue-100 to-purple-200 rounded-md">
                    tes
                </div>
            </div>
        </div>
    )
 }

export default AuthLayout