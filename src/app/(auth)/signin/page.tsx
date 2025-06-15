"use client";
import React, { useEffect, useState } from "react";
import InputField from "../../../components/InputField";
import Link from "next/link";
import SubmitButton from "../../../components/SubmitButton";
import { zodResolver } from "@hookform/resolvers/zod";
import { SignInSchema } from "../../../schemas/schemas";
import { useForm } from "react-hook-form";
import axios from "axios";
import type { SigninType } from "@/types/types";
import { useUserStore } from "@/store/UserStore";
import { useRouter } from "next/navigation";

const BASE_URL = process.env.BASE_URL || "http://10.239.24.216:3000";

function Page() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onTouched",
    resolver: zodResolver(SignInSchema),
  });

  // const setToken = useUserStore((state) => state.setToken);
  const router = useRouter();
  const token = useUserStore((state) => state.token);
  const [isPending, setIsPending] = useState<boolean>();

  const handleSignIn = async (data: SigninType) => {
    console.log("handled");
    setIsPending(true);
    try {
      const resp = await axios.post(`${BASE_URL}/api/v1/auth/sign-in`, {
        email: data.email,
        password: data.password,
      });

      console.log(resp.data);
      // router.push("/user/profile");
    } catch (error) {
      console.error(error);
    } finally {
      setIsPending(false);
    }
  };

  useEffect(() => {
    if (token) {
      router.push("/user/profile");
    }
  }, [token, router]);

  return (
    <>
      <div className="w-[70%] self-end min-w-sm">
        <div className="mb-6">
          <h1 className="text-2xl text-white mb-3">Login</h1>
          <span className="text-white">
            <span>
              Create account{" "}
              <Link
                className="text-amber-300 underline underline-offset-1 hover:text-white transition "
                href={"/signup/1"}
              >
                Sign up
              </Link>
            </span>
          </span>
        </div>
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
          <Link
            href="/reset-password"
            className="text-[#B5B5B5] text-sm self-end"
          >
            Forgor Password?
          </Link>
          <SubmitButton isActive={isPending}>Continue</SubmitButton>
        </form>
        <div className="flex items-center gap-2.5 mb-10">
          <span className="w-full h-[1px] bg-[#4D4D4D]" />
          <span className="text-white">OR</span>
          <span className="w-full h-[1px] bg-[#4D4D4D]" />
        </div>
      </div>
    </>
  );
}

export default Page;
