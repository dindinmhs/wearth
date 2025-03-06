import { motion } from "framer-motion";
import { Dispatch, SetStateAction } from "react";
import { IconType } from "react-icons";
 
 export const Chip = ({
    text,
    selected,
    setSelected,
    iconActive,
    iconDefault
  }: {
    text: string;
    selected: boolean;
    setSelected: Dispatch<SetStateAction<string>>;
    iconDefault : React.ReactElement<IconType>
    iconActive : React.ReactElement<IconType>
  }) => {
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
  };