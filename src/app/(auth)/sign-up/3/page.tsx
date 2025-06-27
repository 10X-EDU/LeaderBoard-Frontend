import LoginButton from '@/components/login-button'
import SubmitButton from '@/components/submit-button'
import React from 'react'

const page = () => {
    return (
        <div className="fixed w-screen h-screen left-0 flex items-center justify-center bg-black text-white">
            <div className='flex flex-col items-center justify-center gap-8 w-2xs'>
                <span className="flex w-[72px] h-[72px] p-[6px] flex-col justify-center items-center gap-[10px] aspect-square rounded-[64px] bg-[#FFA3CF]">
                    <img src={"/assets/done.svg"} alt="Done" className="w-[44px] h-[44px] flex-shrink-0 aspect-square" />
                </span>
                <div className='flex flex-col items-center'>
                    <span className="text-[#FF2257] text-center font-[Tektur] text-[24px] font-medium leading-[100%]">Success!</span>
                    <p className="text-[#F2F2F2] font-[Share_Tech] text-[18px] font-normal leading-[28px]">Your account has been created.</p>
                </div>
                <LoginButton />
            </div>
        </div>)
}

export default page