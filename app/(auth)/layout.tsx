import React from "react"

const AuthLayout = ({ children } : { children : React.ReactNode }) => { 
    return (
        <div className="grid grid-cols-2 h-screen justify-items-center items-center">
            <div>
                {children}
            </div>
            <div className="bg-red-200 w-full h-full justify-center items-center flex">
                <p>ini hero</p>
            </div>
        </div>
    )
 }

export default AuthLayout