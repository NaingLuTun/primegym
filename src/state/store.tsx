import { configureStore } from "@reduxjs/toolkit";

import scheduleReducer from "./scheduleSlice/scheduleSlice"
import teamReducer from "./teamSlice/teamSlice"
import blogReducer from "./blogSlice/BlogSlice"
import contactReducer from "./contactSlice/contactSlice"

export const store = configureStore({
    reducer: {scheduleReducer, teamReducer, blogReducer, contactReducer}
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch