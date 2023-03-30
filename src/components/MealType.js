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

const FoodCategory = () => {
  const navigate = useNavigate();
  const MealTypeCard = ({ icon, title }) => {
    return (
      <button
        className="rounded-lg shadow-lg p-4 flex flex-col justify-center items-center bg-gray-700 hover:bg-gray-500"
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
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:p-28 p-10  z-10 ">
        <MealTypeCard icon={DinnerIcon} title="Main Course" />
        <MealTypeCard icon={DessertIcon} title="Dessert" />
        <MealTypeCard icon={AppetizerIcon} title="Appetizer" />
        <MealTypeCard icon={SaladIcon} title="Salad" />
        <MealTypeCard icon={BreadIcon} title="Bread" />
        <MealTypeCard icon={BreakfastIcon} title="Breakfast" />
        <MealTypeCard icon={SoupIcon} title="Soup" />
        <MealTypeCard icon={BeverageIcon} title="Beverage" />
        <MealTypeCard icon={SauceIcon} title="Sauce" />
        <MealTypeCard icon={MarinadeIcon} title="Marinade" />
        <MealTypeCard icon={SnackIcon} title="Snack" />
        <MealTypeCard icon={DrinkIcon} title="Drink" />
      </div>
      {/* end meal category card */}
    </div>
  );
};

export default FoodCategory;
