'use client'
import React from 'react'
import InputField from '../input/input-field';
import SubmitButton from '../submit-button';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import axios from 'axios';
import { useRouter } from 'next/navigation';

const resetPasswordSchema = z.object({
    password: z.string().min(8, { message: "password must be at least 8 characters long." }),
    confirmPassword: z.string().min(8, { message: "password must be at least 8 characters long." })
})

type resetPasswordType = z.infer<typeof resetPasswordSchema>

const ResetPasswordForm = ({ resetToken }: { resetToken: string }) => {
    const { register, handleSubmit, formState: { errors, isSubmitting }, setError } = useForm<resetPasswordType>({
        resolver: zodResolver(resetPasswordSchema)
    })
    const router = useRouter();
    const onSubmit = async (data: { password: string, confirmPassword: string }) => {
        try {
            await axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}/auth/reset-password`, {
                resetToken,
                password: data.password,
                confirmPassword: data.confirmPassword
            })
            router.push("/")
        } catch (error: unknown) {
            if (axios.isAxiosError(error)) {
                setError("root", { message: error.response?.data?.message || "error" });
            } else if (error instanceof Error) {
                setError("root", { message: error.message });
            } else {
                setError("root", { message: "error" });
            }
        }
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-5'>
            <InputField label='Reset password' placeholder='' type='password' {...register("password")} >
                {errors.password && <span className='text-red-600 text-sm'>{errors.password.message}</span>}
            </InputField>
            <InputField label='' placeholder='' type='password' {...register("confirmPassword")}>
                {errors.confirmPassword && <span className='text-red-600 text-sm'>{errors.confirmPassword.message}</span>}
            </InputField>
            <SubmitButton isActive={isSubmitting}>{isSubmitting ? "pending" : "continue"}</SubmitButton>
            {errors.root && <span className='text-red-600 text-sm'>{errors.root.message}</span>}
        </form>
    )
}

export default ResetPasswordForm;