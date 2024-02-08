import React from 'react'
import "./navbar.css"
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="navbar">
        <div className="navbar-container">
            <NavLink to="/" className="logo">Booking.</NavLink>
            <div className="nav-items">
                <button className='navButton'>Register</button>
                <button className='navButton'>Login</button>
            </div>
        </div>
    </div>
  )
}

export default Navbar
