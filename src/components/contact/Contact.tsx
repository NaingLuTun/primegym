import { useMediaQuery } from "react-responsive"
import { useSelector } from "react-redux"
import { RootState } from "../../state/store"

import { useState } from "react"
const Contact = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [subject, setSubject] = useState("")
    const [message, setMessage] = useState("")

    const contacts = useSelector((state: RootState) => state.contactReducer)
    const isLargeScreen = useMediaQuery({query: "(min-width: 1024px)"})
    const isMediumScreen = useMediaQuery({query: "(min-width: 768px)"})

    const handleSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setName("")
        setEmail("")
        setSubject("")
        setMessage("")
    }
  return (
    <div className={`${isLargeScreen? "p-[40px]": "p-[20px]"}`}>
        <div className="text-center mb-[40px] contact-header-container">
            <h3 className={`${isLargeScreen? "text-[20px]" : "text-[18px]"} text-[#fb5b20] font-[600] team-sub-header`}>CONTACT US</h3>
            <h2 className={`${isLargeScreen? "text-[45px]": isMediumScreen? "text-[30px]" : "text-[25px]"} text-[#232429]   font-[800] team-main-header`}>GET IN TOUCH</h2>
        </div>

        <div className={`grid ${isLargeScreen? "grid-cols-3 gap-[40px] mb-[40px]":"grid-cols-1 gap-[20px] mb-[20px]"} contact-infos-container`}>
            {contacts.map(contact => (
                <div key={contact.contactInfo} className="w-full flex flex-col gap-[16px] justify-center items-center pt-[48px] pb-[48px] bg-[#232429] rounded-md individual-contacts-container">
                    <div className="w-[60px] p-[16px] flex justify-center items-center bg-[#fb5b20] rounded-full contact-icon-container">
                        <img src={contact.contactIcons} alt="contact" className="w-full" />
                    </div>

                    <p className="text-[20px] text-[#fb5b20] font-[600]">{contact.contactText}</p>
                    <p className="text-[#BDBDBF]">{contact.contactInfo}</p>
                </div>
            ))}
        </div>

        <div className={`flex w-full ${isLargeScreen? "flex-row":"flex-col"} contactFormAndMapContainer`}>
            <form onSubmit={handleSubmitForm} className={`${isLargeScreen? "w-[50%] p-[40px]":"w-full p-[20px]"} flex flex-col gap-[20px] bg-[#232429] contactFormContainer`}>
                <div className="flex gap-[20px]">
                    <input type="text" placeholder="Your Name" required value={name} onChange={(e) => setName(e.target.value)} className="contactInputStyle" />
                    <input type="email" placeholder="Your Email" required value={email} onChange={(e) => setEmail(e.target.value)} className="contactInputStyle"/>
                </div>

                <input type="text" placeholder="Subject" required value={subject} onChange={(e) => setSubject(e.target.value)} className="contactInputStyle" />
                <textarea name="message" id="message" placeholder="Message" required value={message} onChange={(e) => setMessage(e.target.value)} className="contactInputStyle pb-[66px] resize-none"></textarea>

                <button type="submit" className="w-full bg-[#fb5b20] rounded-md text-white text-[20px] p-[16px] font-[500]">SEND MESSAGE</button>
            </form>
            <div className={`${isLargeScreen? "w-[50%]":"w-full"} mapContainer`}>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387269.7016739818!2d-74.21870164749909!3d40.684003268828306!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2smm!4v1736148812167!5m2!1sen!2smm" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="border-none w-full h-[450px]"></iframe>
            </div>
        </div>
    </div>
  )
}

export default Contact