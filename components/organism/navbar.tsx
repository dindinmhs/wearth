import { CustomButton, Logo, ProfileDropdown } from "../atoms"
import { SearchInput } from "../molecules"

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
        <header className="absolute left-0 right-0 z-20 flex px-10 py-3 justify-between items-center">
            <Logo type="word" color="black"/>
            <SearchInput/>
            <div className="flex gap-2">
                <ProfileDropdown/>
            </div>
        </header>
    )
}

