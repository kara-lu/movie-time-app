import React, { useState, useEffect } from 'react'; 
import useGlobal from '../store/globalAppState';
import MovieBox from '../components/MovieBox';
import plus from '../img/plus.png';
import { appTitle } from '../globals/globalVariables';

function Favorite() {
    const[globalState] = useGlobal();
    const [favouriteMovie, setFavouriteMovie] = useState(null);

    useEffect(() => {
		document.title = `${appTitle} - Favorite`;
	}, []);

    useEffect(()=>{
        setFavouriteMovie(globalState.favs);
    }, [globalState.favs]);

    return (
        <>
        {favouriteMovie !== null &&
            <main className='favPage infoWraper'>
                <div id='favTitle'>
                    <h1>Favorite</h1>
                </div>
                
                {favouriteMovie.length > 0 ?
                    <section className='movies'>
                        {favouriteMovie.map(movie => (
                                <MovieBox key={movie.id} movie={movie} favPage={'true'}></MovieBox>
                        ))}
                    </section>
                    :
                    <section id='favNotes'>
                        <p>Add movie to your favorite by click the </p>
                        <img src={plus} alt="add to favorite icon"/>
                    </section>
                }
            </main>
        }  
        </> 
    )
}

export default Favorite
