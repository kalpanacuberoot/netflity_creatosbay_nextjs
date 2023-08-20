import Images from "@/images"
import Image from "next/image"

const Avatar_red = () => {
    return (
        <>
            {/* avatar */}

            <div className="flex items-center space-x-4 p-2  my-2">
                <div className="relative">
                    {/* <img className="w-10 h-10 rounded-full" src="/docs/images/people/profile-picture-5.jpg" alt=""/> */}
                    <Image
                        // className="w-10 h-10 rounded-full"
                        width={44}
                        height={44}
                        className="rounded-full"
                        alt=""
                        src={Images.avatar2}
                    />
                    <span className="bottom-0 left-7 absolute  w-3.5 h-3.5 bg-red-400 border-2 border-white dark:border-gray-800 rounded-full"></span>
                </div>
                <div className="font-medium dark:text-white font_size_14 ">
                    <div className="font-medium">
                        Mariya Desoja
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                    I like your confidence 💪 
                    </div>
                </div>
            </div>
        </>
    )
}

export default Avatar_red