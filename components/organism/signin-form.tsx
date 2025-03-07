import { Dispatch, SetStateAction } from "react";
import { CustomButton } from "../atoms"
import { CustomInput } from "../molecules/custom-input"
import { IoMdMail } from "react-icons/io";
import { useAuthStore } from "@/store/useAuthStore";

export const SigninForm = ({
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
            <CustomInput icon={<IoMdMail color="black" className="w-full h-full"/>} type="text" placeholder="Masukan Email"/>
            <CustomInput type="password" placeholder="Masukan Password"/>
            <CustomButton handleClick={handleClick} textColor="white" title="Sign In" otherStyles="text-white"/>
        </form>
    )
}