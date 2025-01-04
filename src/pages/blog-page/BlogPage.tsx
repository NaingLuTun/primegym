import BlogGrid from "../../components/blog/BlogGrid"
import Nav from "../../components/nav/Nav"
import Footer from "../../components/footer/Footer"
import heroImg from "../../assets/header-swiper-images/header-swiper-image-1.jpg"

import { useMediaQuery } from "react-responsive"
import { Link } from "react-router-dom"
import BlogSideBar from "../../components/blog/BlogSideBar"


const BlogPage = () => {

    const isMediumScreen = useMediaQuery({query: "(min-width: 768px)"})
    const isLargeScreen = useMediaQuery({query: "(min-width: 1024px)"})



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

                    <BlogSideBar />

                </div>
                
            <Footer />
        </div>
    )
}

export default BlogPage