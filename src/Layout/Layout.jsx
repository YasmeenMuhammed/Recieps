import React, { useState } from 'react'
import NavBar from './../Components/NavBar';
import { Outlet } from 'react-router-dom';
import Footer from './../Components/Footer';


export default function Layout() {



    return <>
  
 
        <div className="grid grid-cols-12 ">

            <div className={` col-span-2 z-50 `}
               
            >
                <NavBar />



            </div>
            <div className=" col-span-12 md:col-span-10 bg-[#F4F2EE] flex flex-col pt-10 px-3">
                <div className="min-h-screen">
                <Outlet />

                </div>
            </div>

            <div className="footer z-60 bg-white py-10  col-span-12 ">
                <Footer />
            </div>
        </div>


    </>
}
