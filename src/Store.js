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

const initialState = {};
const enhancers = [];

if (typeof window.__REDUX_DEVTOOLS_EXTENSION__ === "function") {
  enhancers.push(window.__REDUX_DEVTOOLS_EXTENSION__());
}

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);
// then run the saga
sagaMiddleware.run(rootSaga);

export { store, history };
