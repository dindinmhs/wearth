'use client'
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { Dispatch, SetStateAction } from "react";
import { IconType } from "react-icons";
 
 export const Chip = ({
    text,
    selected,
    setSelected,
    iconActive,
    iconDefault,
    type,
    counter,
    isLink
  }: {
    text: string;
    selected: boolean;
    setSelected: Dispatch<SetStateAction<string>>;
    iconDefault : React.ReactElement<IconType>;
    iconActive : React.ReactElement<IconType>;
    type : 'bar' | 'circle';
    counter? : number
    isLink? : boolean
  }) => {
    const router = useRouter()
    const handleClick = () => { 
      if (isLink) {
        setSelected(text.toLocaleLowerCase())
        console.log(text.toLocaleLowerCase())
        router.push(text.toLocaleLowerCase())
      }
     }


    if(type==='bar') {
      return (
        <button
          onClick={() => setSelected(text)}
          className={`${
            selected
              ? "text-forest"
              : "text-black hover:bg-gray-200"
          } text-lg transition-colors px-2.5 py-3 rounded-md relative flex gap-2 items-center`}
        >
          {selected?iconActive:iconDefault}
          <span className="relative z-10">{text}</span>
          {selected && (
            <motion.span
              layoutId="pill-tab"
              transition={{ type: "spring", duration: 0.5 }}
              className="absolute left-0 right-0 h-1 bottom-0 z-0 bg-forest rounded-md"
            ></motion.span>
          )}
        </button>
      );
    }
    if(type==='circle') {
      return (
        <button
          onClick={handleClick}
          className={`${
            selected
              ? "text-forest"
              : "text-black hover:bg-gray-200"
          } text-lg transition-colors px-4 h-fit py-1 rounded-full relative flex flex-col gap-[1px] items-center`}
        >
          <div className="relative z-10">
              {selected?iconActive:iconDefault}
              {counter&&<div className="w-5 aspect-square rounded-full bg-red-500 -top-1 -right-1 absolute text-white flex justify-center items-center text-xs">{`${counter}`}</div>}
          </div>
          <span className="relative z-10 text-xs font-bold">{text}</span>
          {selected && (
            <motion.span
              layoutId="pill-tab"
              transition={{ type: "spring", duration: 0.5 }}
              className="absolute inset-0 rounded-full z-0 bg-green-100"
            ></motion.span>
          )}
        </button>
      );
    }
    
    
  };