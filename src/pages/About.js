import { useEffect } from 'react';
import { appTitle } from '../globals/globalVariables';

function About() {

	useEffect(() => {
		document.title = `${appTitle} - About`;
	}, []);

    return (
        <main className='about infoWraper'>
            <h1>About Us</h1>
            <p>Movie Time is the place to get all the latest info about all the movies you love. You can save the movies you like to your favourites and share with friends.</p>
            <div>
                <h2>This site is powered by TMDB and JustWatch</h2>
                <div className='referenceGrid'>
                    <img id='tmdb' src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg" alt="TMDB logo"/>
                    <img id='justwatch' src="https://www.themoviedb.org/assets/2/v4/logos/justwatch-c2e58adf5809b6871db650fb74b43db2b8f3637fe3709262572553fa056d8d0a.svg" alt="JustWatch logo"/>
                </div>
                
            </div>
        </main>
    )
}

export default About
