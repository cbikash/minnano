import { configureStore } from "@reduxjs/toolkit";
import AboutSlice  from "./About/AboutSlice";

const store = configureStore({
    reducer: {
        about: AboutSlice.reducer,
    }
})

export default store