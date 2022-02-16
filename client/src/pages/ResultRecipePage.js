import { useState } from "react";
//import React, { useCallback } from "react";
import ResultList from "../components/ResultList";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Page2 from "./pages/LoginPage";

const ResultRecipePageComp = () => {
  let navigate = useNavigate();
  function getID(i) {
    let id = i;
    console.log(id);
    navigate("/recipe/123", { replace: true });
  }
  return (
    <div>
      <li>
        <Link to="/recipe/s234">hello</Link>
      </li>
      <h1>this is my Result Recipe Page page</h1>
      <ResultList callback={{ getID: getID }} />
    </div>
  );
};

export default ResultRecipePageComp;
