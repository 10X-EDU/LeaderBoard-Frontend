import { type ReactNode } from "react";
import Link from "next/link";

const HeaderLink = ({ to, children }: { to: string; children: ReactNode }) => {
  return (
    <Link
      className="hover:text-[#714FFB] flex items-center gap-1.5 p-1 transition"
      href={to}
    >
      {children}
      <img
        src="/Dropdown-icon.png"
        alt="dropdown icon"
        className="h-2.5 w-2.5"
      />
    </Link>
  );
};

export default HeaderLink;
