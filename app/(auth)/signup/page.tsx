import { Logo } from "@/components/atoms"
import { SignupForm } from "@/components/organism"

const SignupPage = () => {
    return(
        <div className="w-[20rem] rounded-xl">
            <h1 className="text-center font-bold text-xl">Buat Akun</h1>
            <Logo/>
            <SignupForm/>
        </div>
    )
 }

export default SignupPage