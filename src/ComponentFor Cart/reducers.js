// src/redux/reducers.js
import { combineReducers } from "redux";
import cartReducer from "./CartSlice"; // استيراد cartReducer من cartSlice.js

const rootReducer = combineReducers({
  cart: cartReducer, // تعيين cartReducer لإدارة cart
});

export default rootReducer;
