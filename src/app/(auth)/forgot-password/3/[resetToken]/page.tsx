"use client";
import React from 'react';
import { useParams } from 'next/navigation';
import ResetPasswordForm from '@/components/auth/reset-password-form';

const ResetPasswordPage = () => {
  const params = useParams();
  const resetToken = params?.resetToken as string;

  return (
    <ResetPasswordForm resetToken={resetToken} />
  );
};

export default ResetPasswordPage;