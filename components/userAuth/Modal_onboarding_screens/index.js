
import { useEffect } from "react";

const Modal_onboarding_screens = ({ isOpen, onClose, children }) => {
    // if (!isOpen) return null;
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
             className={`fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-50 z-50 ${isOpen ? 'visible' : 'hidden'
            }`}
                // className={`fixed inset-0 flex  z-50 justify-center items-center bg-black bg-opacity-50 ${isOpen ? 'visible' : 'hidden'
                //     }`}
            >
                <div className="modal-content bg-white rounded shadow-md">
                    
                    {children}
                </div>
            </div>
        </>
    )
}

export default Modal_onboarding_screens