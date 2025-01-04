import { useSelector, useDispatch } from "react-redux"
import { RootState, AppDispatch } from "../../state/store"

import { setHoveredBlog } from "../../state/blogSlice/BlogSlice"

import { Link } from "react-router-dom" 

import BlogDateFormat from "./BlogDateFormat"

const BlogGrid = () => {

    const blogInfo = useSelector((state: RootState) => state.blogReducer.blogInfo)

    const hoveredBlog = useSelector((state: RootState) => state.blogReducer.hoveredBlog)

    const dispatch = useDispatch<AppDispatch>()
    
    return (
        <>  
            {blogInfo.map((blog, index) => (
                <Link key={blog.blogTitle} to={`/blogs/${blog.blogTitle.split(" ").join("_")}`}>
                    <div    
                    onMouseEnter={() => dispatch(setHoveredBlog(index))}
                    onMouseLeave={() => dispatch(setHoveredBlog(null))} className="w-full bg-[#232429] rounded-md individual-blog-container">
                        <div className="w-full rounded-t-md overflow-hidden blog-img-container">
                            <img src={blog.img} alt="blog image" className={`${hoveredBlog === index? "scale-[1.2]": ""} transition-all duration-500 w-full rounded-t-md`} />
                        </div>

                        <div className="flex gap-[20px] items-center w-full p-[20px] blog-info-texts-container">
                            <div className="w-[50%] text-center border-r border-white blog-date ">
                                <BlogDateFormat  date={new Date(blog.date)}/>
                            </div>
                            <div className="w-[50%] text-[20px] text-white font-[700] blog-title">
                                {blog.blogTitle}
                            </div>
                        </div>
                    </div>
                </Link>
            ))}
        
        </>
    )
}

export default BlogGrid