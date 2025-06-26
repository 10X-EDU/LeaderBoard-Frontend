import React from 'react'

 

const SignInWithGoogle = () => {
    return (
        <div>
            <button className="flex items-center gap-2.5 px-6 py-4 border-white border-1 w-full cursor-pointer">
                <img src="/assets/google.svg" alt="Sign in with Google" className='w-4.5 h-4.5' />
                <span className='text-white'>GOOGLE</span>
            </button>
        </div>
    )
}

export default SignInWithGoogle