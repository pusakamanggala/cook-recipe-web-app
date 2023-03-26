import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="bg-gray-900/60 backdrop-blur-sm text-white py-4 fixed w-full z-40 px-6">
      <div className="container mx-auto flex items-center  justify-between flex-wrap">
        {/* Website Name */}
        <div className="flex items-center flex-shrink-0 mr-6">
          <a href="/" className="text-2xl font-bold tracking-wide">
            Recipefy
          </a>
        </div>
        {/* Navbar Menu */}
        <div className="md:flex hidden">
          <a href="/" className="mr-6">
            Home
          </a>
          <Link to={`/search/random/all`} className="mr-6">
            Recipes
          </Link>
          <a href="/about" className="mr-6">
            About
          </a>
        </div>
        {/* End of Navbar Menu */}
      </div>
    </nav>
  );
};

export default NavBar;
