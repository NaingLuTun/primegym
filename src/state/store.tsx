import { configureStore } from "@reduxjs/toolkit";

import scheduleReducer from "./scheduleSlice/scheduleSlice"

export const store = configureStore({
    reducer: {scheduleReducer}
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch