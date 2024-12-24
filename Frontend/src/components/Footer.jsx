import React from 'react'
import { NavLink } from 'react-router-dom'

// Icons
import { FaGithub } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io";
import { FaLinkedinIn } from "react-icons/fa";
function Footer() {
  return (
    <div>
      <hr />
      <footer className="footer footer-center   rounded p-10 bg-zinc-900  text-white">
        <nav className="grid grid-flow-col gap-4">
          <NavLink to='/about'>
            <a className="link link-hover">About Us</a>
          </NavLink>
          <NavLink to='/contact'>
            <a className="link link-hover">Contact Us</a>
          </NavLink>
        </nav>
        <nav>
          <div className="grid grid-flow-col gap-6">
            <a href='https://twitter.com/'>
              <IoLogoTwitter className='w-7 h-7 cursor-pointer object-contain transition-transform transform hover:scale-110' />
            </a>
            <a href='https://github.com/'>
              <FaGithub className='w-7 h-7 cursor-pointer object-contain transition-transform transform hover:scale-110 ' />
            </a>
            <a href='https://www.linkedin.com/in/sagar-khambe-b5443a313/'>
            <FaLinkedinIn className='w-7 h-7 cursor-pointer object-contain transition-transform transform hover:scale-110'/>
            </a>
          </div>
        </nav>
        <aside>
          <p>Copyright © {new Date().getFullYear()} - All right reserved by ACME Industries Ltd</p>
        </aside>
      </footer>
    </div>
  )
}

export default Footer