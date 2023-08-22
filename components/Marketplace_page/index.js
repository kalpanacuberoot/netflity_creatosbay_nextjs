import Colors from "@/styles/Colors";
import Left_Dashboard from "../Homepage/leftDashboard";
import React from 'react';
import Images from "@/images";
import Image from "next/image";
import Marketplace_card from "./Marketplace_card";

const Marketplace_page = () => {
    return (
        <>
            <div
                className="flex container_capmapign_info w-full"
                style={{ backgroundColor: Colors.button_light_clr }}
            >
                <div
                    className="auto-cols-max  px-5 py-5 border w-1/5"
                    style={{ backgroundColor: Colors.white_clr }}
                >
                    <Left_Dashboard />
                </div>

                <div className="m-2 w-full auto-cols-max text-start p-2"

                >
                    <div
                        style={{ background: Colors.invoice_gradient_clr }}
                        // style={style}
                        className="auto-cols-max p-3 rounded-md flex flex-row"
                    >
                        <div className="flex flex-row justify-between items-center  w-full">
                            <div style={{ color: Colors.white_clr }}>
                                <div className="font_size_40">
                                    Find Top Creators
                                </div>
                                <div  className="font_size_21">Showing 12 of 100 Influencers</div>
                            </div>
                            <div
                                style={{ background: Colors.white_clr }}
                                className="rounded-md flex flex-row justify-between items-center px-3 py-2">
                                <button className="font_size_21 mx-4">
                                   Filters
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

                    <div className="m-2 w-full grid grid-cols-3 gap-3">

                        <Marketplace_card />
                        <Marketplace_card />
                        <Marketplace_card />
                        <Marketplace_card />
                        <Marketplace_card />
                        <Marketplace_card />
                        <Marketplace_card />
                        <Marketplace_card />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Marketplace_page