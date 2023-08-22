import React, { useState, useEffect, useRef } from "react";
import Brand1page from "./Brand1";
import Brand2page from "./Brand2";
import { useRouter } from 'next/navigation';
import Colors from "@/styles/Colors";
import Link from "next/link";
import { apiCall, url } from "@/generalfunation";
import Cookies from 'js-cookie';
import DropdownWithCheckboxes from "../MultiSelectDropdown";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
import Images from "@/images";
import Image from "next/image";

const Brandscreens = () => {
    const router = useRouter();

    const [companyName, setCompanyName] = useState('');
    const [website, setWebsite] = useState('');
    const [open, setOpen] = useState(false);
    const [dropdownvalues, setDropdownvalues] = useState([]);
    const [file, setFile] = useState(null);
    const fileInputRef = useRef(null);
    const [desc, setDesc] = useState('');
    const [selectedRoles, setSelectedRoles] = useState([]);

    const [multivalues, setMultivalues] = useState(false)

    const [selectedValues, setSelectedValues] = useState([]);
    console.log("dropdownvalues", dropdownvalues);
    const handleFileChange = (event) => {
        const selectedFile = event.target.files[0];
        setFile(selectedFile);

    };

    console.log("file", file);

    const onNextpage = () => {
        // router.push('/Brand2')
        setOpen(!open)
    }

    const handleSubmit = async () => {
        const cookieValue = JSON.parse(Cookies.get('user_data'));
        console.log('categories cookieValue------------1', cookieValue?.token);

        try {
            const postData = {
                name: companyName,
                website: website,
                description: desc,
                categories: idArray,
                logo: file,
            };

            const headers = {
                'Authorization': `Bearer ${cookieValue?.token}`,
                'Content-Type': 'application/json',
            };

            const response = await fetch('https://backend.creatorsbay.app/api/brands', {
                method: 'POST',
                headers: headers,
                body: JSON.stringify(postData),
            });

            if (response.ok) {
                const responseData = await response.json();
                console.log('brands response:', responseData);

                if (responseData.status) {
                    toast.success('Brand Successfully Created', {
                        position: 'top-center',
                        autoClose: 5000,
                    });

                    router.push('/home');
                } else {
                    console.error('Error:', responseData.message);
                    alert('Brand creation failed');
                }
            } else {
                console.error('Error:', response.statusText);
                alert('Brand creation failed');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const handleUploadClick = async () => {
        // handleFileChange();
        if (!file) {
            alert('Please select an image to upload.');
            return;
        }

        const cookieValue = JSON.parse(Cookies.get('user_data'))
        console.log('categories cookieValue------------2', cookieValue?.token);

        const formData = new FormData();
        formData.append('file', file);

        try {
            const response = await fetch(`${url}/saveimage`, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${cookieValue?.token}`,
                },
                body: formData,
            });

            console.log("response image data", response);

            if (response.ok) {
                const data = await response.json();
                console.log("image response ok", data?.url);
                toast.success('Image Uploaded Successfully', {
                    position: 'top-center',
                    autoClose: 5000,
                });
                // alert('Image uploaded successfully.');
                setFile(data?.url)
            } else {
                alert('Image upload failed.');
            }
        } catch (error) {
            console.error('Error uploading image:', error);
        }
    };

    console.log("file--------", file);


    const getCompanyCategories = async () => {

        const cookieValue = JSON.parse(Cookies.get('user_data'))
        console.log('categories cookieValue------------1', cookieValue?.token);

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
                // setSelectedRoles(result?.data?.data);



            } else {
                console.error('Error:', response.statusText);
                alert('categories api response else', response.statusText)
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    useEffect(() => {
        getCompanyCategories();
        // handleSubmit();
    }, [])

    const handleSelect = (event, selectedItem) => {
        const value = selectedItem; // Pass the entire item as the value
        if (!selectedValues.some((item) => item.id === value.id)) {
            setSelectedValues([...selectedValues, value]);
        } else {
            setSelectedValues(selectedValues.filter((item) => item.id !== value.id));
        }
    };

    // const idArray = selectedValues.map((obj) => `[${obj.id}]`);
    // const idArray = selectedValues.map((obj) => `[${+obj.id}]`);
    const idArray = selectedValues.map((obj) => obj?.id);

    console.log("setSelectedValues", selectedValues, idArray);

    return (
        <>
            <div className="p-4 lg:p-10   bg-zinc-100 border-gray-300 border-solid w-full w-90 rounded-lg border-1">

                {!open &&
                    <div className="bg-white p-5  rounded-md">

                        <>
                            <h4 className="font-bold" style={{ color: Colors.logo_clr }}>
                                1/2
                            </h4>

                            <h1 className="mt-0 mb-5 font-bold text-left text-gray-900   ">
                                Brand Details.
                            </h1>

                            {/* <form > */}
                            <input
                                type="compant"
                                id="name"
                                className="appearance-none border rounded-md w-full mt-5 bg-gray-100  py-5 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                placeholder="Company Name"
                                value={companyName}
                                onChange={(e) => setCompanyName(e.target.value)}
                                required
                                pattern="[a-zA-Z ]{3,190}" title="Only Alphabets and Spaces are allowed. Minimum characters 3"
                            />
                            <input
                                type="url"
                                id="name"
                                className="appearance-none border rounded-md w-full mt-5 bg-gray-100  py-5 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                placeholder="Add Website URL/Social Links"
                                value={website}
                                onChange={(e) => setWebsite(e.target.value)}
                                required
                            />

                            <div>
                                <button
                                    onClick={() => setMultivalues(!multivalues)}
                                    id="dropdownBgHoverButton"
                                    className="hidden relative flex flex-row justify-between items-center text-left block appearance-none border rounded-md w-full mt-5 bg-gray-100 outline-none text-gray-700 focus:shadow-outline border-gray-300 pr-8 leading-tight focus:outline-none focus:border-gray-500"
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
                                        className="  text-left block appearance-none border rounded-md w-full mt-5 bg-gray-100 outline-none py-5 px-3 text-gray-700 focus:shadow-outline border-gray-300 pr-8 leading-tight focus:outline-none focus:border-gray-500"
                                        // value={selectedValues.join(', ')}
                                        value={selectedValues.map((item) => item.name).join(', ')}
                                        readOnly
                                        placeholder="Select the Company Type"
                                        onClick={() => setMultivalues(!multivalues)}
                                        required
                                    />
                                    {/* <div className="">
                                                <svg
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
                                            </div> */}
                                </div>


                                {multivalues && (
                                    <div id="dropdownBgHover" className="z-10 w-full bg-white rounded-lg shadow dark:bg-gray-700">
                                        <ul className="p-3 space-y-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownBgHoverButton">
                                            {dropdownvalues.map((item, index) => (
                                                <li key={index}

                                                >
                                                    <div className="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                                                        <input
                                                            id={`checkbox-item-${index}`}
                                                            type="checkbox"
                                                            // value={item.name} // Use the 'name' property as the value
                                                            // onChange={handleSelect}
                                                            value={JSON.stringify(item)} // Pass the entire item as a JSON string
                                                            onChange={(event) => handleSelect(event, item)}
                                                            // checked={selectedValues.includes(item.name)}
                                                            // checked={selectedValues.map((item) => item.name).join(', ')}
                                                            // checked={selectedValues.some((selectedItem) => selectedItem?.name === item?.name)}
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
                                )}
                            </div>

                            <button
                                type="submit"
                                onClick={() => onNextpage()}
                                className=" rounded-3xl mt-5 text-white w-full  font-bold py-3 px-4  focus:outline-none focus:shadow-outline"
                                style={{ backgroundColor: Colors.logo_clr }}
                            >
                                Next
                            </button>

                          
                        </>
                    
                    </div>
                }
                {open &&
                    <div className="p-4 lg:p-10 bg-zinc-100 border-gray-300 border-solid w-full w-90 rounded-lg border-1">

                        <div className="bg-white p-5 rounded-md">

                            <>
                                <h6 className="  font-bold" style={{ color: Colors.logo_clr }}>
                                    2/2
                                </h6>
                                <h1 className="mt-0 mb-5  font-bold text-left text-gray-900 ">
                                    Brand Details.
                                </h1>

                               
                                <div className=" w-full">
                                    <div
                                        className="border-dotted h-44 align-middle border-4 rounded-lg bg-white py-4 px-6 flex flex-col items-center justify-center"
                                    >
                                        <label
                                            htmlFor="fileInput"
                                            style={{ borderColor: Colors.logo_clr }}
                                        >
                                            <div>
                                                <input
                                                    id="fileInput"
                                                    type="file"
                                                    accept="image/*"
                                                    className="absolute inset-0 opacity-0 w-full "
                                                    onChange={handleFileChange} // Triggered when a file is selected
                                                />
                                                <Image
                                                    src={Images.plus_icon}
                                                    width={15}
                                                    height={15}
                                                    alt=""
                                                    className=" cursor-default"
                                                />
                                            </div>

                                        </label>
                                        <div
                                            className="text-base text-gray-300 p-5 cursor-pointer"
                                            onClick={handleUploadClick} // Triggered when "Company Logo" text is clicked
                                        >
                                            Company Logo(Upload Image)
                                        </div>
                                    </div>

                                </div>
                                <textarea
                                    id="descriptionInput"
                                    type="text"
                                    placeholder="Company Description"
                                    className="appearance-none border rounded-md w-full align-top mt-5 bg-gray-100 h-40 py-5 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    rows={4}
                                    value={desc}
                                    onChange={(e) => setDesc(e.target.value)}
                                    required
                                ></textarea>
                               
                                <button
                                    onClick={handleSubmit}
                                    type="submit"
                                    className="rounded-3xl mt-5 text-white w-full py-3 px-4  focus:outline-none focus:shadow-outline"
                                    style={{ backgroundColor: Colors.logo_clr }}
                                >
                                    Save
                                </button>
                             
                            </>

                        </div>

                    </div>
                }
            </div>
           

        </>
    )
}
export default Brandscreens