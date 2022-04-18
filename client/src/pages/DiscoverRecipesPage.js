import { useState, useEffect } from "react";
//import React, { useCallback } from "react";
import ResultRandomList from "../components/ResultRandomList";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
//import { getApi, RECIPES_API, RECIPES_LOAD_MORE_API } from "../../api/apiUtils";
import { getApi, RECIPES_LOAD_RANDOM_API } from "../api/apiUtils";
const DiscoverRecipesPageComp = () => {
  const [randomRecipes, setRandomRecipes] = useState([]);
  const [triggerRefrash, setTriggerRefrash] = useState(0);

  useEffect(() => {
    getApi(RECIPES_LOAD_RANDOM_API).then((data) => setRandomRecipes(data.data));
  }, [triggerRefrash]);

  let navigate = useNavigate();
  function getID(i) {
    let id = i;
    console.log(id);
    navigate("/recipe/" + id, { replace: true });
  }

  function handleClick() {
    setTriggerRefrash(triggerRefrash + 1);
  }

  return (
    <div>
      <h1>Discover Recipes</h1>
      <ResultRandomList data={randomRecipes} callback={{ getID: getID }} />
      <button onClick={handleClick}>Replace recipes</button>
    </div>
  );
};
export default DiscoverRecipesPageComp;
