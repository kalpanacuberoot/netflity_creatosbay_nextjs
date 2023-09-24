import Creator_leftsidebar from "../Creator_Homepage/Creator_leftsidebar"

const Creator_layout = ({ children }) => {
    
    return (
        <>
            <Creator_leftsidebar>
                {children}
            </Creator_leftsidebar>
        </>
    )
}

export default Creator_layout