import { createStore, applyMiddleware, compose } from "redux";
import { createEpicMiddleware } from "redux-observable";
import thunk from "redux-thunk";
import reducers from "./reducers";

const isBrowser = typeof window !== `undefined`;
const composeEnhancers =
  isBrowser && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : compose;

const epicMiddleware = createEpicMiddleware(thunk);

export default createStore(
  reducers,
  composeEnhancers(applyMiddleware(epicMiddleware))
);
