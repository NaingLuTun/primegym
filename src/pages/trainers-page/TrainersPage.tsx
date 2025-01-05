import React from 'react'
import Nav from '../../components/nav/Nav'
import Team from '../../components/team/Team'
import Footer from '../../components/footer/Footer'

import { useMediaQuery } from 'react-responsive'
import HeroComponent from '../../components/pages-hero-component/HeroComponent'

const TrainersPage = () => {
    const isLargeScreen = useMediaQuery({query: "(min-width: 1024px)"})
  return (
    <>
        <Nav />
        <HeroComponent />
        <div className={`${isLargeScreen? "mt-[40px] mb-[40px]": "mt-[20px] mb-[20px]"}`}>
            <Team />
        </div>
        <Footer />
    </>
  )
}

export default TrainersPage