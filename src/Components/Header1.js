import './Header1.css';
import globe from '../images/icons/globe.png';
function Header1() {
    return (
        <div className="Header_lang">
            <div className="Lang">
                  Global-English
            </div>
            <div className="Order">
                RETURNING AN ORDER? <a href="#">Click for more info</a>
            </div>
            <div className="Logsign">
                <div> SIGN IN</div>
                <div> SIGN UP</div>
            </div>
        </div>
    );
}

export default Header1;
