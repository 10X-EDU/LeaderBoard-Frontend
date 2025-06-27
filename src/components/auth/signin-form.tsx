'use client'
import { SignInSchema } from "@/schemas/schemas";
import { SigninType } from "@/types/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import InputField from "../input/input-field";
import ErrorMessage from "../input/error-message";
import Link from "next/link";
import SubmitButton from "../submit-button";
import { signInWithEmailAndPassword } from "@/lib/api";
import { setTokensToCookies } from "@/lib/actions";


const SignInForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    mode: "all",
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
        <ErrorMessage message={errors?.email?.message} />
      </InputField>
      <InputField
        {...register("password")}
        type="password"
        label="Password"
        placeholder="Enter your Password"
        componentClasses=""
      >
        <ErrorMessage message={errors?.password?.message} />
      </InputField>
      <Link href="/forgot-password/1" className="text-[#B5B5B5] text-sm self-end">
        Forgor Password?
      </Link>
      <SubmitButton isActive={isSubmitting}>Continue</SubmitButton>
    </form>
  );
};

export default SignInForm;
