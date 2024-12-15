import { createSlice, PayloadAction } from "@reduxjs/toolkit";


interface ScheduleSliceState {
    days: string[],
    selectedDay: string,
    hours: string[],
    programs: string[],
    trainers: string[],
}

const initialState: ScheduleSliceState = {
    days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    selectedDay: "Monday",
    hours: ["6:00AM- 8:00AM", "8:00AM - 10:00AM", "10:00AM - 12:00PM", "12:00PM - 2:00PM", "2:00PM - 4:00PM", "4:00Pm - 6:00PM", "6:00PM - 8:00PM", "8:00PM - 10:00PM"],
    programs: ["power lifting", "body building", "cardio program", "weight loose", "fitness program", "crossfit class", "muscle building", "yoga class"],
    trainers: ["Ethan Brooks", "Liam Carter", "Noah Reynolds", "Oliver Bennett", "Mason Clarke", "Lucas Foster", "Aiden Hayes", "Caleb Mitchell"],
}

const scheduleSlice = createSlice({
    name: "scheduleSlice",
    initialState,
    reducers: {
        setSelectedDay: (state, action: PayloadAction<string>) => {
            state.selectedDay = action.payload
        }
    }
})

export const {setSelectedDay} = scheduleSlice.actions
export default scheduleSlice.reducer