import Colors from "@/styles/Colors"
import CollapseLeftDashboard from "../Live_Campaignpage/CollapseLeftDashboard"
import Image from "next/image"
import Images from "@/images"
import Searchcomm from "./Search"
import Avatar from "./Avatar/Avatar_green"
import Avatar_green from "./Avatar/Avatar_green"
import Avatar_red from "./Avatar/Avatar_red"
import Avatar_green_bg from "./Avatar/Avatar_green_bg"
import Avatar_without_badge from "./Avatar/Avatar_without_badge"
import Chat from "./Chat"
import Cookies from "js-cookie"
import { useEffect, useState } from "react"
import { fetchApiData } from "@/fetchApiData"
import { useRouter } from "next/router"
import { url } from "@/generalfunctions"

const Communication_page = () => {

    const router = useRouter();

    const [campaign_data, setCampaign_data] = useState([]);

    const getCompanyCraetors = async () => {

        const cookieValue = JSON.parse(Cookies.get('user_data'))
        console.log('categories cookieValue------------1', cookieValue?.token);

        const campaign_id = JSON.parse(Cookies.get('campaign_id'));
        const apiUrl = process.env.API_URL + url; // Use the environment variable

        try {
            const requestOptions = {

                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${cookieValue?.token}` // Include the token if provided
                },
            }


            const response = await fetch(`${url}/campaigns/${campaign_id}`, requestOptions);
            console.log('campaigns communication------', response)

            if (response.status === 401) {
                toast.error("Session Expired: Please login again to continue.", {
                    position: 'top-center',
                    autoClose: 5000,
                });
                router.push('/login');
            } else if (response.status === 429) {
                toast.error("Too many requests: Please wait for a few minutes to try and login again.", {
                    position: 'top-center',
                    autoClose: 5000,
                });
                router.push('/login');
                // showToastMessage("Too many requests: Please wait for a few minutes to try and login again.");
            } else if (response.status === 500) {
                toast.error("Server Error: Please wait while we fix this problem for you.", {
                    position: 'top-center',
                    autoClose: 5000,
                });
                router.push('/login');
            } else if (!response.ok) {
                throw new Error(`Request failed with status: ${response.status}`);
            }

            // return await response.json();
            const responseData = await response.json();
            console.log('campaigns communication response:', responseData?.data);
            setCampaign_data(responseData?.data);
        } catch (error) {
            console.error('Error:', error);
            throw error;
        }

    };

    useEffect(() => {
        getCompanyCraetors();
    }, [])

    console.log("commmmmmmm", campaign_data);

    const filteredInactiveCreators = campaign_data?.creators?.filter(creator => creator.approved === 0);
    const filteredActiveCreators = campaign_data?.creators?.filter(creator => creator.approved === 1);

    console.log('filteredCreators', filteredInactiveCreators, filteredActiveCreators);


    // const matchingCreator = creators.find(creator => creator.creator_id === storedCreatorId);


    return (

        <>
            <div className="flex container_invoice container w-full"
                style={{ background: Colors.logo_background_clr }}
            >
                <div className="auto-cols-max  px-3 py-5 border w-1/7"
                    style={{ background: Colors.white_clr }}
                >
                    <CollapseLeftDashboard />
                </div>

                <div className="m-2 w-screen auto-cols-max text-start p-2 "

                >
                    <div
                        style={{ background: Colors.invoice_gradient_clr }}
                        // style={style}
                        className="auto-cols-max p-3 rounded-md flex flex-row"
                    >
                        <div className="flex flex-row justify-between items-center  w-full">
                            <div className="font_size_40" style={{ color: Colors.white_clr }}>
                                Communication
                            </div>
                        </div>


                    </div>
                    <div className="flex flex-row items-start  justify-between w-full ">

                        <div style={{ background: Colors.white_clr }} className="rounded-md my-3 me-3 w-2/8">
                            <Searchcomm />
                            {/* {filteredActiveCreators?.length > 0 ?
                                filteredActiveCreators?.map((active, index) => ( */}
                            <div className=" p-4 border shadow rounded m-3 "
                            //  key={index}
                            >

                                <div className="flex flex-row items-center justify-between ">
                                    <div className="font_size_21">
                                        Active Conversations
                                    </div>
                                    <span
                                        style={{ background: Colors.gray2, borderColor: Colors.light_grey_clr }}
                                        className="px-2 rounded-md border">
                                        4
                                    </span>
                                </div>


                                <hr className="" />
                                <div className="">
                                    <div className="py-3">
                                        <Avatar_green_bg />
                                        <Avatar_green width={44} height={44} />
                                        <Avatar_red />
                                        <Avatar_green width={44} height={44} />
                                        <Avatar_red />
                                    </div>

                                </div>
                            </div>
                            {/* 
                                ))
                                :
                                <div> no data found</div>

                            } */}


                            {/* {filteredInactiveCreators.length>0 ? 
                            filteredInactiveCreators?.map((inactive, index) => ( */}
                            <div className="  p-4 border shadow rounded m-3"
                            // key={index}
                            >
                                <div className="flex flex-row items-center justify-between ">
                                    <div className="font_size_21">
                                        InActive Conversations
                                    </div>
                                    <span
                                        style={{ background: Colors.gray2, borderColor: Colors.light_grey_clr }}
                                        className="px-2 rounded-md border">
                                        4
                                    </span>
                                </div>
                                <hr className="" />
                                <div className="">

                                    <div className="py-3">
                                        <Avatar_green_bg />
                                        <Avatar_green width={44} height={44} />
                                        <Avatar_red />
                                        <Avatar_green width={44} height={44} />
                                        <Avatar_red />
                                    </div>

                                </div>
                            </div>
                            {/* ))
                        :
                        <div> no data found</div>
                        } */}

                        </div>

                        <div style={{ background: Colors.white_clr }} className="rounded-md my-3  me-3 w-4/8 h-screen">
                            <div className="flex flex-row items-center p-4 justify-between ">
                                <Avatar_without_badge />
                                <div style={{ background: Colors.gray2 }} className="py-3 px-3 rounded-md">
                                    {/* <Image

                                        width={18}
                                        height={18}
                                        src={Images.three_dots_icon}
                                        className="rounded-md"
                                        alt=""
                                    /> */}
                                    <button
                                        type="button"
                                        className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                                    >
                                        Active
                                    </button>
                                </div>
                            </div>
                            <hr className="" />
                            <div className="p-5">


                                <Image
                                    src={Images.chat_msg}
                                    width={510}
                                    height={250}
                                    alt=""
                                    className=""
                                />
                            </div>
                            <hr />
                            <div className="p-5">

                                <Chat />
                            </div>


                        </div>
                        <div style={{ background: Colors.white_clr }} className="rounded-md my-3 w-2/8">

                            <div className="font_size_21  p-4">
                                Campaign info
                            </div>

                            <hr className="" />
                            <div className=" border shadow rounded m-3">
                                <div className="p-4">
                                    {/* <Avatar_green width={38} height={38} /> */}
                                    <h3>{campaign_data?.name}</h3>
                                </div>
                                <div className="px-4">
                                {campaign_data?.products?.length > 0 && campaign_data?.products.map((item, index) => (
                                        <>
                                            {/* <div>{item?.name}</div> */}
                                            <Image
                                                src={item?.link}
                                                height={216}
                                                width={278}
                                                className="mx-auto"
                                                alt=""
                                            />
                                        </>
                                    ))}
                                     {campaign_data?.references?.length > 0 && campaign_data?.references.map((item, index) => (
                                        <>
                                            {/* <div>{item?.name}</div> */}
                                            <Image
                                                src={item?.link}
                                                height={216}
                                                width={278}
                                                className="mx-auto"
                                                alt=""
                                            />
                                        </>
                                    ))}
                                    {/* <Image
                                        src={Images.communication_one}
                                        height={216}
                                        width={278}
                                        className="mx-auto"
                                        alt=""
                                    /> */}
                                    {/* <div className="flex flex-row items-center justify-evenly py-2 flex-wrap ">
                                        <Image
                                            src={Images.communication_two}
                                            width={61}
                                            height={61}
                                            alt=""
                                        />
                                        <Image
                                            src={Images.communication_three}
                                            width={61}
                                            height={61}
                                            alt=""
                                        />
                                        <Image
                                            src={Images.communication_four}
                                            width={61}
                                            height={61}
                                            alt=""
                                        />
                                        <Image
                                            src={Images.communication_five}
                                            width={61}
                                            height={61}
                                            alt=""
                                        />
                                    </div> */}
                                    {/* <div className="flex flex-row items-center flex-wrap border rounded-full px-3 py-2"></div> */}
                                    <div className="border rounded-full px-3 py-2">
                                        <div className="font_size_10" style={{ color: Colors.orange_clr, lineHeight: '11.82px' }}>
                                            Useful Link :-
                                        </div>
                                        <div className="font_size_12" style={{ color: Colors.orange_clr, lineHeight: '14.18px' }}>
                                            https://www.LoremIpsum.com/LoremIpsum.php?gen+link
                                        </div>
                                    </div>
                                    <p className="font_size_16 communication_text py-2">
                                        {/* Qorem ipsum Lorem Ipsum is simply dummy text of
                                        the printing and typesetting industry. Lorem Ipsum
                                        has been the industry&apos;s standard dummy text ever
                                        since the 1500s, when an unknown printer took a
                                        galley of type and scrambled it to make a type
                                        specimen book. It has survived not only five
                                        centuries, but also the leap into electronic
                                        typesetting, remaining essentially unchanged. It
                                        was popularised in the 1960s with the release of */}
                                        {campaign_data?.description}

                                    </p>
                                   
                                </div>


                            </div>
                            {campaign_data?.creators?.length > 0 && campaign_data?.creators.map((item, index) => (
                                <div className=" border shadow rounded mx-3 my-4">
                                    <div className="flex px-4 items-center">
                                        <label
                                            htmlFor="first_name"
                                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white w-full">
                                            Image Count
                                        </label>
                                        {/* <input
                                        type="number"
                                        id="first_name"
                                        className="bg-gray-50 my-3 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full px-2.5 py-2 dark:bg-purple-700 dark:border-purple-600 dark:placeholder-purple-400 dark:text-white dark:focus:ring-purple-500 dark:focus:border-purple-500"
                                        placeholder="Image Count"
                                        required /> */}
                                        <div className="px-3">{item?.image_count}/2</div>
                                    </div>
                                    <div className="flex px-4 items-center">
                                        <label
                                            htmlFor="first_name"
                                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white w-full">
                                            Video Count
                                        </label>
                                        {/* <input
                                        type="number"
                                        id="first_name"
                                        className="bg-gray-50 my-3 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full px-2.5 py-2 dark:bg-purple-700 dark:border-purple-600 dark:placeholder-purple-400 dark:text-white dark:focus:ring-purple-500 dark:focus:border-purple-500"
                                        placeholder="Video Count"
                                        required /> */}
                                        <div className="px-3">{item?.video_count}/2</div>
                                    </div>
                                    <div className="flex px-4 items-center">
                                        <div>Revision Submitted</div>
                                        <div className="px-5">0/2</div>
                                    </div>
                                </div>
                            ))}

                        </div>
                    </div>

                </div>

            </div>
        </>
    )
}

export default Communication_page