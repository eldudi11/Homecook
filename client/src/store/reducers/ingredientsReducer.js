const INITIAL_STATE = { ingredientsList: {} };

const ingredientsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "LOAD_INGREDIENTS":
      return { ...state, ingredientsList: action.payload };
    default:
      return state;
  }
};

export default ingredientsReducer;
