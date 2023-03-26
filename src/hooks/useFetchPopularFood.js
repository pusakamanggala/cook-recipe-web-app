import { useQuery } from "react-query";

const useFetchPopularFood = (pageNumber, pageSize) => {
  //fe655071ca384582b6ae2c37fe1fbc7f
  //38b721c685934201a747226e4d5f4cb9
  //31eba22ff8524ef1b164cd9fe83b2322
  const API_KEY = "31eba22ff8524ef1b164cd9fe83b2322";

  const fetchPopularFood = async () => {
    const response = await fetch(
      `https://api.spoonacular.com/recipes/search?apiKey=${API_KEY}&sort=popularity&sortDirection=desc&number=${pageSize}&offset=${
        (pageNumber - 1) * pageSize
      }`
    );

    const data = await response.json();
    return data.results;
  };
  return useQuery(["popularFood", pageNumber, pageSize], fetchPopularFood, {
    refetchOnWindowFocus: false,
    staleTime: 60000, // cache for 1 minute
  });
};

export default useFetchPopularFood;
