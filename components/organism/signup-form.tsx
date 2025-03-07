import { IoPersonSharp } from "react-icons/io5";
import { CustomButton } from "../atoms"
import { CustomInput } from "../molecules/custom-input"
import { IoMdMail } from "react-icons/io";
import { RiLockPasswordLine } from "react-icons/ri";
import { FcGoogle } from "react-icons/fc";
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
    
    const handleGoogleSignUp = () => {
        // Google sign up logic would go here
        login(true)
        setOpen(null)
    }
    
    return (
        <div className="relative overflow-hidden rounded-2xl">
            <div className="relative p-6 backdrop-blur-sm">
                <div className="mb-8">
                    <h2 className="text-3xl font-bold text-gray-800 mb-2 text-center">Create Account</h2>
                    <p className="text-gray-600 text-center">Join Sustyle and start your journey</p>
                </div>
                
                <form className="space-y-5">
                    <div className="space-y-1">
                        <label className="text-sm font-medium text-gray-700 ml-1">Full Name</label>
                        <div className="bg-gray-50 rounded-xl">
                            <CustomInput
                                type="text"
                                placeholder="Enter your name"
                                icon={<IoPersonSharp className="text-gray-400" />}
                                required
                            />
                        </div>
                    </div>
                    
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
                                placeholder="Create a password"
                                icon={<RiLockPasswordLine className="text-gray-400" />}
                                required
                            />
                        </div>
                    </div>
                    
                    <div className="flex items-center">
                        <input type="checkbox" id="terms" className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded" />
                        <label htmlFor="terms" className="ml-2 block text-sm text-gray-700">
                            I agree to the <a href="#" className="text-green-600 hover:text-green-500">Terms of Service</a> and <a href="#" className="text-green-600 hover:text-green-500">Privacy Policy</a>
                        </label>
                    </div>
                    
                    <CustomButton 
                        handleClick={handleClick}
                        title="Sign Up"
                        variant="primary"
                    />
                    
                    <div className="relative flex items-center my-6">
                        <div className="flex-grow h-px bg-gray-200"></div>
                        <span className="px-3 text-sm text-gray-500">or</span>
                        <div className="flex-grow h-px bg-gray-200"></div>
                    </div>
                    
                    <button
                        type="button"
                        onClick={handleGoogleSignUp}
                        className="w-full py-3 bg-white border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors shadow-sm hover:shadow-md flex items-center justify-center gap-2"
                    >
                        <FcGoogle className="text-xl" />
                        <span className="font-medium text-gray-700">Continue with Google</span>
                    </button>
                </form>
                
                <div className="mt-8 text-center">
                    <p className="text-sm text-gray-600">
                        Already have an account? <button type="button" onClick={() => setOpen(0)} className="font-medium text-green-600 hover:text-green-500">Sign in</button>
                    </p>
                </div>
            </div>
        </div>
    )
}