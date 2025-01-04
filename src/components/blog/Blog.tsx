

import { useMediaQuery } from "react-responsive"
import BlogGrid from "./BlogGrid"



const Blog = () => {
    const isMediumScreen = useMediaQuery({query: "(min-width: 768px)"})
    const isLargeScreen = useMediaQuery({query: "(min-width: 1024px)"})


    return (
        <div className={`${isLargeScreen? "p-[40px]":"p-[20px]"} bg-white`}>
            <div className="text-center mb-[40px] blog-header-container">
                <h3 className={`${isLargeScreen? "text-[20px]" : "text-[18px]"} text-[#fb5b20] font-[600] blog-sub-header`}>OUR BLOG</h3>
                <h2 className={`${isLargeScreen? "text-[45px]": isMediumScreen? "text-[30px]" : "text-[25px]"} text-[#232429] font-[800] blog-main-header`}>LATEST BLOG POST</h2>
            </div>

            <div className={`grid ${isLargeScreen? "grid-cols-3 gap-[40px]":"grid-cols-1 gap-[20px]"} blogs-container`}>
                <BlogGrid />
            </div>


        </div>
    )
}

export default Blog