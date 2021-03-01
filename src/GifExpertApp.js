import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';
//import propTypes from 'prop-types';


const GifExpert = () => {
    
   // const categories = ['Soccer', 'Rugby', 'Basketball'];
    const [categories, setCategories] = useState(['Soccer']);
    
    // const handleAdd = () => {
    //     //setCategories([...categories, 'Cricket']);
    //     setCategories(cats => [...cats, 'Cricket']);
    // }
   


    return ( 
        <>

            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setCategories}/>           
            <hr />
            
            
            <ol>
                {
                    categories.map( category => 
                        <GifGrid 
                        key = {category}
                        category = {category}
                        />
                     )
                }
            </ol>
        </>   
    );
}

export default GifExpert;