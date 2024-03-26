import { combineReducers, configureStore } from "@reduxjs/toolkit";
// import mainReducer from "../reducers";
import addReducer from "../reducers/addReducer";
import removeReducer from "../reducers/removeReducer";

// const store = configureStore({
//   reducer: mainReducer,
// });

const unifiedReducer = combineReducers({
  add: addReducer,
  delete: removeReducer,
});

const store = configureStore({
  reducer: unifiedReducer,
});

export default store;
