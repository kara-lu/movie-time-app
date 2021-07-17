import { useState, useEffect } from 'react'; 
import { appTitle } from '../globals/globalVariables';
import Filter from '../utility/Filter';
import MovieGrid from '../components/MovieGrid';

function Home({ sort }) {
    const [curPage, setCurPage] = useState(1);
    useEffect(() => {
		document.title = `${appTitle}`;
	}, []);

    let i = 1;

    // get the next page
    function getMoreMovie(){
        i=curPage;
        i++;
        setCurPage(i);
    }
    // reset page number and counter
    function reSet(){
        i=1;
        setCurPage(1);
    }


    return (
        <main className='homePage infoWraper'>
            <Filter reSet={reSet} />
            <MovieGrid sort={sort} curPage={curPage} reSet={reSet} getMoreMovie={getMoreMovie}/>
       </main>
    );
}

export default Home
