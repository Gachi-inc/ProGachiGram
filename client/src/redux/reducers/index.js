import { combineReducers } from "redux";

const reducers = ["messages", "dialogs", "user"];

export default combineReducers(
  reducers.reduce((initial, value) => {
    initial[value] = require(`./${value}`).default;
    return initial;
  }, {})
);