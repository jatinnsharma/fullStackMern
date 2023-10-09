import { combineReducers } from "@reduxjs/toolkit";
import cartReducer from './reducer'

const rootReducer = combineReducers({reducer: cartReducer})

export default rootReducer;