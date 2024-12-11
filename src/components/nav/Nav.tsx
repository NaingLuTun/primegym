import { BrowserRouter, Link } from "react-router-dom"
import { useMediaQuery } from "react-responsive"

const Nav = () => {

    const isLargeScreen = useMediaQuery({query: "(min-width: 1024px)"})
  return (
    <BrowserRouter>
        <div className="flex justify-between p-3 nav-container">
            <h1 className=" main-logo-text">PRIMEGYM</h1>

            {isLargeScreen ?
            <div className="flex large-screen-links-container">
                <Link to="/" className="home-link nav-link">Home</Link>
                <Link to="/about" className="home-link nav-link">About</Link>
                <Link to="/classes" className="home-link nav-link">Classes</Link>
                <Link to="/trainers" className="home-link nav-link">Trainers</Link>
                <Link to="/contact" className="home-link nav-link">Contact</Link>
            </div> : 
            
            <div className=" small-screen-links-container">
                
            </div>
            
            }
            
        </div>
    </BrowserRouter>
  )
}

export default Nav