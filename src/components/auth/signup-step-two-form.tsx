'use client'
import { setTokensToCookies } from '@/lib/actions';
import { signUpUser } from '@/lib/api';
import { RegistrationStepTwoSchema } from '@/schemas/schemas';
import useRegistrationStore from '@/store/RegistrationStore';
import { RegistrationSecondStepDataType } from '@/types/types';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form';
import SubmitButton from '../submit-button';
import InputField from '../input/input-field';
import ErrorMessage from '../input/error-message';

const SignUpStepTwoForm = () => {

    const firstName = useRegistrationStore((state) => state.firstName);
    const lastName = useRegistrationStore((state) => state.lastName);
    const email = useRegistrationStore((state) => state.email);
    const setRegistrationData = useRegistrationStore(
        (state) => state.setRegistrationData,
    );


    const router = useRouter();

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        setError,
    } = useForm<RegistrationSecondStepDataType>({
        mode: "all",
        resolver: zodResolver(RegistrationStepTwoSchema),
    });
    const handleRegistrationSecondStep = async (
        data: RegistrationSecondStepDataType,
    ) => {
        try {

            const resp = await signUpUser({
                firstName,
                lastName,
                email,
                specialization: data.specialization,
                password: data.password,
                passwordConfirm: data.passwordConfirm,
            });


            router.push("/sign-up/3");
            
            setTimeout(() => {
                setRegistrationData({
                    email: "",
                    firstName: "",
                    lastName: "",
                    password: "",
                    identificator: 0,
                });
            }, 500);

        } catch (error) {
            console.error(error);
            let message = "Something went wrong. Please try again.";
            if (error && typeof error === "object" && "response" in error && (error as any).response?.data?.message) {
                message = (error as any).response.data.message;
            } else if (error instanceof Error && error.message) {
                message = error.message;
            }
            setError("root", { message });
        }
    };

    useEffect(() => {
        if (!firstName || !lastName || !email) {
            router.push("/sign-up/1");
        }
    }, [firstName, lastName, email, router]);

    return (
        <form
            onSubmit={handleSubmit(handleRegistrationSecondStep)}
            className="flex flex-col gap-6"
        >
            <InputField
                {...register("specialization")}
                type='select'
                label='Specialization'
                placeholder='DEVELOPER' >
                <ErrorMessage message={errors.specialization?.message} />
            </InputField>
            <InputField
                {...register("password")}
                type="password"
                label="Password"
                placeholder="Enter your password"
                componentClasses=""
            >
                <ErrorMessage message={errors.password?.message} />
            </InputField>
            <InputField
                {...register("passwordConfirm")}
                type="password"
                label=""
                placeholder="Confirm your password"
                componentClasses=""
            >
                <ErrorMessage message={errors.passwordConfirm?.message} />
            </InputField>
            <SubmitButton isActive={isSubmitting}>Continue</SubmitButton>
            <ErrorMessage message={errors.root?.message} />
        </form>
    )
}

export default SignUpStepTwoForm