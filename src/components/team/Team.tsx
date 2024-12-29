
import { useMediaQuery } from "react-responsive"

import { AppDispatch, RootState } from "../../state/store"
import { setHoveredIcon, setHoveredIndex } from "../../state/teamSlice/teamSlice"
import { useSelector, useDispatch } from "react-redux"

const Team = () => {

    const isMediumScreen = useMediaQuery({query: "(min-width: 768px)"})
    const isLargeScreen = useMediaQuery({query: "(min-width: 1024px)"})

    const hoveredIndex = useSelector((state: RootState) => state.teamReducer.hoveredIndex)
    const hoveredIcon = useSelector((state: RootState) => state.teamReducer.hoveredIcon)
    const trainerImgs = useSelector((state: RootState) => state.teamReducer.trainerImgs)
    const trainerNames = useSelector((state: RootState) => state.teamReducer.trainerNames)
    const socialDarkIcons = useSelector((state: RootState) => state.teamReducer.teamSocialDarkIcons)
    const socialLightIcons = useSelector((state: RootState) => state.teamReducer.teamSocialLightIcons)

    const dispatch = useDispatch<AppDispatch>()

    return (
        <div className={`p-[40px]`}>
            <div className="text-center mb-[40px] team-header-container">
                <h3 className={`${isLargeScreen? "text-[20px]" : "text-[18px]"} text-[#fb5b20] font-[600] team-sub-header`}>THE TEAM</h3>
                <h2 className={`${isLargeScreen? "text-[45px]": isMediumScreen? "text-[30px]" : "text-[25px]"} text-[#232429]   font-[800] team-main-header`}>EXPERT TRAINERS</h2>
            </div>

            <div className={`grid gap-[40px] ${isLargeScreen? "grid-cols-3": isMediumScreen? "grid-cols-2" : "grid-cols-1"} trainers-container`}>
                {trainerImgs.map((img, index) => (
                    <div key={index} onMouseEnter={() => dispatch(setHoveredIndex(index))} onMouseLeave={() => dispatch(setHoveredIndex(null))} className={`h-fit overflow-hidden relative w-full rounded-md individual-img-container`}>
                        <img src={img} alt="trainers" className={`${hoveredIndex === index? "scale-125" : ""} transition-all duration-500 w-full rounded-md`}/>
                        
                        <span className={`${hoveredIndex === index? "w-full h-full": "w-0 h-0"} transition-all duration-500 bg-[#1b1b1bc4] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2`}></span>

                        <div className={`${hoveredIndex === index ? "opacity-1": "opacity-0"} absolute transition-all duration-500 bg-transparent top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center gap-5 trainer-socials-container`}>
                            <button
                            onMouseEnter={() => dispatch(setHoveredIcon("twitter"))}
                            onMouseLeave={() => dispatch(setHoveredIcon(null))}
                            className="w-[40px] p-3 bg-white rounded-full transition-all duration-500 hover:bg-[#858585]">
                                <img 
                                src={hoveredIcon === "twitter"? socialLightIcons.twitterIconLight:socialDarkIcons.twitterIconDark} 
                                alt="twitter" 
                                className="w-full transition-all duration-500"/>
                            </button>

                            <button
                            onMouseEnter={() => dispatch(setHoveredIcon("facebook"))}
                            onMouseLeave={() => dispatch(setHoveredIcon(null))}
                            className="w-[40px] p-3 bg-white rounded-full transition-all duration-500 hover:bg-[#858585]">
                                <img 
                                src={hoveredIcon === "facebook"? socialLightIcons.facebookIconLight:socialDarkIcons.facebookIconDark} 
                                alt="facebook" 
                                className="w-full transition-all duration-500" />
                            </button>

                            <button 
                            onMouseEnter={() => dispatch(setHoveredIcon("linkedin"))}
                            onMouseLeave={() => dispatch(setHoveredIcon(null))}
                            className="w-[40px] p-3 bg-white rounded-full transition-all duration-500 hover:bg-[#858585]">
                                <img 
                                src={hoveredIcon === "linkedin"? socialLightIcons.linkedinIconLight:socialDarkIcons.linkedinIconDark} 
                                alt="linkedin" 
                                className="w-full transition-all duration-500" />
                            </button>
                        </div>

                        <div className="absolute bg-[#000000e3] h-fit bottom-0 w-full pt-[25px] pb-[25px] text-center">
                            <p className="text-white text-[22px] font-[500] mb-2 trainer-names">{trainerNames[index].toLocaleUpperCase()}</p>
                            <p className="text-[16px] text-[#c9c9c9]">TRAINERS</p>
                        </div>
                    </div>
                ))}
                
            </div>
            
        </div>
    )
}

export default Team