import produce from "immer";
import { LOAD_RECIPES, LOAD_MY_RECIPES } from "../actions/recipesAction";

const INITIAL_STATE = { recipesList: [], myRecipesList: [] };

const recipesReducer = (state = INITIAL_STATE, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case LOAD_RECIPES: {
        draft.recipesList = action.payload;
        return draft;
      }
      case LOAD_MY_RECIPES: {
        draft.myRecipesList = action.payload;
      }

      default:
        return draft;
    }
  });

export default recipesReducer;
