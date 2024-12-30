import testimonialMainImg from "../../assets/testimonial-images/testimonial-main-img.jpg"
import testimonialProfile1 from "../../assets/testimonial-images/testimonial-profile-1.jpg"
import testimonialProfile2 from "../../assets/testimonial-images/testimonial-profile-2.jpg"
import quoteIcon from "../../assets/testimonial-images/quote-right-svgrepo-com.svg"
import rightArrowIcon from "../../assets/testimonial-images/right-arrow-short.svg"
import leftArrowIcon from "../../assets/testimonial-images/left-arrow-short.svg"

import { useMediaQuery } from 'react-responsive';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import "swiper/swiper-bundle.css"

const Testimonial = () => {

    const isMediumScreen = useMediaQuery({query: "(min-width: 768px)"})
    const isLargeScreen = useMediaQuery({query: "(min-width: 1024px)"})

    const text = "PrimeGym has completely transformed my fitness journey! The trainers are incredibly supportive, and the programs are tailored to suit all fitness levels. The state-of-the-art equipment and motivating atmosphere make every workout enjoyable and effective. I’ve achieved goals I never thought possible!"
    return (
        <div className={`flex  w-full bg-[#232429] ${isLargeScreen? "flex-row": "flex-col"}`}>
            <div className={`${isLargeScreen? "w-[50%] h-[800px]": isMediumScreen ? "w-full h-[800px]" : "w-full h-[500px]"} overflow-hidden relative flex-grow  main-testimonial-img-container`}>
                <img src={testimonialMainImg} alt="testimonial" className=" scale-[1.25] w-full  absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
            </div>

            <div className={`${isLargeScreen? "w-[50%]": "w-full"} main-testimonial-text-container`}>
                <div className={`${isLargeScreen? "p-[40px]": "p-[20px]"} w-full testimonial-header-container`}>
                    <h3 className={`${isLargeScreen? "text-[20px]" : "text-[18px]"} text-[#fb5b20] font-[600] testimonial-sub-header`}>TESTIMONIAL</h3>
                    <h2 className={`${isLargeScreen? "text-[45px]": isMediumScreen? "text-[30px]" : "text-[25px]"} text-white font-[800] team-main-header`}>OUR CLIENT SAY</h2>
                </div>

                <div  className={`${isLargeScreen? "p-[40px]": "p-[20px]"} w-full swiper-container`}>
                    <Swiper 
                    modules={[Navigation]}
                    slidesPerView={1}
                    navigation={{
                        nextEl: ".testimonial-next-button",
                        prevEl: ".testimonial-prev-button"
                    }}
                    loop={true}
                    speed={500}
                
                    >
                        <SwiperSlide className="w-full">
                            <div className="w-full mb-[24px] text-container">
                                <img src={quoteIcon} alt="quote" className="float-left w-[20px] mr-3  " />
                                <p className={`${isLargeScreen? "text-[20px]" : "text-[18px]"} text-white testimonial-sub-header`}>{text}</p>
                            </div>

                            <div className="flex gap-[24px] items-center profile-container">
                                <div className="w-[90px] rounded-full profile-img-container">
                                    <img src={testimonialProfile1} alt="profile1" className="w-full rounded-full" />
                                </div>
                                <div className="client-info-container">
                                    <p className="text-white text-[20px] font-[500]">BRYAN</p>
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide className="w-full">
                            <div className="w-full mb-[24px] text-container">
                                <img src={quoteIcon} alt="quote" className="float-left w-[20px] mr-3  " />
                                <p className={`${isLargeScreen? "text-[20px]" : "text-[18px]"} text-white testimonial-sub-header`}>{text}</p>
                            </div>

                            <div className="flex gap-[24px] items-center profile-container">
                                <div className="w-[90px] rounded-full profile-img-container">
                                    <img src={testimonialProfile2} alt="profile1" className="w-full rounded-full" />
                                </div>
                                <div className="client-info-container">
                                    <p className="text-white text-[20px] font-[500]">JANE</p>
                                </div>
                            </div>
                        </SwiperSlide>

                        <div className="flex items-center gap-[12px] mt-[24px] navigation-container">
                            <button className="w-[40px] bg-[#fb5b20] rounded-full p-1 testimonial-prev-button">
                                    <img src={leftArrowIcon} alt="left" className="w-full"/>
                            </button>

                            <button className="w-[40px] bg-[#fb5b20] rounded-full p-1 testimonial-next-button">
                                    <img src={rightArrowIcon} alt="left" className="w-full"/>
                            </button>
                        </div>
                        


                    </Swiper>
                </div>
            </div>
            
            

        </div>
    )
}

export default Testimonial