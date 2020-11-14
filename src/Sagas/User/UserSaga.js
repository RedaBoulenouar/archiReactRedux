import { takeLatest, put, call, all } from "redux-saga/effects";

import {
  GET_ALL_USERS,
  getUsersSuccess,
  ADD_USER,
  addUserSuccess,
  DELETE_USER,
  deleteUserSuccess,
} from "../../Actions/User/UserActions";

import { getUsers, addUser, deleteUser } from "../../Services/User/UserService";

function* getUsersSaga() {
  try {
    const users = yield call(getUsers);
    if (users) {
      yield put(getUsersSuccess(users));
    }
  } catch (error) {
    console.log(error);
  }
}
function* addUsersSaga({ payload }) {
  try {
    const userAdd = yield call(addUser, payload);
    if (userAdd) {
      yield put(addUserSuccess(userAdd));
    }
  } catch (error) {
    console.log(error);
  }
}
function* deleteUsersSaga({ payload }) {
  try {
    const deletedUser = yield call(deleteUser, payload);
    if (deletedUser) {
      yield put(deleteUserSuccess(deletedUser));
    }
  } catch (error) {
    console.log(error);
  }
}

export default function* localContractsWatcher() {
  yield all([
    takeLatest(GET_ALL_USERS, getUsersSaga),
    takeLatest(ADD_USER, addUsersSaga),
    takeLatest(DELETE_USER, deleteUsersSaga),
  ]);
}
