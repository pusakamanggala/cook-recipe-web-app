import React, { useState } from "react";
import useFetchPopularFood from "../hooks/useFetchPopularFood";
import FoodCard from "./FoodCard";
import LoadIcon from "../img/icon/loading.gif";

const PopularFoods = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const pageSize = 8;

  // Calling the `useFetchPopularFood` hook for fetching popular food data
  const { isLoading, error, data } = useFetchPopularFood(pageNumber, pageSize);

  // Define two functions to handle pagination
  const handleNextPage = () => {
    setPageNumber((prevPageNumber) => prevPageNumber + 1);
  };
  const handlePrevPage = () => {
    setPageNumber((prevPageNumber) => prevPageNumber - 1);
  };

  // If the data is loading, show a loading icon
  if (isLoading) {
    return (
      <div className="p-0 m-0 bg-gray-200">
        <h1 className="text-center text-2xl font-bold text-gray-700 ">
          Popular Food Recipe
        </h1>
        <img src={LoadIcon} alt="loading" className="mx-auto" />
      </div>
    );
  }

  // If there is an error, show the error message
  if (error) {
    // Display an alert with the error message
    alert("Something went wrong. Please refresh the page or try again later.");
    // Return null to prevent rendering anything else
    return (
      <h1 className="bg-red-600 text-white text-center">
        Something went wrong. Please refresh the page or try again later.
      </h1>
    );
  }

  // If there is data, render it
  return (
    <div className="bg-gray-200 ">
      <div>
        <h1 className="text-center text-2xl font-bold text-gray-700 mb-28">
          Popular Food Recipe
        </h1>
      </div>
      {/* Food Card */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4  md:px-28 px-10">
        {data &&
          data.map((recipe) => <FoodCard key={recipe.id} recipe={recipe} />)}
      </div>
      {/* Prev and Next Button */}
      {data ? (
        <div className="flex justify-center md:p-10 p-6">
          <button
            onClick={handlePrevPage}
            disabled={pageNumber === 1}
            className={`font-bold py-2 px-4 rounded mr-2 text-white ${
              pageNumber === 1
                ? "bg-gray-400 "
                : "bg-gray-600 hover:bg-gray-700 "
            } `}
          >
            Prev
          </button>
          <button
            onClick={handleNextPage}
            disabled={data.length < pageSize}
            className={`font-bold py-2 px-4 rounded mr-2 text-white ${
              data.length < pageSize
                ? "bg-gray-400 "
                : "bg-gray-600 hover:bg-gray-700 "
            } `}
          >
            Next
          </button>
        </div>
      ) : null}
    </div>
  );
};

export default PopularFoods;
