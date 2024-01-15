import { useState } from "react";
import { COIN_SEARCH_API } from "../../utils/constants";
const useSearchData = () => {
  const [error, setError] = useState(null);

  const getSearchResults = async (searchString) => {
    try {
      if (!searchString) {
        return;
      }
      const response = await fetch(COIN_SEARCH_API(searchString));
      if (!response.ok) {
        setError(response.status);
        console.log(`Error Fetchinig Search Results: ${response.status}`);
        return;
      }
      const json = await response.json();
      setError(null);
      return json.coins;
    } catch (error) {
      setError("Network Error");
      console.log(error);
    }
  };

  return { getSearchResults, error };
};

export default useSearchData;
