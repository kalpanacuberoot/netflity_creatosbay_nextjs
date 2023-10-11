import Images from "@/images";
import Image from "next/image";
import Buttons from "@/components/Button";
import Colors from "@/styles/Colors";
import Cookies from "js-cookie";
import { apiCall, getApiCall, url } from "@/generalfunctions";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
import { useState } from "react";
import { useRouter } from "next/router";

const Marketplace_popupcontent = () => {

    const router = useRouter();

    const [logout, setLogout] = useState(null);
    const [isToggled, setIsToggled] = useState(false);
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [selectedPlatformCategories, setSelectedPlatformCategories] = useState([]);
    const [active, setActive] = useState(null);
    const [showActive, setShowActive] = useState(false);

    const onLogout = async () => {
        const cookieValue = JSON.parse(Cookies.get('user_data'));
        console.log('categories cookieValue------------1', cookieValue?.token);
        try {
            const response = await fetch(`${url}/logout`, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
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
                const cookies = Object.keys(Cookies.get());
                cookies.forEach(cookie => {
                    Cookies.remove(cookie);
                });
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

    const toggleSwitch = () => {
        setIsToggled(!isToggled);
    };

    const categoriesData = [
        {
            id: 1,
            name: 'beauty',
        },
        {
            id: 2,
            name: 'Food and Drinks',
        },
    ]

    const platformData = [
        {
            id: 1,
            name: 'youtube',
        },
        {
            id: 2,
            name: 'instagram',
        },
    ]

    const toggleCategory = (category) => {

        console.log("toggleCategory", category);
        if (selectedCategories.includes(category)) {
            setSelectedCategories(selectedCategories.filter((c) => c !== category));
        } else {
            setSelectedCategories([...selectedCategories, category]);
        }
    };

    const isCategorySelected = (category) => selectedCategories.includes(category);

    const togglePlatformCategory = (category) => {

        console.log("toggleCategory", category);
        if (selectedPlatformCategories.includes(category)) {
            setSelectedPlatformCategories(selectedPlatformCategories.filter((c) => c !== category));
        } else {
            setSelectedPlatformCategories([...selectedPlatformCategories, category]);
        }
    };

    const isCategoryPlatformSelected = (category) => selectedPlatformCategories.includes(category);

    const toggle = (position) => {
        if (active === position) {
            setActive(null);
        } else {
            setActive(position);
            setShowActive(true)
        }
    };


    const toggleSelectAll = () => {
        if (showActive) {
            setSelectedPlatformCategories([]);
        } else {
            const allPlatformIds = platformData.map((item) => item.id);
            setSelectedPlatformCategories(allPlatformIds);
        }
        setShowActive(!showActive);
    };

    const myColor = (position) => {
        if (active || isCategoryPlatformSelected(position)) {
            return "white";
        }
        return "";
    };

    const myBgColor = (position) => {
        if (active) {
            return "#9357FF";
        }
        return isCategoryPlatformSelected(position) ? 'blue' : '';
    };

    const genderData = [
        {
            id: 1,
            name: 'male',
        },
        {
            id: 2,
            name: 'female',
        },
    ]

    return (
        <>

            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">

                <div className="flex items-start justify-between border-b rounded-t dark:border-gray-600 border ">

                    <div className="w-full px-5 py-3 flex items-center">
                        <button
                            type="button"
                            className="px-1 py-1 text-gray-900 bg-transparent rounded-lg text-sm w-8 h-8 inline-flex justify-center items-center "
                            data-modal-hide="defaultModal"
                        >
                            <svg className="w-15 h-15 p-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                            </svg>
                            <span className="sr-only">Close modal</span>

                        </button>
                        <div className="font_size_21  line-height-[26.52px] text-center w-full ">Filters</div>
                        <div className="flex items-center">
                            <div>Advance Filter</div>
                            <label className="switch">
                                <input type="checkbox" checked={isToggled} onChange={toggleSwitch} />
                                <span className="slider round"></span>
                            </label>
                        </div>
                    </div>

                </div>
                <hr />
                <div>
                    <div className="p-10">
                        <div>Location</div>
                        <div></div>
                    </div>
                    <hr />
                    <div className="p-10">
                        <div className="mb-5">Categories</div>
                        {categoriesData.map((item) => (
                            <span
                                key={item.id}
                                // className={`mx-5 border rounded-full px-3 py-1 cursor-pointer ${isCategorySelected(item) ? 'bg-green-500 selected-filter selected-bg' : 'bg-white'
                                // }`}
                                className={`mx-5 border rounded-full px-3 py-2 cursor-pointer ${isCategorySelected(item.id) ? 'selected_filter' : 'unselected_filter'}`}
                                onClick={() => toggleCategory(item.id)}
                            // style={{ background: myColor(item.id) }}
                            // onClick={() => toggle(item.id)}
                            >
                                {item.name}
                                {isCategorySelected(item.id) && (
                                    <span
                                        className="ml-2 cursor-pointer text-xs text-purple-500 bg-white py-1 px-2 rounded-full align-middle"
                                        onClick={() => toggleCategory(item.id)}
                                    >
                                        X
                                    </span>
                                )}
                            </span>
                        ))}
                    </div>
                    <hr />
                    <div className="p-10">
                        <div className="mb-5">Platform</div>
                        <span

                            className={`mx-5 border rounded-full px-3 py-2 cursor-pointer`}
                            style={{ background: myBgColor(0), color: myColor(0) }}
                            // onClick={() => toggle(0)}
                            onClick={toggleSelectAll}
                        >
                            Select Both
                            {showActive &&
                                <span
                                    className="ml-2 cursor-pointer text-xs text-purple-500 bg-white py-1 px-2 rounded-full align-middle"

                                >
                                    X
                                </span>
                            }

                        </span>
                        {platformData.map((item) => (
                            <span
                                key={item.id}
                                className={`mx-5 border rounded-full px-3 py-2 cursor-pointer ${isCategoryPlatformSelected(item.id) ? 'selected_filter' : 'unselected_filter'}`}
                                onClick={() => togglePlatformCategory(item.id)}
                            >
                                {item.name}
                                {isCategoryPlatformSelected(item.id) && (
                                    <span
                                        className="ml-2 cursor-pointer text-xs text-purple-500 bg-white py-1 px-2 rounded-full align-middle"
                                        onClick={() => togglePlatformCategory(item.id)}
                                    >
                                        X
                                    </span>
                                )}
                            </span>
                        ))}
                    </div>
                    <hr />
                    <div className="p-10">
                        <div>Gender</div>
                    </div>
                    <hr />
                    <div className="p-10">
                        <div>Age</div>
                    </div>
                    <hr />
                    {isToggled && (
                        <>
                            <div className="p-10">
                                <div>Skin Type</div>
                            </div>
                            <hr />
                            <div className="p-10">
                                <div>Body Type</div>
                            </div>
                            <hr />
                            <div className="p-10">
                                <div>Hair Type</div>
                            </div>
                            <hr />
                            <div className="p-10">
                                <div>Pet</div>
                            </div>
                            <hr />
                            <div className="p-10">
                                <div>Kids</div>
                            </div>
                            <hr />
                        </>
                    )}
                    <div className="p-10">
                        <div>Subjective Description</div>
                    </div>

                </div>

            </div>
        </>
    )
}

export default Marketplace_popupcontent