
import { useRouter } from "next/router";
import Left_Dashboard from "../Homepage/leftDashboard";
import { parse } from 'cookie';

const All_component_layout = ({ children }) => {

    // const router = useRouter();
    // const cookies = parse(document.cookie);
    // const cookieValue = cookies.user_data ? JSON.parse(cookies.user_data) : undefined;


    // if (cookieValue === undefined) {
    //     router.push('/login');
    // }

    // if (JSON.parse(Cookies.get('user_data')) || JSON.parse(Cookies.get('brand_detail')) === "undefined") {
    //     router.push('/login')
    // }

    return (
        <>
            <Left_Dashboard>
                {children}
            </Left_Dashboard>

        </>
    )
}

export default All_component_layout