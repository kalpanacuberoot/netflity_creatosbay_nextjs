import Creators_profilepage from "@/components/Creators_profilepage"
import All_routing from "./all_routing"
import { useRouter } from "next/router";
import Cookies from "js-cookie";


const Creator_profile = () => {

    const router = useRouter();

    if (typeof window !== 'undefined') {
        const router = useRouter();

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

    return (
        <>
            <All_routing>
                <Creators_profilepage />
            </All_routing>
        </>
    )
}

export default Creator_profile