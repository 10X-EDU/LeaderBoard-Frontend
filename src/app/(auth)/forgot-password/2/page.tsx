import ResetCodeForm from '@/components/auth/reset-code-form'
import React from 'react'

const page = () => {
    return (
        <div className="flex justify-end items-center px-26">
            <div className="self-end text-white ">
                <h1 className="text-2xl text-white font-bold mb-3 whitespace-nowrap">Enter Your Verification Code</h1>
                <ResetCodeForm />
            </div>
        </div>
    )
}

export default page