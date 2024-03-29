import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({category}) => {

 
    const {data:images, loading} = useFetchGifs(category);



    return (
        <>
        <h3 className="animate__animated animate__flash">{category}</h3>

        {loading && <p> loading</p>}

       {  <div className="card-grid">   
                {
                    images.map( ( img ) => ( 
                        <GifGridItem 
                        {...img}
                        key={img.id}
                        />
                    )
                    )
                }

        </div> }
        </>
    )
}
