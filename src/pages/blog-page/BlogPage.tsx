import BlogGrid from "../../components/blog/BlogGrid"
import Nav from "../../components/nav/Nav"
import Footer from "../../components/footer/Footer"


import { useMediaQuery } from "react-responsive"
import BlogSideBar from "../../components/blog/BlogSideBar"
import HeroComponent from "../../components/pages-hero-component/HeroComponent"


const BlogPage = () => {

    const isMediumScreen = useMediaQuery({query: "(min-width: 768px)"})
    const isLargeScreen = useMediaQuery({query: "(min-width: 1024px)"})

    return (
        <div>
            <Nav />
                
                <HeroComponent />
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