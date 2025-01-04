
import About from '../../components/about/About'
import Footer from '../../components/footer/Footer'
import Nav from '../../components/nav/Nav'
import HeroComponent from '../../components/pages-hero-component/HeroComponent'
import Program from '../../components/program/Program'
import Stats from '../../components/stats/Stats'

import { useMediaQuery } from 'react-responsive'
const AboutPage = () => {
    const isLargeScreen = useMediaQuery({query: "(min-width: 1024px)"})
  return (
    <>
        <Nav />
        <HeroComponent />
        <About />
        <Program />
        <div className={`${isLargeScreen? "mb-[40px] mt-[40px]":"mb-[20px] mt-[20px]"}`}>
            <Stats />
        </div>
        <Footer />
    </>
  )
}

export default AboutPage