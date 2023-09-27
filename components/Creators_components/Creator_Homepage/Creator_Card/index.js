import Images from "@/images"
import Colors from "@/styles/Colors"
import Image from "next/image"
import Link from "next/link"

const Creator_Card = () => {
    return (
        <>
            <div className="my-5 mx-2">
                <div className="relative flex ">

                    <Image
                        src={Images.card_img}
                        width={350}
                        height={100}
                        alt=""
                        className=" mx-auto border rounded-t-lg"
                    />
                </div>
                <div className="px-5 py-5 border rounded-b-lg" style={{ background: Colors.white_clr }}>
                    <div className="flex flex-row justify-between items-end mt-4  mx-0">
                        <div className="font_size_17 flex items-center">Creators
                            <span
                                // style={{ background: Colors.pink_clr, borderColor: Colors.light_grey_clr }}
                                className="px-3 py-1 rounded-md border ms-3 text-white bg-slate-800">
                                0
                            </span>
                        </div>
                        <div
                            className="flex flex-row px-3 py-1 items-center rounded-md mx-0"
                            style={{ backgroundColor: Colors.delay_clr }}
                        >
                            <Image
                                src={Images.clock}
                                width={12}
                                height={10}
                                alt=""
                                className="me-2"
                            />
                            <h5 className="">draft</h5>
                        </div>
                    </div>
                    <h2 className="font-bold ">Creator Card</h2>
                    <div className="font_size_12">
                        test

                    </div>
                    <div className="px-5 border py-3 rounded-md text-center  mt-2">
                        <h6>10-21-23</h6>
                        <Link href={'/creator_chat'}>
                            <div className="w-100 rounded-full border edit_button_clr py-1 cursor-pointer" >
                                <buttton> Check Details</buttton>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Creator_Card