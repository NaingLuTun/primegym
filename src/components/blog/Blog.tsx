

import { useMediaQuery } from "react-responsive"
import { useSelector, useDispatch } from "react-redux"
import { RootState, AppDispatch } from "../../state/store"

import { setHoveredBlog } from "../../state/blogSlice/BlogSlice"

const Blog = () => {
    const isMediumScreen = useMediaQuery({query: "(min-width: 768px)"})
    const isLargeScreen = useMediaQuery({query: "(min-width: 1024px)"})

    const blogInfo = useSelector((state: RootState) => state.blogReducer.blogInfo)

    const hoveredBlog = useSelector((state: RootState) => state.blogReducer.hoveredBlog)

    const dispatch = useDispatch<AppDispatch>()

    const formatDate = (date: Date) => {
        const formattedDate = new Intl.DateTimeFormat('en-GB', {
            day: '2-digit',
            month: 'long',
            year: 'numeric'
        })

        const parts = formattedDate.formatToParts(date)

        const day = parts.find(part => part.type === "day")?.value
        const month = parts.find(part => part.type === "month")?.value
        const year = parts.find(part => part.type === "year")?.value

        return (
            <>
                <p className="text-[#BDBDBF]">{day}</p>
                <p className="text-white font-[600]">{month}</p>
                <p className="text-[#BDBDBF]">{year}</p>
            </>
            
        )
    }

    return (
        <div className={`${isLargeScreen? "p-[40px]":"p-[20px]"} bg-white`}>
            <div className="text-center mb-[40px] blog-header-container">
                <h3 className={`${isLargeScreen? "text-[20px]" : "text-[18px]"} text-[#fb5b20] font-[600] blog-sub-header`}>OUR BLOG</h3>
                <h2 className={`${isLargeScreen? "text-[45px]": isMediumScreen? "text-[30px]" : "text-[25px]"} text-[#232429] font-[800] blog-main-header`}>LATEST BLOG POST</h2>
            </div>

            <div className={`grid ${isLargeScreen? "grid-cols-3 gap-[40px]":"grid-cols-1 gap-[20px]"} blogs-container`}>
                {blogInfo.map((blog, index) => (
                    <div key={blog.blogTitle} 
                    onMouseEnter={() => dispatch(setHoveredBlog(index))}
                    onMouseLeave={() => dispatch(setHoveredBlog(null))} className="w-full bg-[#232429] rounded-md individual-blog-container">
                        <div className="w-full rounded-t-md overflow-hidden blog-img-container">
                            <img src={blog.img} alt="blog image" className={`${hoveredBlog === index? "scale-[1.2]": ""} transition-all duration-500 w-full rounded-t-md`} />
                        </div>

                        <div className="flex gap-[20px] items-center w-full mt-[20px] mb-[20px] pr-[20px] pl-[20px] blog-info-texts-container">
                            <div className="w-[50%] text-center border-r border-white blog-date ">
                                {formatDate(new Date(blog.date))}
                            </div>
                            <div className="w-[50%] text-[20px] text-white font-[700] blog-title">
                                {blog.blogTitle}
                            </div>
                        </div>
                    </div>
                ))}
            </div>


        </div>
    )
}

export default Blog