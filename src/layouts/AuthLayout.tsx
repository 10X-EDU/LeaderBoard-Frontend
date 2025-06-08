import { type ReactNode } from 'react'
import { NavLink } from 'react-router'
import authBackgroundImage from "../assets/auth-background-image.png"


const AuthLayout = ({ children, isSignin }: { children: ReactNode, isSignin: boolean }) => {
    return (
        < div className="relative min-w-screen h-full " >
            <img className="absolute top-0 left-140 aspect-video min-w-screen h-full -z-10" src={authBackgroundImage} alt="auth background image" />
            <div className="grid-lines flex flex-col w-full sm:w-1/2 md:w-[646px] h-full relative backdrop-blur-sm bg-[#0B0B0B] px-16 py-32 border-r-[#FFFFFFCC] border-r-1">

                <div className="w-[70%] self-end min-w-sm">
                    <div className="mb-6">
                        <h1 className="text-2xl mb-3">{isSignin ? "Login" : "SignUp"}</h1>
                        <span>{isSignin ? <>Create account <NavLink className="text-amber-300 underline underline-offset-1 hover:text-white transition " to={"/signup"}>Sign up</NavLink></> : <>Already have an account? <NavLink className="text-amber-300 underline underline-offset-1 hover:text-white transition " to={"/"}>Sign in</NavLink></>}</span>
                    </div>
                    {children}
                </div>
            </div>
        </div >
    )
}

export default AuthLayout