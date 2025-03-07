import { IoPersonSharp } from "react-icons/io5";
import { CustomButton } from "../atoms"
import { CustomInput } from "../molecules/custom-input"
import { IoMdMail } from "react-icons/io";
import { Dispatch, SetStateAction } from "react";
import { useAuthStore } from "@/store/useAuthStore";

export const SignupForm = ({
    setOpen
}:{
    setOpen : Dispatch<SetStateAction<number|null>>;
}) => {
    const {login} = useAuthStore()

    const handleClick = () => { 
        login(true)
        setOpen(null)
     }
    return (
        <form className="flex flex-col gap-5">
            <CustomInput required icon={<IoPersonSharp color="black" className="w-full h-full"/>} type="text" placeholder="Masukan Nama"/>
            <CustomInput required icon={<IoMdMail color="black" className="w-full h-full"/>} type="text" placeholder="Masukan Email"/>
            <CustomInput required type="password" placeholder="Masukan Password"/>
            <CustomButton handleClick={handleClick} textColor="white" title="Sign Up" otherStyles="text-white"/>
        </form>
    )
}