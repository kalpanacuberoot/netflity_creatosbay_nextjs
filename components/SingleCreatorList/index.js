import { useEffect, useState } from "react";
import Images from "@/images";
import Image from "next/image";
import Cookies from "js-cookie";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
import Colors from "@/styles/Colors";
import { useRouter } from "next/router";
import { useMyContext } from "../AppContext";
import { url } from "@/generalfunation";
import Buttons from "../Button";


const SingleCreatorListpage = () => {

    const router = useRouter();

    const { data } = useMyContext();

    const [statename, setStatename] = useState('');
    const [bodyTypeData, setBodyTypeData] = useState(null);
    const [hairTypeData, setHairTypeData] = useState(null);
    const [skinTypeData, setSkinTypeData] = useState(null);
    const [eyeTypeData, setEyeTypeData] = useState(null);

    console.log("single page single data", data);

    useEffect(() => {
        if (data === null || undefined) {
            router.push('/all_list')
        }

        getAllStates();
        getAllBodyTypes();
        getAllHairTypes();
        getAllSkinTypes();
        getAllEyeTypes();
    }, [])

    const getAllStates = async () => {
        const userData = Cookies.get('creator_user_data');
        if (userData) {
            const cookieValue = JSON.parse(userData);

            try {
                const requestOptions = {

                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${cookieValue?.token}` // Include the token if provided
                    },
                }


                const response = await fetch(`${url}/states/${data?.state_id}`, requestOptions);
                console.log('states------', response)

                if (response.status === 401) {
                    toast.error("Session Expired: Please login again to continue.", {
                        position: 'top-center',
                        autoClose: 5000,
                    });
                    router.push('/')

                } else if (response.status === 429) {
                    toast.error("Too many requests: Please wait for a few minutes to try and login again.", {
                        position: 'top-center',
                        autoClose: 5000,
                    });
                    router.push('/')

                    // showToastMessage("Too many requests: Please wait for a few minutes to try and login again.");
                } else if (response.status === 500) {
                    toast.error("Server Error: Please wait while we fix this problem for you.", {
                        position: 'top-center',
                        autoClose: 5000,
                    });
                    router.push('/')

                } else if (!response.ok) {
                    throw new Error(`Request failed with status: ${response.status}`);
                }

                // return await response.json();
                const responseData = await response.json();
                console.log('states singlr getting response:', responseData?.data?.name);
                setStatename(responseData?.data?.name)
            } catch (error) {
                console.error('Error:', error);
                throw error;
            }
        } else {
            // Handle the case where the cookie is not found or doesn't contain valid JSON
        }

    };

    const getAllBodyTypes = async () => {

        const cookieValue = JSON.parse(Cookies.get('creator_user_data'))
        console.log('categories cookieValue------------1', cookieValue?.token);

        try {
            const requestOptions = {

                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${cookieValue?.token}` // Include the token if provided
                },
            }


            const response = await fetch(`${url}/bodytypes`, requestOptions);
            console.log('getAllBodyTypes------', response)

            if (response.status === 401) {
                toast.error("Session Expired: Please login again to continue.", {
                    position: 'top-center',
                    autoClose: 5000,
                });

            } else if (response.status === 429) {
                toast.error("Too many requests: Please wait for a few minutes to try and login again.", {
                    position: 'top-center',
                    autoClose: 5000,
                });
                router.push('/')

                // showToastMessage("Too many requests: Please wait for a few minutes to try and login again.");
            } else if (response.status === 500) {
                toast.error("Server Error: Please wait while we fix this problem for you.", {
                    position: 'top-center',
                    autoClose: 5000,
                });

            } else if (!response.ok) {
                throw new Error(`Request failed with status: ${response.status}`);
            }

            // return await response.json();
            const responseData = await response.json();
            console.log('bodytypes singlr response:', responseData?.data?.data);
            setBodyTypeData(responseData?.data?.data)
        } catch (error) {
            console.error('Error:', error);
            throw error;
        }

    };

    const filteredBodyType = bodyTypeData?.filter((bodyType) => bodyType?.id === data?.body_id);

    console.log("filteredBodyType", filteredBodyType);

    const getAllHairTypes = async () => {

        const cookieValue = JSON.parse(Cookies.get('creator_user_data'))
        console.log('categories cookieValue------------1', cookieValue?.token);

        try {
            const requestOptions = {

                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${cookieValue?.token}` // Include the token if provided
                },
            }


            const response = await fetch(`${url}/hairtypes`, requestOptions);
            console.log('skintypes------', response)

            if (response.status === 401) {
                toast.error("Session Expired: Please login again to continue.", {
                    position: 'top-center',
                    autoClose: 5000,
                });

            } else if (response.status === 429) {
                toast.error("Too many requests: Please wait for a few minutes to try and login again.", {
                    position: 'top-center',
                    autoClose: 5000,
                });
                router.push('/')

                // showToastMessage("Too many requests: Please wait for a few minutes to try and login again.");
            } else if (response.status === 500) {
                toast.error("Server Error: Please wait while we fix this problem for you.", {
                    position: 'top-center',
                    autoClose: 5000,
                });

            } else if (!response.ok) {
                throw new Error(`Request failed with status: ${response.status}`);
            }

            // return await response.json();
            const responseData = await response.json();
            console.log('skintypes response:', responseData?.data?.data);
            setHairTypeData(responseData?.data?.data);
        } catch (error) {
            console.error('Error:', error);
            throw error;
        }

    };

    const filteredHairType = hairTypeData?.filter((hairType) => hairType?.id === data?.hair_id);

    console.log("filteredHairType", filteredHairType);


    const getAllSkinTypes = async () => {

        const cookieValue = JSON.parse(Cookies.get('creator_user_data'))
        console.log('categories cookieValue------------1', cookieValue?.token);

        try {
            const requestOptions = {

                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${cookieValue?.token}` // Include the token if provided
                },
            }


            const response = await fetch(`${url}/skintypes`, requestOptions);
            console.log('skintypes------', response)

            if (response.status === 401) {
                toast.error("Session Expired: Please login again to continue.", {
                    position: 'top-center',
                    autoClose: 5000,
                });

            } else if (response.status === 429) {
                toast.error("Too many requests: Please wait for a few minutes to try and login again.", {
                    position: 'top-center',
                    autoClose: 5000,
                });
                router.push('/')

                // showToastMessage("Too many requests: Please wait for a few minutes to try and login again.");
            } else if (response.status === 500) {
                toast.error("Server Error: Please wait while we fix this problem for you.", {
                    position: 'top-center',
                    autoClose: 5000,
                });

            } else if (!response.ok) {
                throw new Error(`Request failed with status: ${response.status}`);
            }

            // return await response.json();
            const responseData = await response.json();
            console.log('skintypes skintypes response:', responseData?.data?.data);
            setSkinTypeData(responseData?.data?.data);
        } catch (error) {
            console.error('Error:', error);
            throw error;
        }

    };
    const filteredSkinType = skinTypeData?.filter((skinType) => skinType?.id === data?.skin_id);

    console.log("filteredSkinType", filteredSkinType);

    const getAllEyeTypes = async () => {

        const cookieValue = JSON.parse(Cookies.get('creator_user_data'))
        console.log('categories cookieValue------------1', cookieValue?.token);

        try {
            const requestOptions = {

                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${cookieValue?.token}` // Include the token if provided
                },
            }


            const response = await fetch(`${url}/eyetypes`, requestOptions);
            console.log('skintypes------', response)

            if (response.status === 401) {
                toast.error("Session Expired: Please login again to continue.", {
                    position: 'top-center',
                    autoClose: 5000,
                });

            } else if (response.status === 429) {
                toast.error("Too many requests: Please wait for a few minutes to try and login again.", {
                    position: 'top-center',
                    autoClose: 5000,
                });
                router.push('/')

                // showToastMessage("Too many requests: Please wait for a few minutes to try and login again.");
            } else if (response.status === 500) {
                toast.error("Server Error: Please wait while we fix this problem for you.", {
                    position: 'top-center',
                    autoClose: 5000,
                });

            } else if (!response.ok) {
                throw new Error(`Request failed with status: ${response.status}`);
            }

            // return await response.json();
            const responseData = await response.json();
            console.log('skintypes response:', responseData?.data?.data);
            setEyeTypeData(responseData?.data?.data);
        } catch (error) {
            console.error('Error:', error);
            throw error;
        }

    };
    const filteredEyeType = eyeTypeData?.filter((eyeType) => eyeType?.id === data?.eye_id);

    console.log("filteredEyeType", filteredEyeType);

    return (
        <>
            <div className="min-h-screen bg-gray-100 p-0 sm:p-12 w-full">
                <div className="mx-auto w-2/3 px-6 py-12 bg-white border-0 shadow-lg sm:rounded-3xl   xl:p-10 lg:p-10">
                    <div
                        style={{ background: Colors.invoice_gradient_clr }}
                        className="auto-cols-max p-3 rounded-md flex flex-row mb-5"
                    >
                        <div className="flex flex-row justify-between items-center  w-full">
                            <div className="text-2xl font-bold ps-5" style={{ color: Colors.white_clr }}>
                                Creators Form
                            </div>
                        </div>

                    </div>
                    <div className="mt-10">
                        <>
                            <div className="flex justify-between">
                                <div className="edit_button_clr px-5 py-5 cursor-pointer flex items-center rounded-md"
                                    style={{ height: 'fit-content',
                                    //  borderRadius: '50%'
                                     }}
                                     onClick={() => router.push('/all_list')}
                                >
                                    <svg 
                                    className="me-5"
                                    xmlns="http://www.w3.org/2000/svg" version="1.0" width="10.000000pt" height="10.000000pt" viewBox="0 0 512.000000 512.000000" preserveAspectRatio="xMidYMid meet">

                                        <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)" fill="#fff" stroke="none">
                                            <path d="M2058 4727 c-31 -13 -74 -38 -95 -55 -77 -62 -1882 -1878 -1907 -1920 -38 -61 -60 -154 -52 -225 14 -132 -40 -73 1014 -1129 795 -796 975 -971 1020 -994 78 -39 202 -46 285 -14 89 34 153 90 191 169 28 60 31 75 31 161 0 165 16 144 -562 729 -274 278 -534 536 -579 575 -45 40 -118 91 -167 116 l-86 45 1837 5 1837 5 57 23 c81 33 160 108 200 190 30 60 33 75 33 152 -1 70 -5 95 -27 142 -35 76 -99 143 -173 181 l-60 32 -1855 5 -1855 5 95 50 95 49 576 576 c665 664 634 624 634 795 0 89 -3 106 -28 156 -15 31 -50 78 -77 103 -72 68 -126 89 -235 93 -77 3 -98 0 -147 -20z" />
                                        </g>
                                    </svg>
                                    <div>Back</div>
                                    
                                </div>
                                <div className=" w-full"
                                    style={{ textAlign: '-webkit-center' }}
                                >
                                    <div className=" w-full my-4 font-bold text-lg
                                 text-center "> Profile Image </div>
                                    <div
                                        className="w-96 h-96 cursor-pointer shadow-md border-dotted align-middle border-4 rounded-full bg-white py-4 px-6 flex flex-col items-center justify-center"

                                    >
                                        {/* <label
                                            htmlFor="fileInput"
                                            style={{ borderColor: Colors.logo_clr }}
                                            className="w-auto py-5"
                                        > */}
                                        {/* <div className="image-container"
                                                style={{
                                                    width: '100%',
                                                    height: '100%',
                                                    background: `url(${data?.profile_pic}) no-repeat center center`,
                                                    backgroundSize: 'cover',
                                                    borderRadius: '50%'
                                                }}
                                            >
                                                <input
                                                    id="fileInput"
                                                    type="file"
                                                    accept="image/*"
                                                    className="hidden absolute w-screen  "
                                                />

                                                <Image
                                                    // src={Images.plus_icon}
                                                    src={data?.profile_pic}
                                                    width={1000}
                                                    height={2000}
                                                    alt=""
                                                    className="mx-auto cursor-default m-5 mb-0 w-full rounded-full"
                                                />

                                            </div> */}
                                        <div class="image-container" style={{ width: '100%', height: '100%', borderRadius: '50%' }}>
                                            <img
                                                // src="https://creatorsbay-media-bucket.s3.ap-south-1.amazonaws.com/uploads/file_654234a9c99155.69770794.jpg" alt=""
                                                src={data?.profile_pic}
                                                style={{ width: '100%', height: '100%', borderRadius: '50%' }} />
                                        </div>

                                        {/* </label> */}
                                    </div>

                                </div>
                                <div className="w-full">
                                    <div className=" w-full mb-5">
                                        <label htmlFor="name" className=" duration-300 top-3 -z-1 origin-0  font-bold">Full Name</label>
                                        <input
                                            type="text"
                                            name="name"
                                            placeholder=" "
                                            value={data?.user?.name}
                                            required
                                            className=" pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2  appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
                                        />
                                        <span className="text-sm text-red-600 hidden" id="error">Name is required</span>
                                    </div>

                                    <div className=" w-full mb-5">
                                        <label htmlFor="email" className=" duration-300 top-3 -z-1 origin-0   font-bold">Email Address</label>
                                        <input
                                            type="email"
                                            name="email"
                                            placeholder=" "
                                            value={data?.user?.email}
                                            className=" pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2  appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
                                        />
                                        <span className="text-sm text-red-600 hidden" id="error">Email address is required</span>
                                    </div>

                                    <div className="flex ">

                                        <div className=" w-full mb-5 me-5 flex">
                                            <div className="w-full">
                                                <label htmlFor="name" className=" duration-300 top-3 -z-1 origin-0  font-bold">
                                                    Height (cm)

                                                </label>
                                                <input
                                                    type="number"
                                                    name="name"
                                                    placeholder=" "
                                                    required
                                                    value={data?.height}
                                                    className=" pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
                                                />

                                                <span className="text-sm text-red-600 hidden" id="error">Name is required</span>
                                            </div>

                                        </div>
                                        <div className=" w-full mb-5">
                                            <label htmlFor="name" className=" font-bold duration-300 top-3 -z-1 origin-0">Age</label>
                                            <input
                                                type="text"
                                                name="name"
                                                placeholder=" "
                                                required
                                                value={data?.age}
                                                className=" pb-2 block w-full px-0 mt-0 bg-transparent border-0   border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
                                            />

                                            <span className="text-sm text-red-600 hidden" id="error">Name is required</span>
                                        </div>
                                        <div className=" w-full mb-5 ms-5">
                                            <label htmlFor="name" className=" duration-300 top-3 -z-1 origin-0  font-bold">
                                                Weight
                                            </label>
                                            <input
                                                type="number"
                                                name="name"
                                                placeholder=" "
                                                required
                                                value={data?.weight}
                                                className=" pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
                                            />
                                            <span className="text-sm text-red-600 hidden" id="error">Name is required</span>
                                        </div>

                                    </div>
                                    <div className="flex">
                                        <div className=" w-full mb-5">
                                            <label htmlFor="email" className=" duration-300 top-3 -z-1 origin-0 font-bold">State</label>
                                            <input
                                                type="text"
                                                name="state"
                                                placeholder=" "
                                                value={statename}
                                                className=" pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2  appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
                                            />
                                            <span className="text-sm text-red-600 hidden" id="error">Email address is required</span>
                                        </div>
                                        <div className=" w-full mb-5 ms-5">
                                            <label htmlFor="email" className=" duration-300 top-3 -z-1 origin-0 font-bold">Gender</label>
                                            <input
                                                type="text"
                                                name="state"
                                                placeholder=" "
                                                value={data?.gender}
                                                className=" pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2  appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
                                            />
                                            <span className="text-sm text-red-600 hidden" id="error">Email address is required</span>
                                        </div>
                                    </div>
                                    <div className="flex">
                                        <div className=" w-full mb-5">
                                            <label htmlFor="email" className=" duration-300 top-3 -z-1 origin-0 font-bold">Youtube Subscribers</label>
                                            <input
                                                type="text"
                                                name="state"
                                                placeholder=" "
                                                value={data?.youtube_subscribers}
                                                className=" pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2  appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
                                            />
                                            <span className="text-sm text-red-600 hidden" id="error">Email address is required</span>
                                        </div>
                                        <div className=" w-full mb-5 ms-5">
                                            <label htmlFor="email" className=" duration-300 top-3 -z-1 origin-0 font-bold">Instagram Followers</label>
                                            <input
                                                type="text"
                                                name="state"
                                                placeholder=" "
                                                value={data?.instagram_followers}
                                                className=" pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2  appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
                                            />
                                            <span className="text-sm text-red-600 hidden" id="error">Email address is required</span>
                                        </div>
                                    </div>
                                    <div className="flex">
                                        <div className=" w-full mb-5">
                                            <label htmlFor="email" className=" duration-300 top-3 -z-1 origin-0 font-bold">Kids</label>
                                            <input
                                                type="text"
                                                name="state"
                                                placeholder=" "
                                                value={data?.kids === 0 ? "Yes" : "No"}
                                                className=" pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2  appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
                                            />
                                            <span className="text-sm text-red-600 hidden" id="error">Email address is required</span>
                                        </div>
                                        <div className=" w-full mb-5 ms-5">
                                            <label htmlFor="email" className=" duration-300 top-3 -z-1 origin-0 font-bold">Pets</label>
                                            <input
                                                type="text"
                                                name="state"
                                                placeholder=" "
                                                value={data?.pets === 0 ? "Yes" : "No"}
                                                className=" pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2  appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
                                            />
                                            <span className="text-sm text-red-600 hidden" id="error">Email address is required</span>
                                        </div>
                                    </div>
                                    <div className="flex">
                                        <div className=" w-full mb-5">
                                            <label htmlFor="email" className=" duration-300 top-3 -z-1 origin-0 font-bold">Body Type</label>
                                            {filteredBodyType?.map((item, index) =>
                                                <div key={index}>
                                                    {item?.name}
                                                </div>
                                            )}

                                            <span className="text-sm text-red-600 hidden" id="error">Email address is required</span>
                                        </div>
                                        <div className=" w-full mb-5 ms-5">
                                            <label htmlFor="email" className=" duration-300 top-3 -z-1 origin-0 font-bold">Hair Type</label>
                                            {filteredHairType?.map((item, index) =>
                                                <div key={index}>
                                                    {item?.name}
                                                </div>
                                            )}
                                            <span className="text-sm text-red-600 hidden" id="error">Email address is required</span>
                                        </div>
                                    </div>
                                    <div className="flex">
                                        <div className=" w-full mb-5">
                                            <label htmlFor="email" className=" duration-300 top-3 -z-1 origin-0 font-bold">Skin Type</label>
                                            {filteredSkinType?.map((item, index) =>
                                                <div key={index}>
                                                    {item?.name}
                                                </div>
                                            )}

                                            <span className="text-sm text-red-600 hidden" id="error">Email address is required</span>
                                        </div>
                                        <div className=" w-full mb-5 ms-5">
                                            <label htmlFor="email" className=" duration-300 top-3 -z-1 origin-0 font-bold">Eye Type</label>
                                            {filteredEyeType?.map((item, index) =>
                                                <div key={index}>
                                                    {item?.name}
                                                </div>
                                            )}
                                            <span className="text-sm text-red-600 hidden" id="error">Email address is required</span>
                                        </div>
                                    </div>
                                    <div className="flex">
                                        <div className=" w-full mb-5">
                                            <label htmlFor="email" className=" duration-300 top-3 -z-1 origin-0 font-bold">Categories</label>
                                            <ul>
                                                {data?.categories?.map((item, index) =>
                                                    <li key={index}>
                                                        {item?.name}
                                                    </li>
                                                )}
                                            </ul>

                                            <span className="text-sm text-red-600 hidden" id="error">Email address is required</span>
                                        </div>
                                        <div className=" w-full mb-5 ms-5">
                                            <label htmlFor="email" className=" duration-300 top-3 -z-1 origin-0 font-bold">Platforms</label>
                                            <ul>
                                                {data?.platforms?.map((item, index) =>
                                                    <li key={index}>
                                                        {item?.name}
                                                    </li>
                                                )}
                                            </ul>
                                            <span className="text-sm text-red-600 hidden" id="error">Email address is required</span>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div className="relative w-full mb-5 me-5">
                                <label htmlFor="message" className="text-base block mb-2  font-bold">Bio</label>
                                <textarea
                                    id="message" rows="4"
                                    value={data?.bio}
                                    className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border  focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your answer here..."></textarea>
                            </div>
                        </>
                        <div className="shadow-lg border rounded-md p-10">
                            <div className=" w-full mb-4 font-bold  text-lg"> Portfolio Links </div>
                            <div className="flex items-center justify-between mb-5">
                                <div className="text-sm ">
                                    Paste link of your post or reel from instagram or post links from your youtube links or shorts
                                </div>

                            </div>
                            {data?.portfolios.slice(0, 9).map((item, index) =>
                                <div className=" flex w-full mb-5 items-center" key={index}>
                                    <label htmlFor="password" className=" duration-300 origin-0 text-gray-500 w-28">{`Link ${index + 1}`}</label>
                                    <input
                                        type="url"
                                        name="link"
                                        placeholder=""
                                        value={item?.link}
                                        className=" w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    />
                                    <span className="text-sm text-red-600 hidden" id="error">Portfolio Link 1 is required</span>
                                </div>
                            )}

                        </div>
                    </div>
                </div>
            </div >
            <ToastContainer />
        </>
    )
}

export default SingleCreatorListpage