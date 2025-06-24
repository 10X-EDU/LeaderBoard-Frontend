"use client";
import { useState, type ReactNode } from "react";



type InputFieldProps = {
  label: string;
  type?: string;
  placeholder: string;
  children?: ReactNode;
  componentClasses?: string;
  pattern?: string;
  rest?: string[];
};

const InputField = ({
  label,
  type,
  placeholder,
  componentClasses,
  children,
  pattern,
  ...rest
}: InputFieldProps) => {

  const [inputType, setInputType] = useState<string>(type || "");


  if (type === "select") {
    return (
      <>
        <div className="flex flex-col gap-2 text-white">
          <div className={`flex flex-col gap-2 relative ${componentClasses} `}>
            <label className="text-2xl" htmlFor={label}>
              {label}
            </label>
            {/* Pass the rest props to the select element */}
            <select
              className="bg-black text-white border-1 p-4"
              id={label}
              {...rest}
            >
              <option value="" disabled>--Please choose an option--</option>
              <option value="DESIGNER">DESIGNER</option>
              <option value="DEVELOPMENT">DEVELOPMENT</option>
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
      <div className={`flex flex-col gap-2 relative ${componentClasses} `}>
        <label className="text-2xl" htmlFor={label}>
          {label}
        </label>
        <input
          id={label}
          type={inputType}
          className="focus:outline-[#0099FF] outline outline-white py-5 px-6 transition "
          placeholder={placeholder}
          pattern={pattern}
          {...rest}
        />
        {type === "password" && (
          <button
            type="button"
            className="absolute top-1/2 right-5 translate-y-1/2 cursor-pointer"
            onClick={handleVisibilityChange}
          >
            {inputType === "password" ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img className="w-4 h-4" src={'/visible.svg'} alt="eyes closed" />
            ) : (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                className="w-4 h-4"
                src={"/not-visible.svg"}
                alt="eyes opened"
              />
            )}
          </button>
        )}
      </div>
      <div>{children}</div>
    </div>
  );
};

export default InputField;
