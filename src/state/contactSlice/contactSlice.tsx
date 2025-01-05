import { createSlice } from "@reduxjs/toolkit";

import locationIcon from "../../assets/contact-icons/contact-location-icon.svg"
import phoneIcon from "../../assets/contact-icons/contact-phone-icon.svg"
import mailIcon from "../../assets/contact-icons/contact-mail-icon.svg"

interface ContactSliceState {
    contactInfo: string,
    contactText: string,
    contactIcons: string,
}

const initialState: ContactSliceState[] = [
    {
        contactIcons: locationIcon,
        contactText: "VISIT US",
        contactInfo: "123 Street, New York, USA"
    },
    {
        contactIcons: mailIcon,
        contactText: "EMAIL US",
        contactInfo: "mail@domain.com" 
    },
    {
        contactIcons: phoneIcon,
        contactText: "CALL US",
        contactInfo: "+012 345 6789" 
    },
]

const contactSlice = createSlice({
    name: "contactSlice",
    initialState,
    reducers: {}
})

export default contactSlice.reducer