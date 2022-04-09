import produce from "immer";
import {
  LOAD_INGREDIENTS,
  ADD_SELECTED_INGREDIENT,
  DELETE_SELECTED_INGREDIENT,
} from "./../actions/ingredientsAction";

const INITIAL_STATE = { ingredientsList: [], selectedIngredients: [] };

const ingredientsReducer = (state = INITIAL_STATE, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case LOAD_INGREDIENTS: {
        draft.ingredientsList = action.payload;
        return draft;
      }
      // case "ADD_SELECTED_INGREDIENT":
      //   return { ...state, selectedIngredients: action.payload };
      case ADD_SELECTED_INGREDIENT: {
        draft.selectedIngredients.push(action.payload);
        return draft;
      }

      case DELETE_SELECTED_INGREDIENT: {
        let index = draft.selectedIngredients.indexOf(action.payload);
        if (index !== -1) {
          draft.selectedIngredients.splice(index, 1);
        }
        return draft;
      }
      default:
        return draft;
    }
  });

export default ingredientsReducer;
