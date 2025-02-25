import { CustomButton } from "../atoms"
import { CustomInput } from "../molecules/custom-input"
import { IoMdMail } from "react-icons/io";

export const SigninForm = () => {
    return (
        <form className="flex flex-col gap-5">
            <CustomInput icon={<IoMdMail color="black" className="w-full h-full"/>} type="text" placeholder="Masukan Email"/>
            <CustomInput type="password" placeholder="Masukan Password"/>
            <CustomButton textColor="white" href="/home" title="Masuk" otherStyles="text-white"/>
        </form>
    )
}