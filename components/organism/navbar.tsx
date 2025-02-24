import { FaShoppingBag } from "react-icons/fa"
import { CustomButton, Logo, Notify, ProfileDropdown, ToggleDarkmode } from "../atoms"
import { SearchInput } from "../molecules"
import { IoMdNotifications } from "react-icons/io"

export const Navbar = () => {
    return (
        <header className="absolute left-0 right-0 z-20 flex px-10 py-3 justify-between items-center">
            <Logo type="word" color="white"/>
            <div className="flex gap-2">
                <CustomButton variant="border" href="/signup" title="Daftar"/>
                <CustomButton href="/signin" title="Masuk"/>
            </div>
        </header>
    )
}

export const NavbarDashboard = () => {
    return (
        <header className="absolute left-0 right-0 z-20 flex px-10 py-2 justify-between h-16 items-center">
            <Logo type="word" color="black"/>
            <SearchInput/>
            <div className="flex gap-2 w-fit h-full items-center">
                <Notify icon={<IoMdNotifications className="w-full h-full"/>} counter={2}/>
                <Notify icon={<FaShoppingBag className="w-full h-full"/>} counter={2}/>
                <ToggleDarkmode/>
                <ProfileDropdown/>
            </div>
        </header>
    )
}

