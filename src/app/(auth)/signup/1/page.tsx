"use client";
import InputField from "@/components/InputField";
import SubmitButton from "@/components/SubmitButton";
import { RegistrationStepOneSchema } from "@/schemas/schemas";
import useRegistrationStore from "@/store/RegistrationStore";
import type { RegistrationFirstStepDataType } from "@/types/types";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

const Page = () => {
  const setRegistrationData = useRegistrationStore(
    (state) => state.setRegistrationData,
  );
  const firstName = useRegistrationStore((state) => state.firstName);
  const lastName = useRegistrationStore((state) => state.lastName);
  const email = useRegistrationStore((state) => state.email);

  const router = useRouter();
  const [isPending, setIsPending] = useState<boolean>();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegistrationFirstStepDataType>({
    mode: "all",
    resolver: zodResolver(RegistrationStepOneSchema),
  });
  const handleRegistrationFirstStep = (data: RegistrationFirstStepDataType) => {
    console.log(data);
    setIsPending(true);
    setRegistrationData(data);
    router.push("/signup/2");
  };

  useEffect(() => {
    if (!firstName || !lastName || !email) return;
    router.push("/signup/2");
  }, [firstName, lastName, email, router]);

  return (
    <>
      <div className="w-[70%] self-end min-w-sm">
        <div className="mb-6">
          <h1 className="text-2xl text-white mb-3">Login</h1>
          <span className="text-white">
            <span>
              Login to Account{" "}
              <Link
                className="text-amber-300 underline underline-offset-1 hover:text-white transition "
                href={"/signin"}
              >
                Sign in
              </Link>
            </span>
          </span>
        </div>
        <form
          onSubmit={handleSubmit(handleRegistrationFirstStep)}
          className="flex flex-col gap-6"
        >
          <InputField
            {...register("firstName")}
            label="First Name"
            placeholder="Enter your Firstname"
            componentClasses=""
          />
          <InputField
            {...register("lastName")}
            label="Last Name"
            placeholder="Enter your Lastname"
            componentClasses=""
          />
          <InputField
            {...register("email")}
            label="Email"
            placeholder="Enter your Email"
            componentClasses=""
          />
          {/* <InputField
            {...register("identificator")}
            type="number"
            label="Identificator"
            placeholder="Enter your identificator"
            componentClasses=""
            pattern="^\d{11}$"
          >
            {errors?.identificator && (
              <span className="text-red-800">
                {errors?.identificator.message}
              </span>
            )}
          </InputField> */}
          <SubmitButton isActive={isPending}>Continue</SubmitButton>
        </form>
      </div>
    </>
  );
};

export default Page;
