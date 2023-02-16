import React from 'react'
import { Link } from 'react-scroll'

import './header.css'


export const Header = () => {
  return (
    <div className='header-container'>
        <div className='nav-container'>
            <Link to='home-container' spy={true} smooth={true} offset={-200} duration={500}>Home</Link>
            <Link to='about-container' spy={true} smooth={true} offset={-130} duration={500}>About</Link>
            <Link to='projects-container' spy={true} smooth={true}  offset={-140} duration={500}>Projects</Link>
            <Link to='contact-container' spy={true} smooth={true}  offset={-150} duration={500}>Contact</Link>
        </div>
        <hr className='header-hr'></hr>
    </div>
  )
}

export default Header