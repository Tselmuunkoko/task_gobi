import './Caruosel.css';
import Header2 from './Header2'
import car1 from '../images/carousel1.png'
function Caruosel() {
    return (
        <div className="Caruosel">
           <div className="Caruosel-container">
                <img src={car1} width="100%"></img>
           </div>
           <div className="Sale">
               Sale 60%
           </div>
           <Header2/>
        </div>
    );
}

export default Caruosel;
