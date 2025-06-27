import React from 'react';

interface ErrorMessageProps {
  message?: string;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => {
  if (!message) return null;
  return (
    <span className='text-[#FF4444] text-sm'>{message}</span>
  );
};

export default ErrorMessage;
