import Images from "@/images"
import Image from "next/image"

const Social_media_icons = () => {
    return (
        <>
            <div className="flex items-center justify-between">
                <div className="mx-2 border flex flex-col rounded-lg  w-screen ">
                    <div className=" p-3 ">
                        <Image
                            src={Images.instagram_inv_mem}
                            width={50}
                            height={50}
                            className="mx-auto p-1"
                            alt=""
                        />
                        <div className="font_size_21 line-height-[26.52px]">Instagram</div>
                    </div>
                </div>
                <div className="mx-2 border flex flex-col rounded-lg  w-screen ">
                    <div className=" p-3 ">
                        <Image
                            src={Images.twitter_inv_mem}
                            width={50}
                            height={50}
                            className="mx-auto p-1"
                            alt=""
                        />
                        <div className="font_size_21 line-height-[26.52px]">Twitter</div>
                    </div>
                </div>

                <div className="mx-2 border flex flex-col rounded-lg  w-screen ">
                    <div className=" p-3 ">
                        <Image
                            src={Images.whatsapp_inv_mem}
                            width={50}
                            height={50}
                            className="mx-auto p-1"
                            alt=""
                        />
                        <div className="font_size_21 line-height-[26.52px]">Whatsapp</div>
                    </div>
                </div>
                <div className="mx-2 border flex flex-col rounded-lg  w-screen ">
                    <div className=" p-3 ">
                        <Image
                            src={Images.facebook_inv_mem}
                            width={50}
                            height={50}
                            className="mx-auto p-1"
                            alt=""
                        />
                        <div className="font_size_21 line-height-[26.52px]">Facebook</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Social_media_icons