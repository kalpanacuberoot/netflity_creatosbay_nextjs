"use strict";
exports.id = 7486;
exports.ids = [7486];
exports.modules = {

/***/ 7486:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_Colors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6029);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9332);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3590);
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8819);
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_Homepage_Termsofservice__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2978);
/* harmony import */ var _components_Homepage_Termsofservice_Terms_of_service_content__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(8910);
/* harmony import */ var _generalfunctions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(9262);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(9915);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _images__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(8417);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_toastify__WEBPACK_IMPORTED_MODULE_5__, js_cookie__WEBPACK_IMPORTED_MODULE_10__]);
([react_toastify__WEBPACK_IMPORTED_MODULE_5__, js_cookie__WEBPACK_IMPORTED_MODULE_10__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);














const Loginpage = ()=>{
    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_4__.useRouter)();
    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
        message: ""
    });
    const [isModalOpen_terms_service, setIsModalOpen_terms_service] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [brand_user, setBrand_user] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [email, setEmail] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [password, setPassword] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [showPassword, setShowPassword] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [brandData, setBrandData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    // const handleSubmit = async (e) => {
    //   e.preventDefault();
    //   setLoading(true)
    //   try {
    //     const postData = {
    //       "email": email,
    //       "password": password,
    //     };
    //     const postResponse = await apiCall(`${url}/login`, 'post', postData);
    //     console.log('POST response register-------------:', postResponse);
    //     if (postResponse?.message) {
    //       console.log('POST response register-------------:', postResponse.user.type);
    //       if (postResponse.user.type === 'creator') {
    //         Cookies.set('creator_user_data', JSON.stringify(postResponse));
    //         toast.success(postResponse?.message, {
    //           position: 'top-center',
    //           autoClose: 5000,
    //         });
    //         router.push('/creator_home');
    //       }
    //       if (postResponse.user.type === 'brand') {
    //         router.push('/home');
    //         Cookies.set('user_data', JSON.stringify(postResponse), { expires: 106500 });
    //         toast.success(postResponse?.message, {
    //           position: 'top-center',
    //           autoClose: 5000,
    //         });
    //         getUser_Brand();
    //         setLoading(false)
    //       }
    //     } else {
    //       toast.error("Have you register yourself with emailId", {
    //         position: 'top-center',
    //         autoClose: 5000,
    //       });
    //     }
    //   } catch (error) {
    //     toast.error('please register yourself or login again after sometime', {
    //       position: 'top-center',
    //       autoClose: 5000,
    //     });
    //   }
    // };
    const handleSubmit = async (e)=>{
        e.preventDefault();
        const options = {
            "email": email,
            "password": password
        };
        try {
            const response = await fetch("https://backend.creatorsbay.app/api/login", {
                method: "Post",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(options)
            });
            console.log("login response --------------------", response);
            if (response.ok) {
                const result = await response.json();
                if (result?.user?.type === "creator") {
                    js_cookie__WEBPACK_IMPORTED_MODULE_10__["default"].set("creator_user_data", JSON.stringify(result));
                    react_toastify__WEBPACK_IMPORTED_MODULE_5__.toast.success(result?.message, {
                        position: "top-center",
                        autoClose: 5000
                    });
                    router.push("/creator_home");
                }
                if (result?.user?.type === "brand") {
                    router.push("/home");
                    js_cookie__WEBPACK_IMPORTED_MODULE_10__["default"].set("user_data", JSON.stringify(result), {
                        expires: 106500
                    });
                    react_toastify__WEBPACK_IMPORTED_MODULE_5__.toast.success(result?.message, {
                        position: "top-center",
                        autoClose: 5000
                    });
                    getUser_Brand();
                    setLoading(false);
                }
            }
        } catch (error) {
            console.error("login Error:", error);
            react_toastify__WEBPACK_IMPORTED_MODULE_5__.toast.error("Please try again after sometime", {
                position: "top-center",
                autoClose: 3000
            });
        }
    };
    const togglePasswordVisibility = ()=>{
        setShowPassword(!showPassword);
    };
    const getUser_Brand = async ()=>{
        const cookieValue = JSON?.parse(js_cookie__WEBPACK_IMPORTED_MODULE_10__["default"]?.get("user_data"));
        console.log("categories cookieValue------------1", cookieValue?.token);
        const userId = JSON?.parse(js_cookie__WEBPACK_IMPORTED_MODULE_10__["default"]?.get("user_data"));
        console.log("categories cookieValue------------1", userId?.user?.id);
        try {
            const headers = {
                "Authorization": `Bearer ${cookieValue?.token}`,
                "Content-Type": "application/json"
            };
            const response = await fetch(`${_generalfunctions__WEBPACK_IMPORTED_MODULE_9__/* .url */ .HQ}/brandusers?user=${userId?.user?.id}`, {
                method: "Get",
                headers: headers
            });
            if (response?.ok) {
                const responseData = await response.json();
                console.log("brandusers response:", responseData?.data?.data);
                if (responseData.status) {
                    if (responseData?.data?.data.length === 0) {
                        router.push("/brand");
                    } else if (responseData?.data?.data?.length === 1) {
                        js_cookie__WEBPACK_IMPORTED_MODULE_10__["default"].set("brand_detail", JSON.stringify(responseData?.data?.data[0]));
                        setBrandData(responseData?.data?.data[0]);
                        router.push("/home");
                    } else {
                        router.push("/brand-selection");
                    }
                } else {
                    console.error("Error:", responseData.message);
                }
            } else {
                console.error("Error:", response.statusText);
            }
        } catch (error) {
            console.error("Error:", error);
        }
    };
    console.log("brand_detailbrand_detail", brandData);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: loading ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "w-full h-full flex items-center justify-center",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_11___default()), {
                width: 100,
                height: 100,
                alt: "",
                src: _images__WEBPACK_IMPORTED_MODULE_12__/* ["default"].Loader */ .Z.Loader
            })
        }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Homepage_Termsofservice__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                    isOpen: isModalOpen_terms_service,
                    onClose: ()=>setIsModalOpen_terms_service(false),
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "relative w-full max-w-4xl max-h-full min-w-3xl",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Homepage_Termsofservice_Terms_of_service_content__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {})
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "container p-5 xl:p-10 lg:p-10 w-full h-full flex bg-zinc-100 items-center px-10",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: " auto-col-max w-full height-70",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "flex justify-center  items-center px-10 ",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "p-5  xl:p-10 lg:p-10  bg-white border-gray-300 border-solid w-full  rounded-lg border-1",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h4", {
                                        children: [
                                            "Don't have an Account ?",
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: "shadow-lg  bg-purple-100 text-purple-800 font-bold mr-2 px-2.5 py-1 rounded dark:bg-gray-700 dark:text-purple-400 border border-purple-400 mx-4",
                                                style: {
                                                    color: _styles_Colors__WEBPACK_IMPORTED_MODULE_3__/* ["default"].logo_clr */ .Z.logo_clr
                                                },
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                    href: "/signup",
                                                    children: "Sign Up "
                                                })
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                        className: "my-5  font-bold text-left text-gray-900   ",
                                        children: "Welcome back."
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                        type: "email",
                                        id: "email",
                                        className: " focus:border-gray-100 focus:ring-gray-100 appearance-none border rounded-md w-full mt-5 bg-gray-100  py-5 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",
                                        placeholder: "Email",
                                        required: true,
                                        value: email,
                                        onChange: (e)=>setEmail(e.target.value)
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "flex items-center relative",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                type: showPassword ? "text" : "password",
                                                id: "password",
                                                className: " focus:border-gray-100 focus:ring-gray-100 appearance-none border rounded-md w-full mt-5 bg-gray-100  py-5 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",
                                                placeholder: "Password",
                                                required: true,
                                                value: password,
                                                onChange: (e)=>setPassword(e.target.value),
                                                pattern: "^.{8,}$",
                                                title: "Minimum 8 characters allowed"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                className: "absolute text-black rounded-r-md p-5 pb-0 right-0",
                                                onClick: togglePasswordVisibility,
                                                children: showPassword ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_11___default()), {
                                                    src: _images__WEBPACK_IMPORTED_MODULE_12__/* ["default"].show_eye */ .Z.show_eye,
                                                    width: 20,
                                                    height: 20,
                                                    alt: ""
                                                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_11___default()), {
                                                    src: _images__WEBPACK_IMPORTED_MODULE_12__/* ["default"].hide_eye */ .Z.hide_eye,
                                                    width: 20,
                                                    height: 20,
                                                    alt: ""
                                                })
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: " flex my-5 justify-between font_size_16",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "flex items-center",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                        type: "checkbox",
                                                        id: "myCheckbox",
                                                        className: "form-checkbox h-5 w-5 ",
                                                        style: {
                                                            backgroundColor: _styles_Colors__WEBPACK_IMPORTED_MODULE_3__/* ["default"].logo_clr */ .Z.logo_clr
                                                        }
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                        htmlFor: "myCheckbox",
                                                        className: " ml-2 text-black",
                                                        children: "Remember Me"
                                                    })
                                                ]
                                            }),
                                            " ",
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                className: " float-right ",
                                                style: {
                                                    color: _styles_Colors__WEBPACK_IMPORTED_MODULE_3__/* ["default"].pink_clr */ .Z.pink_clr
                                                },
                                                onClick: ()=>router.push("/forgot"),
                                                children: "Forgot Password ?"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                        type: "submit",
                                        className: " rounded-3xl  text-white w-full py-3 px-4 focus:outline-none focus:shadow-outline",
                                        style: {
                                            background: _styles_Colors__WEBPACK_IMPORTED_MODULE_3__/* ["default"].logo_clr */ .Z.logo_clr
                                        },
                                        // onClick={handleSubmit}
                                        onClick: ()=>router.push("/brand-selection"),
                                        children: "Login"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_toastify__WEBPACK_IMPORTED_MODULE_5__.ToastContainer, {})
                                ]
                            })
                        })
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Loginpage);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;