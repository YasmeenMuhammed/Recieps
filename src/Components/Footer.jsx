import React from 'react'
import logo from "../assets/logo-BfNap0Pe.png"
import { Link } from 'react-router-dom'

export default function Footer() {
  return <>
  <footer className='px-5 md:px-40 '>

  <div className="footer-1 sm:flex sm:justify-between sm:items-center px-3  border-b border-b-gray-500 py-2">
  <Link to={'/'}>
  <div className="flex items-center">

  <div className="footer-img w-25">
  <img src={logo} alt="" className='w-full' />
  </div>
  <span className='text-2xl font-semibold'>Recipe</span>
</div>
  </Link>
  <span className='text-blue-700 font-bold text-4xl ps-3'>Route</span>

  </div>
  <div className="footer2 text-center py-4 ps-2">
<p className='text-xl text-gray-500 py-7'>© 2025 Yasmeen Muhammed™. All Rights Reserved.</p>
  </div>
  
  </footer>
  
  
  </>
}
