"use client";
import { type ReactNode } from "react";

const SignOutButton = ({ children, onClick }: { children: ReactNode, onClick: () => void }) => {
  return (
    <button
      onClick={onClick}
      className="bg-transparent border-1 border-white text-white py-2 px-4 transition cursor-pointer hover:text-[#714FFB] hover:border-[#714FFB]"
    >
      {children}
    </button>
  );
};

export default SignOutButton;
