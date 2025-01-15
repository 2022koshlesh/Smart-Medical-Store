import { combineReducers } from "@reduxjs/toolkit";
import invoicesReducer from "./invoicesSlice.js";
import updateReducer from "./updateSlice.js";  // Import your other reducers

const rootReducer = combineReducers({
  invoices: invoicesReducer,
  bulk: updateReducer
});

export default rootReducer;
