import Cards from "./component/Cards";

import Carousel from "./component/carousel/Carousel";
import Header from "./component/header/Header";
import NavData from "./component/header/NavData";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';

function App() {
  return (
    <div>
     <Header/>
     <NavData/>
     <Carousel/>
    
     
     <Cards/>
    </div>
  );
}

export default App;
