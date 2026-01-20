import axios from 'axios'
import React, { useEffect, useState } from 'react'

import { Link } from 'react-router-dom';
import MealCardSkeleton from '../Components/MealCardSkeleton';

export default function Ingredients() {

  const [ingredients, setIngredients] = useState(null);

  async function getIngredients() {
    const { data } = await axios.get(`https://www.themealdb.com/api/json/v1/1/list.php?i=list`);
    console.log(data);
    const ingredientsArray = data.meals.slice(0, 40);
    console.log(ingredientsArray);
    setIngredients(ingredientsArray)
  }

  useEffect(() => {
    getIngredients()
  }, [])

    if (!ingredients) {
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
          {ingredients && ingredients.map((ingredient) => <>



            <div className="card  hover:shadow-xl sm:col-span-12 md:col-span-6 lg:col-span-3 bg-white items-center  rounded-4xl p-4 group hover:scale-105 transition-all duration-300 mt-12">
              <img src={ingredient.strThumb} className='bg-white size-56 rounded-full m-auto -translate-y-20 shadow-2xl drop-shadow-2xl group-hover:rotate-360 duration-700 transition-all ' alt="" />

              <div className="card-content flex flex-col items-center gap-4 -translate-y-5">
                <h2 className='font-semibold -mt-12 text-xl'>
                  {ingredient.strIngredient}
                </h2>

                <Link to={`/ingredientDetails/${ingredient.strIngredient}`}>
                  <button className='px-4 bg-[#059669] py-2 rounded-3xl font-semibold text-white cursor-pointer border-none text-2xl'>
                    View Reciepe
                  </button>
                </Link>

              </div>

            </div>

          </>)}
        </div>
      </div>
    </section>





  </>

}
