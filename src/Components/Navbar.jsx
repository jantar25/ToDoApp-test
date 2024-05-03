import React, { useState } from 'react'
import { NavLink,Link } from 'react-router-dom'

import { Navigations } from '../Constants/Navigation'
import useClickOutside from '../Hooks/useClickOutside'
import menuIcon from '../Assets/Icons/menu.svg'

const Navbar = () => {
  const [toggleMenu,setToggleMenu] = useState(false)
  const navLinkActive = 'border-b-2 border-red-color'

  const closeMenu = () => setToggleMenu(false)
  const dropDownMenuRef = useClickOutside(closeMenu)

  return (
    <div className='h-[10vh] flex items-center justify-between bg-main-color px-8 text-white font-bold'>
      <div className="flex items-center gap-8">
        <img src={ menuIcon } alt='menu-icon' className='lg:hidden h-8 w-8' onClick={() => setToggleMenu(!toggleMenu)}/>
        <Link to='/' className='flex items-center gap-2 text-2xl'>
          <h1 className='text-red-color'>TODO</h1>
          <h1>APP</h1>
        </Link>
      </div>
      <div className='hidden lg:flex items-center justify-between'>
        {Navigations.map((navigation, index) => (
          <NavLink key={index} to={navigation.path} className={({ isActive }) => isActive? navLinkActive : ''}>
            <span className='text-xl font-semibold mx-2'>{navigation.title}</span>
          </NavLink>
        ))}
      </div>
      {toggleMenu &&
        <div data-testid='mobile-menu' className='absolute top-[10vh] left-0 right-0 lg:hidden flex flex-col items-center justify-between
         bg-main-color p-4' ref={ dropDownMenuRef }>
          {Navigations.map((navigation, index) => (
            <NavLink key={index} to={navigation.path} className={({ isActive }) => isActive? navLinkActive : ''}>
              <span className='text-xl font-semibold mx-2'>{navigation.title}</span>
            </NavLink>
          ))}
        </div>
      }
    </div>
  )
}

export default Navbar