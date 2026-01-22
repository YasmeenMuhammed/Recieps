import React, { useEffect , useState} from 'react'

import axios from 'axios';
import Card from './../Components/Card';
import MealCardSkeleton from './../Components/MealCardSkeleton';


export default function Category() {

 const[meals , setMeals] =  useState(null);



async function getAllMeals(){
  const {data} =  await axios.get('https://www.themealdb.com/api/json/v1/1/search.php?s=');
  console.log(data);
  setMeals(data.meals)
  

}



useEffect(()=>{getAllMeals();
} ,[]) 

if(!meals){
  return  <>
  <div className="grid md:grid-cols-4 gap-10 mt-4">
    <div className="md:col-span-1">
  <MealCardSkeleton/>

    </div>
        <div className="md:col-span-1">
  <MealCardSkeleton/>

    </div>
        <div className="md:col-span-1">
  <MealCardSkeleton/>

    </div>
        <div className="md:col-span-1">
  <MealCardSkeleton/>

    </div>
  </div>
  
  </>
}

  return <> 

    <section className=' bg-[#F4F2EE]'>

      <div className="container my-10 px-4 ">
        <div className="cards grid sm:grid-cols-12  gap-8">
          {meals && meals.map((meal)=><Card key={meal.idMeal } meal={meal}/>)}
        </div>
      </div>
    </section>


  </>
}
