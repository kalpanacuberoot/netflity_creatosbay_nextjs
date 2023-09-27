import Communication_page from "@/components/Communication_page"
import All_routing from "./all_routing"
import { useRouter } from "next/router";
import Cookies from "js-cookie";

const Communication = () => {

    const router = useRouter();

    if (typeof window !== 'undefined') {
        

        const user_data = Cookies.get('user_data');
        const brand_detail = Cookies.get('brand_detail');
        const brand_id = Cookies.get('brand_id');


        if (typeof user_data === 'undefined' || typeof brand_detail === 'undefined') {
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
                <Communication_page />
            </All_routing>
        </>
    )
}

export default Communication