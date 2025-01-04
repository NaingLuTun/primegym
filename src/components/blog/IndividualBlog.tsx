import { RootState } from "../../state/store"
import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"

import { useMediaQuery } from "react-responsive"

const IndividualBlog = () => {
    const isLargeScreen = useMediaQuery({query: "(min-width: 1024px)"})

    const blogInfo = useSelector((state: RootState) => state.blogReducer.blogInfo)
    const {blogTitle} = useParams()

    const blogToDisplay = blogInfo.find((blog) => blog.blogTitle.split(" ").join("_") === blogTitle)

    

    if(!blogToDisplay) {
        return (<div>Blog not found.</div>)
    }

    const blogContentParagraph = blogToDisplay.blogContent.split("\n")

    return (
        <div className={`${isLargeScreen? "w-[70%]":"w-full"}`}>
            <div className="w-full mb-[50px] blogImgContainer">
                <img src={blogToDisplay.img} alt="blog image" className="w-full rounded-md" />
            </div>

            <div className=" blogContent">
                <h2 className="text-[28px] text-[#232429] font-[700]">{blogToDisplay.blogTitle}</h2>

                <article>
                    {blogContentParagraph.map((para, index) => (
                        <p key={index} className="mt-[16px] mb-[16px] text-[#686a6f]" >{para}</p>
                    ))}
                </article>
            </div>
        </div>
    )
}

export default IndividualBlog