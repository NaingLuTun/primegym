import { useMediaQuery } from "react-responsive"

import {useInView} from "react-intersection-observer"
import { useEffect, useState } from "react"

import experienceIcon from "../../assets/stats-icons/star-svgrepo-com.svg"
import trainersIcon from "../../assets/stats-icons/users-three-svgrepo-com.svg"
import projectsIcon from "../../assets/stats-icons/checkmark2-svgrepo-com.svg"
import clientsIcon from "../../assets/stats-icons/coffee-svgrepo-com.svg"

interface Stats {
    statName: string,
    totalNum: number,
    startNum: number,
    statsImg: string,
}

const Stats = () => {
    const isMediumScreen = useMediaQuery({query: "(min-width: 768px)"})
    const isLargeScreen = useMediaQuery({query: "(min-width: 1024px)"})

    const [stats, setStats] = useState<Stats[]>(
       [
        {
            statName: "EXPERIENCE",
            totalNum: 3243,
            startNum: 0,
            statsImg: experienceIcon,
        },
        {
            statName: "OUR TRAINERS",
            totalNum: 2135,
            startNum: 0,
            statsImg: trainersIcon,
        },
        {
            statName: "COMPLETE PROJECTS",
            totalNum: 4235,
            startNum: 0,
            statsImg: projectsIcon,
        },
        {
            statName: "HAPPY CLIENTS",
            totalNum: 3567,
            startNum: 0,
            statsImg: clientsIcon,
        },
       ]
    )


    const {ref, inView} = useInView({
        triggerOnce: true,
        threshold: 0.01,
    })

    useEffect(() => {
        if(inView) {
            setInterval(() => {
                setStats((prevStats) =>
                  prevStats.map((stat) => {
                    if (stat.startNum < stat.totalNum) {
                      return { ...stat, startNum: stat.startNum + 7 }
                    }
                    return stat
                  })
                )
              }, 0)
        }
        
    },[inView])

    return (
        <div ref={ref} className={`grid gap-[5px] ${isLargeScreen? "p-[40px] grid-cols-4 " : isMediumScreen? "p-[40px] pt-[20px] pb-[20px] grid-cols-2 " : "p-[40px] pt-[20px] pb-[20px] grid-cols-1"} bg-[#232429] `}>
            {stats.map((stat) => (
                <div key={stat.statName} className="w-full flex gap-[15px] items-center mt-[25px] mb-[25px] statsContainer">
                    <div className="w-[60px] h-[60px] flex justify-center items-center bg-[#fb5b20] rounded-full">
                        <img src={stat.statsImg} alt={stat.statName} className="w-[26px]" />
                    </div>

                    <div className=" statTextsContainer">
                        <p className="text-[#c9c9c9] text-[15px]">{stat.statName}</p>
                        <p className="text-white text-[25px] font-[500]">{stat.startNum}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Stats