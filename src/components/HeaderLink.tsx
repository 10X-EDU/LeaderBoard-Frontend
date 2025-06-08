import { type ReactNode } from 'react'
import { NavLink } from 'react-router'
import DropdownIcon from "../assets/Dropdown-icon.png"

const HeaderLink = ({ to, children }: { to: string, children: ReactNode }) => {
    return (
        <NavLink className="hover:text-[#714FFB] flex items-center gap-1.5 p-1 transition" to={to}>
            {children}
            <img src={DropdownIcon} alt="dropdown icon" className='h-2.5 w-2.5' />
        </NavLink>
    )
}

export default HeaderLink