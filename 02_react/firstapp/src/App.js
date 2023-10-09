import { Route, Routes } from "react-router-dom";
import Cards from "./components/card/Cards";
import ProductDetails from "./pages/ProductDetails";
// import UseState from "./Hooks/useState/Index";
// import BgColorChange from "./Hooks/useState/bgColor";
import Header from "./components/Header/Header";
import Context from "./Hooks/useContext/Context";
import Login from "./pages/Login";
import ApiContext from "./Hooks/useContext/apiFetch/ApiContext";
import Forms from "./forms/Forms";
import Reducer from "./Hooks/useReducer/Reducer";
import { MyContextProvider } from "./addTOList/MyContext";
import YourComponent from "./addTOList/YourComponents";
import Alert from "./tasks/alert/Alert";
import MainComponent from "./redux/MainComponent";
// import UseState from "./Hooks/useState/Index";
// import BgColorChange from "./Hooks/useState/bgColor";
// import Clock from "./Hooks/useState/clock/Index";
import AddToCard from './ReduxAddTOCart/Index'
import Index from "./ReduxAddTOCart/Index";
import ContextApiIndex from "./contextApi/Index";



function App() {
  return (
    <>
    {/* <Header/>
      <Routes>
        <Route path="/" element={<Cards/>}/>
        <Route path="product-details/:id" element={<ProductDetails/>}/>
      </Routes>  */}
      {/* <UseState/> */}

     {/* <BgColorChange/> */}

     {/* <Clock/> */}

     {/* <Context/> */}
      {/* <Login/> */}
      {/* <ApiContext/> */}
      {/* <Forms/> */}
      {/* <Reducer/> */}



    {/* <MyContextProvider>
      <div className="App">
        <YourComponent />
      </div>
    </MyContextProvider> */}



    {/* <Alert/>*/}

    {/* <MainComponent/> */}

    <AddToCard/>

    
    {/* <ContextApiIndex/> */}
    </>
  );
}

export default App;



