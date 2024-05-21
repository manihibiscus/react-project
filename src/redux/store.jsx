import { configureStore } from "@reduxjs/toolkit";
import detailsReducer from './slice/slice';
import apiReducer from './slice/apiSlice';
const store = configureStore({
    reducer:{
        details:detailsReducer,
        api:apiReducer
    }
});

export default store;