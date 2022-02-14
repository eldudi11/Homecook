import { getApi } from "../../api/apiUtils";
export const LOAD_RECIPES = "LOAD_USERS";

export function loadUsers() {
  return function (dispatch) {
    return getApi("http://localhost:8000/users")
      .then(({ data }) => {
        console.log(data);
        dispatch({ type: LOAD_RECIPES, payload: data });
      })
      .catch((error) => console.log("error", error.message));
  };
}
