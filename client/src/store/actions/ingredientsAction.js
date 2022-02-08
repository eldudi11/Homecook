import { getApi } from "../../api/apiUtils";
export const LOAD_INGREDIENTS = "LOAD_INGREDIENTS";
export const ADD_SELECTED_INGREDIENT = "ADD_SELECTED_INGREDIENT";
export const DELETE_SELECTED_INGREDIENT = "DELETE_SELECTED_INGREDIENT";

export function loadIngredients() {
  return function (dispatch) {
    return getApi("http://localhost:8000/ingredients")
      .then(({ data }) => {
        console.log(data);
        dispatch({ type: LOAD_INGREDIENTS, payload: data });
      })
      .catch((error) => console.log("error", error.message));
  };
}
