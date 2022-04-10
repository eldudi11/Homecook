import { getApi, RECIPES_API, RECIPES_LOAD_MORE_API } from "../../api/apiUtils";
export const LOAD_RECIPES = "LOAD_RECIPES";
export const LOAD_MY_RECIPES = "LOAD_MY_RECIPES";
export const LOAD_MORE = "LOAD_MORE";

export function loadRecipes() {
  return function (dispatch) {
    return getApi(RECIPES_API)
      .then(({ data }) => {
        console.log(data);
        dispatch({ type: LOAD_RECIPES, payload: data });
      })
      .catch((error) => console.log("error", error.message));
  };
}

export function loadMore() {
  return function (dispatch) {
    return getApi(RECIPES_LOAD_MORE_API).then(({ data }) => {
      console.log(data);
      dispatch({ type: LOAD_MORE, payload: data });
    });
  };
}

export function getResultRecipes() {
  return function (dispatch, getState) {
    return getApi(RECIPES_API, getState().ingredients.selectedIngredients)
      .then(({ data }) => {
        console.log(data);
        dispatch({ type: LOAD_MY_RECIPES, payload: data });
      })
      .catch((error) => console.log("error", error.message));
  };
}
