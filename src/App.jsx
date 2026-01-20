
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout/Layout.jsx'
import Category from './Pages/Category';
import Ingredients from './Pages/Ingredients.jsx';
import Area from './Pages/Area';
import MealDetails from './Components/MealDetails';
import Categories from './Pages/Categories';
import AreaDetails from './Components/AreaDetails';
import NotFound from './Pages/NotFound';
import IngredientDetails from './Components/IngredientsDetails/IngredientDetails';
import CategoriesList from './Components/CategoriesList/CategoriesList.jsx';

const routes = createBrowserRouter([{
  path:'/' , element:<Layout/> , children:[{
    path:'/' , element:<CategoriesList/>,children:[
      {index:true , element:<Category/>}, {
      path:'category/:category' , element:<Categories/>
    }
  ]
  }
,
,{path:'/ingredients' , element:<Ingredients/>},
{path:'/ingredientDetails/:ing' , element:<IngredientDetails/>},
{path:'/areaDetails/:ar' , element:<AreaDetails/>},
,{path:'/area' , element:<Area/>},
{path:'/mealdetails/:id' , element:<MealDetails/>},
]
} ,
{path:'*' , element:<NotFound/>}
])


function App() {
  return <>
  <RouterProvider router={routes}/>
  </>

}

export default App
