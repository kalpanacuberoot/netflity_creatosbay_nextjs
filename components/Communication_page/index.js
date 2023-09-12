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
    const [creators, setCreators] = useState([]);
    const [activeData, setActiveData] = useState([]);
    const [inactiveData, setInactiveData] = useState([]);
    const creatorIds = campaign_data?.creators?.map((item) => item.id);
    const [blankchat, setBlankchat] = useState(false);
    const [campaign_creator_id, setCampaign_creator_id] = useState([]);
    const [creator_count, setCreator_count] = useState([]);

    const Creator_campaignData = async () => {

        const userCookie = Cookies.get('user_data');
        const campaignId = Cookies.get('campaign_id');
        if (userCookie) {
            try {
                const cookieValue = JSON.parse(userCookie);
                const campaign_id = JSON.parse(campaignId);
                // Include the token in the Authorization header
                const headers = {
                    'Accept': 'application/json',
                    'Authorization': `Bearer ${cookieValue.token}`,
                    'Content-Type': 'application/json',
                };

                // Make a GET request to the campaign API
                fetch(`${url}/campaigns/${campaign_id}`, {
                    method: 'GET',
                    headers: headers,
                })
                    .then(response => {

                        console.log("campaigns", response);
                        if (!response.ok) {
                            throw new Error('Network response was not ok');
                        }
                        return response.json();
                    })
                    .then(campaignData => {
                        // Extract the creator IDs from the campaign data
                        setCampaign_data(campaignData?.data)
                        const creatorIds = campaignData?.data?.creators?.map(creator => creator);
                        console.log("campaignData", campaignData.data);

                        // Filter creator IDs for active (approved = 1) and inactive (approved = 0) creators
                        const activeCreatorIds = creatorIds.filter(id => id.approved === 1);
                        const inactiveCreatorIds = creatorIds.filter(id => id.approved === 0);
                        console.log("activeCreatorIds", inactiveCreatorIds);
                        // Fetch data for active creators
                        const activeCreatorPromises = activeCreatorIds.map(id => {
                            return fetch(`${url}/creators/${id?.creator_id}`, {
                                method: 'GET',
                                headers: headers,
                            })
                                .then(response => {
                                    if (!response.ok) {
                                        throw new Error('Network response was not ok');
                                    }
                                    return response.json();
                                });
                        });

                        // Fetch data for inactive creators
                        const inactiveCreatorPromises = inactiveCreatorIds.map(id => {
                            return fetch(`${url}/creators/${id?.creator_id}`, {
                                method: 'GET',
                                headers: headers,
                            })
                                .then(response => {
                                    if (!response.ok) {
                                        throw new Error('Network response was not ok');
                                    }
                                    return response.json();
                                });
                        });

                        console.log("inactiveCreatorPromises", inactiveCreatorPromises, activeCreatorPromises);

                        // Use Promise.all to wait for all fetch requests to complete
                        Promise.all([...inactiveCreatorPromises])
                            .then(creatorInactiveDataArray => {
                                // Handle the fetched creator data here
                                setInactiveData(creatorInactiveDataArray)
                                console.log('creatorInactiveDataArray ', creatorInactiveDataArray);
                            })
                            .catch(error => {
                                // Handle fetch errors here
                                console.error('Fetch error:', error);
                            });
                        Promise.all([...activeCreatorPromises])
                            .then(creatorActiveDataArray => {
                                // Handle the fetched creator data here
                                setActiveData(creatorActiveDataArray);
                                console.log('creatorActiveDataArray ', creatorActiveDataArray);
                            })
                            .catch(error => {
                                // Handle fetch errors here
                                console.error('Fetch error:', error);
                            });
                    })
                    .catch(error => {
                        // Handle fetch errors here
                        console.error('Fetch error:', error);
                    });

            } catch (error) {
                // Handle JSON parsing errors
                console.error('Error parsing JSON:', error);
            }
        } else {
            // Handle the case where 'user_data' cookie doesn't exist
            console.error('The "user_data" cookie is not found.');
        }
    }

    useEffect(() => {

        Creator_campaignData();

    }, [])

    const uniqueData = [];

    // Use an object to keep track of unique IDs
    const idSet = new Set();

    for (const item of inactiveData) {
        const id = item.data.id;
        if (!idSet.has(id)) {
            idSet.add(id);
            uniqueData.push(item);
        }
    }

    console.log('uniqueData', uniqueData);
    // console.log('uniqueDataArray', uniqueDataArray);

    console.log("commmmmmmm", campaign_data, activeData, inactiveData);


    // const matchingCreator = creators.find(creator => creator.creator_id === storedCreatorId);
    const inActiveClick = (inactive) => {
        console.log("inactiveinActiveClick", inactive?.data);
        setBlankchat(false);
        const creator_counts = campaign_data?.creators?.filter((item) => item.creator_id === inactive?.data?.id);
        // const creator_deatil = inactive?.data?.map((item) => item.id);
        console.log("creator_count", creator_counts);
        setCreator_count(creator_counts);
        setCreators(inactive?.data);
       
    }


    const chat_creator_id = creator_count.map((item) => item?.creator_id);
    console.log("creator_count", creator_count);

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
                    <div className="flex flex-row items-start  justify-between w-full">

                        <div style={{ background: Colors.white_clr }} className="rounded-md my-3 me-3 w-2/8 h-screen overflow-y-auto">
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
                                        {activeData?.length ? activeData?.length : 0}
                                    </span>
                                </div>


                                <hr className="" />
                                <div className="">
                                    <div className="py-3">
                                        {activeData?.length > 0 && activeData.map((inactive, index) => (
                                            <>
                                                <Avatar_green_bg item={inactive?.data} key={index} />
                                            </>
                                        ))}
                                        {/* <Avatar_green_bg />
                                        <Avatar_green width={44} height={44} />
                                        <Avatar_red />
                                        <Avatar_green width={44} height={44} />
                                        <Avatar_red /> */}
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
                                        {uniqueData?.length ? uniqueData?.length : 0}
                                    </span>
                                </div>
                                <hr className="" />
                                <div className="">

                                    <div className="py-3">
                                        {uniqueData?.length > 0 && uniqueData.map((inactive, index) => (
                                            <>
                                                <Avatar_red item={inactive?.data} key={index} onClick={() => inActiveClick(inactive)} />
                                            </>
                                        ))}

                                        {/* <Avatar_green width={44} height={44} />
                                        <Avatar_red />
                                        <Avatar_green width={44} height={44} />
                                        <Avatar_red /> */}
                                    </div>

                                </div>
                            </div>
                            {/* ))
                        :
                        <div> no data found</div>
                        } */}

                        </div>
                        <div className=" h-screen w-4/8 rounded-md my-3 overflow-y-auto me-3" style={{ background: Colors.white_clr }}>

                            <div className=" bg-zinc-100">
                                {blankchat &&
                                    <div className="flex flex-col items-center p-4 h-full justify-center max-w-lg mx-auto">
                                        <Image
                                            src={Images.chat_box_placeholder}
                                            width={150}
                                            height={150}
                                            className="rounded"
                                        />
                                        <span className="text-center py-5">
                                            Make calls, share your screen and get a faster experience when you download the Windows app.
                                        </span>
                                    </div>
                                }

                                {!blankchat &&
                                    <>
                                        {creators && <div className="flex flex-row items-center p-4 justify-between ">
                                            <Avatar_without_badge item={creators} />
                                            <div style={{ background: Colors.gray2 }} className="py-3 px-3 rounded-md">
                                                {creator_count?.length >0 && creator_count?.slice(0,1).map((item, index) => {
                                                    
                                                    return (
                                                        <>
                                                            <button
                                                                type="button"
                                                                className={
                                                                    `focus:outline-none text-white ${item?.approved === 0
                                                                        ? `bg-red-700 hover:bg-red-800 focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800`
                                                                        : `bg-green-700 hover:bg-green-800 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 focus:ring-green-300`
                                                                    } focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2`
                                                                }

                                                            >
                                                                {item?.approved === 0 ? "Inactive" : "active"}
                                                            </button>

                                                        </>
                                                    )
                                                })}
                                            </div>
                                        </div>}
                                        <hr className="" />

                                        <div className="p-5 h-screen flex flex-col justify-evenly">

                                            <Chat
                                                creatorId={chat_creator_id}
                                                chatcreator_data={creators}
                                            />
                                        </div>
                                    </>
                                }



                            </div>
                        </div>
                        <div style={{ background: Colors.white_clr }} className="rounded-md my-3 w-2/8  h-screen overflow-y-auto">

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
                                            <div>{item?.name}</div>
                                            <Image
                                                key={index}
                                                src={item?.link}
                                                height={216}
                                                width={278}
                                                className="mx-auto"
                                                alt=""
                                            />
                                        </>
                                    ))}
                                    {/* {campaign_data?.references?.length > 0 && campaign_data?.references.map((item, index) => (
                                        <>
                                            
                                            <Image
                                                src={item?.link}
                                                height={216}
                                                width={278}
                                                className="mx-auto"
                                                alt=""
                                            />
                                        </>
                                    ))} */}
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
                            {creator_count?.length > 0 && creator_count.map((item, index) => (
                                <div className=" border shadow rounded mx-3 my-4" key={index}>
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