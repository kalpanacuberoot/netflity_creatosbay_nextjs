import Buttons from "@/components/Button"
import { getApiCall, url } from "@/generalfunation";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
import { useRouter } from "next/router";

const User_BrandNamepage = () => {

    const router = useRouter();

    const [brand_user, setBrand_user] = useState([]);


    const getUser_Brand = async () => {


        const cookieValue = JSON?.parse(Cookies?.get('user_data'));
        console.log('categories cookieValue------------1', cookieValue?.token);

        const userId = JSON?.parse(Cookies?.get('user_data'));
        console.log('categories cookieValue------------1', userId?.user?.id);

        try {

            const headers = {
                'Authorization': `Bearer ${cookieValue?.token}`,
                'Content-Type': 'application/json',
            };

            const response = await fetch(`${url}/brandusers?user=${userId?.user?.id}`, {
                method: 'Get',
                headers: headers,

            });

            if (response?.ok) {
                const responseData = await response.json();
                console.log('brandusers response:', responseData?.data?.data);


                // Cookies.set('brand_id', JSON.stringify(responseData?.data?.id), { expires: 106500 });

                if (responseData.status) {
                    toast.success('brandusers Name', {
                        position: 'top-center',
                        autoClose: 5000,
                    });
                    setBrand_user(responseData?.data?.data)

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
    };


    useEffect(() => {
        getUser_Brand();
    }, [])

    console.log("brand_user", brand_user);

    const onBrand_details = (item, index) =>{

        console.log("onBrand_details",item, index);
        Cookies.set('brand_detail', JSON.stringify(item), { expires: 106500 });
        router.push('/home');
    }

    return (
        <>
            <div className="container p-4 lg:p-10 flex bg-zinc-100 items-center px-10">
                <div className=" auto-col-max w-full">
                    <div className="  border-gray-300 border-solid rounded-lg border-1">
                        <div className="p-10 bg-white w-full  h-screen ">
                            <h1 className="my-3">Choose Brand Account</h1>
                            <div className="flex flex-col items-center justify-center ">
                                {brand_user.length > 0 && brand_user?.map((item, index) => (
                                    <div className={`w-full rounded edit_button_clr py-3 px-5 text-center my-2`}
                                        key={index}
                                        onClick={() => onBrand_details(item, index)}
                                    >
                                        <button

                                        >
                                            {item.brand.name}
                                        </button>
                                    </div>
                                ))}


                            </div>
                            <Buttons
                                label={"Add New Brand"}
                                buttoncss={"py-3 button_clr px-5 my-5"}
                                onClick={() => router.push('/brand')}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default User_BrandNamepage