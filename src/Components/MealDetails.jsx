import React, { useEffect, useState } from 'react'
import logo from '../assets/logo-BfNap0Pe.png'
import { FaYoutube } from "react-icons/fa";
import { IoEarthOutline } from "react-icons/io5";
import axios from 'axios';
import { useParams } from 'react-router-dom';
import MealDetailsSkeleton from './MealDetailsSkeleton';



export default function MealDetails() {
    const { id } = useParams();

    console.log(id);
    const [mealD, setMealD] = useState(null);



    async function getMealDetails(id) {

        const { data } = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
        console.log(data.meals);
        setMealD(data.meals[0]);

    }

    useEffect(() => {
        getMealDetails(id);
    }, [id])
    
    if (!mealD) {
  return <MealDetailsSkeleton/>
}


        const ingredients = [];

for (let i = 1; i <= 20; i++) {
  const ingredient = mealD[`strIngredient${i}`];
  const measure = mealD[`strMeasure${i}`];

  if (ingredient && ingredient.trim() !== "") {
    ingredients.push({
      ingredient,
      measure
    });
  }
}

    return <>
        {mealD && <div className="container p-10">
            <div className="flex  flex-wrap">
                <div className="lg:w-1/3 ">
                    <div className="first-content">
                        <h1 className='text-5xl mb-4'>{mealD.strMeal}</h1>
                        <div className="meal-img ">
                            <img src={mealD.strMealThumb} alt="" className='rounded-2xl' />
                        </div>
                        <div className="btns flex justify-center gap-4 mt-5">
                            <a href={mealD.strYoutube} target="_blank" rel="noopener noreferrer">

                                <button className='bg-red-600 text-white py-2 px-4 rounded-lg flex items-center gap-4 text-xl cursor-pointer'>

                                    <FaYoutube />

                                    <span>youtube</span>  </button>
                            </a>

                            <a href={mealD.strSource} target="_blank" rel="noopener noreferrer">
                                <button className='bg-green-400 text-white py-2 px-4 rounded-lg flex items-center gap-4 text-xl cursor-pointer'>
                                    <IoEarthOutline />

                                    <span>Source</span> </button>
                            </a>

                        </div>
                    </div>
                </div>
                <div className="lg:w-1/3 p-5 pt-15">
                    <p className='text-xl'>
                        {mealD.strInstructions}
                    </p>
                </div>


                
                <div className="lg:w-1/3 px-3">
                    <div className="div  bg-white rounded-2xl p-4">
                        <h3 className='text-2xl font-semibold mb-4 border-b-4 p-2 border-gray-300 l'>Ingredients</h3>
 {ingredients?.map((item, index) => (
    <div
      key={index}
      className="flex justify-between p-2 border-b-2 border-gray-300 last-of-type:border-b-0 text-2xl"
    >
        {item.ingredient &&  <span>{item?.ingredient}</span>   }
        {item.measure &&  <span>{item?.measure}</span>   }
      
      
    </div>
  ))}

                    </div>


                </div>

            </div>
        </div>}





    </>
}
