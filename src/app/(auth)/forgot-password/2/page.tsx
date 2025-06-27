import ResetCodeForm from '@/components/auth/reset-code-form'
import React from 'react'

const page = () => {
    return (
        <div className="flex justify-end items-center pl-26">
            <div className="self-end text-white ">
                <h1
                  className="mb-3 whitespace-nowrap text-white text-[24px] font-normal leading-[100%] font-[Share_Tech]"
                >
                  Enter Your Verification Code
                </h1>
                <ResetCodeForm />
            </div>
        </div>
    )
}

export default page