import Buttons from "../Button"

const Filters_popup_page = () => {
    return (
        <>
            <div className="grid grid-cols-1 divide-y">
                <div>Filters</div>
                <div className="px-5">
                    <div>Location</div>
                    <div>Norem ipsum dolor sit amet, adipiscing elit. </div>
                    <button 
                    id="dropdownDefaultButton" 
                    data-dropdown-toggle="dropdown" 
                    className="my-3 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button"
                    >
                       State
                        <svg class="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
                    </svg></button>
                </div>
            </div>
        </>
    )
}

export default Filters_popup_page