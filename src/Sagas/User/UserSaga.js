import { takeLatest, put, call, all } from "redux-saga/effects";

import { GET_ALL_USERS, getUsersSuccess } from "../../Actions/User/UserActions";

import { getUsers } from "../../Services/User/UserService";

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

export default function* localContractsWatcher() {
  yield all([takeLatest(GET_ALL_USERS, getUsersSaga)]);
}
