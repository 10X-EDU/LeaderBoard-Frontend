import { NavLink } from "react-router"
import authBackgroundImage from "../../../assets/auth-background-image.png"
import InputField from "../../../components/InputField"

const SignIn = () => {
  return (
    <div className="relative min-w-screen h-full ">
      <img className="absolute top-0 left-140 aspect-video min-w-screen h-full -z-10" src={authBackgroundImage} alt="auth background image" />
      <div className="grid-lines flex flex-col w-full sm:w-1/2 md:w-[646px] h-full relative backdrop-blur-sm bg-[#0B0B0B] px-16 py-32 border-r-[#FFFFFFCC] border-r-1">

        <div className="w-[70%] self-end min-w-sm">
          <div className="mb-6">
            <h1 className="text-2xl mb-3">Log In</h1>
            <span>Already have an account? <NavLink className="text-amber-300 underline underline-offset-1 hover:text-white transition " to={"/signup"}>Sign up</NavLink></span>
          </div>
          <form className="flex flex-col gap-6">
            <InputField label="Email" placeholder="Enter your Email" componentClasses="" />
            <InputField label="Password" placeholder="Enter your Password" componentClasses="" />
            <NavLink to="/reset-password" className="text-[#B5B5B5] text-sm self-end">Forgor Password?</NavLink>
          </form>
        </div>
      </div>
    </div>
  )
}

export default SignIn