import {useState, useEffect} from 'react'
import { useParams, useNavigate} from 'react-router-dom'
import { getMealById } from '../api'
import { Preloader } from '../components/Preloader'


function Recipe (){

    const [recipe, setRecipe] = useState({})
    const {id} = useParams()
    const navigate= useNavigate()


    useEffect(()=>{
        getMealById(id).then((data)=>setRecipe(data.meals[0]))
    }, [id])



    
    return (
        <>
   
        {!recipe ? <Preloader/> : 
        
        <div>
            <button onClick={()=>navigate(-1)}>Back</button>
              <h1>Recipe of {recipe.strMeal}</h1>
            
            <p><span>Category: </span>{recipe.strCategory}</p>
            <p><span>Area: </span> {recipe.strCategory}</p>
            <p><span>Category: </span> {recipe.strArea}</p>
            <img src={recipe.strMealThumb} alt={recipe.strMeal} />
        
            <p><span>Instructions: </span> {recipe.strInstructions}</p>

            <p><span>Video: </span></p>
            {console.log(recipe.strYoutube)}
            {recipe.strYoutube ?  
            <iframe width="330" height="200"
            title={id}
                src={recipe.strYoutube} frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen>
            </iframe> : ''}

            <p><a target="_blank" rel="noreferrer" href={recipe.strSource}>Visit website</a></p>
        </div>
        }
        </>
    )
}

export {Recipe}