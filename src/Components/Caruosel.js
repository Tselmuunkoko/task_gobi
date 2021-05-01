import './Caruosel.css';
import Header2 from './Header2'
import car1 from '../images/carousel1.png'
function Caruosel() {
    return (
        <div className="Caruosel">
            <div className="pos">
                <div className="Caruosel-container">
                        <img src={car1} width="100%"></img>
                </div>
                <div className="Sale-container">
                    <div className="summer-sale">  
                        <div className="summer">SUMMER</div>
                            <div className="sale">Sale</div>
                            <div className="off">
                            <div className="upto"><p>UPTO</p></div>
                            <div className="sixty"><p className="sixty_num">60</p><p className="sixty_per">%</p></div>
                                <div className="ff">FF</div>
                            </div>
                    </div>
                    <button className="shop">SHOP NOW</button>
                </div>
                <Header2/>
           </div>
        </div>
    );
}

export default Caruosel;
