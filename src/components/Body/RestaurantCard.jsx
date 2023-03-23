import React from "react";
import { IMG_CDN_URL } from "../constant/constant";

const RestaurantCard = ({
  name,
  cloudinaryImageId,
  cuisines,
  aggregatedDiscountInfoV2,
  avgRating,
  veg,
  totalRatings,
  uuid,
}) => {
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 display:flex flex-direction:row ">
      <div className="img-hover-zoom">
        <img
          className="rounded-t-lg "
          src={`${IMG_CDN_URL}${cloudinaryImageId}`}
          alt=""
        />
      </div>
      <div className="p-5">
        <a href="/">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {name}
          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {cuisines.join(', ')}
        </p>
        <a
          href="/"
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white  rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          <div className="flex items-center">
            <svg
              aria-hidden="true"
              className="w-5 h-5 text-yellow-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Rating star</title>
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
            <p className="ml-2 text-sm font-bold text-gray-900 dark:text-white">
              {avgRating}
            </p>
            <span className="w-1 h-1 mx-1.5 bg-gray-500 rounded-full dark:bg-gray-400"></span>
            <a
              href="/"
              className="text-sm font-medium text-gray-900  dark:text-white"
            >
             Total Rating: {totalRatings}
            </a>
          </div>
        </a>
      </div>
    </div>
  );
};

export default RestaurantCard;
