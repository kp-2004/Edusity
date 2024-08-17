import React, { useEffect, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'

function Navbar() {
  const [sticky, setSticky] = useState(false);

  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      window.scrollY > 70 ?  setSticky(true) :  setSticky(false);
    })
  },[]);
  const [mobilemenu, setMobileMenu] = useState(false)
  const toggle = () => {
    setMobileMenu(!mobilemenu);

  }
  return (
    <nav className={`container ${sticky ? 'dark-nav':''} `}>
       <img src={logo} className='logo'></img>
        <ul className={mobilemenu?'':'hide-mobile-menu'}>
            <li>Home</li>
            <li>About Us</li>
            <li>Program</li>
            <li>Campus</li>
            <li>Testimonial</li>
            <li><button className='btn'>Contact Us</button></li>
        </ul>
        <i className="fa fa-bars" id="menu" onClick={toggle}></i>
    </nav>
  )
}

export default Navbar
