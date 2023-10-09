import Images from "@/images"
import Image from "next/image"

const Creator_single_avatar_red = ({ item }) => {

    console.log("Creator_single_avatar_red", item?.campaign?.brand);
    return (
        <>
            <div className="flex items-center space-x-4 p-2  my-2 cursor-pointer border">
                <div className="relative">

                    <Image
                        // className="w-10 h-10 rounded-full"
                        width={44}
                        height={44}
                        className="rounded-full"
                        alt=""
                        src={item?.campaign?.brand?.logo ? item?.campaign?.brand?.logo : Images.avatar2}
                    />
                    <span className="bottom-0 left-7 absolute  w-3.5 h-3.5 bg-red-400 border-2 border-white dark:border-gray-800 rounded-full"></span>
                </div>
                <div className="font-medium dark:text-white font_size_14 ">
                    <div className="font-medium">
                        {item?.campaign?.brand?.name}
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                    {item?.campaign?.name}
                    </div>

                </div>
            </div>
        </>
    )
}

export default Creator_single_avatar_red