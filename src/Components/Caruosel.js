import './Caruosel.css';
import Header2 from './Header2'
import car1 from '../images/carousel1.png'
function Caruosel() {
    return (
        <div className="Caruosel">
           <div className="Caruosel-container">
                <img src={car1} width="100%"></img>
           </div>
           <div className="Sale-container">
               <div className="summer">SUMMER</div>
               <div className="sale">Sale</div>
               <div className="off">
                   <div className="upto">upto</div>
                   <div className="sixty">60</div>
                   <div className="percent">%
                        <div className="ff">ff</div>
                    </div>
               </div>
               <button className="shop">SHOP NOW</button>
           </div>
           <Header2/>
        </div>
    );
}

export default Caruosel;
