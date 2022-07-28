import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

    const [categories,setCategories] = useState(['The Office']);

    return(
        <>
        <h2>Gif Fetch App</h2><span>| Simple app made with React to fetch gifs online</span>

        <AddCategory setCategories={setCategories} />

        <hr />
            { 
                categories.map( category => {
                        return <GifGrid category={category} key={category}/>
                })
            }
            <footer>Made by Juan José Armanino | <a href='http://armanino.dev'>armanino.dev</a></footer>
        </>
        
    );

};