import React, { useState, useEffect } from 'react'; 
import axios from 'axios';
import Slider from "react-slick";
import { useMediaQuery } from 'react-responsive'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import backdropComingSoon from '../img/backdrop-coming-soon.jpg';

function PhotoGallery({movieId}) {
    const IMG_URL = "https://image.tmdb.org/t/p/w500";
    const [images, setImages] = useState(null);
    const changeSlideDirection = useMediaQuery({ query: '(max-width: 1320px)' });
    const isTablet = useMediaQuery({ query: '(max-width: 840px)' });

    useEffect(()=>{
      const fetchImgItems = async () => {
        const imgGet = await axios(`https://api.themoviedb.org/3/movie/${movieId}/images?api_key=4d16bd4c046a5183e9cca972ca5ace75`);
        setImages(imgGet.data.backdrops);
      }
      fetchImgItems();
    },[movieId]);

    const renderSlides = () =>
    images.map((aImg,i) => (
        <div key={i} className="photoGallery">
            <img src={IMG_URL + (aImg).file_path} alt="backdrops" />
        </div>
    )); 


    return (
        <>
        {images !== null &&
            <div className="photoGalleryContainer">
                <h2>Media</h2>
                {(images !== null && images.length > 2) ? 
                    <>
                    {changeSlideDirection ? 
                        <Slider
                        dots={false}
                        infinite= {true}
                        slidesToShow={isTablet ? 1.1 : 2.1}
                        slidesToScroll={isTablet ? 1 : 2}
                        arrows={false}
                        autoplay={false}
                        autoplaySpeed={3000}
                        >
                            {renderSlides()}
                        </Slider>
                        :
                        <Slider
                            dots={false}
                            infinite= {true}
                            slidesToShow= {2.1}
                            slidesToScroll= {2}
                            vertical= {true}
                            verticalSwiping= {true}
                            beforeChange= {function(currentSlide, nextSlide) {
                                // console.log("before change", currentSlide, nextSlide)
                            }}
                            afterChange= {function(currentSlide) {
                                // console.log("after change", currentSlide)
                            }}
                        >
                            {renderSlides()}
                        </Slider>
                    }
                    </>
                    :
                    <>
                    <img src={backdropComingSoon} alt="backdrop coming soon" />
                    </>
                } 
            </div>  
        }
           </>
    )
}

export default PhotoGallery
