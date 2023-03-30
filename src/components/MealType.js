import React from "react";
import DinnerIcon from "../img/icon/dinner.png";
import BreakfastIcon from "../img/icon/breakfast.png";
import SnackIcon from "../img/icon/snack.png";
import DessertIcon from "../img/icon/dessert.png";
import AppetizerIcon from "../img/icon/appetizer.png";
import SaladIcon from "../img/icon/salad.png";
import BreadIcon from "../img/icon/bread.png";
import SoupIcon from "../img/icon/soup.png";
import BeverageIcon from "../img/icon/beverage.png";
import SauceIcon from "../img/icon/sauce.png";
import MarinadeIcon from "../img/icon/marinade.png";
import DrinkIcon from "../img/icon/drink.png";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const FoodCategory = () => {
  const navigate = useNavigate();
  const [isHidden, setIsHidden] = useState(true);
  const MealTypeCard = ({ icon, title, isHidden }) => {
    return (
      <button
        className={`" rounded-lg shadow-lg p-4 flex flex-col justify-center items-center bg-gray-700 hover:bg-gray-500 "   ${
          isHidden ? "hidden" : "block"
        }`}
        onClick={() => navigate(`/search/random/${title.toLowerCase()}`)}
      >
        <img src={icon} alt="dinner" className="w-28" />
        <p className="text-white text-lg font-semibold">{title}</p>
      </button>
    );
  };

  return (
    <div className="flex flex-col  py-6 bg-gray-200">
      {/* tittle */}
      <div>
        <h1 className="text-center text-2xl font-bold text-gray-700 ">
          Find Your Type of Meal
        </h1>
      </div>
      {/*end of tittle */}
      {/* meal category card */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:pt-28 md:px-28 p-10  z-10 ">
        <MealTypeCard icon={DinnerIcon} title="Main Course" />
        <MealTypeCard icon={DessertIcon} title="Dessert" />
        <MealTypeCard icon={AppetizerIcon} title="Appetizer" />
        <MealTypeCard icon={SaladIcon} title="Salad" />
        <MealTypeCard icon={BreadIcon} title="Bread" />
        <MealTypeCard
          icon={BreakfastIcon}
          title="Breakfast"
          isHidden={isHidden}
        />
        <MealTypeCard icon={SoupIcon} title="Soup" isHidden={isHidden} />
        <MealTypeCard
          icon={BeverageIcon}
          title="Beverage"
          isHidden={isHidden}
        />
        <MealTypeCard icon={SauceIcon} title="Sauce" isHidden={isHidden} />
        <MealTypeCard
          icon={MarinadeIcon}
          title="Marinade"
          isHidden={isHidden}
        />
        <MealTypeCard icon={SnackIcon} title="Snack" isHidden={isHidden} />
        <MealTypeCard icon={DrinkIcon} title="Drink" isHidden={isHidden} />
      </div>
      {/* end meal category card */}
      <div className="w-full flex justify-center pb-20 mt-6">
        <button
          onClick={() => setIsHidden(!isHidden)}
          className="flex flex-col items-center"
        >
          <h1 className="text-center font-semibold mb-1">
            {isHidden ? "More" : "Less"}
          </h1>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 animate-bounce"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d={
                isHidden
                  ? "M19.5 8.25l-7.5 7.5-7.5-7.5"
                  : "M4.5 15.75l7.5-7.5 7.5 7.5"
              }
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default FoodCategory;
