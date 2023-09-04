import Images from "@/images";
import Image from "next/image";
import ModalHeader from "../../ModalHeader";
import Buttons from "@/components/Button";
import Colors from "@/styles/Colors";
import Cookies from "js-cookie";
import { apiCall, getApiCall, url } from "@/generalfunctions";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
import { useState } from "react";
import { useRouter } from "next/router";

const Logout_content = () => {

    const router = useRouter();

    const [logout, setLogout] = useState(null);

    const onLogout = async () => {
        const cookieValue = JSON.parse(Cookies.get('user_data'));
        console.log('categories cookieValue------------1', cookieValue?.token);
        try {
            const response = await fetch(`${url}/logout`, {
                method: 'POST',
                headers: {
                    'Accept':'application/json',
                    'Content-Type':'application/json',
                    'Authorization': `Bearer ${cookieValue?.token}`,
                },
            });

            console.log("response onLogout", response);

            if (response) {
                const data = await response.json();
                
                console.log("onLogout", data);
                toast.success('onLogout Successfully', {
                    position: 'top-center',
                    autoClose: 2000,
                });
                router.push('/login');
                // Cookies.remove('brand_id');
                // Cookies.remove('user_data');

            } else {

                toast.error('Logout cancelled', {
                    position: 'top-center', // Set the toast position
                    autoClose: 3000, // Close the toast after 3 seconds
                });
            }
        } catch (error) {
            console.error('Error uploading image:', error);

        }
    };

    return (
        <>

            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">

                <ModalHeader />

                <div className="space-y-6 container-fluid p-14">
                    <div className="border rounded-lg p-10  text-center shadow-lg">
                        <div className="font_size_40 line-height-[53.32px]"
                            style={{ color: Colors.blue_clr }}
                        >
                            Oh no! You,re leaving...<br></br>
                            Are you sure ?
                        </div>
                        <div className="font_size_18  line-height-[27px] my-3">
                            Sign up for our newletter to stay always up to date.
                        </div>
                        <div className="py-3">
                            <Buttons
                                buttoncss="font_size_24 leading-6 py-3 button_clr my-3"
                                label={"No, Just Kidding "}
                            />
                            <Buttons
                                buttoncss="font_size_24 leading-6 py-3 button_clr my-3"
                                label={"Yes, Log Me Out"}
                                onClick={onLogout}
                            />
                        </div>
                    </div>

                </div>
                <ToastContainer />

            </div>
        </>
    )
}

export default Logout_content