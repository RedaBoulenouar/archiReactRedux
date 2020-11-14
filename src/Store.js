import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import rootReducer from "./Reducers/index";
import rootSaga from "./Sagas/index";
import { composeWithDevTools } from "redux-devtools-extension";
import { createBrowserHistory } from "history";
const history = createBrowserHistory();

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
