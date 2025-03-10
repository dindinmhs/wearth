'use client'
import { useAuthStore } from "@/store/useAuthStore";
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
  isLink,
  className,
  src,
  setOpen
}: {
  text: string;
  selected: boolean;
  setSelected: Dispatch<SetStateAction<string>>;
  iconDefault: React.ReactElement<IconType>;
  iconActive: React.ReactElement<IconType>;
  type: 'bar' | 'circle';
  counter?: number;
  isLink?: boolean;
  className?: string;
  src? : string;
  setOpen? : Dispatch<SetStateAction<number|null>>
  onClick?: () => void;
}) => {
  const { isAuthenticated } = useAuthStore();
  const router = useRouter()
  const handleClick = () => { 
    if (isLink) {
      if(src) {
        if (setOpen && !isAuthenticated && src != 'explore') {
          setOpen(0)
        } else {
          setSelected(src)
          router.push(src)
        }
      }
    } else {
      setSelected(text)
    }
  }

  if(type === 'bar') {
    return (
      <button
        onClick={handleClick}
        className={`inline-flex items-center justify-center gap-2 px-5 py-3 transition-all relative ${
          selected 
            ? "text-forest font-medium" 
            : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
        } ${className || ''}`}
      >
        <div className="relative z-10">
          {selected ? iconActive : iconDefault}
        </div>
        <span className="relative z-10">{text}</span>
        {selected && (
          <motion.span
            layoutId="pill-tab"
            transition={{ type: "spring", duration: 0.4 }}
            className="absolute inset-x-0 bottom-0 h-1 bg-forest rounded-t-md"
          />
        )}
      </button>
    );
  }
  
  if(type === 'circle') {
    return (
      <button
        onClick={handleClick}
        className={`inline-flex flex-col items-center justify-center gap-1 py-2 px-4 transition-all relative ${
          selected 
            ? "text-forest font-medium" 
            : "text-gray-600 hover:text-gray-900"
        } ${className || ''}`}
      >
        <div className="relative z-10">
          {selected ? iconActive : iconDefault}
          {counter && counter > 0 && isAuthenticated && (
            <div className="absolute -top-3 -right-3 min-w-4 h-4 px-1 flex items-center justify-center bg-red-500 text-white text-xs font-bold rounded-full">
              {counter > 9 ? '9+' : counter}
            </div>
          )}
        </div>
        <span className="relative z-10 text-xs font-medium">{text}</span>
        {selected && (
          <motion.span
            layoutId="pill-circle"
            transition={{ type: "spring", duration: 0.4 }}
            className="absolute inset-0 bg-green-50 rounded-full"
          />
        )}
      </button>
    );
  }
};