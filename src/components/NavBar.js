import React from "react";

const NavBar = () => {
  return (
    <nav className="bg-gray-900/60 backdrop-blur-sm text-white py-4 fixed w-full z-50 px-6">
      <div className="container mx-auto flex items-center  justify-between flex-wrap">
        <div className="flex items-center flex-shrink-0 mr-6">
          <a href="/" className="text-2xl font-bold tracking-wide">
            Recipefy
          </a>
        </div>
        <div className="md:flex hidden">
          <a href="/" className="mr-6">
            Home
          </a>
          <a href="/recipes" className="mr-6">
            Recipes
          </a>
          <a href="/about" className="mr-6">
            About
          </a>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
