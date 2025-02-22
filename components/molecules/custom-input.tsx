"use client"

import { useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { MdOutlinePassword } from "react-icons/md";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
    type : React.HTMLInputTypeAttribute;
}

export const CustomInput = ({ type, ...otherProps }: Props) => {
    const [isHide, setHide] = useState(true)

    if (type === 'text') {
        return (
            <div className="flex gap-2 items-center border-b-4 rounded-md px-3 py-2 border-black">
                <IoMdMail color="black" size={25}/>
                <input 
                    type={type}
                    className="focus:outline-none text-lg"
                    {...otherProps}
                />
            </div>
        )
    }
    if (type === 'password') {
        return (
            <div className="flex gap-2 items-center border-b-4 rounded-md px-3 py-2 border-black">
                <MdOutlinePassword color="black" size={25}/>
                <input 
                    type={isHide?"password":"text"}
                    className="focus:outline-none text-lg flex-1"
                    {...otherProps}
                />
                <button type="button" onClick={()=>setHide(!isHide)}>
                    {isHide?<FaRegEyeSlash size={25}/>:<FaRegEye size={25}/>}
                </button>
            </div>
        )
    }
}