import React from "react";
import useSearch from "../hooks/useSearch";
import FoodCard from "../components/FoodCard";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import LoadIcon from "../img/icon/loading.gif";

const Search = () => {
  const { keyword: keywordParam, mealType: mealTypeParam } = useParams();
  const mealType = mealTypeParam === "all" ? "" : mealTypeParam;
  const keyword = keywordParam === "random" ? "" : keywordParam;

  const [pageNumber, setPageNumber] = useState(0);
  const pageSize = 8;
  const { isLoading, error, data } = useSearch(
    keyword,
    pageNumber,
    pageSize,
    mealType
  );

  // Reset page number to 0 when keyword changes
  useEffect(() => {
    setPageNumber(0);
  }, [keyword, mealType, setPageNumber]);

  // Define two functions to handle pagination
  const handleNextPage = () => {
    setPageNumber((prevPageNumber) => prevPageNumber + 1);
  };
  const handlePrevPage = () => {
    setPageNumber((prevPageNumber) => prevPageNumber - 1);
  };

  if (isLoading) {
    return (
      <div className="bg-gray-200 w-full p-8 items-center flex flex-col justify-center min-h-screen pt-20 md:pt-8">
        <img src={LoadIcon} alt="" />
      </div>
    );
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }
  return (
    <>
      <div className="bg-gray-200 w-full p-8 items-center flex flex-col md:justify-center md:max-h-screen pt-20 md:pt-8 min-h-screen">
        <div className="w-full pb-6 md:hidden">
          <h1 className="capitalize font-semibold text-xl">
            {keyword} / {mealType}
          </h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4  md:px-14 w-full">
          {data && data.length === 0 ? (
            <p>Recipe not found.</p>
          ) : (
            data &&
            data.map((recipe) => <FoodCard key={recipe.id} recipe={recipe} />)
          )}
        </div>
        {data && data.length > 0 ? (
          <div className="flex justify-end pt-6 md:pr-14 pr-2 w-full">
            <button
              onClick={handlePrevPage}
              disabled={pageNumber === 0}
              className={`font-bold py-2 px-4 rounded mr-2 text-white ${
                pageNumber === 0
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
    </>
  );
};

export default Search;
