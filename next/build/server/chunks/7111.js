"use strict";
exports.id = 7111;
exports.ids = [7111];
exports.modules = {

/***/ 3018:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


function CreatorVideoEmbed({ url  }) {
    // Ensure url is a string and not empty
    if (typeof url !== "string" || url.trim() === "") {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
            children: "Invalid video URL."
        });
    }
    // Helper function to extract Instagram video ID from the URL
    function getInstagramVideoId(url) {
        const matches = url.match(/\/reel\/([A-Za-z0-9_-]+)/);
        if (matches && matches.length > 1) {
            return matches[1];
        } else {
            return null; // Invalid or unsupported URL format
        }
    }
    // Determine the video source and format
    const getSource = (url)=>{
        if (url.includes("youtube.com") || url.includes("youtu.be")) {
            // YouTube video
            return "youtube";
        } else if (url.includes("instagram.com")) {
            // Instagram video (Note: Instagram may change its embed methods)
            // return 'instagram';
            // Check if it's an Instagram video or Reel
            if (url.includes("/p/")) {
                return "instagram";
            } else if (url.includes("/reel/")) {
                return "instagram-reel";
            } else {
                return "unsupported-instagram";
            }
        } else if (url.includes("facebook.com")) {
            // Facebook video (Note: Facebook may change its embed methods)
            return "facebook";
        } else {
            // Unsupported source or direct video link
            return "direct";
        }
    };
    // Render the video based on its source
    const renderVideo = ()=>{
        const source = getSource(url);
        switch(source){
            case "youtube":
                // Embed YouTube video
                const videoId = getYouTubeVideoId(url);
                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("iframe", {
                    width: "260",
                    height: "150",
                    src: `https://www.youtube.com/embed/${videoId}`,
                    frameBorder: "0",
                    allowFullScreen: true,
                    title: "YouTube Video"
                });
            case "instagram":
                // Embed Instagram video
                const instagramVideoId = getInstagramVideoId(url);
                if (instagramVideoId) {
                    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("iframe", {
                        src: `https://www.instagram.com/p/${instagramVideoId}/embed`,
                        frameBorder: "0",
                        scrolling: "no",
                        allowtransparency: "true",
                        allowFullScreen: true,
                        title: "Instagram Video"
                    });
                } else {
                    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        children: "Invalid Instagram video URL."
                    });
                }
                ;
            case "instagram-reel":
                // Embed Instagram Reel
                const instagramReelId = getInstagramVideoId(url);
                if (instagramReelId) {
                    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("iframe", {
                        src: `https://www.instagram.com/reel/${instagramReelId}/embed`,
                        frameBorder: "0",
                        scrolling: "no",
                        width: "300",
                        height: "250",
                        allowtransparency: "true",
                        allowFullScreen: true,
                        title: "Instagram Reel"
                    });
                } else {
                    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        children: "Invalid Instagram Reel URL."
                    });
                }
            // Other source cases...
            default:
                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                    children: "Unsupported video source."
                });
        }
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "video-embed-container",
        children: renderVideo()
    });
}
function getYouTubeVideoId(url) {
    const match = url.match(/[?&]v=([^?&]+)/);
    return match ? match[1] : null;
}
// function getInstagramVideoId(url) {
//     const matches = url.match(/\/p\/([A-Za-z0-9_-]+)/);
//     if (matches && matches.length > 1) {
//         return matches[1];
//     } else {
//         return null;
//     }
// }
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CreatorVideoEmbed);


/***/ }),

/***/ 2859:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _images__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8417);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);



const Creator_avatar_red = ({ item  })=>{
    console.log("Creator_avatar_red", item?.campaign?.brand?.name);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "flex items-center space-x-4 p-2 cursor-pointer",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "relative",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                            // className="w-10 h-10 rounded-full"
                            width: 44,
                            height: 44,
                            className: "rounded-full shadow-lg",
                            alt: "",
                            src: item?.campaign?.brand?.logo ? item?.campaign?.brand?.logo : _images__WEBPACK_IMPORTED_MODULE_1__/* ["default"].avatar2 */ .Z.avatar2
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            className: "bottom-0 left-7 absolute  w-3.5 h-3.5 bg-red-400 border-2 border-white dark:border-gray-800 rounded-full"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "font-medium dark:text-white font_size_14 ",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "font-medium capitalize",
                            children: item?.campaign?.brand?.name
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "text-sm text-gray-500 dark:text-gray-400 capitalize",
                            children: item?.campaign?.name
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Creator_avatar_red);


/***/ }),

/***/ 9924:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _generalfunctions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9262);
/* harmony import */ var _images__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8417);
/* harmony import */ var _styles_Colors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6029);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9915);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(3590);
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(8819);
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _CreatorVideoEmbed__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(3018);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([js_cookie__WEBPACK_IMPORTED_MODULE_4__, react_toastify__WEBPACK_IMPORTED_MODULE_8__]);
([js_cookie__WEBPACK_IMPORTED_MODULE_4__, react_toastify__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);












const Creator_chats = (campaignBrandData)=>{
    console.log("campaignBrandData.campaignBrandData?.campaign?.brand?.name", campaignBrandData.campaignBrandData?.campaign);
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter)();
    const [allMessages, setAllMessages] = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)([]);
    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(false);
    const [msgtext, setMsgtext] = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)([]);
    const [modalOpen, setModalOpen] = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(false); // State to track modal visibility
    const [videoUrl, setVideoUrl] = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(""); // State to store video URL
    // const [selectedFile, setSelectedFile] = useState(null);
    const [file, setFile] = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(null);
    const [totalMessages, setTotalMessages] = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(0);
    const fileInputRef = (0,react__WEBPACK_IMPORTED_MODULE_7__.useRef)(null);
    const chatContainerRef = (0,react__WEBPACK_IMPORTED_MODULE_7__.useRef)(null);
    const handleButtonClick = ()=>{
        fileInputRef.current.click();
    };
    console.log("fileInputRef", file?.name);
    const handleFileChange = (e)=>{
        // setSelectedFile(e.target.files[0]);
        // setFile(e.target.files[0]);
        const selectedFile = e.target.files[0];
        if (selectedFile) {
            // Check if the selected file is a video
            if (selectedFile.type.startsWith("image/") || selectedFile.type.startsWith("video/")) {
                // Set both file state and msgtext state
                setFile(selectedFile);
                setMsgtext(selectedFile?.name);
            } else {
                alert("Please select a valid video file.");
                // Clear the file input
                fileInputRef.current.value = "";
            }
        }
    };
    const handleUpload = async (e)=>{
        e.preventDefault();
        if (!file) {
            alert("No file selected.");
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
        formData.append("file", file);
        const cookieValue = JSON.parse(js_cookie__WEBPACK_IMPORTED_MODULE_4__["default"].get("creator_user_data"));
        console.log("categories cookieValue------------2", cookieValue?.token);
        // const fileType = file.type; // Get the file type
        const headers = {
            "Authorization": `Bearer ${cookieValue?.token}`
        };
        try {
            const response = await fetch(`${_generalfunctions__WEBPACK_IMPORTED_MODULE_1__/* .url */ .HQ}/saveimage`, {
                method: "POST",
                headers,
                body: formData
            });
            console.log("creator chat upload portfolio", response);
            if (response.ok) {
                console.log("creator file uploaded", file);
                const data = await response.json();
                setFile(data?.url);
                console.log("image response ok", data?.url);
                react_toastify__WEBPACK_IMPORTED_MODULE_8__.toast.success("Image Uploaded Successfully", {
                    position: "top-center",
                    autoClose: 2000
                });
                return data;
            } else if (response.status === 413) {
                // Handle Request Entity Too Large (status code 413)
                react_toastify__WEBPACK_IMPORTED_MODULE_8__.toast.error("Request Entity Too Large", {
                    position: "top-center",
                    autoClose: 3000
                });
                return null;
            } else if (response.status === 404) {
                // Handle Not Found (status code 404) or other specific errors
                console.error("File not found or other specific error.");
                router.push("/login");
                return null;
            } else {
                react_toastify__WEBPACK_IMPORTED_MODULE_8__.toast.error("Image upload failed", {
                    position: "top-center",
                    autoClose: 3000
                });
                return null;
            }
        } catch (error) {
            console.error("An error occurred:", error);
            return null;
        }
    };
    console.log("sleectded craetor file", file);
    const openVideoModal = (url)=>{
        setVideoUrl(url);
        setModalOpen(true);
    };
    const closeVideoModal = ()=>{
        setVideoUrl("");
        setModalOpen(false);
    };
    const getAllMessages = async ()=>{
        setLoading(true);
        const cookieValue = JSON.parse(js_cookie__WEBPACK_IMPORTED_MODULE_4__["default"].get("creator_user_data"));
        try {
            const requestOptions = {
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${cookieValue?.token}` // Include the token if provided
                }
            };
            const params = new URLSearchParams({
                "brand": campaignBrandData?.campaignBrandData?.campaign?.brand?.id,
                "creator": campaignBrandData?.campaignBrandData?.creator_id,
                "campaign": campaignBrandData?.campaignBrandData?.campaign_id
            });
            const response = await fetch(`${_generalfunctions__WEBPACK_IMPORTED_MODULE_1__/* .url */ .HQ}/messages?${params.toString()}`, requestOptions);
            console.log("campaigns communication------", response);
            if (response.status === 401) {
                react_toastify__WEBPACK_IMPORTED_MODULE_8__.toast.error("Session Expired: Please login again to continue.", {
                    position: "top-center",
                    autoClose: 5000
                });
                router.push("/login");
            } else if (response.status === 429) {
                react_toastify__WEBPACK_IMPORTED_MODULE_8__.toast.error("Too many requests: Please wait for a few minutes to try and login again.", {
                    position: "top-center",
                    autoClose: 5000
                });
                router.push("/login");
            // showToastMessage("Too many requests: Please wait for a few minutes to try and login again.");
            } else if (response.status === 500) {
                react_toastify__WEBPACK_IMPORTED_MODULE_8__.toast.error("Server Error: Please wait while we fix this problem for you.", {
                    position: "top-center",
                    autoClose: 5000
                });
                router.push("/login");
            } else if (!response.ok) {
                throw new Error(`Request failed with status: ${response.status}`);
            }
            // return await response.json();
            const responseData = await response.json();
            // console.log("responseData messgaes",Math.ceil(responseData.data.total / responseData.data.per_page));
            console.log("responseData messgaes", Math.ceil(responseData.data.total / responseData.data.per_page));
            console.log("all creator messages chats :", responseData.data.data);
            setTotalMessages(responseData.data.total);
            // setAllMessages(responseData?.data?.data)
            // setAllMessages(responseData?.data?.data)
            setLoading(false);
            scrollToBottom();
        } catch (error) {
            console.error("Error:", error);
            throw error;
        }
    };
    const handleClick = async ()=>{
        if (!file && !msgtext) {
            alert("Please select a file or enter text.");
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
        const cookieValue = JSON.parse(js_cookie__WEBPACK_IMPORTED_MODULE_4__["default"].get("creator_user_data"));
        console.log("campaigns cookieValue------------1", cookieValue?.token);
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
                if (fileType.startsWith("image/") || fileType.startsWith("video/")) {
                    const uploadResponse = await handleUpload();
                    console.log("uploadResponseuploadResponse", uploadResponse);
                    if (uploadResponse) {
                        // messageType = "text";
                        // formData.append("type", messageType);
                        // formData.append("file", file); // Append the file
                        formData.append("data", uploadResponse?.url);
                    }
                }
            } else {
                // messageType = "text";
                // formData.append("type", messageType);
                formData.append("data", msgtext);
            }
            const headers = {
                "Authorization": `Bearer ${cookieValue?.token}`
            };
            const postResponse = await fetch(`${_generalfunctions__WEBPACK_IMPORTED_MODULE_1__/* .url */ .HQ}/messages`, {
                method: "POST",
                headers: headers,
                body: formData
            });
            const responseData = await postResponse.json();
            console.log("handleClick creator1", postResponse, responseData);
            console.log("handleClick responseData", responseData);
            if (responseData.status === "success") {
                console.log("POST response creator chats type-------------:", responseData?.data);
                react_toastify__WEBPACK_IMPORTED_MODULE_8__.toast.success("Message is Sent", {
                    position: "top-center",
                    autoClose: 5000
                });
                setMsgtext("");
                setFile(null);
                await getAllMessages();
                setLoading(false);
            } else {
                react_toastify__WEBPACK_IMPORTED_MODULE_8__.toast.error("Too many requests: Please wait for a few minutes to try and login again.", {
                    position: "top-center",
                    autoClose: 5000
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
    const loadMore = async ()=>{
        const loadItems = allMessages.length + 10;
        console.log("loadItems", loadItems, allMessages.length);
        const cookieValue = JSON.parse(js_cookie__WEBPACK_IMPORTED_MODULE_4__["default"].get("creator_user_data"));
        const brandId = campaignBrandData?.campaignBrandData?.campaign?.brand?.id;
        const creatorId = campaignBrandData?.campaignBrandData?.creator_id;
        const campaignId = campaignBrandData?.campaignBrandData?.campaign_id;
        const requestOptions = {
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: `Bearer ${cookieValue?.token}`
            }
        };
        try {
            const response = await fetch(`${_generalfunctions__WEBPACK_IMPORTED_MODULE_1__/* .url */ .HQ}/messages?brand=${brandId}&creator=${creatorId}&campaign=${campaignId}&per_page=${loadItems}`, requestOptions);
            if (!response.ok) {
                throw new Error(`Request failed with status: ${response.status}`);
            }
            const data = await response.json();
            const newMessages = data.data.data;
            setTotalMessages(loadItems);
            setAllMessages(newMessages);
        } catch (error) {
            console.error("Error:", error);
        }
    };
    (0,react__WEBPACK_IMPORTED_MODULE_7__.useEffect)(()=>{
        if (totalMessages > 0) {
            const cookieValue = JSON.parse(js_cookie__WEBPACK_IMPORTED_MODULE_4__["default"].get("creator_user_data"));
            // const perPage = totalMessages; // Set 'per_page' to total count
            const perPage = 10;
            const change_per_page = Math.ceil(totalMessages / perPage);
            console.log("change_per_page", change_per_page, totalMessages, perPage);
            console.log("totalMessages", totalMessages);
            const brandId = campaignBrandData?.campaignBrandData?.campaign?.brand?.id;
            const creatorId = campaignBrandData?.campaignBrandData?.creator_id;
            const campaignId = campaignBrandData?.campaignBrandData?.campaign_id;
            const requestOptions = {
                method: "GET",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${cookieValue?.token}`
                }
            };
            const fetchMessages = async ()=>{
                try {
                    const response = await fetch(`${_generalfunctions__WEBPACK_IMPORTED_MODULE_1__/* .url */ .HQ}/messages?brand=${brandId}&creator=${creatorId}&campaign=${campaignId}&current_page=${change_per_page}`, requestOptions);
                    if (!response.ok) {
                        throw new Error(`Request failed with status: ${response.status}`);
                    }
                    const data = await response.json();
                    // setAllMessages(data.data); // Assuming 'data' contains the messages array
                    setAllMessages(data.data.data);
                    console.log("responseData changebpermessgaes", Math.ceil(data.data.total / data.data.per_page));
                    setLoading(false);
                } catch (error) {
                    console.error("Error:", error);
                    setLoading(false);
                }
            };
            fetchMessages();
        }
    }, [
        totalMessages
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_7__.useEffect)(()=>{
        getAllMessages();
        if (campaignBrandData) {
            getAllMessages();
        }
    }, [
        campaignBrandData
    ]);
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
    const scrollToBottom = ()=>{
        if (chatContainerRef.current) {
            chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
        }
    };
    let userProfileData = js_cookie__WEBPACK_IMPORTED_MODULE_4__["default"].get("creator_profile_id");
    if (userProfileData === null || undefined) {
        router.push("/login");
    } else {
        try {
            userProfileData = JSON.parse(userProfileData);
        } catch (error) {
            console.error("Error parsing userProfileData:", error);
        }
    }
    console.log("userProfileDatauserProfileData", userProfileData);
    console.log("creator allMessages", allMessages);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: loading ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "w-full h-full flex items-center justify-center",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_5___default()), {
                width: 100,
                height: 100,
                alt: "",
                src: _images__WEBPACK_IMPORTED_MODULE_2__/* ["default"].Loader */ .Z.Loader
            })
        }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "chat-container px-5 pt-5 rounded overflow-y-auto",
                    ref: chatContainerRef,
                    style: {
                        scrollBehavior: "smooth"
                    },
                    children: [
                        allMessages.length < totalMessages && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                onClick: loadMore,
                                className: "w-full text-sm bg-green-600 text-white py-1 rounded text-center",
                                children: "Click on Load More button to get older Messages"
                            })
                        }),
                        allMessages.length > 0 && allMessages.map((item, index)=>{
                            const isCreatorSender = item.sender_type === "creator";
                            const isBrandReceiver = item.sender_type === "brand";
                            const isLeftAlign = isBrandReceiver;
                            const isRightAlign = isCreatorSender;
                            const messageClass = isLeftAlign ? "left-message" : isRightAlign ? "right-message" : "";
                            const textMessageClass = isLeftAlign ? "left-text-message" : isRightAlign ? "right-text-message" : "";
                            console.log("messageClass", isLeftAlign, isRightAlign);
                            const timestamp = item?.updated_at;
                            const dateObj = new Date(timestamp);
                            const day = dateObj.getUTCDate().toString().padStart(2, "0");
                            const month = (dateObj.getUTCMonth() + 1).toString().padStart(2, "0");
                            const year = dateObj.getUTCFullYear();
                            const formattedDate = `${day}-${month}-${year}`;
                            console.log("formattedDate", formattedDate); // Output: "07-10-2023"
                            const hours = dateObj.getHours().toString().padStart(2, "0");
                            const minutes = dateObj.getMinutes().toString().padStart(2, "0");
                            const time = `${hours}:${minutes}`;
                            console.log(time);
                            const isImageLink = item.content === 0 && /\.(jpg|jpeg|png|gif|bmp|webp)$/i.test(item.data);
                            const isVideoLink = item.content === 0 && /\.(mp4|avi|mkv|mov|flv|webm|wmv)$/i.test(item.data);
                            const isYouTubeVideoLink = /youtube\.com\/(watch\?v=|shorts\/)/i.test(item.data);
                            const isInstagramVideoLink = item.data.startsWith("https://www.instagram.com/reel");
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
                                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "w-full",
                                        children: [
                                            item?.sender_type === "brand" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "px-5 py-5 overflow-y-auto w-full",
                                                style: {
                                                    backgroundColor: _styles_Colors__WEBPACK_IMPORTED_MODULE_3__/* ["default"].light_bg_clr */ .Z.light_bg_clr
                                                },
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: `chat-message shadow-lg ${!messageClass}`,
                                                    style: {
                                                        padding: 0
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_5___default()), {
                                                            src: userProfileData?.profile_pic,
                                                            width: 44,
                                                            height: 44,
                                                            className: "rounded-full shadow-lg me-2",
                                                            alt: ""
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            className: "",
                                                            children: [
                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                    className: "flex items-center justify-between",
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                                                            className: "font-bold",
                                                                            children: userProfileData?.user?.name
                                                                        }),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                            className: "pt-1 text-gray-500 mx-2",
                                                                            children: formattedDate
                                                                        }),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                            className: "pt-1 text-gray-500 me-2",
                                                                            children: time
                                                                        })
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                    className: ` flex items-end border-4 border-blue-300 chat-message shadow-lg p-2 ${messageClass}`,
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                            href: item?.data,
                                                                            target: "_blank",
                                                                            rel: "noopener noreferrer",
                                                                            style: {
                                                                                width: "100%"
                                                                            },
                                                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                                style: {
                                                                                    position: "relative"
                                                                                },
                                                                                children: [
                                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                                        src: item?.data,
                                                                                        alt: "Image",
                                                                                        style: {
                                                                                            maxWidth: "100%",
                                                                                            maxHeight: "150px",
                                                                                            opacity: 1,
                                                                                            width: "100%"
                                                                                        }
                                                                                    }),
                                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                                        className: "flex items-center justify-center absolute",
                                                                                        style: {
                                                                                            position: "",
                                                                                            top: "50%",
                                                                                            left: "50%",
                                                                                            transform: "translate(-50%, -50%)",
                                                                                            cursor: "pointer",
                                                                                            backgroundColor: "rgb(0 0 0 / 52%)",
                                                                                            borderRadius: "50%",
                                                                                            padding: "5px",
                                                                                            width: "50%",
                                                                                            height: "50%"
                                                                                        },
                                                                                        onClick: (e)=>{
                                                                                            e.stopPropagation(); // Prevent the link from opening
                                                                                        },
                                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                                                                            xmlns: "http://www.w3.org/2000/svg",
                                                                                            version: "1.0",
                                                                                            width: "30.000000pt",
                                                                                            height: "30.000000pt",
                                                                                            viewBox: "0 0 512.000000 512.000000",
                                                                                            preserveAspectRatio: "xMidYMid meet",
                                                                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("g", {
                                                                                                transform: "translate(0.000000,512.000000) scale(0.100000,-0.100000)",
                                                                                                fill: "#fff",
                                                                                                stroke: "none",
                                                                                                children: [
                                                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                                                                        d: "M2175 5106 c-37 -17 -70 -52 -84 -89 -8 -19 -11 -360 -11 -1083 l0 -1054 -332 0 c-303 0 -337 -2 -374 -19 -61 -28 -89 -73 -89 -142 0 -50 5 -63 35 -101 19 -24 283 -327 587 -674 379 -434 563 -636 586 -648 44 -20 90 -20 134 0 23 12 207 214 586 648 304 347 568 650 587 674 31 39 35 50 35 102 0 50 -5 64 -31 96 -49 60 -62 62 -431 63 l-333 1 -2 1069 c-3 1063 -3 1070 -24 1097 -11 15 -33 37 -48 48 -26 20 -41 21 -394 23 -291 2 -373 0 -397 -11z"
                                                                                                    }),
                                                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                                                                        d: "M162 923 l3 -678 26 -56 c33 -71 87 -125 158 -158 l56 -26 2155 0 2155 0 56 26 c71 33 125 87 158 158 l26 56 3 678 3 677 -321 0 -320 0 0 -480 0 -480 -1760 0 -1760 0 0 480 0 480 -320 0 -321 0 3 -677z"
                                                                                                    })
                                                                                                ]
                                                                                            })
                                                                                        })
                                                                                    })
                                                                                ]
                                                                            })
                                                                        }),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                                                            className: "bg-grey-900",
                                                                            xmlns: "http://www.w3.org/2000/svg",
                                                                            version: "1.0",
                                                                            width: "12.000000pt",
                                                                            height: "12.000000pt",
                                                                            viewBox: "0 0 512.000000 512.000000",
                                                                            preserveAspectRatio: "xMidYMid meet",
                                                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("g", {
                                                                                transform: "translate(0.000000,512.000000) scale(0.100000,-0.100000)",
                                                                                fill: "#A0A0A0",
                                                                                stroke: "none",
                                                                                children: [
                                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                                                        d: "M3249 3826 c-19 -7 -45 -19 -57 -28 -12 -8 -358 -347 -770 -754 -411 -406 -840 -830 -953 -942 l-206 -203 -401 418 c-221 230 -423 435 -449 455 -130 102 -310 60 -389 -92 -29 -55 -26 -163 6 -222 16 -30 201 -229 512 -551 268 -278 512 -527 541 -554 59 -54 108 -73 183 -73 105 0 69 -33 1204 1090 580 574 1065 1057 1078 1074 69 94 49 256 -41 332 -72 61 -174 80 -258 50z"
                                                                                    }),
                                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                                                        d: "M4777 3816 c-20 -8 -52 -25 -70 -40 -17 -14 -452 -442 -966 -950 l-935 -925 -63 59 c-103 96 -204 113 -315 53 -85 -46 -128 -121 -128 -223 0 -70 17 -117 61 -169 81 -94 295 -302 328 -317 20 -10 64 -20 98 -22 121 -8 57 -65 1218 1083 578 572 1060 1053 1072 1071 92 133 22 328 -136 382 -45 16 -117 14 -164 -2z"
                                                                                    })
                                                                                ]
                                                                            })
                                                                        })
                                                                    ]
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                })
                                            }, index),
                                            item?.sender_type === "creator" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "px-5 py-5 overflow-y-auto w-full bg-b",
                                                style: {
                                                    backgroundColor: _styles_Colors__WEBPACK_IMPORTED_MODULE_3__/* ["default"].light_bg_clr */ .Z.light_bg_clr
                                                },
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: ` ${messageClass} flex items-center w-full justify-end`,
                                                    children: [
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            className: "",
                                                            children: [
                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                    className: "flex items-center justify-between",
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                                                            className: "font-bold",
                                                                            children: userProfileData?.user?.name
                                                                        }),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                            className: "pt-1 text-gray-500 mx-2",
                                                                            children: formattedDate
                                                                        }),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                            className: "pt-1 text-gray-500 me-2",
                                                                            children: time
                                                                        })
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                    className: ` flex items-end border-4 border-blue-300 chat-message shadow-lg p-2 ${messageClass}`,
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                            href: item?.data,
                                                                            target: "_blank",
                                                                            rel: "noopener noreferrer",
                                                                            style: {
                                                                                width: "100%"
                                                                            },
                                                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                                style: {
                                                                                    position: "relative"
                                                                                },
                                                                                children: [
                                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                                        src: item?.data,
                                                                                        alt: "Image",
                                                                                        style: {
                                                                                            maxWidth: "100%",
                                                                                            maxHeight: "150px",
                                                                                            opacity: 1,
                                                                                            width: "100%"
                                                                                        }
                                                                                    }),
                                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                                        className: "flex items-center justify-center absolute",
                                                                                        style: {
                                                                                            position: "",
                                                                                            top: "50%",
                                                                                            left: "50%",
                                                                                            transform: "translate(-50%, -50%)",
                                                                                            cursor: "pointer",
                                                                                            backgroundColor: "rgb(0 0 0 / 52%)",
                                                                                            borderRadius: "50%",
                                                                                            padding: "5px",
                                                                                            width: "50%",
                                                                                            height: "50%"
                                                                                        },
                                                                                        onClick: (e)=>{
                                                                                            e.stopPropagation(); // Prevent the link from opening
                                                                                        },
                                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                                                                            xmlns: "http://www.w3.org/2000/svg",
                                                                                            version: "1.0",
                                                                                            width: "30.000000pt",
                                                                                            height: "30.000000pt",
                                                                                            viewBox: "0 0 512.000000 512.000000",
                                                                                            preserveAspectRatio: "xMidYMid meet",
                                                                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("g", {
                                                                                                transform: "translate(0.000000,512.000000) scale(0.100000,-0.100000)",
                                                                                                fill: "#fff",
                                                                                                stroke: "none",
                                                                                                children: [
                                                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                                                                        d: "M2175 5106 c-37 -17 -70 -52 -84 -89 -8 -19 -11 -360 -11 -1083 l0 -1054 -332 0 c-303 0 -337 -2 -374 -19 -61 -28 -89 -73 -89 -142 0 -50 5 -63 35 -101 19 -24 283 -327 587 -674 379 -434 563 -636 586 -648 44 -20 90 -20 134 0 23 12 207 214 586 648 304 347 568 650 587 674 31 39 35 50 35 102 0 50 -5 64 -31 96 -49 60 -62 62 -431 63 l-333 1 -2 1069 c-3 1063 -3 1070 -24 1097 -11 15 -33 37 -48 48 -26 20 -41 21 -394 23 -291 2 -373 0 -397 -11z"
                                                                                                    }),
                                                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                                                                        d: "M162 923 l3 -678 26 -56 c33 -71 87 -125 158 -158 l56 -26 2155 0 2155 0 56 26 c71 33 125 87 158 158 l26 56 3 678 3 677 -321 0 -320 0 0 -480 0 -480 -1760 0 -1760 0 0 480 0 480 -320 0 -321 0 3 -677z"
                                                                                                    })
                                                                                                ]
                                                                                            })
                                                                                        })
                                                                                    })
                                                                                ]
                                                                            })
                                                                        }),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                                                            className: "bg-grey-900",
                                                                            xmlns: "http://www.w3.org/2000/svg",
                                                                            version: "1.0",
                                                                            width: "12.000000pt",
                                                                            height: "12.000000pt",
                                                                            viewBox: "0 0 512.000000 512.000000",
                                                                            preserveAspectRatio: "xMidYMid meet",
                                                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("g", {
                                                                                transform: "translate(0.000000,512.000000) scale(0.100000,-0.100000)",
                                                                                fill: "#A0A0A0",
                                                                                stroke: "none",
                                                                                children: [
                                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                                                        d: "M3249 3826 c-19 -7 -45 -19 -57 -28 -12 -8 -358 -347 -770 -754 -411 -406 -840 -830 -953 -942 l-206 -203 -401 418 c-221 230 -423 435 -449 455 -130 102 -310 60 -389 -92 -29 -55 -26 -163 6 -222 16 -30 201 -229 512 -551 268 -278 512 -527 541 -554 59 -54 108 -73 183 -73 105 0 69 -33 1204 1090 580 574 1065 1057 1078 1074 69 94 49 256 -41 332 -72 61 -174 80 -258 50z"
                                                                                    }),
                                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                                                        d: "M4777 3816 c-20 -8 -52 -25 -70 -40 -17 -14 -452 -442 -966 -950 l-935 -925 -63 59 c-103 96 -204 113 -315 53 -85 -46 -128 -121 -128 -223 0 -70 17 -117 61 -169 81 -94 295 -302 328 -317 20 -10 64 -20 98 -22 121 -8 57 -65 1218 1083 578 572 1060 1053 1072 1071 92 133 22 328 -136 382 -45 16 -117 14 -164 -2z"
                                                                                    })
                                                                                ]
                                                                            })
                                                                        })
                                                                    ]
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_5___default()), {
                                                            src: userProfileData?.profile_pic,
                                                            width: 44,
                                                            height: 44,
                                                            className: "rounded-full shadow-lg ms-2",
                                                            alt: ""
                                                        })
                                                    ]
                                                })
                                            }, index)
                                        ]
                                    })
                                });
                            } else if (isVideoLink) {
                                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "px-5 py-5 overflow-y-auto",
                                    style: {
                                        backgroundColor: _styles_Colors__WEBPACK_IMPORTED_MODULE_3__/* ["default"].light_bg_clr */ .Z.light_bg_clr
                                    },
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: `chat-message shadow-lg ${messageClass}`,
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_CreatorVideoEmbed__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                                                url: item?.data
                                            })
                                        })
                                    })
                                }, index);
                            } else if (isYouTubeVideoLink) {
                                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "w-full",
                                        children: [
                                            item?.sender_type === "brand" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "px-5 py-5 overflow-y-auto w-full",
                                                style: {
                                                    backgroundColor: _styles_Colors__WEBPACK_IMPORTED_MODULE_3__/* ["default"].light_bg_clr */ .Z.light_bg_clr
                                                },
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: `chat-message shadow-lg ${!messageClass}`,
                                                    style: {
                                                        padding: 0
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_5___default()), {
                                                            src: userProfileData?.profile_pic,
                                                            width: 44,
                                                            height: 44,
                                                            className: "rounded-full shadow-lg me-2",
                                                            alt: ""
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            className: "",
                                                            children: [
                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                    className: "flex items-center justify-between",
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                                                            className: "font-bold",
                                                                            children: userProfileData?.user?.name
                                                                        }),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                            className: "pt-1 text-gray-500 mx-2",
                                                                            children: formattedDate
                                                                        }),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                            className: "pt-1 text-gray-500 me-2",
                                                                            children: time
                                                                        })
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                    className: `chat-message shadow-lg ${!messageClass}`,
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_CreatorVideoEmbed__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                                                                            url: item?.data
                                                                        })
                                                                    })
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                })
                                            }, index),
                                            item?.sender_type === "creator" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: " overflow-y-auto w-full ",
                                                style: {
                                                    backgroundColor: _styles_Colors__WEBPACK_IMPORTED_MODULE_3__/* ["default"].light_bg_clr */ .Z.light_bg_clr
                                                },
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: ` ${messageClass} flex items-center w-full justify-end`,
                                                    children: [
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            className: "",
                                                            children: [
                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                    className: "flex items-center justify-between",
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                                                            className: "font-bold",
                                                                            children: userProfileData?.user?.name
                                                                        }),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                            className: "pt-1 text-gray-500 mx-2",
                                                                            children: formattedDate
                                                                        }),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                            className: "pt-1 text-gray-500 me-2",
                                                                            children: time
                                                                        })
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                    className: ` flex items-end border-4 border-yellow-300 chat-message shadow-lg ${messageClass}`,
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                        className: " overflow-y-auto",
                                                                        style: {
                                                                            backgroundColor: _styles_Colors__WEBPACK_IMPORTED_MODULE_3__/* ["default"].light_bg_clr */ .Z.light_bg_clr
                                                                        },
                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                            className: `chat-message shadow-lg ${messageClass}`,
                                                                            style: {
                                                                                padding: 0
                                                                            },
                                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_CreatorVideoEmbed__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                                                                                    url: item?.data
                                                                                })
                                                                            })
                                                                        })
                                                                    }, index)
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_5___default()), {
                                                            src: userProfileData?.profile_pic,
                                                            width: 44,
                                                            height: 44,
                                                            className: "rounded-full shadow-lg ms-2",
                                                            alt: ""
                                                        })
                                                    ]
                                                })
                                            }, index)
                                        ]
                                    })
                                });
                            } else if (isInstagramVideoLink) {
                                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "px-5 py-5 overflow-y-auto",
                                    style: {
                                        backgroundColor: _styles_Colors__WEBPACK_IMPORTED_MODULE_3__/* ["default"].light_bg_clr */ .Z.light_bg_clr
                                    },
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: `chat-message shadow-lg ${messageClass}`,
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_CreatorVideoEmbed__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                                                url: item?.data
                                            })
                                        })
                                    })
                                }, index);
                            } else if (item.content === 1 || item.type === "video") {
                                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "px-5 py-5 overflow-y-auto",
                                    style: {
                                        backgroundColor: _styles_Colors__WEBPACK_IMPORTED_MODULE_3__/* ["default"].light_bg_clr */ .Z.light_bg_clr
                                    },
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: `chat-message shadow-lg ${messageClass}`,
                                        children: item.type === "video" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_CreatorVideoEmbed__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                                                url: item?.data
                                            })
                                        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                href: item?.data,
                                                target: "_blank",
                                                rel: "noopener noreferrer",
                                                children: item?.type === "text" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    children: item?.data
                                                }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                                            className: "w-6 h-6",
                                                            fill: "none",
                                                            stroke: "currentColor",
                                                            viewBox: "0 0 24 24",
                                                            xmlns: "http://www.w3.org/2000/svg",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                                strokeLinecap: "round",
                                                                strokeLinejoin: "round",
                                                                strokeWidth: "2",
                                                                d: "M13 10V3L4 14h7v7l9-11h-7z"
                                                            })
                                                        }),
                                                        "Download File"
                                                    ]
                                                })
                                            })
                                        })
                                    })
                                }, index);
                            } else {
                                // Handle other content types or text messages
                                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "w-full",
                                        children: [
                                            item?.sender_type === "brand" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "px-5 py-5 overflow-y-auto w-full",
                                                style: {
                                                    backgroundColor: _styles_Colors__WEBPACK_IMPORTED_MODULE_3__/* ["default"].light_bg_clr */ .Z.light_bg_clr
                                                },
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: ` ${!messageClass} flex items-center`,
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_5___default()), {
                                                            src: campaignBrandData.campaignBrandData?.campaign?.brand?.logo,
                                                            width: 44,
                                                            height: 44,
                                                            className: "rounded-full shadow-lg me-2",
                                                            alt: ""
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            className: "",
                                                            children: [
                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                    className: "flex items-center justify-between",
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                                                            className: "font-bold",
                                                                            children: campaignBrandData.campaignBrandData?.campaign?.brand?.name
                                                                        }),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                            className: "pt-1 text-gray-500 mx-2",
                                                                            children: formattedDate
                                                                        }),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                            className: "pt-1 text-gray-500 me-2",
                                                                            children: time
                                                                        })
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                    className: `flex items-end  justify-between bg-green-200 chat-message shadow-lg p-2 ${!messageClass}`,
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                            className: "pe-10 ps-1",
                                                                            children: item?.data
                                                                        }),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                                                            className: "bg-grey-900",
                                                                            xmlns: "http://www.w3.org/2000/svg",
                                                                            version: "1.0",
                                                                            width: "12.000000pt",
                                                                            height: "12.000000pt",
                                                                            viewBox: "0 0 512.000000 512.000000",
                                                                            preserveAspectRatio: "xMidYMid meet",
                                                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("g", {
                                                                                transform: "translate(0.000000,512.000000) scale(0.100000,-0.100000)",
                                                                                fill: "#A0A0A0",
                                                                                stroke: "none",
                                                                                children: [
                                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                                                        d: "M3249 3826 c-19 -7 -45 -19 -57 -28 -12 -8 -358 -347 -770 -754 -411 -406 -840 -830 -953 -942 l-206 -203 -401 418 c-221 230 -423 435 -449 455 -130 102 -310 60 -389 -92 -29 -55 -26 -163 6 -222 16 -30 201 -229 512 -551 268 -278 512 -527 541 -554 59 -54 108 -73 183 -73 105 0 69 -33 1204 1090 580 574 1065 1057 1078 1074 69 94 49 256 -41 332 -72 61 -174 80 -258 50z"
                                                                                    }),
                                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                                                        d: "M4777 3816 c-20 -8 -52 -25 -70 -40 -17 -14 -452 -442 -966 -950 l-935 -925 -63 59 c-103 96 -204 113 -315 53 -85 -46 -128 -121 -128 -223 0 -70 17 -117 61 -169 81 -94 295 -302 328 -317 20 -10 64 -20 98 -22 121 -8 57 -65 1218 1083 578 572 1060 1053 1072 1071 92 133 22 328 -136 382 -45 16 -117 14 -164 -2z"
                                                                                    })
                                                                                ]
                                                                            })
                                                                        })
                                                                    ]
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                })
                                            }, index),
                                            item?.sender_type === "creator" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "px-5 py-5 overflow-y-auto w-full text-end",
                                                style: {
                                                    backgroundColor: _styles_Colors__WEBPACK_IMPORTED_MODULE_3__/* ["default"].light_bg_clr */ .Z.light_bg_clr
                                                },
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: ` ${messageClass} flex items-center w-full justify-end`,
                                                    children: [
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            className: "",
                                                            children: [
                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                    className: "flex items-center justify-between",
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                                                            className: "font-bold",
                                                                            children: userProfileData?.user?.name
                                                                        }),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                            className: "pt-1 text-gray-500 mx-2",
                                                                            children: formattedDate
                                                                        }),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                            className: "pt-1 text-gray-500 me-2",
                                                                            children: time
                                                                        })
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                    className: `flex items-end justify-between bg-green-200 chat-message shadow-lg p-2 ${messageClass}`,
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                            className: "pe-10 ps-1",
                                                                            children: item?.data
                                                                        }),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                                                            className: "bg-grey-900",
                                                                            xmlns: "http://www.w3.org/2000/svg",
                                                                            version: "1.0",
                                                                            width: "12.000000pt",
                                                                            height: "12.000000pt",
                                                                            viewBox: "0 0 512.000000 512.000000",
                                                                            preserveAspectRatio: "xMidYMid meet",
                                                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("g", {
                                                                                transform: "translate(0.000000,512.000000) scale(0.100000,-0.100000)",
                                                                                fill: "#A0A0A0",
                                                                                stroke: "none",
                                                                                children: [
                                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                                                        d: "M3249 3826 c-19 -7 -45 -19 -57 -28 -12 -8 -358 -347 -770 -754 -411 -406 -840 -830 -953 -942 l-206 -203 -401 418 c-221 230 -423 435 -449 455 -130 102 -310 60 -389 -92 -29 -55 -26 -163 6 -222 16 -30 201 -229 512 -551 268 -278 512 -527 541 -554 59 -54 108 -73 183 -73 105 0 69 -33 1204 1090 580 574 1065 1057 1078 1074 69 94 49 256 -41 332 -72 61 -174 80 -258 50z"
                                                                                    }),
                                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                                                        d: "M4777 3816 c-20 -8 -52 -25 -70 -40 -17 -14 -452 -442 -966 -950 l-935 -925 -63 59 c-103 96 -204 113 -315 53 -85 -46 -128 -121 -128 -223 0 -70 17 -117 61 -169 81 -94 295 -302 328 -317 20 -10 64 -20 98 -22 121 -8 57 -65 1218 1083 578 572 1060 1053 1072 1071 92 133 22 328 -136 382 -45 16 -117 14 -164 -2z"
                                                                                    })
                                                                                ]
                                                                            })
                                                                        })
                                                                    ]
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_5___default()), {
                                                            src: userProfileData?.profile_pic,
                                                            width: 44,
                                                            height: 44,
                                                            className: "rounded-full shadow-lg ms-2",
                                                            alt: ""
                                                        })
                                                    ]
                                                })
                                            }, index)
                                        ]
                                    })
                                });
                            }
                        }),
                        modalOpen && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "modal",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "modal-content",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: "close",
                                        onClick: closeVideoModal,
                                        children: "\xd7"
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("video", {
                                        controls: true,
                                        width: "500",
                                        height: "auto",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("source", {
                                                src: videoUrl,
                                                type: "video/mp4"
                                            }),
                                            "Your browser does not support the video tag."
                                        ]
                                    })
                                ]
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: " flex flex-col h-auto px-5 pb-5 ",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("hr", {
                            className: "my-5"
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                            className: "flex items-center",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                    htmlFor: "voice-search",
                                    className: "sr-only",
                                    children: "Search"
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "relative w-full overflow-y-auto",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                            type: "text",
                                            id: "voice-search",
                                            className: "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-5 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",
                                            placeholder: "Type Something Here......",
                                            value: msgtext,
                                            // value={msgtext || selectedFile}
                                            onChange: (e)=>setMsgtext(e.target.value)
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                            className: "absolute inset-y-0 right-0 flex items-center pr-10",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                                className: "w-4 h-4 text-gray-500 dark:text-gray-400",
                                                "aria-hidden": "true",
                                                xmlns: "http://www.w3.org/2000/svg",
                                                fill: "none",
                                                viewBox: "0 0 20 20",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                    stroke: "currentColor",
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                    strokeWidth: "2",
                                                    d: "M13.408 7.5h.01m-6.876 0h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM4.6 11a5.5 5.5 0 0 0 10.81 0H4.6Z"
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "border",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                    type: "button",
                                                    className: "absolute inset-y-0 right-0 flex items-center pr-3",
                                                    onClick: handleButtonClick,
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                                        className: "w-4 h-4 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white",
                                                        "aria-hidden": "true",
                                                        xmlns: "http://www.w3.org/2000/svg",
                                                        fill: "none",
                                                        viewBox: "0 0 12 20",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                            stroke: "currentColor",
                                                            strokeLinejoin: "round",
                                                            strokeWidth: "2",
                                                            d: "M1 6v8a5 5 0 1 0 10 0V4.5a3.5 3.5 0 1 0-7 0V13a2 2 0 0 0 4 0V6"
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                    type: "file",
                                                    // id="file_text_name"
                                                    // accept="video/*"
                                                    accept: "image/*,video/*",
                                                    onChange: handleFileChange,
                                                    style: {
                                                        display: "none"
                                                    },
                                                    ref: fileInputRef
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                    type: "submit",
                                    className: "inline-flex items-center py-2.5 px-3 ml-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800",
                                    onClick: handleClick,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                        className: "w-4 h-4 rotate-90",
                                        "aria-hidden": "true",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        fill: "currentColor",
                                        viewBox: "0 0 18 20",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                            d: "m17.914 18.594-8-18a1 1 0 0 0-1.828 0l-8 18a1 1 0 0 0 1.157 1.376L8 18.281V9a1 1 0 0 1 2 0v9.281l6.758 1.689a1 1 0 0 0 1.156-1.376Z"
                                        })
                                    })
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_toastify__WEBPACK_IMPORTED_MODULE_8__.ToastContainer, {})
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Creator_chats);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;