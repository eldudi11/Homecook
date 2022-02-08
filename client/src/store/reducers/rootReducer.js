import { combineReducers } from "redux";
import ingredients from "./ingredientsReducer";
import recipes from "./recipesReducer";

const rootReducer = combineReducers({
  ingredients,
  recipes,
});

export default rootReducer;
