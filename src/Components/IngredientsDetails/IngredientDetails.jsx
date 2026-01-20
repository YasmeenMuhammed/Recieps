import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import MealDetailsSkeleton from '../MealDetailsSkeleton';
import MealCardSkeleton from '../MealCardSkeleton';

export default function IngredientDetails() {
    const { ing } = useParams();
    const [ingMeals, setIngMeals] = useState(null)




    async function getIngredientDetails(ing) {
        const { data } = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ing}`);
        console.log(data.meals);
        setIngMeals(data.meals)

    }
    useEffect(() => {
        getIngredientDetails(ing);
    }, [ing])

    if (!ingMeals) {
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
                        ingMeals && ingMeals.map((ingMeal) => <>

                            <div className="card  hover:shadow-xl sm:col-span-12 md:col-span-6 lg:col-span-3 bg-white items-center  rounded-4xl p-4 group hover:scale-105 transition-all duration-300 mt-12">
                                <img src={ingMeal.strMealThumb} className=' size-56 rounded-full m-auto -translate-y-20 shadow-2xl drop-shadow-2xl group-hover:rotate-360 duration-700 transition-all ' alt="" />

                                <div className="card-content flex flex-col items-center gap-4 -translate-y-5">
                                    <h2 className='font-semibold -mt-12 text-xl'>
                                        {ingMeal.strMeal}
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
