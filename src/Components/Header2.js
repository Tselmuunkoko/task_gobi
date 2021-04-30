import './Header2.css';
import logo from '../images/govi-logo.png'
import stop_icon from '../images/icons/stop.png'
import favor_icon from '../images/icons/favorite.png'
import bag_icon from '../images/icons/bag.png'
function Header2() {
    return (
        <div className="Header_Menu">
            <div className="Menu">
                <ul>
                    <li>Women</li>
                    <li>Men</li>
                    <li>Home</li>
                    <li>Accessories</li>
                    <li>Organic</li>
                </ul>
            </div>
           <div className="Govi-logo">
            <img src={logo} width='85px' height='35px'></img>
           </div>
            <div className="search-box">
                <div className="search">Search <img src={stop_icon} width='30px'></img></div>
            </div>
            <div>
                <img src={favor_icon} width='30px' ></img>
                <img src={bag_icon} width='30px'></img>
            </div>
        </div>
    );
}

export default Header2;
