import { Dispatch, SetStateAction } from "react";
import { CustomButton } from "../atoms"
import { CustomInput } from "../molecules/custom-input"
import { IoMdMail } from "react-icons/io";
import { RiLockPasswordLine } from "react-icons/ri";
import { FcGoogle } from "react-icons/fc";
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
    
    const handleGoogleSignIn = () => {
        // Google sign in logic would go here
        login(true)
        setOpen(null)
    }
    
    return (
        <div className="relative overflow-hidden rounded-2xl">
            <div className="relative p-6 backdrop-blur-sm">
                <div className="mb-8">
                    <h2 className="text-3xl font-bold text-gray-800 mb-2 text-center">Welcome Back</h2>
                    <p className="text-gray-600 text-center">We're so excited to see you again!</p>
                </div>
                
                <form className="space-y-5">
                    <div className="space-y-1">
                        <label className="text-sm font-medium text-gray-700 ml-1">Email</label>
                        <div className="bg-gray-50 rounded-xl">
                            <CustomInput
                                type="email"
                                placeholder="Enter your email"
                                icon={<IoMdMail className="text-gray-400" />}
                                required
                            />
                        </div>
                    </div>
                    
                    <div className="space-y-1">
                        <label className="text-sm font-medium text-gray-700 ml-1">Password</label>
                        <div className="bg-gray-50 rounded-xl">
                            <CustomInput
                                type="password"
                                placeholder="Enter your password"
                                icon={<RiLockPasswordLine className="text-gray-400" />}
                                required
                            />
                        </div>
                    </div>
                    
                    <div className="flex justify-between items-center">
                        <div className="flex items-center">
                            <input type="checkbox" id="remember" className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded" />
                            <label htmlFor="remember" className="ml-2 block text-sm text-gray-700">Remember me</label>
                        </div>
                        <a href="#" className="text-sm font-medium text-green-600 hover:text-green-500">Forgot password?</a>
                    </div>
                    
                    <CustomButton 
                        handleClick={handleClick}
                        title="Sign In"
                        variant="primary"
                    />
                    
                    <div className="relative flex items-center my-6">
                        <div className="flex-grow h-px bg-gray-200"></div>
                        <span className="px-3 text-sm text-gray-500">or</span>
                        <div className="flex-grow h-px bg-gray-200"></div>
                    </div>
                    
                    <button
                        type="button"
                        onClick={handleGoogleSignIn}
                        className="w-full py-3 bg-white border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors shadow-sm hover:shadow-md flex items-center justify-center gap-2"
                    >
                        <FcGoogle className="text-xl" />
                        <span className="font-medium text-gray-700">Continue with Google</span>
                    </button>
                </form>
                
                <div className="mt-8 text-center">
                    <p className="text-sm text-gray-600">
                        New to Wearth? <button type="button" onClick={() => setOpen(1)} className="font-medium text-green-600 hover:text-green-500">Create an account</button>
                    </p>
                </div>
            </div>
        </div>
    )
}