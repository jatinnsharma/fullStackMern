import React, { useEffect, useState } from "react";
import { data } from "../../data/data";
import Card from "./Card";
import Shimmer from "../../shimmer/Shimmer";

const Cards = () => {
  const [filteredFoods, setFilteredFoods] = useState(data);
  // const [selectedCategory, setSelectedCategory] = useState('all'); // Default category is "all"

  const filterProducts = (category) => {
    if (category === "all") {
      // If "all" is selected, show all products
      setFilteredFoods(data);
    } else {
      // Filter products by category
      const filtered = data.filter((product) => product.category === category);
      setFilteredFoods(filtered);
    }
    // setSelectedCategory(category);
  };
  const [searchTerm, setSearchTerm] = useState("");


const [restaurants,setRestaurants] = useState(null);

 useEffect(()=>{
  getRestaurant();
 },[]);

async function  getRestaurant(){
  const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING')
  const json = await data.json();
  setRestaurants(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
 }

  
  return !restaurants ? (<Shimmer/>) : (
    <>
      <div
        style={{ width: "90vw", margin: "auto" }}
        className="d-flex justify-content-around mt-4 "
      >
        <div className="">
          <button
            className="btn btn-danger m-2"
            onClick={() => filterProducts("all")}
          >
            All
          </button>
          <button
            className="btn btn-danger m-2"
            onClick={() => filterProducts("Dinner")}
          >
            Dinner
          </button>
          <button
            className="btn btn-danger m-2"
            onClick={() => filterProducts("Breakfast")}
          >
            Breakfast
          </button>
          <button
            className="btn btn-danger m-2"
            onClick={() => filterProducts("Lunch")}
          >
            Lunch
          </button>
          <button
            className="btn btn-danger m-2"
            onClick={() => filterProducts("Snaks")}
          >
            Snaks
          </button>
        </div>

        <input
          style={{ width: "40%", height: "40px" }}
          type="text"
          placeholder="Serach here ..."
          onChange={(e) => {
            setSearchTerm(e.target.value);
          }}
        />
      </div>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: 30,
          alignItems: "start",
          justifyContent: "center",
          marginTop: "30px",
        }}
      >
        {/* {filteredFoods
          .filter((val) => {
            if (searchTerm === " ") {
              // all show
              return val;
            } else if (
              val.title.toLowerCase().includes(searchTerm.toLowerCase())
            ) {
              // filter data
              return val;
            }
          }) */}
          {
          restaurants.map((items) => {
            return <Card data={items} key={restaurants.id} />;
          })}
      </div>
    </>
  );
};

export default Cards;
