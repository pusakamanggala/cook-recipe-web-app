import { useQuery } from "react-query";

const useSearch = (keyword, pageNumber, pageSize, mealType) => {
  //fe655071ca384582b6ae2c37fe1fbc7f
  //38b721c685934201a747226e4d5f4cb9
  //31eba22ff8524ef1b164cd9fe83b2322
  const API_KEY = "31eba22ff8524ef1b164cd9fe83b2322";

  // fetch food by keyword and meal type
  const fetchFood = async () => {
    const response = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&query=${keyword}&addRecipeInformation=true&number=${pageSize}&offset=${
        pageSize * pageNumber
      }&type=${mealType}`
    );

    const data = await response.json();
    return data.results;
  };
  return useQuery(
    ["recipes", keyword, pageNumber, pageSize, mealType],
    fetchFood,
    {
      refetchOnWindowFocus: false,
      staleTime: 60000, // cache for 1 minute
    }
  );
};

export default useSearch;
