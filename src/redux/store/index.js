import { combineReducers, configureStore } from "@reduxjs/toolkit";
// import mainReducer from "../reducers";
import jobReducer from "../reducers/jobReducer";
import dataReducer from "../reducers/dataReducer";

// const store = configureStore({
//   reducer: mainReducer,
// });

const unifiedReducer = combineReducers({
  favoriti: jobReducer,
  data: dataReducer,
});

const store = configureStore({
  reducer: unifiedReducer,
});

export default store;
