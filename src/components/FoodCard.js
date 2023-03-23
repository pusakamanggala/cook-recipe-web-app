import React from "react";

const FoodCard = ({ recipe }) => {
  // Construct the image URL using the Spoonacular API's image base URL and the image file name from the recipe object
  const imageUrl = recipe.image
    ? `https://spoonacular.com/recipeImages/${recipe.image}`
    : "https://via.placeholder.com/640x360?text=No+Image";

  return (
    <div className="w-full bg-white rounded-xl overflow-hidden shadow-lg relative">
      {/* Food Image */}
      <img
        className="h-48 w-full object-cover"
        src={imageUrl}
        alt={recipe.title}
      />
      {/* Cook time badge */}
      <div className="flex bg-gray-700 text-white rounded-l-md p-1 items-center absolute top-2 right-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 mr-2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <p className="text-base text-center">{recipe.readyInMinutes} min</p>
      </div>
      {/* Food title */}
      <div className="px-6 py-4 ">
        <div className="font-bold  mb-2 text-gray-700">{recipe.title}</div>
      </div>
    </div>
  );
};

export default FoodCard;
