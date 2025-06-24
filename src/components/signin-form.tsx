'use client'
import { SignInSchema } from "@/schemas/schemas";
import { SigninType } from "@/types/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import InputField from "./input-field";
import Link from "next/link";
import SubmitButton from "./submit-button";
import { signInWithEmailAndPassword } from "@/lib/api";
import { setTokensToCookies } from "@/lib/actions";


const SignInForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    mode: "onTouched",
    resolver: zodResolver(SignInSchema),
  });

  const router = useRouter();

  const handleSignIn = async (data: SigninType) => {
    try {
      const { email, password } = data;

      const resp = await signInWithEmailAndPassword({ email, password });
      const responseData = resp.data.data;
      setTokensToCookies({
        accessToken: responseData.tokens.accessToken,
        refreshToken: responseData.tokens.refreshToken,
      });
      router.push("/user/profile");
    } catch (error) {
      console.error(error);
    } 
  };

  return (
    <form
      onSubmit={handleSubmit(handleSignIn)}
      className="flex flex-col gap-6 mb-10"
    >
      <InputField
        {...register("email")}
        label="Email"
        placeholder="Enter your Email"
        componentClasses=""
      >
        {errors?.email && (
          <span className="text-red-800">{errors?.email.message}</span>
        )}
      </InputField>
      <InputField
        {...register("password")}
        type="password"
        label="Password"
        placeholder="Enter your Password"
        componentClasses=""
      >
        {errors?.password && (
          <span className="text-red-800">{errors?.password.message}</span>
        )}
      </InputField>
      <Link href="/forgot-password/1" className="text-[#B5B5B5] text-sm self-end">
        Forgor Password?
      </Link>
      <SubmitButton isActive={isSubmitting}>Continue</SubmitButton>
    </form>
  );
};

export default SignInForm;
