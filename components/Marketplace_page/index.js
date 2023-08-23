import Colors from "@/styles/Colors";
import Left_Dashboard from "../Homepage/leftDashboard";
import React from 'react';
import Images from "@/images";
import Image from "next/image";
import Marketplace_card from "./Marketplace_card";
import Link from "next/link";

const Marketplace_page = () => {

    const cardData = [
        {
            id: 1,
            Creator_name: "Myra",
            hastag: [
                {
                    hashtag1: "music",
                    hashtag2: "fashion",
                    hashtag3: "lifestyle",
                    hashtag: "mother",
                }
            ]
        },
        {
            id: 1,
            Creator_name: "Mishi",
            hastag: [
                {
                    hashtag1: "music",
                    hashtag2: "fashion",
                    hashtag3: "lifestyle",
                    hashtag: "mother",
                }
            ]
        }
    ]
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
                                <div className="font_size_21">Showing 12 of 100 Influencers</div>
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
                        {cardData.map((item, index) => {
                            return (
                                <div className=" bg-white p-3 rounded-lg" key={index} T={console.log("market place card data", item)}>
                                    <div className="grid grid-cols-3 rounded-md gap-1" >

                                        <img src="https://imgs.search.brave.com/NgHQTuyleY9W2nUR9RbSI6kFqixjPx0UkxP_2qthm7w/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMucGV4ZWxzLmNv/bS9waG90b3MvOTU3/MTI2OC9wZXhlbHMt/cGhvdG8tOTU3MTI2/OC5qcGVnP2F1dG89/Y29tcHJlc3MmY3M9/dGlueXNyZ2ImZHBy/PTEmdz01MDA" alt="" className="rounded-tl-lg rounded-bl-lg" />

                                        <img src="https://imgs.search.brave.com/NgHQTuyleY9W2nUR9RbSI6kFqixjPx0UkxP_2qthm7w/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMucGV4ZWxzLmNv/bS9waG90b3MvOTU3/MTI2OC9wZXhlbHMt/cGhvdG8tOTU3MTI2/OC5qcGVnP2F1dG89/Y29tcHJlc3MmY3M9/dGlueXNyZ2ImZHBy/PTEmdz01MDA" alt="" />
                                        <img src="https://imgs.search.brave.com/NgHQTuyleY9W2nUR9RbSI6kFqixjPx0UkxP_2qthm7w/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMucGV4ZWxzLmNv/bS9waG90b3MvOTU3/MTI2OC9wZXhlbHMt/cGhvdG8tOTU3MTI2/OC5qcGVnP2F1dG89/Y29tcHJlc3MmY3M9/dGlueXNyZ2ImZHBy/PTEmdz01MDA" alt="" className="rounded-tr-lg rounded-br-lg" />
                                    </div>
                                    <div className="flex justify-between mb-2 mt-2">
                                        <div> <h2 className="font-bold">{item.Creator_name}</h2></div>
                                        <div className="flex gap-4"><h3>x</h3>
                                            <h3>|</h3></div>
                                    </div>
                                    <div className="flex justify-between mb-2 mt-2">
                                        <div> <h4>{item.Creator_name}</h4></div>
                                        <div className="flex gap-1"><h6 className="px-2 py-1 m-0 p-0 rounded-full" style={{ borderWidth: 1, borderColor: Colors.logo_clr }}>#lifestyle</h6>
                                            {/* <h6 className="px-2 py-1 m-0 p-0 rounded-full" style={{ borderWidth: 1, borderColor: Colors.logo_clr }}>#fashion</h6><h6 className="px-2 py-1 m-0 p-0 rounded-full" style={{ borderWidth: 1, borderColor: Colors.logo_clr }}>#coffe</h6><h6 className="px-2 py-1 m-0 p-0 rounded-full" style={{ borderWidth: 1, borderColor: Colors.logo_clr }}>#mother</h6> */}
                                            <h6 className="px-2 py-1 m-0 p-0 rounded-full" style={{ borderWidth: 1, borderColor: Colors.logo_clr }}>#fashion</h6><h6 className="px-2 py-1 m-0 p-0 rounded-full" style={{ borderWidth: 1, borderColor: Colors.logo_clr }}>#coffe</h6>
                                            <h6 className="px-2 py-1 m-0 p-0 rounded-full" style={{ borderWidth: 1, borderColor: Colors.logo_clr }}>#mother</h6>
                                        </div>
                                    </div>
                                    <Link
                                        href={{
                                            pathname: "/creator_profile",
                                            query: { data: JSON.stringify({key:item}) },
                                        }}
                                    >
                                        <button className="w-full rounded-full p-2 mt-3" style={{ backgroundColor: Colors.logo_clr, color: Colors.white_clr }}>View profile</button>
                                    </Link>
                                </div>
                            )
                        }


                        )}


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