import { getApi } from "../../api/apiUtils";
export const LOAD_RECIPES = "LOAD_RECIPES";
export const LOAD_MY_RECIPES = "LOAD_MY_RECIPES";

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

export function getResultRecipes() {
  return function (dispatch, getState) {
    return getApi(
      "http://localhost:8000/recipes",
      getState().ingredients.selectedIngredients
    )
      .then(({ data }) => {
        console.log(data);
        dispatch({ type: LOAD_MY_RECIPES, payload: data });
      })
      .catch((error) => console.log("error", error.message));
  };
}
