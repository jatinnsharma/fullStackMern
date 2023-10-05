import { configureStore } from "@reduxjs/toolkit";
import rootreducer from "../reducer/Root";

const store = configureStore({reducer:rootreducer})

export default store;