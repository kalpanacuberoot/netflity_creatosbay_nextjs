const Buttons = ({ label, buttoncss, onClick }) => {
    return (
        <div className={`w-100 rounded-full border edit_button_clr py-1 text-center cursor-pointer ${buttoncss}`}
        onClick={onClick}
        >
            <button
                
            >
                {label}
            </button>
        </div>
    )
}
export default Buttons