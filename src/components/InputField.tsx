
type inputFieldProps = { label: string, placeholder: string, componentClasses?: string, rest?: string[] }

const InputField = ({ label, placeholder, componentClasses, ...rest }: inputFieldProps) => {
    return (
        <div className={`flex flex-col gap-2 ${componentClasses} `} >
            <label className='text-2xl' htmlFor={label}>{label}</label>
            <input id={label} className='focus:outline-[#0099FF] outline outline-white py-5 px-6 transition' placeholder={placeholder} {...rest} />
        </div >
    )
}

export default InputField