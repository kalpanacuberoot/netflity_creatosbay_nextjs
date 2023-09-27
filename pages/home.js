import { useEffect, useState } from "react";
import Homepage from "@/components/Homepage"
import Tab1 from "@/components/userAuth/Modal_onboarding_screens/Tab1";
import Tab2 from "@/components/userAuth/Modal_onboarding_screens/Tab2";
import Tab3 from "@/components/userAuth/Modal_onboarding_screens/Tab3";
import Modal_onboarding_screens from "@/components/userAuth/Modal_onboarding_screens";
import Onbording_content from "@/components/userAuth/Modal_onboarding_screens/Onbording_content";
import Cookies from "js-cookie";
import All_component_layout from "@/components/All_component_layout";
import All_routing from "./all_routing";
import { useRouter } from "next/router";


const Home = () => {

    const router = useRouter();

    if (typeof window !== 'undefined') {
        const router = useRouter();

        const user_data = Cookies.get('user_data');
        const brand_detail = Cookies.get('brand_detail');
        const brand_id = Cookies.get('brand_id');
        const brandtype = user_data?.user?.type


        if (typeof user_data === 'undefined' || typeof brand_detail === 'undefined' || typeof brandtype !== 'brand') {
            try {
                const checkBrand = JSON?.parse(user_data)?.user?.type
                if (checkBrand !== 'brand') {
                    router.push('/login')
                }
            } catch (err) {
                console.log("errdvvd");
            }
        }
        // else {
        //     router.push('/campaign_info')
        // }
        // Use the router here
    }

    // const router = useRouter();

    // if (typeof window !== 'undefined') {
    //     const router = useRouter();

    //     const user_data = Cookies.get('user_data');
    //     const brand_detail = Cookies.get('brand_detail');
    //     const brand_id = Cookies.get('brand_id');

    //     if (typeof user_data === 'undefined') {
    //         router.push('/login')
    //     }
    // }



    return (
        <>
            <All_routing>
                <Homepage />
            </All_routing>
        </>
    )
}

export default Home