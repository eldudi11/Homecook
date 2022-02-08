import produce from "immer";
import { LOAD_RECIPES } from "../actions/recipesAction";

const INITIAL_STATE = { recipesList: [] };

const recipesReducer = (state = INITIAL_STATE, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case LOAD_RECIPES: {
        draft.recipesList = action.payload;
        return draft;
      }

      default:
        return draft;
    }
  });

export default recipesReducer;
