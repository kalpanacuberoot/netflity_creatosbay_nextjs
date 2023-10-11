import { apiCall, url } from "@/generalfunctions";
import Images from "@/images";
import Colors from "@/styles/Colors"
import Cookies from "js-cookie";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
import CreatorVideoEmbed from "../CreatorVideoEmbed";

const Creator_chats = (campaignBrandData) => {

    console.log("campaignBrandData.campaignBrandData?.campaign?.brand?.name", campaignBrandData.campaignBrandData?.campaign);

    const router = useRouter();
    const [allMessages, setAllMessages] = useState([]);
    const [loading, setLoading] = useState(false);
    const [msgtext, setMsgtext] = useState([]);
    const [modalOpen, setModalOpen] = useState(false); // State to track modal visibility
    const [videoUrl, setVideoUrl] = useState(''); // State to store video URL
    // const [selectedFile, setSelectedFile] = useState(null);
    const [file, setFile] = useState(null);
    const [totalMessages, setTotalMessages] = useState(0);
    const fileInputRef = useRef(null);
    const chatContainerRef = useRef(null);

    const handleButtonClick = () => {
        fileInputRef.current.click();
    };

    console.log("fileInputRef", file?.name);

    const handleFileChange = (e) => {
        // setSelectedFile(e.target.files[0]);
        // setFile(e.target.files[0]);
        const selectedFile = e.target.files[0];
        if (selectedFile) {
            // Check if the selected file is a video
            if (selectedFile.type.startsWith('image/') ||selectedFile.type.startsWith('video/')) {
                // Set both file state and msgtext state
                setFile(selectedFile);
                setMsgtext(selectedFile?.name);
            } else {
                alert('Please select a valid video file.');
                // Clear the file input
                fileInputRef.current.value = '';
            }
        }
    };

    const handleUpload = async (e) => {

        e.preventDefault();

        if (!file) {
            alert('No file selected.');
            return;
        }
        // if (file) {
        //     const fileType = file.type;
        //     if (fileType.startsWith('image/') || fileType.startsWith('video/')) {
        //         const uploadResponse = await handleUpload();
        //         if (uploadResponse) {
        //             messageType = "file";
        //             formData.append("data", uploadResponse?.url);
        //         }
        //     }
        // } else {
        //     messageType = "text";
        //     formData.append("data", msgtext);
        // }


        const formData = new FormData();
        formData.append('file', file);

        const cookieValue = JSON.parse(Cookies.get('creator_user_data'))
        console.log('categories cookieValue------------2', cookieValue?.token);

        // const fileType = file.type; // Get the file type
        const headers = { // Define headers here
            'Authorization': `Bearer ${cookieValue?.token}`,
            // 'Content-Type': 'multipart/form-data'
        };

        try {
            const response = await fetch(`${url}/saveimage`, {
                method: 'POST',
                headers,
                body: formData,
            });

            console.log("creator chat upload portfolio", response);
            if (response.ok) {
                console.log("creator file uploaded", file);
                const data = await response.json();
                setFile(data?.url)
                console.log("image response ok", data?.url);
                toast.success('Image Uploaded Successfully', {
                    position: 'top-center',
                    autoClose: 2000,
                });
                return data;
            }
            else if (response.status === 413) {
                // Handle Request Entity Too Large (status code 413)
                toast.error('Request Entity Too Large', {
                    position: 'top-center',
                    autoClose: 3000,
                });
                return null;
            }
            else if (response.status === 404) {
                // Handle Not Found (status code 404) or other specific errors
                console.error('File not found or other specific error.');
                router.push('/login');
                return null;
            }
            else {
                toast.error('Image upload failed', {
                    position: 'top-center',
                    autoClose: 3000,
                });
                return null;
            }
        } catch (error) {
            console.error('An error occurred:', error);
            return null;
        }
    };

    console.log("sleectded craetor file", file);

    const openVideoModal = (url) => {
        setVideoUrl(url);
        setModalOpen(true);
    };

    const closeVideoModal = () => {
        setVideoUrl('');
        setModalOpen(false);
    };

    const getAllMessages = async () => {

        setLoading(true)
        const cookieValue = JSON.parse(Cookies.get('creator_user_data'));

        try {

            const requestOptions = {

                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${cookieValue?.token}` // Include the token if provided
                },
            }

            const params = new URLSearchParams({
                "brand": campaignBrandData?.campaignBrandData?.campaign?.brand?.id,
                "creator": campaignBrandData?.campaignBrandData?.creator_id,
                "campaign": campaignBrandData?.campaignBrandData?.campaign_id
            });


            const response = await fetch(`${url}/messages?${params.toString()}`, requestOptions);
            console.log('campaigns communication------', response)

            if (response.status === 401) {
                toast.error("Session Expired: Please login again to continue.", {
                    position: 'top-center',
                    autoClose: 5000,
                });
                router.push('/login');
            } else if (response.status === 429) {
                toast.error("Too many requests: Please wait for a few minutes to try and login again.", {
                    position: 'top-center',
                    autoClose: 5000,
                });
                router.push('/login');
                // showToastMessage("Too many requests: Please wait for a few minutes to try and login again.");
            } else if (response.status === 500) {
                toast.error("Server Error: Please wait while we fix this problem for you.", {
                    position: 'top-center',
                    autoClose: 5000,
                });
                router.push('/login');
            } else if (!response.ok) {
                throw new Error(`Request failed with status: ${response.status}`);
            }

            // return await response.json();
            const responseData = await response.json();
            // console.log("responseData messgaes",Math.ceil(responseData.data.total / responseData.data.per_page));
            console.log("responseData messgaes", Math.ceil(responseData.data.total / responseData.data.per_page));
            console.log('all creator messages chats :', responseData.data.data);
            setTotalMessages(responseData.data.total);
            // setAllMessages(responseData?.data?.data)
            // setAllMessages(responseData?.data?.data)
            setLoading(false)
            scrollToBottom();

        } catch (error) {
            console.error('Error:', error);
            throw error;
        }

    };

    const handleClick = async () => {

        
        if (!file && !msgtext) {
            alert('Please select a file or enter text.');
            return;
        }
        // if (file) {
        //     const fileType = file.type;
        //     if (fileType.startsWith('image/') || fileType.startsWith('video/')) {
        //         const uploadResponse = await handleUpload();
        //         if (uploadResponse) {
        //             messageType = "file";
        //             formData.append("data", uploadResponse?.url);
        //         }
        //     }
        // } else {
        //     messageType = "text";
        //     formData.append("data", msgtext);
        // }
        // e.preventDefault();


        const cookieValue = JSON.parse(Cookies.get('creator_user_data'));
        console.log('campaigns cookieValue------------1', cookieValue?.token);

        try {
            const messageType = "text"; // Default to "text"

            const formData = new FormData();
            formData.append("brand_id", campaignBrandData?.campaignBrandData?.campaign?.brand?.id);
            formData.append("campaign_id", campaignBrandData?.campaignBrandData?.campaign_id);
            formData.append("creator_id", campaignBrandData?.campaignBrandData?.creator_id);
            formData.append("sender_type", "creator");
            formData.append("type", messageType);

            if (file) {
                const fileType = file.type;
                if (fileType.startsWith('image/') || fileType.startsWith('video/')) {
                    const uploadResponse = await handleUpload();
                    console.log("uploadResponseuploadResponse",uploadResponse);
                    if (uploadResponse) {
                        // messageType = "text";
                        // formData.append("type", messageType);
                        // formData.append("file", file); // Append the file
                        formData.append("data", uploadResponse?.url);
                    }
                }
            }
            else {
                // messageType = "text";
                // formData.append("type", messageType);
                formData.append("data", msgtext);
            }

            const headers = {
                'Authorization': `Bearer ${cookieValue?.token}`,
            }
            const postResponse = await fetch(`${url}/messages`, {
                method: 'POST',
                headers: headers,
                body: formData
            });

            const responseData = await postResponse.json();

            console.log("handleClick creator1", postResponse, responseData);
            console.log("handleClick responseData", responseData);

            if (responseData.status === 'success') {
                console.log('POST response creator chats type-------------:', responseData?.data);

                toast.success("Message is Sent", {
                    position: 'top-center',
                    autoClose: 5000,
                });
                setMsgtext("");
                setFile(null);
                await getAllMessages();
                setLoading(false)

            } else {
                toast.error("Too many requests: Please wait for a few minutes to try and login again.", {
                    position: 'top-center',
                    autoClose: 5000,
                });
            }
        } catch (error) {
            console.log("cahts creator handleClickerror", error);
        }
    };

    // const loadMore = () => {
    //     const loadItems = totalMessages - 10;
    //     console.log("loadItems", loadItems, totalMessages);
    //     setTotalMessages(loadItems);


    // }

    const loadMore = async () => {
        const loadItems = allMessages.length + 10;
        console.log("loadItems", loadItems, allMessages.length);

        const cookieValue = JSON.parse(Cookies.get('creator_user_data'));
        const brandId = campaignBrandData?.campaignBrandData?.campaign?.brand?.id;
        const creatorId = campaignBrandData?.campaignBrandData?.creator_id;
        const campaignId = campaignBrandData?.campaignBrandData?.campaign_id;

        const requestOptions = {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                Authorization: `Bearer ${cookieValue?.token}`,
            },
        };

        try {
            const response = await fetch(
                `${url}/messages?brand=${brandId}&creator=${creatorId}&campaign=${campaignId}&per_page=${loadItems}`,
                requestOptions
            );

            if (!response.ok) {
                throw new Error(`Request failed with status: ${response.status}`);
            }

            const data = await response.json();
            const newMessages = data.data.data;

            setTotalMessages(loadItems);
            setAllMessages(newMessages);
        } catch (error) {
            console.error('Error:', error);
        }
    };


    useEffect(() => {
        if (totalMessages > 0) {

            const cookieValue = JSON.parse(Cookies.get('creator_user_data'));

            // const perPage = totalMessages; // Set 'per_page' to total count
            const perPage = 10;
            const change_per_page = Math.ceil(totalMessages / perPage);
            console.log("change_per_page", change_per_page, totalMessages, perPage);
            console.log("totalMessages", totalMessages);
            const brandId = campaignBrandData?.campaignBrandData?.campaign?.brand?.id;
            const creatorId = campaignBrandData?.campaignBrandData?.creator_id;
            const campaignId = campaignBrandData?.campaignBrandData?.campaign_id;

            const requestOptions = {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${cookieValue?.token}`,
                },
            };

            const fetchMessages = async () => {
                try {
                    const response = await fetch(
                        `${url}/messages?brand=${brandId}&creator=${creatorId}&campaign=${campaignId}&current_page=${change_per_page}`,
                        requestOptions
                    );

                    if (!response.ok) {
                        throw new Error(`Request failed with status: ${response.status}`);
                    }

                    const data = await response.json();
                    // setAllMessages(data.data); // Assuming 'data' contains the messages array
                    setAllMessages(data.data.data)
                    console.log("responseData changebpermessgaes", Math.ceil(data.data.total / data.data.per_page));
                    setLoading(false);
                } catch (error) {
                    console.error('Error:', error);
                    setLoading(false);
                }
            };

            fetchMessages();
        }
    }, [totalMessages]);

    useEffect(() => {

        getAllMessages();

        if (campaignBrandData) {
            getAllMessages();
        }

    }, [campaignBrandData]);

    // const allMessagesdata = [
    //     {
    //         "id": 2,
    //         "brand_id": 1,
    //         "campaign_id": 1,
    //         "creator_id": 1,
    //         "sender_type": "creator",
    //         "type": "video",
    //         "content": 1,
    //         "converted": 0,
    //         "revision": 0,
    //         // "data": "https://www.youtube.com/watch?v=KDjmKFjxXt0",
    //         "data": "https://www.instagram.com/reel/CwWw3_BoIGL/",
    //         "seen": null,
    //         "created_at": "2023-09-28T15:15:53.000000Z",
    //         "updated_at": "2023-09-28T15:15:53.000000Z"
    //     },
    //     {
    //         "id": 3,
    //         "brand_id": 1,
    //         "campaign_id": 1,
    //         "creator_id": 1,
    //         "sender_type": "creator",
    //         "type": "text",
    //         "content": 0,
    //         "converted": 0,
    //         "revision": 0,
    //         "data": "Hello, how are you?",
    //         "seen": null,
    //         "created_at": "2023-09-29T06:40:52.000000Z",
    //         "updated_at": "2023-09-29T06:40:52.000000Z"
    //     }
    // ]

    const scrollToBottom = () => {
        if (chatContainerRef.current) {
            chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
        }
    };

    let userProfileData = Cookies.get('creator_profile_id');

    if (userProfileData === null || undefined) {

        router.push('/login')
    } else {

        try {
            userProfileData = JSON.parse(userProfileData);

        } catch (error) {
            console.error('Error parsing userProfileData:', error);
        }
    }



    console.log("userProfileDatauserProfileData", userProfileData);



    console.log("creator allMessages", allMessages);

    return (
        <>
            {loading ? ( // Show loader if loading is true
                <div className="w-full h-full flex items-center justify-center">
                    <Image
                        width={100}
                        height={100}
                        alt=""
                        src={Images.Loader}
                    />
                </div>
            ) : (
                <>

                    <div className="chat-container px-5 pt-5 rounded overflow-y-auto" ref={chatContainerRef} style={{ scrollBehavior: 'smooth' }}>
                        {allMessages.length < totalMessages &&
                            <>

                                <button onClick={loadMore}
                                    className="w-full text-sm bg-green-600 text-white py-1 rounded text-center"
                                >
                                    Click on Load More button to get older Messages
                                </button>

                            </>
                        }
                        {allMessages.length > 0 &&
                            allMessages.map((item, index) => {
                                const isCreatorSender = item.sender_type === 'creator';
                                const isBrandReceiver = item.sender_type === 'brand';
                                const isLeftAlign = isBrandReceiver;
                                const isRightAlign = isCreatorSender;
                                const messageClass = isLeftAlign ? 'left-message' : isRightAlign ? 'right-message' : '';
                                const textMessageClass = isLeftAlign ? 'left-text-message' : isRightAlign ? 'right-text-message' : '';

                                console.log("messageClass", isLeftAlign, isRightAlign);

                                const timestamp = item?.updated_at;
                                const dateObj = new Date(timestamp);

                                const day = dateObj.getUTCDate().toString().padStart(2, '0');
                                const month = (dateObj.getUTCMonth() + 1).toString().padStart(2, '0');
                                const year = dateObj.getUTCFullYear();
                                const formattedDate = `${day}-${month}-${year}`;
                                console.log('formattedDate', formattedDate); // Output: "07-10-2023"


                                const hours = dateObj.getHours().toString().padStart(2, '0');
                                const minutes = dateObj.getMinutes().toString().padStart(2, '0');

                                const time = `${hours}:${minutes}`;

                                console.log(time);
                                const isImageLink = item.content === 0 && /\.(jpg|jpeg|png|gif|bmp|webp)$/i.test(item.data);
                                const isVideoLink = item.content === 0 && /\.(mp4|avi|mkv|mov|flv|webm|wmv)$/i.test(item.data);
                                const isYouTubeVideoLink = /youtube\.com\/(watch\?v=|shorts\/)/i.test(item.data);
                                const isInstagramVideoLink = item.data.startsWith('https://www.instagram.com/reel');

                                console.log("isImageLink", isImageLink);

                                // if (item?.content === 1 || (item.type === 'video')) {
                                //     return (
                                //         <>
                                //             <div className="px-10 py-5 overflow-y-auto" style={{ backgroundColor: Colors.light_bg_clr }} key={index}>
                                //                 <div className={`chat-message shadow-lg ${messageClass}`}>
                                //                     {item.type === 'video' ? (
                                //                         <>
                                //                             <CreatorVideoEmbed url={item?.data} />
                                //                         </>
                                //                     ) : (
                                //                         <>
                                //                             <a href={item?.data} target="_blank" rel="noopener noreferrer">
                                //                                 {item?.type === 'text' ? (
                                //                                     <a
                                //                                         href={item?.data}
                                //                                         target="_blank"
                                //                                         rel="noopener noreferrer"
                                //                                         className="bg-blue-800">
                                //                                         {item?.data}
                                //                                     </a>
                                //                                 ) : (
                                //                                     <span>
                                //                                         <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                //                                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                                //                                         </svg>
                                //                                         Download File
                                //                                     </span>
                                //                                 )}
                                //                             </a>
                                //                         </>
                                //                     )}
                                //                 </div>
                                //             </div>
                                //         </>
                                //     );
                                // } else {
                                //     return (
                                //         <div className="px-10 py-5 overflow-y-auto" style={{ backgroundColor: Colors.light_bg_clr }} key={index}>
                                //             <div className={`chat-message shadow-lg ${messageClass}`}>
                                //                 {item.data}
                                //             </div>
                                //             <p className={` ${textMessageClass}`}>{formattedtweleveTime}</p>
                                //         </div>
                                //     );
                                // }
                                if (isImageLink) {

                                    return (
                                        <>
                                            <div className="w-full">
                                                {item?.sender_type === 'brand' &&
                                                    <div className="px-5 py-5 overflow-y-auto w-full" style={{ backgroundColor: Colors.light_bg_clr }} key={index}>
                                                        <div className={`chat-message shadow-lg ${!messageClass}`} style={{ padding: 0 }}>
                                                            <Image
                                                                src={userProfileData?.profile_pic}
                                                                width={44}
                                                                height={44}
                                                                className="rounded-full shadow-lg me-2"
                                                                alt=""
                                                            />
                                                            <div className="">
                                                                <div className="flex items-center justify-between">
                                                                    {/* <h4 className="font-bold">{campaignBrandData.campaignBrandData?.campaign?.brand?.name}</h4> */}
                                                                    <h4 className="font-bold">{userProfileData?.user?.name}</h4>
                                                                    <p className="pt-1 text-gray-500 mx-2">{formattedDate}</p>
                                                                    <p className="pt-1 text-gray-500 me-2">{time}</p>
                                                                </div>

                                                                <div className={` flex items-end border-4 border-blue-300 chat-message shadow-lg p-2 ${messageClass}`}>
                                                                    <a href={item?.data} target="_blank" rel="noopener noreferrer" style={{ width: '100%' }}>
                                                                        <div style={{ position: 'relative' }}>
                                                                            <img
                                                                                src={item?.data}
                                                                                alt="Image"
                                                                                style={{
                                                                                    maxWidth: '100%',
                                                                                    maxHeight: '150px',
                                                                                    opacity: 1,
                                                                                    width: '100%'

                                                                                }}
                                                                            />
                                                                            <div
                                                                                className="flex items-center justify-center absolute"
                                                                                style={{
                                                                                    position: '',
                                                                                    top: '50%',
                                                                                    left: '50%',
                                                                                    transform: 'translate(-50%, -50%)',
                                                                                    cursor: 'pointer',
                                                                                    backgroundColor: 'rgb(0 0 0 / 52%)',
                                                                                    borderRadius: '50%',
                                                                                    padding: '5px',
                                                                                    width: '50%',
                                                                                    height: '50%'
                                                                                }}
                                                                                onClick={(e) => {
                                                                                    e.stopPropagation(); // Prevent the link from opening
                                                                                }}
                                                                            >
                                                                                <svg xmlns="http://www.w3.org/2000/svg" version="1.0" width="30.000000pt" height="30.000000pt" viewBox="0 0 512.000000 512.000000" preserveAspectRatio="xMidYMid meet">

                                                                                    <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)" fill="#fff" stroke="none">
                                                                                        <path d="M2175 5106 c-37 -17 -70 -52 -84 -89 -8 -19 -11 -360 -11 -1083 l0 -1054 -332 0 c-303 0 -337 -2 -374 -19 -61 -28 -89 -73 -89 -142 0 -50 5 -63 35 -101 19 -24 283 -327 587 -674 379 -434 563 -636 586 -648 44 -20 90 -20 134 0 23 12 207 214 586 648 304 347 568 650 587 674 31 39 35 50 35 102 0 50 -5 64 -31 96 -49 60 -62 62 -431 63 l-333 1 -2 1069 c-3 1063 -3 1070 -24 1097 -11 15 -33 37 -48 48 -26 20 -41 21 -394 23 -291 2 -373 0 -397 -11z" />
                                                                                        <path d="M162 923 l3 -678 26 -56 c33 -71 87 -125 158 -158 l56 -26 2155 0 2155 0 56 26 c71 33 125 87 158 158 l26 56 3 678 3 677 -321 0 -320 0 0 -480 0 -480 -1760 0 -1760 0 0 480 0 480 -320 0 -321 0 3 -677z" />
                                                                                    </g>
                                                                                </svg>
                                                                            </div>
                                                                        </div>
                                                                    </a>

                                                                    <svg className="bg-grey-900" xmlns="http://www.w3.org/2000/svg" version="1.0" width="12.000000pt" height="12.000000pt" viewBox="0 0 512.000000 512.000000" preserveAspectRatio="xMidYMid meet">

                                                                        <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)" fill="#A0A0A0" stroke="none">
                                                                            <path d="M3249 3826 c-19 -7 -45 -19 -57 -28 -12 -8 -358 -347 -770 -754 -411 -406 -840 -830 -953 -942 l-206 -203 -401 418 c-221 230 -423 435 -449 455 -130 102 -310 60 -389 -92 -29 -55 -26 -163 6 -222 16 -30 201 -229 512 -551 268 -278 512 -527 541 -554 59 -54 108 -73 183 -73 105 0 69 -33 1204 1090 580 574 1065 1057 1078 1074 69 94 49 256 -41 332 -72 61 -174 80 -258 50z" />
                                                                            <path d="M4777 3816 c-20 -8 -52 -25 -70 -40 -17 -14 -452 -442 -966 -950 l-935 -925 -63 59 c-103 96 -204 113 -315 53 -85 -46 -128 -121 -128 -223 0 -70 17 -117 61 -169 81 -94 295 -302 328 -317 20 -10 64 -20 98 -22 121 -8 57 -65 1218 1083 578 572 1060 1053 1072 1071 92 133 22 328 -136 382 -45 16 -117 14 -164 -2z" />
                                                                        </g>
                                                                    </svg>

                                                                    {/* </div> */}
                                                                </div>
                                                            </div>


                                                            {/* <div className="flex justify-end items-center mt-5">
                                                    <div
                                                        className=""
                                                        style={{
                                                            position: '',
                                                            // top: '50%',
                                                            // left: '50%',
                                                            // transform: 'translate(-50%, -50%)',
                                                            cursor: 'pointer',
                                                            // backgroundColor: 'rgb(0 0 0 / 52%)',
                                                            // borderRadius: '50%',
                                                            padding: '5px',
                                                            width: '100%',
                                                            height: '100%'
                                                        }}
                                                        onClick={(e) => {
                                                            e.stopPropagation(); // Prevent the link from opening
                                                        }}
                                                    >
                                                        <svg xmlns="http://www.w3.org/2000/svg" version="1.0" width="20.000000pt" height="20.000000pt" viewBox="0 0 512.000000 512.000000" preserveAspectRatio="xMidYMid meet">

                                                            <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)" fill="#000" stroke="none">
                                                                <path d="M2175 5106 c-37 -17 -70 -52 -84 -89 -8 -19 -11 -360 -11 -1083 l0 -1054 -332 0 c-303 0 -337 -2 -374 -19 -61 -28 -89 -73 -89 -142 0 -50 5 -63 35 -101 19 -24 283 -327 587 -674 379 -434 563 -636 586 -648 44 -20 90 -20 134 0 23 12 207 214 586 648 304 347 568 650 587 674 31 39 35 50 35 102 0 50 -5 64 -31 96 -49 60 -62 62 -431 63 l-333 1 -2 1069 c-3 1063 -3 1070 -24 1097 -11 15 -33 37 -48 48 -26 20 -41 21 -394 23 -291 2 -373 0 -397 -11z" />
                                                                <path d="M162 923 l3 -678 26 -56 c33 -71 87 -125 158 -158 l56 -26 2155 0 2155 0 56 26 c71 33 125 87 158 158 l26 56 3 678 3 677 -321 0 -320 0 0 -480 0 -480 -1760 0 -1760 0 0 480 0 480 -320 0 -321 0 3 -677z" />
                                                            </g>
                                                        </svg>
                                                    </div>
                                                    <p className="pt-1 text-gray-500 me-2">{time}</p>
                                                    <svg className="bg-grey-500" xmlns="http://www.w3.org/2000/svg" version="1.0" width="15.000000pt" height="15.000000pt" viewBox="0 0 512.000000 512.000000" preserveAspectRatio="xMidYMid meet">

                                                        <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)" fill="#A0A0A0" stroke="none">
                                                            <path d="M3249 3826 c-19 -7 -45 -19 -57 -28 -12 -8 -358 -347 -770 -754 -411 -406 -840 -830 -953 -942 l-206 -203 -401 418 c-221 230 -423 435 -449 455 -130 102 -310 60 -389 -92 -29 -55 -26 -163 6 -222 16 -30 201 -229 512 -551 268 -278 512 -527 541 -554 59 -54 108 -73 183 -73 105 0 69 -33 1204 1090 580 574 1065 1057 1078 1074 69 94 49 256 -41 332 -72 61 -174 80 -258 50z" />
                                                            <path d="M4777 3816 c-20 -8 -52 -25 -70 -40 -17 -14 -452 -442 -966 -950 l-935 -925 -63 59 c-103 96 -204 113 -315 53 -85 -46 -128 -121 -128 -223 0 -70 17 -117 61 -169 81 -94 295 -302 328 -317 20 -10 64 -20 98 -22 121 -8 57 -65 1218 1083 578 572 1060 1053 1072 1071 92 133 22 328 -136 382 -45 16 -117 14 -164 -2z" />
                                                        </g>
                                                    </svg>

                                                </div> */}
                                                        </div>

                                                    </div>
                                                }
                                                {item?.sender_type === 'creator' &&
                                                    <div className="px-5 py-5 overflow-y-auto w-full bg-b"
                                                        style={{ backgroundColor: Colors.light_bg_clr }}
                                                        key={index}>

                                                        <div className={` ${messageClass} flex items-center w-full justify-end`}>
                                                            <div className="">
                                                                <div className="flex items-center justify-between">
                                                                    {/* <h4 className="font-bold">{campaignBrandData.campaignBrandData?.campaign?.brand?.name}</h4> */}
                                                                    <h4 className="font-bold">{userProfileData?.user?.name}</h4>
                                                                    <p className="pt-1 text-gray-500 mx-2">{formattedDate}</p>
                                                                    <p className="pt-1 text-gray-500 me-2">{time}</p>
                                                                </div>

                                                                <div className={` flex items-end border-4 border-blue-300 chat-message shadow-lg p-2 ${messageClass}`}>
                                                                    <a href={item?.data} target="_blank" rel="noopener noreferrer" style={{ width: '100%' }}>
                                                                        <div style={{ position: 'relative' }}>
                                                                            <img
                                                                                src={item?.data}
                                                                                alt="Image"
                                                                                style={{
                                                                                    maxWidth: '100%',
                                                                                    maxHeight: '150px',
                                                                                    opacity: 1,
                                                                                    width: '100%'

                                                                                }}
                                                                            />
                                                                            <div
                                                                                className="flex items-center justify-center absolute"
                                                                                style={{
                                                                                    position: '',
                                                                                    top: '50%',
                                                                                    left: '50%',
                                                                                    transform: 'translate(-50%, -50%)',
                                                                                    cursor: 'pointer',
                                                                                    backgroundColor: 'rgb(0 0 0 / 52%)',
                                                                                    borderRadius: '50%',
                                                                                    padding: '5px',
                                                                                    width: '50%',
                                                                                    height: '50%'
                                                                                }}
                                                                                onClick={(e) => {
                                                                                    e.stopPropagation(); // Prevent the link from opening
                                                                                }}
                                                                            >
                                                                                <svg xmlns="http://www.w3.org/2000/svg" version="1.0" width="30.000000pt" height="30.000000pt" viewBox="0 0 512.000000 512.000000" preserveAspectRatio="xMidYMid meet">

                                                                                    <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)" fill="#fff" stroke="none">
                                                                                        <path d="M2175 5106 c-37 -17 -70 -52 -84 -89 -8 -19 -11 -360 -11 -1083 l0 -1054 -332 0 c-303 0 -337 -2 -374 -19 -61 -28 -89 -73 -89 -142 0 -50 5 -63 35 -101 19 -24 283 -327 587 -674 379 -434 563 -636 586 -648 44 -20 90 -20 134 0 23 12 207 214 586 648 304 347 568 650 587 674 31 39 35 50 35 102 0 50 -5 64 -31 96 -49 60 -62 62 -431 63 l-333 1 -2 1069 c-3 1063 -3 1070 -24 1097 -11 15 -33 37 -48 48 -26 20 -41 21 -394 23 -291 2 -373 0 -397 -11z" />
                                                                                        <path d="M162 923 l3 -678 26 -56 c33 -71 87 -125 158 -158 l56 -26 2155 0 2155 0 56 26 c71 33 125 87 158 158 l26 56 3 678 3 677 -321 0 -320 0 0 -480 0 -480 -1760 0 -1760 0 0 480 0 480 -320 0 -321 0 3 -677z" />
                                                                                    </g>
                                                                                </svg>
                                                                            </div>
                                                                        </div>
                                                                    </a>

                                                                    <svg className="bg-grey-900" xmlns="http://www.w3.org/2000/svg" version="1.0" width="12.000000pt" height="12.000000pt" viewBox="0 0 512.000000 512.000000" preserveAspectRatio="xMidYMid meet">

                                                                        <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)" fill="#A0A0A0" stroke="none">
                                                                            <path d="M3249 3826 c-19 -7 -45 -19 -57 -28 -12 -8 -358 -347 -770 -754 -411 -406 -840 -830 -953 -942 l-206 -203 -401 418 c-221 230 -423 435 -449 455 -130 102 -310 60 -389 -92 -29 -55 -26 -163 6 -222 16 -30 201 -229 512 -551 268 -278 512 -527 541 -554 59 -54 108 -73 183 -73 105 0 69 -33 1204 1090 580 574 1065 1057 1078 1074 69 94 49 256 -41 332 -72 61 -174 80 -258 50z" />
                                                                            <path d="M4777 3816 c-20 -8 -52 -25 -70 -40 -17 -14 -452 -442 -966 -950 l-935 -925 -63 59 c-103 96 -204 113 -315 53 -85 -46 -128 -121 -128 -223 0 -70 17 -117 61 -169 81 -94 295 -302 328 -317 20 -10 64 -20 98 -22 121 -8 57 -65 1218 1083 578 572 1060 1053 1072 1071 92 133 22 328 -136 382 -45 16 -117 14 -164 -2z" />
                                                                        </g>
                                                                    </svg>

                                                                    {/* </div> */}
                                                                </div>
                                                            </div>
                                                            <Image
                                                                src={userProfileData?.profile_pic}
                                                                width={44}
                                                                height={44}
                                                                className="rounded-full shadow-lg ms-2"
                                                                alt=""
                                                            />
                                                        </div>

                                                    </div>
                                                }
                                            </div>
                                        </>
                                    );
                                }
                                else if (isVideoLink) {
                                    return (
                                        <div className="px-5 py-5 overflow-y-auto" style={{ backgroundColor: Colors.light_bg_clr }} key={index}>
                                            <div className={`chat-message shadow-lg ${messageClass}`}>

                                                <>
                                                    <CreatorVideoEmbed url={item?.data} />
                                                </>

                                            </div>
                                        </div>
                                    );
                                }
                                else if (isYouTubeVideoLink) {
                                    return (
                                        <>
                                            <div className="w-full">
                                                {item?.sender_type === 'brand' &&
                                                    <div className="px-5 py-5 overflow-y-auto w-full" style={{ backgroundColor: Colors.light_bg_clr }} key={index}>
                                                        <div className={`chat-message shadow-lg ${!messageClass}`} style={{ padding: 0 }}>
                                                            <Image
                                                                src={userProfileData?.profile_pic}
                                                                width={44}
                                                                height={44}
                                                                className="rounded-full shadow-lg me-2"
                                                                alt=""
                                                            />
                                                            <div className="">
                                                                <div className="flex items-center justify-between">
                                                                    {/* <h4 className="font-bold">{campaignBrandData.campaignBrandData?.campaign?.brand?.name}</h4> */}
                                                                    <h4 className="font-bold">{userProfileData?.user?.name}</h4>
                                                                    <p className="pt-1 text-gray-500 mx-2">{formattedDate}</p>
                                                                    <p className="pt-1 text-gray-500 me-2">{time}</p>
                                                                </div>
                                                                <div className={`chat-message shadow-lg ${!messageClass}`}>

                                                                    <>
                                                                        <CreatorVideoEmbed url={item?.data} />
                                                                    </>

                                                                </div>

                                                            </div>



                                                        </div>

                                                    </div>
                                                }
                                                {item?.sender_type === 'creator' &&
                                                    <div className=" overflow-y-auto w-full "
                                                        style={{ backgroundColor: Colors.light_bg_clr }}
                                                        key={index}>

                                                        <div className={` ${messageClass} flex items-center w-full justify-end`}>
                                                            <div className="">
                                                                <div className="flex items-center justify-between">
                                                                    {/* <h4 className="font-bold">{campaignBrandData.campaignBrandData?.campaign?.brand?.name}</h4> */}
                                                                    <h4 className="font-bold">{userProfileData?.user?.name}</h4>
                                                                    <p className="pt-1 text-gray-500 mx-2">{formattedDate}</p>
                                                                    <p className="pt-1 text-gray-500 me-2">{time}</p>
                                                                </div>

                                                                <div className={` flex items-end border-4 border-yellow-300 chat-message shadow-lg ${messageClass}`}>

                                                                    <div className=" overflow-y-auto" style={{ backgroundColor: Colors.light_bg_clr }} key={index}>
                                                                        <div className={`chat-message shadow-lg ${messageClass}`} style={{ padding: 0 }}>

                                                                            <>
                                                                                <CreatorVideoEmbed url={item?.data} />
                                                                            </>

                                                                        </div>
                                                                    </div>
                                                                    {/* <svg className="bg-grey-900" xmlns="http://www.w3.org/2000/svg" version="1.0" width="12.000000pt" height="12.000000pt" viewBox="0 0 512.000000 512.000000" preserveAspectRatio="xMidYMid meet">

                                                                        <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)" fill="#A0A0A0" stroke="none">
                                                                            <path d="M3249 3826 c-19 -7 -45 -19 -57 -28 -12 -8 -358 -347 -770 -754 -411 -406 -840 -830 -953 -942 l-206 -203 -401 418 c-221 230 -423 435 -449 455 -130 102 -310 60 -389 -92 -29 -55 -26 -163 6 -222 16 -30 201 -229 512 -551 268 -278 512 -527 541 -554 59 -54 108 -73 183 -73 105 0 69 -33 1204 1090 580 574 1065 1057 1078 1074 69 94 49 256 -41 332 -72 61 -174 80 -258 50z" />
                                                                            <path d="M4777 3816 c-20 -8 -52 -25 -70 -40 -17 -14 -452 -442 -966 -950 l-935 -925 -63 59 c-103 96 -204 113 -315 53 -85 -46 -128 -121 -128 -223 0 -70 17 -117 61 -169 81 -94 295 -302 328 -317 20 -10 64 -20 98 -22 121 -8 57 -65 1218 1083 578 572 1060 1053 1072 1071 92 133 22 328 -136 382 -45 16 -117 14 -164 -2z" />
                                                                        </g>
                                                                    </svg> */}

                                                                    {/* </div> */}
                                                                </div>
                                                            </div>
                                                            <Image
                                                                src={userProfileData?.profile_pic}
                                                                width={44}
                                                                height={44}
                                                                className="rounded-full shadow-lg ms-2"
                                                                alt=""
                                                            />
                                                        </div>

                                                    </div>
                                                }
                                                {/* <div className="px-5 py-5 overflow-y-auto" style={{ backgroundColor: Colors.light_bg_clr }} key={index}>
                                                <div className={`chat-message shadow-lg ${messageClass}`}>

                                                    <>
                                                        <CreatorVideoEmbed url={item?.data} />
                                                    </>

                                                </div>
                                            </div> */}
                                            </div>
                                        </>
                                    );
                                }
                                else if (isInstagramVideoLink) {
                                    return (
                                        <div className="px-5 py-5 overflow-y-auto" style={{ backgroundColor: Colors.light_bg_clr }} key={index}>
                                            <div className={`chat-message shadow-lg ${messageClass}`}>

                                                <>
                                                    <CreatorVideoEmbed url={item?.data} />
                                                </>

                                            </div>
                                        </div>
                                    );
                                }
                                else if (item.content === 1 || item.type === 'video') {
                                    return (
                                        <div className="px-5 py-5 overflow-y-auto" style={{ backgroundColor: Colors.light_bg_clr }} key={index}>
                                            <div className={`chat-message shadow-lg ${messageClass}`}>
                                                {item.type === 'video' ? (
                                                    <>
                                                        <CreatorVideoEmbed url={item?.data} />
                                                    </>
                                                ) : (
                                                    <>
                                                        <a href={item?.data} target="_blank" rel="noopener noreferrer">
                                                            {item?.type === 'text' ? (
                                                                <span>{item?.data}</span>
                                                            ) : (
                                                                <span>
                                                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                                                                    </svg>
                                                                    Download File
                                                                </span>
                                                            )}
                                                        </a>
                                                    </>
                                                )}
                                            </div>
                                        </div>
                                    );
                                }

                                else {
                                    // Handle other content types or text messages
                                    return (
                                        <>
                                            <div className="w-full">
                                                {item?.sender_type === 'brand' &&
                                                    <div className="px-5 py-5 overflow-y-auto w-full"
                                                        style={{ backgroundColor: Colors.light_bg_clr }}
                                                        key={index}>
                                                        <div className={` ${!messageClass} flex items-center`}>
                                                            <Image
                                                                src={campaignBrandData.campaignBrandData?.campaign?.brand?.logo}
                                                                width={44}
                                                                height={44}
                                                                className="rounded-full shadow-lg me-2"
                                                                alt=""
                                                            />
                                                            <div className="">
                                                                <div className="flex items-center justify-between">
                                                                    {/* <h4 className="font-bold">{campaignBrandData.campaignBrandData?.campaign?.brand?.name}</h4> */}
                                                                    <h4 className="font-bold">{campaignBrandData.campaignBrandData?.campaign?.brand?.name}</h4>
                                                                    <p className="pt-1 text-gray-500 mx-2">{formattedDate}</p>
                                                                    <p className="pt-1 text-gray-500 me-2">{time}</p>
                                                                </div>

                                                                <div className={`flex items-end  justify-between bg-green-200 chat-message shadow-lg p-2 ${!messageClass}`}>
                                                                    <div className="pe-10 ps-1">{item?.data}</div>
                                                                    {/* <div className="flex justify-end items-center"> */}

                                                                    <svg className="bg-grey-900" xmlns="http://www.w3.org/2000/svg" version="1.0" width="12.000000pt" height="12.000000pt" viewBox="0 0 512.000000 512.000000" preserveAspectRatio="xMidYMid meet">

                                                                        <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)" fill="#A0A0A0" stroke="none">
                                                                            <path d="M3249 3826 c-19 -7 -45 -19 -57 -28 -12 -8 -358 -347 -770 -754 -411 -406 -840 -830 -953 -942 l-206 -203 -401 418 c-221 230 -423 435 -449 455 -130 102 -310 60 -389 -92 -29 -55 -26 -163 6 -222 16 -30 201 -229 512 -551 268 -278 512 -527 541 -554 59 -54 108 -73 183 -73 105 0 69 -33 1204 1090 580 574 1065 1057 1078 1074 69 94 49 256 -41 332 -72 61 -174 80 -258 50z" />
                                                                            <path d="M4777 3816 c-20 -8 -52 -25 -70 -40 -17 -14 -452 -442 -966 -950 l-935 -925 -63 59 c-103 96 -204 113 -315 53 -85 -46 -128 -121 -128 -223 0 -70 17 -117 61 -169 81 -94 295 -302 328 -317 20 -10 64 -20 98 -22 121 -8 57 -65 1218 1083 578 572 1060 1053 1072 1071 92 133 22 328 -136 382 -45 16 -117 14 -164 -2z" />
                                                                        </g>
                                                                    </svg>

                                                                    {/* </div> */}
                                                                </div>
                                                            </div>

                                                        </div>
                                                        {/* <p className={` ${textMessageClass}`}>{time}</p> */}
                                                    </div>
                                                }
                                                {item?.sender_type === 'creator' &&
                                                    <div className="px-5 py-5 overflow-y-auto w-full text-end"
                                                        style={{ backgroundColor: Colors.light_bg_clr }}
                                                        key={index}>
                                                        <div className={` ${messageClass} flex items-center w-full justify-end`}>
                                                            <div className="">
                                                                <div className="flex items-center justify-between">
                                                                    {/* <h4 className="font-bold">{campaignBrandData.campaignBrandData?.campaign?.brand?.name}</h4> */}
                                                                    <h4 className="font-bold">{userProfileData?.user?.name}</h4>
                                                                    <p className="pt-1 text-gray-500 mx-2">{formattedDate}</p>
                                                                    <p className="pt-1 text-gray-500 me-2">{time}</p>
                                                                </div>

                                                                <div className={`flex items-end justify-between bg-green-200 chat-message shadow-lg p-2 ${messageClass}`}>
                                                                    <div className="pe-10 ps-1">{item?.data}</div>
                                                                    {/* <div className="flex justify-end items-center"> */}

                                                                    <svg className="bg-grey-900" xmlns="http://www.w3.org/2000/svg" version="1.0" width="12.000000pt" height="12.000000pt" viewBox="0 0 512.000000 512.000000" preserveAspectRatio="xMidYMid meet">

                                                                        <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)" fill="#A0A0A0" stroke="none">
                                                                            <path d="M3249 3826 c-19 -7 -45 -19 -57 -28 -12 -8 -358 -347 -770 -754 -411 -406 -840 -830 -953 -942 l-206 -203 -401 418 c-221 230 -423 435 -449 455 -130 102 -310 60 -389 -92 -29 -55 -26 -163 6 -222 16 -30 201 -229 512 -551 268 -278 512 -527 541 -554 59 -54 108 -73 183 -73 105 0 69 -33 1204 1090 580 574 1065 1057 1078 1074 69 94 49 256 -41 332 -72 61 -174 80 -258 50z" />
                                                                            <path d="M4777 3816 c-20 -8 -52 -25 -70 -40 -17 -14 -452 -442 -966 -950 l-935 -925 -63 59 c-103 96 -204 113 -315 53 -85 -46 -128 -121 -128 -223 0 -70 17 -117 61 -169 81 -94 295 -302 328 -317 20 -10 64 -20 98 -22 121 -8 57 -65 1218 1083 578 572 1060 1053 1072 1071 92 133 22 328 -136 382 -45 16 -117 14 -164 -2z" />
                                                                        </g>
                                                                    </svg>

                                                                    {/* </div> */}
                                                                </div>
                                                            </div>
                                                            <Image
                                                                src={userProfileData?.profile_pic}
                                                                width={44}
                                                                height={44}
                                                                className="rounded-full shadow-lg ms-2"
                                                                alt=""
                                                            />
                                                        </div>
                                                        {/* <p className={` ${textMessageClass}`}>{time}</p> */}
                                                    </div>
                                                }
                                            </div>
                                        </>
                                    );
                                }

                            })}

                        {modalOpen && (
                            <div className="modal">
                                <div className="modal-content">
                                    <span className="close" onClick={closeVideoModal}>
                                        &times;
                                    </span>
                                    <video controls width="500" height="auto">
                                        <source src={videoUrl} type="video/mp4" />
                                        Your browser does not support the video tag.
                                    </video>
                                </div>
                            </div>
                        )}
                    </div>
                    <div className=" flex flex-col h-auto px-5 pb-5 ">
                        <hr className="my-5" />
                        <form className="flex items-center">
                            <label htmlFor="voice-search" className="sr-only">Search</label>
                            <div className="relative w-full overflow-y-auto">

                                <input
                                    type="text"
                                    id="voice-search"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-5 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="Type Something Here......"
                                    value={msgtext}
                                    // value={msgtext || selectedFile}
                                    onChange={(e) => setMsgtext(e.target.value)}
                                />
                                <button className="absolute inset-y-0 right-0 flex items-center pr-10">

                                    <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.408 7.5h.01m-6.876 0h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM4.6 11a5.5 5.5 0 0 0 10.81 0H4.6Z" />
                                    </svg>
                                </button>
                                <div className="border">

                                    <button type="button" className="absolute inset-y-0 right-0 flex items-center pr-3"
                                        onClick={handleButtonClick}
                                    >

                                        <svg className="w-4 h-4 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 12 20">
                                            <path stroke="currentColor" strokeLinejoin="round" strokeWidth="2" d="M1 6v8a5 5 0 1 0 10 0V4.5a3.5 3.5 0 1 0-7 0V13a2 2 0 0 0 4 0V6" />
                                        </svg>
                                    </button>
                                    <input
                                        type="file"
                                        // id="file_text_name"
                                        // accept="video/*"
                                        accept="image/*,video/*"
                                        onChange={handleFileChange}
                                        style={{ display: 'none' }}
                                        ref={fileInputRef} // Create a ref for the file input
                                    />
                                </div>


                            </div>


                            <button
                                type="submit"
                                className="inline-flex items-center py-2.5 px-3 ml-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                onClick={handleClick}
                            >
                                <svg className="w-4 h-4 rotate-90" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                                    <path d="m17.914 18.594-8-18a1 1 0 0 0-1.828 0l-8 18a1 1 0 0 0 1.157 1.376L8 18.281V9a1 1 0 0 1 2 0v9.281l6.758 1.689a1 1 0 0 0 1.156-1.376Z" />
                                </svg>
                            </button>
                        </form>


                    </div>
                    <ToastContainer />
                </>
            )}
        </>
    )
}

export default Creator_chats