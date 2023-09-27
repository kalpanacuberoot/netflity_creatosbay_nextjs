import Buttons from "@/components/Button"
import { getApiCall, url } from "@/generalfunctions";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
import { useRouter } from "next/router";
import Image from "next/image";

const User_BrandNamepage = () => {

    const router = useRouter();

    const [brand_user, setBrand_user] = useState([]);
    const [user_active_account, setUser_active_account] = useState(null);


    const getUser_Brand = async () => {


        try {
            let cookieValue = Cookies.get('user_data');
            let userId = Cookies?.get('user_data');
            console.log('categories cookieValue------------1', userId?.user?.id);

            console.log('categories cookieValue------------1', cookieValue);
            const checkBrand = JSON.parse(cookieValue)?.user?.type

            if (typeof cookieValue === 'undefined' || checkBrand !== 'brand') {
                console.log('User not authenticated, navigating to login page...');
                router.push('/login'); // Replace '/login' with the actual login page URL
                console.log('categories cookieValue----brand--------userId', cookieValue?.token);

            }
            else {
                let cookieValue = JSON?.parse(Cookies?.get('user_data'));
                console.log('categories cookieValue------------1', cookieValue?.token);

                let userId = JSON?.parse(Cookies?.get('user_data'));
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
                            // toast.success('brandusers Name', {
                            //     position: 'top-center',
                            //     autoClose: 5000,
                            // });
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
            }
        } catch (error) {
            console.error('Error parsing user_data cookie:', error);
        }
    };

    // useEffect(() => {
    //     // Check if brandUsers is empty and redirect accordingly
    //     if (brand_user.length === 0) {
    //       router.push('/brand'); // Redirect to the brand page
    //     } else {
    //       router.push('/brand-selection'); // Redirect to the brand_user page
    //     }
    //   }, [brand_user, router]);


    useEffect(() => {
        getUser_Brand();
        const active_account = Cookies.get('brand_detail');
        if (active_account !== undefined || null) {
            const current_account = JSON?.parse(active_account)
            console.log("active_account in user_brand_page", active_account, current_account);
            // const current_account = JSON?.parse(active_account)
            setUser_active_account(current_account?.brand?.id);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    console.log("brand_user", brand_user);

    const onBrand_details = (item, index) => {

        console.log("onBrand_details", item, index);
        Cookies.set('brand_detail', JSON.stringify(item), { expires: 106500 });
        router.push('/home');

    }

    console.log("active_account in user_brand_page", user_active_account);

    return (
        <>
            <div className="container p-4 lg:p-10 flex bg-zinc-100 items-center px-10">
                <div className=" auto-col-max w-full">
                    <div className="  border-gray-300 border-solid rounded-lg border-1">
                        <div className="p-10 bg-white w-full  h-screen ">
                            <h1 className="my-3">Choose Brand Account</h1>
                            <div className="flex flex-col items-center justify-center ">
                                {brand_user?.length > 0 && brand_user?.map((item, index) => {
                                    const isCurrent = item?.brand?.id === user_active_account;
                                    console.log("isCurrent user brand name", isCurrent);
                                    return (


                                        <div
                                            className={` justify-between border-purple-500 border my-3 flex items-center px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white w-full rounded cursor-pointer  ${isCurrent ? ' border-s-8 border-amber-400 text-black hover:bg-white hover:text-amber-800 ' : ''}`}
                                            onClick={() => onBrand_details(item, index)}
                                            key={index}
                                        >
                                            <div className=" flex items-center">
                                                <Image className="mr-2 rounded-full"
                                                    src={item?.brand?.logo}
                                                    alt="Jese image"
                                                    width={60}
                                                    height={60}
                                                />
                                                {item?.brand?.name}
                                            </div>
                                            <svg className="w-6 h-6 text-green-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                                <path fill="currentColor" d="m18.774 8.245-.892-.893a1.5 1.5 0 0 1-.437-1.052V5.036a2.484 2.484 0 0 0-2.48-2.48H13.7a1.5 1.5 0 0 1-1.052-.438l-.893-.892a2.484 2.484 0 0 0-3.51 0l-.893.892a1.5 1.5 0 0 1-1.052.437H5.036a2.484 2.484 0 0 0-2.48 2.481V6.3a1.5 1.5 0 0 1-.438 1.052l-.892.893a2.484 2.484 0 0 0 0 3.51l.892.893a1.5 1.5 0 0 1 .437 1.052v1.264a2.484 2.484 0 0 0 2.481 2.481H6.3a1.5 1.5 0 0 1 1.052.437l.893.892a2.484 2.484 0 0 0 3.51 0l.893-.892a1.5 1.5 0 0 1 1.052-.437h1.264a2.484 2.484 0 0 0 2.481-2.48V13.7a1.5 1.5 0 0 1 .437-1.052l.892-.893a2.484 2.484 0 0 0 0-3.51Z" />
                                                <path fill="#fff" d="M8 13a1 1 0 0 1-.707-.293l-2-2a1 1 0 1 1 1.414-1.414l1.42 1.42 5.318-3.545a1 1 0 0 1 1.11 1.664l-6 4A1 1 0 0 1 8 13Z" />
                                            </svg>
                                        </div>

                                    )
                                })}


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