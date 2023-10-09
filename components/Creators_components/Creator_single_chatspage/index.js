import Colors from "@/styles/Colors"
import { useRouter } from "next/router"
import Cookies from "js-cookie"
import { useEffect, useState } from "react"
import { url } from "@/generalfunctions"
import Image from "next/image"
import Images from "@/images"
import Creator_avatar_red from "../Creator_Chatspage/Creator_avatar_red"
import Creator_chats from "../Creator_Chatspage/Creator_chats"
import Brand_Avatar_single_withoutbadge from "./Brand_Avatar_single_withoutbadge"
import Creator_single_chats from "./Creator_single_chats"

const Creator_single_chatspage = () => {

    const router = useRouter();
    const [creator_data, setCreator_data] = useState(null);
    const [allCreatorCampaignData, setAllCreatorCampaignData] = useState(null);
    const [allInactiveBrands, setAllInactiveBrands] = useState(null);
    const [allActiveBrands, setAllActiveBrands] = useState(null);
    const [blankchat, setBlankchat] = useState(true);

    const creatorIdData = async () => {

        const cookieValue = JSON.parse(Cookies.get('creator_user_data'));
        const userId = JSON?.parse(Cookies?.get('creator_user_data'));

        console.log("cookieValue creator", cookieValue?.token, userId?.user?.id);
        try {

            const headers = {
                'Authorization': `Bearer ${cookieValue?.token}`,
                'Content-Type': 'application/json',
            };

            const response = await fetch(`${url}/creators/?user=${userId?.user?.id}`, {
                method: 'Get',
                headers: headers,

            });

            console.log("response get creators", response);

            if (response?.ok) {
                const responseData = await response.json();
                console.log('creators response: homepage', responseData?.data?.data[0]);
                Cookies.set('creator_profile_id', JSON.stringify(responseData?.data?.data[0]))

                if (responseData?.status === "success") {
                    // Cookies.set('creator_profile_id', JSON.stringify(responseData?.data?.data))
                    const creatorId = responseData?.data?.data[0]?.id;

                    setCreator_data(creatorId);
                    await allCampaignData(creatorId);

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
                }
            } else {
                console.error('Error:', response.statusText);

            }
        } catch (error) {
            console.error('Error:', error);
        }

    };


    const allCampaignData = async (creatorId) => {

        try {
            let cookieValue = Cookies.get('creator_user_data');

            console.log('categories cookieValue------------1', JSON.parse(cookieValue).user.type);
            const checkBrand = JSON.parse(cookieValue)?.user?.type

            if (typeof cookieValue === 'undefined' || checkBrand !== 'creator') {
                console.log('User not authenticated, navigating to login page...');
                router.push('/login'); // Replace '/login' with the actual login page URL
                console.log('categories cookieValue----brand--------userId', cookieValue?.token);

            }
            else {
                let cookieValue = JSON.parse(Cookies.get('creator_user_data'))
                let campaignId = JSON.parse(Cookies.get('creator_campaign_id'))
                try {

                    const headers = {
                        'Authorization': `Bearer ${cookieValue?.token}`,
                    };
                    const response = await fetch(`${url}/campaigncreators?creator=${creatorId}`, {
                        method: 'Get',
                        headers: headers,

                    });
                    if (response.status === 429) {
                        const retryAfter = parseInt(response.headers.get('Retry-After')) || 60; // Default to 60 seconds
                        console.log(`Rate limited. Retrying after ${retryAfter} seconds.`);
                        await new Promise(resolve => setTimeout(resolve, retryAfter * 1000)); // Convert seconds to milliseconds
                        return makeRequest(); // Retry the request
                    }

                    console.log('GET campaigns?brand=1 response:', response);
                    if (response?.ok) {
                        const responseData = await response.json();
                        console.log('campaigns response:', responseData?.data?.data);
                        const campaignData = responseData?.data?.data;
                        const uniquecreatorId = responseData?.data?.data.filter((id) => id?.campaign_id === campaignId)
                        setAllCreatorCampaignData(uniquecreatorId);

                        if (responseData.status) {
                            // const brand_id = responseData?.data?.data.filter((id) => );
                            const inactiveBrandIds = responseData?.data?.data.filter((id) => id?.campaign_id === campaignId && id.approved === 0)
                            setAllInactiveBrands(inactiveBrandIds);

                            const activeBrandIds = responseData?.data?.data.filter((id) => id?.campaign_id === campaignId && id.approved === 1)
                            setAllActiveBrands(activeBrandIds);

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
                        }
                    } else {
                        console.error('Error:', response.statusText);
                        // alert('Brand creation failed');
                    }
                } catch (error) {
                    console.error('Error:', error);
                }
            }
        } catch (error) {
            console.error('Error parsing user_data cookie:', error);
        }

    }

    useEffect(() => {
        creatorIdData();
    }, []);

    console.log("allInactiveBrands single chat", allInactiveBrands);

    const inActiveBrandClick = (item) => {
        // setLoading(true)
        console.log("creator inactiveinActiveClick", item);
        setAllCreatorCampaignData(item)
        setBlankchat(false);
    }

    return (

        <>

            <div className="flex container_invoice w-full"
                style={{ background: Colors.logo_background_clr }}
            >
                <div className="m-2  auto-cols-max text-start p-2  w-full"
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
                    <div className="flex flex-row items-start  justify-between w-full">
                        <div style={{ background: Colors.white_clr }} className="rounded-md my-3 me-3 w-2/4 h-screen overflow-y-auto">
                            <div className=" p-4 border shadow rounded m-3 "
                            >
                                <div className="flex flex-row items-center justify-between ">
                                    <div className="font_size_21">
                                        Active Conversations
                                    </div>
                                    <span
                                        style={{ background: Colors.gray2, borderColor: Colors.light_grey_clr }}
                                        className="px-2 rounded-md border">
                                    </span>
                                </div>


                                <hr className="" />
                                <div className="">
                                    <div className="py-3">
                                    </div>
                                </div>
                            </div>

                            <div className="  p-4 border shadow rounded m-3"
                            >
                                <div className="flex flex-row items-center justify-between ">
                                    <div className="font_size_21">
                                        InActive Conversations
                                    </div>
                                    <span
                                        style={{ background: Colors.gray2, borderColor: Colors.light_grey_clr }}
                                        className="px-2 rounded-md border">
                                        {allInactiveBrands?.length ? allInactiveBrands?.length : 0}
                                    </span>
                                </div>
                                <hr className="" />
                                <div className="">

                                    <div className="py-3">
                                        {allInactiveBrands?.length > 0 && allInactiveBrands.map((item, index) => (
                                            <>
                                                <div onClick={() => inActiveBrandClick(item)} >
                                                    <Creator_avatar_red key={index} item={item} />
                                                </div>
                                            </>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col justify-between rounded-md my-3 overflow-y-auto me-3 w-full h-full" style={{ background: Colors.white_clr }}>
                            {!blankchat &&
                                <div className="flex flex-row items-center p-4 justify-between">
                                    {/* {allInactiveBrands.length>0 && allInactiveBrands.map((item, index) => { */}
                                        <Brand_Avatar_single_withoutbadge item={allInactiveBrands}/>
                                    {/* })} */}

                                    <div style={{ background: Colors.gray2 }} className="py-3 px-3 rounded-md">

                                        <button
                                            type="button"
                                            className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800 focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"

                                        >

                                            Inactive
                                        </button>
                                        <button
                                            type="button"
                                            className='focus:outline-none text-white bg-yellow-600 focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2'

                                        >
                                            Refresh
                                        </button>

                                    </div>
                                </div>
                            }

                            {blankchat &&
                                <div className="h-full flex">
                                    <div className="flex flex-col items-center pt-10 justify-center max-w-lg mx-auto top-2/4">
                                        <Image
                                            src={Images.chat_box_placeholder}
                                            width={150}
                                            height={150}
                                            className="rounded h-auto"
                                            alt=""
                                        />
                                        <span className="text-center py-5">
                                            Make calls, share your screen and get a faster experience when you download the Windows app.
                                        </span>
                                    </div>
                                </div>
                            }

                            <hr className="" />

                            <>
                                {!blankchat &&
                                    <>
                                        <div className=" bg-zinc-100 flex flex-col justify-end " style={{ height: '100vh' }}>
                                            <Creator_single_chats campaignBrandData={allCreatorCampaignData} />
                                        </div>
                                    </>

                                }
                            </>

                        </div>

                        <div style={{ background: Colors.white_clr }} className="rounded-md my-3 w-2/4 h-screen overflow-y-auto">

                            <div className="font_size_21  p-4">
                                Campaign info
                            </div>
                            <hr className="" />
                            {allInactiveBrands?.length > 0 && allInactiveBrands?.map((item, index) => (

                                <div className=" border shadow rounded m-3" key={index}>
                                    <div className="p-4">
                                        {item?.campaign?.name}
                                        <h3></h3>
                                    </div>
                                    <div className="py-3">
                                        <Image
                                            // src={Images.card_img}
                                            src={item?.campaign?.brand?.logo ? item?.campaign?.brand?.logo : Images.card_img}
                                            height={200}
                                            width={200}
                                            className="mx-auto"
                                            alt=""
                                        />
                                    </div>
                                    <div className="px-4">
                                        <p className="font_size_16 communication_text py-2">
                                            {item?.campaign?.description}
                                        </p>
                                    </div>
                                    <div className="px-4">
                                        <p className="font_size_16 communication_text py-2">
                                            {item?.campaign?.starting_date} - {item?.campaign?.ending_date}
                                        </p>
                                    </div>
                                    <div className=" border shadow rounded mx-3 my-4">
                                        <div className="flex px-4 items-center">
                                            <label
                                                htmlFor="first_name"
                                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white w-full">
                                                Image Count
                                            </label>

                                            <div className="px-3">{item?.image_count}/2</div>
                                        </div>
                                        <div className="flex px-4 items-center">
                                            <label
                                                htmlFor="first_name"
                                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white w-full">
                                                Video Count
                                            </label>

                                            <div className="px-3">{item?.video_count}/2</div>
                                        </div>
                                        <div className="flex px-4 items-center">
                                            <div>Revision Submitted</div>
                                            <div className="px-5">0/2</div>
                                        </div>
                                    </div>


                                </div>
                            ))}
                        </div>


                    </div>

                </div>

            </div>
        </>
        //         )}
        // </>
    )
}

export default Creator_single_chatspage