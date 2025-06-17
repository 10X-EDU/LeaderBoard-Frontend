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
import SubmitButton from './submit-button';
import InputField from './input-field';

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
        resolver: zodResolver(RegistrationStepTwoSchema),
    });
    const handleRegistrationSecondStep = async (
        data: RegistrationSecondStepDataType,
    ) => {
        try {
            console.log(firstName, lastName, email, data);
            console.log(data.passwordConfirm);
            console.log(data.password);

            const resp = await signUpUser({
                firstName,
                lastName,
                email,
                specialization: "DEVELOPMENT",
                password: data.password,
                passwordConfirm: data.passwordConfirm,
            });
            if (resp?.status === 201) {
                setRegistrationData({
                    email: "",
                    firstName: "",
                    lastName: "",
                    password: "",
                    identificator: 0,
                });
                console.log(resp.data.data.tokens);
                await setTokensToCookies({
                    accessToken: resp.data.data.tokens.accessToken,
                    refreshToken: resp.data.data.tokens.refreshToken,
                });
                router.push("/user/profile");
            }
        } catch (error) {
            console.error(error);
            setError("root", { message: "something went wrong" });
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
            <SubmitButton isActive={isSubmitting}>Continue</SubmitButton>
            {errors.root && (
                <p className="text-red-500 text-sm">{errors.root?.message}</p>
            )}
        </form>
    )
}

export default SignUpStepTwoForm