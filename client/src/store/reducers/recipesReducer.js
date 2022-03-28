import produce from "immer";
import {
  LOAD_RECIPES,
  LOAD_MY_RECIPES,
  LOAD_MORE,
} from "../actions/recipesAction";

const INITIAL_STATE = { recipesList: [], myRecipesList: [], num: [] };

const recipesReducer = (state = INITIAL_STATE, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case LOAD_RECIPES: {
        draft.recipesList = action.payload;
        return draft;
      }
      case LOAD_MY_RECIPES: {
        console.log("imHere");
        draft.myRecipesList = action.payload;
        break;
      }

      case LOAD_MORE: {
        console.log(action.payload);
        console.log(draft.myRecipesList);
        let newarray = draft.myRecipesList.concat(action.payload);
        console.log(newarray);
        // draft.myRecipesList = draft.myRecipesList.concat(action.payload);
        draft.myRecipesList = newarray;
        break;
      }

      default:
        return draft;
    }
  });

export default recipesReducer;
