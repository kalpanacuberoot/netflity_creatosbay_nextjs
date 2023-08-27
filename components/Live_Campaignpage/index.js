import Images from "@/images"
import Image from "next/image"
import Link from "next/link";
import { useEffect, useState } from "react";
import CollapseLeftDashboard from "./CollapseLeftDashboard";
import Colors from "@/styles/Colors";
import Home_Card1 from "../Homepage/Card/Card1";
import Home_Card2 from "../Homepage/Card/Card2";
import Home_Card3 from "../Homepage/Card/Card3";
import Home_Card4 from "../Homepage/Card/Card4";
import { url } from "@/generalfunation";
import Cookies from "js-cookie";
import { useRouter } from "next/router";

const Live_Campaignpage = () => {

    const router = useRouter();

    const [dropdown_menu, setDropdown_menu] = useState(false);

    const [campaign_data, setCampaign_data] = useState([]);

    const allCampaignData = async () => {

        const cookieValue = JSON.parse(Cookies.get('user_data'));
        console.log('categories cookieValue------------1', cookieValue?.token);

        const brand_detail = Cookies.get('brand_detail');
        const brandIds = Cookies.get('brand_id');

        let brandId = null;

        if (brand_detail) {
            try {
                brandId = JSON.parse(brand_detail)?.brand?.id;
            } catch (error) {
                console.error('Error parsing brand_detail:', error);
            }
        }

        if (!brandId && brandIds) {
            try {
                brandId = JSON.parse(brandIds);
            } catch (error) {
                console.error('Error parsing brand_ids:', error);
            }
        }
        console.log('brandId:', brandId);
        try {

            const headers = {
                'Authorization': `Bearer ${cookieValue?.token}`,
            };
            // const getResponse = await getApiCall(`${url}/campaigns?brand=${brandId}`, 'get', headers);
            const response = await fetch(`${url}/campaigns?brand=${brandId}`, {
                method: 'Get',
                headers: headers,

            });
            console.log('GET campaigns?brand=1 response:', response);
            if (response?.ok) {
                const responseData = await response.json();
                console.log('campaigns response:', responseData?.data?.data);

                if (responseData.status) {
                    // toast.success('All campaigns', {
                    //   position: 'top-center',
                    //   autoClose: 5000,
                    // });

                    setCampaign_data(responseData?.data?.data);
                    // setBrand_user(responseData?.data?.data)

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



    useEffect(() => {
        allCampaignData();
    }, [])

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

                <div className="m-2 w-full auto-cols-max text-start p-2"

                >
                    <div
                        style={{ background: Colors.invoice_gradient_clr }}
                        // style={style}
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
                    <div className="flex flex-row flex-wrap items-start  justify-evenly grid grid-cols-3">
                        {campaign_data.length > 0 ? campaign_data?.map((item, index) => (
                            <>
                                <Home_Card1 key={index} items={item} />
                            </>
                        ))


                            :
                            <div className="flex flex-col">
                                <h1>
                                    {"No Campaigns Found"}
                                </h1>

                            </div>
                        }
                    </div>

                </div>

            </div>

        </>
    )
}

export default Live_Campaignpage