import './product1.css';
import car1 from '../images/carousel1.png'
import small1 from '../images/small1.png'
import small2 from '../images/small2.png'
function Product1() {
    return (
        <div className="Product1">
            
            <div className="imgbox">
                <div className="img-container">
                    <div className="big">
                        <img src={car1}></img>
                    </div>
                    <div className = "small">
                        <img src={small2} className="small1"></img>
                        <img src={small1} className="small2"></img>
                    </div>
                </div>
               <div className="lorem-2"><p>Infusion of summer pieces and cashmere silk blends.</p></div>
            </div>
            <div className="intro">
                <p className="winter">WINTER SPICE 2020</p>
                <p className="lorem">Infusion of summer pieces and cashmere silk blends.</p>
                <button className="shop-2">SHOP NOW</button>
            </div>
        </div>
    );
}

export default Product1;
