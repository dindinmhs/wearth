import { useRouter } from "next/navigation"
import { IoIosSearch } from "react-icons/io"

export const SearchInput = () => {
    const router = useRouter()
    return (
        <div className="flex gap-2 items-center py-2 px-3 w-full bg-transparent border-black border-[1px] rounded-full h-full">
            <IoIosSearch color="black" size={25}/>
            <input onSubmit={()=>router.push('/explore')} placeholder="Search articles & products..." className="focus:outline-none bg-transparent w-full"/>
        </div>
    )
}