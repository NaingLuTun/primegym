import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import trainer1Img from "../../assets/trainers-images/trainer-1.jpg"
import trainer2Img from "../../assets/trainers-images/trainer-2.jpg"
import trainer3Img from "../../assets/trainers-images/trainer-3.jpg"
import linkedinIconDark from "../../assets/social-icons/linkedin-icon-dark.svg"
import linkedinIconLight from "../../assets/social-icons/linkedin-icon-light.svg"
import facebookIconDark from "../../assets/social-icons/facebook-icon-dark.svg"
import facebookIconLight from "../../assets/social-icons/facebook-icon-light.svg"
import twitterIconDark from "../../assets/social-icons/twitter-icon-dark.svg"
import twitterIconLight from "../../assets/social-icons/twitter-icon-light.svg"

interface TeamSliceState {
    hoveredIndex: number | null,
    hoveredIcon: string | null,
    trainerImgs: string[],
    trainerNames: string[],
    teamSocialDarkIcons: {
        twitterIconDark: string,
        facebookIconDark: string,
        linkedinIconDark: string,
    },
    teamSocialLightIcons: {
        twitterIconLight: string,
        facebookIconLight: string,
        linkedinIconLight: string,
    },
}

const initialState: TeamSliceState = {
    hoveredIndex: null,
    hoveredIcon: null,
    trainerImgs: [trainer1Img, trainer2Img, trainer3Img],
    trainerNames: ["John Doe", "James Taylor", "Adam Phillips"],
    teamSocialDarkIcons: {
        twitterIconDark: twitterIconDark,
        facebookIconDark: facebookIconDark,
        linkedinIconDark: linkedinIconDark,
    },
    teamSocialLightIcons: {
        twitterIconLight: twitterIconLight,
        facebookIconLight: facebookIconLight,
        linkedinIconLight: linkedinIconLight,
    },

}

const teamSlice = createSlice({
    name: "teamSlice",
    initialState,
    reducers: {
        setHoveredIndex: (state, action: PayloadAction<number | null>) => {state.hoveredIndex = action.payload},
        setHoveredIcon: (state, action: PayloadAction<string | null>) => {state.hoveredIcon = action.payload}
    }
})

export const {setHoveredIndex, setHoveredIcon} = teamSlice.actions

export default teamSlice.reducer