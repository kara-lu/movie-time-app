import React, { useState, useEffect } from 'react'; 
import axios from 'axios';

function Provider({movieId}) {
    const ICON_URL = "https://image.tmdb.org/t/p/original";
    const [movie, setMovie] = useState(null);

    //get service provider for rent and streaming in Canada
    useEffect(()=>{
        const fetchProvidersItems = async () => {
        const getProviders = await axios(`https://api.themoviedb.org/3/movie/${movieId}/watch/providers?api_key=4d16bd4c046a5183e9cca972ca5ace75`);
        setMovie(getProviders.data.results);
        }
        fetchProvidersItems();
    },[movieId]);

    return (
        <>
         {(movie !== null && movie.hasOwnProperty('CA') !== false) &&    
            <article className='providers'>

                {(movie.CA !== null && movie.CA.hasOwnProperty('flatrate') !== false) && 
                    <div className='typeContainer'>
                        <h2>Streaming: </h2>
                        <div className='provider'>
                        {movie.CA.flatrate.map((aProvider,i) => (
                            <img key={i} src={ICON_URL + aProvider.logo_path} title={`${aProvider.provider_name}`} alt={`${aProvider.provider_name}`}/>
                        ))}
                        </div>
                    </div>
                }

                {(movie.CA !== null && movie.CA.hasOwnProperty('rent') !== false) && 
                    <div className='typeContainer'>
                        <h2>Rent it: </h2>
                        <div className='provider'>
                            {movie.CA.rent.map((aProvider,i) => (
                                <img key={i} src={ICON_URL + aProvider.logo_path} title={`${aProvider.provider_name}`} alt={`${aProvider.provider_name}`}/>
                            ))}
                        </div>
                    </div>
                }
                
                {(movie.CA !== null && movie.CA.hasOwnProperty('buy') !== false && movie.CA.hasOwnProperty('rent') === false) && 
                    <div className='typeContainer'>
                        <h2>Own it: </h2>
                        <div className='provider'>
                            {movie.CA.buy.map((aProvider,i) => (
                                <img key={i} src={ICON_URL + aProvider.logo_path} title={`${aProvider.provider_name}`} alt={`${aProvider.provider_name}`}/>
                            ))}
                        </div>
                    </div>
                }   
            </article>
            }
        </>
    )
}

export default Provider