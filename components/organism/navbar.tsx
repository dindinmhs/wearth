import { CustomButton, Logo, Notify, ProfileDropdown } from "../atoms"
import { SearchInput } from "../molecules"
import { IoBagHandle, IoBagHandleOutline, IoChatboxEllipses, IoChatboxEllipsesOutline, IoHome, IoHomeOutline } from "react-icons/io5"
import { AiOutlineSwap } from "react-icons/ai"
import { forestGreen } from "@/color"
import Link from "next/link"

export const Navbar = () => {
    return (
        <header className="absolute left-0 right-0 z-20 flex px-10 py-3 justify-between items-center">
            <Logo type="word"/>
            <div className="flex gap-2">
                <CustomButton variant="border" href="/signup" title="Daftar"/>
                <CustomButton href="/signin" title="Masuk"/>
            </div>
        </header>
    )
}

export const NavbarDashboard = () => {
    return (
        <header className="fixed left-0 right-0 z-20 flex px-10 py-2 justify-between h-16 items-center gap-6 bg-gray-50">
            <Link className="hidden sm:block" href={'/'}><Logo type="word"/></Link>
            <Link className="sm:hidden block" href={'/'}><Logo type="icon"/></Link>
            <SearchInput/>
            <div className="md:flex gap-2 w-fit h-full items-center hidden">
                <Notify icon={<IoBagHandleOutline className="w-full h-full"/>} activeIcon={<IoBagHandle color={forestGreen} className="w-full h-full"/>} counter={2}/>
                <Notify icon={<AiOutlineSwap className="w-full h-full"/>} activeIcon={<AiOutlineSwap color={forestGreen} className="w-full h-full"/>} counter={2}/>
                <Notify icon={<IoChatboxEllipsesOutline className="w-full h-full"/>} activeIcon={<IoChatboxEllipses color={forestGreen} className="w-full h-full"/>} counter={2}/>
                <ProfileDropdown/>
            </div>
        </header>
    )
}

export const NavbarMobile = () => {
    return (
        <div className="flex sm:hidden fixed bottom-0 left-0 right-0 justify-around bg-white z-10">
            <Notify icon={<IoHomeOutline className="w-full h-full"/>} activeIcon={<IoHome color={forestGreen} className="w-full h-full"/>} counter={2}/>
            <Notify icon={<IoBagHandleOutline className="w-full h-full"/>} activeIcon={<IoBagHandle color={forestGreen} className="w-full h-full"/>} counter={2}/>
                <Notify icon={<AiOutlineSwap className="w-full h-full"/>} activeIcon={<AiOutlineSwap color={forestGreen} className="w-full h-full"/>} counter={2}/>
                <Notify icon={<IoChatboxEllipsesOutline className="w-full h-full"/>} activeIcon={<IoChatboxEllipses color={forestGreen} className="w-full h-full"/>} counter={2}/>
                <ProfileDropdown/>
        </div>
    )
}

