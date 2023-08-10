import {Link}  from 'react-router-dom'
import  '../index.css'

 function CategoryItem(props) {
    

return (
    <div className="card">
<div style={{textAlign:'left'}}>{props.idCategory}</div>
<div className="category">{props.strCategory}</div>
<div><img src={props.strCategoryThumb} alt={props.strCategory}/></div>
<div>{props.strCategoryDescription.slice(0,200)+'...'}</div>
<button><Link to={`category/${props.strCategory}`}>Look Category</Link></button>
    </div>
)
 }

 export { CategoryItem };
