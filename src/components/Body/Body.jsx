import React, { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import { API_URL } from "../constant/constant.js";

const Body = () => {
  const [searchInput, setSearchInput] = useState("");
  const [allRestaurant, setAllRestaurant] = useState([]);
  const [filterRestaurant, setFilteredRestaurant] = useState([]);

  function filterData(searchInput, restaurant) {
    const filterData = restaurant.filter((restaurant) => {
      return restaurant.data.name.toLowerCase().includes(searchInput.toLowerCase());
    });
    return filterData;
  }

  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    try {
      const data = await fetch(API_URL);
      const json = await data.json();
      console.log(json);
      //   setAllRestaurant(json)
      setAllRestaurant(json?.data?.cards[2]?.data?.data?.cards);
      setFilteredRestaurant(json?.data?.cards[2]?.data?.data?.cards);
    } catch (error) {
      console.log(error);
      console.log(error.message);
    }
  }

  return (
    <>
      <div className=" mb-5 mt-[100px] md:mt-[130px]  px-[50px]">
        <div className="max-w-lg mx-auto">
          <div className="relative flex items-center w-full h-12 rounded-lg focus-within:shadow-lg bg-white overflow-hidden">
            <input
              className="peer h-full w-full outline-none text-sm text-gray-700 pr-2"
              type="text"
              id="search"
              placeholder="Search Restaurant Name...."
              value={searchInput}
              onChange={(e) => {
                setSearchInput(e.target.value);
              }}
            />
            <button
              className="grid place-items-center h-full w-12 text-gray-300"
              onClick={() => {
                const data = filterData(searchInput, allRestaurant);
                setFilteredRestaurant(data);
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
            {/* <p>{searchInput}</p> */}
          </div>
        </div>
      </div>
      <div className="flex items-center row gap-[55px] flex-wrap p-[30px] justify-center">
        {filterRestaurant.map((restaurant) => {
          return (
            <RestaurantCard key={restaurant?.data?.uuid} {...restaurant.data} />
          );
        })}
      </div>
    </>
  );
};

export default Body;
