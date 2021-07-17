import React, { useState, useEffect } from 'react'; 
import useGlobal from '../store/globalAppState';
import plus from '../img/plus.png';
import heart from '../img/heart.png';

function FavButton({ movie, favPage }) {
    // const globalStateAndglobalActions = useGlobal();
    // const globalActions = globalStateAndglobalActions[1];

    const[globalState, globalActions] = useGlobal();
    const [faved, setFaved] = useState(false);

    // const favouriteMovie = JSON.parse(localStorage.getItem('my-favs'));
    // const favouriteMovie = globalActions.getFavs();
    // console.log(favouriteMovie.length);
    // console.log(movie);
    // setFaved(favouriteMovie.findIndex((movieObj) => movieObj.id === movie.id));
    
    //array.some

    useEffect(()=>{
        if(favPage==='true'){
            setFaved(true);
        }
        else if (globalState.favs !== null){
            setFaved(globalState.favs.some((obj) => obj.id === movie.id));

        }
    }, [favPage, globalState.favs, movie.id]);



    function handleFavClick(addToFav, movie){
        if(addToFav === true){
            globalActions.addFav(movie);
        }else{
            globalActions.removeFav(movie.id);
        }   
    }
  


    function setFav(){
        if(faved){
            setFaved(false);
            handleFavClick(false, movie);
        }else{
            setFaved(true);
            handleFavClick(true, movie);
        }
    }
    return (
       <div className='fav' onClick={()=>setFav()}>
            {faved === false ? <img id='plus' className='scale-out-center' src={plus} alt="add to favorite icon"/> : <img id='heart' className='bounce-in-fwd'src={heart} alt="favorite icon"/>}
        </div>
    )
}

export default FavButton
