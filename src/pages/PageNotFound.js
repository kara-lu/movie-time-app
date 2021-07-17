import {Link} from 'react-router-dom';
import { useEffect } from 'react';
import { appTitle } from '../globals/globalVariables';

function PageNotFound() {

	useEffect(() => {
		document.title = `${appTitle} - Page Not Found`;
	}, []);

    return (
        <main className='notFountPage infoWraper'>
            <h1>404 Page Not Found</h1>
            <div className='moreButtonContainer'>
                <Link to={'/'}><button>Go to Home Page</button></Link>
            </div>
        </main>
    )
}

export default PageNotFound
