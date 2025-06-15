"use client";
import { useUserStore } from "@/store/UserStore";
import { type ReactNode } from "react";

const Button = ({ children }: { children: ReactNode }) => {
  const setToken = useUserStore((state) => state.setToken);
  return (
    <button
      onClick={() => setToken(null)}
      className="bg-transparent border-1 border-white text-white py-2 px-4 transition cursor-pointer hover:text-[#714FFB] hover:border-[#714FFB]"
    >
      {children}
    </button>
  );
};

export default Button;
