'use client'

import Image from "next/image"
import Link from "next/link";
import { IoMdPerson } from "react-icons/io";
import { MdLogout } from "react-icons/md";
// import useAuthStore from "@/hooks/authStore";
import { useRouter } from "next/navigation";
import { DropDown } from "../molecules";

interface Props {
    otherStyles? : string;
    type : 'border' | 'default';
    src? : string;
}

export const ProfileIcon = ({ otherStyles='w-12', type, src='https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?q=80&w=1476&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D.jpg' } : Props) => {
    if (type === 'border') {
        return (
            <Image
                src={src}
                className={`${otherStyles} aspect-square rounded-full border-4 border-black`}
                width={200}
                height={200}
                alt="profile"
            />
        )
    }
    return (
        <div className="p-1 rounded-full hover:bg-gray-300 bg-transparent">
            <Image
                src={src}
                className={`${otherStyles} aspect-square rounded-full`}
                width={200}
                height={200}
                alt="profile"
            />
        </div>
    )
}

export const ProfileDropdown = () => {
    const router = useRouter()
    // const {clearUser} = useAuthStore()

    const logout = () => { 
        // clearUser()
        router.replace('/signin')
     }

    return (
        <DropDown trigger={<ProfileIcon type="default"/>}>
            <Link href={'/profile'} className="flex gap-2 hover:bg-gray-200 px-3 py-2 items-center">
                <IoMdPerson size={25}/>
                <p>Profile</p>
            </Link>
            <button onClick={logout} className="flex w-full gap-2 hover:bg-gray-200 px-3 py-2 items-center">
                <MdLogout color="red" size={25}/>
                <p className="text-red-500">Keluar</p>
            </button>
        </DropDown>
    )
}