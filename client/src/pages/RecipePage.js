import { useState } from "react";
import ResultList from "../components/ResultList";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Typography from "@mui/material/Typography";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageList";

// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Page2 from "./pages/LoginPage";

const ResultRecipePageComp = () => {
  const params = useParams();
  const data = useSelector((state) => state.recipes.displayedRecipe);
  // let data = selectRecipes.find((data) => data.recipe._id === params.id);
  console.log(data);
  return (
    <div>
      <h1>{data.recipe.Name}</h1>
      <h3>you missing {data.missing} ingredients</h3>
      <img
        src={`${data.recipe.Image}?w=248&fit=crop&auto=format`}
        srcSet={`${data.recipe.Image}?w=248&fit=crop&auto=format&dpr=2 2x`}
      ></img>
      <Typography>Servings: {data.recipe.Servings}</Typography>
      <Typography>Calories: {data.recipe.Calories}</Typography>

      <h4>Ingredients</h4>

      {data.recipe.Ingredients.map((x) => {
        return <Typography key={x._id}>{x.name}</Typography>;
      })}
    </div>
  );
};

export default ResultRecipePageComp;
