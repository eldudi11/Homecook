import { combineReducers } from "redux";
import ingredients from "./ingredientsReducer";
import recipes from "./recipesReducer";
import users from "./usersReducer";

const rootReducer = combineReducers({
  ingredients,
  recipes,
  users,
});

export default rootReducer;
