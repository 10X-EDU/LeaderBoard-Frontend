import Link from "next/link";
import SignOutButton from "./SignOutButton";
import HeaderLink from "./HeaderLink";

const Header = () => {
  return (
    <header className="bg-black w-full flex items-center justify-center h-16">
      <nav className="w-full  max-w-[60%] md:w-[65%] sm:w-[50%] md:mx-5 flex items-center justify-between">
        <Link href={"/"}>
          <img src="/10x-logo.png" alt="10x logo" className="w-19 h-12" />
        </Link>
        <ul className="text-white flex gap-6.5">
          <li>
            <HeaderLink to={"/programs"}>Programs</HeaderLink>
          </li>
          <li>
            <HeaderLink to={"/about"}>About us</HeaderLink>
          </li>
          <li>
            <HeaderLink to={"/career"}>Career</HeaderLink>
          </li>
          <li>
            <HeaderLink to={"/questions"}>Question</HeaderLink>
          </li>
          <li>
            <HeaderLink to={"/students"}>Students</HeaderLink>
          </li>
        </ul>
        <SignOutButton>Logout</SignOutButton>
      </nav>
    </header>
  );
};

export default Header;
