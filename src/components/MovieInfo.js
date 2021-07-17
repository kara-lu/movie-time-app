import React, { useState, useEffect } from 'react'; 
import axios from 'axios';
import FavButton from '../utility/FavButton';
import emptyPoster from '../img/emptyPoster.jpg';

function MovieInfo({movieId, movieObj}) {
    const IMG_URL = "https://image.tmdb.org/t/p/w500";
    const [crew, setCrew] = useState(null);
    const [producer, setProducer] = useState(null);
    const [director, setDirector] = useState(null);
    const [story, setStory] = useState(null);
    // get crew info
    useEffect(()=>{
        const fetchCrew = async () => {
        const getCrew = await axios(`https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=4d16bd4c046a5183e9cca972ca5ace75`);
        setCrew(getCrew.data.crew);
        setProducer(getCrew.data.crew.find((obj) => (obj.job === 'Producer' || obj.job === 'Executive Producer') ));
        setDirector(getCrew.data.crew.find((obj) => obj.job === 'Director'));
        setStory(getCrew.data.crew.find((obj) => (obj.job === 'Story' || obj.job === 'Screenplay' || obj.job === 'Writer') ));
        }
        fetchCrew();
    }, [movieId]);

    return (
        <article className='movieInfo'>
            {(movieObj !== null) &&
                <>
                        <div className='moviePoster'>
                            {movieObj.poster_path !== null ?
                                <img src={IMG_URL + movieObj.poster_path} alt="movie poster" /> 
                                :
                                <img src={emptyPoster} alt="movie poster not avaliable yet" />
                            }
                             
                        </div>
                    <div className='right'>    
                        <div className='ratingContainer'>
                            <div className='rating'>
                                <h3>{movieObj.vote_average.toFixed(1)}</h3>
                            </div>
                            <FavButton movie={movieObj} />
                        </div>
                        
                        {movieObj.title.length < 22 ?
                            <h1>{movieObj.title}</h1>
                            :
                            <h1 style={{fontSize: '1.75rem'}}>{movieObj.title}</h1>
                        }

                        <p className='releaseDate'>{movieObj.release_date}</p>
                        <h3>Overview</h3>
                        {(movieObj.overview === "" || movieObj.overview === null) ?
                            <p className='overview'>{"Movie overview coming soon..."}</p>
                            :
                            <p className='overview'>{movieObj.overview}</p>
                        }

                        {(crew !== null && crew.length > 2) &&
                            <div className='castContainer'>
                                {(producer !== null && producer !== undefined) &&
                                    <div className='castBox'>
                                        <h4>{producer.job}</h4>
                                        <p>{producer.name}</p>
                                    </div>
                                }
                                {(director !== null && director !== undefined) &&
                                    <div className='castBox'>
                                        <h4>{director.job}</h4>
                                        <p>{director.name}</p>
                                    </div>
                                }
                                {(story !== null && story !== undefined) &&
                                    <div className='castBox'>
                                        <h4>{story.job}</h4>
                                        <p>{story.name}</p>
                                    </div>
                                }
                            </div>
                        }
                    </div>
                       
                </>
            }
        </article>
    )
}

export default MovieInfo