import bodyBuildingIcon from "../../assets/program-icons/body-building-icon.svg"
import weightLiftingIcon from "../../assets/program-icons/weight-lifting-icon.svg"
import muscleBuildingIcon from "../../assets/program-icons/muscle-building-icon.svg"
import rightArrowIcon from "../../assets/program-icons/right-arrow-icon.svg"

import { useMediaQuery } from "react-responsive"

const Program = () => {
    const isMediumScreen = useMediaQuery({query: "(min-width: 768px)"})
    const isLargeScreen = useMediaQuery({query: "(min-width: 1024px)"})

    return (
        <div className={`${isLargeScreen? "p-[40px] h-[400px]": isMediumScreen? "p-[20px] h-[600px]" : "p-[20px] h-[1000px]"} bg-[#232429]  mt-[200px] relative program-container`}>
            <div className={` grid justify-center items-center ${isLargeScreen? "p-[40px] grid-cols-3 gap-[40px]" : isMediumScreen? "p-[40px] grid-cols-2 gap-[40px]" : "p-[20px] grid-cols-1 gap-[20px]"} w-full h-fit absolute -top-[160px] left-1/2 -translate-x-1/2`}>
                <div className={`${isLargeScreen? "p-[40px]" : "p-[20px]"} flex flex-col justify-center items-center bg-[#e9e9e9] h-[300px] body-building-program`}>
                    <img src={bodyBuildingIcon} alt="body building" className={`w-[60px]`} />
                    <h2 className={`${isLargeScreen? "text-[20px]" : "text-[18px]"} mt-3 mb-3 font-[600] text-[#232429]`}>BODY BUILDING</h2>
                    <p className="text-[#727272] mb-3 text-center">
                    PRIMEGYM focuses on strength, discipline, and personalized training to help individuals achieve their bodybuilding goals.
                    </p>
                    <button className="flex justify-center items-center gap-[5px]"><span className={`${isLargeScreen? "text-[20px]" : "text-[18px]"} text-[#fb5b20]`}>READ MORE</span> <img src={rightArrowIcon} alt="read more" className={`${isLargeScreen? "w-[20px]": "w-[18px]"}`} /></button>
                </div>  

                <div className={`${isLargeScreen? "p-[40px]" : "p-[20px]"} flex flex-col justify-center items-center bg-[#e9e9e9] h-[300px] muscle-building-program`}>
                    <img src={muscleBuildingIcon} alt="muscle building" className={`w-[60px]`} />
                    <h2 className={`${isLargeScreen? "text-[20px]" : "text-[18px]"} mt-3 mb-3 font-[600] text-[#232429]`}>MUSCLE BUILDING</h2>
                    <p className="text-[#727272] mb-3 text-center">
                    PRIMEGYM is dedicated to helping you build muscle through tailored workouts and expert guidance.
                    </p>
                    <button className="flex justify-center items-center gap-[5px]"><span className={`${isLargeScreen? "text-[20px]" : "text-[18px]"} text-[#fb5b20]`}>READ MORE</span> <img src={rightArrowIcon} alt="read more" className={`${isLargeScreen? "w-[20px]": "w-[18px]"}`} /></button>
                </div>  

                <div className={`${isLargeScreen? "p-[40px]" : "p-[20px]"} flex flex-col justify-center items-center bg-[#e9e9e9] h-[300px] weight-lifting-program`}>
                    <img src={weightLiftingIcon} alt="weight lifting" className={`w-[60px]`} />
                    <h2 className={`${isLargeScreen? "text-[20px]" : "text-[18px]"} mt-3 mb-3 font-[600] text-[#232429]`}>WEIGHT LIFTING</h2>
                    <p className="text-[#727272] mb-3 text-center">
                    PRIMEGYM helps you excel in weight lifting with tailored training programs, expert guidance, and a focus on strength and technique.
                    </p>
                    <button className="flex justify-center items-center gap-[5px]"><span className={`${isLargeScreen? "text-[20px]" : "text-[18px]"} text-[#fb5b20]`}>READ MORE</span> <img src={rightArrowIcon} alt="read more" className={`${isLargeScreen? "w-[20px]": "w-[18px]"}`} /></button>
                </div>  

                <div className={`${isLargeScreen? "col-start-2 col-span-1 " : ""} flex flex-col items-center gap-[20px] program-discount-container`}>
                    <h2 className={`${isLargeScreen? "text-[45px] text-nowrap": isMediumScreen? "text-[30px]" : "text-[25px]"} text-white text-center  font-[800]`}>
                        30% DISCOUNT FOR THIS SUMMER
                    </h2>
                    <button className="text-white w-fit bg-[#fb5b20] p-3 pr-6 pl-6 rounded-md transition-all duration-500 hover:text-black">
                        BECOME A MEMBER
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Program