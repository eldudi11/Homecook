import { useCallback, useState } from "react";
//import React, { useCallback } from "react";
import ResultList from "../components/ResultList";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { loadMore } from "./../store/actions/recipesAction";

// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Page2 from "./pages/LoginPage";

const ResultRecipePageComp = () => {
  const dispatcher = useDispatch();
  let navigate = useNavigate();
  function getID(i) {
    let id = i;
    console.log(id);
    navigate("/recipe/" + id, { replace: true });
  }

  function loadMoreData() {
    dispatcher(loadMore());
  }

  // const handelRender = useCallback(() => {
  //   console;
  // }, []);

  return (
    <div>
      <h1>My Available Recipes</h1>
      <ResultList callback={{ getID: getID }} />
      <button onClick={loadMoreData}>Load more</button>
    </div>
  );
};

export default ResultRecipePageComp;
