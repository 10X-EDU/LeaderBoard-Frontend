"use client";

import SignupStepTracker from "@/components/auth/signup-step-tracker";
import "../globals.css";

export default function Layout({ children }: { children: React.ReactNode }) {
  const steps = ["Account Info", "Profile Details"];
  return (
    <div className="h-full w-full flex flex-col">
      <SignupStepTracker steps={steps} />
      <div className="flex flex-1 pt-16"> {/* pt-16 to offset fixed tracker */}
        <div className="grid-lines flex flex-col justify-center w-full h-full sm:w-1/2 md:min-w-[646px] relative backdrop-blur-sm bg-[#0B0B0B] px-16 py-32 border-r-[#FFFFFFCC] border-r-1 gradient-border">
          {children}
        </div>
        <img
          src={"/assets/background.png"}
          alt="background"
          className="w-full h-full aspect-video object-center object-cover overflow-hidden"
        />
      </div>
    </div>
  );
}
