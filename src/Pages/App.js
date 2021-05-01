import Header1 from '../Components/Header1'
import Caruosel from '../Components/Caruosel'
import Product1 from '../Components/product1'
import Gender from '../Components/Gender'
function App() {
  return (
    <div className="App">
      <Header1/>
      <Caruosel/>
      <Product1/>
      <Gender title="women"/>
      <Gender title="men"/>
    </div>
  );
}

export default App;
