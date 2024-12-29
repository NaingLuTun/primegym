import { useMediaQuery } from "react-responsive"

import locationIcon from "../../assets/footer-icon/location-pin-svgrepo-com.svg"
import mailIcon from "../../assets/footer-icon/mail-open-svgrepo-com.svg"
import phoneIcon from "../../assets/footer-icon/phone-flip-svgrepo-com.svg"

import twitterIconDark from "../../assets/social-icons/twitter-icon-dark.svg"
import twitterIconLight from "../../assets/social-icons/twitter-icon-light.svg"
import facebookIconDark from "../../assets/social-icons/facebook-icon-dark.svg"
import facebookIconLight from "../../assets/social-icons/facebook-icon-light.svg"
import linkedinIconDark from "../../assets/social-icons/linkedin-icon-dark.svg"
import linkedinIconLight from "../../assets/social-icons/linkedin-icon-light.svg"
import instagramIconDark from "../../assets/social-icons/instagram-icon-dark.svg"
import instagramIconLight from "../../assets/social-icons/instagram-icon-light.svg"
import { useState } from "react"


const Footer = () => {
    const isMediumScreen = useMediaQuery({query: "(min-width: 768px)"})
    const isLargeScreen = useMediaQuery ({query: "(min-width: 1024px)"})

    const [hoveredIcon, setHoveredIcon] = useState<string | null>(null)



  return (
    <div className={`${isLargeScreen? "p-[40px]":"p-[20px]"} bg-[#232429]`}>
        <div className={`grid ${isLargeScreen? "grid-cols-3 gap-[40px]": isMediumScreen? "grid-cols-2 gap-[20px]" : "grid-cols-1 gap-[20px]"} main-footer-container`}>
            <div className=" individual-footer-links-container get-in-touch">
                <h3 className={`${isLargeScreen? "text-[24px]": "text-[20px]"} text-white font-[500]`}>GET IN TOUCH</h3>

                <li className="list-none contacts-container">
                    <ul className="flex items-center gap-[5px] mb-4 location-info-container">
                        <img src={locationIcon} alt="click" className="w-[20px]" />
                        <p className={`${isLargeScreen? "text-[16px]" : "text-[14px]"} text-[#BDBDBF]`}>123 street, New York, USA</p>
                    </ul>
                    <ul className="flex items-center gap-[5px] mb-4 mail-info-container">
                        <img src={mailIcon} alt="click" className="w-[20px]" />
                        <p className={`${isLargeScreen? "text-[16px]" : "text-[14px]"} text-[#BDBDBF]`}>mail@domain.com</p>
                    </ul>
                    <ul className="flex items-center gap-[5px] mb-4 phone-info-container">
                        <img src={phoneIcon} alt="click" className="w-[20px]" />
                        <p className={`${isLargeScreen? "text-[16px]" : "text-[14px]"} text-[#BDBDBF]`}>+012 345 67890</p>
                    </ul>
                    
                    <ul className="flex gap-[12px] mt-6 social-links-container">
                        <button 
                        onMouseEnter={() => setHoveredIcon("twitter")}
                        onMouseLeave={() => setHoveredIcon(null)}
                        className="bg-[#fb5b20] w-[32px] h-[32px] rounded-full relative twitter-link">
                            <img src={twitterIconLight} alt="twitter" className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-[16px] transition-all duration-500 ${hoveredIcon === "twitter"? "opacity-0" : "opacity-100"}`} />
                            <img src={twitterIconDark} alt="twitter" className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-[16px] transition-all duration-500 opacity-0 ${hoveredIcon === "twitter"? "opacity-100" : "opacity-0"}`} />
                        </button>
                        <button 
                        onMouseEnter={() => setHoveredIcon("facebook")}
                        onMouseLeave={() => setHoveredIcon(null)}
                        className="bg-[#fb5b20] w-[32px] h-[32px] rounded-full relative facebook-link">
                            <img src={facebookIconLight} alt="facebook" className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-[16px] transition-all duration-500 ${hoveredIcon === "facebook"? "opacity-0" : "opacity-100"}`} />
                            <img src={facebookIconDark} alt="facebook" className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-[16px] transition-all duration-500 opacity-0 ${hoveredIcon === "facebook"? "opacity-100" : "opacity-0"}`} />
                        </button>
                        <button 
                        onMouseEnter={() => setHoveredIcon("linkedin")}
                        onMouseLeave={() => setHoveredIcon(null)}
                        className="bg-[#fb5b20] w-[32px] h-[32px] rounded-full relative linkedin-link">
                            <img src={linkedinIconLight} alt="linkedin" className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-[16px] transition-all duration-500 ${hoveredIcon === "linkedin"? "opacity-0" : "opacity-100"}`} />
                            <img src={linkedinIconDark} alt="linkedin" className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-[16px] transition-all duration-500 opacity-0 ${hoveredIcon === "linkedin"? "opacity-100" : "opacity-0"}`} />
                        </button>
                        <button 
                        onMouseEnter={() => setHoveredIcon("instagram")}
                        onMouseLeave={() => setHoveredIcon(null)}
                        className="bg-[#fb5b20] w-[32px] h-[32px] rounded-full relative instagram-link">
                            <img src={instagramIconLight} alt="instagram" className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-[16px] transition-all duration-500 ${hoveredIcon === "instagram"? "opacity-0" : "opacity-100"}`} />
                            <img src={instagramIconDark} alt="instagram" className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-[16px] transition-all duration-500 opacity-0 ${hoveredIcon === "instagram"? "opacity-100" : "opacity-0"}`} />
                        </button>
                    </ul>
                    
                </li>
            </div>
            <div>
                <h3>QUICK LINKS</h3>
            </div>

            <div className={`${!isLargeScreen? "col-span-2": ""}`}>
                
            </div>
        </div>
    </div>
  )
}

export default Footer