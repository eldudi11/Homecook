import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Typography from "@mui/material/Typography";
import FilterButton from "../styles/FilterButton";
import "./RecipePage.css";
import IconText from "../styles/IconText";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";

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

        <div className="recipeContentBox">
          <div className="recipeContentLeftBox">
            <div className="recipeAttributes">
              <IconText
                name={data.recipe.Servings + " Servings"}
                iconImage={AccessTimeIcon}
              ></IconText>
              <IconText
                name={data.recipe.Servings + " Servings"}
                iconImage={PersonOutlineIcon}
              ></IconText>
              <IconText
                name={data.recipe.Servings + " Servings"}
                iconImage={PersonOutlineIcon}
              ></IconText>
              <IconText
                name={data.recipe.Servings + " Servings"}
                iconImage={PersonOutlineIcon}
              ></IconText>
            </div>
            <img
              src={`${data.recipe.Image}?w=248&fit=crop&auto=format`}
              srcSet={`${data.recipe.Image}?w=248&fit=crop&auto=format&dpr=2 2x`}
            ></img>
          </div>
          <div className="recipeContentRightBox">
            <div className="ingredientsBox">
              <div className="title">
                <Typography variant="h6">Ingredients</Typography>
              </div>
              <div className="list">
                {data.recipe.Ingredients.map((x) => {
                  return <Typography key={x._id}>{x.name}</Typography>;
                })}
              </div>
            </div>
            <div className="stepsBox">
              <div className="title">
                <Typography variant="h6">Steps</Typography>
              </div>
              <div className="list">
                {data.recipe.Ingredients.map((x) => {
                  return (
                    <Typography className="listItem" key={x._id}>
                      {x.name}
                    </Typography>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        {/* <h3>you missing {data.missing} ingredients</h3>

        <Typography>Servings: {data.recipe.Servings}</Typography>
        <Typography>Calories: {data.recipe.Calories}</Typography>

        <h4>Ingredients</h4>

        {data.recipe.Ingredients.map((x) => {
          return <Typography key={x._id}>{x.name}</Typography>;
        })} */}
      </div>
    </div>
  );
};

export default ResultRecipePageComp;
