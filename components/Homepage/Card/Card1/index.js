import Images from "@/images";
import Colors from "@/styles/Colors";
import Image from "next/image";
import { useState } from "react";

const Home_Card1 = () => {
    const [cardfirstshowmore, setCardfirstshowmore] = useState(false);
    return (
        <>
            <div className="my-2 mx-2">
                <div className="relative">
                    <Image
                        src={Images.card_img}
                        width={500}
                        height={100}
                        alt=""
                        className=" mx-auto"
                    />
                    <Image
                        src={Images.reel_creator_card}
                        width={50}
                        height={50}
                        alt=""
                        className="reel_creator_card mx-auto"
                    />
                </div>
                <div className="px-5 py-5 border rounded-b-lg" style={{background:Colors.white_clr}}>
                    <div className="flex flex-row justify-between items-end mt-4">
                        <div className="font_size_17 ">Reels creators</div>
                        <div
                            className="flex flex-row items-center px-3 rounded-md"
                            style={{ backgroundColor: Colors.delay_clr }}
                        >
                            <Image
                                src={Images.clock}
                                width={12}
                                height={10}
                                alt=""
                                className="me-2"
                            />
                            <h6>Delay</h6>
                        </div>
                    </div>
                    <h2 className="font-bold">Ant Studio llp</h2>
                    <div className="font_size_12">
                        Lorem Ipsum is simply dummy text of the printing and typesetting.....
                        {cardfirstshowmore && (
                            <>
                                {" "}
                                Lorem Ipsum is simply dummy text of the printing and
                                typesetting industry......
                            </>
                        )}
                        <div
                            className="text-red-600 font_size_12"
                            onClick={() => setCardfirstshowmore(!cardfirstshowmore)}
                        >
                            {cardfirstshowmore ? "Less More" : "Read More"}
                        </div>
                    </div>
                    <div className="px-5 border py-3 rounded-md text-center  mt-2">
                        <h6>04/06/2023</h6>
                        <div className="w-100 rounded-full border edit_button_clr py-1">
                            <buttton> Check Details</buttton>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Home_Card1