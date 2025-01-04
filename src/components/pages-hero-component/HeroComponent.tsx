import { Link, useLocation } from "react-router-dom"

import { useMediaQuery } from "react-responsive"

import heroImg from "../../assets/header-swiper-images/header-swiper-image-1.jpg"

const HeroComponent = () => {

    /* To get the path name */
    const currentUrlLocation = useLocation()
    const pathName = currentUrlLocation.pathname

    /* split the path name at "/" */
    const dividedPathName = pathName.split("/")

    /* get the last path name */
    const lastPathNameSegment = dividedPathName[dividedPathName.length - 1]

    /* finally make the first character of the last path name, uppercase */
    const pageTitle = lastPathNameSegment.charAt(0).toUpperCase() + lastPathNameSegment.slice(1)

    const isMediumScreen = useMediaQuery({query: "(min-width: 768px)"})
    const isLargeScreen = useMediaQuery({query: "(min-width: 1024px)"})


  return (

    <div className="w-full max-h-[400px] overflow-hidden relative blogHeroContainer">
        <img src={heroImg} alt="Blog" className="w-full brightness-50 heroImg" />

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 blogHeroTextContainer">
            <h2 className={`font-[800] mb-[10px] text-white ${isLargeScreen? "text-[45px]" : isMediumScreen? "text-[30px]" :  "text-[20px]"}`}>{pageTitle}</h2>

            <div className="w-full flex justify-center homeButtonContainer">
                <Link to="/home" 
                    className={`${isMediumScreen? "p-4 pr-8 pl-8" : "p-2 pr-6 pl-6 text-[12px]"} text-white text-nowrap rounded-md bg-[#fb5b20] hover:text-black transition-all duration-500`}>
                    Home
                </Link>
            </div>
                            
         </div>
    </div>
        
  )
}

export default HeroComponent