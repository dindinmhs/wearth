import { IoIosArrowRoundForward } from "react-icons/io";

interface Props {
    title : string;
    type : "dark" | "light";
    icon : boolean;
    otherStyle? : string;
}

export const SquareButton = ({ title, type, icon, otherStyle } : Props) => {
    return (
        <div className={`relative w-fit ${otherStyle}`}>
            <button className={`hover:bg-forest group duration-150 py-3 px-6 relative flex gap-2 items-center ${type == 'dark' ? 'bg-black text-white' : 'bg-gray-50 text-black'}`}>
                <div><h4>{title}</h4></div>
                {icon && <IoIosArrowRoundForward className="group-hover:-rotate-45 duration-150 origin-center" size={30} color={type=='dark'?'white':'black'}/>}
            </button>
            <div className={`absolute -z-10 inset-0 border-[1px] translate-x-[3px] translate-y-[3px] ${type == 'dark'?'border-black':'border-white'}`}/>
        </div>
    )
}