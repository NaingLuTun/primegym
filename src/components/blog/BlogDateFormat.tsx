interface BlogDateFormatProps {
    date: Date
}

const BlogDateFormat = ({date}: BlogDateFormatProps) => {
    const formattedDate = new Intl.DateTimeFormat('en-GB', {
        day: '2-digit',
        month: 'long',
        year: 'numeric'
    })

    const parts = formattedDate.formatToParts(date)

    const day = parts.find(part => part.type === "day")?.value
    const month = parts.find(part => part.type === "month")?.value
    const year = parts.find(part => part.type === "year")?.value

    return (
        <>
            <p className="text-[#BDBDBF]">{day}</p>
            <p className="text-white font-[600]">{month}</p>
            <p className="text-[#BDBDBF]">{year}</p>
        </>
        
    )
}

export default BlogDateFormat