"use client";
import { useUserStore } from "@/store/UserStore";
import "../globals.css";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const token = useUserStore((state) => state.token);
  const router = useRouter();
  useEffect(() => {
    if (token) {
      router.push("/user/profile");
    }
  }, [token, router]);

  return (
    <div className="h-full w-full flex">
      <div className="grid-lines flex flex-col w-full h-full sm:w-1/2 md:min-w-[646px] relative backdrop-blur-sm bg-[#0B0B0B3D] bg-black px-16 py-32 border-r-[#FFFFFFCC] border-r-1 gradient-border">
        {children}
      </div>
      <img
        src="/auth-background-image.png"
        alt="background"
        className="w-full h-full aspect-video object-center object-cover overflow-hidden"
      />
    </div>
  );
}
