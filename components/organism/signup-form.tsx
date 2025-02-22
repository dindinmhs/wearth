import { CustomButton } from "../atoms"
import { CustomInput } from "../molecules/custom-input"

export const SignupForm = () => {
    return (
        <form className="flex flex-col gap-5">
            <CustomInput type="text" placeholder="Masukan Email"/>
            <CustomInput type="password" placeholder="Masukan Password"/>
            <CustomButton href="/signin" title="Daftar" otherStyles="text-white"/>
        </form>
    )
}