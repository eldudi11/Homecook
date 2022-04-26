import produce from "immer";
import { DEFINE_CURRNET_USER, LOAD_USERS } from "../actions/usersAction";

const INITIAL_STATE = { usersList: [], currentUser: Object };

const usersReducer = (state = INITIAL_STATE, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case LOAD_USERS: {
        draft.usersList = action.payload;
        break;
      }

      case DEFINE_CURRNET_USER: {
        //draft.currentUser.push(action.payload);
        draft.currentUser = action.payload;
        break;
      }

      default:
        return draft;
    }
  });

export default usersReducer;
