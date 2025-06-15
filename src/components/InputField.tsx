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

  const handleVisibilityChange = (e: any) => {
    e.preventDefault();
    inputType === "password" ? setInputType("text") : setInputType("password");
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
              <img className="w-4 h-4" src={"/visible.svg"} alt="eyes closed" />
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
