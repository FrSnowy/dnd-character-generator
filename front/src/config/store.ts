import thunk from "redux-thunk";
import rootReducer from "./reducer";
import history from "config/history";
import { applyMiddleware, createStore } from "redux";
import { routerMiddleware } from "connected-react-router";

const store = createStore(
  rootReducer,
  {},
  applyMiddleware(routerMiddleware(history), thunk)
);

export type State = ReturnType<typeof rootReducer>;
export type Dispatch = typeof store.dispatch;

export default store;