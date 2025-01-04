import { Link } from "react-router-dom"
import { useMediaQuery } from "react-responsive"
import { useState } from "react"
const Nav = () => {
    const [menuActive, setMenuActive] = useState(false)
    const isLargeScreen = useMediaQuery({query: "(min-width: 1024px)"})
    return (
        <>

            <div className="flex justify-between items-center p-3 pr-10 pl-10 bg-[#232429] nav-container">
                <h1 className="text-[#fb5b20] font-[800] text-[30px] main-logo-text">PRIMEGYM</h1>

                {isLargeScreen ?
                <div className="flex gap-8 text-white large-screen-links-container">
                    <Link to="/home" className="home-link nav-link hover:text-[#fb5b20]">Home</Link>
                    <Link to="/about" className="home-link nav-link hover:text-[#fb5b20] ">About</Link>
                    <Link to="/classes" className="home-link nav-link hover:text-[#fb5b20] ">Classes</Link>
                    <Link to="/trainers" className="home-link nav-link hover:text-[#fb5b20] ">Trainers</Link>
                    <Link to="/blogs" className="home-link nav-link hover:text-[#fb5b20] ">Blogs</Link>
                    <Link to="/contact" className="home-link nav-link hover:text-[#fb5b20] ">Contact</Link>
                </div> : 
                
                <div className=" small-screen-menu-button-container">
                    <button className={`${menuActive? "active" : ""} menu-button`} onClick={() => setMenuActive(!menuActive)}>
                        <div className="menu-icon"></div>
                    </button>
                </div>
                }
                
            </div>
            <div className={`${menuActive ? "show-menu" : "hide-menu"} flex flex-col text-white pl-[40px] bg-[#232429] small-screen-links-container`}> 
                {menuActive && 
                <>
                    <Link to="/home" className="home-link pt-[20px] w-fit small-screen-nav-link hover:text-[#fb5b20]">Home</Link>
                    <Link to="/about" className="home-link pt-[20px] w-fit small-screen-nav-link hover:text-[#fb5b20]">About</Link>
                    <Link to="/classes" className="home-link pt-[20px] w-fit small-screen-nav-link hover:text-[#fb5b20]">Classes</Link>
                    <Link to="/trainers" className="home-link pt-[20px] w-fit small-screen-nav-link hover:text-[#fb5b20]">Trainers</Link>
                    <Link to="/blogs" className="home-link pt-[20px] w-fit small-screen-nav-link hover:text-[#fb5b20]">Blogs</Link>
                    <Link to="/contact" className="home-link pt-[20px] w-fit small-screen-nav-link hover:text-[#fb5b20]">Contact</Link>
                </>}
            </div>
            
        </>
    )
}

export default Nav