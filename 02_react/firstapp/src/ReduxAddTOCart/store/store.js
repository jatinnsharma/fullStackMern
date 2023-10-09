import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "../reducer/root";

const store = configureStore({reducer:rootReducer})

export default store