
"use client";
import React from "react";
import { usePathname } from "next/navigation";

interface SignupStepTrackerProps {
    steps: string[];
}

const SignupStepTracker: React.FC<SignupStepTrackerProps> = () => {
    const pathname = usePathname();

    const steps = ["First", "Second", "Finish"];
    let currentStep = 1;
    if (pathname.includes("/sign-up/3")) currentStep = 3;
    else if (pathname.includes("/sign-up/2")) currentStep = 2;
    else if (pathname.includes("/sign-up/1")) currentStep = 1;
    return (
        <div
            className="w-full flex flex-col justify-center items-center gap-[10px] h-[79px] p-[10px] flex-shrink-0 bg-black z-20 border-b border-[#333] fixed top-0 left-0"
        >
            <div className="flex justify-between w-[1440px] mx-auto items-center">
                <div className="flex items-center">
                    <div
                        className={[
                            "flex items-center justify-center w-[28px] h-[28px] p-[6px] flex-col gap-[10px]",
                            "transition-all duration-200 font-bold text-[14px]",
                            currentStep > 1
                                ? "bg-[#FFA3CF] border-2 border-[#FFA3CF] text-white"
                                : currentStep === 1
                                    ? "bg-[#FFA3CF] border-2 border-[#FFA3CF] text-white"
                                    : "bg-[#222] border-2 border-[#444] text-zinc-400",
                            "rounded-[64px]"
                        ].join(' ')}
                    >
                        {currentStep > 1 ? (
                            <img src="/assets/done.svg" alt="done" className="w-4 h-4" />
                        ) : (
                            1
                        )}
                    </div>
                    <span className={`ml-3 text-sm font-medium ${currentStep === 1 ? "text-white" : "text-gray-400"}`}>{steps[0]}</span>
                </div>
                <div className="flex-1 flex items-center h-0 mx-4">
                    <div className="w-full h-1 rounded bg-[#FF2257]" />
                </div>
                <div className="flex items-center">
                    <div
                        className={[
                            "flex items-center justify-center w-[28px] h-[28px] p-[6px] flex-col gap-[10px]",
                            "transition-all duration-200 font-bold text-[14px]",
                            currentStep > 2
                                ? "bg-[#FFA3CF] border-2 border-[#FFA3CF] text-white"
                                : currentStep === 2
                                    ? "bg-[#FFA3CF] border-2 border-[#FFA3CF] text-white"
                                    : "bg-[#222] border-2 border-[#444] text-zinc-400",
                            "rounded-[64px]"
                        ].join(' ')}
                    >
                        {currentStep > 2 ? (
                            <img src="/assets/done.svg" alt="done" className="w-4 h-4" />
                        ) : (
                            2
                        )}
                    </div>
                    <span className={`ml-3 text-sm font-medium ${currentStep === 2 ? "text-white" : "text-gray-400"}`}>{steps[1]}</span>
                </div>

                <div className="flex-1 flex items-center h-0 mx-4">
                    <div className="w-full h-1 rounded bg-[#FF2257]" />
                </div>

                <div className="flex items-center">
                    <div
                        className={[
                            "flex items-center justify-center w-[28px] h-[28px] p-[6px] flex-col gap-[10px]",
                            "transition-all duration-200 font-bold text-[14px]",
                            currentStep === 3
                                ? "bg-[#FFA3CF] border-2 border-[#FFA3CF] text-white"
                                : "bg-[#222] border-2 border-[#444] text-zinc-400",
                            "rounded-[64px]"
                        ].join(' ')}
                    >
                        3
                    </div>
                    <span className={`ml-3 text-sm font-medium ${currentStep === 3 ? "text-white" : "text-gray-400"}`}>{steps[2]}</span>
                </div>
            </div>
        </div>
    );
};

export default SignupStepTracker;
