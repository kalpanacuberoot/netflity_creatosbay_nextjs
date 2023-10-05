import Images from "@/images"
import Colors from "@/styles/Colors"
import Image from "next/image"
import Creator_Card from "../Creator_Homepage/Creator_Card"
import { useEffect, useState } from "react"
import Cookies from "js-cookie"
import { url } from "@/generalfunctions"

const Find_Campaignpage = () => {

    const [creator_data, setCreator_data] = useState(null);
    const [allCreatorCampaignData, setAllCreatorCampaignData] = useState(null);

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

                        if (responseData.status) {

                            setAllCreatorCampaignData(responseData?.data?.data);

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

    return (
        <>

            <div className="flex container_invoice container w-full"
                style={{ background: Colors.logo_background_clr }}
            >
                <div className="m-2 w-full auto-cols-max text-start p-2"
                >
                    <div
                        style={{ background: Colors.invoice_gradient_clr }}
                        className="auto-cols-max p-3 rounded-md flex flex-row"
                    >
                        <div className="flex flex-row justify-between items-center  w-full">
                            <div className="font_size_40" style={{ color: Colors.white_clr }}>
                                Live Campaign
                            </div>
                            <div
                                style={{ background: Colors.white_clr }}
                                className="rounded-md flex flex-row justify-between items-center px-3 py-2">
                                <button className="font_size_21 mx-4" onClick={() => router.push('/campaign_info')}>
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
                    <div className="flex flex-row flex-wrap items-start  justify-evenly">
                        {/* <Creator_Card />
                        <Creator_Card />
                        <Creator_Card /> */}
                        {allCreatorCampaignData?.length > 0 ? allCreatorCampaignData.map((item, index) => {
                            return (
                                <Creator_Card item={item} key={index} />
                            )
                        })

                            :
                            <div>No Campaign Data</div>
                        }
                    </div>

                </div>

            </div>
        </>
    )
}

export default Find_Campaignpage