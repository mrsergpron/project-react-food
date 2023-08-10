import {Link} from 'react-router-dom'
function Meal (props){


    return (
    <div className="card">
        <div>{props.idMeal}</div>
        <div className="category">{props.strMeal}</div>
        <div><img src={props.strMealThumb} alt={props.strMeal} /></div>
        <button><Link to={`meal/${props.idMeal}`}>Look recipe</Link></button>
    
    </div>
    )
}

export {Meal}
