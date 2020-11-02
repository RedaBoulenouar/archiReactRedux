import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { createBrowserHistory } from "history";
import rootReducer from "./Reducers/index";
import rootSaga from "./Sagas/index";
import { composeWithDevTools } from "redux-devtools-extension";

const history = createBrowserHistory({
  basename: process.env.PUBLIC_URL,
});
const sagaMiddleware = createSagaMiddleware();
const saveState = (state) => {
  localStorage.setItem("rbinfopro", JSON.stringify(state));
};
const loadState = () => {
  const state = localStorage.getItem("rbinfopro");
  if (state) {
    return JSON.parse(state);
  }
  return {};
};

const store = createStore(
  rootReducer,
  loadState(),
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

// then run the saga
sagaMiddleware.run(rootSaga);
store.subscribe(() => {
  saveState(store.getState());
});
export { store, history };
