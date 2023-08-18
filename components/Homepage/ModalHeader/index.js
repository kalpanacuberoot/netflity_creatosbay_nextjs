import Images from "@/images"
import Image from "next/image"

const ModalHeader = () => {
    return (
        <>
            <div className="flex items-start justify-between border-b rounded-t dark:border-gray-600">

                <div className="bg-image w-full relative p-10">
                    {/* <div className=""> */}
                    <button
                        type="button"
                        className="px-1 py-1 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                        data-modal-hide="defaultModal"
                    >
                        <svg className="w-15 h-15 p-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                        </svg>
                        <span className="sr-only">Close modal</span>


                        <span className="w-10 absolute bottom-0 right-10 transform translate-y-1/4 popup_logo rounded-full">
                            <Image
                                src={Images.popup_logo}
                            />
                        </span>

                    </button>
                    {/* </div> */}
                </div>

            </div>
        </>
    )
}

export default ModalHeader