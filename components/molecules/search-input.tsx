import { FaSearch } from "react-icons/fa"

export const SearchInput = () => {
    return (
        <div className="flex gap-2 items-center py-2 px-3 rounded-full bg-gray-300">
            <FaSearch color="gray" size={25}/>
            <input placeholder="Cari artikel, produk ..." className="focus:outline-none bg-transparent"/>
        </div>
    )
}