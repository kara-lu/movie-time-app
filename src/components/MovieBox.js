
import {Link} from 'react-router-dom';
import FavButton from '../utility/FavButton';
import emptyPoster from '../img/emptyPoster.jpg';

const MovieBox = ({ movie, favPage }) => {
    const IMG_URL = "https://image.tmdb.org/t/p/w500";



    return (
        <article className='movie'>
            <FavButton movie={movie} favPage={favPage}/>
            <div className='imgContainer'>
                {movie.poster_path !== null ?
                    <img src={IMG_URL + movie.poster_path} alt="movie poster" /> 
                    :
                    <img src={emptyPoster} alt="movie poster not avaliable yet" />
                }
                <div className="overlay">
                    <Link to={'/movie/' + movie.id}>
                        <div className="overlayInner">
                            {movie.overview.length < 300 ?
                            <>
                            {(movie.overview === "" || movie.overview === null) ?
                            <p className='overview'>{"Movie overview coming soon..."}</p>
                            :
                            <p className='overview'>{movie.overview}</p>
                            }
                            </>
                            :
                            <p className="overview">{`${movie.overview.substring(0, 280)}...`}</p>
                            }
                            <p className="moreInfo">more info...</p>
                        </div>
                    </Link>
                </div>
            </div>
            <Link to={'/movie/' + movie.id}>
            <div className='info'>
                <div className='infoInner'>
                    {movie.title.length < 22 ?
                     <h2>{movie.title}</h2>
                     :
                    <h2 style={{fontSize: '1rem'}}>{movie.title.length < 45 ?
                                                    movie.title
                                                    :
                                                    `${movie.title.substring(0, 45)}...`}

                    </h2>
                    }
                    <h3>{movie.release_date}</h3> 
                </div>
            </div>
            </Link>
            <div className='rating'>
                <h3>{movie.vote_average.toFixed(1)}</h3>
            </div>
        </article>
    )
}

export default MovieBox


