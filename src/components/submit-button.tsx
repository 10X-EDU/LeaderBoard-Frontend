import type { ReactNode } from "react";

const SubmitButton = ({
  children,
  isActive,
}: {
  children: ReactNode;
  isActive: boolean | undefined;
}) => {
  return (
    <div className="bg-white">
      <button
        type="submit"
        className="cursor-pointer w-full bg-[#FF2257] py-4.5 text-xl text-white font-semibold hover:translate-x-1 hover:-translate-y-1 transition disabled:bg-slate-600"
        disabled={isActive}
      >
        {children}
      </button>
    </div>
  );
};

export default SubmitButton;
