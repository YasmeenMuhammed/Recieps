import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Card from './../Components/Card';
import MealCardSkeleton from '../Components/MealCardSkeleton';


export default function Categories() {

  const { category } = useParams();
  const [meals, setMealCateogry] = useState(null);

  async function getMealCategory(category) {
    const { data } = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`);
    console.log(data.meals);
    setMealCateogry(data.meals);

  }


  useEffect(() => {
    getMealCategory(category);
  }, [category])

  if (!meals) {
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


    {
      meals &&
      <section className=' bg-[#F4F2EE]'>


        <div className="container my-10">
          <div className="cards grid sm:grid-cols-12  gap-8">
            {meals && meals.map((meal) => <Card key={meal.idMeal} meal={meal} />)}
          </div>
        </div>
      </section>

    }



  </>
}
