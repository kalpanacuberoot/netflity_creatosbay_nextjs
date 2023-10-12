"use strict";
exports.id = 1171;
exports.ids = [1171];
exports.modules = {

/***/ 8458:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _images__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8417);
/* harmony import */ var _styles_Colors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6029);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _rightDashboard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2466);
/* harmony import */ var _leftDashboard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6255);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _Card_Card1__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1534);
/* harmony import */ var _Card_Card2__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(2856);
/* harmony import */ var _Card_Card3__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(9466);
/* harmony import */ var _Card_Card4__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(9229);
/* harmony import */ var _Termsofservice__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(2978);
/* harmony import */ var _generalfunctions__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(9262);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(9915);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(3590);
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(8819);
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var date_fns_locale__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(5564);
/* harmony import */ var date_fns_locale__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(date_fns_locale__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _Campaign_infopage__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(915);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_leftDashboard__WEBPACK_IMPORTED_MODULE_7__, _Card_Card1__WEBPACK_IMPORTED_MODULE_9__, js_cookie__WEBPACK_IMPORTED_MODULE_16__, react_toastify__WEBPACK_IMPORTED_MODULE_17__, _Campaign_infopage__WEBPACK_IMPORTED_MODULE_20__]);
([_leftDashboard__WEBPACK_IMPORTED_MODULE_7__, _Card_Card1__WEBPACK_IMPORTED_MODULE_9__, js_cookie__WEBPACK_IMPORTED_MODULE_16__, react_toastify__WEBPACK_IMPORTED_MODULE_17__, _Campaign_infopage__WEBPACK_IMPORTED_MODULE_20__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);


// import company_logo from '../../images/logo_.png';




















const Homepage = ()=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_15__.useRouter)();
    const [campaign_data, setCampaign_data] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)([]);
    const [startIndex, setStartIndex] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(0);
    const [showChild, setShowChild] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(false);
    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(false);
    const [isMobile, setIsMobile] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(false);
    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(()=>{
        checkIsMobile();
        window.addEventListener("resize", checkIsMobile);
        const cookieValue = js_cookie__WEBPACK_IMPORTED_MODULE_16__["default"].get("user_data");
        // if (!cookieValue) {
        //   router.push('/login');
        // }
        const allCampaignData = async ()=>{
            setLoading(true);
            try {
                let cookieValue = js_cookie__WEBPACK_IMPORTED_MODULE_16__["default"].get("user_data");
                console.log("categories cookieValue------------1", JSON.parse(cookieValue).user.type);
                const checkBrand = JSON.parse(cookieValue)?.user?.type;
                if (typeof cookieValue === "undefined" || checkBrand !== "brand") {
                    console.log("User not authenticated, navigating to login page...");
                    router.push("/login");
                    console.log("categories cookieValue----brand--------userId", cookieValue?.token);
                } else {
                    let cookieValue = JSON.parse(js_cookie__WEBPACK_IMPORTED_MODULE_16__["default"].get("user_data"));
                    console.log("categories cookieValue------------1", cookieValue?.token);
                    const brand_detail = js_cookie__WEBPACK_IMPORTED_MODULE_16__["default"].get("brand_detail");
                    const brandIds = js_cookie__WEBPACK_IMPORTED_MODULE_16__["default"].get("brand_id");
                    console.log("brandIds:", brand_detail);
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
                    console.log("brandId:", brandIds);
                    try {
                        const headers = {
                            "Authorization": `Bearer ${cookieValue?.token}`
                        };
                        const response = await fetch(`${_generalfunctions__WEBPACK_IMPORTED_MODULE_14__/* .url */ .HQ}/campaigns?brand=${brandId}&&per_page=55&order=desc`, {
                            method: "Get",
                            headers: headers
                        });
                        if (response.status === 429) {
                            const retryAfter = parseInt(response.headers.get("Retry-After")) || 60;
                            console.log(`Rate limited. Retrying after ${retryAfter} seconds.`);
                            await new Promise((resolve)=>setTimeout(resolve, retryAfter * 1000));
                            return makeRequest();
                        }
                        console.log("GET campaigns?brand=1 response:", response);
                        if (response?.ok) {
                            const responseData = await response.json();
                            console.log("campaigns response:", responseData?.data?.data);
                            const campaignData = responseData?.data?.data;
                            if (responseData.status) {
                                setCampaign_data(campaignData);
                                setLoading(false);
                            } else {
                                console.error("Error:", responseData.message);
                            }
                        } else {
                            console.error("Error:", response.statusText);
                        }
                    } catch (error) {
                        console.error("Error:", error);
                    }
                }
            } catch (error) {
                console.error("Error parsing user_data cookie:", error);
            }
        };
        // allCampaignData();
        return ()=>{
            window.removeEventListener("resize", checkIsMobile);
        };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    console.log("campaign_data", campaign_data);
    const itemsPerPage = 6;
    const endIndex = startIndex + itemsPerPage;
    const itemsToShow = campaign_data.slice(startIndex, endIndex);
    console.log("itemsToShow", itemsToShow);
    const handleNextClick = ()=>{
        setStartIndex(startIndex + itemsPerPage);
    };
    const handlePreviousClick = ()=>{
        setStartIndex(startIndex - itemsPerPage);
    };
    const checkIsMobile = ()=>{
        setIsMobile(window.innerWidth <= 768); // Adjust the breakpoint as needed
    // setIsMobile(window.innerWidth <= 800);
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: loading ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "w-full h-full flex items-center justify-center",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                width: 100,
                height: 100,
                alt: "",
                src: _images__WEBPACK_IMPORTED_MODULE_2__/* ["default"].Loader */ .Z.Loader
            })
        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex flex-col md:flex-row",
                style: {
                    backgroundColor: _styles_Colors__WEBPACK_IMPORTED_MODULE_3__/* ["default"].button_light_clr */ .Z.button_light_clr
                },
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: `w-full auto-cols-max me-3 ${isMobile ? "" : "ps-5"} rounded-md `,
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "my-4 ps-3 rounded-md",
                                style: {
                                    backgroundColor: _styles_Colors__WEBPACK_IMPORTED_MODULE_3__/* ["default"].white_clr */ .Z.white_clr
                                },
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "flex flex-row  w-full justify-between",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "flex flex-col w-full justify-evenly ps-10 pb-5",
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "home_title",
                                                    children: [
                                                        "Welcome to",
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            className: "golden_home_title",
                                                            children: " Creators"
                                                        }),
                                                        " ",
                                                        "bay"
                                                    ]
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                    children: "Your content is just a click away !"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_8___default()), {
                                                    href: "/campaign_info",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                        className: "start_campaign_btn px-5 py-1 rounded-full w-48",
                                                        children: "Start Campaign"
                                                    })
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                                            src: _images__WEBPACK_IMPORTED_MODULE_2__/* ["default"].home_title_bg */ .Z.home_title_bg,
                                            width: 200,
                                            height: 100,
                                            alt: "",
                                            className: ""
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: `${isMobile ? "" : "min-h-screen h-auto"} flex flex-row justify-evenly items-start p-5 pb-0 rounded-md flex-wrap overflow-y-auto `,
                                style: {
                                    backgroundColor: _styles_Colors__WEBPACK_IMPORTED_MODULE_3__/* ["default"].white_clr */ .Z.white_clr
                                },
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Card_Card2__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {}),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Card_Card2__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {}),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Card_Card2__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {}),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Card_Card2__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {})
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: `${isMobile ? "w-full" : "w-96"} auto-cols-max rounded-md grid grid-cols-1 divide-y mt-4`,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_rightDashboard__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {})
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_toastify__WEBPACK_IMPORTED_MODULE_17__.ToastContainer, {})
                ]
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Homepage);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2466:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ rightDashboard)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: ./images/index.js + 63 modules
var images_0 = __webpack_require__(8417);
// EXTERNAL MODULE: ./styles/Colors.js
var Colors = __webpack_require__(6029);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./components/Homepage/rightDashboard/Suggestcreator/index.js





const Suggest_creator = ()=>{
    const [isMobile, setIsMobile] = (0,external_react_.useState)(false);
    (0,external_react_.useEffect)(()=>{
        // Check the screen size initially
        checkIsMobile();
        // Add an event listener to check the screen size when it changes
        window.addEventListener("resize", checkIsMobile);
        // Clean up the event listener when the component unmounts
        return ()=>{
            window.removeEventListener("resize", checkIsMobile);
        };
    }, []);
    const checkIsMobile = ()=>{
        setIsMobile(window.innerWidth <= 768); // Adjust the breakpoint as needed
    // setIsMobile(window.innerWidth <= 800);
    };
    return /*#__PURE__*/ jsx_runtime.jsx(jsx_runtime.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            style: {
                backgroundColor: Colors/* default.white_clr */.Z.white_clr
            },
            className: `${isMobile ? "px-5 py-5" : "px-3 py-3"} rounded-md my-3`,
            children: [
                /*#__PURE__*/ jsx_runtime.jsx("h3", {
                    className: "font-bold",
                    children: "Suggested Creators"
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "craetor_height",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: ` overflow-y-auto ${isMobile ? " md:flex flex-row flex-wrap" : "child_creator"}`,
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: `px-2 border rounded-md p-3 my-2 ${isMobile ? "px-5 w-full" : " "}`,
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: "flex flex-row justify-between items-center mb-2",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx("h6", {
                                                    className: "font-bold capitalize",
                                                    children: "Amrish patel"
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                    className: "",
                                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                        className: "flex flex-row justify-evenly items-center w-24",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                                                                src: images_0/* default.fill_star */.Z.fill_star,
                                                                width: 12,
                                                                height: 5,
                                                                alt: "",
                                                                className: ""
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                                                                src: images_0/* default.fill_star */.Z.fill_star,
                                                                width: 12,
                                                                height: 5,
                                                                alt: "",
                                                                className: ""
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                                                                src: images_0/* default.fill_star */.Z.fill_star,
                                                                width: 12,
                                                                height: 5,
                                                                alt: "",
                                                                className: ""
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                                                                src: images_0/* default.fill_star */.Z.fill_star,
                                                                width: 12,
                                                                height: 5,
                                                                alt: "",
                                                                className: ""
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                                                                src: images_0/* default.empty_star */.Z.empty_star,
                                                                width: 12,
                                                                height: 5,
                                                                alt: "",
                                                                className: ""
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime.jsx("h6", {
                                                                children: "4.5"
                                                            })
                                                        ]
                                                    })
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: "flex flex-row items-center",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                                                    src: images_0/* default.profile_user */.Z.profile_user,
                                                    width: 40,
                                                    // height={30}
                                                    alt: ""
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                    className: "flex flex-row flex-wrap",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                            children: /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                                className: `${isMobile ? "text-sm px-5 py-1 mx-2" : "px-3 mx-1"} capitalize creator_top  rounded-full my-1 `,
                                                                children: "#unplugged"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                            children: /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                                className: `${isMobile ? "text-sm px-5 py-1 mx-2" : "px-3 mx-1"} capitalize creator_top  rounded-full my-1 `,
                                                                children: "#unplugged"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                            children: /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                                className: `${isMobile ? "text-sm px-5 py-1 mx-2" : "px-3 mx-1"} capitalize creator_top  rounded-full my-1 `,
                                                                children: "#go"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                            children: /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                                className: `${isMobile ? "text-sm px-5 py-1 mx-2" : "px-3 mx-1"} capitalize creator_top  rounded-full my-1 `,
                                                                children: "#livemusic"
                                                            })
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: `px-2 border rounded-md p-3 my-2 ${isMobile ? "px-5 w-full" : " "}`,
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: "flex flex-row justify-between items-center mb-2",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx("h6", {
                                                    className: "font-bold capitalize",
                                                    children: "Amrish patel"
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                    className: "",
                                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                        className: "flex flex-row justify-evenly items-center w-24",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                                                                src: images_0/* default.fill_star */.Z.fill_star,
                                                                width: 12,
                                                                height: 5,
                                                                alt: "",
                                                                className: ""
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                                                                src: images_0/* default.fill_star */.Z.fill_star,
                                                                width: 12,
                                                                height: 5,
                                                                alt: "",
                                                                className: ""
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                                                                src: images_0/* default.fill_star */.Z.fill_star,
                                                                width: 12,
                                                                height: 5,
                                                                alt: "",
                                                                className: ""
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                                                                src: images_0/* default.fill_star */.Z.fill_star,
                                                                width: 12,
                                                                height: 5,
                                                                alt: "",
                                                                className: ""
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                                                                src: images_0/* default.empty_star */.Z.empty_star,
                                                                width: 12,
                                                                height: 5,
                                                                alt: "",
                                                                className: ""
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime.jsx("h6", {
                                                                children: "4.5"
                                                            })
                                                        ]
                                                    })
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: "flex flex-row items-center",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                                                    src: images_0/* default.profile_user */.Z.profile_user,
                                                    width: 40,
                                                    // height={30}
                                                    alt: ""
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                    className: "flex flex-row flex-wrap",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                            children: /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                                className: `${isMobile ? "text-sm px-5 py-1 mx-2" : "px-3 mx-1"} capitalize creator_top  rounded-full my-1 `,
                                                                children: "#unplugged"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                            children: /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                                className: `${isMobile ? "text-sm px-5 py-1 mx-2" : "px-3 mx-1"} capitalize creator_top  rounded-full my-1 `,
                                                                children: "#unplugged"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                            children: /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                                className: `${isMobile ? "text-sm px-5 py-1 mx-2" : "px-3 mx-1"} capitalize creator_top  rounded-full my-1 `,
                                                                children: "#go"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                            children: /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                                className: `${isMobile ? "text-sm px-5 py-1 mx-2" : "px-3 mx-1"} capitalize creator_top  rounded-full my-1 `,
                                                                children: "#livemusic"
                                                            })
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: `px-2 border rounded-md p-3 my-2 ${isMobile ? "px-5 w-full" : " "}`,
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: "flex flex-row justify-between items-center mb-2",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx("h6", {
                                                    className: "font-bold capitalize",
                                                    children: "Amrish patel"
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                    className: "",
                                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                        className: "flex flex-row justify-evenly items-center w-24",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                                                                src: images_0/* default.fill_star */.Z.fill_star,
                                                                width: 12,
                                                                height: 5,
                                                                alt: "",
                                                                className: ""
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                                                                src: images_0/* default.fill_star */.Z.fill_star,
                                                                width: 12,
                                                                height: 5,
                                                                alt: "",
                                                                className: ""
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                                                                src: images_0/* default.fill_star */.Z.fill_star,
                                                                width: 12,
                                                                height: 5,
                                                                alt: "",
                                                                className: ""
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                                                                src: images_0/* default.fill_star */.Z.fill_star,
                                                                width: 12,
                                                                height: 5,
                                                                alt: "",
                                                                className: ""
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                                                                src: images_0/* default.empty_star */.Z.empty_star,
                                                                width: 12,
                                                                height: 5,
                                                                alt: "",
                                                                className: ""
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime.jsx("h6", {
                                                                children: "4.5"
                                                            })
                                                        ]
                                                    })
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: "flex flex-row items-center",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                                                    src: images_0/* default.profile_user */.Z.profile_user,
                                                    width: 40,
                                                    // height={30}
                                                    alt: ""
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                    className: "flex flex-row flex-wrap",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                            children: /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                                className: `${isMobile ? "text-sm px-5 py-1 mx-2" : "px-3 mx-1"} capitalize creator_top  rounded-full my-1 `,
                                                                children: "#unplugged"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                            children: /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                                className: `${isMobile ? "text-sm px-5 py-1 mx-2" : "px-3 mx-1"} capitalize creator_top  rounded-full my-1 `,
                                                                children: "#unplugged"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                            children: /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                                className: `${isMobile ? "text-sm px-5 py-1 mx-2" : "px-3 mx-1"} capitalize creator_top  rounded-full my-1 `,
                                                                children: "#go"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                            children: /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                                className: `${isMobile ? "text-sm px-5 py-1 mx-2" : "px-3 mx-1"} capitalize creator_top  rounded-full my-1 `,
                                                                children: "#livemusic"
                                                            })
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: `px-2 border rounded-md p-3 my-2 ${isMobile ? "px-5 w-full" : " "}`,
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: "flex flex-row justify-between items-center mb-2",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx("h6", {
                                                    className: "font-bold capitalize",
                                                    children: "Amrish patel"
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                    className: "",
                                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                        className: "flex flex-row justify-evenly items-center w-24",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                                                                src: images_0/* default.fill_star */.Z.fill_star,
                                                                width: 12,
                                                                height: 5,
                                                                alt: "",
                                                                className: ""
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                                                                src: images_0/* default.fill_star */.Z.fill_star,
                                                                width: 12,
                                                                height: 5,
                                                                alt: "",
                                                                className: ""
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                                                                src: images_0/* default.fill_star */.Z.fill_star,
                                                                width: 12,
                                                                height: 5,
                                                                alt: "",
                                                                className: ""
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                                                                src: images_0/* default.fill_star */.Z.fill_star,
                                                                width: 12,
                                                                height: 5,
                                                                alt: "",
                                                                className: ""
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                                                                src: images_0/* default.empty_star */.Z.empty_star,
                                                                width: 12,
                                                                height: 5,
                                                                alt: "",
                                                                className: ""
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime.jsx("h6", {
                                                                children: "4.5"
                                                            })
                                                        ]
                                                    })
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: "flex flex-row items-center",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                                                    src: images_0/* default.profile_user */.Z.profile_user,
                                                    width: 40,
                                                    // height={30}
                                                    alt: ""
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                    className: "flex flex-row flex-wrap",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                            children: /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                                className: `${isMobile ? "text-sm px-5 py-1 mx-2" : "px-3 mx-1"} capitalize creator_top  rounded-full my-1 `,
                                                                children: "#unplugged"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                            children: /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                                className: `${isMobile ? "text-sm px-5 py-1 mx-2" : "px-3 mx-1"} capitalize creator_top  rounded-full my-1 `,
                                                                children: "#unplugged"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                            children: /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                                className: `${isMobile ? "text-sm px-5 py-1 mx-2" : "px-3 mx-1"} capitalize creator_top  rounded-full my-1 `,
                                                                children: "#go"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                            children: /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                                className: `${isMobile ? "text-sm px-5 py-1 mx-2" : "px-3 mx-1"} capitalize creator_top  rounded-full my-1 `,
                                                                children: "#livemusic"
                                                            })
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "w-full text-center",
                            children: /*#__PURE__*/ jsx_runtime.jsx("button", {
                                className: "start_campaign_btn px-5 py-1 w-48 rounded-full bg-white my-3",
                                children: "View All"
                            })
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const Suggestcreator = (Suggest_creator);

;// CONCATENATED MODULE: ./components/Homepage/rightDashboard/Topcreator/index.js





const Top_creator = ()=>{
    const [isMobile, setIsMobile] = (0,external_react_.useState)(false);
    (0,external_react_.useEffect)(()=>{
        checkIsMobile();
        window.addEventListener("resize", checkIsMobile);
        return ()=>{
            window.removeEventListener("resize", checkIsMobile);
        };
    }, []);
    const checkIsMobile = ()=>{
        setIsMobile(window.innerWidth <= 768);
    // setIsMobile(window.innerWidth <= 800);
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        style: {
            backgroundColor: Colors/* default.white_clr */.Z.white_clr
        },
        className: `${isMobile ? "px-5 py-5" : "px-3 py-3"} rounded-md`,
        children: [
            /*#__PURE__*/ jsx_runtime.jsx("h3", {
                className: "font-bold",
                children: "Top Creators"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "craetor_height",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: ` overflow-y-auto ${isMobile ? " md:flex flex-row flex-wrap" : "child_creator"}`,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: `px-2 border rounded-md p-3 my-2 ${isMobile ? "px-5 w-full" : " "}`,
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "flex flex-row justify-between items-center mb-2",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx("h6", {
                                                className: "font-bold capitalize",
                                                children: "Amrish patel"
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                className: "",
                                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                    className: "flex flex-row justify-evenly items-center w-24",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                                                            src: images_0/* default.fill_star */.Z.fill_star,
                                                            width: 12,
                                                            height: 5,
                                                            alt: "",
                                                            className: ""
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                                                            src: images_0/* default.fill_star */.Z.fill_star,
                                                            width: 12,
                                                            height: 5,
                                                            alt: "",
                                                            className: ""
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                                                            src: images_0/* default.fill_star */.Z.fill_star,
                                                            width: 12,
                                                            height: 5,
                                                            alt: "",
                                                            className: ""
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                                                            src: images_0/* default.fill_star */.Z.fill_star,
                                                            width: 12,
                                                            height: 5,
                                                            alt: "",
                                                            className: ""
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                                                            src: images_0/* default.empty_star */.Z.empty_star,
                                                            width: 12,
                                                            height: 5,
                                                            alt: "",
                                                            className: ""
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime.jsx("h6", {
                                                            children: "4.5"
                                                        })
                                                    ]
                                                })
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "flex flex-row items-center",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                                                src: images_0/* default.profile_user */.Z.profile_user,
                                                width: 40,
                                                // height={30}
                                                alt: ""
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                className: "flex flex-row flex-wrap",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                        children: /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                            className: `${isMobile ? "text-sm px-5 py-1 mx-2" : "px-3 mx-1"} capitalize creator_top  rounded-full my-1 `,
                                                            children: "#unplugged"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                        children: /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                            className: `${isMobile ? "text-sm px-5 py-1 mx-2" : "px-3 mx-1"} capitalize creator_top  rounded-full my-1 `,
                                                            children: "#unplugged"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                        children: /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                            className: `${isMobile ? "text-sm px-5 py-1 mx-2" : "px-3 mx-1"} capitalize creator_top  rounded-full my-1 `,
                                                            children: "#go"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                        children: /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                            className: `${isMobile ? "text-sm px-5 py-1 mx-2" : "px-3 mx-1"} capitalize creator_top  rounded-full my-1 `,
                                                            children: "#livemusic"
                                                        })
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: `px-2 border rounded-md p-3 my-2 ${isMobile ? "px-5 w-full" : " "}`,
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "flex flex-row justify-between items-center mb-2",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx("h6", {
                                                className: "font-bold capitalize",
                                                children: "Amrish patel"
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                className: "",
                                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                    className: "flex flex-row justify-evenly items-center w-24",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                                                            src: images_0/* default.fill_star */.Z.fill_star,
                                                            width: 12,
                                                            height: 5,
                                                            alt: "",
                                                            className: ""
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                                                            src: images_0/* default.fill_star */.Z.fill_star,
                                                            width: 12,
                                                            height: 5,
                                                            alt: "",
                                                            className: ""
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                                                            src: images_0/* default.fill_star */.Z.fill_star,
                                                            width: 12,
                                                            height: 5,
                                                            alt: "",
                                                            className: ""
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                                                            src: images_0/* default.fill_star */.Z.fill_star,
                                                            width: 12,
                                                            height: 5,
                                                            alt: "",
                                                            className: ""
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                                                            src: images_0/* default.empty_star */.Z.empty_star,
                                                            width: 12,
                                                            height: 5,
                                                            alt: "",
                                                            className: ""
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime.jsx("h6", {
                                                            children: "4.5"
                                                        })
                                                    ]
                                                })
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "flex flex-row items-center",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                                                src: images_0/* default.profile_user */.Z.profile_user,
                                                width: 40,
                                                // height={30}
                                                alt: ""
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                className: "flex flex-row flex-wrap",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                        children: /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                            className: `${isMobile ? "text-sm px-5 py-1 mx-2" : "px-3 mx-1"} capitalize creator_top  rounded-full my-1 `,
                                                            children: "#unplugged"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                        children: /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                            className: `${isMobile ? "text-sm px-5 py-1 mx-2" : "px-3 mx-1"} capitalize creator_top  rounded-full my-1 `,
                                                            children: "#unplugged"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                        children: /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                            className: `${isMobile ? "text-sm px-5 py-1 mx-2" : "px-3 mx-1"} capitalize creator_top  rounded-full my-1 `,
                                                            children: "#go"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                        children: /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                            className: `${isMobile ? "text-sm px-5 py-1 mx-2" : "px-3 mx-1"} capitalize creator_top  rounded-full my-1 `,
                                                            children: "#livemusic"
                                                        })
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: `px-2 border rounded-md p-3 my-2 ${isMobile ? "px-5 w-full" : " "}`,
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "flex flex-row justify-between items-center mb-2",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx("h6", {
                                                className: "font-bold capitalize",
                                                children: "Amrish patel"
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                className: "",
                                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                    className: "flex flex-row justify-evenly items-center w-24",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                                                            src: images_0/* default.fill_star */.Z.fill_star,
                                                            width: 12,
                                                            height: 5,
                                                            alt: "",
                                                            className: ""
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                                                            src: images_0/* default.fill_star */.Z.fill_star,
                                                            width: 12,
                                                            height: 5,
                                                            alt: "",
                                                            className: ""
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                                                            src: images_0/* default.fill_star */.Z.fill_star,
                                                            width: 12,
                                                            height: 5,
                                                            alt: "",
                                                            className: ""
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                                                            src: images_0/* default.fill_star */.Z.fill_star,
                                                            width: 12,
                                                            height: 5,
                                                            alt: "",
                                                            className: ""
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                                                            src: images_0/* default.empty_star */.Z.empty_star,
                                                            width: 12,
                                                            height: 5,
                                                            alt: "",
                                                            className: ""
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime.jsx("h6", {
                                                            children: "4.5"
                                                        })
                                                    ]
                                                })
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "flex flex-row items-center",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                                                src: images_0/* default.profile_user */.Z.profile_user,
                                                width: 40,
                                                // height={30}
                                                alt: ""
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                className: "flex flex-row flex-wrap",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                        children: /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                            className: `${isMobile ? "text-sm px-5 py-1 mx-2" : "px-3 mx-1"} capitalize creator_top  rounded-full my-1 `,
                                                            children: "#unplugged"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                        children: /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                            className: `${isMobile ? "text-sm px-5 py-1 mx-2" : "px-3 mx-1"} capitalize creator_top  rounded-full my-1 `,
                                                            children: "#unplugged"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                        children: /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                            className: `${isMobile ? "text-sm px-5 py-1 mx-2" : "px-3 mx-1"} capitalize creator_top  rounded-full my-1 `,
                                                            children: "#go"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                        children: /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                            className: `${isMobile ? "text-sm px-5 py-1 mx-2" : "px-3 mx-1"} capitalize creator_top  rounded-full my-1 `,
                                                            children: "#livemusic"
                                                        })
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: `px-2 border rounded-md p-3 my-2 ${isMobile ? "px-5 w-full" : " "}`,
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "flex flex-row justify-between items-center mb-2",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx("h6", {
                                                className: "font-bold capitalize",
                                                children: "Amrish patel"
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                className: "",
                                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                    className: "flex flex-row justify-evenly items-center w-24",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                                                            src: images_0/* default.fill_star */.Z.fill_star,
                                                            width: 12,
                                                            height: 5,
                                                            alt: "",
                                                            className: ""
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                                                            src: images_0/* default.fill_star */.Z.fill_star,
                                                            width: 12,
                                                            height: 5,
                                                            alt: "",
                                                            className: ""
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                                                            src: images_0/* default.fill_star */.Z.fill_star,
                                                            width: 12,
                                                            height: 5,
                                                            alt: "",
                                                            className: ""
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                                                            src: images_0/* default.fill_star */.Z.fill_star,
                                                            width: 12,
                                                            height: 5,
                                                            alt: "",
                                                            className: ""
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                                                            src: images_0/* default.empty_star */.Z.empty_star,
                                                            width: 12,
                                                            height: 5,
                                                            alt: "",
                                                            className: ""
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime.jsx("h6", {
                                                            children: "4.5"
                                                        })
                                                    ]
                                                })
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "flex flex-row items-center",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                                                src: images_0/* default.profile_user */.Z.profile_user,
                                                width: 40,
                                                // height={30}
                                                alt: ""
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                className: "flex flex-row flex-wrap",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                        children: /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                            className: `${isMobile ? "text-sm px-5 py-1 mx-2" : "px-3 mx-1"} capitalize creator_top  rounded-full my-1 `,
                                                            children: "#unplugged"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                        children: /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                            className: `${isMobile ? "text-sm px-5 py-1 mx-2" : "px-3 mx-1"} capitalize creator_top  rounded-full my-1 `,
                                                            children: "#unplugged"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                        children: /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                            className: `${isMobile ? "text-sm px-5 py-1 mx-2" : "px-3 mx-1"} capitalize creator_top  rounded-full my-1 `,
                                                            children: "#go"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                        children: /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                            className: `${isMobile ? "text-sm px-5 py-1 mx-2" : "px-3 mx-1"} capitalize creator_top  rounded-full my-1 `,
                                                            children: "#livemusic"
                                                        })
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "w-full text-center",
                        children: /*#__PURE__*/ jsx_runtime.jsx("button", {
                            className: "start_campaign_btn px-5 py-1 w-48 rounded-full bg-white my-3",
                            children: "View All"
                        })
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const Topcreator = (Top_creator);

;// CONCATENATED MODULE: ./components/Homepage/rightDashboard/index.js



const Right_side_Dashboard = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime.jsx(Topcreator, {}),
            /*#__PURE__*/ jsx_runtime.jsx(Suggestcreator, {})
        ]
    });
};
/* harmony default export */ const rightDashboard = (Right_side_Dashboard);


/***/ }),

/***/ 1171:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Homepage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8458);
/* harmony import */ var _components_userAuth_Modal_onboarding_screens_Tab1__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5127);
/* harmony import */ var _components_userAuth_Modal_onboarding_screens_Tab2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(552);
/* harmony import */ var _components_userAuth_Modal_onboarding_screens_Tab3__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4194);
/* harmony import */ var _components_userAuth_Modal_onboarding_screens__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(475);
/* harmony import */ var _components_userAuth_Modal_onboarding_screens_Onbording_content__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2002);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9915);
/* harmony import */ var _components_All_component_layout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2098);
/* harmony import */ var _all_routing__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(4553);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_11__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_Homepage__WEBPACK_IMPORTED_MODULE_2__, js_cookie__WEBPACK_IMPORTED_MODULE_8__, _components_All_component_layout__WEBPACK_IMPORTED_MODULE_9__, _all_routing__WEBPACK_IMPORTED_MODULE_10__]);
([_components_Homepage__WEBPACK_IMPORTED_MODULE_2__, js_cookie__WEBPACK_IMPORTED_MODULE_8__, _components_All_component_layout__WEBPACK_IMPORTED_MODULE_9__, _all_routing__WEBPACK_IMPORTED_MODULE_10__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);












const Home = ()=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_11__.useRouter)();
    if (false) {}
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_all_routing__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Homepage__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {})
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;