import { Logo } from "@/components/atoms"
import { SigninForm } from "@/components/organism"
import Link from "next/link"
import { FaGoogle } from "react-icons/fa6"

const SignupPage = () => {
    return(
        <div className="w-[20rem] rounded-xl flex flex-col gap-3">
            <Logo otherStyles="mx-auto" type="word" color="black"/>
            <h1 className="text-center font-bold text-xl">Masuk</h1>
            <Link href={`home`} className="border-2 border-black rounded-full">
                <div className="flex items-center gap-2 justify-center py-2">
                    <FaGoogle color="black" size={25}/>
                    <span className="font-bold">Masuk dengan Google</span>
                </div>
            </Link>
            <div className="flex items-center gap-2">
                <div className="flex-grow h-1 bg-black"/>
                    <span className="text-black">Atau</span>
                <div className="flex-grow h-1 bg-black"/>
            </div>
            <SigninForm/>
            <p className="text-center">Sudah punya akun? <Link className="text-blue-500 font-semibold" href={`signup`}>Daftar</Link></p>
        </div>
    )
 }

export default SignupPage