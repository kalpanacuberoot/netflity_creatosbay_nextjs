const Buttons = ({label,buttoncss}) =>{
    return(
        <div className={`w-100 rounded-full border edit_button_clr py-1 text-center ${buttoncss}`}

                >
                    <button
                    >
                        {label}
                    </button>
                </div>
    )
}
export default Buttons