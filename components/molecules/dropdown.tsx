'use client'
import React, { useEffect, useRef } from "react"

interface Props {
    trigger : React.ReactNode;
    children : React.ReactNode;
    otherStyles? : string;
    isOpen : boolean;
    setOpen : React.Dispatch<React.SetStateAction<boolean>>;

}

export const DropDown = ({ trigger, children, isOpen, setOpen, otherStyles='w-40 -translate-x-24' } : Props) => {
    const dropdownRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const handleClickOutside = (event:globalThis.MouseEvent) => {
          if (
            dropdownRef.current &&
            event.target instanceof Node && 
            !dropdownRef.current.contains(event.target)
          ) {
            setOpen(false);
          }
        };
    
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
          document.removeEventListener('mousedown', handleClickOutside);
        };
      }, [setOpen]);


    return (
        <div className="relative" ref={dropdownRef}>
            <button onClick={()=>setOpen(!isOpen)}>
                {trigger}
            </button>
            {isOpen && <div className={`absolute z-10 bg-white shadow-md w-4 rounded-md overflow-hidden ${otherStyles}`}>
                {children}
            </div>}
        </div>
    )
}