import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const HeroSection = () => {
  const navigate = useNavigate();
  const [keyword, setKeyword] = useState("random");

  const handleUserInput = (e) => {
    setKeyword(e.target.value);
  };

  const handleSearch = () => {
    navigate(`/search/${keyword}/all`);
  };

  return (
    <div className="flex flex-col items-center  justify-center  min-h-screen bg-hero-background bg-cover md:bg-center bg-no-repeat">
      {/* Web Name */}
      <div className="text-gray-700 text-center md:block hidden md:mt-6">
        <h1 className="text-7xl font-bold">Recipefy</h1>
        <h1 className="text-2xl font-semibold">Your Best Cooking Companion</h1>
      </div>
      {/* Search Bar */}
      <form onSubmit={handleSearch} className="w-full flex justify-center">
        <div className="relative rounded-2xl bg-white/70  p-3 md:w-96 w-4/5 mt-4 z-20">
          <input
            type="text"
            className="w-full bg-transparent outline-none text-gray-900"
            placeholder="What are you craving today?"
            onChange={handleUserInput}
            required
          />
          <div className="absolute inset-y-0 right-0 flex items-center pr-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </div>
        </div>
      </form>
      {/* End of Search Bar */}
    </div>
  );
};

export default HeroSection;
