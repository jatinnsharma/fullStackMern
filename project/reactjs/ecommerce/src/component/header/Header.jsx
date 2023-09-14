
const Header = () => {
    return (
      <div className="flex bg-blue-600 h-18 pt-3 font-medium  ">
          <div className="text-white text-2xl italic ml-32 ">Flipkart</div>
          <div>

              <input className=" mx-5 w-30 h-9 pl-3 rounded-sm " type="text" placeholder="search for products,brands and more"></input>

              
          </div>
          <div className="flex gap-8 text-white ">
              <button className="bg-white text-blue-500 w-36 h-9 rounded-sm">Login</button>
              <a href="" className="text-white no-underline">Become a seller</a>
              <button className="pb-6">More</button>
              <div className="">Cart</div>
          </div>
      </div>

      
    )
  }
  
  export default Header