import Images from "@/images"
import Image from "next/image"
import Link from "next/link";
import { useState } from "react";
import CollapseLeftDashboard from "./CollapseLeftDashboard";
import Colors from "@/styles/Colors";
import Home_Card1 from "../Homepage/Card/Card1";
import Home_Card2 from "../Homepage/Card/Card2";
import Home_Card3 from "../Homepage/Card/Card3";
import Home_Card4 from "../Homepage/Card/Card4";

const Live_Campaignpage = () => {

    const [dropdown_menu, setDropdown_menu] = useState(false);

    return (
        <>
            <div className="flex container_invoice container w-full" 
            style={{background:Colors.logo_background_clr}}
            >
                <div className="auto-cols-max  px-3 py-5 border w-1/7"
                style={{background:Colors.white_clr}}
                >
                    <CollapseLeftDashboard />
                </div>

                <div className="m-2 w-full auto-cols-max text-start p-2" 
                
                >
                    <div
                        style={{ background: Colors.invoice_gradient_clr }}
                        // style={style}
                        className="auto-cols-max p-3 rounded-md flex flex-row"
                    >
                        <div className="flex flex-row justify-between items-center  w-full">



                            <div className="font_size_40" style={{ color: Colors.white_clr }}>
                                Live Campaign
                            </div>
                            <div
                                style={{ background: Colors.white_clr }}
                                className="rounded-md flex flex-row justify-between items-center px-3 py-2">
                                <button className="font_size_21 mx-4">
                                    Add Campaign
                                </button>
                                <Image
                                    src={Images.pink_plus_icon}
                                    width={24}
                                    height={24}
                                    alt=""
                                />
                            </div>

                        </div>


                    </div>
                    <div className="flex flex-row flex-wrap items-start  justify-evenly grid grid-cols-3">
                        <Home_Card1 />
                        <Home_Card2 />
                        <Home_Card3 />
                        <Home_Card4 />
                        {/* <Home_Card4 />
                        <Home_Card4 /> */}
                    </div>

                </div>

            </div>

        </>
    )
}

export default Live_Campaignpage