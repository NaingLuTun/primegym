import BlogGrid from "../../components/blog/BlogGrid"
import Nav from "../../components/nav/Nav"
import Footer from "../../components/footer/Footer"
import heroImg from "../../assets/header-swiper-images/header-swiper-image-1.jpg"

import { useMediaQuery } from "react-responsive"
import { Link } from "react-router-dom"

import searchIcon from "../../assets/blog-page-icons/search-svgrepo-com.svg"

import { useSelector } from "react-redux"
import { RootState } from "../../state/store"
import { useState } from "react"

const BlogPage = () => {

    const isMediumScreen = useMediaQuery({query: "(min-width: 768px)"})
    const isLargeScreen = useMediaQuery({query: "(min-width: 1024px)"})

    const blogs = useSelector((state: RootState) => state.blogReducer.blogInfo)

    const [hoveredPost, setHoveredPost] = useState<string | null>(null)

    return (
        <div>
            <Nav />
                <div className="w-full max-h-[400px] overflow-hidden relative blogHeroContainer">
                    <img src={heroImg} alt="Blog" className="w-full brightness-50 heroImg" />

                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 blogHeroTextContainer">
                        <h2 className={`font-[800] mb-[10px] text-white ${isLargeScreen? "text-[45px]" : isMediumScreen? "text-[30px]" :  "text-[20px]"}`}>Blogs</h2>

                        <div className="w-full flex justify-center homeButtonContainer">
                            <Link to="/home" 
                            className={`${isMediumScreen? "p-4 pr-8 pl-8" : "p-2 pr-6 pl-6 text-[12px]"} text-white text-nowrap rounded-md bg-[#fb5b20] hover:text-black transition-all duration-500`}>
                                Home
                            </Link>
                        </div>
                        
                    </div>
                </div>

                <div className={`flex ${isLargeScreen? "flex-row p-[40px] gap-[40px]" :isMediumScreen? "flex-col p-[40px] gap-[40px]":"flex-col p-[20px] gap-[40px]"} blogGridAndGridSideBarContainer`}>
                    <div className={`grid ${isLargeScreen? "grid-cols-2 w-[70%] gap-[40px]" : isMediumScreen? "grid-cols-2 gap-[40px] w-full": "grid-cols-1 w-full gap-[20px]"} blogGridContainer`}>
                        <BlogGrid />
                    </div>

                    <div className={`${isLargeScreen? "w-[30%]": "w-full"} gridSideBarContainer`}>
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
                                    <div
                                    key={blog.blogTitle}
                                    onMouseEnter={() => setHoveredPost(blog.blogTitle)}
                                    onMouseLeave={() => setHoveredPost(null)}
                                    className="bg-[#f4f5f8] rounded-sm overflow-hidden mt-[15px] mb-[15px] flex w-full hover:cursor-pointer individualRecentPostContainer">
                                        <img src={blog.img} alt="blog" className="w-[150px]"/>
                                        <div className="p-[10px] w-full blogPostTitleContainer">
                                            <p className={`${hoveredPost === blog.blogTitle? "text-[#e79140]": ""} font-[500] text-[#232429] `}>{blog.blogTitle}</p>
                                        </div>
                                        
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                
            <Footer />
        </div>
    )
}

export default BlogPage