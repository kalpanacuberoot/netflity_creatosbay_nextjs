import Colors from "@/styles/Colors"
import Creator_avatar_red from "./Creator_avatar_red"
import Creator_chats from "./Creator_chats"
import Avatar_without_badge from "@/components/Communication_page/Avatar/Avatar_without_badge"
import Brand_Avatar_withoutbadge from "./Brand_Avatar_withoutbadge"
import { useRouter } from "next/router"
import Cookies from "js-cookie"
import { useEffect, useState } from "react"
import { url } from "@/generalfunctions"
import Image from "next/image"
import Images from "@/images"

const Creator_Chatspage = () => {

    const router = useRouter();

    const [campaign_data, setCampaign_data] = useState(null);
    const [allInactiveBrands, setAllInactiveBrands] = useState(null);
    const [allActiveBrands, setAllActiveBrands] = useState(null);
    const [blankchat, setBlankchat] = useState(true);
    const [loading, setLoading] = useState(false);

    const AllBrand_allcampaignData = async () => {

        // setLoading(true)
        let userCookie = Cookies.get('creator_user_data');
        let creatorProfileId = Cookies.get('creator_profile_id');

        if (typeof userCookie === 'undefined' && typeof creatorProfileId === 'undefined') {
            router.push('/login');
        }

        if (userCookie) {
            try {
                let cookieValue = JSON.parse(userCookie);
                creatorProfileId = JSON.parse(creatorProfileId);
                console.log("creatorProfileId comm", creatorProfileId);
                const headers = {
                    'Accept': 'application/json',
                    'Authorization': `Bearer ${cookieValue.token}`,
                    'Content-Type': 'application/json',
                };

                fetch(`${url}/campaigncreators?creator=${creatorProfileId?.id}`, {
                    method: 'GET',
                    headers: headers,
                })
                    .then(response => {

                        // console.log("campaigns craetors on communication page", response);
                        if (!response.ok) {
                            throw new Error('Network response was not ok');
                        }
                        return response.json();
                    })
                    .then(campaignData => {

                        console.log("campaignData on communication page", campaignData?.data?.data);
                        // setCamadata(campaignData?.data?.data)
                        const brandIds = campaignData?.data?.data?.map(creator => creator);
                        console.log("campaignData", brandIds);

                        const activeBrandIds = brandIds.filter(id => id?.approved === 1);
                        setAllActiveBrands(activeBrandIds);

                        const inactiveBrandIds = brandIds.filter(id => id?.approved === 0);
                        setAllInactiveBrands(inactiveBrandIds);
                        console.log("inactiveBrandIds", inactiveBrandIds);
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
        AllBrand_allcampaignData();
    }, []);

    const inActiveBrandClick = (item) => {
        // setLoading(true)
        console.log("creator inactiveinActiveClick", item);
        setCampaign_data(item)
        setBlankchat(false);
        // const creator_counts = campaign_data?.creators?.filter((item) => item.creator_id === inactive?.data?.id);
        // console.log("creator_count", creator_counts);
        // setCreator_count(creator_counts);
        // setCreators(inactive?.data);
        // setLoading(false)

    }

    console.log("campaign_datacampaign_data", campaign_data);
    console.log("allInactiveBrands", allInactiveBrands);

    const onRefresh = () => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
            setBlankchat(true)
        }, 1000);
    }

    console.log("campaigndata---",campaign_data);


    return (
        // <>
        //     {
        //         loading ? ( // Show loader if loading is true
        //             <div className="w-full h-full flex items-center justify-center" >
        //                 <Image
        //                     width={100}
        //                     height={100}
        //                     alt=""
        //                     src={Images.Loader}
        //                 />
        //             </div >
        //         ) : (
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
                                    {campaign_data && <Brand_Avatar_withoutbadge item={campaign_data}/>}
                                    
                                    <div style={{ background: Colors.gray2 }} className="py-3 px-3 rounded-md">

                                        <button
                                            type="button"
                                            className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800 focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"

                                        >
                                            {/* {item?.approved === 0 ? "Inactive" : "active"} */}
                                            Inactive
                                        </button>
                                        <button
                                            type="button"
                                            className='focus:outline-none text-white bg-yellow-600 focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2'
                                            // onClick={() => setBlankchat(false)}
                                            onClick={onRefresh}
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
                            {
                                loading ? ( // Show loader if loading is true
                                    <div className="w-full h-full flex items-center justify-center" >
                                        <Image
                                            width={100}
                                            height={100}
                                            alt=""
                                            src={Images.Loader}
                                        />
                                    </div >
                                ) : (
                                    <>
                                        {!blankchat &&
                                            <>
                                                <div className=" bg-zinc-100 flex flex-col justify-end " style={{ height: '100vh' }}>
                                                    <Creator_chats campaignBrandData={campaign_data} />
                                                </div>
                                            </>

                                        }
                                    </>
                                )}
                        </div>
                        <div style={{ background: Colors.white_clr }} className="rounded-md my-3 w-2/4   h-screen overflow-y-auto">

                            <div className="font_size_21  p-4">
                                Campaign info
                            </div>

                            <hr className="" />
                            <div className=" border shadow rounded m-3">
                                <div className="p-4">
                                    {campaign_data?.campaign?.name}
                                    <h3></h3>
                                </div>
                                <div className="py-3">
                                    <Image
                                        src={campaign_data?.campaign?.brand?.logo ? campaign_data?.campaign?.brand?.logo : Images.card_img}
                                        height={200}
                                        width={200}
                                        className="mx-auto"
                                        alt=""
                                    />
                                </div>
                                <div className="px-4">
                                    <p className="font_size_16 communication_text py-2">
                                        {campaign_data?.campaign?.description}
                                    </p>
                                </div>
                                <div className="px-4">
                                    <p className="font_size_16 communication_text py-2">
                                        {campaign_data?.campaign?.starting_date} - {campaign_data?.campaign?.ending_date}
                                    </p>
                                </div>
                                <div className=" border shadow rounded mx-3 my-4">
                                    <div className="flex px-4 items-center">
                                        <label
                                            htmlFor="first_name"
                                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white w-full">
                                            Image Count
                                        </label>

                                        <div className="px-3">{campaign_data?.image_count}/2</div>
                                    </div>
                                    <div className="flex px-4 items-center">
                                        <label
                                            htmlFor="first_name"
                                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white w-full">
                                            Video Count
                                        </label>

                                        <div className="px-3">{campaign_data?.video_count}/2</div>
                                    </div>
                                    <div className="flex px-4 items-center">
                                        <div>Revision Submitted</div>
                                        <div className="px-5">0/2</div>
                                    </div>
                                </div>


                            </div>

                        </div>
                    </div>

                </div>

            </div>
        </>
        //         )}
        // </>
    )
}

export default Creator_Chatspage