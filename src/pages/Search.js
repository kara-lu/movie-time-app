import { useState, useEffect } from 'react'; 
import MovieBox from '../components/MovieBox';
import axios from 'axios';
import { appTitle } from '../globals/globalVariables';

function Search() {
    const [search, setSearch] = useState('');
    const [searchMovies, setSearchMovies] = useState([]);

    useEffect(() => {
		document.title = `${appTitle} - Search`;
        const input = document.querySelector("input");
        input.focus();
	}, []);

    useEffect(()=>{
        const fetchCastItems = async () => {
            if(search !== ''){
              const getSearch = await axios(`https://api.themoviedb.org/3/search/movie?api_key=4d16bd4c046a5183e9cca972ca5ace75&language=en-US&page=1&include_adult=false&query=${search}`);
            setSearchMovies(getSearch.data.results);  
            }else{
                setSearchMovies([]);
            }   
        }
        fetchCastItems();
    }, [search]);

    const onChange = (e) =>{
        e.preventDefault();
        setSearch(e.target.value);
    }


    return (
        <main className='searchPage infoWraper'>
            <div className='searchInput'>
                <input  type="text" 
                        placeholder='Type here to search...'
                        value={search}
                        onChange={onChange}
                />
            </div>

            {searchMovies.length > 0 &&
                <section className='movies'>
                    {searchMovies.map(movie => (
                            <MovieBox key={movie.id} movie={movie} favPage={'false'}></MovieBox>
                    ))}
                </section>
            }
        </main>
        
    )
}

export default Search
