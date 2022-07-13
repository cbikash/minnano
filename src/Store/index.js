import { configureStore } from "@reduxjs/toolkit";
import AboutSlice  from "./About/AboutSlice";
import uiSlice from "./uiSlice";

const store = configureStore({
    reducer: {
        about: AboutSlice.reducer,
        ui: uiSlice.reducer,
    }
})

export default store