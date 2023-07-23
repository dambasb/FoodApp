import React, { useState } from 'react'
import { Link } from "react-router-dom"
import { NavbarData } from './NavbarData';
import * as FaIcons from "react-icons/fa6";
import * as MdIcons from 'react-icons/md';
import './Navbar.css';
import { IconContext } from 'react-icons/lib';


function Navbar() {
  const [sidebar, setSidebar] = useState(false);
  const toggleSidebar = () => { setSidebar(!sidebar) };

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <div className='navbar'>
          <Link to='/' className='navbar-logo'>
            <MdIcons.MdFastfood /><span>Food App</span>
          </Link>
          <nav className='navbar-menu hide-navbar-menu' >
            <ul className='navbar-menu-inline'>
              {NavbarData.map((item, index) => {
                return (
                  <li key={index} className={item.cName}>
                    <Link to={item.path}>{item.title}</Link>
                  </li>
                )
              })}
            </ul>
          </nav>
          <FaIcons.FaBars className='menu-bars hide-menu-bars' onClick={toggleSidebar} />
        </div>

        <nav className={sidebar ? 'nav-menu-sidebar active' : 'nav-menu-sidebar'} >
          <ul className='nav-menu-sidebar-items'>
            <li className='navbar-toggle'>
              <Link to='#' className='menu-bars'>
                <FaIcons.FaXmark onClick={toggleSidebar} />
              </Link>
            </li>
            {NavbarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>{item.icon}<span>{item.title}</span></Link>
                </li>
              )
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  )
}

export default Navbar