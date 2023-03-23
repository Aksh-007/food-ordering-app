import React, { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import SearchBar from "./SearchBar";
import {  API_URL,restaurantList } from "../constant/constant.js";

const Body = () => {
//   const [allRestaurant, setAllRestaurant] = useState(restaurantList);

  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    try {
      const data = await fetch(
        API_URL
      );
      const json = await data.json();
      console.log(json);
    //   setAllRestaurant(json)
    //   setAllRestaurant(json?.data?.cards[2]?.data?.data?.cards);
    //   setFilteredRestaurant(json?.data?.cards[2]?.data?.data?.cards);
    } catch (error) {
      console.log(error);
      console.log(error.message);
    }
  }


  return (
    <>
      <SearchBar />
      <div className="flex row gap-10 flex-wrap p-10 items-center">
        {
            restaurantList.map((restaurant)=>{
                return(
                    <RestaurantCard 
                    key={restaurant?.data?.uuid}
                    {...restaurant.data}
                    />
                )
            })
        }
       
      </div>
    </>
  );
};

export default Body;
