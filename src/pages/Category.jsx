import {useState, useEffect} from 'react';
import {useParams, useNavigate} from 'react-router-dom';
import {getFilteredCategory} from '../api.js'
import {MealList} from '../components/MealList'
import {Preloader} from '../components/Preloader'

function Category (){

    const [meals, setMeals] = useState([])
    const catName = useParams()
    const navigate= useNavigate()
   

useEffect(()=>{
    getFilteredCategory(catName.name).then((data)=>setMeals(data.meals)) 
       
}, [])
    return(
    <>
     <button onClick={()=>navigate(-1)}>Back</button>
    <h1>{`Category ${catName.name}:`}</h1>
     {!meals.length ? <Preloader /> : <MealList meals={meals}/>}
    </>
    )
}

export {Category}