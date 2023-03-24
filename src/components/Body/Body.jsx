import React, { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import { API_URL, restaurantList } from "../constant/constant.js";

const Body = () => {
  const [searchInput, setSearchInput] = useState("");
  const [allRestaurant, setAllRestaurant] = useState([]);
  const [filterRestaurant, setFilteredRestaurant] = useState([]);

  function filterData(searchInput, restaurant) {
    const filterData = restaurant.filter((restaurant) => {
      restaurant.data.name.toLowerCase().includes(searchInput.toLowerCase());
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
      <div className=" mb-5" style={{ paddingTop: "150px" }}>
        <div class="max-w-lg mx-auto">
          <div class="relative flex items-center w-full h-12 rounded-lg focus-within:shadow-lg bg-white overflow-hidden">
            <input
              class="peer h-full w-full outline-none text-sm text-gray-700 pr-2"
              type="text"
              id="search"
              placeholder="Search Restaurant Name...."
              value={searchInput}
              onChange={(e) => {
                setSearchInput(e.target.value);
              }}
            />
            <button
              class="grid place-items-center h-full w-12 text-gray-300"
              onClick={() => {
                const data = filterData(searchInput, allRestaurant);
                setFilteredRestaurant(data);
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
            {/* <p>{searchInput}</p> */}
          </div>
        </div>
      </div>
      <div className="flex items-center row gap-[55px] flex-wrap p-10 justify-center">
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
