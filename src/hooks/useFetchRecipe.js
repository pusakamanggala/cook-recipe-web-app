import { useQuery } from "react-query";

const useFetchRecipe = (recipeId) => {
  const API_KEY = "38b721c685934201a747226e4d5f4cb9";

  const fetchRecipe = async () => {
    const response = await fetch(
      `https://api.spoonacular.com/recipes/${recipeId}/information?apiKey=${API_KEY}`
    );

    const data = await response.json();
    return data;
  };
  return useQuery(["recipe", recipeId], fetchRecipe, {
    refetchOnWindowFocus: false,
    staleTime: 60000, // 1 minute
    cacheTime: 3600000, // 1 hour
  });
};

export default useFetchRecipe;
