import Images from "@/images"
import Colors from "@/styles/Colors"
import Image from "next/image"
import Link from "next/link"
import Creator_Card from "./Creator_Card"
import { useEffect, useState } from "react"
import Cookies from "js-cookie"
import { url } from "@/generalfunctions"

const Creator_Home = () => {


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
                console.log('creators response:', responseData?.data?.data);

                if (responseData?.status === "success") {
                    const creatorId = responseData?.data?.data[0]?.id;
                    Cookies.set('creator_profile_id', JSON.stringify(responseData?.data?.data))
                    setCreator_data(creatorId);
                    await allCampaignData(creatorId);

                } else {
                    console.error('Error:', responseData.message);

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
            }
        } catch (error) {
            console.error('Error parsing user_data cookie:', error);
        }

    }

    useEffect(() => {
        creatorIdData();
    }, []);

    console.log("allCreatorCampaignData", creator_data, allCreatorCampaignData);
    return (
        <>
            <div className="flex w-full" style={{ backgroundColor: Colors.button_light_clr }}>

                <div
                    className="w-full auto-cols-max me-3 ps-5 rounded-md pb-3 "
                >
                    <div
                        className="my-4 ps-3 rounded-md"
                        style={{ backgroundColor: Colors.white_clr }}
                    >
                        <div className="flex flex-row  w-full justify-between">
                            <div className="flex flex-col w-full justify-evenly ps-10 pb-5">
                                <div className="home_title">

                                    Welcome to

                                    <span className="golden_home_title"> Creators</span>{" "}
                                    bay

                                </div>

                                <h3>Your content is just a click away !</h3>

                            </div>
                            <Image
                                src={Images.home_title_bg}
                                width={200}
                                height={100}
                                alt=""
                                className=""
                            />
                        </div>
                    </div>
                    <div
                        className="flex flex-row justify-evenly items-start p-5 rounded-md flex-wrap overflow-y-auto min-h-screen h-auto"
                        style={{ backgroundColor: Colors.white_clr }}
                    >
                        {allCreatorCampaignData?.length > 0 ? allCreatorCampaignData.map((item, index) => {
                            return (
                                <Creator_Card item={item} key={index}/>
                            )
                        })

                            :
                            <div>No Campaign Data</div>
                        }


                    </div>
                </div>

            </div >
        </>
    )
}

export default Creator_Home