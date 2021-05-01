import './Header2.css';
import logo from '../images/icons/govi.png'
import stop_icon from '../images/icons/stop.png'
import favor_icon from '../images/icons/favorite.png'
import bag_icon from '../images/icons/bag.png'
import search_icon from '../images/icons/search.png'
import menu_icon from '../images/icons/Menu.png'
function Header2() {
    return (
        <div className="Header_Menu">
            <div className="little_menu">
                <img src={menu_icon} width="25vw" ></img>
                <img src={search_icon} width="25vw" ></img>
            </div>
            <div className="Menu">
                <ul>
                    <li><a href='#'>WOMEN</a></li>
                    <li><a href='#'>MEN</a></li>
                    <li><a href='#'>HOME</a></li>
                    <li><a href='#'>ACCESSORIES</a></li>
                    <li><a href='#'>ORGANIC</a></li>
                </ul>
            </div>
           <div className="Govi-logo">
            <img src={logo} width='60vw' height='30vw'></img>
           </div>
           <div className="search">
            <div className="search-box">
                    <input type="text" id="header-search" placeholder="Search" name="s" />
                    <img src={stop_icon} width="25vw" ></img>
            </div>
            <div className="bag_favor">
                <img src={favor_icon} width="25vw" ></img>
                <img src={bag_icon} width= "20vw"></img>
            </div>
            </div>
        </div>
    );
}

export default Header2;
