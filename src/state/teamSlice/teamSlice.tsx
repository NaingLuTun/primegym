import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import trainer1Img from "../../assets/trainers-images/trainer-1.jpg"
import trainer2Img from "../../assets/trainers-images/trainer-2.jpg"
import trainer3Img from "../../assets/trainers-images/trainer-3.jpg"

interface TeamSliceState {
    hoveredIndex: number | null,
    trainerImgs: string[],
    trainerNames: string[],
}

const initialState: TeamSliceState = {
    hoveredIndex: null,
    trainerImgs: [trainer1Img, trainer2Img, trainer3Img],
    trainerNames: ["John Doe", "James Taylor", "Adam Phillips"]
}

const teamSlice = createSlice({
    name: "teamSlice",
    initialState,
    reducers: {
        setHoveredIndex: (state, action: PayloadAction<number | null>) => {state.hoveredIndex = action.payload},
    }
})

export const {setHoveredIndex} = teamSlice.actions

export default teamSlice.reducer