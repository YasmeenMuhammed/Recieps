import React from 'react'
import { IoEarthOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';


export default function Card({ meal }) {
    const { idMeal, strMeal, strArea, strMealThumb: mealImg } = meal;
    return <>
        <div className="meal-card hover:shadow-xl sm:col-span-12 md:col-span-6 lg:col-span-3 bg-white items-center  rounded-4xl p-4 group hover:scale-105 transition-all duration-300 mt-12">
            <div className="-translate-y-20">
            <img src={mealImg} className='meal-img size-45 rounded-full m-auto shadow-2xl drop-shadow-2xl duration-700 transition-transform' alt="" />
            </div>

            <div className="card-content flex flex-col items-center gap-4 -translate-y-5">
                <h2 className='font-semibold -mt-12 text-xl'>
                    {strMeal}
                </h2>
                <span className='flex gap-2 items-center text-[#059669] text-xl'>
                    {strArea && <>  <IoEarthOutline />

                    {strArea}</> }
                  
                </span>
                <Link to={`/mealdetails/${idMeal}`}>
                    <button className='px-4 bg-[#059669] py-2 rounded-3xl font-semibold text-white cursor-pointer border-none text-xl'>
                        View Reciepe
                    </button>
                </Link>

            </div>

        </div>
    </>
}
