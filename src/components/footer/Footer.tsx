import { useMediaQuery } from "react-responsive"

const Footer = () => {
    const isMediumScreen = useMediaQuery({query: "(min-width: 768px)"})
    const isLargeScreen = useMediaQuery ({query: "(min-width: 1024px)"})

  return (
    <div className={`${isLargeScreen? "p-[40px]":"p-[20px]"} bg-[#232429]`}>
        <div className={`grid ${isLargeScreen? "grid-cols-3 gap-[40px]": "grid-cols-2 gap-[20px]"} main-footer-container`}>
            <div className=" individual-footer-links-container get-in-touch">
                <h3 className={`${isLargeScreen? "text-[24px]": "text-[20px]"} text-white font-[500]`}>GET IN TOUCH</h3>

                <li className="list-none contacts-container">
                    <ul>
                        
                        <p className={`${isLargeScreen? "text-[16px]" : "text-[14px]"} text-[#BDBDBF]`}>123 street, New York, USA</p>
                    </ul>
                    
                    
                </li>
            </div>
            <div>
                <h3>QUICK LINKS</h3>
            </div>

            <div className={`${!isLargeScreen? "col-span-2": ""}`}>
                
            </div>
        </div>
    </div>
  )
}

export default Footer