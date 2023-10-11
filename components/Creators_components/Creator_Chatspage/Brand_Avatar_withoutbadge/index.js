import Images from "@/images"
import Image from "next/image"

const Brand_Avatar_withoutbadge = (item) => {

    console.log("Brand_Avatar_withoutbadge",item);
    return (
        <>
            <div className="flex items-center space-x-4">
                <Image

                    className="rounded-full"
                    src={item?.item?.campaign?.brand?.logo ? item?.item?.campaign?.brand?.logo : Images.avatar1} 
                    // src={Images.avatar1}
                    alt=""
                    width={52}
                    height={52}
                />
                <div className="font-medium dark:text-white">
                    <div className="font_size_16 capitalize">
                        {item?.item?.campaign?.brand.name}
                    </div>
                    <div className="text-sm text-gray-500 font_size_14 dark:text-gray-400 capitalize">
                       {item?.item?.campaign?.name}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Brand_Avatar_withoutbadge