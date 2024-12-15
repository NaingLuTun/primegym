import aboutImg from "../../assets/trainers-images/trainer-1.jpg"

import { useMediaQuery } from "react-responsive"

const About = () => {
    const isMediumScreen = useMediaQuery({query: "(min-width: 768px)"})
    const isLargeScreen = useMediaQuery({query: "(min-width: 1024px)"})
  return (
    <div className={`flex ${isLargeScreen? "p-[40px] flex-row": "p-[20px] flex-col"}`}>
        <div className={`${isLargeScreen? "w-[45%] flex-grow mr-[40px]" : isMediumScreen? "w-full h-[500px]" : "w-full h-[250px]"}  overflow-hidden rounded-md relative about-img-container`}>
            <img src={aboutImg} alt="trainer" className={`${isLargeScreen? "scale-[1.6]": ""} w-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2`}/>
        </div>
        <div className={`${isLargeScreen? "w-[55%]" : "w-full"} about-texts-container`}>
            <h3 className={`${isLargeScreen? "text-[20px]" : "text-[18px]"} text-[#fb5b20] font-[600] about-sub-heading`}>ABOUT US</h3>
            <h2 className={`${isLargeScreen? "text-[45px]": isMediumScreen? "text-[30px]": "text-[25px]"} font-[800] text-nowrap text-[#232429] about-heading`}>WELCOME TO PRIMEGYM</h2>

            <p className={`${isLargeScreen? "text-[20px]" : "text-[18px]"} text-[#535353] font-[600] mt-3 mb-3 heading-sub-text-1`}>At PRIMEGYM, we help you achieve your fitness goals with expert trainers and state of the art facilities, whether you're a beginner or a seasoned athlete.</p>

            <p className="text-[16px] text-[#535353] mt-3 mb-3 heading-sub-text-2">Our mission is to empower individuals to lead healthier lives by providing access to personalized fitness programs, cutting-edge equipment, and a welcoming community. At PRIMEGYM, we believe in fostering strength not only in your body but also in your mind and spirit.</p>

            <div className="bg-[#232429] rounded-md p-[20px] why-choose-us-container">
                <h3 className={`${isLargeScreen? "text-[20px]": "text-[16px]"} font-[600] text-[#fb5b20] text-center mb-3 why-choose-us-heading`}>WHY CHOOSE US</h3>
                <p className="text-[#a8a8a8]">At PRIMEGYM, we prioritize your fitness journey with personalized care and exceptional facilities. Our certified trainers create customized workout plans tailored to your goals, while our state-of-the-art equipment ensures a safe and effective workout experience. You’ll become part of a supportive community that motivates and inspires, with access to a variety of classes such as strength training, yoga, and HIIT to suit your preferences. Plus, our flexible membership plans are designed to fit your lifestyle, making PRIMEGYM the perfect choice to help you become the best version of yourself.</p>
            </div>
        </div> 
    </div>
  )
}

export default About