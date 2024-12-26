import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';

import "swiper/swiper-bundle.css"

import swiperImg1 from "../../assets/header-swiper-images/header-swiper-image-1.jpg"
import swiperImg2 from "../../assets/header-swiper-images/header-swiper-image-2.jpg"

import { useMediaQuery } from 'react-responsive';

const HeaderSwiper = () => {
    const isMediumScreen = useMediaQuery({query: "(min-width: 768px)"})
    const isLargeScreen = useMediaQuery({query: "(min-width: 1024px)"})
  return (
    <Swiper
        modules={[Navigation, Autoplay]}
        slidesPerView={1}
        navigation={{
            nextEl: ".next-button",
            prevEl: ".prev-button",
        }}
        autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
        }}
        speed={1000}
        loop={true}
    >
        <SwiperSlide className='relative'>
            <div className='relative w-full swiper-1'>
                <img src={swiperImg1} alt="swiper-image-1" className='w-full brightness-50 header-swiper-img-1 header-swiper-img' />

                <div className='absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 text-center text-white swiper-texts-container'>
                    <h3 className={`font-[800] mb-[10px] ${isLargeScreen? "text-[20px]" : isMediumScreen? "text-[16px]" : "text-[12px]"}`}>BEST GYM CENTER</h3>

                    <h2 className={`font-[800] mb-[10px] ${isLargeScreen? "text-[45px]" : isMediumScreen? "text-[30px]" :  "text-[20px]"}`}>BUILD YOUR BODY STRONG WITH PRIMEGYM</h2>
                    
                    <div className='flex gap-3 justify-center'>
                        <button 
                        className={`${isMediumScreen? "p-4 pr-8 pl-8" : "p-2 pr-6 pl-6 text-[12px]"} text-nowrap rounded-md bg-[#fb5b20] hover:text-black transition-all duration-500`}>
                            JOIN US
                        </button>
                        <button 
                        className={`${isMediumScreen? "p-4 pr-8 pl-8" : "p-2 pr-6 pl-6 text-[12px]"} text-nowrap rounded-md bg-[#ffffff] text-black hover:bg-black hover:text-white transition-all duration-500`}>
                            CONTACT US
                        </button>
                    </div>
                </div>
            </div>
        </SwiperSlide>

        <SwiperSlide>
            <div className='relative w-full swiper-2'>
                <img src={swiperImg2} alt="swiper-image-2" className='w-full brightness-50 header-swiper-img-2 header-swiper-img'/>

                <div className='absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 text-center text-white swiper-texts-container'>
                    <p className={`font-[800] mb-[10px] ${isLargeScreen? "text-[20px]" : isMediumScreen? "text-[16px]" : "text-[12px]"}`}>BEST GYM CENTER</p>

                    <p className={`font-[800] mb-[10px] ${isLargeScreen? "text-[45px]" : isMediumScreen? "text-[30px]" :  "text-[20px]"}`}>GROW YOUR STRENGTH WITH OUR TRAINERS</p>
                    
                    <div className='flex gap-3 justify-center'>
                        <button 
                        className={`${isMediumScreen? "p-4 pr-8 pl-8" : "p-2 pr-6 pl-6 text-[12px]"} text-nowrap rounded-md bg-[#fb5b20] hover:text-black transition-all duration-500`}>
                            JOIN US
                        </button>
                        <button 
                        className={`${isMediumScreen? "p-4 pr-8 pl-8" : "p-2 pr-6 pl-6 text-[12px]"} text-nowrap rounded-md bg-[#ffffff] text-black hover:bg-black hover:text-white transition-all duration-500`}>
                            CONTACT US
                        </button>
                    </div>
                </div>
            </div>
        </SwiperSlide>

        <button className={`prev-button z-10 absolute top-[50%] -translate-y-1/2 text-[#ffffffb0] font-[300] ${isMediumScreen? "text-[80px]" : "text-[40px]"} left-[20px] hover:text-white`}>
            &lt;
        </button>
        <button className={`next-button z-10 absolute top-[50%] -translate-y-1/2 text-[#ffffffb0] font-[300] ${isMediumScreen? "text-[80px]" : "text-[40px]"} right-[20px] hover:text-white `}>
            &gt;
        </button>
        
    </Swiper>
  )
}

export default HeaderSwiper