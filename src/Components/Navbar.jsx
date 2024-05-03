import React from 'react'
import { NavLink,Link } from 'react-router-dom'

import { Navigations } from '../Constants/Navigation'

const Navbar = () => {
  const navLinkActive = 'border-b-2 border-red-color'

  return (
    <div className='h-[10vh] flex items-center justify-between bg-main-color px-8 text-white font-bold'>
      <div className="flex items-center gap-2 text-2xl">
        <h1 className='text-red-color'>TODO</h1>
        <h1>APP</h1>
      </div>
      <div className='hidden lg:flex items-center justify-between'>
        {Navigations.map((navigation, index) => (
          <NavLink key={index} to={navigation.path} className={({ isActive }) => isActive? navLinkActive : ''}>
            <span className='text-xl font-semibold mx-2'>{navigation.title}</span>
          </NavLink>
        ))}
      </div>
    </div>
  )
}

export default Navbar