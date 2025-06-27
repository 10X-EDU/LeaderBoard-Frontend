
import { Share_Tech } from 'next/font/google';
import { useState, type ReactNode } from "react";
const shareTech = Share_Tech({ subsets: ['latin'], weight: '400' });



type InputFieldProps = {
  label: string;
  type?: string;
  placeholder: string;
  children?: ReactNode;
  componentClasses?: string;
  pattern?: string;
  value?: string;
  defaultValue?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  rest?: string[];
};


const InputField = ({
  label,
  type,
  placeholder,
  componentClasses,
  children,
  pattern,
  value: controlledValue,
  defaultValue,
  onChange,
  ...rest
}: InputFieldProps) => {
  const [inputType, setInputType] = useState<string>(type || "");
  const [isFocused, setIsFocused] = useState(false);
  const [uncontrolledValue, setUncontrolledValue] = useState(defaultValue || "");
  const isControlled = controlledValue !== undefined;
  const value = isControlled ? controlledValue : uncontrolledValue;


  if (type === "select") {
    return (
      <>
        <div className="flex flex-col gap-2 text-white">
          <div className={`flex flex-col gap-2 relative ${componentClasses} `}>
            <label
              className={`text-white text-[18px] font-normal leading-[100%] font-[Share_Tech] flex gap-1 ${shareTech.className}`}
              htmlFor={label}
            >
              <span>{label}</span>
            </label>
            <select
              className={`bg-black border-1 border-white p-4 text-[#4D4D4D] text-[18px] font-normal leading-[100%] font-[Share_Tech] ${shareTech.className}`}
              id={label}
              {...rest}
            >
              <option className={`text-[#4D4D4D] text-[18px] font-normal leading-[100%] font-[Share_Tech] ${shareTech.className}`} value="" disabled>--Please choose an option--</option>
              <option className={`text-[#4D4D4D] text-[18px] font-normal leading-[100%] font-[Share_Tech] ${shareTech.className}`} value="DESIGNER">DESIGNER</option>
              <option className={`text-[#4D4D4D] text-[18px] font-normal leading-[100%] font-[Share_Tech] ${shareTech.className}`} value="DEVELOPMENT">DEVELOPMENT</option>
            </select>
          </div>
        </div>
        <div>{children}</div>
      </>
    );
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleVisibilityChange = (e: any) => {
    e.preventDefault();
    if (inputType === "password") {
      setInputType("text")
    } else {
      setInputType("password");
    }
  };


  return (
    <div className="flex flex-col gap-2 text-white">
      <div className={`flex flex-col gap-2 relative ${componentClasses}`}>
        <label
          className={`text-white text-[18px] font-normal leading-[100%] font-[Share_Tech] flex gap-1 mb-3 ${shareTech.className}`}
          htmlFor={label}
        >
          <span>{label}</span>
          {label && (
            <span className="text-[#FF4444] align-middle text-[18px]">*</span>
          )}
        </label>
        <div className="flex items-center relative">
          <input
            id={label}
            type={inputType}
            className={`flex-1 border border-[#999] bg-black focus:outline-[#0099FF] outline-white py-5 px-6 transition text-white text-[18px] font-normal leading-[100%] font-[Share_Tech] ${shareTech.className} placeholder:text-transparent`}
            placeholder=" "
            pattern={pattern}
            value={value}
            onChange={e => {
              if (isControlled) {
                onChange && onChange(e);
              } else {
                setUncontrolledValue(e.target.value ?? "");
              }
            }}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            {...rest}
          />
          {placeholder && (
            <span
              className={`absolute left-4 pointer-events-none transition-all duration-200 px-1
                ${
                  (isFocused || value.length > 0)
                    ? "bg-[#0B0B0B] -top-2 text-xs " + (isFocused ? "text-[#0099FF]" : "text-[#4D4D4D]")
                    : "bg-black top-1/2 -translate-y-1/2 text-[18px] text-[#4D4D4D]"
                }
              `}
              style={{zIndex: 2, backgroundColor: (isFocused || value.length > 0) ? '#0B0B0B' : '#000'}}
            >
              {placeholder}
            </span>
          )}
          {type === "password" && (
            <button
              type="button"
              className="absolute right-5 flex items-center h-full cursor-pointer"
              style={{ top: 0, bottom: 0, margin: 'auto' }}
              onClick={handleVisibilityChange}
            >
              {inputType === "password" ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img className="w-4 h-4" src={'/assets/visible.svg'} alt="eyes closed" />
              ) : (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  className="w-4 h-4"
                  src={"/assets/not-visible.svg"}
                  alt="eyes opened"
                />
              )}
            </button>
          )}
        </div>
      </div>
      <div>{children}</div>
    </div>
  );
};

export default InputField;
