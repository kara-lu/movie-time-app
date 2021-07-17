import {useState} from 'react'
import {NavLink, useLocation, Redirect } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive'
function Filter({ reSet }) {

    let location = useLocation();
    const [redirect, setRedirect] = useState(false);
    const isMobile = useMediaQuery({ query: '(max-width: 840px)' });

    function onChange(e){
        e.preventDefault();
        setRedirect(e.target.value)
    }

    return (
        
        <div className='filter'>
            {redirect !== false && <Redirect to={redirect} />}
            {isMobile ?
                <form className='mobileFilterContainer'>
                    <select onChange = {onChange} name="filter" id="filter">
                        <option value='/sort/popular'>Popular</option>
                        <option value='/sort/top-rated'>Top Rated</option>
                        <option value='/sort/now-playing'>Now Playing</option>
                        <option value='/sort/upcoming'>Upcoming</option>
                    </select>
                </form>
                :
                <ul className='filterInner'>
                    <li onClick={reSet}><NavLink to='/sort/popular' isActive={() => location.pathname === "/" || location.pathname === "/sort/popular"}>
                        Popular
                    </NavLink></li>
                    <li onClick={reSet}><NavLink to='/sort/top-rated'>Top Rated</NavLink></li>
                    <li onClick={reSet}><NavLink to='/sort/now-playing'>Now Playing</NavLink></li>
                    <li onClick={reSet}><NavLink to='/sort/upcoming'>Upcoming</NavLink></li>
                </ul>
            }
        </div>
    )
}

export default Filter
