import Images from "@/images"
import Colors from "@/styles/Colors"
import Image from "next/image"

const Avatar_green_bg = () => {
    return (
        <>
            {/* avatar */}

            <div className="flex items-center space-x-4 bg-gray-50 p-2 my-2 rounded-md" style={{background:Colors.gray2}}>
                <div className="relative">
                   
                    <Image
                        // className="w-10 h-10 rounded-full"
                        width={44}
                        height={44}
                        className="rounded-full"
                        alt=""
                        src={Images.avatar1}
                        
                    />
                    <span className="bottom-0 left-7 absolute  w-3.5 h-3.5 bg-green-400 border-2 border-white dark:border-gray-800 rounded-full"></span>
                </div>
                <div className="font-medium dark:text-white font_size_14 ">
                    <div className="font-medium">
                        Henry Dholi
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                        I cam across your profile and...
                    </div>
                </div>
            </div>
        </>
    )
}

export default Avatar_green_bg