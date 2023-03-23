import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 px-6">
      <div className="container mx-auto flex items-center justify-between flex-wrap">
        {/* Website Name */}
        <div className="flex items-center">
          <h1 className="text-2xl font-bold tracking-wide">Recipefy</h1>
        </div>
        {/* Web Info */}
        <div className="text-sm">
          <p>Pusaka Manggala</p>
          <p>Bandung, Indonesia 2023</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
