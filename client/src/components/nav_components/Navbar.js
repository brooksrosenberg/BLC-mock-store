import React from 'react'
import './Navbar.css'

function Navbar() {
  return (
    <div className='navbar__section'>
        <div className='nav__selection'>

        <div className="nav__option">
          <span className="option__line">Home</span>
        </div>

        <div className="nav__option">
          <span className="option__line">Clothes</span>
        </div>

        <div className="nav__option">
          <span className="option__line">Gear</span>
        </div>
        
        <div className="nav__option">
          <span className="option__line">Flies/Fly Bundles</span>
        </div>


        <div className="nav__option">
          <span className="option__line">Blog</span>
        </div>

        <div className="nav__option">
          <span className="option__line">About Us/Contact Us</span>
        </div>

        <div className="nav__option">
          <span className="option__line">Tip Jar</span>
        </div>

        </div>
    </div>
  )
}

export default Navbar