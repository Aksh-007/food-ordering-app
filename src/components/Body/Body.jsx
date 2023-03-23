import React from "react";
import RestaurantCard from "./RestaurantCard";
import SearchBar from "./SearchBar";

const Body = () => {
  return (
    <>
      <SearchBar />
        <div className="flex row gap-10 flex-wrap p-10">
          <RestaurantCard />
          <RestaurantCard />
          <RestaurantCard />
          <RestaurantCard />
          <RestaurantCard />
          <RestaurantCard />
          <RestaurantCard />
        </div>
    </>
  );
};

export default Body;
