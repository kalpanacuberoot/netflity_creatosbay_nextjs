import Images from "@/images"
import Image from "next/image"

const Brand_Avatar_single_withoutbadge = (item) => {

    console.log("Brand_Avatar_single_withoutbadge", item.item);
    return (
        <>
            {item.item.length > 0 && item.item.map((avatar, index) => (


                <div className="flex items-center space-x-4" key={index}>
                    <Image
                        className="rounded-full"
                        src={avatar?.campaign?.brand?.logo ? avatar?.campaign?.brand?.logo : Images.avatar1}
                        // src={Images.avatar1}
                        alt=""
                        width={52}
                        height={52}
                    />
                    <div className="font-medium dark:text-white">
                        <div className="font_size_16 capitalize">
                            {avatar?.campaign?.brand.name}
                        </div>
                        <div className="text-sm text-gray-500 font_size_14 dark:text-gray-400 capitalize">
                            {avatar?.campaign?.name}
                        </div>
                    </div>
                </div>
            ))}
        </>
    )
}

export default Brand_Avatar_single_withoutbadge