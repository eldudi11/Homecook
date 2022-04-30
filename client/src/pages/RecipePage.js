import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Typography from "@mui/material/Typography";
import FilterButton from "../styles/FilterButton";
import "./RecipePage.css";

// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Page2 from "./pages/LoginPage";

const ResultRecipePageComp = () => {
  const params = useParams();
  const data = useSelector((state) => state.recipes.displayedRecipe);
  // let data = selectRecipes.find((data) => data.recipe._id === params.id);
  console.log(data);
  return (
    <div className="recipePageBox">
      <div className="recipeBox">
        <div className="recipeTitleBox">
          <span className="recipeName">{data.recipe.Name}</span>
          <div className="authorBox">
            <span className="authorSection">
              by <span className="authorName">Christina tosi</span>
            </span>
          </div>
          <div className="lablesBox">
            {data.recipe.Filter.map((x) => {
              return (
                <div className="recipeLable" key={x._id}>
                  {x}
                </div>
              );
            })}
          </div>
        </div>
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
    </div>
  );
};

export default ResultRecipePageComp;
