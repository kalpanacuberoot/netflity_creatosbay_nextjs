import Images from "@/images";
import Image from "next/image";
import { useState } from "react";
import Colors from "@/styles/Colors";

const Home_Card3 = () => {
    const [cardthirdshowmore, setCardthirdshowmore] = useState(false);
    return (
        <>
            <div className=" my-5 mx-2">
                <div className="relative">
                    <Image
                        src={Images.card_img}
                        width={500}
                        height={100}
                        alt=""
                        className=" mx-auto"
                    />
                    {/* <Image
                        src={Images.reel_creator_card}
                        width={50}
                        height={50}
                        alt=""
                        className="reel_creator_card mx-auto"
                    /> */}
                </div>
                <div className="px-5 py-5 border rounded-b-lg" style={{ background: Colors.white_clr }}>
                    <div className="flex flex-row justify-between items-end mt-4">
                        {/* <div className="font_size_17 ">Reels creators</div> */}
                        <div className="font_size_17 flex items-center">Creators
                            <span
                                // style={{ background: Colors.pink_clr, borderColor: Colors.light_grey_clr }}
                                className="px-3 py-1 rounded-md border ms-3 text-white bg-slate-800">
                                0
                            </span>
                        </div>
                        <div
                            className="flex flex-row items-center px-3 py-1 rounded-md"
                            style={{ backgroundColor: Colors.pending_clr }}
                        >
                            <Image
                                src={Images.clock}
                                width={12}
                                height={10}
                                alt=""
                                className="me-2"
                            />
                            <h6>Pending</h6>
                        </div>
                    </div>
                    <h2 className="font-bold capitalize mt-2">Ant Studio llp</h2>
                    <div className="max-h-64" style={{ wordWrap: 'break-word' }}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting
                    </div>
                    <div className="px-5 border py-3 rounded-md text-center  mt-2">
                        <h6>04/10/2023 - 25/10/2023</h6>
                        <div className="w-100 rounded-full border edit_button_clr py-1">
                            <buttton> Check Details</buttton>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Home_Card3