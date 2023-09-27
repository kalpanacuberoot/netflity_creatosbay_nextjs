import { useEffect, useRef, useState } from "react";
import Creator_leftsidebar from "../Creator_Homepage/Creator_leftsidebar"

const Creator_layout = ({ children }) => {

    const [dropdown_menu, setDropdown_menu] = useState(false);

    const toggleDropdown = () => {
        setDropdown_menu(!dropdown_menu);
    };

    return (
        <>
            <Creator_leftsidebar toggleDropdown={toggleDropdown} dropdown_menu={dropdown_menu}>
                {children}
            </Creator_leftsidebar>
        </>
    )
}

export default Creator_layout