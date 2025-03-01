import { CustomButton, Logo, Notify, ProfileDropdown } from "../atoms"
import { SearchInput } from "../molecules"
import { IoBagHandleOutline, IoChatboxEllipsesOutline } from "react-icons/io5"
import { AiOutlineSwap } from "react-icons/ai"

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
        <header className="absolute left-0 right-0 z-20 flex px-10 py-2 justify-between h-16 items-center gap-6">
            <Logo type="word"/>
            <SearchInput/>
            <div className="md:flex gap-2 w-fit h-full items-center hidden">
                <Notify icon={<IoBagHandleOutline className="w-full h-full"/>} counter={2}/>
                <Notify icon={<AiOutlineSwap className="w-full h-full"/>} counter={2}/>
                <Notify icon={<IoChatboxEllipsesOutline className="w-full h-full"/>} counter={2}/>
                <ProfileDropdown/>
            </div>
        </header>
    )
}

