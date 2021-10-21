import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav className='navbar'>
      <div className='container'>
        <Link to='/createrapper' className='navbar-item'>
          Create new Rapper
        </Link>
        <Link to='/createcolour' className='navbar-item'>
          Create new Colour
        </Link>
        <Link to='/colours' className='navbar-item'>
          Colours
        </Link>
        <Link to='/rappers' className='navbar-item'>
          Rappers
        </Link>
      </div>
    </nav>
  )
}

export default NavBar
