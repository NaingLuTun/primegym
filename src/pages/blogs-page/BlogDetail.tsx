import BlogSideBar from "../../components/blog/BlogSideBar"
import IndividualBlog from "../../components/blog/IndividualBlog"
import Footer from "../../components/footer/Footer"
import Nav from "../../components/nav/Nav"

import { useMediaQuery } from "react-responsive"

const BlogDetail = () => {
  const isLargeScreen = useMediaQuery({query: "(min-width: 1024px)"})
  const isMediumScreen = useMediaQuery({query: "(min-width: 768px)"})
  return (
    
    <>
      <Nav />
      <div className={`flex ${isLargeScreen? "flex-row p-[40px] gap-[40px]" :isMediumScreen? "flex-col p-[40px] gap-[40px]":"flex-col p-[20px] gap-[40px]"}`}>
        <IndividualBlog />
        <BlogSideBar />
      </div>
      <Footer />
    </>
  )
}

export default BlogDetail