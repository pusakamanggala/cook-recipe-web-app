import React from "react";

const HeroSection = () => {
  return (
    <div className="flex flex-col items-center  justify-center  h-screen bg-hero-background bg-cover bg-no-repeat">
      {/* Web Name */}
      <div className="text-gray-700 text-center md:block hidden md:mt-6">
        <h1 className="text-7xl font-bold">Recipefy</h1>
        <h1 className="text-2xl font-semibold">Your Best Cooking Companion</h1>
      </div>
      {/* Search Bar */}
      <div className="relative rounded-2xl bg-white/70  p-3 md:w-96 w-4/5 mt-4 z-20">
        <input
          type="text"
          className="w-full bg-transparent outline-none text-gray-900"
          placeholder="What are you craving today?"
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
      {/* End of Search Bar */}
      {/* Wave Background */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        className="absolute md:-bottom-8 -bottom-1"
      >
        <path
          fill=" #e5e7eb"
          fillOpacity="1"
          d="M0,192L80,208C160,224,320,256,480,250.7C640,245,800,203,960,181.3C1120,160,1280,160,1360,160L1440,160L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
        ></path>
      </svg>
      {/* End of Wave Background */}
    </div>
  );
};

export default HeroSection;