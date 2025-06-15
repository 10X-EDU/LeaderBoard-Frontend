"use client";
import InputField from "@/components/InputField";
import SubmitButton from "@/components/SubmitButton";
import { RegistrationStepTwoSchema } from "@/schemas/schemas";
import useRegistrationStore from "@/store/RegistrationStore";
import { useUserStore } from "@/store/UserStore";
import type { RegistrationSecondStepDataType } from "@/types/types";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

const BASE_URL = process.env.BASE_URL || "http://10.239.24.216:3000";

const Page = () => {
  const firstName = useRegistrationStore((state) => state.firstName);
  const lastName = useRegistrationStore((state) => state.lastName);
  const email = useRegistrationStore((state) => state.email);
  const setRegistrationData = useRegistrationStore(
    (state) => state.setRegistrationData,
  );
  const setToken = useUserStore((state) => state.setToken);
  const token = useUserStore((state) => state.token);
  const [isPending, setIsPending] = useState(false);

  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<RegistrationSecondStepDataType>({
    resolver: zodResolver(RegistrationStepTwoSchema),
  });
  const handleRegistrationSecondStep = async (
    data: RegistrationSecondStepDataType,
  ) => {
    try {
      console.log(firstName, lastName, email, data);
      setIsPending(true);
      const resp = await axios.post(`${BASE_URL}/api/v1/auth/sign-up`, {
        firstName,
        lastName,
        email,
        specialization: "DEVELOPMENT",
        ...data,
      });
      console.log(resp.status);
      if (resp?.status === 201) {
        setRegistrationData({
          email: "",
          firstName: "",
          lastName: "",
          password: "",
          identificator: 0,
        });
        console.log(resp);
        setToken(resp.data.token);
        router.push("/user/profile");
      }
    } catch (error) {
      console.error(error);
      setError("root", { message: "something went wrong" });
    } finally {
      setIsPending(false);
    }
  };

  useEffect(() => {
    if (token) return;
    if (!firstName || !lastName || !email) {
      router.push("/signup/1");
    }
  }, [firstName, lastName, email, router, token]);

  return (
    <>
      <div className="w-[70%] self-end min-w-sm">
        <form
          onSubmit={handleSubmit(handleRegistrationSecondStep)}
          className="flex flex-col gap-6"
        >
          <InputField
            {...register("password")}
            type="password"
            label="Password"
            placeholder="Enter your password"
            componentClasses=""
          >
            {errors.password && (
              <p className="text-red-500 text-sm">{errors.password.message}</p>
            )}
          </InputField>
          <InputField
            {...register("passwordConfirm")}
            type="password"
            label="Confirm Password"
            placeholder="Confirm your password"
            componentClasses=""
          >
            {errors.passwordConfirm && (
              <p className="text-red-500 text-sm">
                {errors.passwordConfirm.message}
              </p>
            )}
          </InputField>
          <SubmitButton isActive={isPending}>Continue</SubmitButton>
          {errors.root && (
            <p className="text-red-500 text-sm">{errors.root?.message}</p>
          )}
        </form>
      </div>
    </>
  );
};

export default Page;
