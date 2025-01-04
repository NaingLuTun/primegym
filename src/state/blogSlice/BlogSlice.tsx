import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import blogImg1 from "../../assets/blog-images/blog-image-1.jpg"
import blogImg2 from "../../assets/blog-images/blog-image-2.jpg"
import blogImg3 from "../../assets/blog-images/blog-image-3.jpg"

interface BlogInfoType {
    img: string,
    date: string,
    blogTitle: string,
    blogContent: string
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
                blogTitle: "Start Your Journey at PRIMEGYM",
                blogContent: `At PRIMEGYM, we believe that every journey begins with a single step. Whether you're looking to get fit, build strength, or simply improve your overall health, PRIMEGYM is here to guide you every step of the way. Our state-of-the-art facilities and expert trainers provide the perfect environment to help you achieve your goals.\n 
                Starting your fitness journey is about more than just showing up; it's about committing to your personal growth. Our trainers work with you to create a customized workout plan that suits your needs and helps you stay motivated. Whether you're new to fitness or an experienced athlete, we offer the tools and support you need to progress.\n
                At PRIMEGYM, we understand that every individual's journey is unique. We focus on building healthy habits that last, providing a welcoming environment for you to thrive. Along with your physical progress, you'll gain mental toughness and emotional well-being, which are essential parts of the fitness journey.\n 
                No matter where you're starting from, PRIMEGYM is here to help you take that first step and continue progressing toward your goals. Start your journey with us today, and unlock your full potential!`
            },
            {
                img: blogImg2,
                date: new Date(2024, 9, 20).toISOString(),
                blogTitle: "Improving yourself at PRIMEGYM",
                blogContent: `At PRIMEGYM, we believe that self-improvement begins with the right environment. Whether your goal is to build physical strength, boost mental resilience, or adopt healthier habits, we provide everything you need to achieve your personal best. Physical strength is the foundation of self-improvement, and with top-notch equipment and expert trainers, we help you reach your potential. Strength training not only transforms your body but also boosts your confidence and energy levels.\n

                Mental toughness is just as important as physical strength, and at PRIMEGYM, we push you to break through limits and build resilience. The mental strength gained through challenging workouts will carry over into every area of your life. Creating lasting healthy habits is crucial for sustainable improvement. With personalized workout plans, nutrition advice, and ongoing support, we help you make lasting changes to your lifestyle.\n

                Every fitness journey is unique, and our trainers are here to help you set and achieve personalized goals. Whether you’re training for a competition or simply working to improve your overall health, our guidance ensures you stay on track. Exercise at PRIMEGYM also enhances emotional well-being, as physical activity increases endorphins, improving mood and reducing stress. Our supportive community ensures that you’ll grow stronger, both physically and emotionally.\n

                Improving yourself at PRIMEGYM is about more than just fitness. It’s about becoming a stronger, more resilient, and healthier version of yourself. Join us today, and start your journey toward personal growth!`
            },
            {
                img: blogImg3,
                date: new Date(2024, 5, 14).toISOString(),
                blogTitle: "Reach new heights at PRIMEGYM",
                blogContent: `At PRIMEGYM, we believe that everyone has the potential to reach new heights, both physically and mentally. Whether you're aiming to improve your fitness, push past your limits, or build healthier habits, we're here to help you achieve greatness. With top-tier equipment, expert trainers, and a supportive community, we provide everything you need to elevate your fitness journey.\n

                Reaching new heights begins with setting goals that challenge you. Our personalized training programs are designed to help you push boundaries and reach your full potential. Every workout is an opportunity to grow stronger, increase endurance, and improve performance.\n

                At PRIMEGYM, we focus on both physical and mental growth. As you challenge yourself in the gym, you'll develop the resilience and determination needed to overcome obstacles in all areas of your life. Our trainers are here to guide you, offering the motivation and expertise to help you go further than you ever thought possible.\n

                Join us at PRIMEGYM and take the first step toward reaching new heights. With consistency, dedication, and the right support, you’ll unlock your true potential and achieve the fitness goals you’ve always dreamed of.`
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