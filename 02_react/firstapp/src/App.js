import { Route, Routes } from "react-router-dom";
import Cards from "./components/card/Cards";
import ProductDetails from "./pages/ProductDetails";
// import UseState from "./Hooks/useState/Index";
// import BgColorChange from "./Hooks/useState/bgColor";
import Header from "./components/Header/Header";


function App() {
  return (
    <>
    <Header/>
      <Routes>
        <Route path="/" element={<Cards/>}/>
        <Route path="product-details/:id" element={<ProductDetails/>}/>
      </Routes> 
      {/* <UseState/>

      {/* <BgColorChange/> */}
    </>
  );
}

export default App;



