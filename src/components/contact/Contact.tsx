import { useMediaQuery } from "react-responsive"
import { useSelector } from "react-redux"
import { RootState } from "../../state/store"
const Contact = () => {
    const contacts = useSelector((state: RootState) => state.contactReducer)
    const isLargeScreen = useMediaQuery({query: "(min-width: 1024px)"})
    const isMediumScreen = useMediaQuery({query: "(min-width: 768px)"})
  return (
    <div className={`${isLargeScreen? "p-[40px]": "p-[20px]"}`}>
        <div className="text-center mb-[40px] contact-header-container">
            <h3 className={`${isLargeScreen? "text-[20px]" : "text-[18px]"} text-[#fb5b20] font-[600] team-sub-header`}>CONTACT US</h3>
            <h2 className={`${isLargeScreen? "text-[45px]": isMediumScreen? "text-[30px]" : "text-[25px]"} text-[#232429]   font-[800] team-main-header`}>GET IN TOUCH</h2>
        </div>

        <div className={`grid ${isLargeScreen? "grid-cols-3":"grid-cols-1"} contact-infos-container`}>
            {contacts.map(contact => (
                <div key={contact.contactInfo} className="w-full flex justify-center items-center pt-[48px] pb-[48px] bg-[#232429] individual-contacts-container">
                    <div className="w-[60px] p-[16px] flex justify-center items-center bg-[#fb5b20] rounded-full contact-icon-container">
                        <img src={contact.contactIcons} alt="contact" className="w-full" />
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Contact