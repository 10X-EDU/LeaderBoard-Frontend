'use client'
import React, { useEffect } from 'react'
import InputField from './input-field'
import SubmitButton from './submit-button'
import { zodResolver } from '@hookform/resolvers/zod';
import { RegistrationDataType, RegistrationFirstStepDataType } from '@/types/types';
import { RegistrationStepOneSchema } from '@/schemas/schemas';
import { useRouter } from 'next/navigation';
import useRegistrationStore from '@/store/RegistrationStore';
import { useForm } from 'react-hook-form';

const SignUpStepOneForm = () => {
    const setRegistrationData = useRegistrationStore(
        (state) => state.setRegistrationData,
    );
    const firstName = useRegistrationStore((state) => state.firstName);
    const lastName = useRegistrationStore((state) => state.lastName);
    const email = useRegistrationStore((state) => state.email);

    const router = useRouter();

    const {
        register,
        handleSubmit,
        formState: { errors,isSubmitting },
    } = useForm<RegistrationFirstStepDataType>({
        mode: "all",
        resolver: zodResolver(RegistrationStepOneSchema),
    });
    const handleRegistrationFirstStep = (data: Partial<RegistrationDataType>) => {
        setRegistrationData(data);
        router.push("/sign-up/2");
    };

    useEffect(() => {
        if (!firstName || !lastName || !email) return;
        router.push("/sign-up/2");
    }, [firstName, lastName, email, router]);
    return (
        <form
            onSubmit={handleSubmit(handleRegistrationFirstStep)}
            className="flex flex-col gap-6"
        >
            <InputField
                {...register("firstName")}
                label="First Name"
                placeholder="Enter your Firstname"
                componentClasses=""
            >
                {errors.firstName && (
                    <p className="text-red-500 text-sm">{errors.firstName.message}</p>
                )}
            </InputField>
            <InputField
                {...register("lastName")}
                label="Last Name"
                placeholder="Enter your Lastname"
                componentClasses=""
            >
                {errors.lastName && (
                    <p className="text-red-500 text-sm">{errors.lastName.message}</p>
                )}
            </InputField>
            <InputField
                {...register("email")}
                label="Email"
                placeholder="Enter your Email"
                componentClasses=""
            >
                {errors.email && (
                    <p className="text-red-500 text-sm">{errors.email.message}</p>
                )}
            </InputField>
            <SubmitButton isActive={isSubmitting}>Continue</SubmitButton>
        </form>
    )
}

export default SignUpStepOneForm