import { combineReducers } from "redux";
import { UPDATE_MESSAGE } from "./Actions";
import initialState from "./State";

function message(message = initialState.message, action) {
  switch (action.type) {
    case UPDATE_MESSAGE:
      return action.text;
  }
  return message;
}

const rootReducer = combineReducers({
  message,
});

export default rootReducer;
