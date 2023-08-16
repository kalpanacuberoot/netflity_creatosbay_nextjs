import { useState } from "react";
import Brand1page from "./Brand1";
import Brand2page from "./Brand2";

const Brandscreens  = () => {
    const [open,setOpen] = useState(false);
    const onNextpage = () => {
        // router.push('/Brand2')
        setOpen(true)
    }
    return(
        <>
        {!open && <Brand1page onClick={() => onNextpage()}/>}
        {open && <Brand2page/>}
        </>
    )
}
export default Brandscreens