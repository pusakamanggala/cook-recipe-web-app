import React from "react";
import MealType from "../components/MealType";
import HeroSection from "../components/HeroSection";
import NavBar from "../components/NavBar";
import PopularFoods from "../components/PopularFoods";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <NavBar />
      <HeroSection />
      <MealType />
      <PopularFoods />
      <Footer />
    </>
  );
};

export default Home;
