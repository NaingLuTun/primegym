import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import blogImg1 from "../../assets/blog-images/blog-image-1.jpg"
import blogImg2 from "../../assets/blog-images/blog-image-2.jpg"
import blogImg3 from "../../assets/blog-images/blog-image-3.jpg"

interface BlogInfoType {
    img: string,
    date: string,
    blogTitle: string
}

interface blogSliceState {
    hoveredBlog: number | null,
    blogInfo: BlogInfoType[]
}

const initialState: blogSliceState = 
    {
        hoveredBlog: null,
        blogInfo: [
            {
                img: blogImg1,
                date: new Date(2024, 11, 9).toISOString(),
                blogTitle: "Transform Your Fitness Journey with PRIMEGYM"
            },
            {
                img: blogImg2,
                date: new Date(2024, 9, 20).toISOString(),
                blogTitle: "Unleash Your Potential at PRIMEGYM"
            },
            {
                img: blogImg3,
                date: new Date(2024, 5, 14).toISOString(),
                blogTitle: "Achieve Your Fitness Goals with PRIMEGYM"
            },
        ]
    }

const blogSlice = createSlice({
    name: "blogSlice",
    initialState,
    reducers: {
        setHoveredBlog: ((state, action: PayloadAction<number | null>) => {
            state.hoveredBlog = action.payload
        })
    }
})

export const {setHoveredBlog} = blogSlice.actions

export default blogSlice.reducer