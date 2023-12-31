import Images from "@/images";
import Image from "next/image";
import Buttons from "@/components/Button";
import ModalHeader from "../../ModalHeader";
import Colors from "@/styles/Colors";
import Social_media_icons from "@/components/four_social_media";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { url } from "@/generalfunctions";

const Edit_profile_content = () => {

    const [selectedOption, setSelectedOption] = useState("");

    // const options = ["Option 1", "Option 2", "Option 3"];

    const [edit_profile, setEdit_profile] = useState(null);
    const [edit_name, setEdit_name] = useState('');
    const [edit_website, setEdit_website] = useState('');
    const [edit_desc, setEdit_desc] = useState('');

    const [multivalues, setMultivalues] = useState(false);
    const [selectedValues, setSelectedValues] = useState([]);
    const [dropdownvalues, setDropdownvalues] = useState([]);

    const onEditProfile = async () => {

        try {
            let userCookie = Cookies.get('user_data');

            if (typeof userCookie === 'undefined') {
                console.log('User not authenticated, navigating to login page...');
                router.push('/login'); // Replace '/login' with the actual login page URL
            }
            else {
                const cookieValue = JSON.parse(userCookie);
                const brand_detail = Cookies.get('brand_detail');
                const brandIds = Cookies.get('brand_id');

                let brandId = null;

                if (brand_detail) {
                    try {
                        brandId = JSON.parse(brand_detail)?.brand?.id;
                    } catch (error) {
                        console.error('Error parsing brand_detail:', error);
                    }
                }

                if (!brandId && brandIds) {
                    try {
                        brandId = JSON.parse(brandIds);
                    } catch (error) {
                        console.error('Error parsing brand_ids:', error);
                    }
                }
                console.log('brandId:', brandId);

                const response = await fetch(`${url}/brands/${brandId}`, {
                    method: 'Get',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${cookieValue?.token}`,
                    },
                });

                console.log("response edit profile brand", response);

                if (response) {
                    const data = await response.json();

                    console.log("edit brand", data);
                    setEdit_profile(data?.data)
                    // toast.success('onLogout Successfully', {
                    //     position: 'top-center',
                    //     autoClose: 2000,
                    // });
                    // router.push('/login');
                    // Cookies.remove('brand_id');
                    // Cookies.remove('user_data');

                } else {

                    // toast.error('Logout cancelled', {
                    //     position: 'top-center', // Set the toast position
                    //     autoClose: 3000, // Close the toast after 3 seconds
                    // });
                }
            }
        } catch (error) {
            console.error('Error edit profile:', error);

        }
    };

    const getCompanyCategories = async () => {

        try {
            const cookieValue = JSON.parse(Cookies.get('user_data'));

            if (typeof cookieValue === 'undefined') {
                console.log('User not authenticated, navigating to login page...');
                router.push('/login'); // Replace '/login' with the actual login page URL
                console.log('categories cookieValue------------1', cookieValue?.token);
            }
        } catch (error) {
            console.error('Error parsing user_data cookie:', error);
        }

        try {
            const response = await fetch(`${url}/categories`, {
                method: 'Get',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${cookieValue?.token}`,
                },

            });

            console.log('categories response------', response)

            if (response.ok) {
                const result = await response.json();
                console.log("brand result------------", result?.data?.data);

                setDropdownvalues(result?.data?.data);

            } else {
                console.error('Error:', response.statusText);

            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    useEffect(() => {
        onEditProfile();
        getCompanyCategories();
    }, [])



    console.log("edit profile data", edit_profile, selectedValues);

    const handleSelect = (event, selectedItem) => {
        const value = selectedItem; // Pass the entire item as the value
        if (!selectedValues.some((item) => item.id === value.id)) {
            setSelectedValues([...selectedValues, value]);
        } else {
            setSelectedValues(selectedValues.filter((item) => item.id !== value.id));
        }
    };
    // const brand_details = JSON.parse(Cookies.get('brand_detail'));
    // console.log("brand_details edit profile",brand_details);

    // const edit_profile_category = edit_profile?.categories.map((item) => item.name);
    // console.log("edit_profile_category",edit_profile_category)   // edit_profile_ht

    return (
        <>

            <div className="overflow-x-hidden w-full relative bg-white rounded-lg shadow dark:bg-gray-700 h-full">

                {/* <div className="flex items-start justify-between border-b rounded-t dark:border-gray-600 ">

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
                        <div className="font_size_21  line-height-[26.52px] text-center w-full ">Edit Profile</div>
                    </div>

                </div>
                <hr /> */}

                <div
                    style={{ background: Colors.invoice_gradient_clr }}
                    className="auto-cols-max p-3 rounded-md flex flex-row my-5 mx-8"
                >
                    <div className="flex flex-row justify-between items-center w-full">
                        <div className="text-2xl font-bold ps-5" style={{ color: Colors.white_clr }}>
                            Edit Profile
                        </div>
                    </div>

                </div>
                <hr />
                <div className="space-y-6 p-10 ">
                    {/* <div className="border p-10"> */}
                        <div className="font_size_21  line-height-[26.52px]" style={{fontWeight:'bold'}}>
                            Brand Details.
                        </div>
                        <form className="">
                            <input
                                type="compant"
                                id="profile_name"
                                className="appearance-none border rounded-md w-full bg-gray-100  py-5 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                placeholder="Brand Name"
                                // value={edit_profile ? edit_profile?.name : edit_name}
                                onChange={(e) => setEdit_name(e.target.value)}
                                defaultValue={edit_profile ? edit_profile?.name : edit_name}
                            />
                            <input
                                type="text"
                                id="website"
                                className="appearance-none border rounded-md w-full mt-5 bg-gray-100  py-5 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                placeholder="Brand Website"

                                onChange={(e) => setEdit_website(e.target.value)}
                                defaultValue={edit_profile ? edit_profile?.website : edit_website}
                            />
                            {edit_profile?.categories && edit_profile?.categories.map((item, index) => (


                                <input
                                    key={index}
                                    type="text"
                                    id="category"
                                    className="appearance-none border rounded-md w-full mt-5 bg-gray-100  py-5 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    placeholder="Brand Type"
                                    // value={item?.name}
                                    defaultValue={item?.name}
                                />

                            ))

                            }
                            {/* <div>
                            <button
                                onClick={() => setMultivalues(!multivalues)}
                                id="dropdownBgHoverButton"
                                className="  focus:border-purple-500 focus:ring-purple-500 hidden relative flex flex-row justify-between items-center text-left block appearance-none border rounded-md w-full mt-5 bg-gray-100 outline-none text-gray-700 focus:shadow-outline border-gray-300 pr-8 leading-tight focus:outline-none focus:border-gray-500"
                                type="button"
                            ><svg
                                className=" w-2.5 h-2.5 ml-2.5"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 10 6"
                            >
                                    <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="m1 1 4 4 4-4"
                                    />
                                </svg>
                            </button>
                            <div className="flex flex-row justify-between items-center">

                                <input

                                    type="text"
                                    className=" focus:border-purple-500 focus:ring-purple-500 text-left block appearance-none border rounded-md w-full mt-5 bg-gray-100 outline-none py-5 px-3 text-gray-700 focus:shadow-outline border-gray-300 pr-8 leading-tight focus:outline-none focus:border-gray-500"
                                    // value={selectedValues.join(', ')}
                                    // value={selectedValues.map((item) => item.name).join(', ')}

                                    placeholder="Select the Brand Type"
                                    onClick={() => setMultivalues(!multivalues)}
                                    required
                                    // defaultValue={JSON.stringify(item?.name)}
                                    defaultValue={selectedValues.map((item) => item.name).join(', ')}
                                />


                            </div>


                            {multivalues &&
                                <div id="dropdownBgHover" className="z-10 w-full bg-white rounded-lg shadow dark:bg-gray-700">
                                    <ul className="p-3 space-y-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownBgHoverButton">
                                        {dropdownvalues.map((item, index) => (
                                            <li key={index}

                                            >
                                                <div className="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                                                    <input
                                                        id={`checkbox-item-${index}`}
                                                        type="checkbox"
                                                        // value={JSON.stringify(item)} // Pass the entire item as a JSON string
                                                        defaultValue={JSON.stringify(item)}
                                                        onChange={(event) => handleSelect(event, item)}
                                                        checked={selectedValues.some(selectedItem => JSON.stringify(selectedItem) === JSON.stringify(item))}
                                                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                                                    />
                                                    <label
                                                        htmlFor={`checkbox-item-${index}`}
                                                        className="w-full ml-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300"
                                                    >
                                                        {item.name}
                                                    </label>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            }
                        </div> */}

                            {/* <div className="relative">
                            <select
                                value={selectedOption}
                                onChange={handleChange}
                                className="block appearance-none  border rounded-md w-full mt-5 bg-gray-100 outline-none  py-5 px-3 text-gray-700  focus:shadow-outline border-gray-300 pr-8 leading-tight focus:outline-none focus:border-gray-700 "
                                id="grid-state"
                            >
                                <option value="" disabled>
                                Brand Type
                                </option>
                                {options.map((option) => (
                                    <option key={option} value={option}>
                                        {option}
                                    </option>
                                ))}
                            </select>
                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                <svg
                                    className="fill-current h-4 w-4"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                >
                                    <h4ath d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                                </svg>
                            </div>
                        </div> */}

                            <div className="relative w-full mt-5">
                                <label
                                    htmlFor="fileInput"
                                    className="w-full border-dotted h-44  align-middle border-4 rounded-lg bg-white   py-4 px-6 flex flex-col items-center justify-center cursor-pointer"
                                    style={{ borderColor: Colors.logo_clr }}
                                >
                                    <div className="mb-2">
                                        {/* <h4 className=" text-gray-300">+</h4> */}
                                        <Image
                                            // src={Images.plus_icon}
                                            // src={ brand_details?.brand?.logo}
                                            src={edit_profile?.logo}
                                            width={50}
                                            height={50}
                                            alt=""
                                            className="p-1"
                                        />
                                    </div>
                                    <span className="text-base  text-gray-700">
                                        Brand Logo
                                    </span>
                                </label>
                                <input
                                    id="fileInput"
                                    className="absolute inset-0 opacity-0 w-full"
                                    type="file"
                                />
                            </div>
                            <textarea
                                id="descriptionInput"
                                type="text"
                                placeholder="Brand Description"
                                className="appearance-none border rounded-md w-full align-top mt-5 bg-gray-100 h-40 py-5 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                rows={4}
                                // value={brand_details?.brand?.description}
                                // value={edit_profile?.description}
                                defaultValue={edit_profile?.description}
                            ></textarea>

                        </form>
                    {/* </div> */}
                </div>


            </div>
        </>
    )
}

export default Edit_profile_content