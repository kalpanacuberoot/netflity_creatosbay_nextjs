"use strict";
exports.id = 2060;
exports.ids = [2060];
exports.modules = {

/***/ 2098:
/***/ ((module, __unused_webpack___webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Homepage_leftDashboard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6255);
/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4802);
/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(cookie__WEBPACK_IMPORTED_MODULE_3__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Homepage_leftDashboard__WEBPACK_IMPORTED_MODULE_2__]);
_Homepage_leftDashboard__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




const All_component_layout = ({ children  })=>{
    // const router = useRouter();
    // const cookies = parse(document.cookie);
    // const cookieValue = cookies.user_data ? JSON.parse(cookies.user_data) : undefined;
    // if (cookieValue === undefined) {
    //     router.push('/login');
    // }
    // if (JSON.parse(Cookies.get('user_data')) || JSON.parse(Cookies.get('brand_detail')) === "undefined") {
    //     router.push('/login')
    // }
    return /*#__PURE__*/ _jsx(_Fragment, {
        children: /*#__PURE__*/ _jsx(Left_Dashboard, {
            children: children
        })
    });
};
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (All_component_layout)));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4655:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4146);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(date_fns__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _images__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8417);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_5__);






const Calendar_component = ()=>{
    const currentDate = new Date(); // Get the current date
    const [startDate, setStartDate] = useState(currentDate);
    const [endDate, setEndDate] = useState(null);
    const router = useRouter();
    const handlePrevClick = ()=>{
        setStartDate((prevStartDate)=>subDays(prevStartDate, 7));
    };
    const handleNextClick = ()=>{
        setStartDate((prevStartDate)=>addDays(prevStartDate, 7));
    };
    const handleDateClick = (date)=>{
        if (!startDate || startDate && endDate) {
            // If no start date is set or both start and end dates are set, set a new start date
            setStartDate(date);
            setEndDate(null);
        } else if (date > startDate) {
            // If a start date is set and the clicked date is after the start date, set the end date
            setEndDate(date);
        }
        router.push({
            pathname: "/campaign_info",
            query: {
                start_date: startDate.toISOString(),
                end_date: date.toISOString()
            }
        });
    };
    const getWeek = (startOfWeek)=>{
        const week = [];
        let currentDate = startOfWeek;
        for(let i = 0; i < 7; i++){
            const isToday = isSameDay(currentDate, new Date());
            const isSelected = startDate && (isSameDay(currentDate, startDate) || endDate && isSameDay(currentDate, endDate));
            week.push(/*#__PURE__*/ _jsxs("div", {
                className: `text-center p-2 ${!isSameMonth(currentDate, startDate || currentDate) ? "text-gray-400" : ""} ${isToday ? "bg-blue-200" : ""} ${isSelected ? "bg-green-200" : ""}`,
                onClick: ()=>handleDateClick(currentDate),
                children: [
                    /*#__PURE__*/ _jsx("div", {
                        children: format(currentDate, "E")
                    }),
                    /*#__PURE__*/ _jsx("div", {
                        children: format(currentDate, "dd")
                    }),
                    /*#__PURE__*/ _jsx("div", {
                        children: format(currentDate, "MMM")
                    })
                ]
            }, i));
            currentDate = addDays(currentDate, 1);
        }
        return week;
    };
    return /*#__PURE__*/ _jsx("div", {
        children: /*#__PURE__*/ _jsxs("div", {
            className: "mb-4 flex justify-between items-center",
            children: [
                /*#__PURE__*/ _jsx("div", {
                    className: "",
                    onClick: handlePrevClick,
                    children: /*#__PURE__*/ _jsx(Image, {
                        src: Images.arrowleft_icon,
                        width: 30,
                        alt: ""
                    })
                }),
                /*#__PURE__*/ _jsx("div", {
                    className: "grid grid-cols-7 gap-2",
                    children: getWeek(startOfWeek(startDate))
                }),
                /*#__PURE__*/ _jsx("div", {
                    onClick: handleNextClick,
                    children: /*#__PURE__*/ _jsx(Image, {
                        src: Images.arrowright_icon,
                        width: 30,
                        alt: ""
                    })
                })
            ]
        })
    });
};
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (Calendar_component)));


/***/ }),

/***/ 360:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _images__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8417);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9132);
/* harmony import */ var _styles_Colors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6029);
/* harmony import */ var _components_four_social_media__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5334);
/* harmony import */ var _components_Homepage_ModalHeader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8070);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(3590);
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(8819);
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(9915);
/* harmony import */ var _generalfunctions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(9262);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_12__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_toastify__WEBPACK_IMPORTED_MODULE_8__, js_cookie__WEBPACK_IMPORTED_MODULE_10__]);
([react_toastify__WEBPACK_IMPORTED_MODULE_8__, js_cookie__WEBPACK_IMPORTED_MODULE_10__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);














const Image_content = ({ onPopupData , onClose  })=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_12__.useRouter)();
    const IMAGE_URL = "https://creatorsbay-media-bucket.s3.ap-south-1.amazonaws.com";
    const [file, setFile] = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(null);
    const [description, setDescription] = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)("");
    const [name, setName] = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)("");
    const [previewImage, setPreviewImage] = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(null);
    const refImage1 = (0,react__WEBPACK_IMPORTED_MODULE_7__.useRef)(null);
    const handleFileChange = (event)=>{
        const selectedFile = event.target.files[0];
        console.log("product handleFileChange", selectedFile);
        if (selectedFile) {
            const reader = new FileReader();
            reader.onloadend = ()=>{
                setFile(selectedFile);
                setPreviewImage(reader.result);
            };
            reader.readAsDataURL(selectedFile);
        } else {
            setFile(null);
            setPreviewImage(null);
        }
    };
    console.log("fileslected product image", file);
    const handleSubmit = async ()=>{
        if (!file) {
            alert("Please select an image to upload.");
            return;
        }
        const cookieValue = JSON.parse(js_cookie__WEBPACK_IMPORTED_MODULE_10__["default"].get("user_data"));
        console.log("categories cookieValue------------2", cookieValue?.token);
        const formData = new FormData();
        formData.append("file", file);
        try {
            const response = await fetch(`${_generalfunctions__WEBPACK_IMPORTED_MODULE_11__/* .url */ .HQ}/saveimage`, {
                method: "POST",
                headers: {
                    "Authorization": `Bearer ${cookieValue?.token}`
                },
                body: formData
            });
            console.log("response image data", response);
            if (response.ok) {
                const data = await response.json();
                setFile(data?.url);
                console.log("image response ok", data?.url);
                react_toastify__WEBPACK_IMPORTED_MODULE_8__.toast.success("Image Uploaded Successfully", {
                    position: "top-center",
                    autoClose: 2000
                });
                await sendDataToParent(data?.url);
            } else if (response.status === 413) {
                react_toastify__WEBPACK_IMPORTED_MODULE_8__.toast.success("Image size is too large", {
                    position: "top-center",
                    autoClose: 2000
                });
            } else {
                react_toastify__WEBPACK_IMPORTED_MODULE_8__.toast.error("Image upload failed", {
                    position: "top-center",
                    autoClose: 3000
                });
            }
        } catch (error) {
            console.error("Error uploading image:", error);
            react_toastify__WEBPACK_IMPORTED_MODULE_8__.toast.error("Please uplaod the image again", {
                position: "top-center",
                autoClose: 3000
            });
        }
    };
    console.log("dfdsafdsfds", file);
    const sendDataToParent = async (imageUrl)=>{
        const link = file;
        console.log("imgrddsa product popup----1", file, link);
        const data = [
            {
                link: imageUrl,
                description,
                name
            }
        ];
        console.log("popupdata---", data);
        onPopupData(data);
        react_toastify__WEBPACK_IMPORTED_MODULE_8__.toast.success("Data is saved", {
            position: "top-center",
            autoClose: 3000
        });
        onClose();
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "relative bg-white rounded-lg shadow dark:bg-gray-700 min-w-sm",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Homepage_ModalHeader__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {}),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "space-y-6 container-fluid p-14 pb-5",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "border rounded-lg px-10  text-center shadow-lg",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "my-3",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                    type: "text",
                                    id: "text",
                                    className: "appearance-none border rounded-md w-full mt-5 bg-gray-100  py-5 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",
                                    placeholder: "Product Name",
                                    required: true,
                                    value: name,
                                    onChange: (e)=>setName(e.target.value)
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: " ",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: " focus:border-purple-500 focus:ring-purple-500 border-dotted h-48 align-middle border-4 rounded-lg bg-white py-4 px-6 flex flex-col items-center justify-center",
                                    onChange: handleFileChange,
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                        htmlFor: "productfileInput",
                                        style: {
                                            borderColor: _styles_Colors__WEBPACK_IMPORTED_MODULE_4__/* ["default"].logo_clr */ .Z.logo_clr
                                        },
                                        className: "w-auto py-5",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                        id: "productfileInput",
                                                        type: "file",
                                                        accept: "image/*",
                                                        className: "absolute w-screen hidden "
                                                    }),
                                                    !file && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                        src: _images__WEBPACK_IMPORTED_MODULE_1__/* ["default"].plus_icon */ .Z.plus_icon,
                                                        width: 15,
                                                        height: 15,
                                                        alt: "",
                                                        className: "mx-auto cursor-default m-5 mb-0"
                                                    })
                                                ]
                                            }),
                                            previewImage && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                src: previewImage,
                                                alt: "Selected",
                                                style: {
                                                    maxWidth: "100%",
                                                    maxHeight: "300px"
                                                },
                                                width: 50,
                                                height: 50,
                                                className: "mx-auto"
                                            }),
                                            file && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                className: "text-base text-center",
                                                children: file?.name
                                            })
                                        ]
                                    })
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("textarea", {
                                id: "descriptionInput",
                                type: "text",
                                placeholder: "Product Description",
                                className: "appearance-none border rounded-md w-full align-top mt-5 bg-gray-100 h-40 py-5 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",
                                rows: 4,
                                value: description,
                                onChange: (e)=>setDescription(e.target.value),
                                required: true
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Button__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                buttoncss: "font_size_24 leading-6 py-3 button_clr my-5",
                                label: "Submit",
                                // onClick={sendDataToParent}
                                onClick: handleSubmit
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_toastify__WEBPACK_IMPORTED_MODULE_8__.ToastContainer, {})
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Image_content);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9849:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const Image_popup = ({ isOpen , onClose , children  })=>{
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const handleOutsideClick = (event)=>{
            if (!event.target.closest(".modal-content")) {
                onClose();
            }
        };
        if (isOpen) {
            document.addEventListener("mousedown", handleOutsideClick);
        } else {
            document.removeEventListener("mousedown", handleOutsideClick);
        }
        return ()=>{
            document.removeEventListener("mousedown", handleOutsideClick);
        };
    }, [
        isOpen,
        onClose
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: `fixed inset-0 flex  z-50 justify-center items-center bg-black bg-opacity-50 ${isOpen ? "visible" : "hidden"}`,
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "modal-content bg-white rounded shadow-md",
                children: children
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Image_popup);


/***/ }),

/***/ 8918:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _images__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8417);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9132);
/* harmony import */ var _styles_Colors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6029);
/* harmony import */ var _components_four_social_media__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5334);
/* harmony import */ var _components_Homepage_ModalHeader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8070);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(3590);
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(8819);
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(9915);
/* harmony import */ var _generalfunctions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(9262);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_toastify__WEBPACK_IMPORTED_MODULE_8__, js_cookie__WEBPACK_IMPORTED_MODULE_10__]);
([react_toastify__WEBPACK_IMPORTED_MODULE_8__, js_cookie__WEBPACK_IMPORTED_MODULE_10__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);













const Ref_Image_content = ({ refpopupData  })=>{
    const IMAGE_URL = "https://creatorsbay-media-bucket.s3.ap-south-1.amazonaws.com";
    const [file2, setFile2] = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(null);
    const [description, setDescription] = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)("");
    const [name, setName] = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)("");
    const [previewRefImage, setPreviewRefImage] = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(null);
    const refImage2 = (0,react__WEBPACK_IMPORTED_MODULE_7__.useRef)(null);
    const handleRefFileChange = (event)=>{
        const selectedRefFile = event.target.files[0];
        console.log("fileslected and ref", file2, selectedRefFile);
        if (selectedRefFile) {
            const reader = new FileReader();
            reader.onloadend = ()=>{
                setFile2(selectedRefFile);
                setPreviewRefImage(reader.result);
            };
            reader.readAsDataURL(selectedRefFile);
        } else {
            setFile2(null);
            setPreviewRefImage(null);
        }
    };
    console.log("fileslected and ref", file2);
    const handleRefUploadClick = async (refimageUrl)=>{
        if (!file2) {
            alert("Please select an image to upload.");
            return;
        }
        const cookieValue = JSON.parse(js_cookie__WEBPACK_IMPORTED_MODULE_10__["default"].get("user_data"));
        console.log("categories cookieValue------------2", cookieValue?.token);
        const formData = new FormData();
        formData.append("file", file2);
        try {
            const response = await fetch(`${_generalfunctions__WEBPACK_IMPORTED_MODULE_11__/* .url */ .HQ}/saveimage`, {
                method: "POST",
                headers: {
                    "Authorization": `Bearer ${cookieValue?.token}`,
                    "Accept": "/application/json"
                },
                body: formData
            });
            console.log("response image data popup", response);
            if (response.ok) {
                const data = await response.json();
                setFile2(data?.url);
                console.log("image response ok", data?.url);
                react_toastify__WEBPACK_IMPORTED_MODULE_8__.toast.success("Image Uploaded Successfully", {
                    position: "top-center",
                    autoClose: 2000
                });
                await sendRefDataToParent(data?.url);
            } else if (response.status === 413) {
                react_toastify__WEBPACK_IMPORTED_MODULE_8__.toast.success("Image size is too large", {
                    position: "top-center",
                    autoClose: 2000
                });
            } else {
                react_toastify__WEBPACK_IMPORTED_MODULE_8__.toast.error("Image upload failed", {
                    position: "top-center",
                    autoClose: 3000
                });
            }
        } catch (error) {
            console.error("Error uploading image:", error);
            react_toastify__WEBPACK_IMPORTED_MODULE_8__.toast.error("Please uplaod the image again", {
                position: "top-center",
                autoClose: 3000
            });
        }
    };
    console.log("dftyftyfrefernce", file2);
    const sendRefDataToParent = async (refimageUrl)=>{
        const link = file2;
        console.log("imgrddsa product popup----1", file2, link);
        console.log("imgrddsa product popup-----2", file2);
        const data = [
            {
                link: refimageUrl,
                description,
                name
            }
        ];
        console.log("refpopupdata---", data);
        refpopupData(data);
        react_toastify__WEBPACK_IMPORTED_MODULE_8__.toast.success("Data is saved", {
            position: "top-center",
            autoClose: 3000
        });
        onClose();
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "relative bg-white rounded-lg shadow dark:bg-gray-700",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Homepage_ModalHeader__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {}),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "space-y-6 container-fluid p-14 pb-5",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "border rounded-lg px-10  text-center shadow-lg",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "my-3",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                    type: "text",
                                    id: "text",
                                    className: "appearance-none border rounded-md w-full mt-5 bg-gray-100  py-5 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",
                                    placeholder: "Reference Name",
                                    required: true,
                                    value: name,
                                    onChange: (e)=>setName(e.target.value)
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: " ",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: " border-dotted h-34 align-middle border-4 rounded-lg bg-white py-4 px-6 flex flex-col items-center justify-center",
                                    onChange: handleRefFileChange,
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                        htmlFor: "reffileInput",
                                        style: {
                                            borderColor: _styles_Colors__WEBPACK_IMPORTED_MODULE_4__/* ["default"].logo_clr */ .Z.logo_clr
                                        },
                                        className: " ",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: " w-full text-center",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                        id: "reffileInput",
                                                        type: "file",
                                                        accept: "image/*",
                                                        ref: refImage2,
                                                        className: "hidden absolute w-full"
                                                    }),
                                                    !file2 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                        src: _images__WEBPACK_IMPORTED_MODULE_1__/* ["default"].plus_icon */ .Z.plus_icon,
                                                        width: 15,
                                                        height: 15,
                                                        alt: "",
                                                        className: "cursor-default mx-auto m-5 "
                                                    })
                                                ]
                                            }),
                                            previewRefImage && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                src: previewRefImage,
                                                alt: "Selected",
                                                style: {
                                                    maxWidth: "100%",
                                                    maxHeight: "300px"
                                                },
                                                width: 50,
                                                height: 50,
                                                className: "mx-auto"
                                            }),
                                            file2 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                                                className: "text-base text-center",
                                                children: file2?.name
                                            }),
                                            !file2 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "p-10 text-base   text-gray-300 p-5 rounded",
                                                children: "Upload Media"
                                            })
                                        ]
                                    })
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("textarea", {
                                // id="descriptionInput"
                                type: "text",
                                placeholder: "Reference Description",
                                className: "appearance-none border rounded-md w-full align-top mt-5 bg-gray-100 h-40 py-5 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",
                                rows: 4,
                                value: description,
                                onChange: (e)=>setDescription(e.target.value),
                                required: true
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Button__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                buttoncss: "font_size_24 leading-6 py-3 button_clr my-5",
                                label: "Submit",
                                onClick: handleRefUploadClick
                            })
                        ]
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Ref_Image_content);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2140:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const Ref_Imagepop = ({ isOpen , onClose , children  })=>{
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const handleOutsideClick = (event)=>{
            if (!event.target.closest(".modal-content")) {
                onClose();
            }
        };
        if (isOpen) {
            document.addEventListener("mousedown", handleOutsideClick);
        } else {
            document.removeEventListener("mousedown", handleOutsideClick);
        }
        return ()=>{
            document.removeEventListener("mousedown", handleOutsideClick);
        };
    }, [
        isOpen,
        onClose
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: `fixed inset-0 flex  z-50 justify-center items-center bg-black bg-opacity-50 ${isOpen ? "visible" : "hidden"}`,
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "modal-content bg-white rounded shadow-md",
                children: children
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Ref_Imagepop);


/***/ }),

/***/ 915:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_Colors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6029);
/* harmony import */ var _Homepage_leftDashboard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6255);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _images__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8417);
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9132);
/* harmony import */ var _Calendar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4655);
/* harmony import */ var _ImagePopup__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9849);
/* harmony import */ var _ImagePopup_Image_content__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(360);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(9915);
/* harmony import */ var _generalfunctions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(9262);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(3590);
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(8819);
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _Ref_Imagepop__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(2140);
/* harmony import */ var _Ref_Imagepop_Ref_Image_content__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(8918);
/* harmony import */ var _Invoicepage_daterangepicker__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(9761);
/* harmony import */ var react_datepicker__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(983);
/* harmony import */ var react_datepicker__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(react_datepicker__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var react_datepicker_dist_react_datepicker_css__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(5994);
/* harmony import */ var react_datepicker_dist_react_datepicker_css__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(react_datepicker_dist_react_datepicker_css__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(1635);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _mui_x_date_pickers_LocalizationProvider__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(5753);
/* harmony import */ var _mui_x_date_pickers_LocalizationProvider__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(_mui_x_date_pickers_LocalizationProvider__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var _mui_x_date_pickers_AdapterDayjs__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(298);
/* harmony import */ var _mui_x_date_pickers_AdapterDayjs__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(_mui_x_date_pickers_AdapterDayjs__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var _mui_x_date_pickers_pro_StaticDateRangePicker__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(3046);
/* harmony import */ var _mui_x_date_pickers_pro_StaticDateRangePicker__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(_mui_x_date_pickers_pro_StaticDateRangePicker__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var _mui_x_date_pickers_PickersShortcuts__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(9607);
/* harmony import */ var _mui_x_date_pickers_PickersShortcuts__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(_mui_x_date_pickers_PickersShortcuts__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var _mui_x_date_pickers_pro__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(6836);
/* harmony import */ var _mui_x_date_pickers_pro__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(_mui_x_date_pickers_pro__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var _mui_material_TextField__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(6042);
/* harmony import */ var _mui_material_TextField__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(_mui_material_TextField__WEBPACK_IMPORTED_MODULE_26__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Homepage_leftDashboard__WEBPACK_IMPORTED_MODULE_3__, _ImagePopup_Image_content__WEBPACK_IMPORTED_MODULE_9__, js_cookie__WEBPACK_IMPORTED_MODULE_10__, react_toastify__WEBPACK_IMPORTED_MODULE_12__, _Ref_Imagepop_Ref_Image_content__WEBPACK_IMPORTED_MODULE_16__]);
([_Homepage_leftDashboard__WEBPACK_IMPORTED_MODULE_3__, _ImagePopup_Image_content__WEBPACK_IMPORTED_MODULE_9__, js_cookie__WEBPACK_IMPORTED_MODULE_10__, react_toastify__WEBPACK_IMPORTED_MODULE_12__, _Ref_Imagepop_Ref_Image_content__WEBPACK_IMPORTED_MODULE_16__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





























const Campaign_infopage = ()=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_14__.useRouter)();
    const shortcutsItems = [
        // {
        //   label: 'This Week',
        //   getValue: () => {
        //     const startOfCurrentWeek = today.startOf('week');
        //     const endOfCurrentWeek = today.endOf('week');
        //     return [startOfCurrentWeek, endOfCurrentWeek];
        //   },
        // },
        {
            label: "Current Month",
            getValue: ()=>{
                const startOfCurrentMonth = today.startOf("month");
                const endOfCurrentMonth = today.endOf("month");
                return [
                    startOfCurrentMonth,
                    endOfCurrentMonth
                ];
            }
        },
        {
            label: "Next Month",
            getValue: ()=>{
                const startOfNextMonth = today.endOf("month").add(1, "day");
                const endOfNextMonth = startOfNextMonth.endOf("month");
                return [
                    startOfNextMonth,
                    endOfNextMonth
                ];
            }
        },
        {
            label: "Reset",
            getValue: ()=>[
                    null,
                    null
                ]
        }
    ];
    const today = dayjs__WEBPACK_IMPORTED_MODULE_20___default()();
    const initialDateRange = shortcutsItems[0].getValue(); // Set initial date range
    const handleDateChange = (dateRange)=>{
        const [start, end] = dateRange;
        console.log("handleDateChange", start, end);
        const minimumDate = start.add(15, "day");
        // const starting_data = start[0]?.$D-start[0]?.$M-start[0]?.$y
        console.log("starting_data", start.format("YYYY-MM-DD"));
        setManualStartDate(start.format("YYYY-MM-DD"));
        setManualEndDate(end.format("YYYY-MM-DD"));
        if (end.isBefore(minimumDate)) {
            alert("Please select a date range with a minimum of 15 days between the start and end dates.");
        } else {
            setSelectedRange(dateRange);
        }
    };
    const [selectedRange, setSelectedRange] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(initialDateRange);
    const [dateInput, setDateInput] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [manualStartDate, setManualStartDate] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [manualEndDate, setManualEndDate] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [calendarVisible, setCalendarVisible] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    // const handleDateChange = (dateRange) => {
    //   setSelectedRange(dateRange);
    // };
    const handleDateInputChange = (event)=>{
        setDateInput(event.target.value);
    };
    console.log("selectedRangeselectedRange", selectedRange);
    const handleApplyDateInput = ()=>{
        setManualStartDate(selectedRange[0]);
        setManualEndDate(selectedRange[1]);
    // const parsedDate = dayjs(dateInput, 'YYYY-MM-DD');
    // if (parsedDate.isValid()) {
    //   const newDateRange = [parsedDate, parsedDate];
    //   setSelectedRange(newDateRange);
    // } else {
    //   alert('Invalid date format. Please use YYYY-MM-DD.');
    // }
    };
    const currentDate = new Date();
    const [selectedDate, setSelectedDate] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const [startRangeDate, setStartRangeDate] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const [endRangeDate, setEndRangeDate] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const inputFileRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const [isModalOpen, setIsModalOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [isModalOpenRef, setIsModalOpenRef] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [campaign_name, setCampaign_name] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [campaign_desc, setCampaign_desc] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [popupData, setPopupData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)( true ? [] : 0);
    const [refpopupData, setRefpopupData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)( true ? [] : 0);
    const [startDate, setStartDate] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const [endDate, setEndDate] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const [product_link, setProduct_link] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [ref_link, setRef_link] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [isMobile, setIsMobile] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [suggestions, setSuggestions] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const handleRefPopupData = (data)=>{
        setPopupData(data);
    };
    const handlePopupData = (data)=>{
        setRefpopupData(data);
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        checkIsMobile();
        window.addEventListener("resize", checkIsMobile);
        const { start_date , end_date  } = router.query;
        if (start_date && end_date) {
            setStartRangeDate(new Date(start_date));
            setEndRangeDate(new Date(end_date));
        }
        return ()=>{
            window.removeEventListener("resize", checkIsMobile);
        };
    }, [
        router.query
    ]);
    // const handleGrammarCheck = async () => {
    //   try {
    //     const response = await fetch('https://api.grammarly.com/v1/check', {
    //       method: 'POST',
    //       headers: {
    //         'Authorization': 'Bearer 212|uidNhXXZLJ56a0K4HF1kuKUa1AbSu3G8p3cvapNl', // Replace with your Grammarly API key
    //         'Content-Type': 'application/json',
    //       },
    //       body: JSON.stringify({
    //         "text":campaign_desc,
    //         "language": 'en-US',
    //       }),
    //     });
    //     if (!response.ok) {
    //       throw new Error('Failed to fetch data');
    //     }
    //     console.log("handlegrammarcheckresponse",response);
    //     const data = await response.json();
    //     console.log("handlegrammarcheck",data);
    //     // Extract suggestions from the API response
    //     const grammarSuggestions = data.suggestions || [];
    //     // Update the state with suggestions
    //     setSuggestions(grammarSuggestions);
    //   } catch (error) {
    //     console.error('Error:', error);
    //   }
    // };
    console.log("suggestionssuggestions", suggestions);
    const handleSubmit = async (e)=>{
        setLoading(true);
        e.preventDefault();
        try {
            let cookieValue = js_cookie__WEBPACK_IMPORTED_MODULE_10__["default"].get("user_data");
            let userId = js_cookie__WEBPACK_IMPORTED_MODULE_10__["default"]?.get("user_data");
            console.log("categories cookieValue------------1", userId?.user?.id);
            console.log("categories cookieValue------------1", cookieValue);
            const checkBrand = JSON.parse(cookieValue)?.user?.type;
            if (typeof cookieValue === "undefined" || checkBrand !== "brand") {
                console.log("User not authenticated, navigating to login page...");
                router.push("/login");
                console.log("categories cookieValue----brand--------userId", cookieValue?.token);
            } else {
                const cookieValue = JSON.parse(js_cookie__WEBPACK_IMPORTED_MODULE_10__["default"].get("user_data"));
                console.log("campaigns cookieValue------------1", cookieValue?.token);
                const brand_detail = js_cookie__WEBPACK_IMPORTED_MODULE_10__["default"].get("brand_detail");
                const brandIds = js_cookie__WEBPACK_IMPORTED_MODULE_10__["default"].get("brand_id");
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
                console.log("brandId:campaign_info", brandId);
                try {
                    const postData = {
                        "name": campaign_name,
                        "description": campaign_desc,
                        "starting_date": startformattedDate,
                        "ending_date": endformattedDate,
                        "brand_id": brandId,
                        "status": "draft",
                        "products": popupData || product_link,
                        "references": refpopupData || ref_link
                    };
                    const headers = {
                        "Authorization": `Bearer ${cookieValue?.token}`
                    };
                    const postResponse = await (0,_generalfunctions__WEBPACK_IMPORTED_MODULE_11__/* .apiCall */ .k_)(`${_generalfunctions__WEBPACK_IMPORTED_MODULE_11__/* .url */ .HQ}/campaigns`, "post", postData, headers);
                    console.log("POST response campaigns-------------:", postResponse);
                    if (postResponse?.status === "success") {
                        js_cookie__WEBPACK_IMPORTED_MODULE_10__["default"].set("campaign_id", JSON.stringify(postResponse?.data?.id), {
                            expires: 106500
                        });
                        js_cookie__WEBPACK_IMPORTED_MODULE_10__["default"].set("campaign_name", JSON.stringify(postResponse?.data?.name), {
                            expires: 106500
                        });
                        react_toastify__WEBPACK_IMPORTED_MODULE_12__.toast.success("Campaign is created Successfully", {
                            position: "top-center",
                            autoClose: 5000
                        });
                        router.push("/marketplace");
                        setLoading(false);
                    } else {
                        react_toastify__WEBPACK_IMPORTED_MODULE_12__.toast.error("PLease enter the correct campaign details", {
                            position: "top-center",
                            autoClose: 5000
                        });
                    }
                } catch (error) {}
            }
        } catch (error) {
            console.error("Error parsing user_data cookie:", error);
        }
    };
    const refpopupData_link = refpopupData.map((item)=>item?.link);
    const imagerefArray = refpopupData_link;
    const imagerefString = imagerefArray.join("");
    console.log("imagerefString", imagerefString);
    const propopupData_link = popupData.map((item)=>item?.link);
    const imageproArray = propopupData_link;
    const imageproString = imageproArray.join("");
    console.log("imagerefString", imagerefString);
    console.log("popupData", popupData, refpopupData, imagerefString, imageproString);
    function formatDateToYYYYMMDD(date) {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, "0");
        const day = String(date.getDate()).padStart(2, "0");
        return `${year}-${month}-${day}`;
    }
    const start_date = new Date(startDate);
    const end_date = new Date(endDate);
    const startformattedDate = formatDateToYYYYMMDD(start_date);
    const endformattedDate = formatDateToYYYYMMDD(end_date);
    console.log("startingfate", startDate, endDate, startformattedDate, endformattedDate);
    const handleStartDateChange = (date)=>{
        setStartDate(date);
        const minEndDate = new Date(date);
        minEndDate.setDate(minEndDate.getDate() + 14);
        if (endDate < minEndDate) {
            setEndDate(minEndDate);
        }
    };
    const checkIsMobile = ()=>{
        setIsMobile(window.innerWidth <= 768); // Adjust the breakpoint as needed
    // setIsMobile(window.innerWidth <= 800);
    };
    const minSelectableDate = today.add(15, "day");
    // const initialDateRange = [minSelectableDate, today];
    // const shortcutsItems = [
    //   {
    //     label: 'This Week',
    //     getValue: () => {
    //       const today = dayjs();
    //       return [today.startOf('week'), today.endOf('week')];
    //     },
    //   },
    //   {
    //     label: 'Last Week',
    //     getValue: () => {
    //       const today = dayjs();
    //       const prevWeek = today.subtract(7, 'day');
    //       return [prevWeek.startOf('week'), prevWeek.endOf('week')];
    //     },
    //   },
    //   {
    //     label: 'Last 7 Days',
    //     getValue: () => {
    //       const today = dayjs();
    //       return [today.subtract(7, 'day'), today];
    //     },
    //   },
    //   {
    //     label: 'Current Month',
    //     getValue: () => {
    //       const today = dayjs();
    //       return [today.startOf('month'), today.endOf('month')];
    //     },
    //   },
    //   {
    //     label: 'Next Month',
    //     getValue: () => {
    //       const today = dayjs();
    //       const startOfNextMonth = today.endOf('month').add(1, 'day');
    //       return [startOfNextMonth, startOfNextMonth.endOf('month')];
    //     },
    //   },
    //   { label: 'Reset', getValue: () => [null, null] },
    // ];
    // const initialDateRange = shortcutsItems[0].getValue();
    console.log("selecteddatse", selectedDate);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: loading ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "w-full h-full flex items-center justify-center",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {
                width: 100,
                height: 100,
                alt: "",
                src: _images__WEBPACK_IMPORTED_MODULE_5__/* ["default"].Loader */ .Z.Loader
            })
        }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ImagePopup__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                    isOpen: isModalOpen,
                    onClose: ()=>setIsModalOpen(false),
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "relative w-screen max-w-2xl max-h-full  min-w-xl ",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ImagePopup_Image_content__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                            onPopupData: handlePopupData,
                            onClose: ()=>setIsModalOpen(false)
                        })
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Ref_Imagepop__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
                    isOpen: isModalOpenRef,
                    onClose: ()=>setIsModalOpenRef(false),
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "relative w-screen max-w-2xl max-h-full   min-w-xl",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Ref_Imagepop_Ref_Image_content__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
                            refpopupData: handleRefPopupData,
                            onClose: ()=>setIsModalOpen(false)
                        })
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "flex container_capmapign_info w-full",
                    style: {
                        backgroundColor: _styles_Colors__WEBPACK_IMPORTED_MODULE_2__/* ["default"].button_light_clr */ .Z.button_light_clr
                    },
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "m-2 w-full auto-cols-max ",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            style: {
                                backgroundColor: _styles_Colors__WEBPACK_IMPORTED_MODULE_2__/* ["default"].white_clr */ .Z.white_clr
                            },
                            className: "auto-cols-max  p-3 rounded-md flex flex-row ",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: `${isMobile ? "w-full" : " w-2/3"} p-5 border rounded-md shadow-md m-2 divider_line border  min-h-screen`,
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                                    style: {
                                                        color: _styles_Colors__WEBPACK_IMPORTED_MODULE_2__/* ["default"].pending_clr */ .Z.pending_clr
                                                    },
                                                    className: "font-bold campaign_info_title text-2xl",
                                                    children: "Campaign Info"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("hr", {
                                                    className: "divider_line my-5"
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "my-3",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                            className: "mb-2",
                                                            children: "Campaign Name"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                            type: "text",
                                                            id: "small-input",
                                                            className: "shadow-md block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-white-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",
                                                            value: campaign_name,
                                                            onChange: (e)=>setCampaign_name(e.target.value)
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "my-3",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                            className: "mb-2",
                                                            children: "Campaign Description"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("textarea", {
                                                            id: "message",
                                                            rows: "4",
                                                            className: " shadow-mdblock p-2.5 w-full text-sm text-gray-900 bg-white-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",
                                                            placeholder: "Start Typing...",
                                                            value: campaign_desc,
                                                            onChange: (e)=>setCampaign_desc(e.target.value),
                                                            spellCheck: "true"
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "my-3",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                            className: "mb-2",
                                                            children: "Product"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "flex flex-row justify-between",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                className: "border h-48 rounded-md  w-full me-3 shadow-md",
                                                                onClick: ()=>setIsModalOpen(true),
                                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                                                                    className: "h-48  w-full ",
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {
                                                                            src: _images__WEBPACK_IMPORTED_MODULE_5__/* ["default"].plus_icon */ .Z.plus_icon,
                                                                            width: 20,
                                                                            className: "mx-auto ",
                                                                            alt: ""
                                                                        }),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                            className: "mt-3",
                                                                            style: {
                                                                                color: _styles_Colors__WEBPACK_IMPORTED_MODULE_2__/* ["default"].logo_clr */ .Z.logo_clr
                                                                            },
                                                                            children: "Add Image"
                                                                        }),
                                                                        imagerefString && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                                                type: "url",
                                                                                value: imagerefString,
                                                                                className: "w-full p-3",
                                                                                onChange: ()=>setIsModalOpen(false),
                                                                                readOnly: true
                                                                            })
                                                                        })
                                                                    ]
                                                                })
                                                            })
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            className: "flex items-center mt-5",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                    className: "flex-grow border-t border-gray-300"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                    className: "px-4 text-gray-600",
                                                                    children: "OR"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                    className: "flex-grow border-t border-gray-300"
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                                type: "url",
                                                                id: "url",
                                                                className: "shadow-md appearance-none border rounded-md text-center w-full my-5 bg-white  py-5 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",
                                                                placeholder: "Paste link",
                                                                value: product_link,
                                                                onChange: (e)=>setProduct_link(e.target.value)
                                                            })
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "my-3",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                            className: "mb-2",
                                                            children: "Timelines"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                                                            children: "Set Creating Date"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "flex flex-row my-5 border rounded-md justify-between items-center px-5",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_x_date_pickers_LocalizationProvider__WEBPACK_IMPORTED_MODULE_21__.LocalizationProvider, {
                                                                dateAdapter: _mui_x_date_pickers_AdapterDayjs__WEBPACK_IMPORTED_MODULE_22__.AdapterDayjs,
                                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                    className: "w-full",
                                                                    children: [
                                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                            className: "w-full flex",
                                                                            children: [
                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TextField__WEBPACK_IMPORTED_MODULE_26___default()), {
                                                                                    // label="Start Date"
                                                                                    type: "date",
                                                                                    value: manualStartDate,
                                                                                    onChange: (e)=>setManualStartDate(e.target.value),
                                                                                    className: "w-full",
                                                                                    onClick: ()=>setCalendarVisible(true)
                                                                                }),
                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TextField__WEBPACK_IMPORTED_MODULE_26___default()), {
                                                                                    // label="End Date"
                                                                                    type: "date",
                                                                                    value: manualEndDate,
                                                                                    onChange: (e)=>setManualEndDate(e.target.value),
                                                                                    className: "w-full",
                                                                                    onClick: ()=>setCalendarVisible(true)
                                                                                })
                                                                            ]
                                                                        }),
                                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                            className: "w-full flex items-center justify-between",
                                                                            children: [
                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                                    children: shortcutsItems.map((shortcut, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                                                            onClick: ()=>handleDateChange(shortcut.getValue()),
                                                                                            variant: "contained",
                                                                                            className: "flex border rounded-full bg-blue-100 my-3 text-sm px-2 py-1",
                                                                                            children: shortcut?.label
                                                                                        }, index))
                                                                                }),
                                                                                calendarVisible && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_x_date_pickers_pro_StaticDateRangePicker__WEBPACK_IMPORTED_MODULE_23__.StaticDateRangePicker, {
                                                                                    calendars: 2,
                                                                                    value: selectedRange,
                                                                                    minDate: today,
                                                                                    shortcuts: shortcutsItems,
                                                                                    onChange: handleDateChange
                                                                                })
                                                                            ]
                                                                        })
                                                                    ]
                                                                })
                                                            })
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            className: "",
                                                            children: [
                                                                startRangeDate !== null && endRangeDate !== null && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                                    children: [
                                                                        "Selected Date Range: ",
                                                                        startRangeDate.toDateString(),
                                                                        " - ",
                                                                        endRangeDate.toDateString()
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                    className: "text-center w-full",
                                                                    style: {
                                                                        color: _styles_Colors__WEBPACK_IMPORTED_MODULE_2__/* ["default"].logo_clr */ .Z.logo_clr
                                                                    },
                                                                    children: "We required min 15 days to complete the campaign"
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "my-3",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                            className: "mb-2",
                                                            children: "Content Reference"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "flex flex-row justify-between",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                className: "border h-48 rounded-md  w-full me-3 shadow-md",
                                                                onClick: ()=>setIsModalOpenRef(true),
                                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                                                                    className: "h-48  w-full ",
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {
                                                                            src: _images__WEBPACK_IMPORTED_MODULE_5__/* ["default"].plus_icon */ .Z.plus_icon,
                                                                            width: 20,
                                                                            className: "mx-auto ",
                                                                            alt: ""
                                                                        }),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                            className: "mt-3",
                                                                            style: {
                                                                                color: _styles_Colors__WEBPACK_IMPORTED_MODULE_2__/* ["default"].logo_clr */ .Z.logo_clr
                                                                            },
                                                                            children: "Add Image"
                                                                        }),
                                                                        imageproString && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                                                type: "url",
                                                                                value: imageproString,
                                                                                className: "w-full p-3",
                                                                                onChange: ()=>setIsModalOpenRef(false),
                                                                                readOnly: true
                                                                            })
                                                                        })
                                                                    ]
                                                                })
                                                            })
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            className: "flex items-center mt-5",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                    className: "flex-grow border-t border-gray-300"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                    className: "px-4 text-gray-600",
                                                                    children: "OR"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                    className: "flex-grow border-t border-gray-300"
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                                type: "url",
                                                                id: "url",
                                                                className: "shadow-md appearance-none border rounded-md text-center w-full my-5 bg-white  py-5 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",
                                                                placeholder: "Paste link",
                                                                value: ref_link,
                                                                onChange: (e)=>setRef_link(e.target.value)
                                                            })
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Button__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                                    label: "Proceed",
                                                    buttoncss: "py-3",
                                                    onClick: handleSubmit
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_toastify__WEBPACK_IMPORTED_MODULE_12__.ToastContainer, {})
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: `${isMobile ? "hidden" : "auto-cols-max p-5 border rounded-md shadow-md min-h-screen flex flex-col m-2 w-2/4"}`,
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                            children: "Today Highlights"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {
                                            src: _images__WEBPACK_IMPORTED_MODULE_5__/* ["default"].campaign_info_imgs */ .Z.campaign_info_imgs,
                                            className: "image_capign_info w-full",
                                            // height={1000}
                                            alt: ""
                                        })
                                    ]
                                })
                            ]
                        })
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Campaign_infopage);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;