import { useState } from "react";
//import React, { useCallback } from "react";
import ResultList from "../components/ResultList";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Page2 from "./pages/LoginPage";

const DiscoverRecipesPageComp = () => {
  const [showLoadMoreButton, setshowLoadMoreButton] = useState();

  let navigate = useNavigate();
  function getID(i) {
    let id = i;
    console.log(id);
    navigate("/recipe/" + id, { replace: true });
  }

  return (
    <div>
      <h1>Discover Recipes</h1>
      <ResultList callback={{ getID: getID }} />
    </div>
  );
};
export default DiscoverRecipesPageComp;
