import produce from "immer";
import {
  LOAD_RECIPES,
  LOAD_MY_RECIPES,
  LOAD_MORE,
  ADD_DISPLAYED_RECIPE,
} from "../actions/recipesAction";

const INITIAL_STATE = {
  recipesList: [],
  myRecipesList: [],
  displayedRecipe: {},
  isAllLoaded: false,
};

const recipesReducer = (state = INITIAL_STATE, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case LOAD_RECIPES: {
        draft.recipesList = action.payload;
        return draft;
      }
      case LOAD_MY_RECIPES: {
        draft.myRecipesList = action.payload;
        break;
      }

      case LOAD_MORE: {
        let newarray = draft.myRecipesList.concat(action.payload.recipes);
        draft.myRecipesList = newarray;
        draft.isAllLoaded = action.payload.isAllLoaded;
        break;
      }

      case ADD_DISPLAYED_RECIPE: {
        draft.displayedRecipe = action.payload;
        break;
      }

      default:
        return draft;
    }
  });

export default recipesReducer;
