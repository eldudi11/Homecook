import { useState } from "react";
import ResultList from "../components/ResultList";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Typography from "@mui/material/Typography";

// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Page2 from "./pages/LoginPage";

const ResultRecipePageComp = () => {
  const params = useParams();
  const selectRecipes = useSelector((state) => state.recipes.recipesList);
  let recipe = selectRecipes.find((recipe) => recipe._id === params.id);
  console.log(recipe);

  return (
    <div>
      <h1>{recipe.Name}</h1>

      <img src={`${recipe.Image}?w=248&fit=crop&auto=format`}></img>
      <Typography>Servings: {recipe.Servings}</Typography>
      <Typography>Calories: {recipe.Calories}</Typography>
      <p>
        <h4>Ingredients</h4>

        {recipe.Ingredients.map((x) => {
          return <Typography key={x._id}>{x.name}</Typography>;
        })}
      </p>
    </div>
  );
};

export default ResultRecipePageComp;
