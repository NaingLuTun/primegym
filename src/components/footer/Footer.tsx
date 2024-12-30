import { useMediaQuery } from "react-responsive"

import locationIcon from "../../assets/footer-icon/location-pin-svgrepo-com.svg"
import mailIcon from "../../assets/footer-icon/mail-open-svgrepo-com.svg"
import phoneIcon from "../../assets/footer-icon/phone-flip-svgrepo-com.svg"

import arrowIcon from "../../assets/footer-icon/footer-arrow.svg"

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
    <div className={`${isLargeScreen? "pr-[40px] pl-[40px]":""} relative bg-[#232429]`}>
        <div className={`grid ${isLargeScreen? "grid-cols-3 gap-[40px]": isMediumScreen? "grid-cols-2" : "grid-cols-1"} main-footer-container`}>
            <div className={`${isLargeScreen? "pt-[40px] pb-[80px]":"p-[20px] pb-[40px]" } individual-footer-links-container get-in-touch`}>
                <h3 className={`${isLargeScreen? "text-[24px]": "text-[20px]"} text-white font-[500] mb-[24px]`}>GET IN TOUCH</h3>

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
            <div className={`${isLargeScreen? "pt-[40px] pb-[80px]":"p-[20px] pb-[40px]" } individual-footer-links-container quick-links`}>
                <h3 className={`${isLargeScreen? "text-[24px]": "text-[20px]"} text-white font-[500] mb-[24px]`}>QUICK LINKS</h3>

                <li className="list-none quick-links-container">
                    <ul className="flex items-center gap-[5px] mb-4 location-info-container">
                        <img src={arrowIcon} alt="click" className="w-[20px]" />
                        <a href="#" className={`${isLargeScreen? "text-[16px]" : "text-[14px]"} text-[#BDBDBF]`}>Home</a>
                    </ul>
                    <ul className="flex items-center gap-[5px] mb-4 location-info-container">
                        <img src={arrowIcon} alt="click" className="w-[20px]" />
                        <a href="#" className={`${isLargeScreen? "text-[16px]" : "text-[14px]"} text-[#BDBDBF]`}>About us</a>
                    </ul>
                    <ul className="flex items-center gap-[5px] mb-4 location-info-container">
                        <img src={arrowIcon} alt="click" className="w-[20px]" />
                        <a href="#" className={`${isLargeScreen? "text-[16px]" : "text-[14px]"} text-[#BDBDBF]`}>Classes</a>
                    </ul>
                    <ul className="flex items-center gap-[5px] mb-4 location-info-container">
                        <img src={arrowIcon} alt="click" className="w-[20px]" />
                        <a href="#" className={`${isLargeScreen? "text-[16px]" : "text-[14px]"} text-[#BDBDBF]`}>Trainers</a>
                    </ul>
                    <ul className="flex items-center gap-[5px] mb-4 location-info-container">
                        <img src={arrowIcon} alt="click" className="w-[20px]" />
                        <a href="#" className={`${isLargeScreen? "text-[16px]" : "text-[14px]"} text-[#BDBDBF]`}>Blogs</a>
                    </ul>
                    <ul className="flex items-center gap-[5px] mb-4 location-info-container">
                        <img src={arrowIcon} alt="click" className="w-[20px]" />
                        <a href="#" className={`${isLargeScreen? "text-[16px]" : "text-[14px]"} text-[#BDBDBF]`}>Contact</a>
                    </ul>
                </li>
            </div>

            <div className={`${!isLargeScreen && isMediumScreen? "col-span-2 p-[20px]": " p-[40px]"} relative flex flex-col justify-center items-center z-20 bg-[#fb5b20]  `}>
                <h3 className={`${isLargeScreen? "text-[24px]": "text-[20px]"} text-white font-[500] mb-[24px]`}>NEWSLETTER</h3>
                <h4 className="text-white font-[500] mb-2">SUBSCRIBE OUR NEWSLETTER</h4>
                <p className="text-white text-center mb-2">Stay motivated and get the latest fitness tips. Subscribe to the PRIMEGYM newsletter today!</p>

                <div className="flex rounded-md w-fit">
                    <input type="text" placeholder="Your Email" className="max-w-[150px] bg-white rounded-l-md p-[16px] focus:outline-none focus:border-none" />
                    <button className="text-white bg-[#232429] p-[16px] rounded-r-md text-nowrap">SIGN UP</button>
                </div>

                {isLargeScreen? (<p className="text-white absolute bottom-[20px]">Developed by <span className="font-[500]">Naing Lu Tun</span></p>): null}
            </div>

            <div className={`${isLargeScreen? "absolute bottom-0 left-0 w-full " : isMediumScreen? "col-span-2 flex justify-between" : "flex justify-between"} items-center z-10 p-[20px] pl-[50px] pr-[50px]  bg-[#111]`}>
                <p className="text-[#BDBDBF]">&copy; <span className="text-white font-[500]">PRIMEGYM</span>. All Rights Reserved</p>
                {!isLargeScreen? (<p className="text-white">Developed by <span className="font-[500]">Naing Lu Tun</span></p>): null}
            </div>
        </div>
    </div>
  )
}

export default Footer