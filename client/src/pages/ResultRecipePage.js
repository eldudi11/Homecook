import { useCallback, useState } from "react";
//import React, { useCallback } from "react";
import ResultList from "../components/ResultList";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { loadMore } from "./../store/actions/recipesAction";
import { ADD_DISPLAYED_RECIPE } from "./../store/actions/recipesAction";
const ResultRecipePageComp = () => {
  const [update, setUpdate] = useState(1);

  const dispatcher = useDispatch();
  let isAllLoaded = false;

  const selectRecipes = useSelector((state) => state.recipes.myRecipesList);
  console.log("heey");
  console.log(selectRecipes);
  let navigate = useNavigate();
  function getRecipe(recipe) {
    dispatcher({ type: ADD_DISPLAYED_RECIPE, payload: recipe });
    navigate("/recipe/", { replace: true });
  }

  function loadMoreData() {
    dispatcher(loadMore());
    setUpdate(update + 1);
  }

  isAllLoaded = useSelector((state) => state.recipes.isAllLoaded);
  console.log(isAllLoaded);
  return (
    <div>
      <h1>My Available Recipes</h1>

      <ResultList data={selectRecipes} callback={{ getRecipe: getRecipe }} />
      {isAllLoaded ? null : <button onClick={loadMoreData}>Load more</button>}
    </div>
  );
};

export default ResultRecipePageComp;
