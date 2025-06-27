"use client";


import SignupStepTracker from "@/components/auth/signup-step-tracker";
import { usePathname } from "next/navigation";
import "../globals.css";
import Image from "next/image";

export default function Layout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const showTracker = pathname.startsWith("/sign-up");
  return (
    <div className="h-full w-full flex flex-col">
      <SignupStepTracker />
      <div className={`flex flex-1${showTracker ? " mt-16" : ""}`}>

        <div className="grid-lines flex flex-col justify-center w-full h-full sm:w-1/2 md:min-w-[646px] relative backdrop-blur-sm bg-[#0B0B0B] px-16 py-32 border-r-[#FFFFFFCC] border-r-1 gradient-border">
          {children}
        </div>
        <Image
          src={"/assets/background.png"}
          alt="background"
          className="w-full h-full aspect-video object-center object-cover overflow-hidden"
          width={1920}
          height={1080}
        />
      </div>
    </div>
  );
}
