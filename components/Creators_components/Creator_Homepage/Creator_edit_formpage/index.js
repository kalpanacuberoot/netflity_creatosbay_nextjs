import { useEffect, useState } from "react";
import Images from "@/images";
import Image from "next/image";
import Cookies from "js-cookie";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
import { url } from "@/generalfunctions";
import Creator_MultiSelectDropdown from "./Creator_MultiSelectDropdown";
import Colors from "@/styles/Colors";

const Creator_edit_formpage = () => {



    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [city, setCity] = useState('');
    const [age, setAge] = useState('');
    const [gender, setGender] = useState('');
    const [heightFeet, setHeightFeet] = useState('');
    const [heightInches, setHeightInches] = useState('');
    const [heightCm, setHeightCm] = useState('');
    const [weight, setWeight] = useState('');
    const [bio, setBio] = useState('');
    const [pets, setPets] = useState('');
    const [kids, setKids] = useState('');
    const [skinType, setSkinType] = useState('');
    const [bodyType, setBodyType] = useState('');
    const [hairType, setHairType] = useState('');
    const [eyeType, setEyeType] = useState('');

    const [statesData, setStatesData] = useState(null);
    const [skinTypeData, setSkinTypeData] = useState(null);
    const [bodyTypeData, setBodyTypeData] = useState(null);
    const [hairTypeData, setHairTypeData] = useState(null);
    const [eyeTypeData, setEyeTypeData] = useState(null);
    const [platform, setPlatform] = useState(null);
    const [selectedshowvalue, setSelectedshowvalue] = useState(false);
    const [selectedState, setSelectedState] = useState('');
    const [categoriesData, setCategoriesData] = useState([]);
    const [linkone, setLinkone] = useState('');
    const [linktwo, setLinktwo] = useState('');
    const [linkthree, setLinkthree] = useState('');
    const [linkfour, setLinkfour] = useState('');
    const [linkfive, setLinkfive] = useState('');
    const [linksix, setLinksix] = useState('');
    const [allApiResponse, setAllApiResponse] = useState([]);
    const [file, setFile] = useState(null);
    const [previewImage, setPreviewImage] = useState(null);

    console.log("Createcreatoralldata", name, email, city, age, gender, heightFeet, heightInches, weight, bio, pets, kids, statesData, skinType,
        bodyType, hairType, eyeType, platform, selectedState, categoriesData)



    const [selectedOptions, setSelectedOptions] = useState([]);
    const [selectedMultipleOptionsIds, setSelectedMultipleOptionsIds] = useState([]);
    const options = ['Option 1', 'Option 2', 'Option 3', 'Option 4'];

    const [selectedItems, setSelectedItems] = useState([]);
    const [selectedItemsIds, setSelectedItemsIds] = useState([]);
    const [selectedlanguageItems, setSelectedlanguageItems] = useState([]);
    const [selectedLanguageIds, setSelectedLanguageIds] = useState([]);
    const items = ['Youtube', 'Instagram'];
    const [selectedDataArray, setSelectedDataArray] = useState([]);

    // Define a function to update the selectedDataArray state
    const handleSelectedDataChange = (newSelectedDataArray) => {
        setSelectedDataArray(newSelectedDataArray);
    };

    // const languages = ['Hindi', 'English'];
    const languages = [
        { id: 1, name: 'Hindi' },
        { id: 2, name: 'English' },
    ];

    const toggleCheckbox = (item) => {
        if (selectedItems.includes(item.name)) {
            setSelectedItems(selectedItems.filter((selected) => selected !== item.name));
            setSelectedItemsIds(selectedItemsIds.filter((id) => id !== item.id));
        } else {
            setSelectedItems([...selectedItems, item.name]);
            setSelectedItemsIds([...selectedItemsIds, item.id]);
        }
    };

    const toggleLanguageCheckbox = (item) => {
        const isSelected = selectedlanguageItems.includes(item.name);
        if (isSelected) {
            setSelectedlanguageItems(selectedlanguageItems.filter((selected) => selected !== item.name));
            setSelectedLanguageIds(selectedLanguageIds.filter((id) => id !== item.id));
        } else {
            setSelectedlanguageItems([...selectedlanguageItems, item.name]);
            setSelectedLanguageIds([...selectedLanguageIds, item.id]);
        }
    };

    console.log("selectedLanguageIds", selectedLanguageIds, selectedlanguageItems);

    const getAllStates = async () => {

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

    const getAllCategories = async () => {

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


            const response = await fetch(`${url}/categories`, requestOptions);
            console.log('categories------', response)

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
            console.log('categories------ response:', responseData?.data?.data);
            setCategoriesData(responseData?.data?.data);
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
        getAllCategories();
    }, []);


    const handleStateChange = (event) => {
        // Update the selectedState state variable with the selected option's value
        setSelectedState(event.target.value);
        setSelectedshowvalue(true)
    };


    console.log("categoriesDataskinType", pets);

    console.log("selectedItemsIds", selectedItems, selectedItemsIds, platform);


    const handleFileChange = (event) => {
        // const selectedFile = event.target.files[0];
        // if (selectedFile) {
        //     setFile(selectedFile);
        // }
        const selectedFile = event.target.files[0];
        if (selectedFile) {

            const reader = new FileReader();

            reader.onloadend = () => {
                setFile(selectedFile);
                setPreviewImage(reader.result);
            };

            reader.readAsDataURL(selectedFile);

        } else {
            setFile(null);
            setPreviewImage(null);
        }
    };
    const handleSubmit = async () => {

        // event.preventDefault();

        if (!file) {
            alert('Please select a file to upload.');
            return;
        }

        const cookieValue = JSON.parse(Cookies.get('creator_user_data'))
        console.log('categories cookieValue------------2', cookieValue?.token);

        const formData = new FormData();
        formData.append('file', file);

        try {
            // const token = '2|CWajW6MP2OEBirXC7A2dqPmyRMyF8vMkHurhpIMH'; // Replace with your authorization token
            const response = await fetch(`${url}/saveimage`, {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    Authorization: `Bearer ${cookieValue?.token}`,
                },
                body: formData,
            });

            if (response.ok) {
                const data = await response.json();
                console.log('Image upload successful', data);
                toast.success('Image Uploaded Successfully', {
                    position: 'top-center',
                    autoClose: 2000,
                });
                setFile(data?.url)
                return data?.url;
                // Handle success
            } else {
                console.error('Image upload failed', response);
                toast.error('Image upload failed', {
                    position: 'top-center', // Set the toast position
                    autoClose: 3000, // Close the toast after 3 seconds
                });
                // Handle failure
            }
        } catch (error) {
            console.error('Error uploading image:', error);
            // Handle error
        }
    };


    console.log("handleFileChange", file, categoriesData);
    console.log("selectedOptions.map((item) => item.value", selectedDataArray);

    console.log("heightInches", heightFeet, heightInches);

    // Function to convert feet and inches to centimeters
    const convertToCm = (e) => {

        e.preventDefault();
        // Parse the height values as numbers
        const feet = parseFloat(heightFeet) || 0;
        const inches = parseFloat(heightInches) || 0;

        // Calculate the total height in inches
        const totalInches = feet * 12 + inches;

        // Convert inches to centimeters (1 inch = 2.54 cm)
        const totalCm = totalInches * 2.54;

        // Update the state with the calculated height in centimeters
        setHeightCm(totalCm.toFixed(2)); // Rounded to 2 decimal places
    };

    console.log("heightCm", heightCm);
    console.log("allApiResponseallApiResponse", allApiResponse);
    const numericBodyId = parseInt(bodyType, 10);
    console.log("numericBodyId", numericBodyId);

    const onHandleSubmit = async (event) => {

        event.preventDefault();
        // if (!file) {
        //     // Display an error message or take appropriate action for incomplete fields
        //     console.error('All fields are mandatory. Please fill out all required fields.');
        //     return;
        // }

        // Validate that all required fields are filled out
        // if (!file || !selectedState || !city || !gender || !age || !heightCm || !weight || !skinType || !bodyType || !hairType || !eyeType || !pets || !kids || !bio || selectedItemsIds.length === 0 || selectedLanguageIds.length === 0 || selectedDataArray.length === 0) {
        //     // Display an error message or take appropriate action for incomplete fields
        //     console.error('All fields are mandatory. Please fill out all required fields.');
        //     return;
        // }

        try {
            const uploadedImageData = await handleSubmit();

            console.log("uploadedImageData", uploadedImageData);

            if (uploadedImageData !== null) {

                const cookieValue = JSON.parse(Cookies.get('creator_user_data'))
                console.log('categories cookieValue------------2', cookieValue?.token);

                const requestData = {
                    "user_id": cookieValue?.user?.id,
                    "state_id": parseInt(selectedState, 10),
                    "city": city,
                    "gender": gender,
                    "age": parseInt(age, 10),
                    "height": parseInt(heightCm, 10),
                    "weight": parseInt(weight, 10),
                    "skin_id": parseInt(skinType, 10),
                    "body_id": parseInt(bodyType, 10),
                    "hair_id": parseInt(hairType, 10),
                    "eye_id": parseInt(eyeType, 10),
                    "pets": parseInt(pets, 10),
                    "kids": parseInt(kids, 10),
                    "bio": bio,
                    "profile_pic": uploadedImageData,
                    "platforms": selectedItemsIds,
                    "languages": selectedLanguageIds,
                    "categories": selectedDataArray.map((item) => item?.value)
                };

                const apiUrl = `${url}/creators`;
                const headers = {
                    'Accept': 'application/json',
                    'Authorization': `Bearer ${cookieValue?.token}`,
                    'Content-Type': 'application/json'
                };

                const response = await fetch(apiUrl, {
                    method: 'POST',
                    headers: headers,
                    body: JSON.stringify(requestData)
                });

                if (response.ok) {
                    const data = await response.json();
                    console.log('creator API Response:', data);
                    setAllApiResponse(data?.data);
                    toast.success('Edit Profile Successfully', {
                        position: 'top-center',
                        autoClose: 2000,
                    });
                } else {
                    throw new Error('API Request Failed');
                }

            } else {
                // Handle the case where image upload failed
                console.error('Image upload failed.');
            }

        } catch (error) {
            console.error('Error in handleSubmit:', error);

        }

    }
    return (
        <>
            <div className="min-h-screen bg-gray-100 p-0 sm:p-12 w-full">
                <div className="mx-auto w-full px-6 py-12 bg-white border-0 shadow-lg sm:rounded-3xl   xl:p-10 lg:p-10">

                    <h1 className="text-4xl font-bold mb-8 text-center">Edit Profile</h1>
                    <form id="form" noValidate>
                        <div className=" z-0 w-full mb-5">
                            <label htmlFor="name" className=" duration-300 top-3 -z-1 origin-0 text-gray-500">Enter name</label>
                            <input
                                type="text"
                                name="name"
                                placeholder=" "
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                                className=" pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
                            />

                            <span className="text-sm text-red-600 hidden" id="error">Name is required</span>
                        </div>

                        <div className=" z-0 w-full mb-5">
                            <label htmlFor="email" className=" duration-300 top-3 -z-1 origin-0 text-gray-500">Enter email address</label>
                            <input
                                type="email"
                                name="email"
                                placeholder=" "
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className=" pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
                            />
                            <span className="text-sm text-red-600 hidden" id="error">Email address is required</span>
                        </div>
                        <div className="flex">

                            <div className=" z-0 w-full me-5">
                                <label
                                    htmlFor="stateSelect" // Use the id attribute of the select element here
                                    className=" duration-300 top-3 -z-1 origin-0 text-gray-500"
                                >
                                    Select Your State
                                </label>
                                <div className="dropdown_select pt-4">
                                    <select
                                        name="select"
                                        id="stateSelect" // Add an id attribute
                                        value={selectedState} // Set the value of the select element to the selectedState
                                        className=" pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none z-1 focus:outline-none focus:ring-0 focus:border-black border-gray-200"
                                        onChange={handleStateChange} // Add onChange event handler
                                    >
                                        <option value="" selected disabled hidden></option>
                                        {statesData &&
                                            statesData.map((state_name, index) => (
                                                <option key={index} value={state_name?.id} >
                                                    {state_name?.name}
                                                </option>
                                            ))}
                                    </select>


                                    <span className="text-sm text-red-600 hidden" id="error">
                                        Option has to be selected
                                    </span>
                                </div>


                            </div>
                            <div className=" z-0 w-full mb-5">
                                <label htmlFor="password" className=" duration-300 top-3 -z-1 origin-0 text-gray-500">City</label>
                                <input
                                    type="text"
                                    name="password"
                                    placeholder=" "
                                    value={city}
                                    onChange={(e) => setCity(e.target.value)}
                                    className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
                                />

                                <span className="text-sm text-red-600 hidden" id="error">Password is required</span>
                            </div>
                        </div>

                        <div className="flex">
                            <fieldset className="relative z-0 w-full p-px mt-4 mb-5 me-5">
                                <legend className="text-xl absolute text-gray-500 transform scale-75 -top-3 origin-0 ">Gender</legend>
                                <div className="block pt-5 pb-2 space-x-4 " >
                                    <label>
                                        <input
                                            type="radio"
                                            name="radio"
                                            // value="1"
                                            value="male"
                                            className="mr-2 text-black border-2 border-gray-300 focus:border-gray-300 focus:ring-black"
                                            onChange={(e) => setGender(e.target.value)}
                                        />
                                        Male
                                    </label>
                                    <label>
                                        <input
                                            type="radio"
                                            name="radio"
                                            // value="2"
                                            value="female"
                                            className="mr-2 text-black border-2 border-gray-300 focus:border-gray-300 focus:ring-black"
                                            onChange={(e) => setGender(e.target.value)}
                                        />
                                        Female
                                    </label>
                                    <label>
                                        <input
                                            type="radio"
                                            name="radio"
                                            // value="2"
                                            value="other"
                                            className="mr-2 text-black border-2 border-gray-300 focus:border-gray-300 focus:ring-black"
                                            onChange={(e) => setGender(e.target.value)}
                                        />
                                        Other
                                    </label>
                                </div>
                                <span className="text-sm text-red-600 hidden" id="error">Option has to be selected</span>
                            </fieldset>

                            <div className=" z-0 w-full mb-5">
                                <label htmlFor="name" className=" duration-300 top-3 -z-1 origin-0 text-gray-500">Age</label>
                                <input
                                    type="text"
                                    name="name"
                                    placeholder=" "
                                    required
                                    value={age}
                                    onChange={(e) => setAge(e.target.value)}
                                    className=" pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
                                />

                                <span className="text-sm text-red-600 hidden" id="error">Name is required</span>
                            </div>
                        </div>

                        <div className="flex ">

                            <div className=" z-0 w-full mb-5 me-5 flex">
                                <div className="w-full">
                                    <label htmlFor="name" className=" duration-300 top-3 -z-1 origin-0 text-gray-500">
                                        Height (feet)

                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder=" "
                                        required
                                        value={heightFeet}
                                        onChange={(e) => setHeightFeet(e.target.value)}
                                        className=" pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
                                    />

                                    <span className="text-sm text-red-600 hidden" id="error">Name is required</span>
                                </div>
                                ''
                            </div>


                            <div className=" z-0 w-full mb-5 flex">
                                <div className="w-full">
                                    <label htmlFor="name" className=" duration-300 top-3 -z-1 origin-0 text-gray-500">
                                        Height (inches)


                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder=" "
                                        required
                                        value={heightInches}
                                        onChange={(e) => setHeightInches(e.target.value)}
                                        className=" pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
                                    />

                                    <span className="text-sm text-red-600 hidden" id="error">Name is required</span>
                                </div>
                                '
                            </div>
                            <div className="flex items-center">
                                <button
                                    onClick={convertToCm}
                                    type="submit"
                                    className="w-48 edit_clr">Convert to cm = </button>
                                {heightCm && (
                                    <div className="w-48">
                                        <div> {heightCm} cm</div>
                                    </div>
                                )}
                            </div>

                            {/* <div className="w-full vertical-middle px-5">or x cms</div> */}
                        </div>

                        <div className="flex">
                            <div className=" z-0 w-full mb-5 me-5">
                                <label htmlFor="name" className=" duration-300 top-3 -z-1 origin-0 text-gray-500">
                                    Weight

                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    placeholder=" "
                                    required
                                    value={weight}
                                    onChange={(e) => setWeight(e.target.value)}
                                    className=" pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
                                />

                                <span className="text-sm text-red-600 hidden" id="error">Name is required</span>
                            </div>

                        </div>

                        <div className="flex">

                            <div className=" z-0 w-full mb-5 me-5">
                                <label htmlFor="select" className=" duration-300 top-3 -z-1 origin-0 text-gray-500">Select Your Skin Type</label>
                                <select
                                    name="select"
                                    value={skinType}
                                    onChange={(e) => setSkinType(e.target.value)}
                                    className=" pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none z-1 focus:outline-none focus:ring-0 focus:border-black border-gray-200"
                                >
                                    <option value="" selected disabled hidden></option>

                                    {skinTypeData && skinTypeData.map((skin_name, index) => (
                                        <option key={index} className="p-10"
                                            value={skin_name?.id}
                                        >
                                            {skin_name?.name}</option>
                                    ))}
                                </select>

                                <span className="text-sm text-red-600 hidden" id="error">Option has to be selected</span>
                            </div>

                            <div className=" z-0 w-full mb-5 me-5">
                                <label htmlFor="select" className=" duration-300 top-3 -z-1 origin-0 text-gray-500">Select Your Body Type</label>
                                <select
                                    name="select"
                                    value={bodyType}
                                    onChange={(e) => setBodyType(e.target.value)}
                                    className=" pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none z-1 focus:outline-none focus:ring-0 focus:border-black border-gray-200"
                                >
                                    <option value="" selected disabled hidden></option>

                                    {bodyTypeData && bodyTypeData.map((body_name, index) => (
                                        <option key={index} className="p-10"
                                            value={body_name?.id}
                                        >{body_name?.name}</option>
                                    ))}
                                </select>

                                <span className="text-sm text-red-600 hidden" id="error">Option has to be selected</span>
                            </div>
                        </div>

                        <div className="flex">

                            <div className=" z-0 w-full mb-5 me-5">
                                <label htmlFor="select" className=" duration-300 top-3 -z-1 origin-0 text-gray-500">Select Your Hair Type</label>
                                <select
                                    name="select"
                                    value={hairType}
                                    onChange={(e) => setHairType(e.target.value)}
                                    className=" pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none z-1 focus:outline-none focus:ring-0 focus:border-black border-gray-200"
                                >
                                    <option value="" selected disabled hidden></option>

                                    {hairTypeData && hairTypeData.map((hair_name, index) => (
                                        <option key={index} className="p-10"
                                            value={hair_name?.id}
                                        >{hair_name?.name}</option>
                                    ))}
                                </select>

                                <span className="text-sm text-red-600 hidden" id="error">Option has to be selected</span>
                            </div>

                            <div className=" z-0 w-full mb-5 me-5">
                                <label htmlFor="select" className=" duration-300 top-3 -z-1 origin-0 text-gray-500">Select Your Eye Type</label>
                                <select
                                    name="select"
                                    value={eyeType}
                                    onChange={(e) => setEyeType(e.target.value)}
                                    className=" pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none z-1 focus:outline-none focus:ring-0 focus:border-black border-gray-200"
                                >
                                    <option value="" defaultValue disabled hidden></option>

                                    {eyeTypeData && eyeTypeData.map((eye_name, index) => (
                                        <option key={index} className="p-10"
                                            value={eye_name?.id}
                                        >{eye_name?.name}</option>
                                    ))}
                                </select>

                                <span className="text-sm text-red-600 hidden" id="error">Option has to be selected</span>
                            </div>
                        </div>


                        <div className="relative z-0 w-full mb-5 me-5">
                            <label htmlFor="message" className="text-base block mb-2 text-sm font-medium text-gray-500 dark:text-white">Bio</label>
                            <textarea
                                value={bio}
                                onChange={(e) => setBio(e.target.value)}
                                id="message" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your answer here..."></textarea>
                        </div>


                        <div className="flex">
                            <fieldset className=" z-0 w-full p-px mb-5 me-5">
                                <legend className=" text-gray-500 transform scale-75 -top-3 origin-0 text-xl">Pets</legend>
                                <div className="block pt-3 pb-2 space-x-4">
                                    <label>
                                        <input
                                            type="radio"
                                            name="radio"
                                            value="1"
                                            // value={pets}
                                            onChange={(e) => setPets(e.target.value)}
                                            className="mr-2 text-black border-2 border-gray-300 focus:border-gray-300 focus:ring-black"
                                        />
                                        Yes
                                    </label>
                                    <label>
                                        <input
                                            type="radio"
                                            name="radio"
                                            value="0"
                                            // value={pets}
                                            onChange={(e) => setPets(e.target.value)}
                                            className="mr-2 text-black border-2 border-gray-300 focus:border-gray-300 focus:ring-black"
                                        />
                                        No
                                    </label>

                                </div>
                                <span className="text-sm text-red-600 hidden" id="error">Option has to be selected</span>
                            </fieldset>

                            <fieldset className=" z-0 w-full p-px mb-5 me-5">
                                <legend className=" text-gray-500 transform scale-75 -top-3 origin-0 text-xl">Kids</legend>
                                <div className="block pt-3 pb-2 space-x-4">
                                    <label>
                                        <input
                                            type="radio"
                                            name="radio"
                                            value="1"
                                            // value={kids}
                                            onChange={(e) => setKids(e.target.value)}
                                            className="mr-2 text-black border-2 border-gray-300 focus:border-gray-300 focus:ring-black"
                                        />
                                        Yes
                                    </label>
                                    <label>
                                        <input
                                            type="radio"
                                            name="radio"
                                            value="0"
                                            // value={kids}
                                            onChange={(e) => setKids(e.target.value)}
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

                                <Creator_MultiSelectDropdown
                                    options={categoriesData}
                                    selectedDataArray={selectedDataArray.map((item) => item?.value)}
                                    onSelectedDataChange={handleSelectedDataChange}

                                />

                            </div>
                        </div>

                        <div className="flex">

                            <div className=" w-full mb-5 me-5">
                                <legend className=" text-gray-500 text-base mb-2">Languages</legend>
                                <div className="">
                                    {languages.map((item, index) => (
                                        <label key={index} className="flex items-center">
                                            <input
                                                type="checkbox"
                                                className="h-4 w-4 text-blue-600"
                                                checked={selectedlanguageItems.includes(item?.name)}
                                                onChange={() => toggleLanguageCheckbox(item)}
                                            />
                                            <span className="ml-2">{item?.name}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>

                            <div className=" z-0 w-full mb-5">
                                <legend className=" text-gray-500 text-base mb-2">Platforms</legend>
                                <div className="">

                                    {platform?.map((item, index) => (
                                        <label key={index} className="flex items-center py-1">
                                            <input
                                                type="checkbox"
                                                className="h-5 w-5 text-blue-600"
                                                checked={selectedItems.includes(item?.name)}
                                                onChange={() => toggleCheckbox(item)}
                                            />
                                            <Image
                                                src={item?.logo}
                                                alt=""
                                                width={40}
                                                height={30}
                                                className="ms-3 max-w-full w-10"
                                            />

                                        </label>
                                    ))}
                                </div>

                            </div>
                        </div>


                        {/* start portfolio links */}
                        <div className=" w-full my-4 font-bold text-lg"> Portfolio Links </div>
                        <div className="text-sm  mb-5">
                            Paste link of your post or reel from instagram or post links from your youtube links or shorts
                        </div>

                        <div className=" flex w-full mb-5 items-center">
                            <label htmlFor="password" className=" duration-300 origin-0 text-gray-500 w-28">Link 1</label>
                            <input
                                type="url"
                                name="password"
                                placeholder=" "
                                value={linkone}
                                onChange={(e) => setLinkone(e.target.value)}
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
                                value={linktwo}
                                onChange={(e) => setLinktwo(e.target.value)}
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
                                value={linkthree}
                                onChange={(e) => setLinkthree(e.target.value)}
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
                                value={linkfour}
                                onChange={(e) => setLinkfour(e.target.value)}
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
                                value={linkfive}
                                onChange={(e) => setLinkfive(e.target.value)}
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
                                value={linksix}
                                onChange={(e) => setLinksix(e.target.value)}
                                className=" w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            />
                            <span className="text-sm text-red-600 hidden" id="error">Portfolio Link 6 is required</span>
                        </div>
                        {/* end portfolio links */}
                        <div className=" ">
                            <div className=" w-full my-4 font-bold text-lg"> Upload Image </div>
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
                                            className="hidden absolute w-screen  "
                                        // onChange={handleFileChange}
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
                            {/* <button onClick={handleSubmit}>save image</button> */}

                        </div>

                        {/* <input type="file" onChange={handleFileChange} /> */}
                        {/* <button onClick={handleSubmit}>Upload Image</button> */}

                        <button
                            id="button"
                            type="button"
                            className="w-full px-6 py-3 mt-3 text-lg text-white transition-all duration-150 ease-linear rounded-lg shadow outline-none bg-pink-500 hover:bg-pink-600 hover:shadow-lg focus:outline-none"
                            onClick={onHandleSubmit}
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </div>
            <ToastContainer />
        </>
    )
}

export default Creator_edit_formpage