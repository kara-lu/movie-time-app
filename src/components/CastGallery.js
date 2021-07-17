import React, { useState, useEffect } from 'react'; 
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import unknowCast from '../img/unknowCast.jpg';

import axios from 'axios';
import { useMediaQuery } from 'react-responsive';

function CastGallery({movieId}) {
    const IMG_URL = "https://image.tmdb.org/t/p/w300";
    const isMobile = useMediaQuery({ query: '(max-width: 840px)' });
    const [casts, setCasts] = useState(null);
    

    useEffect(()=>{
        const fetchCastItems = async () => {
            const getCast = await axios(`https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=4d16bd4c046a5183e9cca972ca5ace75`);
        
            let castData = getCast.data.cast;
            setCasts(castData);
        }
        fetchCastItems();
    }, [movieId]);

    const renderSlides = () =>
    casts.map((aCast,i) => (
        <div key={i} className='castBox'>
            {(aCast).profile_path === null ?
                <img src={unknowCast} alt="the cast with no headshot avaliable" />
                :
                <img src={IMG_URL + (aCast).profile_path} alt="the cast" />
            }
            
            <h3>{(aCast).name}</h3>
            <p>{(aCast).character}</p>
        </div>
    ));
   

    return (
        <>
        {(casts !== null && casts.length>0) && 
            <div className="castGalleryContainer">
                <h2>Cast</h2>
                <Slider
                    dots={false}
                    slidesToShow={isMobile ? 2.2 : 5.2}
                    slidesToScroll={isMobile ? 2 : 4}
                    arrows={false}
                    autoplay={false}
                    autoplaySpeed={3000}
                    infinite={false}
                >
                    {renderSlides()}
                </Slider>
            </div>
        }
        </>
    )
}

export default CastGallery
