import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import IngredientsList from "../components/IngredientsList";
import SearchBox from "../components/SearchBox";
import { ADD_SELECTED_INGREDIENT } from "./../store/actions/ingredientsAction";
import { setResultRecipes } from "./../store/actions/recipesAction";
import Button from "@mui/material/Button";

const MyIngredientPageComp = () => {
  const selectIng = useSelector((state) => state.ingredients);
  const selectRecipes = useSelector((state) => state.recipes);
  const dispatcher = useDispatch();
  //const [selectedIngredients, setSelectedIngredients] = useState([]);
  function getChoice(choice) {
    dispatcher({ type: ADD_SELECTED_INGREDIENT, payload: choice });
  }

  function getResults() {
    dispatcher(setResultRecipes());
  }

  return (
    <div>
      <h1>What's in your kitchen?</h1>
      {/* {console.log(selectRecipes.recipesList)} */}
      {/* {selectIng.ingredientsList.map((ingredient, i) => {
        return <li key={i}>{ingredient.Name}</li>;
      })} */}
      {/* {console.log(selectIng.selectedIngredients)} */}
      <SearchBox
        data={selectIng.ingredientsList}
        selectedData={selectIng.selectedIngredients}
        callback={{ getChoice: getChoice }}
      />
      <IngredientsList />
      <Button
        variant="contained"
        onClick={() => {
          getResults();
        }}
      >
        Get Recipes
      </Button>
    </div>
  );
};

export default MyIngredientPageComp;
