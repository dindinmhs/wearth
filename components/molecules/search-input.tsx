import { IoIosSearch } from "react-icons/io"

export const SearchInput = () => {
    return (
        <div className="flex gap-2 items-center py-2 px-3 w-full bg-transparent border-black border-[1px] rounded-md h-full">
            <IoIosSearch color="black" size={25}/>
            <input placeholder="Cari artikel, produk ..." className="focus:outline-none bg-transparent w-full"/>
        </div>
    )
}