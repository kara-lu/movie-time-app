import { useState, useEffect } from 'react'; 
import siteLogo from '../img/logo.jpg';
import {NavLink, useLocation } from 'react-router-dom';
import { Twirl as Hamburger } from 'hamburger-react'
import searchIcon from '../img/search.png';
import { useMediaQuery } from 'react-responsive'

function Header() {
    const [isOpen, setOpen] = useState(false)
    const isTablet = useMediaQuery({ query: '(max-width: 840px)' });
    let location = useLocation();
    
    useEffect(()=>{
        if(isTablet){
            setOpen(false);
        }
    },[isTablet]);

    function closeMenu(){
        setOpen(false);
    }
    

    return (
        <header>
            <div className='headerContainer'>
                <div className='logoContainer'>
                <NavLink to="/" onClick={closeMenu}>
                    <img src={siteLogo} alt="site logo"/>
                </NavLink>
                </div>
                <Hamburger toggled={isOpen} toggle={setOpen} />
                <nav className={isOpen ? 'site-navigation on slide-in-right' :  'site-navigation' } onClick={closeMenu}>
                    <ul className="nav-menu" id="header-menu">
                        <li><NavLink to="/" exact isActive={() => location.pathname === "/" || location.pathname === "/sort/popular" || location.pathname === '/sort/top-rated' || location.pathname === '/sort/now-playing' || location.pathname === '/sort/upcoming'}>Home</NavLink></li>
                        <li><NavLink to="/about">About</NavLink></li>
                        <li><NavLink to="/favorite">Favorite</NavLink></li>
                        <li><NavLink to="/search"><img src={searchIcon} alt="search inco" /></NavLink></li>
                        
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header
