import { useState } from "react";
import ResultList from "../components/ResultList";
import { Link, useParams } from "react-router-dom";

// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Page2 from "./pages/LoginPage";

const ResultRecipePageComp = () => {
  const params = useParams();
  console.log(params.id);
  return (
    <div>
      <h1>THIS IS RECIPE PAGE</h1>
      {params.id}
      <li>
        <Link to="/login">hello</Link>
      </li>
    </div>
  );
};

export default ResultRecipePageComp;
