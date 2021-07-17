import footerLogo from '../img/footer-logo.png';
import { appAuthor } from '../globals/globalVariables';

function Footer({yyyy}) {
    return (
        <footer>
            <div className='footerContainer'>
                <img src={footerLogo} alt="site logo" />
                <div className='footerTextContainer'>
                    <p>Movie Time {yyyy}</p>
                    <p>Created by: {appAuthor}</p>
                </div>
            </div>
            
        </footer>
    )
}

export default Footer
