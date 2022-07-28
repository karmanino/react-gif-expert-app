   export const getGif = async( category ) => {

        const URL = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=MfW8JvEbJa7UIc8qOwEZ9ekIbsGntaWg`;
        const resp = await fetch(URL);
        const {data}= await resp.json();
        const gifs = data.map( img => {
            return {
             id: img.id,
             title: img.title,
             url: img.images?.downsized_medium.url   
            }  
        })
        return gifs;
    }

    export default getGif;

