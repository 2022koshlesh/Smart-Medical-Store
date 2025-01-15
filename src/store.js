import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./redux/index.js";

const store = configureStore({
  reducer: rootReducer,
});

export default store;