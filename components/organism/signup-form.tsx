import { IoPersonSharp } from "react-icons/io5";
import { CustomButton } from "../atoms"
import { CustomInput } from "../molecules/custom-input"
import { IoMdMail } from "react-icons/io";

export const SignupForm = () => {
    return (
        <form className="flex flex-col gap-5">
            <CustomInput icon={<IoPersonSharp color="black" className="w-full h-full"/>} type="text" placeholder="Masukan Nama"/>
            <CustomInput icon={<IoMdMail color="black" className="w-full h-full"/>} type="text" placeholder="Masukan Email"/>
            <CustomInput type="password" placeholder="Masukan Password"/>
            <CustomButton textColor="white" href="/home" title="Daftar" otherStyles="text-white"/>
        </form>
    )
}