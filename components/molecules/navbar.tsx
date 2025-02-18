import { Logo } from "../atoms"
import { CustomButton } from "./custom-button"

export const Navbar = () => {
    return (
        <header className="absolute left-0 right-0 z-20 flex px-10 py-3 justify-between items-center">
            <Logo/>
            <div className="flex gap-2">
                <CustomButton variant="border" href="/daftar" title="Daftar"/>
                <CustomButton href="/masuk" title="Masuk"/>
            </div>
        </header>
    )
}