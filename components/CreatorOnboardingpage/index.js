import { useEffect, useState } from "react";
import MultiSelectDropdown from "@/components/MultiSelectDropdown";
import Images from "@/images";
import Image from "next/image";
import { getApiData, url } from "@/generalfunation";
import Cookies from "js-cookie";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';

const CreatorOnboardingpage = () => {

    const [statesData, setStatesData] = useState(null);
    const [skinTypeData, setSkinTypeData] = useState(null);
    const [bodyTypeData, setBodyTypeData] = useState(null);
    const [hairTypeData, setHairTypeData] = useState(null);
    const [eyeTypeData, setEyeTypeData] = useState(null);
    const [platform, setPlatform] = useState(null);

    const [selectedOptions, setSelectedOptions] = useState([]);
    const options = ['Option 1', 'Option 2', 'Option 3', 'Option 4'];

    const [selectedItems, setSelectedItems] = useState([]);
    const [selectedlanguageItems, setSelectedlanguageItems] = useState([]);
    const items = ['Youtube', 'Instagram'];
    const languages = ['Hindi', 'English'];

    const toggleCheckbox = (item) => {
        if (selectedItems.includes(item)) {
            setSelectedItems(selectedItems.filter((selected) => selected !== item));
        } else {
            setSelectedItems([...selectedItems, item]);
        }
    };

    const toggleLanguageCheckbox = (item) => {
        if (selectedlanguageItems.includes(item)) {
            setSelectedlanguageItems(selectedlanguageItems.filter((selected) => selected !== item));
        } else {
            setSelectedlanguageItems([...selectedlanguageItems, item]);
        }
    };

    const getAllStates = async () => {

        const cookieValue = JSON.parse(Cookies.get('user_data'))
        console.log('categories cookieValue------------1', cookieValue?.token);

        try {
            const requestOptions = {

                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${cookieValue?.token}` // Include the token if provided
                },
            }


            const response = await fetch(`${url}/states?per_page=40&sort=name&order=ASC`, requestOptions);
            console.log('states------', response)

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
            console.log('states response:', responseData?.data?.data);
            setStatesData(responseData?.data?.data);
        } catch (error) {
            console.error('Error:', error);
            throw error;
        }

    };

    const getAllSkinTypes = async () => {

        const cookieValue = JSON.parse(Cookies.get('user_data'))
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
            setSkinTypeData(responseData?.data?.data);
        } catch (error) {
            console.error('Error:', error);
            throw error;
        }

    };

    const getAllBodyTypes = async () => {

        const cookieValue = JSON.parse(Cookies.get('user_data'))
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
            setBodyTypeData(responseData?.data?.data);
        } catch (error) {
            console.error('Error:', error);
            throw error;
        }

    };

    const getAllHairTypes = async () => {

        const cookieValue = JSON.parse(Cookies.get('user_data'))
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

    const getAllEyeTypes = async () => {

        const cookieValue = JSON.parse(Cookies.get('user_data'))
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

    const getAllPlatformTypes = async () => {

        const cookieValue = JSON.parse(Cookies.get('user_data'))
        console.log('categories cookieValue------------1', cookieValue?.token);

        try {
            const requestOptions = {

                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${cookieValue?.token}` // Include the token if provided
                },
            }


            const response = await fetch(`${url}/platforms`, requestOptions);
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
            console.log('setPlatform response:', responseData?.data?.data);
            setPlatform(responseData?.data?.data);
        } catch (error) {
            console.error('Error:', error);
            throw error;
        }

    };

    useEffect(() => {
        getAllStates();
        getAllSkinTypes();
        getAllBodyTypes();
        getAllHairTypes();
        getAllEyeTypes();
        getAllPlatformTypes();
    }, [])

console.log("platform",platform);

    return (
        <>
            <div className="min-h-screen bg-gray-100 p-0 sm:p-12">
                <div className="mx-auto max-w-xl px-6 py-12 bg-white border-0 shadow-lg sm:rounded-3xl   xl:p-10 lg:p-10">

                    <Image
                        src={Images.company_logo}
                        alt="logo"
                        width=""
                        height=""
                        className="mx-auto mb-10"
                    />
                    <h1 className="text-2xl font-bold mb-8">Creator Onboarding Form</h1>
                    <form id="form" noValidate>
                        <div className="relative z-0 w-full mb-5">
                            <input
                                type="text"
                                name="name"
                                placeholder=" "
                                required
                                className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
                            />
                            <label htmlFor="name" className="absolute duration-300 top-3 -z-1 origin-0 text-gray-500">Enter name</label>
                            <span className="text-sm text-red-600 hidden" id="error">Name is required</span>
                        </div>

                        <div className="relative z-0 w-full mb-5">
                            <input
                                type="email"
                                name="email"
                                placeholder=" "
                                className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
                            />
                            <label htmlFor="email" className="absolute duration-300 top-3 -z-1 origin-0 text-gray-500">Enter email address</label>
                            <span className="text-sm text-red-600 hidden" id="error">Email address is required</span>
                        </div>
                        <div className="flex">

                            <div className="relative z-0 w-full mb-5 me-5">
                                <select
                                    name="select"
                                    value=""
                                    // onClick="this.setAttribute('value', this.value);"
                                    className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none z-1 focus:outline-none focus:ring-0 focus:border-black border-gray-200"
                                >
                                    <option value="" selected disabled hidden></option>
                                    {/* <option value="1">Option 1</option>
                                    <option value="2">Option 2</option>
                                    <option value="3">Option 3</option>
                                    <option value="4">Option 4</option>
                                    <option value="5">Option 5</option> */}
                                    {statesData && statesData.map((state_name, index) => (
                                        <option key={index} className="p-10">{state_name.name}</option>
                                    ))}
                                </select>
                                <label htmlFor="select" className="absolute duration-300 top-3 -z-1 origin-0 text-gray-500">Select Your State</label>
                                <span className="text-sm text-red-600 hidden" id="error">Option has to be selected</span>
                            </div>
                            <div className="relative z-0 w-full mb-5">
                                <input
                                    type="password"
                                    name="password"
                                    placeholder=" "
                                    className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
                                />
                                <label htmlFor="password" className="absolute duration-300 top-3 -z-1 origin-0 text-gray-500">City</label>
                                <span className="text-sm text-red-600 hidden" id="error">Password is required</span>
                            </div>
                        </div>

                        <div className="flex">
                            <fieldset className="relative z-0 w-full p-px mb-5 me-5">
                                <legend className="absolute text-gray-500 transform scale-75 -top-3 origin-0">Gender</legend>
                                <div className="block pt-3 pb-2 space-x-4">
                                    <label>
                                        <input
                                            type="radio"
                                            name="radio"
                                            value="1"
                                            className="mr-2 text-black border-2 border-gray-300 focus:border-gray-300 focus:ring-black"
                                        />
                                        Male
                                    </label>
                                    <label>
                                        <input
                                            type="radio"
                                            name="radio"
                                            value="2"
                                            className="mr-2 text-black border-2 border-gray-300 focus:border-gray-300 focus:ring-black"
                                        />
                                        Female
                                    </label>
                                    <label>
                                        <input
                                            type="radio"
                                            name="radio"
                                            value="2"
                                            className="mr-2 text-black border-2 border-gray-300 focus:border-gray-300 focus:ring-black"
                                        />
                                        Other
                                    </label>
                                </div>
                                <span className="text-sm text-red-600 hidden" id="error">Option has to be selected</span>
                            </fieldset>

                            <div className="relative z-0 w-full mb-5">
                                <input
                                    type="text"
                                    name="name"
                                    placeholder=" "
                                    required
                                    className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
                                />
                                <label htmlFor="name" className="absolute duration-300 top-3 -z-1 origin-0 text-gray-500">Age</label>
                                <span className="text-sm text-red-600 hidden" id="error">Name is required</span>
                            </div>
                        </div>
                        <legend className=" text-gray-500 transform scale-75 -top-3 origin-0">Height</legend>
                        <div className="flex ">

                            <div className="relative z-0 w-full mb-5 me-5">
                                <input
                                    type="text"
                                    name="name"
                                    placeholder=" "
                                    required
                                    className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
                                />
                                <label htmlFor="name" className="absolute duration-300 top-3 -z-1 origin-0 text-gray-500">
                                    Height (feet)''

                                </label>
                                <span className="text-sm text-red-600 hidden" id="error">Name is required</span>

                            </div>
                            '

                            <div className="relative z-0 w-full mb-5">
                                <input
                                    type="text"
                                    name="name"
                                    placeholder=" "
                                    required
                                    className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
                                />
                                <label htmlFor="name" className="absolute duration-300 top-3 -z-1 origin-0 text-gray-500">
                                    Height (inches)


                                </label>
                                <span className="text-sm text-red-600 hidden" id="error">Name is required</span>

                            </div>

                            <div className="w-full vertical-middle px-5">or x cms</div>
                        </div>

                        <div className="flex">
                            <div className="relative z-0 w-full mb-5 me-5">
                                <input
                                    type="text"
                                    name="name"
                                    placeholder=" "
                                    required
                                    className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
                                />
                                <label htmlFor="name" className="absolute duration-300 top-3 -z-1 origin-0 text-gray-500">
                                    Weight

                                </label>
                                <span className="text-sm text-red-600 hidden" id="error">Name is required</span>
                            </div>

                        </div>

                        <div className="flex">

                            <div className="relative z-0 w-full mb-5 me-5">
                                <select
                                    name="select"
                                    value=""
                                    // onClick="this.setAttribute('value', this.value);"
                                    className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none z-1 focus:outline-none focus:ring-0 focus:border-black border-gray-200"
                                >
                                    <option value="" selected disabled hidden></option>
                                    {/* <option value="1">Option 1</option>
                                    <option value="2">Option 2</option>
                                    <option value="3">Option 3</option>
                                    <option value="4">Option 4</option>
                                    <option value="5">Option 5</option> */}
                                    {skinTypeData && skinTypeData.map((skin_name, index) => (
                                        <option key={index} className="p-10">{skin_name?.name}</option>
                                    ))}
                                </select>
                                <label htmlFor="select" className="absolute duration-300 top-3 -z-1 origin-0 text-gray-500">Select Your Skin Type</label>
                                <span className="text-sm text-red-600 hidden" id="error">Option has to be selected</span>
                            </div>

                            <div className="relative z-0 w-full mb-5 me-5">
                                <select
                                    name="select"
                                    value=""
                                    // onClick="this.setAttribute('value', this.value);"
                                    className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none z-1 focus:outline-none focus:ring-0 focus:border-black border-gray-200"
                                >
                                    <option value="" selected disabled hidden></option>
                                    {/* <option value="1">Option 1</option>
                                    <option value="2">Option 2</option>
                                    <option value="3">Option 3</option>
                                    <option value="4">Option 4</option>
                                    <option value="5">Option 5</option> */}
                                    {bodyTypeData && bodyTypeData.map((body_name, index) => (
                                        <option key={index} className="p-10">{body_name?.name}</option>
                                    ))}
                                </select>
                                <label htmlFor="select" className="absolute duration-300 top-3 -z-1 origin-0 text-gray-500">Select Your Body Type</label>
                                <span className="text-sm text-red-600 hidden" id="error">Option has to be selected</span>
                            </div>
                        </div>

                        <div className="flex">

                            <div className="relative z-0 w-full mb-5 me-5">
                                <select
                                    name="select"
                                    value=""
                                    // onClick="this.setAttribute('value', this.value);"
                                    className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none z-1 focus:outline-none focus:ring-0 focus:border-black border-gray-200"
                                >
                                    <option value="" selected disabled hidden></option>
                                    {/* <option value="1">Option 1</option>
                                    <option value="2">Option 2</option>
                                    <option value="3">Option 3</option>
                                    <option value="4">Option 4</option>
                                    <option value="5">Option 5</option> */}
                                    {hairTypeData && hairTypeData.map((hair_name, index) => (
                                        <option key={index} className="p-10">{hair_name?.name}</option>
                                    ))}
                                </select>
                                <label htmlFor="select" className="absolute duration-300 top-3 -z-1 origin-0 text-gray-500">Select Your Hair Type</label>
                                <span className="text-sm text-red-600 hidden" id="error">Option has to be selected</span>
                            </div>

                            <div className="relative z-0 w-full mb-5 me-5">
                                <select
                                    name="select"
                                    value=""
                                    // onClick="this.setAttribute('value', this.value);"
                                    className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none z-1 focus:outline-none focus:ring-0 focus:border-black border-gray-200"
                                >
                                    <option value="" defaultValue disabled hidden></option>
                                    {/* <option value="1">Option 1</option>
                                    <option value="2">Option 2</option>
                                    <option value="3">Option 3</option>
                                    <option value="4">Option 4</option>
                                    <option value="5">Option 5</option> */}
                                    {eyeTypeData && eyeTypeData.map((eye_name, index) => (
                                        <option key={index} className="p-10">{eye_name?.name}</option>
                                    ))}
                                </select>
                                <label htmlFor="select" className="absolute duration-300 top-3 -z-1 origin-0 text-gray-500">Select Your Eye Type</label>
                                <span className="text-sm text-red-600 hidden" id="error">Option has to be selected</span>
                            </div>
                        </div>


                        <div className="relative z-0 w-full mb-5 me-5">
                            <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Bio</label>
                            <textarea id="message" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your answer here..."></textarea>
                        </div>


                        <div className="flex">
                            <fieldset className="relative z-0 w-full p-px mb-5 me-5">
                                <legend className="absolute text-gray-500 transform scale-75 -top-3 origin-0">Pets</legend>
                                <div className="block pt-3 pb-2 space-x-4">
                                    <label>
                                        <input
                                            type="radio"
                                            name="radio"
                                            value="1"
                                            className="mr-2 text-black border-2 border-gray-300 focus:border-gray-300 focus:ring-black"
                                        />
                                        Yes
                                    </label>
                                    <label>
                                        <input
                                            type="radio"
                                            name="radio"
                                            value="2"
                                            className="mr-2 text-black border-2 border-gray-300 focus:border-gray-300 focus:ring-black"
                                        />
                                        No
                                    </label>

                                </div>
                                <span className="text-sm text-red-600 hidden" id="error">Option has to be selected</span>
                            </fieldset>

                            <fieldset className="relative z-0 w-full p-px mb-5 me-5">
                                <legend className="absolute text-gray-500 transform scale-75 -top-3 origin-0">Kids</legend>
                                <div className="block pt-3 pb-2 space-x-4">
                                    <label>
                                        <input
                                            type="radio"
                                            name="radio"
                                            value="1"
                                            className="mr-2 text-black border-2 border-gray-300 focus:border-gray-300 focus:ring-black"
                                        />
                                        Yes
                                    </label>
                                    <label>
                                        <input
                                            type="radio"
                                            name="radio"
                                            value="2"
                                            className="mr-2 text-black border-2 border-gray-300 focus:border-gray-300 focus:ring-black"
                                        />
                                        No
                                    </label>

                                </div>
                                <span className="text-sm text-red-600 hidden" id="error">Option has to be selected</span>
                            </fieldset>
                        </div>


                        <div className="flex my-5">
                            <div className=" w-full">
                                {/* <h1 className="text-2xl font-bold mb-4">Multi-Select Dropdown</h1> */}
                                <MultiSelectDropdown
                                    options={options}
                                    selectedOptions={selectedOptions}
                                    setSelectedOptions={setSelectedOptions}
                                />
                                {/* <div className="mt-4 text-xs">
                  Selected Options: {selectedOptions.join(', ')}
                </div> */}
                            </div>
                        </div>

                        <div className="flex">

                            <div className=" w-full mb-5 me-5">
                                <legend className=" text-gray-500 text-sm">Languages</legend>
                                <div className="">
                                    {languages.map((item) => (
                                        <label key={item} className="flex items-center">
                                            <input
                                                type="checkbox"
                                                className="h-4 w-4 text-blue-600"
                                                checked={selectedlanguageItems.includes(item)}
                                                onChange={() => toggleLanguageCheckbox(item)}
                                            />
                                            <span className="ml-2">{item}</span>
                                        </label>
                                    ))}
                                </div>
                                {/* <div className="mt-4 text-xs">
                  Selected Items: {selectedItems.join(', ')}
                </div> */}
                            </div>

                            <div className=" z-0 w-full mb-5">
                                <legend className=" text-gray-500 transform scale-75 -top-3 origin-0">Platforms</legend>
                                <div className="">
                                    {/* {items.map((item) => (
                                        <label key={item} className="flex items-center">
                                            <input
                                                type="checkbox"
                                                className="h-4 w-4 text-blue-600"
                                                checked={selectedItems.includes(item)}
                                                onChange={() => toggleCheckbox(item)}
                                            />
                                            <span className="ml-2">{item}</span>
                                        </label>
                                    ))} */}
                                    {platform && platform.map((item, index) => (
                                        <label key={index} className="flex items-center">
                                            <input
                                                type="checkbox"
                                                className="h-4 w-4 text-blue-600"
                                            // checked={selectedItems.includes(item)}
                                            // onChange={() => toggleCheckbox(item)}
                                            />
                                            <Image
                                                src={item?.logo}
                                                alt=""
                                                width={60}
                                                height={30}
                                                className="ms-3 w-6"
                                            />
                                        </label>
                                    ))}
                                </div>
                                {/* <div className="mt-4 text-xs">
                  Selected Items: {selectedItems.join(', ')}
                </div> */}
                            </div>
                        </div>


                        {/* start portfolio links */}
                        <div className="text-center w-full my-4 font-bold"> Portfolio Links </div>
                        <span className="text-sm text-center">Paste link of your post or reel from instagram or post links from your youtube links or shorts</span>

                        <div className=" flex w-full mb-5 items-center">
                            <label htmlFor="password" className=" duration-300 origin-0 text-gray-500 w-28">Link 1</label>
                            <input
                                type="url"
                                name="password"
                                placeholder=" "
                                className=" w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            />
                            <span className="text-sm text-red-600 hidden" id="error">Portfolio Link 1 is required</span>
                        </div>
                        <div className=" flex w-full mb-5 items-center">
                            <label htmlFor="password" className=" duration-300 origin-0 text-gray-500 w-28">Link 2</label>
                            <input
                                type="url"
                                name="password"
                                placeholder=" "
                                className=" w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            />
                            <span className="text-sm text-red-600 hidden" id="error">Portfolio Link 2 is required</span>
                        </div>
                        <div className=" flex w-full mb-5 items-center">
                            <label htmlFor="password" className=" duration-300 origin-0 text-gray-500 w-28">Link 3</label>
                            <input
                                type="url"
                                name="password"
                                placeholder=" "
                                className=" w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            />
                            <span className="text-sm text-red-600 hidden" id="error">Portfolio Link 3 is required</span>
                        </div>
                        <div className=" flex w-full mb-5 items-center">
                            <label htmlFor="password" className=" duration-300 origin-0 text-gray-500 w-28">Link 4</label>
                            <input
                                type="url"
                                name="password"
                                placeholder=" "
                                className=" w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            />
                            <span className="text-sm text-red-600 hidden" id="error">Portfolio Link 4 is required</span>
                        </div>
                        <div className=" flex w-full mb-5 items-center">
                            <label htmlFor="password" className=" duration-300 origin-0 text-gray-500 w-28">Link 5</label>
                            <input
                                type="url"
                                name="password"
                                placeholder=" "
                                className=" w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            />
                            <span className="text-sm text-red-600 hidden" id="error">Portfolio Link 5 is required</span>
                        </div>
                        <div className=" flex w-full mb-5 items-center">
                            <label htmlFor="password" className=" duration-300 origin-0 text-gray-500 w-28">Link 6</label>
                            <input
                                type="url"
                                name="password"
                                placeholder=" "
                                className=" w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            />
                            <span className="text-sm text-red-600 hidden" id="error">Portfolio Link 6 is required</span>
                        </div>
                        {/* end portfolio links */}

                        <button
                            id="button"
                            type="button"
                            className="w-full px-6 py-3 mt-3 text-lg text-white transition-all duration-150 ease-linear rounded-lg shadow outline-none bg-pink-500 hover:bg-pink-600 hover:shadow-lg focus:outline-none"
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default CreatorOnboardingpage