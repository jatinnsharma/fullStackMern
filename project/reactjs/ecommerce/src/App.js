
import ProductDetail from "./page/Product/ProductDetail";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./page/Home/Home";

function App() {
  return (

      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/product-details/:id" element={<ProductDetail />} />
      </Routes>
      </BrowserRouter>

  );
}

export default App;
