import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import {Routes,Route} from 'react-router-dom'
import Cart from "./components/cart/Cart";
function App() {
  return (
    
    <>
      <Header/>
      <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/cart"element={<Cart/>}/>
      </Routes>
     
    </>
  );
}

export default App;
