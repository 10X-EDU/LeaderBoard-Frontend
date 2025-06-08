import { type ReactNode } from 'react'

const Button = ({ children }: { children: ReactNode }) => {
    return (
        <button className='bg-transparent border-1 border-white py-2 px-4 transition cursor-pointer hover:text-[#714FFB] hover:border-[#714FFB]'>
            {children}
        </button>
    )
}

export default Button