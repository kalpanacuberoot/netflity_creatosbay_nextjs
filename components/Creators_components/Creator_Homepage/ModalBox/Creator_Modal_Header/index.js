import Images from "@/images"
import Image from "next/image"

const Creator_Modal_Header = () => {
    return (
        <>
            <div className="flex items-start justify-between border-b rounded-t dark:border-gray-600">

                <div className="bg-image w-full relative p-10">
                    <button
                        type="button"

                        data-modal-hide="defaultModal"
                    >
                        <span className="w-30 absolute bottom-0 right-10 transform translate-y-1/4 popup_logo rounded-full">
                            <Image
                                src={Images.popup_logo}
                                alt=""
                                className=""
                                width={250}
                                height={50}
                            />
                        </span>

                    </button>
                </div>
            </div>
        </>
    )
}

export default Creator_Modal_Header