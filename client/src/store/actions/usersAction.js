import { getApi } from "../../api/apiUtils";
export const LOAD_USERS = "LOAD_USERS";
export const DEFINE_CURRNET_USER = "DEFINE_CURRNET_USER";

// export function loadUsers() {
//   return function (dispatch) {
//     return getApi("http://localhost:8000/users")
//       .then(({ data }) => {
//         dispatch({ type: LOAD_RECIPES, payload: data });
//       })
//       .catch((error) => console.log("error", error.message));
//   };
// }
