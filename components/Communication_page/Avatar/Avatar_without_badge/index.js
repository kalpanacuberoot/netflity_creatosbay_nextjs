import Images from "@/images"
import Image from "next/image"

const Avatar_without_badge = (item) => {

    console.log("Avatar_without_badge",item);
    return (
        <>

            <div className="flex items-center space-x-4">
                <Image
                    // className="w-10 h-10 rounded-full"
                    className="rounded-full"
                    src={item?.item?.profile_pic ? item?.item?.profile_pic : Images.avatar1}
                    // src={Images.avatar1}
                    alt=""
                    width={52}
                    height={52}
                />
                <div className="font-medium dark:text-white">
                    <div className="font_size_16 capitalize">
                       {/* {item?.item?.user?.name} */}
                       Creator One

                    </div>
                    <div className="text-sm text-gray-500 font_size_14 dark:text-gray-400">
                        Reply to message
                    </div>
                </div>
            </div>

        </>
    )
}

export default Avatar_without_badge
