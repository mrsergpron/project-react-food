 import { useState, useEffect } from 'react';
import {  getAllCategories} from '../api.js';
import { Preloader } from '../components/Preloader';
import { CategoryList } from '../components/CategoryList';

function Home() {
const [catalog, setCatalog] = useState([])

useEffect(()=>{
    getAllCategories().then((data)=>setCatalog(data.categories))
},[])
 
    return (
    <> 
    <h1>Food:</h1>

    {!catalog.length ? <Preloader /> :
     <CategoryList catalog={catalog}/>}

    </>
    )
    

}
export { Home };
