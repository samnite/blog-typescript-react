import { applyMiddleware, combineReducers, createStore, Store } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunkMiddleware from "redux-thunk";
import { connectRouter, routerMiddleware } from "connected-react-router";
import { createBrowserHistory } from "history";
import blogReducer, { RootState } from "./reducers/blog-reducer";

let mStore: Store;

const initialState = {};
const history = createBrowserHistory();

export interface State {
  data: RootState;
}

type InitRootState = State | {};

const rootReducer = combineReducers({
  router: connectRouter(history),
  data: blogReducer
});

export const createNewStore = (state: InitRootState) =>
  createStore(
    rootReducer,
    state,
    composeWithDevTools(
      applyMiddleware(routerMiddleware(history), thunkMiddleware)
    )
  );

const initialStore = (state = initialState) => {
  if (!mStore) {
    mStore = createNewStore(state);
  }

  return mStore;
};

const store = initialStore();

export default store;
