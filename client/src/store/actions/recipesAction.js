import { getApi } from "../../api/apiUtils";
export const LOAD_RECIPES = "LOAD_RECIPES";

export function loadRecipes() {
  return function (dispatch) {
    return getApi("http://localhost:8000/recipes")
      .then(({ data }) => {
        console.log(data);
        dispatch({ type: LOAD_RECIPES, payload: data });
      })
      .catch((error) => console.log("error", error.message));
  };
}

export function setResultRecipes() {
  return function (dispatch, getState) {
    let recipes = getState().recipes.recipesList;
    let selectedIngredients = getState().ingredients.selectedIngredients;
    console.log(selectedIngredients);
    console.log(recipes);
    // dispatch({ type: PALETTE_TABLE_LOAD, payload: paletteItem });
  };
}