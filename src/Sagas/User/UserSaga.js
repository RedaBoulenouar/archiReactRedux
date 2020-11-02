import { takeLatest, put, call, all } from "redux-saga/effects";

import {
  GET_ALL_USERS,
  getUsersSuccess,
  ADD_USER,
  addUserSuccess,
} from "../../Actions/User/UserActions";

import { getUsers, addUser } from "../../Services/User/UserService";

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
      yield put(addUserSuccess(payload));
    }
  } catch (error) {
    console.log(error);
  }
}

export default function* localContractsWatcher() {
  yield all([
    takeLatest(GET_ALL_USERS, getUsersSaga),
    takeLatest(ADD_USER, addUsersSaga),
  ]);
}
