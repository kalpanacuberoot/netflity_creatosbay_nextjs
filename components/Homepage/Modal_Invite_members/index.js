import { useEffect } from "react";

const Modal_Invite_members = ({ isOpen, onClose, children }) => {

    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (!event.target.closest('.modal-content')) {
                onClose();
            }
        };

        if (isOpen) {
            document.addEventListener('mousedown', handleOutsideClick);
        } else {
            document.removeEventListener('mousedown', handleOutsideClick);
        }

        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, [isOpen, onClose]);
    
    return (
        <>

            <div
                className={`fixed inset-0 flex  z-50 justify-center items-center bg-black bg-opacity-50 ${isOpen ? 'visible' : 'hidden'
                    }`}
            >
                <div className="modal-content bg-white rounded shadow-md ">

                    {children}
                </div>
            </div>

        </>
    )
}

export default Modal_Invite_members