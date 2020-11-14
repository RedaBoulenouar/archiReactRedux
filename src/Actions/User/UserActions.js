export const GET_ALL_USERS = "user/GET_ALL_USERS";
export function getUsers() {
  return {
    type: GET_ALL_USERS,
  };
}

export const GET_ALL_USERS_SUCCESS = "user/GET_ALL_USERS_SUCCESS";
export function getUsersSuccess(data) {
  return {
    type: GET_ALL_USERS_SUCCESS,
    payload: data,
  };
}

export const ADD_USER = "user/ADD_USER";
export function addUser(user) {
  return {
    type: ADD_USER,
    payload: user,
  };
}

export const ADD_USER_SUCCESS = "user/ADD_USER_SUCCESS";
export function addUserSuccess(user) {
  return {
    type: ADD_USER_SUCCESS,
    payload: user,
  };
}

export const DELETE_USER = "user/DELETE_USER";
export function deleteUser(id) {
  return {
    type: DELETE_USER,
    payload: id,
  };
}

export const DELETE_USER_SUCCESS = "user/DELETE_USER_SUCCESS";
export function deleteUserSuccess(user) {
  return {
    type: DELETE_USER_SUCCESS,
    payload: user,
  };
}
