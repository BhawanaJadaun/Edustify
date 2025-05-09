import React, { useEffect, useState } from 'react'
import {Link} from 'react-scroll'
import "./Navbar.css"
import logo from '../../assets/logo.png'
import menu_icon from '../../assets/menu-icon.png'
const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      window.scrollY > 50 ? setSticky(true):setSticky(false);
    })
  },[])
  const[mobileMenu, SetMobileMenu] = useState(false);
  const toggleMenu = ()=> {
    mobileMenu ? SetMobileMenu(false):SetMobileMenu(true);
  }
  return (
   <nav className={`container ${sticky? 'dark-nav' : ''}`}>
<img src= {logo} alt='' className='logo'/>
<ul className={`nav-links ${mobileMenu && window.innerWidth <= 840 ? 'show' : ''}`}>
<li><Link to='Hero' smooth={true} offset={0} duration={500} onClick={toggleMenu}>Home</Link></li>
<li><Link to='Program' smooth={true} offset={-260} duration={500} onClick={toggleMenu}>Program</Link></li>
<li><Link to='About' smooth={true} offset={-150} duration={500} onClick={toggleMenu}>About us</Link></li>
<li><Link to='Campus' smooth={true} offset={-260} duration={500} onClick={toggleMenu}>Campus</Link></li>
<li><Link to='Testimonials' smooth={true} offset={-260} duration={500} onClick={toggleMenu}>Testimonials</Link></li>
<li>
  <Link to='Contact' smooth={true} offset={-260} duration={500} onClick={toggleMenu}>
    <button className='btn'>Contact us</button>
  </Link>
</li>

</ul>
<img src = {menu_icon} className='menu_icon' onClick={toggleMenu}/>
   </nav>
  )
}

export default Navbar