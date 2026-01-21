import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { MdPlace } from "react-icons/md";
import { Link } from 'react-router-dom';
import MealCardSkeleton from '../Components/MealCardSkeleton';


export default function Area() {

  const [area, setArea] = useState();

  async function getArea() {
    const { data } = await axios.get('https://www.themealdb.com/api/json/v1/1/list.php?a=list');
    console.log(data.meals);
    setArea(data.meals)
  }

  useEffect(() => { getArea() }, []);
  if (!area) {
    return <>
      <div className="grid md:grid-cols-4 gap-12 p-10">
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
          {area && area.map((area) => <>


            <div className="meal-img hover:shadow-xl sm:col-span-12 md:col-span-6 lg:col-span-3 bg-white items-center  rounded-4xl p-4 group hover:scale-105 transition-all duration-300 mt-12">
              <MdPlace className='bg-white text-[#059669] size-30 rounded-full m-auto -translate-y-20 shadow-2xl drop-shadow-2xl duration-700 transition-all ' />


              <div className="card-content flex flex-col items-center gap-4 -translate-y-5">
                <h2 className='font-semibold -mt-12 text-xl'>
                  {area.strArea}
                </h2>

                <Link to={`/areaDetails/${area.strArea}`}>
                  <button className='px-4 bg-[#059669] py-2 rounded-3xl font-semibold text-white cursor-pointer border-none text-xl'>
                    View Area Recieps
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
