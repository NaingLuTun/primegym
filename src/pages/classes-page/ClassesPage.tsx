
import Footer from '../../components/footer/Footer'
import Nav from '../../components/nav/Nav'
import HeroComponent from '../../components/pages-hero-component/HeroComponent'
import Schedule from '../../components/schedule/Schedule'

import { useMediaQuery } from 'react-responsive'

const ClassesPage = () => {
    const isLargeScreen = useMediaQuery({query: "(min-width: 1024px)"})
  return (
    <>
        <Nav />
        <HeroComponent />
        <div className={`${isLargeScreen? "mt-[40px] mb-[40px]":"mt-[20px] mb-[20px]"}`}>
            <Schedule />
        </div>
        <Footer />
    </>
  )
}

export default ClassesPage