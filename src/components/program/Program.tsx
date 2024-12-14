import bodyBuildingIcon from "../../assets/program-icons/body-building-icon.svg"
import weightBuildingIcon from "../../assets/program-icons/weight-lifting-icon.svg"
import muscleBuildingIcon from "../../assets/program-icons/muscle-building-icon.svg"

import { useMediaQuery } from "react-responsive"

const Program = () => {
    const isMediumScreen = useMediaQuery({query: "(min-width: 768px)"})
    const isLargeScreen = useMediaQuery({query: "(min-width: 1024px)"})

    return (
        <div className={`${isLargeScreen? "p-[40px]":"p-[20px]"} bg-[#232429] h-[500px] mt-[200px] relative program-container`}>
            <div className={` grid justify-center items-center ${isLargeScreen? "p-[40px] grid-cols-3 gap-[20px]" : isMediumScreen? "p-[40px] grid-cols-2 gap-[20px]" : "p-[20px] grid-cols-1 gap-[10px]"} w-full h-fit absolute -top-[140px] left-1/2 -translate-x-1/2`}>
                <div className={`${isLargeScreen? "p-[40px]" : "p-[20px]"} flex flex-col justify-center items-center bg-[#e9e9e9] body-building-program`}>
                    <img src={bodyBuildingIcon} alt="body building" className={`w-[60px]`} />
                    <h2 className={`${isLargeScreen? "text-[20px]" : "text-[18px]"} font-[600]`}>BODY BUILDING</h2>
                </div>  

                <div></div>

                <div></div>

                <div></div>
            </div>
        </div>
    )
}

export default Program