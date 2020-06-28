import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./Reducers";
import initialState from "./State";

const store = createStore(rootReducer, initialState, applyMiddleware(thunk));

export default store;
