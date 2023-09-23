import { Route, Routes } from "react-router-dom";
import Cards from "./components/card/Cards";
import ProductDetails from "./pages/ProductDetails";


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Cards/>}/>
        <Route path="product-details/:id" element={<ProductDetails/>}/>
        
      </Routes>
    </>
  );
}

export default App;



