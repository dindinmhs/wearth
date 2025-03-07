"use client"

import React, { useState } from "react";
import { IconType } from "react-icons";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { MdOutlinePassword } from "react-icons/md";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
    type : React.HTMLInputTypeAttribute;
    icon? : React.ReactElement<IconType>;
}

export const CustomInput = ({ type, icon, ...otherProps }: Props) => {
    const [isHide, setHide] = useState(true)

    if (type === 'text' || type === 'email') {
        return (
            <div className="flex items-center bg-gray-50 border border-gray-200 rounded-xl overflow-hidden focus-within:ring-2 focus-within:ring-green-500 focus-within:border-transparent transition-all">
                {icon && (
                    <div className="pl-3 flex-shrink-0">
                        {icon}
                    </div>
                )}
                <input 
                    type={type}
                    className={`w-full py-3 ${icon ? 'pl-3' : 'pl-4'} pr-4 focus:outline-none bg-transparent`}
                    {...otherProps}
                />
            </div>
        )
    }
    if (type === 'password') {
        return (
            <div className="flex items-center bg-gray-50 border border-gray-200 rounded-xl overflow-hidden focus-within:ring-2 focus-within:ring-green-500 focus-within:border-transparent transition-all">
                <div className="pl-3 flex-shrink-0">
                    {icon || <MdOutlinePassword className="h-5 w-5 text-gray-400"/>}
                </div>
                <input 
                    type={isHide ? "password" : "text"}
                    className="w-full py-3 pl-3 pr-4 focus:outline-none bg-transparent"
                    {...otherProps}
                />
                <button 
                    className="pr-3 flex-shrink-0 text-gray-400 hover:text-gray-600 transition-colors" 
                    type="button" 
                    onClick={() => setHide(!isHide)}
                >
                    {isHide ? <FaRegEyeSlash size={20}/> : <FaRegEye size={20}/>}
                </button>
            </div>
        )
    }
}