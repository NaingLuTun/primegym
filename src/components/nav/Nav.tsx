import { Link, useLocation } from "react-router-dom"
import { useMediaQuery } from "react-responsive"
import { useState } from "react"
const Nav = () => {
    const [menuActive, setMenuActive] = useState(false)
    const isLargeScreen = useMediaQuery({query: "(min-width: 1024px)"})

    const currentUrlLocation = useLocation()
    
    const isActive = (pathName:string) => {
        if(currentUrlLocation.pathname === pathName) {
            return "text-[#fb5b20]"
        } else {
            return
        }
    } 
    return (
        <>

            <div className="flex justify-between items-center p-3 pr-10 pl-10 bg-[rgb(35,36,41)] nav-container">
                <Link to="/home" className="text-[#fb5b20] font-[800] text-[30px] main-logo-text">PRIMEGYM</Link>

                {isLargeScreen ?
                <div className="flex gap-8 text-white large-screen-links-container">
                    <Link to="/home" className={`home-link nav-link hover:text-[#fb5b20] ${isActive("/home")} `}>Home</Link>
                    <Link to="/about" className={`about-link nav-link hover:text-[#fb5b20] ${isActive("/about")} `}>About</Link>
                    <Link to="/classes" className={`classes-link nav-link hover:text-[#fb5b20] ${isActive("/classes")} `}>Classes</Link>
                    <Link to="/trainers" className={`trainers-link nav-link hover:text-[#fb5b20] ${isActive("/trainers")} `}>Trainers</Link>
                    <Link to="/blogs" className={`blogs-link nav-link hover:text-[#fb5b20] ${isActive("/blogs")} `}>Blogs</Link>
                    <Link to="/contact" className={`contact-link nav-link hover:text-[#fb5b20] ${isActive("/contact")} `}>Contact</Link>
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
                    <Link to="/home" className={`home-link pt-[20px] w-fit small-screen-nav-link hover:text-[#fb5b20] ${isActive("/home")}`}>Home</Link>
                    <Link to="/about" className={`about-link pt-[20px] w-fit small-screen-nav-link hover:text-[#fb5b20] ${isActive("/about")}`}>About</Link>
                    <Link to="/classes" className={`classes-link pt-[20px] w-fit small-screen-nav-link hover:text-[#fb5b20] ${isActive("/classes")}`}>Classes</Link>
                    <Link to="/trainers" className={`trainers-link pt-[20px] w-fit small-screen-nav-link hover:text-[#fb5b20] ${isActive("/trainers")}`}>Trainers</Link>
                    <Link to="/blogs" className={`blogs-link pt-[20px] w-fit small-screen-nav-link hover:text-[#fb5b20] ${isActive("/blogs")}`}>Blogs</Link>
                    <Link to="/contact" className={`contact-link pt-[20px] w-fit small-screen-nav-link hover:text-[#fb5b20] ${isActive("/contact")}`}>Contact</Link>
                </>}
            </div>
            
        </>
    )
}

export default Nav