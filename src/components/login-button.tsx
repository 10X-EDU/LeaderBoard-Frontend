'use client'
import { useRouter } from 'next/navigation'
import React from 'react'

const LoginButton = () => {
    const router = useRouter();
    return (
        <div className='w-full'>
            <button
                onClick={() => router.push('/sign-in')}
                type="button"
                className="cursor-pointer w-full bg-[#FF2257] py-4.5 text-xl text-white font-semibold hover:translate-x-1.5 hover:-translate-y-0.5 transition disabled:bg-slate-600"
            >
                Login
            </button>
        </div>
    )
}

export default LoginButton