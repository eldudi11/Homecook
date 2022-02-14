import produce from "immer";
import { LOAD_RECIPES } from "../actions/usersAction";

const LOAD_USERS = { usersList: [] };

const usersReducer = (state = INITIAL_STATE, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case LOAD_USERS: {
        draft.usersList = action.payload;
        return draft;
      }

      default:
        return draft;
    }
  });

export default usersReducer;
