import {
  GET_ALL_USERS_SUCCESS,
  ADD_USER_SUCCESS,
  DELETE_USER_SUCCESS,
} from "../../Actions/User/UserActions";

const userReducer = (state = [], action) => {
  switch (action.type) {
    case GET_ALL_USERS_SUCCESS:
      return action.payload;
    case ADD_USER_SUCCESS:
      return [...state, action.payload];
    case DELETE_USER_SUCCESS:
      return state.filter((x) => x.id !== action.payload);
    default:
      return state;
  }
};
export default userReducer;
