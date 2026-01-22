
import React, { useEffect, useState } from 'react'
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function CategoriesList() {

    const [category, setCategory] = useState(null);
    const navigate = useNavigate();


    async function getAllCategoris() {
        const { data } = await axios.get('https://www.themealdb.com/api/json/v1/1/categories.php');
        console.log(data.categories);
        setCategory(data.categories);

    }

    useEffect(() => { getAllCategoris(); }
        , [])

    return <>
        <div className="title p-5">
            <h1 className=" ms-5 text-4xl font-bold 
    bg-linear-to-r from-[#F29724] via-[#C21807] to-[#ea4c3e] 
    bg-clip-text text-transparent py-2">
                Learn, Cook, Eat Your Food
            </h1>
        </div>


        <div className="md:hidden p-5">
            <select className='w-full border border-gray-300 rounded-xl p-3 text-lg' onChange={(e) => {
                const value = e.target.value;
                if (value === 'all') {
                    navigate('/')
                }
                else {
                    navigate(`/category/${value}`)
                }
            }}>
                <option  value='all'>All</option>
                {category && category.map((cat) => (
                    <option key={cat.strCategory} value={cat.strCategory}>{cat.strCategory}</option>
                ))}

            </select>

        </div>

        <div className=" list p-5 px-8">
            <ul className='hidden md:flex  gap-6 py-3 text-gray-400 flex-wrap gap  p-5 border-b border-b-gray-300 pb-7'>
                <li className='mt-4'>
                    <NavLink to={`/`} className={' mt-4 border px-4 py-2 transition-all hover:shadow-xl shadow duration-100 rounded-3xl text-lg border-gray-200 hover:bg-white'}>All</NavLink>
                </li>
                {category && category.map((category) => <>
                    <li className='mt-4'>
                        <NavLink to={`category/${category.strCategory}`} className={' mt-4 border px-4 py-2 transition-all hover:shadow-xl shadow duration-700 rounded-3xl text-lg border-gray-200 hover:bg-white'}>{category.strCategory}</NavLink>
                    </li>
                </>)}
            </ul>
            <div className="px-4">
            <Outlet />
            </div>

        </div>
    </>
}
