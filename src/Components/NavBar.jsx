import React, { useState } from 'react'
import logo from "../../src/assets/logo-BfNap0Pe.png"
import { GiMeal } from "react-icons/gi";
import { NavLink } from 'react-router-dom';
import { IoMdMenu } from "react-icons/io";


export default function NavBar() {
    const [isOpen, setIsOpen] = useState(false);

    return <>
      <button onClick={() => setIsOpen(!isOpen)} className=' border-2 border-[#059669] rounded-2xl text-[#059669] cursor-pointer text-5xl m-4 md:hidden fixed top-0 left-0 '>
                <IoMdMenu />
            </button>
            {isOpen && <> <div className='bg-black/15 fixed inset-0' onClick={()=>{setIsOpen(false)}}>
   
            </div>
                </>}


        <nav className={` bg-white h-screen fixed top-0 left-0 bottom-0 md:translate-x-0 -translate-x-100 ${isOpen ?'translate-x-0 w-65'  :'-translate-x-100'   } transition-transform duration-300`}>
      
            <div className="nav-logo w-70 p-7">
                <img src={logo} alt="" className='w-full' />
            </div>
            <div className="nav-list">
                <ul>
                    <NavLink to={'/'}>
                        <li className='text-black border cursor-pointer my-4 transition-all duration-300 border-gray-300 flex items-center gap-2 py-2 px-4 m-3 rounded-xl hover:scale-105 hover:shadow-2xl hover:shadow-orange-50 z-50 ' >
                            <GiMeal style={{ fontSize: '30px' }} />
                            <span className='text-2xl font-bold'>Meals</span>
                        </li>
                    </NavLink>
                    <NavLink to={'/ingredients'}>
                        <li className='text-black border cursor-pointer my-4 border-gray-300 flex items-center gap-2 py-2 px-4 m-3 transition-all duration-300 rounded-xl hover:scale-105 hover:shadow-2xl hover:shadow-orange-50  ' >
                            <GiMeal style={{ fontSize: '30px' }} />
                            <span className='text-2xl font-bold'>Ingredients</span>
                        </li>
                    </NavLink>
                    <NavLink to={'/area'}>
                        <li className='text-black border cursor-pointer my-4 border-gray-300 flex items-center gap-2 py-2 px-4 m-3  transition-all duration-300 rounded-xl hover:scale-105 hover:shadow-2xl hover:shadow-orange-50  ' >
                            <GiMeal style={{ fontSize: '30px' }} />
                            <span className='text-2xl font-bold'>Area</span>
                        </li>
                    </NavLink>


                </ul>
            </div>
        </nav>







    </>
}
