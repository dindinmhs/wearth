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

    if (type === 'text') {
        return (
            <div className="flex gap-2 items-center border-b-4 rounded-md px-3 py-2 border-black">
                <div className="w-6">
                    {icon}
                </div>
                <input 
                    type={type}
                    className="focus:outline-none text-lg bg-transparent"
                    {...otherProps}
                />
            </div>
        )
    }
    if (type === 'password') {
        return (
            <div className="flex gap-2 items-center border-b-4 rounded-md px-3 py-2 border-black">
                <div className="w-6 flex-shrink-0">
                    <MdOutlinePassword color="black" className="w-full h-full"/>
                </div>
                <input 
                    type={isHide?"password":"text"}
                    className="focus:outline-none text-lg flex-grow bg-transparent"
                    {...otherProps}
                />
                <button className="flex-shrink-0" type="button" onClick={()=>setHide(!isHide)}>
                    {isHide?<FaRegEyeSlash size={25}/>:<FaRegEye size={25}/>}
                </button>
            </div>
        )
    }
}