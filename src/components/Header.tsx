import { NavLink } from "react-router"
import Logo from "../assets/10x-logo.png"
import Button from "./Button"
import HeaderLink from "./HeaderLink"

const Header = () => {
  return (
    <header className='bg-black w-full flex items-center justify-center h-16' >
      <nav className='w-full md:w-[65%] sm:w-[50%] md:mx-5 flex items-center justify-between'>
        <NavLink to={"/"}>
          <img src={Logo} alt='10x logo' className='w-19 h-12' />
        </NavLink>
        <ul className="text-white flex gap-6.5">
          <li>
            <HeaderLink to={"/"}>Programs</HeaderLink>
          </li>
          <li>
            <HeaderLink to={"/"}>About us</HeaderLink>
          </li>
          <li>
            <HeaderLink to={"/"}>Career</HeaderLink>
          </li>
          <li>
            <HeaderLink to={"/"}>Question</HeaderLink>
          </li>
          <li>
            <HeaderLink to={"/"}>Students</HeaderLink>
          </li>
        </ul>
        <Button>
          Login
        </Button>
      </nav>
    </header>
  )
}

export default Header