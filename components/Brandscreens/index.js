import React, { useState, useEffect, useRef } from "react";
import Brand1page from "./Brand1";
import Brand2page from "./Brand2";
import { useRouter } from 'next/navigation';
import Colors from "@/styles/Colors";
import Link from "next/link";
import { apiCall, isEmpty, url } from "@/generalfunctions";
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
    const [previewImage, setPreviewImage] = useState(null);

    const [multivalues, setMultivalues] = useState(false)

    const [selectedValues, setSelectedValues] = useState([]);
    console.log("dropdownvalues", dropdownvalues);
    const handleFileChange = (event) => {
        const selectedFile = event.target.files[0];
        if (selectedFile) {
            // Create a FileReader instance
            const reader = new FileReader();

            // Set up a callback function for when the FileReader has loaded the image
            reader.onloadend = () => {
                setFile(selectedFile); // Save the selected image file
                setPreviewImage(reader.result); // Set the image preview
            };

            // Read the image file as a data URL
            reader.readAsDataURL(selectedFile);
        } else {
            setFile(null); // Reset the selected image
            setPreviewImage(null); // Reset the image preview
        }
        // setFile(selectedFile);

    };

    console.log("file", file);

    const onNextpage = () => {
        if (isEmpty(companyName) || isEmpty(website) || isEmpty(selectedValues)) {

            toast.error('All fields are mandatory', {
                position: 'top-center',
                autoClose: 5000,
            });
            setOpen(false)

        }
        else {
            setOpen(true)
        }


        // router.push('/Brand2')
        // setOpen(true)
    }

    const handleSubmit = async () => {
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
                setFile(data?.url)
                console.log("image response ok", data?.url);
                toast.success('Image Uploaded Successfully', {
                    position: 'top-center',
                    autoClose: 2000,
                });
                // alert('Image uploaded successfully.');

                await handlebrandSubmit(data?.url);
            } else {
                alert('Image upload failed.');
                toast.error('Image upload failed', {
                    position: 'top-center', // Set the toast position
                    autoClose: 3000, // Close the toast after 3 seconds
                });
            }
        } catch (error) {
            console.error('Error uploading image:', error);
            toast.error('Please uplaod the image again', {
                position: 'top-center', // Set the toast position
                autoClose: 3000, // Close the toast after 3 seconds
            });
        }
    };

    const handlebrandSubmit = async (imageUrl) => {

        // handleUploadClick();
        const cookieValue = JSON.parse(Cookies.get('user_data'));
        console.log('categories cookieValue------------1', cookieValue?.token);

        try {
            const postData = {
                name: companyName,
                website: website,
                description: desc,
                categories: idArray,
                // logo: file,
                logo: imageUrl, // Use the imageUrl from the parameter
                user_id: cookieValue?.user?.id
            };

            const headers = {
                'Authorization': `Bearer ${cookieValue?.token}`,
                'Content-Type': 'application/json',
            };

            const response = await fetch(`${url}/brands`, {
                method: 'POST',
                headers: headers,
                body: JSON.stringify(postData),
            });

            if (response.ok) {
                const responseData = await response.json();
                console.log('brands response:', responseData);

                Cookies.set('brand_detail', JSON.stringify(responseData?.data), { expires: 106500 });
                Cookies.set('brand_id', JSON.stringify(responseData?.data?.id), { expires: 106500 });

                if (responseData.status) {
                    toast.success('Brand Successfully Created', {
                        position: 'top-center',
                        autoClose: 5000,
                    });

                    router.push('/home');
                } else {
                    console.error('Error:', responseData.message);
                    // alert('Brand creation failed');
                }
            } else {
                console.error('Error:', response.statusText);
                // alert('Brand creation failed');

                toast.error('All fields are mandatory', {
                    position: 'top-center',
                    autoClose: 5000,
                });
            }
        } catch (error) {
            console.error('Error:', error);
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
            <div className="p-4 lg:p-10 bg-zinc-100 border-gray-300 border-solid w-full w-90 rounded-lg border-1"
            //  onClick={() => setMultivalues(false)}
            >

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
                                id="company_name"
                                className="appearance-none border rounded-md w-full mt-5 bg-gray-100  py-5 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                placeholder="Brand Name"
                                value={companyName}
                                onChange={(e) => setCompanyName(e.target.value)}
                                required
                                pattern="[a-zA-Z ]{3,190}" title="Only Alphabets and Spaces are allowed. Minimum characters 3"
                            />
                            <input
                                type="url"
                                id="website"
                                className="appearance-none border rounded-md w-full mt-5 bg-gray-100  py-5 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                placeholder="Add Website URL or Social Links"
                                value={website}
                                onChange={(e) => setWebsite(e.target.value)}
                                required
                            />

                            <div>
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
                                    <div className="select">

                                    <input
                                        type="text"
                                        className=" focus:border-purple-500 focus:ring-purple-500 text-left block appearance-none border rounded-md w-full mt-5 bg-gray-100 outline-none py-5 px-3 text-gray-700 focus:shadow-outline border-gray-300 pr-8 leading-tight focus:outline-none focus:border-gray-500"
                                        // value={selectedValues.join(', ')}
                                        value={selectedValues.map((item) => item.name).join(', ')}
                                        readOnly
                                        placeholder="Select the Industry Type"
                                        onClick={() => setMultivalues(!multivalues)}
                                        required
                                    />
                                    </div>

                                </div>


                                {multivalues &&
                                    <div id="dropdownBgHover" className="z-10 w-full bg-white rounded-lg shadow dark:bg-gray-700">
                                        <ul className="p-3 space-y-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownBgHoverButton">
                                            {dropdownvalues.map((item, index) => (
                                                <li key={index}

                                                >
                                                    <div className="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600 text-base">
                                                        <input
                                                            id={`checkbox-item-${index}`}
                                                            type="checkbox"
                                                            value={JSON.stringify(item)} // Pass the entire item as a JSON string
                                                            onChange={(event) => handleSelect(event, item)}
                                                            checked={selectedValues.some(selectedItem => JSON.stringify(selectedItem) === JSON.stringify(item))}
                                                            className="w-4 h-4 me-5 text-base text-blue-600 bg-gray-300 border-slate-500 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                                                        />
                                                        <label
                                                            htmlFor={`checkbox-item-${index}`}
                                                            className="w-full ml-2  text-base text-gray-600 rounded dark:text-gray-300"
                                                        >
                                                            {item.name}
                                                        </label>
                                                    </div>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                }
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
                <ToastContainer />
                {open &&
                    <div className="p-4 lg:p-10 bg-zinc-100 border-gray-300 border-solid w-full w-90 rounded-lg border-1">

                        <div className="bg-white p-5 rounded-md">
                            <div className="flex flex-row items-center w-full">
                                <Image
                                    src={Images.arrowleft_icon}
                                    alt=""
                                    width={45}
                                    height={25}
                                    onClick={() => setOpen(false)}
                                />
                                <div className="w-full">
                                    <h4 className=" text-center font-bold" style={{ color: Colors.logo_clr }}>
                                        2/2
                                    </h4>
                                </div>
                            </div>
                            <div className="px-14 mt-5">

                                <h1 className="mt-0 mb-5  font-bold text-left text-gray-900 ">
                                    Brand Details.
                                </h1>


                                <div className=" ">
                                    <div
                                        className=" focus:border-purple-500 focus:ring-purple-500 border-dotted h-48 align-middle border-4 rounded-lg bg-white py-4 px-6 flex flex-col items-center justify-center"
                                        onChange={handleFileChange}
                                    >
                                        <label
                                            htmlFor="fileInput"
                                            style={{ borderColor: Colors.logo_clr }}
                                            className="w-auto py-5"
                                        >
                                            <div className="">
                                                <input
                                                    id="fileInput"
                                                    type="file"
                                                    accept="image/*"
                                                    className="absolute w-screen hidden "
                                                // Triggered when a file is selected
                                                />
                                                {!file && (
                                                    <Image
                                                        src={Images.plus_icon}
                                                        width={15}
                                                        height={15}
                                                        alt=""
                                                        className="mx-auto cursor-default m-5 mb-0"
                                                    />
                                                )}
                                            </div>
                                            {previewImage && (
                                                <Image
                                                    src={previewImage}
                                                    alt="Selected"
                                                    style={{ maxWidth: '100%', maxHeight: '300px' }}
                                                    width={50}
                                                    height={50}
                                                    className="mx-auto"
                                                />
                                            )}
                                            {file && (
                                                <p className="text-base text-center">{file?.name}</p>
                                            )}
                                            {!file && (
                                                <>
                                                    <div
                                                        className=" text-base text-gray-300 "
                                                    // onClick={handleUploadClick} // Triggered when "Company Logo" text is clicked
                                                    // style={{ cursor: 'grabbing' }}
                                                    >
                                                        Company Logo(Upload Image)
                                                    </div>
                                                    <p className="mt-1 text-sm text-gray-500 dark:text-gray-300  text-center" id="file_input_help">SVG, PNG, JPG or GIF</p>
                                                </>
                                            )}
                                        </label>

                                    </div>

                                </div>
                                <textarea
                                    id="descriptionInput"
                                    type="text"
                                    placeholder="Brand Description"
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

                            </div>

                        </div>

                    </div>
                }
            </div>


        </>
    )
}
export default Brandscreens