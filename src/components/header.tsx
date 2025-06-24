'use client'
import Link from "next/link";
import HeaderLink from "./header-link";

const Header = () => {
  const handleProfilePictureClick = async () => {
    //TODO open profile modal.
  }
  return (
    <header className="bg-black w-full flex items-center justify-center h-16">
      <nav className="w-full  max-w-[60%] md:w-[65%] sm:w-[50%] md:mx-5 flex items-center justify-between">
        <ul className="text-white flex items-center">
          <Link href={"/dashboard"} className="mr-11 inline-block">
            <img src="/10x-logo.svg" alt="10x logo" className="w-19 h-12" />
          </Link>
          <li className="mr-8">
            <HeaderLink to={"/courses"}>Courses</HeaderLink>
          </li>
          <li>
            <HeaderLink to={"/games"}>Games</HeaderLink>
          </li>
        </ul>
        <button onClick={handleProfilePictureClick} >
          <img src={"/default-profile.png"} alt="profile" className="max-w-8 max-h-8" />
        </button>
      </nav>
    </header>
  );
};

export default Header;
