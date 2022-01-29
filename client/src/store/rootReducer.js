import { combineReducers } from "redux";
import ingredients from "./ingredientsReducer";

const rootReducer = combineReducers({
  ingredients,
});

export default rootReducer;
