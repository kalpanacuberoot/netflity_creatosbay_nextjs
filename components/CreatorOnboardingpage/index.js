import { useEffect, useState } from "react";
import Images from "@/images";
import Image from "next/image";
import Cookies from "js-cookie";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
import Colors from "@/styles/Colors";
import Select from 'react-select';
import { url } from "@/generalfunation";
import { useRouter } from "next/router";
import Creator_MultiSelectDropdown from "./Creator_MultiSelectDropdown";


const CreatorOnboardingpage = () => {

    const router = useRouter();

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
    const [noYoutubeSubscribers, setNoYoutubeSubscribers] = useState('');
    const [noInstagramFollowers, setNoInstagramFollowers] = useState('');


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
    const [linkseven, setLinkseven] = useState('');
    const [linkeight, setLinkeight] = useState('');
    const [linknine, setLinknine] = useState('');
    const [allApiResponse, setAllApiResponse] = useState([]);
    const [file, setFile] = useState(null);
    const [previewImage, setPreviewImage] = useState(null);
    const [selectedStateOption, setSelectedStateOption] = useState(null);

    const [selectedSkinOption, setSelectedSkinOption] = useState(null);
    const [selectedBodyOption, setSelectedBodyOption] = useState(null);
    const [selectedHairOption, setSelectedHairOption] = useState(null);
    const [selectedEyeOption, setSelectedEyeOption] = useState(null);
    const [selectedMultipleOptionsIds, setSelectedMultipleOptionsIds] = useState([]);
    // const options = ['Option 1', 'Option 2', 'Option 3', 'Option 4'];

    const [selectedItems, setSelectedItems] = useState([]);
    const [selectedItemsIds, setSelectedItemsIds] = useState([]);
    const [selectedlanguageItems, setSelectedlanguageItems] = useState([]);
    const [selectedLanguageIds, setSelectedLanguageIds] = useState([]);
    const items = ['Youtube', 'Instagram'];
    const [selectedDataArray, setSelectedDataArray] = useState([]);
    // const [links, setLinks] = useState(['']);
    const [currentLinkIndex, setCurrentLinkIndex] = useState(6);
    const [linkCount, setLinkCount] = useState(6); // Initialize with the starting count of 7
    // const [links, setLinks] = useState(Array(linkCount).fill(''));
    // const [links, setLinks] = useState(['', '', '', '', '', '', '', '', '']);
    const [linkCounter, setLinkCounter] = useState(5);
    const [showPortfolios, setShowPortfolios] = useState(false);
    const [allLinksData, setAllLinksData] = useState([linkone, linktwo, linkthree, linkfour, linkfive, linksix, linkseven, linkeight, linknine]);
    // const [links, setLinks] = useState(['', '', '', '', '', '', '', '', '']);
    const [links, setLinks] = useState(Array(9).fill(''));

    const handleSelectedDataChange = (newSelectedDataArray) => {
        setSelectedDataArray(newSelectedDataArray);
    };
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
        const userData = Cookies.get('creator_user_data');
        if (userData) {
            const cookieValue = JSON.parse(userData);
            // const cookieValue = JSON.parse(Cookies.get('creator_user_data'))
            // console.log('categories cookieValue------------1', cookieValue?.token);

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
                console.log('states response:', responseData?.data?.data);
                setStatesData(responseData?.data?.data);
            } catch (error) {
                console.error('Error:', error);
                throw error;
            }
        } else {
            // Handle the case where the cookie is not found or doesn't contain valid JSON
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
            console.log('categories------ response:', responseData?.data?.data);
            setCategoriesData(responseData?.data?.data);
        } catch (error) {
            console.error('Error:', error);
            throw error;
        }

    };

    useEffect(() => {

        const cookieValue = Cookies.get('creator_user_data');
        if (!cookieValue) {
            router.push('/');
        }

        getAllStates();
        getAllSkinTypes();
        getAllBodyTypes();
        getAllHairTypes();
        getAllEyeTypes();
        getAllPlatformTypes();
        getAllCategories();

    }, []);

    console.log("categoriesDataskinType", pets);

    console.log("selectedItemsIds", selectedItems, selectedItemsIds, platform);


    const handleFileChange = (event) => {
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
                setFile('')
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

    // const convertToCm = () => {
    //     const feet = parseFloat(heightFeet) || 0;
    //     console.log("feet value",feet);
    //     const inches = parseFloat(heightInches) || 0;
    //     const totalInches = feet * 12 + inches;
    //     const totalCm = totalInches * 2.54;
    //     setHeightCm(totalCm.toFixed(2));
    // };

    const convertToCm = () => {
        const feetToCm = parseFloat(heightFeet) * 30.48;
        console.log("feetToCm value", feetToCm);
        const inchesToCm = parseFloat(heightInches) * 2.54;
        const totalHeightCm = feetToCm + inchesToCm;
        setHeightCm(totalHeightCm.toFixed(2)); // You can adjust the number of decimal places as needed
    };

    const handleHeightFeetChange = (e) => {
        setHeightFeet(e.target.value);
        convertToCm();
    };

    const handleHeightInchesChange = (e) => {
        setHeightInches(e.target.value);
        convertToCm();
    };

    console.log("heightCm", heightCm);
    console.log("allApiResponseallApiResponse", allApiResponse);
    const numericBodyId = parseInt(bodyType, 10);
    console.log("numericBodyId", numericBodyId);

    const onHandleSubmit = async (event) => {

        event.preventDefault();

        try {
            const uploadedImageData = await handleSubmit();

            console.log("uploadedImageData", uploadedImageData);

            if (uploadedImageData !== null) {

                const cookieValue = JSON.parse(Cookies.get('creator_user_data'))
                console.log('categories cookieValue------------2', cookieValue?.token);

                const requestData = {
                    "user_id": cookieValue?.user?.id,
                    "state_id": parseInt(selectedStateOption?.value, 10),
                    "city": 'luvk',
                    "gender": gender,
                    "age": parseInt(age, 10),
                    "height": parseInt(heightCm, 10),
                    "weight": parseInt(weight, 10),
                    "skin_id": parseInt(selectedSkinOption?.value, 10),
                    "body_id": parseInt(selectedBodyOption?.value, 10),
                    "hair_id": parseInt(selectedHairOption?.value, 10),
                    "eye_id": parseInt(selectedEyeOption?.value, 10),
                    "pets": parseInt(pets, 10),
                    "kids": parseInt(kids, 10),
                    "bio": bio,
                    "profile_pic": uploadedImageData,
                    "platforms": selectedItemsIds,
                    "languages": selectedLanguageIds,
                    "categories": selectedDataArray.map((item) => item?.value),
                    "instagram_followers": noInstagramFollowers,
                    "youtube_subscribers": noYoutubeSubscribers,
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
                    toast.success('Creator Profile is created Successfully', {
                        position: 'top-center',
                        autoClose: 2000,
                    });

                    setShowPortfolios(true)

                    // const creatorForm = document.getElementById('creatorForm');
                    // if (creatorForm) {
                    //     creatorForm.reset();
                    // }
                    Cookies.set('creator_profile_id', JSON.stringify(data?.data?.id));
                } else {
                    throw new Error('API Request Failed');
                }

            } else {
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

    const skinoptions = skinTypeData?.map((state_name, index) => ({
        value: state_name?.id,
        label: state_name?.name,
    }));

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

    const categoryoptions = categoriesData?.map((state_name, index) => ({
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
            cursor: 'pointer',
        }),
        menu: (provided) => ({
            ...provided,
            backgroundColor: 'white', // Background color for the entire dropdown menu
            cursor: 'pointer',
        }),
        option: (provided, state) => ({
            ...provided,
            backgroundColor: state.isSelected ? 'blue' : 'white', // Change the background color as desired
            padding: '8px', // Add padding as desired
            cursor: 'pointer',
        }),
    };

    console.log("selectedStateOption", selectedStateOption, selectedSkinOption, selectedBodyOption, selectedHairOption, selectedEyeOption);
    console.log("previewImage imagrddf", previewImage);
    console.log("multiple setLinks value", links);

    const videoLinks = [];
    const postLinks = [];

    links.forEach((link) => {
        try {
            const url = new URL(link);
            if (url.hostname === "www.youtube.com") {
                videoLinks.push(link);
            }
            else if (link.includes("www.instagram.com/reel")) {
                videoLinks.push(link);
            } else if (link.includes("www.instagram.com/p")) {
                postLinks.push(link);
            }
            //   else if (url.hostname === "www.instagram.com") {
            //     postLinks.push(link);
            //   }
        } catch (error) {
            // console.error(`Invalid URL: ${link}`);
            // toast.error("Plaese fill the valid urls", {
            //     position: 'top-center',
            //     autoClose: 5000,
            // });
        }
    });

    console.log("Video Links:", videoLinks, postLinks);
    console.log("Post Links:", postLinks);
    // const cookieValue = JSON.parse(Cookies.get('creator_user_data'));
    const userData = Cookies.get('creator_user_data');
    if (userData) {
        const cookieValue = JSON.parse(userData);
        const authToken = `Bearer ${cookieValue.token}`;
        const creatorId = Cookies.get('creator_profile_id');

        const apiUrl = `${url}/creatorportfolios`;

        async function postData(link) {
            const data = {
                creator_id: creatorId,
                platform_id: 1,
                link,
                type: "video",
                order: 0,
            };

            const response = await fetch(apiUrl, {
                method: "POST",
                headers: {
                    "Accept": "application/json",
                    "Authorization": authToken,
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                const data = await response.json();
                console.log(`Successfully added link: ${link}`, data?.data);
            } else {
                console.error(`Failed to add link: ${link}`);
            }
        }

        async function addVideoLinks() {
            for (const link of videoLinks) {
                await postData(link);
            }
        }

        addVideoLinks();
    } else {
        // Handle the case where the cookie is not found or doesn't contain valid JSON
    }

    if (userData) {
      const cookieValue = JSON.parse(userData);
      const authToken = `Bearer ${cookieValue.token}`;
      const creatorId = Cookies.get('creator_profile_id');
      const apiUrl = `${url}/creatorportfolios`;
      async function postImageData(link) {
        const data = {
            creator_id: creatorId,
            platform_id: 1,
            link,
            type: "post",
            order: 1,
        };

        const response = await fetch(apiUrl, {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Authorization": authToken,
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });

        if (response.ok) {
            const data = await response.json();
            console.log(`Successfully added link: ${link}`, data?.data);
        } else {
            console.error(`Failed to add link: ${link}`);
        }
    }

    async function addPostLinks() {
        for (const link of postLinks) {
            await postImageData(link);
        }
    }

    addPostLinks();
    } else {
      // Handle the case where the cookie is not found or doesn't contain valid JSON
    }
    
    const handleLinkChange = (index, newValue) => {
        const updatedLinks = [...links];
        updatedLinks[index] = newValue;
        setLinks(updatedLinks);
    };


    console.log("allLinksData", allLinksData);

    const isSubmitDisabled = links.filter(link => link).length < 6;
    const isHttpValid = links.every(link => link.startsWith('http://') || link.startsWith('https://'));
    console.log("isHttpValid", isHttpValid, isSubmitDisabled);
    const handleSubmitLinks = () => {
        console.log('All Link Values:', links);
        if (isHttpValid && !isSubmitDisabled) {
            toast.error("Please fill out all 6 mandatory fields. and show all the valid urls", {
                position: 'top-center',
                autoClose: 5000,
            });

        } else {
            
            toast.success("Creator Portfolios is Created Successfully", {
                position: 'top-center',
                autoClose: 15000,
            });
            router.push('/');

            // router.push('/');
        }

    };

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
                    <div id="creatorForm">
                        {!showPortfolios &&
                            <>
                                <div className="flex justify-between">
                                    <div className=" w-full"
                                        style={{ textAlign: '-webkit-center' }}
                                    >
                                        <div className=" w-full my-4 font-bold text-lg
                                 text-center "> Upload Profile Image </div>
                                        <div
                                            className="cursor-pointer shadow-md border-dotted h-96 w-96 align-middle border-4 rounded-full bg-white py-4 px-6 flex flex-col items-center justify-center"
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
                                                {previewImage && file && (
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
                                            <div className=" w-full mb-5">
                                                <label
                                                    htmlFor="stateSelect" // Use the id attribute of the select element here
                                                    className=" font-bold duration-300 top-3 -z-1 origin-0"
                                                >
                                                    Select Your State
                                                </label>
                                                <div className=" pt-4"
                                                >
                                                    <Select
                                                        value={selectedStateOption}
                                                        onChange={handleStateChange}
                                                        options={stateoptions}
                                                        placeholder="Select an option"
                                                        styles={customStateStyles}
                                                    />
                                                    <span className="text-sm text-red-600 hidden" id="error">
                                                        Option has to be selected
                                                    </span>
                                                </div>
                                            </div>
                                        </div>

                                        {/* <div className="flex">
                                <div className=" w-full mb-5 me-5">
                                    <label htmlFor="name" className=" duration-300 top-3 -z-1 origin-0  font-bold">
                                        City
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder=" "
                                        required
                                        value={city}
                                        onChange={(e) => setCity(e.target.value)}
                                        className=" pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
                                    />
                                    <span className="text-sm text-red-600 hidden" id="error">Name is required</span>
                                </div>
                            </div> */}

                                        <div className="flex mt-3">
                                            <fieldset className=" w-full p-px mb-5 me-5">
                                                <legend className="text-base font-bold ">Gender</legend>
                                                <div className="block pt-4 pb-2 space-x-4 " >
                                                    <label>
                                                        <input
                                                            type="radio"
                                                            name="genderRadio"
                                                            value="male"
                                                            className="mr-2 text-black border-2 border-gray-300 focus:border-gray-300 focus:ring-black"
                                                            onChange={(e) => setGender(e.target.value)}
                                                        />
                                                        Male
                                                    </label>
                                                    <label>
                                                        <input
                                                            type="radio"
                                                            name="genderRadio"
                                                            value="female"
                                                            className="mr-2 text-black border-2 border-gray-300 focus:border-gray-300 focus:ring-black"
                                                            onChange={(e) => setGender(e.target.value)}
                                                        />
                                                        Female
                                                    </label>
                                                    <label>
                                                        <input
                                                            type="radio"
                                                            name="genderRadio"
                                                            value="other"
                                                            className="mr-2 text-black border-2 border-gray-300 focus:border-gray-300 focus:ring-black"
                                                            onChange={(e) => setGender(e.target.value)}
                                                        />
                                                        Other
                                                    </label>
                                                </div>
                                                <span className="text-sm text-red-600 hidden" id="error">Option has to be selected</span>
                                            </fieldset>
                                        </div>
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

                                        <div className="flex ">

                                            <div className=" w-full mb-5 me-5 flex">
                                                <div className="w-full">
                                                    <label htmlFor="name" className=" duration-300 top-3 -z-1 origin-0  font-bold">
                                                        Height (Feet)

                                                    </label>
                                                    <input
                                                        type="number"
                                                        name="name"
                                                        placeholder=" "
                                                        required
                                                        value={heightFeet}
                                                        onChange={handleHeightFeetChange}
                                                        // onChange={(e) => setHeightFeet(e.target.value)}
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
                                                        type="number"
                                                        name="name"
                                                        placeholder=" "
                                                        required
                                                        value={heightInches}
                                                        // onChange={(e) => setHeightInches(e.target.value)}
                                                        onChange={handleHeightInchesChange}
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
                                                    className="w-20 edit_clr"> Convert = </button>
                                                {heightCm && (
                                                    <div className="w-14">
                                                        <div> {heightCm} cm</div>
                                                    </div>
                                                )}
                                            </div>
                                        </div>

                                        <div className="flex">
                                            <div className=" w-full mb-5 me-5">
                                                <label htmlFor="name" className=" duration-300 top-3 -z-1 origin-0  font-bold">
                                                    Weight
                                                </label>
                                                <input
                                                    type="number"
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
                                        <legend className="  font-bold text-base mb-2">Select Your Skin Type</legend>
                                        <Select
                                            value={selectedSkinOption}
                                            onChange={handleSkinChange}
                                            options={skinoptions}
                                            placeholder="Select an option"
                                            styles={customStateStyles}
                                        />
                                        <span className="text-sm text-red-600 hidden" id="error">Option has to be selected</span>
                                    </div>

                                    <div className=" w-full mb-5 me-5">
                                        <legend className="  font-bold text-base mb-2">Select Your Body Type</legend>
                                        <Select
                                            value={selectedBodyOption}
                                            onChange={handleBodyChange}
                                            options={bodyoptions}
                                            placeholder="Select an option"
                                            styles={customStateStyles}
                                        />
                                        <span className="text-sm text-red-600 hidden" id="error">Option has to be selected</span>
                                    </div>
                                </div>

                                <div className="flex">
                                    <div className=" w-full mb-5 me-5">
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
                                                    onChange={(e) => setPets(e.target.value)}
                                                    className="mr-2 text-black border-2 border-gray-300 focus:border-gray-300 focus:ring-black"
                                                />
                                                Yes
                                            </label>
                                            <label>
                                                <input
                                                    type="radio"
                                                    name="petsRadio"
                                                    value="0"
                                                    onChange={(e) => setPets(e.target.value)}
                                                    className="mr-2 text-black border-2 border-gray-300 focus:border-gray-300 focus:ring-black"
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
                                                    onChange={(e) => setKids(e.target.value)}
                                                    className="mr-2 text-black border-2 border-gray-300 focus:border-gray-300 focus:ring-black"
                                                />
                                                Yes
                                            </label>
                                            <label>
                                                <input
                                                    type="radio"
                                                    name="kidsRadio"
                                                    value="0"
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
                                                    <span className="ml-2 capitalize">{item?.name}</span>
                                                </label>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="flex flex-col w-full">
                                        <div className=" w-full mb-5">
                                            <label htmlFor="name" className=" font-bold duration-300 top-3 -z-1 origin-0">No. Of Youtube Subscribers</label>
                                            <input
                                                type="number"
                                                name="name"
                                                placeholder=" "
                                                required
                                                value={noYoutubeSubscribers}
                                                onChange={(e) => setNoYoutubeSubscribers(e.target.value)}
                                                className=" pb-2 block w-full px-0 mt-0 bg-transparent border-0   border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
                                            />

                                            <span className="text-sm text-red-600 hidden" id="error">Name is required</span>
                                        </div>
                                        <div className=" w-full mb-5">
                                            <label htmlFor="name" className=" font-bold duration-300 top-3 -z-1 origin-0">No. Of Instagram Followers</label>
                                            <input
                                                type="number"
                                                name="name"
                                                placeholder=" "
                                                required
                                                value={noInstagramFollowers}
                                                onChange={(e) => setNoInstagramFollowers(e.target.value)}
                                                className=" pb-2 block w-full px-0 mt-0 bg-transparent border-0   border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
                                            />

                                            <span className="text-sm text-red-600 hidden" id="error">Name is required</span>
                                        </div>
                                    </div>
                                </div>
                                <button
                                    id="button"
                                    type="button"
                                    className="w-full px-6 py-3 mt-3 text-lg text-white transition-all duration-150 ease-linear rounded-lg shadow outline-none bg-pink-500 hover:bg-pink-600 hover:shadow-lg focus:outline-none"
                                    onClick={onHandleSubmit}
                                // onClick={handleSubmitLinks}
                                >
                                    Submit
                                </button>
                            </>
                        }
                        {showPortfolios &&
                            <>
                                {/* <div className="shadow-lg border rounded-md p-10">
                                    <div className=" w-full mb-4 font-bold  text-lg"> Portfolio Links </div>
                                    <div className="flex items-center justify-between mb-5">
                                        <div className="text-sm ">
                                            Paste link of your post or reel from instagram or post links from your youtube links or shorts
                                        </div>
                                       
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

                                    <div className=" flex w-full mb-5 items-center">
                                        <label htmlFor="password" className=" duration-300 origin-0 text-gray-500 w-28">Link 7</label>
                                        <input
                                            type="url"
                                            name="password"
                                            placeholder=" "
                                            value={linkseven}
                                            onChange={(e) => setLinkseven(e.target.value)}
                                            className=" w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        />
                                        <span className="text-sm text-red-600 hidden" id="error">Portfolio Link 6 is required</span>
                                    </div>
                                    <div className=" flex w-full mb-5 items-center">
                                        <label htmlFor="password" className=" duration-300 origin-0 text-gray-500 w-28">Link 8</label>
                                        <input
                                            type="url"
                                            name="password"
                                            placeholder=" "
                                            value={linkeight}
                                            onChange={(e) => setLinkeight(e.target.value)}
                                            className=" w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        />
                                        <span className="text-sm text-red-600 hidden" id="error">Portfolio Link 6 is required</span>
                                    </div>
                                    <div className=" flex w-full mb-5 items-center">
                                        <label htmlFor="password" className=" duration-300 origin-0 text-gray-500 w-28">Link 9</label>
                                        <input
                                            type="url"
                                            name="password"
                                            placeholder=" "
                                            value={linknine}
                                            onChange={(e) => setLinknine(e.target.value)}
                                            className=" w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        />
                                        <span className="text-sm text-red-600 hidden" id="error">Portfolio Link 6 is required</span>
                                    </div>
                                </div> */}
                                <div className="shadow-lg border rounded-md p-10">
                                    <div className=" w-full mb-4 font-bold  text-lg"> Portfolio Links </div>
                                    <div className="flex items-center justify-between mb-5">
                                        <div className="text-sm ">
                                            Paste link of your post or reel from instagram or post links from your youtube links or shorts
                                        </div>

                                    </div>
                                    {links.map((link, index) => (
                                        <div className="flex w-full mb-5 items-center" key={index}>
                                            <label htmlFor={`link${index + 1}`} className="duration-300 origin-0 text-gray-500 w-28">
                                                {`Link ${index + 1}`}
                                            </label>
                                            <input
                                                type="url"
                                                name={`link${index + 1}`}
                                                placeholder=" "
                                                value={link}
                                                onChange={(e) => handleLinkChange(index, e.target.value)}
                                                className="w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                            />
                                            <span className="text-sm text-red-600 hidden" id="error">
                                                {`Portfolio Link ${index + 1} is required`}
                                            </span>
                                        </div>
                                    ))}

                                    {isSubmitDisabled && (
                                        <div className="text-red-600">
                                            Please fill out all 6 mandatory fields.
                                        </div>
                                    )}
                                </div>

                                <button
                                    // className="text-sm bg-purple-800 text-white px-3 py-1 rounded-lg mt-10"
                                    className="w-full px-6 py-3 mt-3 text-lg text-white transition-all duration-150 ease-linear rounded-lg shadow outline-none bg-pink-500 hover:bg-pink-600 hover:shadow-lg focus:outline-none"
                                    onClick={handleSubmitLinks}
                                >
                                    Submit All Links
                                </button>


                                {/* <button className="text-sm bg-green-800 text-white px-3 py-1 rounded-lg"
                                onClick={handleAddLink}
                            >Add More Link</button> */}
                                {/* {linkCounter < 8 && (
                                            <button
                                                className="text-sm bg-green-800 text-white px-3 py-1 rounded-lg"
                                                onClick={handleAddLink}
                                            >
                                                Add More Link
                                            </button>
                                        )} */}
                                {/* {links.slice(6, linkCounter + 1).map((link, index) => (
                                        <div key={index} className="flex w-full mb-5 items-center">
                                            <label htmlFor={`link${index + 7}`} className="duration-300 origin-0 text-gray-500 w-28">
                                                Link {index + 7}
                                            </label>
                                            <input
                                                type="url"
                                                name={`link${index + 7}`}
                                                placeholder=" "
                                                value={link}
                                                onChange={(e) => handleLinkChange(index + 6, e.target.value)}
                                                className="w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                            />
                                            <span className="text-sm text-red-600 hidden" id="error">
                                                {`Portfolio Link ${index + 7} is required`}
                                            </span>
                                        </div>
                                    ))} */}
                                {/* {links.map((link, index) => (
                            <div key={index} className="flex w-full mb-5 items-center">
                                <label htmlFor={`link${index + 1}`} className="duration-300 origin-0 text-gray-500 w-28">
                                    Link {index + 1}
                                </label>
                                <input
                                    type="url"
                                    name={`link${index + 1}`}
                                    placeholder=" "
                                    value={link}
                                    onChange={(e) => handleLinkChange(index, e.target.value)}
                                    className="w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                />
                                <span className="text-sm text-red-600 hidden" id="error">
                                    {`Portfolio Link ${index + 1} is required`}
                                </span>
                            </div>
                        ))} */}

                            </>
                        }
                    </div>
                </div>
            </div >
            <ToastContainer />
        </>
    )
}

export default CreatorOnboardingpage