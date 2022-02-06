import { produce } from "immer";

const INITIAL_STATE = { ingredientsList: [], selectedIngredients: [] };

const ingredientsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "LOAD_INGREDIENTS":
      return { ...state, ingredientsList: action.payload };
    case "ADD_SELECTED_INGREDIENT":
      return { ...state, selectedIngredients: action.payload };

    default:
      return state;
  }
};

export default ingredientsReducer;
