"use strict";
exports.id = 5780;
exports.ids = [5780];
exports.modules = {

/***/ 8243:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _images__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8417);
/* harmony import */ var _styles_Colors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6029);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);




const Avatar_green = ({ width , height  })=>{
    return /*#__PURE__*/ _jsx(_Fragment, {
        children: /*#__PURE__*/ _jsxs("div", {
            className: "flex items-center space-x-4 p-2  my-2",
            children: [
                /*#__PURE__*/ _jsxs("div", {
                    className: "relative",
                    children: [
                        /*#__PURE__*/ _jsx(Image, {
                            // className="w-10 h-10 rounded-full"
                            width: width,
                            height: height,
                            className: "rounded-full",
                            alt: "",
                            src: Images.avatar1
                        }),
                        /*#__PURE__*/ _jsx("span", {
                            className: "bottom-0 left-7 absolute  w-3.5 h-3.5 bg-green-400 border-2 border-white dark:border-gray-800 rounded-full"
                        })
                    ]
                }),
                /*#__PURE__*/ _jsxs("div", {
                    className: "font-medium dark:text-white font_size_14 ",
                    children: [
                        /*#__PURE__*/ _jsx("div", {
                            className: "font-medium",
                            style: {
                                lineHeight: "16.94px"
                            },
                            children: "Henry Dholi"
                        }),
                        /*#__PURE__*/ _jsx("div", {
                            className: "text-sm text-gray-500 dark:text-gray-400",
                            style: {
                                lineHeight: "16.94px"
                            },
                            children: "I cam across your profile and..."
                        })
                    ]
                })
            ]
        })
    });
};
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (Avatar_green)));


/***/ }),

/***/ 4875:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _images__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8417);
/* harmony import */ var _styles_Colors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6029);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);




const Avatar_green_bg = ({ item  })=>{
    console.log("Avatar_green_bg", item);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "flex items-center space-x-4 bg-gray-50 p-2 my-2 rounded-md",
            style: {
                background: _styles_Colors__WEBPACK_IMPORTED_MODULE_2__/* ["default"].gray2 */ .Z.gray2
            },
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "relative",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                            // className="w-10 h-10 rounded-full"
                            width: 44,
                            height: 44,
                            className: "rounded-full",
                            alt: "",
                            src: item?.profile_pic
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            className: "bottom-0 left-7 absolute  w-3.5 h-3.5 bg-green-400 border-2 border-white dark:border-gray-800 rounded-full"
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "font-medium dark:text-white font_size_14 ",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "font-medium capitalize",
                        children: item?.user?.name
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Avatar_green_bg);


/***/ }),

/***/ 6708:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _images__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8417);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);



const Avatar_red = ({ item , onClick  })=>{
    console.log("item?.profile_pic", item?.profile_pic);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "flex items-center space-x-4 p-2  my-2 cursor-pointer",
            onClick: onClick,
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "relative",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                            // className="w-10 h-10 rounded-full"
                            width: 44,
                            height: 44,
                            className: "rounded-full",
                            alt: "",
                            // src={Images.avatar2}
                            src: item?.profile_pic ? item?.profile_pic : _images__WEBPACK_IMPORTED_MODULE_1__/* ["default"].avatar1 */ .Z.avatar1
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            className: "bottom-0 left-7 absolute  w-3.5 h-3.5 bg-red-400 border-2 border-white dark:border-gray-800 rounded-full"
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "font-medium dark:text-white font_size_14 ",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "font-medium capitalize",
                        children: "Creator One"
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Avatar_red);


/***/ }),

/***/ 2294:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _generalfunctions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9262);
/* harmony import */ var _styles_Colors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6029);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9915);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3590);
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8819);
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _images__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(8417);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([js_cookie__WEBPACK_IMPORTED_MODULE_3__, react_toastify__WEBPACK_IMPORTED_MODULE_6__]);
([js_cookie__WEBPACK_IMPORTED_MODULE_3__, react_toastify__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);











const Chat = ({ creatorId , chatcreator_data  })=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();
    const [allMessages, setAllMessages] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)([]);
    const [messageSent, setMessageSent] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)();
    const [msgtext, setMsgtext] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)([]);
    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(false);
    const getAllMessages = async ()=>{
        setLoading(true);
        const cookieValue1 = JSON.parse(js_cookie__WEBPACK_IMPORTED_MODULE_3__["default"].get("user_data"));
        console.log("categories cookieValue------------1", cookieValue1?.token);
        const cretaors_unique_id = creatorId.map((item)=>item.creator_id);
        console.log("cretaors_unique_id", cretaors_unique_id[0]);
        const campaign_id = JSON.parse(js_cookie__WEBPACK_IMPORTED_MODULE_3__["default"].get("campaign_id"));
        const apiUrl = "https://backend.creatorsbay.app/api" + _generalfunctions__WEBPACK_IMPORTED_MODULE_1__/* .url */ .HQ; // Use the environment variable
        // const creatorId = JSON.parse(Cookies.get('brand_detail'))
        // console.log("brand detail creator_id", creatorId?.creator);
        const brand_detail = js_cookie__WEBPACK_IMPORTED_MODULE_3__["default"].get("brand_detail");
        const brandIds = js_cookie__WEBPACK_IMPORTED_MODULE_3__["default"].get("brand_id");
        let brandId = null;
        if (brand_detail) {
            try {
                brandId = JSON.parse(brand_detail)?.brand?.id;
            } catch (error) {
                console.error("Error parsing brand_detail:", error);
            }
        }
        if (!brandId && brandIds) {
            try {
                brandId = JSON.parse(brandIds);
            } catch (error) {
                console.error("Error parsing brand_ids:", error);
            }
        }
        console.log("brandId: all msg", brandId);
        try {
            const requestOptions = {
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${cookieValue1?.token}` // Include the token if provided
                }
            };
            const params = new URLSearchParams({
                "brand": brandId,
                "creator": cretaors_unique_id[0],
                "campaign": campaign_id
            });
            const response = await fetch(`${_generalfunctions__WEBPACK_IMPORTED_MODULE_1__/* .url */ .HQ}/messages?${params.toString()}`, requestOptions);
            console.log("campaigns communication------", response);
            if (response.status === 401) {
                react_toastify__WEBPACK_IMPORTED_MODULE_6__.toast.error("Session Expired: Please login again to continue.", {
                    position: "top-center",
                    autoClose: 5000
                });
                router.push("/login");
            } else if (response.status === 429) {
                react_toastify__WEBPACK_IMPORTED_MODULE_6__.toast.error("Too many requests: Please wait for a few minutes to try and login again.", {
                    position: "top-center",
                    autoClose: 5000
                });
                router.push("/login");
            // showToastMessage("Too many requests: Please wait for a few minutes to try and login again.");
            } else if (response.status === 500) {
                react_toastify__WEBPACK_IMPORTED_MODULE_6__.toast.error("Server Error: Please wait while we fix this problem for you.", {
                    position: "top-center",
                    autoClose: 5000
                });
                router.push("/login");
            } else if (!response.ok) {
                throw new Error(`Request failed with status: ${response.status}`);
            }
            // return await response.json();
            const responseData1 = await response.json();
            console.log("all messages communication response:", responseData1.data);
            setAllMessages(responseData1?.data?.data);
            setLoading(false);
        } catch (error) {
            console.error("Error:", error);
            throw error;
        }
    };
    const handleClick = async (e)=>{
        setLoading(true);
        e.preventDefault();
        try {
            let userData = js_cookie__WEBPACK_IMPORTED_MODULE_3__["default"].get("user_data");
            console.log("campaigns cookieValue------------1", userData);
            let campaignId = js_cookie__WEBPACK_IMPORTED_MODULE_3__["default"].get("campaign_id");
            if (typeof userData === "undefined" || campaignId === "undefined") {
                console.log("User not authenticated, navigating to login page...");
                router.push("/login");
                console.log("categories cookieValue----brand--------userId", cookieValue?.token);
            } else {
                const cookieValue1 = JSON.parse(userData);
                const campaign_id = JSON.parse(campaignId);
                const cretaors_unique_id = creatorId.map((item)=>item.creator_id);
                console.log("cretaors_unique_id", cretaors_unique_id[0]);
                const brand_detail = js_cookie__WEBPACK_IMPORTED_MODULE_3__["default"].get("brand_detail");
                const brandIds = js_cookie__WEBPACK_IMPORTED_MODULE_3__["default"].get("brand_id");
                let brandId = null;
                if (brand_detail) {
                    try {
                        brandId = JSON.parse(brand_detail)?.brand?.id;
                    } catch (error) {
                        console.error("Error parsing brand_detail:", error);
                    }
                }
                if (!brandId && brandIds) {
                    try {
                        brandId = JSON.parse(brandIds);
                    } catch (error) {
                        console.error("Error parsing brand_ids:", error);
                    }
                }
                console.log("brandId:", brandId);
                const postData = {
                    "brand_id": brandId,
                    "campaign_id": campaign_id,
                    "creator_id": cretaors_unique_id[0],
                    "sender_type": "brand",
                    "type": "text",
                    "data": msgtext
                };
                const headers = {
                    "Authorization": `Bearer ${cookieValue1?.token}`
                };
                const postResponse = await (0,_generalfunctions__WEBPACK_IMPORTED_MODULE_1__/* .apiCall */ .k_)(`${_generalfunctions__WEBPACK_IMPORTED_MODULE_1__/* .url */ .HQ}/messages`, "Post", postData, headers);
                console.log("handleClick", postResponse);
                if (postResponse.status === "success") {
                    console.log("POST response campaigns-------------:", postResponse?.data);
                    console.log("post messages communication response:", responseData);
                    react_toastify__WEBPACK_IMPORTED_MODULE_6__.toast.success("Message is Sent", {
                        position: "top-center",
                        autoClose: 5000
                    });
                    setMsgtext("");
                    await getAllMessages();
                    setLoading(false);
                } else {
                    react_toastify__WEBPACK_IMPORTED_MODULE_6__.toast.error("Too many requests: Please wait for a few minutes to try and login again.", {
                        position: "top-center",
                        autoClose: 5000
                    });
                }
            }
        } catch (error) {
            console.log("handleClickerror", error);
        }
    };
    // useEffect(() => {
    //     getAllMessages();
    //     // Fetch again whenever the creatorId changes
    //     if (creatorId) {
    //         getAllMessages();
    //     }
    //     // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, [creatorId]);
    console.log("messages----", allMessages, msgtext);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "px-5 py-5 rounded overflow-y-auto",
                children: allMessages.length > 0 ? allMessages.map((message, index)=>{
                    const brand_type = JSON.parse(js_cookie__WEBPACK_IMPORTED_MODULE_3__["default"].get("user_data"));
                    console.log("chat brand_type", brand_type?.user?.type, message.sender_type);
                    const isBrandSender = message.sender_type === "brand";
                    const isBrandReceiver = message.sender_type === "creator";
                    const isLeftAlign = isBrandReceiver;
                    const isRightAlign = isBrandSender;
                    const messageClass = isLeftAlign ? "left-message" : isRightAlign ? "right-message" : "";
                    const textMessageClass = isLeftAlign ? "left-text-message" : isRightAlign ? "right-text-message" : "";
                    const isoDateString = message?.created_at;
                    const date = new Date(isoDateString);
                    const year = date.getFullYear();
                    const month = (date.getMonth() + 1).toString().padStart(2, "0"); // Add 1 because months are zero-based
                    const day = date.getDate().toString().padStart(2, "0");
                    const hours = date.getHours().toString().padStart(2, "0");
                    const minutes = date.getMinutes().toString().padStart(2, "0");
                    const seconds = date.getSeconds().toString().padStart(2, "0");
                    const formattedDate = `${year}-${month}-${day}`;
                    const formattedTime = `${hours}:${minutes}:${seconds}`;
                    console.log("message Formatted Date:", formattedDate);
                    console.log("message Formatted Time:", formattedTime);
                    const timeString = "14:17:02";
                    const parts = timeString.split(":");
                    const twelvehours = parseInt(parts[0], 10);
                    let ampm = "AM";
                    if (twelvehours >= 12) {
                        ampm = "PM";
                    }
                    let twelveHourFormat = twelvehours;
                    if (twelvehours > 12) {
                        twelveHourFormat = twelvehours - 12;
                    }
                    const formattedtweleveTime = `${twelveHourFormat}:${parts[1]}:${parts[2]} ${ampm}`;
                    console.log("formattedtweleveTime Time:", formattedtweleveTime);
                    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "px-10 py-5 overflow-y-auto",
                            style: {
                                backgroundColor: _styles_Colors__WEBPACK_IMPORTED_MODULE_2__/* ["default"].light_bg_clr */ .Z.light_bg_clr
                            },
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: `chat-message shadow-lg capitalize ${messageClass}`,
                                    children: message?.data
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    className: ` ${textMessageClass}`,
                                    children: formattedtweleveTime
                                })
                            ]
                        })
                    });
                }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "mx-5 px-5 flex items-start bg-yellow-500 rounded p-3",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_8___default()), {
                            src: _images__WEBPACK_IMPORTED_MODULE_9__/* ["default"].lock_black_clr */ .Z.lock_black_clr,
                            width: 15,
                            height: 15,
                            alt: "",
                            className: "me-5"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "chat-message text-sm ",
                            children: "Messages are end-to-end encrypted. No one outside of this chat, not even Creatorsbay, can read or listen to them."
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: " flex flex-col h-auto justify-end p-5",
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
                                        placeholder: "Type something here......",
                                        value: msgtext,
                                        onChange: (e)=>setMsgtext(e.target.value)
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                        className: "absolute inset-y-0 right-0 flex items-center pr-10",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                            className: "w-6 h-6 ",
                                            "aria-hidden": "true",
                                            xmlns: "http://www.w3.org/2000/svg",
                                            fill: "#000",
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
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                        type: "button",
                                        className: "absolute inset-y-0 right-0 flex items-center pr-3",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                            className: "w-6 h-6  hover:text-gray-900 dark:hover:text-white",
                                            "aria-hidden": "true",
                                            xmlns: "http://www.w3.org/2000/svg",
                                            fill: "#000",
                                            viewBox: "0 0 12 20",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                stroke: "currentColor",
                                                strokeLinejoin: "round",
                                                strokeWidth: "2",
                                                d: "M1 6v8a5 5 0 1 0 10 0V4.5a3.5 3.5 0 1 0-7 0V13a2 2 0 0 0 4 0V6"
                                            })
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                type: "submit",
                                className: "inline-flex items-center py-2.5 px-3 ml-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800",
                                onClick: handleClick,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                    className: "w-6 h-6 rotate-90",
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
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Chat);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7566:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);

const Searchcomm = ()=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
            className: "flex items-center m-3",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                    htmlFor: "voice-search",
                    className: "sr-only",
                    children: "Search"
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "relative w-full",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                            type: "text",
                            id: "voice-search",
                            className: "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-5 p-2  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",
                            placeholder: "Search..."
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                            type: "button",
                            className: "absolute inset-y-0 right-0 flex items-center pr-3",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                className: "w-4 h-4 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white",
                                "aria-hidden": "true",
                                xmlns: "http://www.w3.org/2000/svg",
                                fill: "none",
                                viewBox: "0 0 20 20",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                    stroke: "currentColor",
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    strokeWidth: "2",
                                    d: "m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                                })
                            })
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Searchcomm);


/***/ }),

/***/ 5780:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _styles_Colors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6029);
/* harmony import */ var _Live_Campaignpage_CollapseLeftDashboard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9744);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _images__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8417);
/* harmony import */ var _Search__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7566);
/* harmony import */ var _Avatar_Avatar_green__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8243);
/* harmony import */ var _Avatar_Avatar_red__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6708);
/* harmony import */ var _Avatar_Avatar_green_bg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(4875);
/* harmony import */ var _Avatar_Avatar_without_badge__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(9409);
/* harmony import */ var _Chat__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(2294);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(9915);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _fetchApiData__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(1434);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _generalfunctions__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(9262);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_16__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Chat__WEBPACK_IMPORTED_MODULE_10__, js_cookie__WEBPACK_IMPORTED_MODULE_11__, _fetchApiData__WEBPACK_IMPORTED_MODULE_13__]);
([_Chat__WEBPACK_IMPORTED_MODULE_10__, js_cookie__WEBPACK_IMPORTED_MODULE_11__, _fetchApiData__WEBPACK_IMPORTED_MODULE_13__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);


















const Communication_page = ()=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_14__.useRouter)();
    const [campaign_data, setCampaign_data] = (0,react__WEBPACK_IMPORTED_MODULE_12__.useState)([]);
    const [creators, setCreators] = (0,react__WEBPACK_IMPORTED_MODULE_12__.useState)([]);
    const [activeData, setActiveData] = (0,react__WEBPACK_IMPORTED_MODULE_12__.useState)([]);
    const [inactiveData, setInactiveData] = (0,react__WEBPACK_IMPORTED_MODULE_12__.useState)([]);
    const creatorIds = campaign_data?.creators?.map((item)=>item.id);
    const [blankchat, setBlankchat] = (0,react__WEBPACK_IMPORTED_MODULE_12__.useState)(true);
    const [campaign_creator_id, setCampaign_creator_id] = (0,react__WEBPACK_IMPORTED_MODULE_12__.useState)([]);
    const [creator_count, setCreator_count] = (0,react__WEBPACK_IMPORTED_MODULE_12__.useState)([]);
    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_12__.useState)(false);
    const Creator_campaignData = async ()=>{
        setLoading(true);
        let userCookie = js_cookie__WEBPACK_IMPORTED_MODULE_11__["default"].get("user_data");
        let campaignId = js_cookie__WEBPACK_IMPORTED_MODULE_11__["default"].get("campaign_id");
        if (typeof userCookie === "undefined" && typeof campaignId === "undefined") {
            router.push("/login");
        }
        if (userCookie) {
            try {
                const cookieValue = JSON.parse(userCookie);
                const campaign_id = JSON.parse(campaignId);
                const headers = {
                    "Accept": "application/json",
                    "Authorization": `Bearer ${cookieValue.token}`,
                    "Content-Type": "application/json"
                };
                fetch(`${_generalfunctions__WEBPACK_IMPORTED_MODULE_15__/* .url */ .HQ}/campaigns/${campaign_id}`, {
                    method: "GET",
                    headers: headers
                }).then((response)=>{
                    console.log("campaigns", response);
                    if (!response.ok) {
                        throw new Error("Network response was not ok");
                    }
                    return response.json();
                }).then((campaignData)=>{
                    setCampaign_data(campaignData?.data);
                    const creatorIds = campaignData?.data?.creators?.map((creator)=>creator);
                    console.log("campaignData", campaignData.data);
                    const activeCreatorIds = creatorIds.filter((id)=>id.approved === 1);
                    const inactiveCreatorIds = creatorIds.filter((id)=>id.approved === 0);
                    console.log("activeCreatorIds", inactiveCreatorIds);
                    const activeCreatorPromises = activeCreatorIds.map((id)=>{
                        return fetch(`${_generalfunctions__WEBPACK_IMPORTED_MODULE_15__/* .url */ .HQ}/creators/${id?.creator_id}&order=desc`, {
                            method: "GET",
                            headers: headers
                        }).then((response)=>{
                            if (!response.ok) {
                                throw new Error("Network response was not ok");
                            }
                            setLoading(false);
                            return response.json();
                        });
                    });
                    const inactiveCreatorPromises = inactiveCreatorIds.map((id)=>{
                        return fetch(`${_generalfunctions__WEBPACK_IMPORTED_MODULE_15__/* .url */ .HQ}/creators/${id?.creator_id}&order=desc`, {
                            method: "GET",
                            headers: headers
                        }).then((response)=>{
                            if (!response.ok) {
                                throw new Error("Network response was not ok");
                            }
                            setLoading(false);
                            return response.json();
                        });
                    });
                    console.log("inactiveCreatorPromises", inactiveCreatorPromises, activeCreatorPromises);
                    Promise.all([
                        ...inactiveCreatorPromises
                    ]).then((creatorInactiveDataArray)=>{
                        setInactiveData(creatorInactiveDataArray);
                        console.log("creatorInactiveDataArray ", creatorInactiveDataArray);
                    }).catch((error)=>{
                        console.error("Fetch error:", error);
                    });
                    Promise.all([
                        ...activeCreatorPromises
                    ]).then((creatorActiveDataArray)=>{
                        setActiveData(creatorActiveDataArray);
                        console.log("creatorActiveDataArray ", creatorActiveDataArray);
                    }).catch((error)=>{
                        console.error("Fetch error:", error);
                    });
                }).catch((error)=>{
                    console.error("Fetch error:", error);
                });
            } catch (error) {
                console.error("Error parsing JSON:", error);
            }
        } else {
            console.error('The "user_data" cookie is not found.');
        }
    };
    (0,react__WEBPACK_IMPORTED_MODULE_12__.useEffect)(()=>{
    // Creator_campaignData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    const uniqueData = [];
    const idSet = new Set();
    for (const item of inactiveData){
        const id = item.data.id;
        if (!idSet.has(id)) {
            idSet.add(id);
            uniqueData.push(item);
        }
    }
    console.log("uniqueData", uniqueData);
    console.log("commmmmmmm", campaign_data, activeData, inactiveData);
    const inActiveClick = (inactive)=>{
        setLoading(true);
        console.log("inactiveinActiveClick", inactive?.data);
        setBlankchat(false);
        const creator_counts = campaign_data?.creators?.filter((item)=>item.creator_id === inactive?.data?.id);
        console.log("creator_count", creator_counts);
        setCreator_count(creator_counts);
        setCreators(inactive?.data);
        setLoading(false);
    };
    const chat_creator_id = creator_count.map((item)=>item?.creator_id);
    console.log("creator_count", creator_count, creators.id);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: loading ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "w-full h-full flex items-center justify-center",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                width: 100,
                height: 100,
                alt: "",
                src: _images__WEBPACK_IMPORTED_MODULE_4__/* ["default"].Loader */ .Z.Loader
            })
        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "flex container_invoice w-full ",
                style: {
                    background: _styles_Colors__WEBPACK_IMPORTED_MODULE_1__/* ["default"].logo_background_clr */ .Z.logo_background_clr
                },
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "m-2  auto-cols-max text-start p-2  w-full  ",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            style: {
                                background: _styles_Colors__WEBPACK_IMPORTED_MODULE_1__/* ["default"].invoice_gradient_clr */ .Z.invoice_gradient_clr
                            },
                            className: "auto-cols-max p-3 rounded-md flex flex-row",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "flex flex-row justify-between items-center  w-full",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "font_size_40",
                                    style: {
                                        color: _styles_Colors__WEBPACK_IMPORTED_MODULE_1__/* ["default"].white_clr */ .Z.white_clr
                                    },
                                    children: "Communication"
                                })
                            })
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "flex flex-row md:flex-wrap lg:flex-nowrap items-start justify-between w-full",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    style: {
                                        background: _styles_Colors__WEBPACK_IMPORTED_MODULE_1__/* ["default"].white_clr */ .Z.white_clr
                                    },
                                    className: "w-full h-auto rounded-md my-3 me-3 lg:w-2/4 md:w-full md:h-auto lg:h-screen overflow-y-auto",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Search__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {}),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: " p-4 border shadow rounded m-3 ",
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "flex flex-row items-center justify-between ",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "font_size_21",
                                                            style: {
                                                                color: _styles_Colors__WEBPACK_IMPORTED_MODULE_1__/* ["default"].pink_clr */ .Z.pink_clr,
                                                                fontWeight: "bold"
                                                            },
                                                            children: "Active Conversations"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            style: {
                                                                background: _styles_Colors__WEBPACK_IMPORTED_MODULE_1__/* ["default"].gray2 */ .Z.gray2,
                                                                borderColor: _styles_Colors__WEBPACK_IMPORTED_MODULE_1__/* ["default"].light_grey_clr */ .Z.light_grey_clr
                                                            },
                                                            className: "px-2 rounded-md border",
                                                            children: activeData?.length ? activeData?.length : 0
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("hr", {
                                                    className: ""
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "py-3",
                                                        children: activeData?.length > 0 ? activeData.map((inactive, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Avatar_Avatar_green_bg__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                                                                    item: inactive?.data
                                                                }, index)
                                                            })) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                                            className: "px-5 py-3",
                                                            children: "No Active Conversations"
                                                        })
                                                    })
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "  p-4 border shadow rounded m-3",
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "flex flex-row items-center justify-between ",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "font_size_21",
                                                            style: {
                                                                color: _styles_Colors__WEBPACK_IMPORTED_MODULE_1__/* ["default"].pink_clr */ .Z.pink_clr,
                                                                fontWeight: "bold"
                                                            },
                                                            children: "InActive Conversations"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            style: {
                                                                background: _styles_Colors__WEBPACK_IMPORTED_MODULE_1__/* ["default"].gray2 */ .Z.gray2,
                                                                borderColor: _styles_Colors__WEBPACK_IMPORTED_MODULE_1__/* ["default"].light_grey_clr */ .Z.light_grey_clr
                                                            },
                                                            className: "px-2 rounded-md border",
                                                            children: "1"
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("hr", {
                                                    className: ""
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "py-3",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Avatar_Avatar_red__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                                                            onClick: ()=>setBlankchat(false)
                                                        })
                                                    })
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: " lg:h-screen h-auto rounded-md my-3 overflow-y-auto me-3 w-full",
                                    style: {
                                        background: _styles_Colors__WEBPACK_IMPORTED_MODULE_1__/* ["default"].white_clr */ .Z.white_clr
                                    },
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: " bg-zinc-100 h-full",
                                        children: [
                                            blankchat && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "flex flex-col items-center p-4 h-full justify-center max-w-lg mx-auto",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                        src: _images__WEBPACK_IMPORTED_MODULE_4__/* ["default"].chat_box_placeholder */ .Z.chat_box_placeholder,
                                                        width: 150,
                                                        height: 150,
                                                        className: "rounded",
                                                        alt: ""
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        className: "text-center py-5",
                                                        children: "Make calls, share your screen and get a faster experience when you download the Windows app."
                                                    })
                                                ]
                                            }),
                                            !blankchat && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                children: [
                                                    creators && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            className: "flex flex-row items-center p-4 justify-between ",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Avatar_Avatar_without_badge__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                                                                    item: creators
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                    style: {
                                                                        background: _styles_Colors__WEBPACK_IMPORTED_MODULE_1__/* ["default"].gray2 */ .Z.gray2
                                                                    },
                                                                    className: "py-3 px-3 rounded-md",
                                                                    children: creator_count?.length > 0 && creator_count?.slice(0, 1).map((item, index)=>{
                                                                        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                                                type: "button",
                                                                                className: `focus:outline-none text-white ${item?.approved === 0 ? `bg-red-700 hover:bg-red-800 focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800` : `bg-green-700 hover:bg-green-800 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 focus:ring-green-300`} focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2`,
                                                                                children: item?.approved === 0 ? "Inactive" : "active"
                                                                            })
                                                                        });
                                                                    })
                                                                })
                                                            ]
                                                        })
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("hr", {
                                                        className: ""
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: " bg-zinc-100 flex flex-col justify-end ",
                                                        style: {
                                                            height: "100vh"
                                                        },
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Chat__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                                                            creatorId: creator_count,
                                                            chatcreator_data: chat_creator_id
                                                        })
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    style: {
                                        background: _styles_Colors__WEBPACK_IMPORTED_MODULE_1__/* ["default"].white_clr */ .Z.white_clr
                                    },
                                    className: "w-full h-auto rounded-md my-3 lg:w-2/4 lg:h-screen overflow-y-auto",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "font_size_21  p-4 capitalize",
                                            style: {
                                                color: _styles_Colors__WEBPACK_IMPORTED_MODULE_1__/* ["default"].pink_clr */ .Z.pink_clr,
                                                fontWeight: "bold"
                                            },
                                            children: "Campaign info"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("hr", {
                                            className: ""
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: " border shadow rounded m-3",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "p-4 capitalize",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                        children: "Ant Studio llp"
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "px-4",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                            src: _images__WEBPACK_IMPORTED_MODULE_4__/* ["default"].card_img */ .Z.card_img,
                                                            height: 200,
                                                            width: 450,
                                                            className: "mx-auto",
                                                            alt: ""
                                                        }),
                                                        campaign_data?.references?.length > 0 && campaign_data?.references.map((item, index)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                                children: [
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                                        className: "font-bold underline",
                                                                        children: "Products"
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                                        className: "capitalize my-1",
                                                                        children: item.name
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                                                        className: "mb-5 normal-case",
                                                                        children: item.description
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                                        src: item?.link,
                                                                        height: 200,
                                                                        width: 200,
                                                                        className: "mx-auto",
                                                                        alt: item.name
                                                                    }, index)
                                                                ]
                                                            })),
                                                        campaign_data?.products?.length > 0 && campaign_data?.products.map((item, index)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                                children: [
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                                        className: "font-bold underline",
                                                                        children: "References"
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                                        children: item.name
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                                                        children: item.description
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                                        src: item?.link,
                                                                        height: 216,
                                                                        width: 278,
                                                                        className: "mx-auto",
                                                                        alt: ""
                                                                    }, index)
                                                                ]
                                                            })),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "font_size_16 communication_text py-2 normal-case my-5",
                                                            children: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: " border shadow rounded mx-3 my-4 py-4 px-3",
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "flex px-4 items-center",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                            htmlFor: "first_name",
                                                            className: "block mb-2 text-sm font-medium text-gray-900 dark:text-white w-full",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                children: "Image Count : "
                                                            })
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "px-3",
                                                            children: "1/2"
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "flex px-4 items-center",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                            htmlFor: "first_name",
                                                            className: "block mb-2 text-sm font-medium text-gray-900 dark:text-white w-full",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                children: " Video Count : "
                                                            })
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "px-3",
                                                            children: "0/2"
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "flex px-4 items-center",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                            htmlFor: "first_name",
                                                            className: "block mb-2 text-sm font-medium text-gray-900 dark:text-white w-full",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                children: " Revision Submitted :"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "px-3",
                                                            children: "0/2"
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                })
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Communication_page);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1434:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* unused harmony export fetchApiData */
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3590);
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8819);
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_2__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_toastify__WEBPACK_IMPORTED_MODULE_1__]);
react_toastify__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




const fetchApiData = async (url, method, data = null, headers = {}, loaderElement, token = null, router)=>{
    const apiUrl = "https://backend.creatorsbay.app/api" + url; // Use the environment variable
    try {
        const requestOptions = {
            method,
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                ...token ? {
                    "Authorization": `Bearer ${token}`
                } : {},
                ...headers
            }
        };
        if (data !== null) {
            requestOptions.body = JSON.stringify(data);
        }
        const response = await fetch(apiUrl, requestOptions);
        if (response.status === 401) {
            toast.error("Session Expired: Please login again to continue.", {
                position: "top-center",
                autoClose: 5000
            });
            router.push("/login");
        } else if (response.status === 429) {
            toast.error("Too many requests: Please wait for a few minutes to try and login again.", {
                position: "top-center",
                autoClose: 5000
            });
            router.push("/login");
        // showToastMessage("Too many requests: Please wait for a few minutes to try and login again.");
        } else if (response.status === 500) {
            toast.error("Server Error: Please wait while we fix this problem for you.", {
                position: "top-center",
                autoClose: 5000
            });
            router.push("/login");
        } else if (!response.ok) {
            throw new Error(`Request failed with status: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error("Error:", error);
        throw error;
    }
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;