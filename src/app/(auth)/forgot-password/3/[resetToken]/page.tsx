import React from 'react';
import ResetPasswordForm from '@/components/reset-password-form';

interface ResetPasswordPageProps {
  params: {
    resetToken: string;
  };
}

const ResetPasswordPage: React.FC<ResetPasswordPageProps> = ({ params }) => {
  const { resetToken } = params;

  return (
    <div className='text-white'>
      <ResetPasswordForm resetToken={resetToken} />
    </div>
  );
};

export default ResetPasswordPage;