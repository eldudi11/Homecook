import { getApi } from "../../api/apiUtils";

export function loadIngredients() {
  return function (dispatch) {
    return getApi("http://localhost:8000/ingredients")
      .then(({ data }) => {
        console.log(data);
        dispatch({ type: "LOAD_INGREDIENTS", payload: data });
      })
      .catch((error) => console.log("error", error.message));
  };
}

export function getSelectedIngredients(data) {
  return function (dispatch) {
    dispatch({ type: "GET_SELECTED_INGREDIENTS", payload: data });
  };
}
