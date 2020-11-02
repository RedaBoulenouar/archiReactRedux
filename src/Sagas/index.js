import { spawn, all } from "redux-saga/effects";
import usersWatcher from "./User/UserSaga";

// here you declare all your sagas
export default function* rootSaga() {
  yield all([spawn(usersWatcher)]);
}
