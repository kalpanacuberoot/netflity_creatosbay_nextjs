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
import Select from 'react-select';


const Creator_edit_formpage = () => {

    const Creator_data = Cookies.get('creator_profile_id'); // Get the cookie value

    let creator_profile_data = null; // Default value for creator_profile_data

    if (Creator_data) {
        try {
            creator_profile_data = JSON.parse(Creator_data); // Attempt to parse the JSON
        } catch (error) {
            console.error('Error parsing JSON:', error);
        }
    }

    console.log("creator_profile_datacreator_profile_data",creator_profile_data);

    const [name, setName] = useState(creator_profile_data?.user?.name || '');
    const [email, setEmail] = useState(creator_profile_data?.user?.email || '');
    const [city, setCity] = useState('');
    const [age, setAge] = useState(creator_profile_data?.age || '');
    const [gender, setGender] = useState( creator_profile_data?.gender || '');
    const [heightFeet, setHeightFeet] = useState('');
    const [heightInches, setHeightInches] = useState('');
    const [heightCm, setHeightCm] = useState('');
    const [weight, setWeight] = useState(creator_profile_data?.weight || '');
    const [bio, setBio] = useState(creator_profile_data?.bio || '');
    const [pets, setPets] = useState(creator_profile_data?.pets || '');
    const [kids, setKids] = useState(creator_profile_data?.kids || '');
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
    const [file, setFile] = useState(creator_profile_data?.profile_pic || null);
    const [previewImage, setPreviewImage] = useState(creator_profile_data?.profile_pic || null);
    const [selectedStateOption, setSelectedStateOption] = useState( null);

    const [selectedSkinOption, setSelectedSkinOption] = useState( null);
    const [selectedBodyOption, setSelectedBodyOption] = useState(null);
    const [selectedHairOption, setSelectedHairOption] = useState(null);
    const [selectedEyeOption, setSelectedEyeOption] = useState(null);
    const [selectedMultipleOptionsIds, setSelectedMultipleOptionsIds] = useState([]);
    // const options = ['Option 1', 'Option 2', 'Option 3', 'Option 4'];

    const [selectedItems, setSelectedItems] = useState([]);
    const [selectedItemsIds, setSelectedItemsIds] = useState([]);
    const [selectedlanguageItems, setSelectedlanguageItems] = useState( creator_profile_data?.languages || []);
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
            console.log('skintypes skintypes response:', responseData?.data?.data);
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


    // const handleStateChange = (event) => {
    //     // Update the selectedState state variable with the selected option's value
    //     setSelectedState(event.target.value);
    //     setSelectedshowvalue(true)
    // };


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

        try {
            let uploadedImageData = await handleSubmit();
            uploadedImageData = creator_profile_data?.profile_pic;

            console.log("uploadedImageData", uploadedImageData);

            if (uploadedImageData !== null || creator_profile_data?.profile_pic) {

                const cookieValue = JSON.parse(Cookies.get('creator_user_data'))
                console.log('categories cookieValue------------2', cookieValue?.token);

                const requestData = {
                    "user_id": cookieValue?.user?.id ,
                    "state_id": parseInt(selectedState, 10) || creator_profile_data?.state_id,
                    "city": city || creator_profile_data?.city,
                    "gender": gender || creator_profile_data?.gender,
                    "age": parseInt(age, 10) || creator_profile_data?.age,
                    "height": parseInt(heightCm, 10) || creator_profile_data?.height,
                    "weight": parseInt(weight, 10) || creator_profile_data?.weight,
                    "skin_id": parseInt(skinType, 10) || creator_profile_data?.skin_id,
                    "body_id": parseInt(bodyType, 10) || creator_profile_data?.body_id ,
                    "hair_id": parseInt(hairType, 10) || creator_profile_data?.hair_id,
                    "eye_id": parseInt(eyeType, 10) || creator_profile_data?.eye_id,
                    "pets": parseInt(pets, 10) || creator_profile_data?.pets,
                    "kids": parseInt(kids, 10) || creator_profile_data?.kids,
                    "bio": bio || creator_profile_data?.bio,
                    "profile_pic": uploadedImageData || creator_profile_data?.profile_pic,
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
                    console.log('creator edit API Response:', data);
                    setAllApiResponse(data?.data);
                    toast.success('Edit Profile Successfully', {
                        position: 'top-center',
                        autoClose: 2000,
                    });
                    Cookies.set('creator_profile_id',JSON.stringify(data?.data));
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

    const stateoptions = statesData?.map((state_name, index) => ({
        value: state_name?.id,
        label: state_name?.name,
    }));

    const cookiesStateValue = stateoptions?.find(option => option?.value === creator_profile_data?.state_id);

    console.log("cookiesStateValuecookiesStateValue",cookiesStateValue);

    const skinoptions = skinTypeData ?.map((state_name, index) => ({
        value: state_name?.id,
        label: state_name?.name,
    }));

    const cookiesSkinValue = skinoptions?.find(option => option?.value === creator_profile_data?.skin_id);

    console.log("skinoptionsskinoptions",skinoptions,cookiesSkinValue);

    const bodyoptions = bodyTypeData?.map((state_name, index) => ({
        value: state_name?.id,
        label: state_name?.name,
    }));

    const hairoptions = hairTypeData?.map((state_name, index) => ({
        value: state_name?.id,
        label: state_name?.name,
    }));

    const eyeoptions = eyeTypeData?.map((state_name, index) => ({
        value: state_name?.id,
        label: state_name?.name,
    }));

    const handleStateChange = (selectedOption) => {
        setSelectedStateOption(selectedOption);
    };

    const handleSkinChange = (selectedOption) => {
        setSelectedSkinOption(selectedOption);
    };

    const handleBodyChange = (selectedOption) => {
        setSelectedBodyOption(selectedOption);
    };

    const handleHairChange = (selectedOption) => {
        setSelectedHairOption(selectedOption);
    };

    const handleEyeChange = (selectedOption) => {
        setSelectedEyeOption(selectedOption);
    };

    const customStateStyles = {
        control: (provided) => ({
            ...provided,
            // borderColor: '#ca8a04',
            cursor:'pointer',
        }),
        menu: (provided) => ({
            ...provided,
            backgroundColor: 'white', // Background color for the entire dropdown menu
            cursor:'pointer',
        }),
        option: (provided, state) => ({
            ...provided,
            backgroundColor: state.isSelected ? 'blue' : 'white', // Change the background color as desired
            padding: '8px', // Add padding as desired
            cursor:'pointer',
        }),
    };


    console.log("statesData", creator_profile_data);



    return (
        <>
            <div className="min-h-screen bg-gray-100 p-0 sm:p-12 w-full">
                <div className="mx-auto w-full px-6 py-12 bg-white border-0 shadow-lg sm:rounded-3xl   xl:p-10 lg:p-10">

                    {/* <h1 className="text-4xl font-bold mb-8 text-center text-violet-600">Edit Profile</h1> */}
                    <div
                        style={{ background: Colors.invoice_gradient_clr }}
                        className="auto-cols-max p-3 rounded-md flex flex-row mb-5"
                    >
                        <div className="flex flex-row justify-between items-center  w-full">
                            <div className="text-2xl font-bold ps-5" style={{ color: Colors.white_clr }}>
                                Edit Profile
                            </div>
                        </div>

                    </div>
                    {/* <form id="form" noValidate> */}
                        <div className="flex justify-between">
                            <div className=" w-full"
                                style={{ textAlign: '-webkit-center' }}
                            >
                                <div className=" w-full my-4 font-bold text-lg text-center "> Upload Profile Image </div>
                                <div
                                    className="shadow-md border-dotted h-96 w-96 align-middle border-4 rounded-full bg-white py-4 px-6 flex flex-col items-center justify-center"
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
                                                style={{ maxWidth: '100%', maxHeight: '500px' }}
                                                width={100}
                                                height={200}
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
                                                >
                                                    Upload Your Profile Image
                                                </div>
                                                <p className="mt-1 text-sm text-gray-500 dark:text-gray-300  text-center" id="file_input_help">SVG, PNG, JPG or GIF</p>
                                            </>
                                        )}
                                    </label>

                                </div>
                                {/* <button onClick={handleSubmit}>save image</button> */}

                            </div>
                            <div className="w-full">
                                <div className=" w-full mb-5">
                                    <label htmlFor="name" className=" duration-300 top-3 -z-1 origin-0  font-bold">Full Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder=" "
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
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
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className=" pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2  appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
                                    />
                                    <span className="text-sm text-red-600 hidden" id="error">Email address is required</span>
                                </div>
                                <div className="flex">

                                    <div className=" w-full me-5">
                                        {/* <div>
                                            <legend className=" text-gray-500 text-base mb-2">Select Your State</legend>
                                            <Select
                                                options={stateoptions}
                                                value={selectedOptions}
                                                onChange={selectedStateOption}
                                                placeholder="Select an option"
                                                styles={customStateStyles}
                                            />

                                        </div> */}
                                        <label
                                            htmlFor="stateSelect" // Use the id attribute of the select element here
                                            className=" font-bold duration-300 top-3 -z-1 origin-0"
                                        >
                                            Select Your State
                                        </label>
                                        {/* <div className="dropdown_select pt-4">
                                            <select
                                                name="select"
                                                id="stateSelect" // Add an id attribute
                                                value={selectedState} // Set the value of the select element to the selectedState
                                                className=" pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none z-1 focus:outline-none focus:ring-0 focus:border-black border-gray-200"
                                                onChange={handleStateChange} // Add onChange event handler
                                            >
                                                <option value="" selected disabled hidden className=""></option>
                                                {statesData &&
                                                    statesData.map((state_name, index) => (
                                                        <option key={index} value={state_name?.id} className=" ">
                                                            {state_name?.name}
                                                        </option>
                                                    ))}
                                            </select>


                                            <span className="text-sm text-red-600 hidden" id="error">
                                                Option has to be selected
                                            </span>
                                        </div> */}
                                        <div className=" pt-4"
                                        >
                                            <Select
                                                value={selectedStateOption}
                                                onChange={handleStateChange}
                                                options={stateoptions || cookiesStateValue}
                                                placeholder="Select an option"
                                                styles={customStateStyles}
                                            // className="custom-select" // Add a custom class to the Select component
                                            // classNamePrefix="custom-select" // Add a custom class prefix
                                            />

                                            <span className="text-sm text-red-600 hidden" id="error">
                                                Option has to be selected
                                            </span>
                                        </div>


                                    </div>
                                    {/* <div className=" z-0 w-full mb-5">
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
                            </div> */}
                                </div>

                                <div className="flex mt-3">
                                    <fieldset className=" w-full p-px mb-5 me-5">
                                        <legend className="text-base   font-bold ">Gender</legend>
                                        <div className="block pt-4 pb-2 space-x-4 " >
                                            <label>
                                                <input
                                                    type="radio"
                                                    name="genderRadio"
                                                    // value="1"
                                                    value="male"
                                                    className="mr-2 text-black border-2 border-gray-300 focus:border-gray-300 focus:ring-black"
                                                    onChange={(e) => setGender(e.target.value)}
                                                    checked={creator_profile_data?.gender === 'male'}
                                                />
                                                Male
                                            </label>
                                            <label>
                                                <input
                                                    type="radio"
                                                    name="genderRadio"
                                                    // value="2"
                                                    value="female"
                                                    className="mr-2 text-black border-2 border-gray-300 focus:border-gray-300 focus:ring-black"
                                                    onChange={(e) => setGender(e.target.value)}
                                                    checked={creator_profile_data?.gender === 'female'}
                                                />
                                                Female
                                            </label>
                                            <label>
                                                <input
                                                    type="radio"
                                                    name="genderRadio"
                                                    // value="2"
                                                    value="other"
                                                    className="mr-2 text-black border-2 border-gray-300 focus:border-gray-300 focus:ring-black"
                                                    onChange={(e) => setGender(e.target.value)}
                                                    checked={creator_profile_data?.gender === 'other'}
                                                />
                                                Other
                                            </label>
                                        </div>
                                        <span className="text-sm text-red-600 hidden" id="error">Option has to be selected</span>
                                    </fieldset>

                                    <div className=" w-full mb-5">
                                        <label htmlFor="name" className=" font-bold duration-300 top-3 -z-1 origin-0">Age</label>
                                        <input
                                            type="text"
                                            name="name"
                                            placeholder=" "
                                            required
                                            value={age}
                                            onChange={(e) => setAge(e.target.value)}
                                            className=" pb-2 block w-full px-0 mt-0 bg-transparent border-0   border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
                                        />

                                        <span className="text-sm text-red-600 hidden" id="error">Name is required</span>
                                    </div>
                                </div>

                                <div className="flex ">

                                    <div className=" w-full mb-5 me-5 flex">
                                        <div className="w-full">
                                            <label htmlFor="name" className=" duration-300 top-3 -z-1 origin-0  font-bold">
                                                Height (Feet)

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
                                        &apos;&apos;
                                    </div>


                                    <div className=" w-full mb-5 flex">
                                        <div className="w-full">
                                            <label htmlFor="name" className=" duration-300 top-3 -z-1 origin-0  font-bold">
                                                Height (Inches)
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
                                        &apos;
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
                                    <div className=" w-full mb-5 me-5">
                                        <label htmlFor="name" className=" duration-300 top-3 -z-1 origin-0  font-bold">
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
                            </div>
                        </div>

                        <div className="flex">

                            <div className=" w-full mb-5 me-5">
                                {/* <label htmlFor="select" className=" pb-5 font-bold">Select Your Skin Type</label> */}
                                <legend className="  font-bold text-base mb-2">Select Your Skin Type</legend>
                                <Select
                                    value={selectedSkinOption}
                                    onChange={handleSkinChange}
                                    options={skinoptions}
                                    placeholder="Select an option"
                                    styles={customStateStyles}
                                />

                                {/* <select
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
                                </select> */}

                                <span className="text-sm text-red-600 hidden" id="error">Option has to be selected</span>
                            </div>

                            <div className=" w-full mb-5 me-5">
                                {/* <label htmlFor="select" className="  font-bold">Select Your Body Type</label> */}
                                <legend className="  font-bold text-base mb-2">Select Your Body Type</legend>
                                <Select
                                    value={selectedBodyOption}
                                    onChange={handleBodyChange}
                                    options={bodyoptions}
                                    placeholder="Select an option"
                                    styles={customStateStyles}
                                // className="custom-select" // Add a custom class to the Select component
                                // classNamePrefix="custom-select" // Add a custom class prefix
                                />
                                {/* <select
                                    name="select"
                                    value={bodyType}
                                    onChange={(e) => setBodyType(e.target.value)}
                                    className=" pb-2 block w-full px-0 mt-0 border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
                                >
                                    <option value="" selected disabled hidden></option>

                                    {bodyTypeData && bodyTypeData.map((body_name, index) => (
                                        <option key={index} className="p-10"
                                            value={body_name?.id}
                                        >{body_name?.name}</option>
                                    ))}
                                </select> */}

                                <span className="text-sm text-red-600 hidden" id="error">Option has to be selected</span>
                            </div>
                        </div>

                        <div className="flex">

                            <div className=" w-full mb-5 me-5">
                                {/* <label htmlFor="select" className=" duration-300 top-3 -z-1 origin-0  font-bold ">Select Your Hair Type</label> */}
                                <legend className="  font-bold text-base mb-2">Select Your Hair Type</legend>
                                <Select
                                    value={selectedHairOption}
                                    onChange={handleHairChange}
                                    options={hairoptions}
                                    placeholder="Select an option"
                                    styles={customStateStyles}
                                />

                        

                                <span className="text-sm text-red-600 hidden" id="error">Option has to be selected</span>
                            </div>

                            <div className=" w-full mb-5 me-5 ">
                                {/* <label htmlFor="select" className=" duration-300 top-3 -z-1 origin-0  font-bold">Select Your Eye Type</label> */}
                                <legend className="  font-bold text-base mb-2">Select Your Eye Type</legend>
                                <Select
                                    value={selectedEyeOption}
                                    onChange={handleEyeChange}
                                    options={eyeoptions}
                                    placeholder="Select an option"
                                    styles={customStateStyles}
                                />
                                <span className="text-sm text-red-600 hidden" id="error">Option has to be selected</span>
                            </div>
                        </div>


                        <div className="relative w-full mb-5 me-5">
                            <label htmlFor="message" className="text-base block mb-2  font-bold">Bio</label>
                            <textarea
                                value={bio}
                                onChange={(e) => setBio(e.target.value)}
                                id="message" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border  focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your answer here..."></textarea>
                        </div>


                        <div className="flex">
                            <fieldset className=" z-0 w-full p-px mb-5 me-5">
                                <legend className=" font-bold transform scale-75 -top-3 origin-0 text-xl">Pets</legend>
                                <div className="block pt-3 pb-2 space-x-4">
                                    <label>
                                        <input
                                            type="radio"
                                            name="petsRadio"
                                            value="1"
                                            // value={pets}
                                            onChange={(e) => setPets(e.target.value)}
                                            className="mr-2 text-black border-2 border-gray-300 focus:border-gray-300 focus:ring-black"
                                            checked={creator_profile_data?.pets === 1}

                                        />
                                        Yes
                                    </label>
                                    <label>
                                        <input
                                            type="radio"
                                            name="petsRadio"
                                            value="0"
                                            // value={pets}
                                            onChange={(e) => setPets(e.target.value)}
                                            className="mr-2 text-black border-2 border-gray-300 focus:border-gray-300 focus:ring-black"
                                            checked={creator_profile_data?.pets === 0}
                                        />
                                        No
                                    </label>

                                </div>
                                <span className="text-sm text-red-600 hidden" id="error">Option has to be selected</span>
                            </fieldset>

                            <fieldset className=" z-0 w-full p-px mb-5 me-5">
                                <legend className="  font-bold transform scale-75 -top-3 origin-0 text-xl">Kids</legend>
                                <div className="block pt-3 pb-2 space-x-4">
                                    <label>
                                        <input
                                            type="radio"
                                            name="kidsRadio"
                                            value="1"
                                            // value={kids}
                                            onChange={(e) => setKids(e.target.value)}
                                            className="mr-2 text-black border-2 border-gray-300 focus:border-gray-300 focus:ring-black"
                                            checked={creator_profile_data?.kids === 1}
                                       />
                                        Yes
                                    </label>
                                    <label>
                                        <input
                                            type="radio"
                                            name="kidsRadio"
                                            value="0"
                                            // value={kids}
                                            onChange={(e) => setKids(e.target.value)}
                                            className="mr-2 text-black border-2 border-gray-300 focus:border-gray-300 focus:ring-black"
                                            checked={creator_profile_data?.kids === 0}
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
                                <legend className=" font-bold text-base mb-2">Languages</legend>
                                <div className="">
                                    {languages.map((item, index) => (
                                        <label key={index} className="flex items-center py-1 platform_image_container cursor-pointer">
                                            <input
                                                type="checkbox"
                                                className="h-5 w-5 text-blue-600"
                                                checked={selectedlanguageItems.includes(item?.name)}
                                                onChange={() => toggleLanguageCheckbox(item)}
                                            />
                                            <span className="ml-2 capitalize">{item?.name}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>

                            <div className=" z-0 w-full mb-5">
                                <legend className="  font-bold text-base mb-2">Platforms</legend>
                                <div className="">

                                    {platform?.map((item, index) => (
                                        <label key={index} className="flex items-center py-1 platform_image_container cursor-pointer">
                                            <input
                                                type="checkbox"
                                                className="h-5 w-5 text-blue-600"
                                                checked={selectedItems.includes(item?.name)}
                                                onChange={() => toggleCheckbox(item)}
                                            />
                                            {/* <Image
                                                src={item?.logo}
                                                alt=""
                                                width={100} 
                                                height={80}
                                                className="platform_image"
                                            /> */}

                                            <span className="ml-2 capitalize">{item?.name}</span>
                                        </label>
                                    ))}
                                </div>

                            </div>
                        </div>


                        {/* start portfolio links */}
                        <div className=" w-full mb-4 font-bold  text-lg"> Portfolio Links </div>
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
                    {/* </form> */}
                </div>
            </div>
            <ToastContainer />
        </>
    )
}

export default Creator_edit_formpage