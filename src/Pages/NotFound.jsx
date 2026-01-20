import React from 'react'
import error from '../assets/E-Commerce-404-Page-Facebook.webp'
import { useNavigate } from 'react-router-dom';

export default function NotFound() {
    const navigate = useNavigate();
  return <>
  <div
      className="fixed inset-0 bg-cover bg-center bg-no-repeat flex justify-center items-center"
      style={{ backgroundImage: `url(${error})` }}
    >
        <button className='text-2xl border-2 px-4 py-2 text-white rounded-2xl cursor-pointer translate-y-50' onClick={()=>navigate('/')}>
            Go To Home
        </button>
    </div>
  </>
}
