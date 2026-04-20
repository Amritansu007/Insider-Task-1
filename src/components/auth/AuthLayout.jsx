import { useState } from "react";
import InputField from "../common/InputField";
import Button from "../common/Button";
import { useNavigate } from "react-router-dom";
function AuthLayout() {
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();
    const [isLogin, setIsLogin] = useState(false);
    return (
        <div className="w-full max-w-6xl bg-zinc-900/70 backdrop-blur-xl rounded-2xl shadow-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-2">

            {/* LEFT PANEL */}
            <div className="relative hidden lg:flex flex-col justify-between p-8 overflow-hidden">

                {/* Background Image */}
                <img
                    src="/auth-bg.jpg"
                    alt="background"
                    className="absolute inset-0 w-full h-full object-cover"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/50"></div>

                {/* Content */}
                <div className="relative z-10 flex justify-between items-center">
                    <h1 className="text-white text-xl font-bold tracking-wide">AMU</h1>
                </div>

                <div className="relative z-10 text-white text-2xl font-semibold leading-relaxed max-w-xs">
                    Capture ideas. <br /> Build your future.
                </div>
            </div>

            {/* RIGHT PANEL */}
            <div className="p-6 sm:p-10 flex flex-col justify-center">
                <div className="max-w-md w-full mx-auto">

                    <h2 className="text-3xl font-semibold text-white mb-2">
                        {isLogin ? "Welcome back" : "Create an account"}
                    </h2>

                    <p className="text-zinc-400 mb-6">
                        {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
                        <span
                            onClick={() => setIsLogin(!isLogin)}
                            className="text-indigo-400 cursor-pointer hover:underline"
                        >
                            {isLogin ? "Sign up" : "Log in"}
                        </span>
                    </p>

                    {/* FORM */}
                    <div className="space-y-4">

                        {!isLogin && (
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <InputField placeholder="First name" />
                                <InputField placeholder="Last name" />
                            </div>
                        )}

                        <InputField type="email" placeholder="Email" />

                        <InputField
                            type={showPassword ? "text" : "password"}
                            placeholder="Password"
                            isPassword
                            showPassword={showPassword}
                            togglePassword={() => setShowPassword(!showPassword)}
                        />

                        {/* Checkbox */}
                        {!isLogin && (
                            <div className="flex items-center gap-2 text-sm text-zinc-400">
                                <input type="checkbox" className="accent-indigo-500 w-4 h-4" />
                                <span>
                                    I agree to{" "}
                                    <span className="text-indigo-400 hover:underline cursor-pointer">
                                        Terms & Conditions
                                    </span>
                                </span>
                            </div>
                        )}

                        <Button
                            text={isLogin ? "Log in" : "Create account"}
                            onClick={() => navigate("/dashboard")}
                        />

                        {/* Divider */}
                        <div className="flex items-center gap-4 my-6">
                            <div className="flex-1 h-px bg-zinc-700"></div>
                            <span className="text-zinc-500 text-sm">
                                or continue with
                            </span>
                            <div className="flex-1 h-px bg-zinc-700"></div>
                        </div>

                        {/* Social Buttons */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <button className="
                                flex items-center justify-center gap-2 
                                border border-zinc-700 rounded-lg py-2 text-zinc-300
                                
                                transition-all duration-300 ease-out
                                
                                hover:bg-zinc-800
                                hover:scale-[1.02]
                                hover:border-zinc-500
                                hover:shadow-md hover:shadow-zinc-700/40
                                active:scale-[0.97]
                                ">
                                Google
                            </button>
                            <button className="
                                flex items-center justify-center gap-2 
                                border border-zinc-700 rounded-lg py-2 text-zinc-300
                                
                                transition-all duration-300 ease-out
                                
                                hover:bg-zinc-800
                                hover:scale-[1.02]
                                hover:border-zinc-500
                                hover:shadow-md hover:shadow-zinc-700/40
                                active:scale-[0.97]
                                ">
                                Apple
                            </button>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    );
}

export default AuthLayout;