import Colors from "@/styles/Colors";
import Left_Dashboard from "../Homepage/leftDashboard";
import React, { useEffect, useRef, useState } from 'react';
import Images from "@/images";
import Image from "next/image";
import Marketplace_card from "./Marketplace_card";
import Link from "next/link";
import { apiCall, url } from "@/generalfunctions";
import Cookies from "js-cookie";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
import Filters_popup_page from "../Filters_popup_page";
import { useRouter } from "next/router";

const Marketplace_page = () => {

    const router = useRouter();

    const [creatordata, setCreatordata] = useState(null);
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {

        handleSubmit();
        const handleOutsideClick = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleOutsideClick);

        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, [isOpen]); // eslint-disable-next-line react-hooks/exhaustive-deps


    const handleSubmit = async () => {

        const cookieValue = JSON?.parse(Cookies?.get('user_data'));
        console.log('categories cookieValue------------1', cookieValue?.token);

        try {

            const headers = {
                'Authorization': `Bearer ${cookieValue?.token}`,
                'Content-Type': 'application/json',
            };

            const response = await fetch(`${url}/creators`, {
                method: 'Get',
                headers: headers,

            });

            if (response?.ok === true) {
                const responseData = await response.json();
                console.log('creators response:', responseData?.data?.data);
                setCreatordata(responseData?.data?.data)

                // Cookies.set('brand_id', JSON.stringify(responseData?.data?.id), { expires: 106500 });

                if (responseData.status) {
                    // toast.success('Brand Successfully Created', {
                    //     position: 'top-center',
                    //     autoClose: 5000,
                    // });

                } else {
                    console.error('Error:', responseData.message);
                    // alert('Brand creation failed');
                }
            } else {
                console.error('Error:', response.statusText);
                // alert('Brand creation failed');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };


    console.log("creatordata", creatordata);

    const onProfileDetail = (index) => {

        console.log("onProfileDetail", index);
        router.push('/creator_profile');

        Cookies.set('creator_profile_id', JSON.stringify(index?.id));
        const existingCookieData = Cookies.get('selected_creator_id');

        // Parse the existing data from JSON or initialize it as an empty array if the cookie is not set yet
        const existingDataArray = existingCookieData ? JSON.parse(existingCookieData) : [];

        // Check if the ID is already in the array before adding it
        if (existingDataArray && index && !existingDataArray.includes(index?.id)) {
            // Add the new indexId to the existing data array
            existingDataArray.push(index?.id);
            console.log("existingDataArray", existingDataArray);

            // Set the updated data in the cookie
            Cookies.set('selected_creator_id', JSON.stringify(existingDataArray));
        }


    }


    const imageUrl = "https://t4.ftcdn.net/jpg/02/24/86/95/360_F_224869519_aRaeLneqALfPNBzg0xxMZXghtvBXkfIA.jpg";
    return (
        <>
            <div
                className="flex container_capmapign_info p-3 "
                style={{ backgroundColor: Colors.button_light_clr }}
                ref={dropdownRef}
            >

                <div className="w-full auto-cols-max text-start m-0 h-screen px-3 overflow-y-auto"

                >
                    <div
                        style={{ background: Colors.invoice_gradient_clr }}
                        className="auto-cols-max p-3 rounded-md flex flex-row "
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
                                className="rounded-md flex flex-row justify-between items-center px-3 py-2"
                            >

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
                            {isOpen &&
                                <div className='z-10 w-96 mt-10 top-14 right-2 py-3 absolute bg-white rounded-lg shadow dark:bg-gray-700 divide-gray-100 shadow dark:bg-gray-700 border rounded-md'>
                                    <Filters_popup_page />
                                </div>
                            }


                        </div>
                    </div>

                    <div className=" w-full flex m-0  pt-4 flex flex-wrap justify-around h-full">
                        {creatordata?.length > 0 ? creatordata.map((item, index) => {

                            const existingCookieData = Cookies.get('selected_creator_id');

                            console.log("existingDataArray--------", existingCookieData, item?.id);

                            console.log("creatordatacreatordata", item?.id);
                            const existingDataArray = existingCookieData;
                            const valueToMatch = item?.id;


                            return (
                                <>
                                    <div className='bg-white p-3 rounded-lg m-2 w-96 ' key={index}>
                                        <div className="grid grid-cols-3 rounded-md gap-1" >
                                            <Image
                                                width={500}
                                                height={100}
                                                className="w-full h-64 object-cover"
                                                src={item?.profile_pic}
                                                alt=""
                                            />
                                            <Image
                                                width={500}
                                                height={100}
                                                className="w-full h-64 object-cover"
                                                src={item?.profile_pic}
                                                alt=""
                                            />
                                            <Image
                                                width={500}
                                                height={100}
                                                className="w-full h-64 object-cover"
                                                src={item?.profile_pic}
                                                alt=""
                                            />


                                        </div>
                                        <div className="flex justify-between mb-2 mt-2">
                                            <div> <h2 className="font-bold">{item?.user?.name}</h2></div>
                                        </div>
                                        <div className="flex justify-between mb-2 mt-2">
                                            <div> <h4>{item?.user?.name}</h4></div>
                                            <div className="flex" key={index}>
                                                {item?.categories.length > 0 && item?.categories.map((categories_item, index) => {
                                                    return (

                                                        <h6 key={index} className="px-2 py-1 m-0 p-0 rounded-full mx-2" style={{ borderWidth: 1, borderColor: Colors.logo_clr }}>
                                                            {categories_item?.name}
                                                        </h6>
                                                    )
                                                })
                                                }
                                            </div>
                                        </div>

                                        <button
                                            className="w-full rounded-full p-2 mt-3"
                                            style={{ backgroundColor: Colors.logo_clr, color: Colors.white_clr }}
                                            onClick={() => onProfileDetail(item, index)}
                                        >
                                            View profile
                                        </button>
                                    </div>
                                </>
                            )
                        }


                        )
                            :

                            <>
                                <div className="flex flex-col">
                                    <h1>
                                        {"No Campaigns Found"}
                                    </h1>
                                    <Link href={'/campaign_info'}>
                                        <button className="start_campaign_btn px-5 py-1 rounded-full w-48 my-5">
                                            Start Campaign
                                        </button>
                                    </Link>
                                </div>
                            </>
                        }

                    </div>
                </div>
            </div>
        </>
    )
}

export default Marketplace_page