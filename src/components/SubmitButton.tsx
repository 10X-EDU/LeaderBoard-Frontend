import type { ReactNode } from "react";

const SubmitButton = ({
  children,
  isActive,
}: {
  children: ReactNode;
  isActive: boolean | undefined;
}) => {
  return (
    <button
      type="submit"
      className="cursor-pointer w-full bg-[#8193F8] py-4.5 text-xl text-white font-semibold hover:translate-x-1.5 hover:-translate-y-0.5 transition border-b-1 border-l-1 disabled:bg-slate-600"
      disabled={isActive}
    >
      {children}
    </button>
  );
};

export default SubmitButton;
