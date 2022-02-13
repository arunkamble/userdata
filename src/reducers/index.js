import { combineReducers } from "redux";
export const results=(state = [], action)=> {
    switch (action.type) {
      case "searchUser":
        return action.results;
      default:
        return state;
    }
  }
const rootReducer = combineReducers({
  results,
})
export default rootReducer;