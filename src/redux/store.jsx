import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './CounterSlice'




const store = configureStore({reducer: counterReducer});


export default store;