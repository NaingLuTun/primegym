
import { useMediaQuery } from 'react-responsive'

import { useSelector, useDispatch } from 'react-redux'
import { setSelectedDay } from '../../state/scheduleSlice/scheduleSlice'

import dropDownIcon from "../../assets/schedule-icons/down-arrow-icon.svg"

import { AppDispatch, RootState } from '../../state/store'
import { useState } from 'react'

const Schedule = () => {
    const [daysMenuActive, setDaysMenuActive] = useState(false)
    const [dayChanged, setDayChanged] = useState(false)

    const isMediumScreen = useMediaQuery({query: "(min-width: 768px)"})
    const isLargeScreen = useMediaQuery({query: "(min-width: 1024px)"})

    const days = useSelector((state: RootState) => state.scheduleReducer.days)
    const selectedDay = useSelector((state: RootState) => state.scheduleReducer.selectedDay)
    const hours = useSelector((state: RootState) => state.scheduleReducer.hours)
    const trainers = useSelector((state: RootState) => state.scheduleReducer.trainers)
    const programs = useSelector((state: RootState) => state.scheduleReducer.programs)

    const dispatch = useDispatch<AppDispatch>()

    const handleMenuClick = () => {
        setDaysMenuActive(!daysMenuActive)
    }

    const handleSelectDay = (day: string) => {
        dispatch(setSelectedDay(day))
        setDaysMenuActive(!daysMenuActive)
        setDayChanged(true)
        setTimeout(() => {
            setDayChanged(false)
        }, 500);
    }

    return (
        <div className={`${isLargeScreen? "p-[40px]" : "p-[20px]"}`}>
            <div className='mb-8 text-center schedule-header-container'>
                <h3 className={`${isLargeScreen? "text-[20px]" : "text-[18px]"} text-[#fb5b20] font-[600] about-sub-heading`}>CLASS SCHEDULE</h3>
                <h2 className={`${isLargeScreen? "text-[45px]": isMediumScreen? "text-[30px]" : "text-[25px]"} text-[#232429] text-center  font-[800]`}>WORKING HOURS</h2>
            </div>

            {isLargeScreen? 
            <div className='flex justify-center largeScreen-days-container'>
                <div className='flex gap-10 p-2 pr-4 pl-4 bg-[#232429] rounded-full largeScreen-days-menu-container'>
                    {days.map(day => <span key={day} className={`text-[18px] text-white p-2 rounded-full ${selectedDay === day? "bg-[#fb5b20]": ""} hover:bg-[#fb5b20] hover:cursor-pointer`}  onClick={() => handleSelectDay(day)}>{day}</span>)}
                </div>
            </div>
            :
            <div className='mt-3 moblie-days-container'>
                <div className='flex justify-center relative items-center '>
                    <div className='bg-[#232429] rounded-md flex justify-center items-center gap-2 p-3 pr-6 pl-6  mobile-days-menu-container' onClick={handleMenuClick}>
                        <span className='text-white text-[18px]'>{selectedDay}</span> 
                        <img src={dropDownIcon} alt="drop down" className='w-[18px]' /> 
                    </div>

                    {daysMenuActive? 
                    <div className='absolute flex flex-col top-14 bg-[#232429] rounded-md overflow-hidden items-center'>
                        {days.map(day => <span key={day} onClick={() => handleSelectDay(day)} className='text-white text-[18px] w-full p-3 pl-6 pr-6  hover:bg-[#fb5b20] hover:cursor-pointer'>{day}</span>)}
                    </div>
                    :
                    <></>}
                    
                </div>
            </div>
            }

            <div className={`grid mt-8 ${isLargeScreen? "grid-cols-4 gap-[40px]" : isMediumScreen? "grid-cols-2 gap-[20px]" : "grid-cols-1 gap-[20px]"} schedulesContainer`}>
                {hours.map((hour, index) => (
                    <div key={hour} className={`${dayChanged? "reveal-schedule-animation" : ""} bg-[#232429] rounded-md p-10 text-white font-[500] text-center individual-schedule-container`}>
                        <p>{hour}</p>
                        <p className='mt-3 mb-3 text-[#fb5b20] text-[20px] programs'>{programs[index].toUpperCase()}</p>
                        <p className='font-[300] trainers'>{trainers[index].toUpperCase()}</p>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default Schedule