import { useCallback, useState } from "react";
//import React, { useCallback } from "react";
import ResultList from "../components/ResultList";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { loadMore } from "./../store/actions/recipesAction";

const ResultRecipePageComp = () => {
  const [update, setUpdate] = useState(1);
  const dispatcher = useDispatch();
  let isAllLoaded = false;

  let navigate = useNavigate();
  function getID(i) {
    let id = i;
    navigate("/recipe/" + id, { replace: true });
  }

  function loadMoreData() {
    dispatcher(loadMore());
    setUpdate(update + 1);
  }

  isAllLoaded = useSelector((state) => state.recipes.isAllLoaded);

  return (
    <div>
      <h1>My Available Recipes</h1>

      <ResultList callback={{ getID: getID }} />
      {isAllLoaded ? null : <button onClick={loadMoreData}>Load more</button>}
    </div>
  );
};

export default ResultRecipePageComp;
