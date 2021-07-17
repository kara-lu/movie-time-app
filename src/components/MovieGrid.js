import { useState, useEffect } from 'react'; 
import { useLocation } from 'react-router-dom';
import MovieBox from './MovieBox';
import MoreButton from '../utility/MoreButton';
import axios from 'axios';
import loading from '../img/loading-blue.gif';

const MovieGrid = ({ sort, curPage, reSet, getMoreMovie }) => {
    const API_KEY = "api_key=4d16bd4c046a5183e9cca972ca5ace75";
    const BASE_URL = "https://api.themoviedb.org/3";
    const [movies, setMovies] = useState([]);
    const [priviousPage, setPriviousPage] = useState("");
    let currentPage  = useLocation();

    useEffect(()=>{
        const fetchItems = async () => {
            if(currentPage.pathname !== priviousPage.pathname){
                if(currentPage.pathname==='/'){
                    reSet();
                    const result = await axios(BASE_URL + sort + `page=1&` + API_KEY);
                    setMovies(result.data.results);
                    setPriviousPage(currentPage);
                }else{
                const result = await axios(BASE_URL + sort + `page=${curPage}&` + API_KEY);
                setMovies(result.data.results);
                setPriviousPage(currentPage);
                }
            }else{
                const result = await axios(BASE_URL + sort + `page=${curPage}&` + API_KEY);
                const movieResults = [...movies, ...result.data.results];
                setMovies(movieResults);
                setPriviousPage(currentPage);
            }
        }
      fetchItems();
    }, [curPage, sort]);// eslint-disable-line

    return (
        <>
        {(movies !== null && movies.length > 0) ?
        <>
            <section className='movies'>
                {movies.map(movie => (
                        <MovieBox key={movie.id} movie={movie} favPage={'false'}></MovieBox>
                ))}
            </section>
            {(curPage < 6) &&
                <MoreButton getMoreMovie={getMoreMovie}/>  
            }
        </>
        :
            <section>
                    <img id='loading' src={loading} alt="loading content"/>
            </section>
        }
       
        </>
    );
}

export default MovieGrid
