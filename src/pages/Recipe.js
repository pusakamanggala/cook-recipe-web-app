import React from "react";
import { useParams } from "react-router-dom";
import useFetchRecipe from "../hooks/useFetchRecipe";
import LoadIcon from "../img/icon/loading.gif";
import { useEffect } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const Recipe = () => {
  const { id } = useParams();
  const { data: recipe, isLoading, isError } = useFetchRecipe(id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (isLoading) {
    return (
      <div className="h-screen bg-gray-200 flex justify-center items-center w-full">
        <img src={LoadIcon} alt="" className="h-2/4" />
      </div>
    );
  }

  if (isError) {
    return (
      <div className="h-screen bg-gray-200 flex justify-center items-center">
        <h1>
          Something went wrong. Please refresh the page or try again later.
        </h1>
      </div>
    );
  }

  const recipeImage = recipe.image
    ? recipe.image
    : "https://via.placeholder.com/640x360?text=No+Image";

  return (
    <>
      <NavBar />
      <div className="container min-h-screen mx-auto px-6 py-24">
        <div className="flex flex-wrap">
          {/* Recipe image */}
          <div className="w-full lg:w-2/5 mb-4">
            <img
              className="w-full h-auto rounded-lg"
              src={recipeImage}
              alt={recipe.title}
            />
          </div>
          {/* Recipe details */}
          <div className="w-full lg:w-3/5 lg:pl-6">
            {/* Recipe title */}
            <h1 className="text-3xl font-bold md:mb-5 mb-2">{recipe.title}</h1>
            {/* Recipe summary */}
            {recipe.summary && (
              <div
                className="mb-4 indent-8 text-justify"
                dangerouslySetInnerHTML={{ __html: recipe.summary }}
              ></div>
            )}
            {/* Recipe info */}
            <div className="flex flex-wrap">
              <div className="w-full md:w-1/2 mb-4">
                <h2 className="font-bold mb-2">Ingredients</h2>
                <ul className="list-disc ml-6 pr-2">
                  {recipe.extendedIngredients.map((ingredient) => (
                    <li key={ingredient.id}>{ingredient.original}</li>
                  ))}
                </ul>
              </div>
              <div className="w-full md:w-1/2 mb-4">
                <h2 className="font-bold mb-2">Cooking Time</h2>
                <p>{recipe.readyInMinutes} minutes</p>
                <h2 className="font-bold mt-4 mb-2">Servings</h2>
                <p>{recipe.servings}</p>
              </div>
            </div>
            {/* Cooking process */}
            <div className="mt-8">
              <h2 className="font-bold mb-4 text-2xl">Cooking Process</h2>
              {recipe.analyzedInstructions.map((instruction, index) => (
                <div key={index} className="mb-4">
                  <h3 className="font-bold mb-2">{instruction.name}</h3>
                  <ol className="list-decimal ml-6">
                    {instruction.steps.map((step) => (
                      <li key={step.number}>{step.step}</li>
                    ))}
                  </ol>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Recipe;
