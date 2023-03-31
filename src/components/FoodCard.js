import React from "react";
import { Link } from "react-router-dom";

const FoodCard = ({ recipe }) => {
  // Construct the image URL using the Spoonacular API's image base URL and the image file name from the recipe object
  const isValidUrl = (string) => {
    try {
      new URL(string);
      return true;
    } catch (_) {
      return false;
    }
  };

  const imageUrl =
    (recipe.image &&
      (isValidUrl(recipe.image)
        ? recipe.image
        : `https://spoonacular.com/recipeImages/${recipe.image}`)) ||
    "https://via.placeholder.com/300x150?text=No%20Image";

  return (
    <Link to={`/recipe/${recipe.id}`}>
      <div className="w-full h-full bg-white rounded-xl overflow-hidden shadow-lg relative hover:underline">
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
    </Link>
  );
};

export default FoodCard;
