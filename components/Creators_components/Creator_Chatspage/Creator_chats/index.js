import Colors from "@/styles/Colors"

const Creator_chats = () => {
    return (
        <>
            <div className="flex flex-col justify-end h-full">
                <div className="px-5 py-5 rounded overflow-y-auto">
                    <div className="px-10 py-5 overflow-y-auto" style={{ backgroundColor: Colors.light_bg_clr }}>
                        <div className='chat-message shadow-lg'>
                            hi
                        </div>
                       
                    </div>

                </div>
                <div className=" flex flex-col h-auto justify-end p-5">
                    <hr className="my-5" />
                    <form className="flex items-center">
                        <label htmlFor="voice-search" className="sr-only">Search</label>
                        <div className="relative w-full overflow-y-auto">

                            <input type="text" id="voice-search"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-5 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="Type something here......"
                            />
                            <button className="absolute inset-y-0 right-0 flex items-center pr-10">

                                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.408 7.5h.01m-6.876 0h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM4.6 11a5.5 5.5 0 0 0 10.81 0H4.6Z" />
                                </svg>
                            </button>
                            <button type="button" className="absolute inset-y-0 right-0 flex items-center pr-3">

                                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 12 20">
                                    <path stroke="currentColor" strokeLinejoin="round" strokeWidth="2" d="M1 6v8a5 5 0 1 0 10 0V4.5a3.5 3.5 0 1 0-7 0V13a2 2 0 0 0 4 0V6" />
                                </svg>
                            </button>
                        </div>


                        <button
                            type="submit"
                            className="inline-flex items-center py-2.5 px-3 ml-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"

                        >
                            <svg className="w-4 h-4 rotate-90" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                                <path d="m17.914 18.594-8-18a1 1 0 0 0-1.828 0l-8 18a1 1 0 0 0 1.157 1.376L8 18.281V9a1 1 0 0 1 2 0v9.281l6.758 1.689a1 1 0 0 0 1.156-1.376Z" />
                            </svg>
                        </button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Creator_chats