import React from "react";
import MealType from "../components/MealType";
import HeroSection from "../components/HeroSection";
import PopularFoods from "../components/PopularFoods";

const Home = () => {
  return (
    <>
      <HeroSection />
      <MealType />
      <PopularFoods />
    </>
  );
};

export default Home;
