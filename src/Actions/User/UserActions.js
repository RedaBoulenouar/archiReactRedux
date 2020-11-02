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
