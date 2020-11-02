import { combineReducers } from "redux";
import userData from "./User/UserReducer";

// Here all the reducers are declared
// The reducer is a pure function that takes the previous state and an action
// it return the next state

export default combineReducers({
  userData,
});
