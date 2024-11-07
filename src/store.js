// src/redux/store.js
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./ComponentFor Cart/reducers"; // استيراد rootReducer من reducers.js

const store = configureStore({
  reducer: rootReducer,
});

export default store;
