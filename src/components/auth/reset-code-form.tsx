'use client';

import React, { useRef, ChangeEvent, KeyboardEvent, useCallback } from 'react';
import SubmitButton from '../submit-button';
import ErrorMessage from '../input/error-message';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import usePasswordStore from '@/store/ResetPasswordStore';
import axios from 'axios';
import { useRouter } from 'next/navigation';

const ResetCodeSchema = z.object({
  code: z
    .string()
    .min(1, { message: 'Please enter the 6-digit code sent to your email.' })
    .length(6, { message: 'The code must be exactly 6 digits.' })
    .regex(/^\d+$/, { message: 'The code must contain only numbers (0-9).' }),
});

type ResetCodeType = z.infer<typeof ResetCodeSchema>;

const ResetCodeForm = () => {
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
  const CODE_LENGTH = 6;

  const email = usePasswordStore((state) => state.email);

  const router = useRouter();

  const {
    handleSubmit,
    setValue,
    getValues,
    formState: { isSubmitting, errors },
    setError
  } = useForm<ResetCodeType>({
    mode: "all",
    resolver: zodResolver(ResetCodeSchema),
    defaultValues: {
      code: '',
    },
  });

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement>,
    index: number,
  ) => {
    const { value: inputValue } = e.target;
    const char = inputValue.slice(-1);

    if (!/^\d*$/.test(char)) {
      e.preventDefault();
      return;
    }

    const currentCodeArray = getValues('code').split('');
    currentCodeArray[index] = char;
    const newCode = currentCodeArray.join('');

    setValue('code', newCode, { shouldValidate: true });

    if (char && index < CODE_LENGTH - 1) {
      inputRefs.current[index + 1]?.focus();
    } else if (newCode.length === CODE_LENGTH) {
      handleSubmit(onSubmit)();
    }
  };

  const handleKeyDown = (
    e: KeyboardEvent<HTMLInputElement>,
    index: number,
  ) => {
    if (e.key === 'Backspace') {
      if (!e.currentTarget.value && index > 0) {
        inputRefs.current[index - 1]?.focus();
        const currentCodeArray = getValues('code').split('');
        currentCodeArray[index - 1] = '';
        setValue('code', currentCodeArray.join(''), { shouldValidate: true });
      } else if (e.currentTarget.value) {
        const currentCodeArray = getValues('code').split('');
        currentCodeArray[index] = '';
        setValue('code', currentCodeArray.join(''), { shouldValidate: true });
      }
    } else if (e.key === 'ArrowRight' && index < CODE_LENGTH - 1) {
      inputRefs.current[index + 1]?.focus();
    } else if (e.key === 'ArrowLeft' && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    const pasteData = e.clipboardData.getData('text/plain');

    if (pasteData.match(/^\d{6}$/)) {
      setValue('code', pasteData, { shouldValidate: true });

      pasteData.split('').forEach((char, i) => {
        if (inputRefs.current[i]) {
          inputRefs.current[i]!.value = char;
        }
      });
      inputRefs.current[CODE_LENGTH - 1]?.focus();
      handleSubmit(onSubmit)();
    }
  };

  const onSubmit = async (data: ResetCodeType) => {
    console.log('Submitted Code:', data.code);
    const resp = await axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}/auth/verify-otp`, {
      email,
      otpCode: String(data.code),
    })
    console.log(resp.data);
    if (!resp.data.data.isValid) {
      setError("code", { message: resp.data.data.message })
      return;
    }
    router.push(`/forgot-password/3/${resp.data.data.resetToken}`);
  };

  const handleResendCode = async () => {
    try {
      const resp = await axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}/forgot-password`, {
        email
      })
      console.log(resp)
    } catch (error) {
      console.log(error);
    }
  };

  const setInputRef = useCallback((el: HTMLInputElement | null, index: number) => {
    inputRefs.current[index] = el;
  }, []);

  return (
    <>
      <div className='mb-9'>
        <span className="block text-[#9F9F9F] whitespace-nowrap text-[12px] font-normal leading-[18px] font-[Tektur]">Enter the 6-digit code we sent to</span>
        <span className="block text-[#E6E6E6] font-[Tektur] text-[12px] font-normal leading-[18px]">{email || "Tsotne123@gmail.com"}</span>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-14.5 flex flex-col gap-2">
          <div className="flex gap-2 text-white">
            {Array.from({ length: CODE_LENGTH }).map((_, index) => (
              <input
                key={index}
                className={`max-w-12 rounded-sm border-1 p-4 text-center ${errors.code ? 'border-red-500' : 'border-white'
                  } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                maxLength={1}
                type="text"
                pattern="[0-9]"
                inputMode="numeric"
                autoComplete="one-time-code"
                ref={(el) => setInputRef(el, index)}
                value={getValues('code')[index] || ''}
                onChange={(e) => handleInputChange(e, index)}
                onKeyDown={(e) => handleKeyDown(e, index)}
                onPaste={handlePaste}
              />
            ))}
          </div>
          <ErrorMessage message={errors.code?.message} />

          <span className="text-[#E6E6E6] font-[Tektur] text-[12px] font-normal leading-[18px]">
            Didn’t receive a code?{' '}
            <button
              type="button"
              className="cursor-pointer text-red-500 underline hover:text-red-500/50 font-[Tektur] text-[12px] font-normal leading-[18px]"
              onClick={handleResendCode}
            >
              Resend Code{' '}
            </button>
          </span>
        </div>
        <SubmitButton isActive={isSubmitting}>
          {isSubmitting ? 'Verifying...' : 'Continue'}
        </SubmitButton>
      </form>
    </>
  );
};

export default ResetCodeForm;