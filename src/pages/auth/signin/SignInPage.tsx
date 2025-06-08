import { NavLink } from "react-router"
import InputField from "../../../components/InputField"
import AuthLayout from "../../../layouts/AuthLayout"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import SignInSchema from "../../../schemas/schemas"
import SubmitButton from "../../../components/SubmitButton"

const SignIn = () => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    mode: "onTouched",
    resolver: zodResolver(SignInSchema)
  })

  const handleSignIn = () => {
    console.log("handled sign in");
  }
  return (
    <AuthLayout isSignin={true}>
      <form onSubmit={handleSubmit(handleSignIn)} className="flex flex-col gap-6">
        <InputField {...register("email")} label="Email" placeholder="Enter your Email" componentClasses="" >
          {errors?.email && <span className="text-red-800">{errors?.email.message}</span>}
        </InputField>
        <InputField {...register("password")} label="Password" placeholder="Enter your Password" componentClasses="" >
          {errors?.password && <span className="text-red-800">{errors?.password.message}</span>}
        </InputField>
        <NavLink to="/reset-password" className="text-[#B5B5B5] text-sm self-end">Forgor Password?</NavLink>
        <SubmitButton >
          Continue
        </SubmitButton>
      </form>
    </AuthLayout>
  )
}

export default SignIn