import All_component_layout from "@/components/All_component_layout"
import Campaign_infopage from "@/components/Campaign_infopage"
import All_routing from "./all_routing"
import { useRouter } from "next/router";
import Cookies from "js-cookie";

const Campaign_info = () => {

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
    }

    return (
        <>
            <All_routing>
                <Campaign_infopage />
            </All_routing>
        </>
    )
}

export default Campaign_info