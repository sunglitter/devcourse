import { combineReducers, configureStore } from "@reduxjs/toolkit";
import counterSlice from "../features/counter/counterSlice";

const rootReducer = combineReducers({
  counter: counterSlice,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
