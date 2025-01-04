import { useMediaQuery } from "react-responsive"

import searchIcon from "../../assets/blog-page-icons/search-svgrepo-com.svg"

import { useSelector } from "react-redux"
import { RootState } from "../../state/store"
import { useState } from "react"
import { Link } from "react-router-dom"

const BlogSideBar = () => {
    const isLargeScreen = useMediaQuery({query: "(min-width: 1024px)"})
    const isMediumScreen = useMediaQuery({query: "(min-width: 768px)"})

    const blogs = useSelector((state: RootState) => state.blogReducer.blogInfo)

    const [hoveredPost, setHoveredPost] = useState<string | null>(null)

  return (
    <div className={`${isLargeScreen? "w-[30%]": "w-full"} blogSideBarContainer`}>
        <div className="flex rounded-md w-full">
            <input type="text" placeholder="Keyword" className=" flex-grow bg-white border border-[#9c9c9c98] rounded-l-md p-[16px] focus:outline-none" />
            <button className="flex justify-center items-center text-white bg-[#fb5b20] p-[16px]  pr-[24px] pl-[24px] rounded-r-md text-nowrap">
                <img src={searchIcon} alt="search" className="w-[16px]" />
            </button>
        </div>

        <div className="mt-[50px] recentPosts">
            <h2 className={`text-[#232429] font-[700] ${isLargeScreen? "text-[28px]": isMediumScreen? "text-[26px]":"text-[24px]"} recentPostHeader`}>RECENT POSTS</h2>

            <div className="bg-[#232429] p-[20px] rounded-[4px] recentPostsContainer">
                {blogs.map(blog => (
                    <Link key={blog.blogTitle} to={`/blogs/${blog.blogTitle.split(" ").join("_")}`}>
                        <div
                        onMouseEnter={() => setHoveredPost(blog.blogTitle)}
                        onMouseLeave={() => setHoveredPost(null)}
                        className="bg-[#f4f5f8] rounded-sm overflow-hidden mt-[15px] mb-[15px] flex w-full hover:cursor-pointer individualRecentPostContainer">
                            <img src={blog.img} alt="blog" className={`${isLargeScreen? "w-[45%]":"w-[120px]"}`}/>
                            <div className={`p-[10px] ${isLargeScreen? "w-[55%]":"w-full"} blogPostTitleContainer`}>
                                <p className={`${hoveredPost === blog.blogTitle? "text-[#e79140]": ""} font-[500] text-[#232429] `}>{blog.blogTitle}</p>
                            </div>
                            
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    </div>
  )
}

export default BlogSideBar