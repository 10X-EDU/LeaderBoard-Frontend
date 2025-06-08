import type { ReactNode } from "react"

type inputFieldProps = { label: string, placeholder: string, children?: ReactNode, componentClasses?: string, rest?: string[] }

const InputField = ({ label, placeholder, componentClasses, children, ...rest }: inputFieldProps) => {
    return (
        <div className={`flex flex-col gap-2 ${componentClasses} `} >
            <label className='text-2xl' htmlFor={label}>{label}</label>
            <input id={label} className='focus:outline-[#0099FF] outline outline-white py-5 px-6 transition' placeholder={placeholder} {...rest} />
            {children}
        </div >
    )
}

export default InputField