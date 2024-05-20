import { configureStore } from "@reduxjs/toolkit";
import detailsReducer from './slice/slice'
const store = configureStore({
    reducer:{
        details:detailsReducer
    }
});

export default store;