import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { appTitle } from '../globals/globalVariables';
import MovieInfo from '../components/MovieInfo';
import Provider from '../components/Provider';
import CastGallery from '../components/CastGallery';
import PhotoGallery from '../components/PhotoGallery';
import loading from '../img/loading-blue.gif';


function MoviePage() {

    let { movieId }  = useParams();
    const [movieObj, setMovieObj] = useState(null);

    useEffect(()=>{
        const fetchCastItems = async () => {
            const movieName = await axios(`https://api.themoviedb.org/3/movie/${movieId}?api_key=4d16bd4c046a5183e9cca972ca5ace75`);
            document.title = `${appTitle} - ${movieName.data.title}`;
            setMovieObj(movieName.data);
        }
        fetchCastItems();
    }, [movieId]);


    return (
        <main className='moviePage infoWraper'>
                <div className='leftGrid'>
                {movieObj !== null ?
                    <MovieInfo movieId={movieId} movieObj={movieObj}/>
                    :
                    <section>
                        <img id='loading' src={loading} alt="loading content"/>
                    </section>
                }
                <Provider movieId={movieId}/>
                <CastGallery movieId={movieId}/>
                </div>
                <div className='rightGrid'>
                <PhotoGallery movieId={movieId}/> 
                </div>
         
            
        </main>
    )
}

export default MoviePage
