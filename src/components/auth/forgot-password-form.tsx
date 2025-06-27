'use client'
import React from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import usePasswordStore from '@/store/ResetPasswordStore'
import axios from 'axios'
import SubmitButton from '../submit-button'
import InputField from '../input/input-field'

const resetSchema = z.object({
    reset: z
      .string()
      .min(1, { message: "Please enter your email address." })
      .email({ message: "Please enter a valid email address (e.g. user@example.com)." })
})

type ResetType = z.infer<typeof resetSchema>

const ForgotPasswordForm = () => {
    const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<ResetType>({
        resolver: zodResolver(resetSchema)
    });
    const setEmail = usePasswordStore((state) => state.setEmail);
    const router = useRouter();
    const onSubmit = async (data: { reset: string }) => {
        try {
            console.log(data.reset);
            const resp = await axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}/auth/forgot-password`, {
                email: data.reset
            })
            console.log(resp);
            if (resp.status === 200) {

                setEmail(data.reset);
                router.push("/forgot-password/2")
            }
        } catch (err) {
            console.log(err);
        }
    };
    return (
        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-11'>
            <InputField {...register("reset")} label="Gmail" placeholder="Enter Your Email">
                {errors.reset && <p className='text-red-600 text-sm'>{errors.reset.message}</p>}
            </InputField>
            <SubmitButton isActive={isSubmitting}>Continue</SubmitButton>
        </form>
    )
}

export default ForgotPasswordForm