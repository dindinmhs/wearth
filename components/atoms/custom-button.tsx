'use client'

import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { DropDown } from "../molecules";
import { IconType } from "react-icons";

interface Props {
    title : string;
    variant? : 'default' | 'border' | 'primary';
    otherStyles? : string;
    textColor? : string;
    handleClick : ()=>void;
}

export const CustomButton = ({ title, otherStyles, variant='default', textColor, handleClick } : Props) => {
    if (variant === 'primary') {
        return (
            <button
                type="button"
                onClick={handleClick}
                className={`w-full py-3.5 bg-green-600 text-white font-medium rounded-xl hover:bg-green-700 transition-colors shadow-sm hover:shadow-md flex items-center justify-center ${otherStyles}`}
            >
                {title}
            </button>
        )
    }
    
    if (variant === 'default') {
        return (
            <button
            onClick={handleClick} 
            className={`bg-gradient rounded-full font-bold px-4 py-2 text-xl h-fit text-gray-950 ${otherStyles}`}>
                <div style={{ color : textColor }} className="text-center mx-auto">
                    {title}
                </div>
            </button>
        )
    }
    if (variant === 'border') {
        return (
            <button 
            className={`rounded-full font-bold p-1 bg-gradient text-xl h-fit ${otherStyles}`}>
                <div className="bg-gray-950 px-4 py-2 rounded-full">
                    <div className="text-center text-gradient w-full">
                    {title}
                    </div>
                </div>
            </button>
        )
    }
}

interface BtnDropdown {
    title : string;
    isOpen : boolean;
}

const ButtonDropdown = ({ title, isOpen } : BtnDropdown) => {
    return (
        <div className={`flex gap-3 px-4 py-2 border-2 border-black rounded-md items-center`}>
            <span>{title}</span>
            <IoIosArrowDown className={`${isOpen?'-rotate-180':'rotate-0'} duration-200`} size={20} color="black"/>
        </div>
    )
}

interface SelectItemProps {
    items : string[];
    title? : string;
    labelPlace : 'top'|'left';
}

export const SelectDropdown = ({ items, title, labelPlace } : SelectItemProps) => {
    const [isOpen, setOpen] = useState(false);
    const [isSelect, setSelect] = useState(0);

    const handleClick = (idx:number) => { 
        setSelect(idx);
        setOpen(false);
    }

    return (
        <div className={`${labelPlace === 'left' ? 'inline-flex items-center gap-2 min-w-max' : 'block min-w-max'}`}>
            <h4>{title}</h4>
            <DropDown 
                otherStyles="translate-x-0 w-full" 
                isOpen={isOpen} 
                setOpen={setOpen} 
                trigger={<ButtonDropdown isOpen={isOpen} title={items[isSelect]}/>}>
                
                {items.map((item, idx) => (
                    <button 
                        key={idx} 
                        onClick={() => handleClick(idx)} 
                        className={`flex gap-2 px-3 py-2 items-center w-full font-medium ${isSelect==idx?'text-forest bg-green-100':'hover:bg-gray-200'}`}>
                        <p>{item}</p>
                    </button>
                ))}
            </DropDown>
        </div>
    );
};


interface SectionProps {
    title : string;
    icon : React.ReactElement<IconType>;
    handleClick : ()=>void;
    isActive : boolean;
}

export const ButtonSection = ({icon, title, isActive, handleClick}:SectionProps) => {
    return (
        <button onClick={handleClick} className={`px-4 py-1 flex gap-2 items-center after:block after:absolute relative after:left-0 after:right-0 h-1 ${isActive?'after:bg-forest':'after:bg-transparent'}`}>
            {icon}
            <h4 className={`text-lg font-medium ${isActive?'text-forest':'text-black'}`}>{title}</h4>
        </button>
    )
}