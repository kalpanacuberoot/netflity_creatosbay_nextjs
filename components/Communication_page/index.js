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
import Link from "next/link"

const Communication_page = () => {

    const router = useRouter();

    const [campaign_data, setCampaign_data] = useState([]);
    const [creators, setCreators] = useState([]);
    const [activeData, setActiveData] = useState([]);
    const [inactiveData, setInactiveData] = useState([]);
    const creatorIds = campaign_data?.creators?.map((item) => item.id);
    const [blankchat, setBlankchat] = useState(true);
    const [campaign_creator_id, setCampaign_creator_id] = useState([]);
    const [creator_count, setCreator_count] = useState([]);
    const [loading, setLoading] = useState(false);

    const Creator_campaignData = async () => {

        setLoading(true)
        let userCookie = Cookies.get('user_data');
        let campaignId = Cookies.get('campaign_id');

        if (typeof userCookie === 'undefined' && typeof campaignId === 'undefined') {
            router.push('/login');
        }

        if (userCookie) {
            try {
                const cookieValue = JSON.parse(userCookie);
                const campaign_id = JSON.parse(campaignId);
                const headers = {
                    'Accept': 'application/json',
                    'Authorization': `Bearer ${cookieValue.token}`,
                    'Content-Type': 'application/json',
                };

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

                        setCampaign_data(campaignData?.data)
                        const creatorIds = campaignData?.data?.creators?.map(creator => creator);
                        console.log("campaignData", campaignData.data);

                        const activeCreatorIds = creatorIds.filter(id => id.approved === 1);
                        const inactiveCreatorIds = creatorIds.filter(id => id.approved === 0);
                        console.log("activeCreatorIds", inactiveCreatorIds);

                        const activeCreatorPromises = activeCreatorIds.map(id => {
                            return fetch(`${url}/creators/${id?.creator_id}&order=desc`, {
                                method: 'GET',
                                headers: headers,
                            })
                                .then(response => {
                                    if (!response.ok) {
                                        throw new Error('Network response was not ok');
                                    }
                                    setLoading(false)
                                    return response.json();
                                });
                        });

                        const inactiveCreatorPromises = inactiveCreatorIds.map(id => {
                            return fetch(`${url}/creators/${id?.creator_id}&order=desc`, {
                                method: 'GET',
                                headers: headers,
                            })
                                .then(response => {
                                    if (!response.ok) {
                                        throw new Error('Network response was not ok');
                                    }
                                    setLoading(false)
                                    return response.json();
                                });
                        });

                        console.log("inactiveCreatorPromises", inactiveCreatorPromises, activeCreatorPromises);

                        Promise.all([...inactiveCreatorPromises])
                            .then(creatorInactiveDataArray => {

                                setInactiveData(creatorInactiveDataArray)
                                console.log('creatorInactiveDataArray ', creatorInactiveDataArray);
                            })
                            .catch(error => {

                                console.error('Fetch error:', error);
                            });
                        Promise.all([...activeCreatorPromises])
                            .then(creatorActiveDataArray => {

                                setActiveData(creatorActiveDataArray);
                                console.log('creatorActiveDataArray ', creatorActiveDataArray);
                            })
                            .catch(error => {

                                console.error('Fetch error:', error);
                            });
                    })
                    .catch(error => {

                        console.error('Fetch error:', error);
                    });

            } catch (error) {

                console.error('Error parsing JSON:', error);
            }
        } else {

            console.error('The "user_data" cookie is not found.');
        }
    }

    useEffect(() => {

        // Creator_campaignData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const uniqueData = [];


    const idSet = new Set();

    for (const item of inactiveData) {
        const id = item.data.id;
        if (!idSet.has(id)) {
            idSet.add(id);
            uniqueData.push(item);
        }
    }

    console.log('uniqueData', uniqueData);


    console.log("commmmmmmm", campaign_data, activeData, inactiveData);

    const inActiveClick = (inactive) => {
        setLoading(true)
        console.log("inactiveinActiveClick", inactive?.data);
        setBlankchat(false);
        const creator_counts = campaign_data?.creators?.filter((item) => item.creator_id === inactive?.data?.id);
        console.log("creator_count", creator_counts);
        setCreator_count(creator_counts);
        setCreators(inactive?.data);
        setLoading(false)

    }


    const chat_creator_id = creator_count.map((item) => item?.creator_id);
    console.log("creator_count", creator_count, creators.id);

    return (

        <>
            {loading ? ( // Show loader if loading is true
                <div className="w-full h-full flex items-center justify-center">
                    <Image
                        width={100}
                        height={100}
                        alt=""
                        src={Images.Loader}
                    />
                </div>
            ) : (
                <>
                    <div className="flex container_invoice w-full "
                        style={{ background: Colors.logo_background_clr }}
                    >
                        <div className="m-2  auto-cols-max text-start p-2  w-full  "
                        >
                            <div
                                style={{ background: Colors.invoice_gradient_clr }}
                                className="auto-cols-max p-3 rounded-md flex flex-row"
                            >
                                <div className="flex flex-row justify-between items-center  w-full">
                                    <div className="font_size_40" style={{ color: Colors.white_clr }}>
                                        Communication
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-row md:flex-wrap lg:flex-nowrap items-start justify-between w-full">

                                <div style={{ background: Colors.white_clr }} className="w-full h-auto rounded-md my-3 me-3 lg:w-2/4 md:w-full md:h-auto lg:h-screen overflow-y-auto">
                                    <Searchcomm />

                                    <div className=" p-4 border shadow rounded m-3 "
                                    //  key={index}
                                    >

                                        <div className="flex flex-row items-center justify-between ">
                                            <div className="font_size_21" style={{ color: Colors.pink_clr, fontWeight: 'bold' }}>
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
                                                {activeData?.length > 0 ? activeData.map((inactive, index) => (
                                                    <>
                                                        <Avatar_green_bg item={inactive?.data} key={index} />
                                                    </>
                                                ))
                                                    :
                                                    <h4 className="px-5 py-3">No Active Conversations</h4>
                                                }
                                                {/* <Avatar_green_bg />
                                        <Avatar_green width={44} height={44} />
                                        <Avatar_red />
                                        <Avatar_green width={44} height={44} />
                                        <Avatar_red /> */}
                                            </div>

                                        </div>
                                    </div>

                                    <div className="  p-4 border shadow rounded m-3"
                                    >
                                        <div className="flex flex-row items-center justify-between ">
                                            <div className="font_size_21" style={{ color: Colors.pink_clr, fontWeight: 'bold' }}>
                                                InActive Conversations
                                            </div>
                                            <span
                                                style={{ background: Colors.gray2, borderColor: Colors.light_grey_clr }}
                                                className="px-2 rounded-md border">
                                                {/* {uniqueData?.length ? uniqueData?.length : 0} */}
                                                1
                                            </span>
                                        </div>
                                        <hr className="" />
                                        <div className="">

                                            <div className="py-3">
                                                {/* {uniqueData?.length > 0 ?
                                                    <div>
                                                        {uniqueData.map((inactive, index) => (
                                                            <>
                                                                <Avatar_red item={inactive?.data} key={index} onClick={() => inActiveClick(inactive)} />

                                                            </>
                                                        ))}
                                                        <Link href={'/marketplace'}>
                                                            <div className="flex items-center justify-center mt-5 bg-yellow-400 py-2 rounded-lg">
                                                                <Image
                                                                    src={Images.add_button_black_clr}
                                                                    width={20}
                                                                    height={20}
                                                                    alt=""
                                                                    className="me-3 cursor-pointer"
                                                                />
                                                                <button> Create Creators</button>
                                                            </div>
                                                        </Link>
                                                    </div>
                                                    :

                                                    <div>
                                                        No Creators Yet
                                                        <Link href={'/marketplace'}>
                                                            <div className="flex items-center justify-center mt-5 bg-yellow-400 py-2 rounded-lg">
                                                                <Image
                                                                    src={Images.add_button_black_clr}
                                                                    width={20}
                                                                    height={20}
                                                                    alt=""
                                                                    className="me-3 cursor-pointer"
                                                                />
                                                                <button> Create Creators</button>
                                                            </div>
                                                        </Link>
                                                    </div>

                                                } */}


                                                {/* <Avatar_green width={44} height={44} /> */}
                                                <Avatar_red onClick={() => setBlankchat(false)} />
                                            </div>

                                        </div>
                                    </div>


                                </div>
                                <div className=" lg:h-screen h-auto rounded-md my-3 overflow-y-auto me-3 w-full" style={{ background: Colors.white_clr }}>

                                    <div className=" bg-zinc-100 h-full">
                                        {blankchat &&
                                            <div className="flex flex-col items-center p-4 h-full justify-center max-w-lg mx-auto">
                                                <Image
                                                    src={Images.chat_box_placeholder}
                                                    width={150}
                                                    height={150}
                                                    className="rounded"
                                                    alt=""
                                                />
                                                <span className="text-center py-5">
                                                    Make calls, share your screen and get a faster experience when you download the Windows app.
                                                </span>
                                            </div>
                                        }

                                        {!blankchat &&
                                            <>
                                                {creators &&
                                                    <>
                                                        <div className="flex flex-row items-center p-4 justify-between ">
                                                            <Avatar_without_badge item={creators} />
                                                            <div style={{ background: Colors.gray2 }} className="py-3 px-3 rounded-md">
                                                                {creator_count?.length > 0 && creator_count?.slice(0, 1).map((item, index) => {

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


                                                        </div>
                                                    </>
                                                }
                                                <hr className="" />
                                                <div className=" bg-zinc-100 flex flex-col justify-end " style={{ height: '100vh' }}>
                                                    <Chat
                                                        creatorId={creator_count}
                                                        chatcreator_data={chat_creator_id}
                                                    />
                                                </div>
                                            </>
                                        }
                                    </div>
                                </div>
                                <div style={{ background: Colors.white_clr }} className="w-full h-auto rounded-md my-3 lg:w-2/4 lg:h-screen overflow-y-auto">

                                    <div className="font_size_21  p-4 capitalize" style={{ color: Colors.pink_clr, fontWeight: 'bold' }}>
                                        Campaign info
                                    </div>

                                    <hr className="" />
                                    <div className=" border shadow rounded m-3">
                                        <div className="p-4 capitalize">

                                            {/* <h3>{campaign_data?.name}</h3> */}
                                            <h3>Ant Studio llp</h3>
                                        </div>
                                        <div className="px-4">
                                            <Image
                                                src={Images.card_img}
                                                height={200}
                                                width={450}
                                                className="mx-auto"
                                                alt={""}

                                            />
                                            {campaign_data?.references?.length > 0 && campaign_data?.references.map((item, index) => (
                                                <>
                                                    <h3 className="font-bold underline">Products</h3>
                                                    <h3 className="capitalize my-1">{item.name}</h3>
                                                    <h4 className="mb-5 normal-case">{item.description}</h4>
                                                    <Image
                                                        src={item?.link}
                                                        height={200}
                                                        width={200}
                                                        className="mx-auto"
                                                        alt={item.name}
                                                        key={index}
                                                    />
                                                </>
                                            ))}

                                            {campaign_data?.products?.length > 0 && campaign_data?.products.map((item, index) => (
                                                <>
                                                    <h3 className="font-bold underline">References</h3>
                                                    <h3>{item.name}</h3>
                                                    <h4>{item.description}</h4>
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

                                            <div className="font_size_16 communication_text py-2 normal-case my-5">

                                                {/* {campaign_data?.description} */}
                                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.

                                            </div>

                                        </div>


                                    </div>

                                    <div className=" border shadow rounded mx-3 my-4 py-4 px-3" >

                                        <div className="flex px-4 items-center">
                                            <label
                                                htmlFor="first_name"
                                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white w-full">
                                                <i>Image Count : </i>
                                            </label>

                                            <div className="px-3">1/2</div>
                                        </div>
                                        <div className="flex px-4 items-center">
                                            <label
                                                htmlFor="first_name"
                                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white w-full">
                                                <i> Video Count : </i>
                                            </label>

                                            <div className="px-3">0/2</div>
                                        </div>
                                        <div className="flex px-4 items-center">
                                            <label
                                                htmlFor="first_name"
                                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white w-full">
                                                <i> Revision Submitted :</i>
                                            </label>

                                            <div className="px-3">0/2</div>
                                        </div>
                                    </div>

                                    {/* {creator_count?.length > 0 && creator_count.map((item, index) => (
                                        <div className=" border shadow rounded mx-3 my-4 py-4 px-3" key={index}>

                                            <div className="flex px-4 items-center">
                                                <label
                                                    htmlFor="first_name"
                                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white w-full">
                                                    <i>Image Count : </i>
                                                </label>

                                                <div className="px-3">{item?.image_count}/2</div>
                                            </div>
                                            <div className="flex px-4 items-center">
                                                <label
                                                    htmlFor="first_name"
                                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white w-full">
                                                    <i> Video Count : </i>
                                                </label>

                                                <div className="px-3">{item?.video_count}/2</div>
                                            </div>
                                            <div className="flex px-4 items-center">
                                                <label
                                                    htmlFor="first_name"
                                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white w-full">
                                                    <i> Revision Submitted :</i>
                                                </label>

                                                <div className="px-3">{item?.video_count}/2</div>
                                            </div>
                                        </div>
                                    ))} */}

                                </div>
                            </div>

                        </div>

                    </div>
                </>
            )}
        </>
    )
}

export default Communication_page