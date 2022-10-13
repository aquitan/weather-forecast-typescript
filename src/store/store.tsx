import { configureStore } from "@reduxjs/toolkit";
import weatherDataSlice from "./slice/weatherDataSlice";

export const store = configureStore({
    reducer: weatherDataSlice
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch