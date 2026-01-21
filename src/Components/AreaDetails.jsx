import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import MealCardSkeleton from './MealCardSkeleton';

export default function AreaDetails() {
    const { ar } = useParams();
    const [arDetails, setArDetails] = useState()
    async function areaDetails(ar) {
        const { data } = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${ar}`);
        setArDetails(data.meals)
    }
    useEffect(() => {
        areaDetails(ar)
    }, [])
    if (!arDetails) {
        return <>
            <div className="grid md:grid-cols-4 gap-10">
                <div className="md:col-span-1">
                    <MealCardSkeleton />

                </div>
                <div className="md:col-span-1">
                    <MealCardSkeleton />

                </div>
                <div className="md:col-span-1">
                    <MealCardSkeleton />

                </div>
                <div className="md:col-span-1">
                    <MealCardSkeleton />

                </div>
            </div>

        </>
    }

    return <>

        <section className=' bg-[#F4F2EE] p-10'>

            <div className="container my-10">
                <div className="cards grid sm:grid-cols-12  gap-8">
                    {
                        arDetails && arDetails.map((rec) => <>

                            <div className="meal-img hover:shadow-xl sm:col-span-12 md:col-span-6 lg:col-span-3 bg-white items-center  rounded-4xl p-4 group hover:scale-105 transition-all duration-300 mt-12">
                                <img src={rec.strMealThumb} className=' size-56 rounded-full m-auto -translate-y-20 shadow-2xl drop-shadow-2xl group-hover:rotate-360 duration-700 transition-all ' alt="" />

                                <div className="card-content flex flex-col items-center gap-4 -translate-y-5">
                                    <h2 className='font-semibold -mt-12 text-xl'>
                                        {rec.strMeal}
                                    </h2>

                                </div>

                            </div>
                        </>)
                    }
                </div>
            </div>
        </section>
    </>
}
