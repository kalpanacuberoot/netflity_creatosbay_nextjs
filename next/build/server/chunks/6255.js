"use strict";
exports.id = 6255;
exports.ids = [6255];
exports.modules = {

/***/ 5630:
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
/* harmony import */ var _ModalHeader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8070);
/* harmony import */ var _styles_Colors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6029);
/* harmony import */ var _components_four_social_media__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5334);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9915);
/* harmony import */ var _generalfunctions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(9262);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([js_cookie__WEBPACK_IMPORTED_MODULE_8__]);
js_cookie__WEBPACK_IMPORTED_MODULE_8__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];










const Edit_profile_content = ()=>{
    const [selectedOption, setSelectedOption] = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)("");
    // const options = ["Option 1", "Option 2", "Option 3"];
    const [edit_profile, setEdit_profile] = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(null);
    const [edit_name, setEdit_name] = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)("");
    const [edit_website, setEdit_website] = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)("");
    const [edit_desc, setEdit_desc] = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)("");
    const [multivalues, setMultivalues] = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(false);
    const [selectedValues, setSelectedValues] = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)([]);
    const [dropdownvalues, setDropdownvalues] = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)([]);
    const onEditProfile = async ()=>{
        try {
            let userCookie = js_cookie__WEBPACK_IMPORTED_MODULE_8__["default"].get("user_data");
            if (typeof userCookie === "undefined") {
                console.log("User not authenticated, navigating to login page...");
                router.push("/login"); // Replace '/login' with the actual login page URL
            } else {
                const cookieValue1 = JSON.parse(userCookie);
                const brand_detail = js_cookie__WEBPACK_IMPORTED_MODULE_8__["default"].get("brand_detail");
                const brandIds = js_cookie__WEBPACK_IMPORTED_MODULE_8__["default"].get("brand_id");
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
                const response = await fetch(`${_generalfunctions__WEBPACK_IMPORTED_MODULE_9__/* .url */ .HQ}/brands/${brandId}`, {
                    method: "Get",
                    headers: {
                        "Accept": "application/json",
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${cookieValue1?.token}`
                    }
                });
                console.log("response edit profile brand", response);
                if (response) {
                    const data = await response.json();
                    console.log("edit brand", data);
                    setEdit_profile(data?.data);
                // toast.success('onLogout Successfully', {
                //     position: 'top-center',
                //     autoClose: 2000,
                // });
                // router.push('/login');
                // Cookies.remove('brand_id');
                // Cookies.remove('user_data');
                } else {
                // toast.error('Logout cancelled', {
                //     position: 'top-center', // Set the toast position
                //     autoClose: 3000, // Close the toast after 3 seconds
                // });
                }
            }
        } catch (error) {
            console.error("Error edit profile:", error);
        }
    };
    const getCompanyCategories = async ()=>{
        try {
            const cookieValue1 = JSON.parse(js_cookie__WEBPACK_IMPORTED_MODULE_8__["default"].get("user_data"));
            if (typeof cookieValue1 === "undefined") {
                console.log("User not authenticated, navigating to login page...");
                router.push("/login"); // Replace '/login' with the actual login page URL
                console.log("categories cookieValue------------1", cookieValue1?.token);
            }
        } catch (error) {
            console.error("Error parsing user_data cookie:", error);
        }
        try {
            const response = await fetch(`${_generalfunctions__WEBPACK_IMPORTED_MODULE_9__/* .url */ .HQ}/categories`, {
                method: "Get",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${cookieValue?.token}`
                }
            });
            console.log("categories response------", response);
            if (response.ok) {
                const result = await response.json();
                console.log("brand result------------", result?.data?.data);
                setDropdownvalues(result?.data?.data);
            } else {
                console.error("Error:", response.statusText);
            }
        } catch (error) {
            console.error("Error:", error);
        }
    };
    (0,react__WEBPACK_IMPORTED_MODULE_7__.useEffect)(()=>{
        onEditProfile();
        getCompanyCategories();
    }, []);
    console.log("edit profile data", edit_profile, selectedValues);
    const handleSelect = (event, selectedItem)=>{
        const value = selectedItem; // Pass the entire item as the value
        if (!selectedValues.some((item)=>item.id === value.id)) {
            setSelectedValues([
                ...selectedValues,
                value
            ]);
        } else {
            setSelectedValues(selectedValues.filter((item)=>item.id !== value.id));
        }
    };
    // const brand_details = JSON.parse(Cookies.get('brand_detail'));
    // console.log("brand_details edit profile",brand_details);
    // const edit_profile_category = edit_profile?.categories.map((item) => item.name);
    // console.log("edit_profile_category",edit_profile_category)   // edit_profile_ht
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "overflow-x-hidden w-full relative bg-white rounded-lg shadow dark:bg-gray-700 h-full",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    style: {
                        background: _styles_Colors__WEBPACK_IMPORTED_MODULE_5__/* ["default"].invoice_gradient_clr */ .Z.invoice_gradient_clr
                    },
                    className: "auto-cols-max p-3 rounded-md flex flex-row my-5 mx-8",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "flex flex-row justify-between items-center w-full",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "text-2xl font-bold ps-5",
                            style: {
                                color: _styles_Colors__WEBPACK_IMPORTED_MODULE_5__/* ["default"].white_clr */ .Z.white_clr
                            },
                            children: "Edit Profile"
                        })
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("hr", {}),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "space-y-6 p-10 ",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "font_size_21  line-height-[26.52px]",
                            style: {
                                fontWeight: "bold"
                            },
                            children: "Brand Details."
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                            className: "",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                    type: "compant",
                                    id: "profile_name",
                                    className: "appearance-none border rounded-md w-full bg-gray-100  py-5 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",
                                    placeholder: "Brand Name",
                                    // value={edit_profile ? edit_profile?.name : edit_name}
                                    onChange: (e)=>setEdit_name(e.target.value),
                                    defaultValue: edit_profile ? edit_profile?.name : edit_name
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                    type: "text",
                                    id: "website",
                                    className: "appearance-none border rounded-md w-full mt-5 bg-gray-100  py-5 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",
                                    placeholder: "Brand Website",
                                    onChange: (e)=>setEdit_website(e.target.value),
                                    defaultValue: edit_profile ? edit_profile?.website : edit_website
                                }),
                                edit_profile?.categories && edit_profile?.categories.map((item, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                        type: "text",
                                        id: "category",
                                        className: "appearance-none border rounded-md w-full mt-5 bg-gray-100  py-5 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",
                                        placeholder: "Brand Type",
                                        // value={item?.name}
                                        defaultValue: item?.name
                                    }, index)),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "relative w-full mt-5",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                            htmlFor: "fileInput",
                                            className: "w-full border-dotted h-44  align-middle border-4 rounded-lg bg-white   py-4 px-6 flex flex-col items-center justify-center cursor-pointer",
                                            style: {
                                                borderColor: _styles_Colors__WEBPACK_IMPORTED_MODULE_5__/* ["default"].logo_clr */ .Z.logo_clr
                                            },
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "mb-2",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                        // src={Images.plus_icon}
                                                        // src={ brand_details?.brand?.logo}
                                                        src: edit_profile?.logo,
                                                        width: 50,
                                                        height: 50,
                                                        alt: "",
                                                        className: "p-1"
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    className: "text-base  text-gray-700",
                                                    children: "Brand Logo"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                            id: "fileInput",
                                            className: "absolute inset-0 opacity-0 w-full",
                                            type: "file"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("textarea", {
                                    id: "descriptionInput",
                                    type: "text",
                                    placeholder: "Brand Description",
                                    className: "appearance-none border rounded-md w-full align-top mt-5 bg-gray-100 h-40 py-5 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",
                                    rows: 4,
                                    // value={brand_details?.brand?.description}
                                    // value={edit_profile?.description}
                                    defaultValue: edit_profile?.description
                                })
                            ]
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Edit_profile_content);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6452:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const Modal_Edit_Profile = ({ isOpen , onClose , children  })=>{
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
                className: "modal-content bg-white rounded shadow-md overflow-y-auto",
                style: {
                    maxHeight: "95vh"
                },
                children: children
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Modal_Edit_Profile);


/***/ }),

/***/ 862:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _styles_Colors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6029);
/* harmony import */ var _ModalHeader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8070);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9132);
/* harmony import */ var _generalfunctions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9262);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3590);
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8819);
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9915);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_toastify__WEBPACK_IMPORTED_MODULE_6__, js_cookie__WEBPACK_IMPORTED_MODULE_8__]);
([react_toastify__WEBPACK_IMPORTED_MODULE_6__, js_cookie__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);










const Change_password_content = ()=>{
    const [currentpassword, setCurrentpassword] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)("");
    const [password, setPassword] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)("");
    const [confirmPassword, setConfirmPassword] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)("");
    const [passwordsMatch, setPasswordsMatch] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(true);
    const handlePasswordChange = (e)=>{
        const newPassword = e.target.value;
        setPassword(newPassword);
        // Check if passwords match
        setPasswordsMatch(newPassword === confirmPassword);
    };
    const handleConfirmPasswordChange = (e)=>{
        const newConfirmPassword = e.target.value;
        setConfirmPassword(newConfirmPassword);
        // Check if passwords match
        setPasswordsMatch(password === newConfirmPassword);
    };
    const handleSubmit = async (e)=>{
        e.preventDefault();
        const cookieValue = JSON.parse(js_cookie__WEBPACK_IMPORTED_MODULE_8__["default"].get("user_data"));
        console.log("categories cookieValue------------1", cookieValue?.token);
        try {
            const postData = {
                "old_password": currentpassword,
                "new_password": password
            };
            const headers = {
                "Authorization": `Bearer ${cookieValue?.token}`,
                "Content-Type": "application/json"
            };
            const response = await fetch(`${_generalfunctions__WEBPACK_IMPORTED_MODULE_5__/* .url */ .HQ}/changepassword`, {
                method: "POST",
                headers: headers,
                body: JSON.stringify(postData)
            });
            console.log("changepassword response:", response);
            if (response?.ok) {
                const responseData = await response.json();
                console.log("changepassword response:2", responseData);
                if (responseData.status) {
                    react_toastify__WEBPACK_IMPORTED_MODULE_6__.toast.success("changepassword response: Successfully Created", {
                        position: "top-center",
                        autoClose: 5000
                    });
                // router.push('/home');
                } else {
                    console.error("changepassword Error:", responseData.message);
                // alert('Brand creation failed');
                }
            } else {
                if (response?.status === 401) {
                    console.error("changepassword---Error:", response?.statusText);
                    // alert('Brand creation failed');
                    react_toastify__WEBPACK_IMPORTED_MODULE_6__.toast.error("Invalid old password", {
                        position: "top-center",
                        autoClose: 5000
                    });
                }
            }
        } catch (error) {
            console.error("changepassword changepassword Error:", error);
        }
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "relative bg-white rounded-lg shadow dark:bg-gray-700",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ModalHeader__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {}),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "space-y-6 container-fluid p-14",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "border rounded-lg p-10 shadow-lg",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                className: "font-bold line-height-[26.52px] mb-5",
                                children: "Change Password"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                                onSubmit: handleSubmit,
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "flex flex-col",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                type: "password",
                                                id: "current_password",
                                                className: "appearance-none border rounded-md w-full py-5 bg-gray-100 px-3 mr-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",
                                                placeholder: "Current Password",
                                                value: currentpassword,
                                                onChange: (e)=>setCurrentpassword(e.target.value),
                                                required: true
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                type: "password",
                                                id: "new_password",
                                                className: " focus:border-purple-500 focus:ring-purple-500 appearance-none border rounded-md w-full mt-5 bg-gray-100  py-5 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",
                                                placeholder: "Create New Password",
                                                required: true,
                                                value: password,
                                                // onChange={(e) => setPassword(e.target.value)}
                                                onChange: handlePasswordChange,
                                                pattern: "^.{8,}$",
                                                title: "Minimum 8 characters allowed"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                type: "password",
                                                id: "confirm_password",
                                                className: " focus:border-purple-500 focus:ring-purple-500 appearance-none border rounded-md w-full mt-5 bg-gray-100  py-5 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",
                                                placeholder: "Confirm New Password",
                                                value: confirmPassword,
                                                required: true,
                                                // onChange={(e) => setPasswordsMatch(e.target.value)}
                                                onChange: handleConfirmPasswordChange
                                            }),
                                            !passwordsMatch && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                children: "Passwords do not match"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Button__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                        buttoncss: "font_size_24 leading-6 py-3 button_clr my-5",
                                        label: "Change Password",
                                        onClick: handleSubmit
                                    })
                                ]
                            })
                        ]
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Change_password_content);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4231:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const Modal_change_password = ({ isOpen , onClose , children  })=>{
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Modal_change_password);


/***/ }),

/***/ 1991:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _images__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8417);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ModalHeader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8070);
/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9132);
/* harmony import */ var _styles_Colors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6029);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9915);
/* harmony import */ var _generalfunctions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9262);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(3590);
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(8819);
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_11__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([js_cookie__WEBPACK_IMPORTED_MODULE_6__, react_toastify__WEBPACK_IMPORTED_MODULE_8__]);
([js_cookie__WEBPACK_IMPORTED_MODULE_6__, react_toastify__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);













const Logout_content = ()=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_11__.useRouter)();
    const [logout, setLogout] = (0,react__WEBPACK_IMPORTED_MODULE_10__.useState)(null);
    const onLogout = async ()=>{
        const cookieValue = JSON.parse(js_cookie__WEBPACK_IMPORTED_MODULE_6__["default"].get("user_data"));
        console.log("categories cookieValue------------1", cookieValue?.token);
        try {
            const response = await fetch(`${_generalfunctions__WEBPACK_IMPORTED_MODULE_7__/* .url */ .HQ}/logout`, {
                method: "POST",
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${cookieValue?.token}`
                }
            });
            console.log("response onLogout", response);
            if (response) {
                const data = await response.json();
                console.log("onLogout", data);
                react_toastify__WEBPACK_IMPORTED_MODULE_8__.toast.success("onLogout Successfully", {
                    position: "top-center",
                    autoClose: 2000
                });
                router.push("/login");
                const cookies = Object.keys(js_cookie__WEBPACK_IMPORTED_MODULE_6__["default"].get());
                cookies.forEach((cookie)=>{
                    js_cookie__WEBPACK_IMPORTED_MODULE_6__["default"].remove(cookie);
                });
            // Cookies.remove('brand_id');
            // Cookies.remove('user_data');
            } else {
                react_toastify__WEBPACK_IMPORTED_MODULE_8__.toast.error("Logout cancelled", {
                    position: "top-center",
                    autoClose: 3000
                });
            }
        } catch (error) {
            console.error("Error uploading image:", error);
        }
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "relative bg-white rounded-lg shadow dark:bg-gray-700",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ModalHeader__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {}),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "space-y-6 container-fluid p-14",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "border rounded-lg p-10  text-center shadow-lg",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "font_size_40 line-height-[53.32px]",
                                style: {
                                    color: _styles_Colors__WEBPACK_IMPORTED_MODULE_5__/* ["default"].blue_clr */ .Z.blue_clr
                                },
                                children: [
                                    "Oh no! You,re leaving...",
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                    "Are you sure ?"
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "font_size_18  line-height-[27px] my-3",
                                children: "Sign up for our newletter to stay always up to date."
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "py-3",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Button__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                        buttoncss: "font_size_24 leading-6 py-3 button_clr my-3",
                                        label: "No, Just Kidding "
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Button__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                        buttoncss: "font_size_24 leading-6 py-3 button_clr my-3",
                                        label: "Yes, Log Me Out",
                                        // onClick={onLogout}
                                        onClick: ()=>router.push("/")
                                    })
                                ]
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_toastify__WEBPACK_IMPORTED_MODULE_8__.ToastContainer, {})
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Logout_content);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7581:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const Modal_logout = ({ isOpen , onClose , children  })=>{
    // if (!isOpen) return null;
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
                className: "modal-content bg-white rounded shadow-md ",
                children: children
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Modal_logout);


/***/ }),

/***/ 2707:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _styles_Colors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6029);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);



const Notification_content = ()=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "relative bg-white rounded-lg shadow dark:bg-gray-700 text-left min-h-4xl overflow-y-auto",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "h-full origin-top-right w-96  rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none",
                role: "menu",
                "aria-orientation": "vertical",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "py-1",
                    role: "none",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: " flex justify-between align-middle  p-4 items-center",
                            style: {
                                borderBottom: "1px solid hsla(330, 93%, 66%, 0.5)"
                            },
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                    children: "Notification"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                    className: "bg-purple-100 p-2 rounded-md w-12  ",
                                    children: "5"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "p-5 scroll",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: " bg-purple-100 rounded-md mt-7 p-5",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: " flex justify-between gap-5",
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "  ",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                                            className: "mb-3",
                                                            children: "Something has happened"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                                                            children: "Lucas ipsum dolor sit amet chewbacca aayla dantooine obi-wan atrivis."
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    children: "x"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                                            className: "text-right",
                                            children: "12:18"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: " bg-purple-100 rounded-md mt-7 p-5",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: " flex justify-between gap-5",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    children: " &"
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                                            className: "mb-3 font-bold",
                                                            style: {
                                                                color: _styles_Colors__WEBPACK_IMPORTED_MODULE_1__/* ["default"].notification_green */ .Z.notification_green
                                                            },
                                                            children: "Well done Anakin!"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                                                            children: "Qrygg elomin kashyyyk skirata. Oswaft mirta omwati kohl shmi."
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    children: "x"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                                            className: "text-right",
                                            children: "13 H ago"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: " bg-purple-100 rounded-md mt-7 p-5",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: " flex justify-between gap-5",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    children: " &"
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                                            className: "mb-3 font-bold text-green-700",
                                                            children: "Well done Anakin!"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                                                            children: "Qrygg elomin kashyyyk skirata. Oswaft mirta omwati kohl shmi."
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    children: "x"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                                            className: "text-right",
                                            children: "13 H ago"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: " bg-purple-100 rounded-md mt-7 p-5",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: " flex justify-between gap-5",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    children: " &"
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                                            className: "mb-3 font-bold text-green-700",
                                                            children: "Well done Anakin!"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                                                            children: "Qrygg elomin kashyyyk skirata. Oswaft mirta omwati kohl shmi."
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    children: "x"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                                            className: "text-right",
                                            children: "13 H ago"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: " bg-purple-100 rounded-md mt-7 p-5",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: " flex justify-between gap-5",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    children: " &"
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                                            className: "mb-3 font-bold text-green-700",
                                                            children: "Well done Anakin!"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                                                            children: "Qrygg elomin kashyyyk skirata. Oswaft mirta omwati kohl shmi."
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    children: "x"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                                            className: "text-right",
                                            children: "13 H ago"
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Notification_content);


/***/ }),

/***/ 1039:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const Notification_popup = ({ isOpen , onClose , children  })=>{
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
                className: "modal-content bg-white rounded shadow-md ",
                children: children
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Notification_popup);


/***/ }),

/***/ 6255:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _images__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8417);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Termsofservice__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2978);
/* harmony import */ var _Termsofservice_Terms_of_service_content__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8910);
/* harmony import */ var _Modal_logout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7581);
/* harmony import */ var _Modal_logout_Logout_content__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1991);
/* harmony import */ var _Modal_Invite_members__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(4236);
/* harmony import */ var _Modal_Invite_members_Invite_members_content__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(4772);
/* harmony import */ var _Modal_Edit_Profile__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(6452);
/* harmony import */ var _Modal_Edit_Profile_Edit_profile_content__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(5630);
/* harmony import */ var _Notification_popup__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(1039);
/* harmony import */ var _Notification_popup_Notification_content__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(2707);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(9915);
/* harmony import */ var _Modal_change_password__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(4231);
/* harmony import */ var _generalfunctions__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(9262);
/* harmony import */ var _Modal_change_password_Change_password_content__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(862);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(3590);
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(8819);
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(4802);
/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(cookie__WEBPACK_IMPORTED_MODULE_22__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Modal_logout_Logout_content__WEBPACK_IMPORTED_MODULE_8__, _Modal_Edit_Profile_Edit_profile_content__WEBPACK_IMPORTED_MODULE_12__, js_cookie__WEBPACK_IMPORTED_MODULE_15__, _Modal_change_password_Change_password_content__WEBPACK_IMPORTED_MODULE_18__, react_toastify__WEBPACK_IMPORTED_MODULE_20__]);
([_Modal_logout_Logout_content__WEBPACK_IMPORTED_MODULE_8__, _Modal_Edit_Profile_Edit_profile_content__WEBPACK_IMPORTED_MODULE_12__, js_cookie__WEBPACK_IMPORTED_MODULE_15__, _Modal_change_password_Change_password_content__WEBPACK_IMPORTED_MODULE_18__, react_toastify__WEBPACK_IMPORTED_MODULE_20__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
























const Left_Dashboard = ()=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_19__.useRouter)();
    const [brand_user, setBrand_user] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)([]);
    const [dropdown_menu, setDropdown_menu] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);
    const [isModalOpen_terms_service, setIsModalOpen_terms_service] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);
    const [isModalOpenlogout, setIsModalOpenlogout] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);
    const [isModalOpen_invite_mem, setIsModalOpen_invite_mem] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);
    const [isModalOpen_edit_prof, setIsModalOpen_edit_prof] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);
    const [isModalOpen_notification, setIsModalOpen_notification] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);
    const [isModalOpen_change_password, setIsModalOpen_change_password] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);
    const [alluser_accounts, setAlluser_accounts] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);
    const dropdownRef = (0,react__WEBPACK_IMPORTED_MODULE_4__.useRef)(null);
    const [cookie_user_brand, setCookie_user_brand] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(null);
    const settingdropdownRef = (0,react__WEBPACK_IMPORTED_MODULE_4__.useRef)(null);
    const [selectedTab, setSelectedTab] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)("home");
    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);
    const [isMobile, setIsMobile] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);
    const [activePage, setActivePage] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)("home");
    const onSwitchBrand = (item, index)=>{
        console.log("onSwitchBrand", item, index);
        // JSON.stringify(Cookies.set('brand_detail',item))
        const new_user_name = js_cookie__WEBPACK_IMPORTED_MODULE_15__["default"].set("brand_detail", JSON.stringify(item), {
            expires: 106500
        });
        setCookie_user_brand(new_user_name);
        router.reload();
    };
    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{
        checkIsMobile();
        const brand_details = js_cookie__WEBPACK_IMPORTED_MODULE_15__["default"].get("brand_detail");
        if (brand_details) {
            try {
                const brand_detail_name = JSON.parse(brand_details);
                // Now, you can access properties of the object
                console.log("brand_user--dwndbawb", brand_user, brand_detail_name);
                setCookie_user_brand(brand_detail_name);
            } catch (error) {
                console.error("Error parsing JSON from cookie:", error);
            }
        } else {
            console.error('Cookie "brand_detail" is empty or not defined');
        }
        getUser_Brand();
        function handleClickOutside(event) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setAlluser_accounts(false);
            }
            if (settingdropdownRef.current && !settingdropdownRef.current.contains(event.target)) {
                setDropdown_menu(false);
            }
        }
        window.addEventListener("resize", checkIsMobile);
        document.addEventListener("mousedown", handleClickOutside);
        return ()=>{
            window.removeEventListener("resize", checkIsMobile);
            document.removeEventListener("mousedown", handleClickOutside);
        };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    const toggleDropdown = ()=>{
        setAlluser_accounts(!alluser_accounts);
    };
    const getUser_Brand = async ()=>{
        const cookieValue = JSON.parse(js_cookie__WEBPACK_IMPORTED_MODULE_15__["default"].get("user_data"));
        const userId = JSON?.parse(js_cookie__WEBPACK_IMPORTED_MODULE_15__["default"]?.get("user_data"));
        try {
            const headers = {
                "Authorization": `Bearer ${cookieValue?.token}`,
                "Content-Type": "application/json"
            };
            const response = await fetch(`${_generalfunctions__WEBPACK_IMPORTED_MODULE_17__/* .url */ .HQ}/brandusers?user=${userId?.user?.id}`, {
                method: "Get",
                headers: headers
            });
            console.log("response get userbarnd", response);
            if (response?.ok) {
                const responseData = await response.json();
                console.log("brandusers response:", responseData?.data?.data);
                // Cookies.set('brand_id', JSON.stringify(responseData?.data?.id), { expires: 106500 });
                if (responseData?.status === "success") {
                    // toast.success('brandusers Name', {
                    //     position: 'top-center',
                    //     autoClose: 5000,
                    // });
                    setBrand_user(responseData?.data?.data);
                } else {
                    console.error("Error:", responseData.message);
                // alert('Brand creation failed');
                }
            } else {
                console.error("Error:", response.statusText);
            // alert('Brand creation failed');
            }
        } catch (error) {
            console.error("Error:", error);
        }
    };
    const openModal = ()=>{
        setIsModalOpen_terms_service(true);
    };
    const closeModal = ()=>{
        setIsModalOpen_terms_service(false);
    };
    console.log("brand_user--dwndbawb1", brand_user, cookie_user_brand);
    const handleHome = ()=>{
        setActivePage("home");
        setLoading(true);
        router.push("/home");
        setLoading(false);
    };
    const handleLiveCampaign = ()=>{
        setActivePage("live_campaign");
        setLoading(true);
        router.push("/live_campaign");
        setLoading(false);
    };
    const handleMarketplace = ()=>{
        setActivePage("marketplace");
        setLoading(true);
        router.push("/marketplace");
        setLoading(false);
    };
    const handleChats = ()=>{
        setActivePage("communication");
        setLoading(true);
        router.push("/communication");
        setLoading(false);
    };
    const handleInvoice = ()=>{
        setActivePage("invoice");
        setLoading(true);
        router.push("/invoice");
        setLoading(false);
    };
    const checkIsMobile = ()=>{
        setIsMobile(window.innerWidth <= 768); // Adjust the breakpoint as needed
    // setIsMobile(window.innerWidth <= 800);
    };
    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{
        const path = router.asPath;
        if (path === "/") {
            setActivePage("home");
        } else if (path === "/live_campaign") {
            setActivePage("live_campaign");
        } else if (path === "/marketplace") {
            setActivePage("marketplace");
        } else if (path === "/communication") {
            setActivePage("communication");
        } else if (path === "/invoice") {
            setActivePage("invoice");
        }
    // Add similar conditions for other pages
    }, [
        router.asPath
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: loading ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "w-full h-full flex items-center justify-center",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                width: 100,
                height: 100,
                alt: "",
                src: _images__WEBPACK_IMPORTED_MODULE_1__/* ["default"].Loader */ .Z.Loader
            })
        }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Termsofservice__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                    isOpen: isModalOpen_terms_service,
                    onClose: closeModal,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "relative max-w-3xl max-h-full min-w-3xl",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Termsofservice_Terms_of_service_content__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {})
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Modal_logout__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                    isOpen: isModalOpenlogout,
                    onClose: ()=>setIsModalOpenlogout(false),
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "relative w-full max-w-2xl max-h-full",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Modal_logout_Logout_content__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {})
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Modal_Invite_members__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                    isOpen: isModalOpen_invite_mem,
                    onClose: ()=>setIsModalOpen_invite_mem(false),
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "relative w-full max-w-2xl max-h-full",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Modal_Invite_members_Invite_members_content__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {})
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Modal_Edit_Profile__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                    isOpen: isModalOpen_edit_prof,
                    onClose: ()=>setIsModalOpen_edit_prof(false),
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "relative w-full max-w-2xl max-h-3xl",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Modal_Edit_Profile_Edit_profile_content__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {})
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Notification_popup__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                    isOpen: isModalOpen_notification,
                    onClose: ()=>setIsModalOpen_notification(false),
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "relative w-full max-w-4xl max-h-full min-w-3xl ",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Notification_popup_Notification_content__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {})
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Modal_change_password__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
                    isOpen: isModalOpen_change_password,
                    onClose: ()=>setIsModalOpen_change_password(false),
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "relative w-full max-w-4xl max-h-full min-w-3xl ",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Modal_change_password_Change_password_content__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z, {})
                    })
                }),
                isMobile && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "flex flex-row justify-between w-full items-center h-auto",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "mx-10",
                                    onClick: ()=>router.push("/home"),
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                                        src: _images__WEBPACK_IMPORTED_MODULE_1__/* ["default"].company_logo */ .Z.company_logo,
                                        width: 70,
                                        height: 70,
                                        alt: "",
                                        className: " mx-auto cursor-pointer"
                                    })
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "flex",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: " relative flex flex-row my-5 justify-between rounded-full right-0",
                                            ref: dropdownRef && settingdropdownRef,
                                            children: [
                                                brand_user?.length > 0 && brand_user.map((item, index)=>{
                                                    // const isCurrent = item.isCurrent;
                                                    const isCurrent = item?.brand?.id === cookie_user_brand?.brand?.id;
                                                    console.log("isCurrent left dashboard", isCurrent);
                                                    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: " w-full rounded-full flex flex-row justify-evenly cursor-pointer",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                            src: item?.brand?.logo,
                                                            width: 60,
                                                            height: 30,
                                                            alt: "",
                                                            onClick: toggleDropdown,
                                                            className: ""
                                                        })
                                                    }, index);
                                                }),
                                                alluser_accounts && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "z-10 mt-10 top-2 py-3 absolute bg-white rounded-lg shadow dark:bg-gray-700 absolute divide-gray-100 shadow dark:bg-gray-700 border home_dropdown_menu rounded-md",
                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "w-full px-3 py-2",
                                                        children: [
                                                            brand_user?.length > 0 && brand_user.map((item, index)=>{
                                                                // const isCurrent = item.isCurrent;
                                                                const isCurrent = item?.brand?.id === cookie_user_brand?.brand?.id;
                                                                console.log("isCurrent left dashboard", isCurrent);
                                                                return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                    className: `py-1 my-2 ps-3 w-100 rounded-full border flex flex-row justify-evenly ${isCurrent ? "border-yellow-500" : "button_clr"}`,
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                                            src: item?.brand?.logo,
                                                                            width: 30,
                                                                            height: 30,
                                                                            className: "rounded-full bg-white",
                                                                            alt: ""
                                                                        }),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                                            className: "text-base w-48 dropdown_text text-center",
                                                                            onClick: ()=>onSwitchBrand(item, index),
                                                                            children: item?.brand?.name
                                                                        })
                                                                    ]
                                                                }, index);
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                                href: "/brand",
                                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                    className: "flex items-center justify-center mt-5 bg-yellow-400 py-2 rounded-lg",
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                                            src: _images__WEBPACK_IMPORTED_MODULE_1__/* ["default"].add_button_black_clr */ .Z.add_button_black_clr,
                                                                            width: 20,
                                                                            height: 20,
                                                                            alt: "",
                                                                            className: "me-3 cursor-pointer"
                                                                        }),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                                            children: " Create New Brand"
                                                                        })
                                                                    ]
                                                                })
                                                            })
                                                        ]
                                                    })
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: " relative flex flex-row mx-5 justify-between rounded-full ",
                                            ref: dropdownRef && settingdropdownRef,
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "flex  flex-row items-center justify-end text-right block rounded-md w-full outline-none text-gray-700 leading-tight ",
                                                    ref: settingdropdownRef,
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            onClick: ()=>setIsModalOpen_notification(true) && setDropdown_menu(false),
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                                src: _images__WEBPACK_IMPORTED_MODULE_1__/* ["default"].notification */ .Z.notification,
                                                                width: 20,
                                                                height: 20,
                                                                className: "my-2 mx-1",
                                                                alt: ""
                                                            })
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                            src: _images__WEBPACK_IMPORTED_MODULE_1__/* ["default"].dropdown_icon */ .Z.dropdown_icon,
                                                            width: 15,
                                                            height: 30,
                                                            className: "my-1 mx-1",
                                                            alt: "",
                                                            onClick: ()=>setDropdown_menu(!dropdown_menu) && setIsModalOpen_notification(false)
                                                        })
                                                    ]
                                                }),
                                                dropdown_menu && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: " z-10 mt-10 top-2 py-3 right-0 absolute bg-white rounded-lg shadow dark:bg-gray-700 absolute divide-gray-100 shadow dark:bg-gray-700 border  rounded-md",
                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "w-full px-3 py-2",
                                                        children: [
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                className: "py-1 ps-3 items-center w-100 rounded-full flex flex-row justify-evenly",
                                                                onClick: ()=>setIsModalOpen_invite_mem(true),
                                                                children: [
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                                        src: _images__WEBPACK_IMPORTED_MODULE_1__/* ["default"].market_place_icon */ .Z.market_place_icon,
                                                                        width: 25,
                                                                        className: " ",
                                                                        alt: ""
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                                        className: " w-48 dropdown_text text-center",
                                                                        children: "Invite Members"
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                                href: "/support",
                                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                    className: "py-1 my-2 ps-3 w-100 rounded-full flex flex-row justify-evenly",
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                                            src: _images__WEBPACK_IMPORTED_MODULE_1__/* ["default"].support_icon */ .Z.support_icon,
                                                                            width: 25,
                                                                            className: "",
                                                                            alt: ""
                                                                        }),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                                            className: " w-48 dropdown_text text-center",
                                                                            children: "Support"
                                                                        })
                                                                    ]
                                                                })
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                className: "py-1  ps-3 my-2 w-100 rounded-full flex flex-row justify-evenly",
                                                                onClick: openModal,
                                                                children: [
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                                        src: _images__WEBPACK_IMPORTED_MODULE_1__/* ["default"].terms_of_service */ .Z.terms_of_service,
                                                                        width: 25,
                                                                        className: "",
                                                                        alt: ""
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                                        className: "w-48 dropdown_text rounded-lg",
                                                                        children: "Terms of services"
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                className: "py-1 my-2 ps-3 w-100 rounded-full flex flex-row justify-evenly",
                                                                onClick: ()=>setIsModalOpen_change_password(true),
                                                                children: [
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                                        src: _images__WEBPACK_IMPORTED_MODULE_1__/* ["default"].profile_user */ .Z.profile_user,
                                                                        width: 25,
                                                                        className: "",
                                                                        alt: ""
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                                        className: " w-48 dropdown_text text-center",
                                                                        children: "Change Password"
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                className: "py-1 my-2  ps-3 w-100 rounded-full flex flex-row justify-evenly",
                                                                onClick: ()=>setIsModalOpenlogout(true),
                                                                children: [
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                                        src: _images__WEBPACK_IMPORTED_MODULE_1__/* ["default"].logout */ .Z.logout,
                                                                        width: 25,
                                                                        height: 18,
                                                                        className: "",
                                                                        alt: ""
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                                        className: "w-48 dropdown_text rounded-lg",
                                                                        children: "Sign Out"
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    })
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "hamburger-icon m-10 ms-0",
                                            onClick: ()=>setIsMobileMenuOpen(!isMobileMenuOpen),
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: `bar ${isMobileMenuOpen ? "open" : ""}`
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: `bar ${isMobileMenuOpen ? "open" : ""}`
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: `bar ${isMobileMenuOpen ? "open" : ""}`
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        }),
                        isMobileMenuOpen && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("nav", {
                            className: "mobile-menu",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "my-5",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "my-5 items-center w-full rounded-full py-1 flex flex-row justify-evenly",
                                        onClick: handleHome,
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                src: _images__WEBPACK_IMPORTED_MODULE_1__/* ["default"].home_icon */ .Z.home_icon,
                                                width: 25,
                                                className: " ",
                                                alt: ""
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                className: "w-10 text-start",
                                                children: "Home"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: " my-5 w-full rounded-full py-1 flex flex-row justify-evenly",
                                        onClick: handleLiveCampaign,
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                src: _images__WEBPACK_IMPORTED_MODULE_1__/* ["default"].campaign_icon */ .Z.campaign_icon,
                                                width: 25,
                                                className: "",
                                                alt: ""
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                className: "w-10 text-start",
                                                children: "Campaign"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: " my-5 w-full rounded-full py-1 flex flex-row justify-evenly",
                                        onClick: handleMarketplace,
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                src: _images__WEBPACK_IMPORTED_MODULE_1__/* ["default"].market_place_icon */ .Z.market_place_icon,
                                                width: 25,
                                                className: "",
                                                alt: ""
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                className: "w-10 text-start",
                                                children: "Marketplace"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: " my-5 w-full rounded-full  py-1 flex flex-row justify-evenly",
                                        onClick: handleChats,
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                src: _images__WEBPACK_IMPORTED_MODULE_1__/* ["default"].chats_icon */ .Z.chats_icon,
                                                width: 25,
                                                className: "",
                                                alt: ""
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                className: "w-10 text-start",
                                                children: "Chats"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: " my-5 w-full rounded-full  py-1 flex flex-row justify-evenly",
                                        onClick: handleInvoice,
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                src: _images__WEBPACK_IMPORTED_MODULE_1__/* ["default"].invoices_icon */ .Z.invoices_icon,
                                                width: 25,
                                                className: "",
                                                alt: ""
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                className: "w-10 text-start",
                                                children: "Invoices"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: " my-5 w-full rounded-full  py-1 flex flex-row justify-evenly",
                                        onClick: ()=>setIsModalOpen_edit_prof(true),
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                src: _images__WEBPACK_IMPORTED_MODULE_1__/* ["default"].invoices_icon */ .Z.invoices_icon,
                                                width: 25,
                                                className: "",
                                                alt: ""
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                className: "w-10 text-start",
                                                children: "Edit Profile"
                                            })
                                        ]
                                    })
                                ]
                            })
                        })
                    ]
                }),
                !isMobile && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "h-screen w-1/5  px-10",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "my-10",
                            onClick: ()=>router.push("/home"),
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                                src: _images__WEBPACK_IMPORTED_MODULE_1__/* ["default"].company_logo */ .Z.company_logo,
                                width: 100,
                                height: 100,
                                alt: "",
                                className: " mx-auto cursor-pointer"
                            })
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "border px-3 py- 4 relative flex flex-row my-5 justify-between rounded-full ",
                            ref: dropdownRef && settingdropdownRef,
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: " my-2 ms-3 w-100 rounded-full flex flex-row justify-evenly cursor-pointer",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                                        src: _images__WEBPACK_IMPORTED_MODULE_1__/* ["default"].avatar1 */ .Z.avatar1,
                                        width: 35,
                                        height: 30,
                                        alt: ""
                                    })
                                }),
                                alluser_accounts && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "z-10 mt-10 top-2 py-3 absolute bg-white rounded-lg shadow dark:bg-gray-700 absolute divide-gray-100 shadow dark:bg-gray-700 border home_dropdown_menu rounded-md",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "w-full px-3 py-2",
                                        children: [
                                            brand_user?.length > 0 && brand_user.map((item, index)=>{
                                                // const isCurrent = item.isCurrent;
                                                const isCurrent = item?.brand?.id === cookie_user_brand?.brand?.id;
                                                console.log("isCurrent left dashboard", isCurrent);
                                                return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: `py-1 my-2 ps-3 w-100 rounded-full border flex flex-row justify-evenly ${isCurrent ? "border-yellow-500" : "button_clr"}`,
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                            src: item?.brand?.logo,
                                                            width: 30,
                                                            height: 30,
                                                            className: "rounded-full bg-white",
                                                            alt: ""
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                            className: "text-base w-48 dropdown_text text-center capitalize",
                                                            onClick: ()=>onSwitchBrand(item, index),
                                                            children: item?.brand?.name
                                                        })
                                                    ]
                                                }, index);
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                href: "/brand",
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "flex items-center justify-center mt-5 bg-yellow-400 py-2 rounded-lg",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                            src: _images__WEBPACK_IMPORTED_MODULE_1__/* ["default"].add_button_black_clr */ .Z.add_button_black_clr,
                                                            width: 20,
                                                            height: 20,
                                                            alt: "",
                                                            className: "me-3 cursor-pointer"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                            children: " Create New Brand"
                                                        })
                                                    ]
                                                })
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "flex  flex-row items-center justify-end text-right block rounded-md w-full outline-none text-gray-700 leading-tight ",
                                    ref: settingdropdownRef,
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            onClick: ()=>setIsModalOpen_notification(true) && setDropdown_menu(false),
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                src: _images__WEBPACK_IMPORTED_MODULE_1__/* ["default"].notification */ .Z.notification,
                                                width: 20,
                                                height: 20,
                                                className: "my-2 mx-1",
                                                alt: ""
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                                            src: _images__WEBPACK_IMPORTED_MODULE_1__/* ["default"].dropdown_icon */ .Z.dropdown_icon,
                                            width: 15,
                                            height: 30,
                                            className: "my-1 mx-1",
                                            alt: "",
                                            onClick: ()=>setDropdown_menu(!dropdown_menu) && setIsModalOpen_notification(false)
                                        })
                                    ]
                                }),
                                dropdown_menu && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "z-10 mt-10 top-2 py-3 absolute bg-white rounded-lg shadow dark:bg-gray-700 absolute divide-gray-100 shadow dark:bg-gray-700 border home_dropdown_menu rounded-md",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "w-full px-3 py-2",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "py-1 ps-3 items-center w-100 rounded-full flex flex-row justify-evenly",
                                                onClick: ()=>setIsModalOpen_invite_mem(true),
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                        src: _images__WEBPACK_IMPORTED_MODULE_1__/* ["default"].market_place_icon */ .Z.market_place_icon,
                                                        width: 25,
                                                        className: " ",
                                                        alt: ""
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                        className: " w-48 dropdown_text text-center capitalize",
                                                        children: "Invite Members"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                href: "/support",
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "py-1 my-2 ps-3 w-100 rounded-full flex flex-row justify-evenly",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                            src: _images__WEBPACK_IMPORTED_MODULE_1__/* ["default"].support_icon */ .Z.support_icon,
                                                            width: 25,
                                                            className: "",
                                                            alt: ""
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                            className: " w-48 dropdown_text text-center capitalize",
                                                            children: "Support"
                                                        })
                                                    ]
                                                })
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "py-1  ps-3 my-2 w-100 rounded-full flex flex-row justify-evenly",
                                                onClick: openModal,
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                        src: _images__WEBPACK_IMPORTED_MODULE_1__/* ["default"].terms_of_service */ .Z.terms_of_service,
                                                        width: 25,
                                                        className: "",
                                                        alt: ""
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                        className: "w-48 dropdown_text rounded-lg capitalize",
                                                        children: "Terms of services"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "py-1 my-2 ps-3 w-100 rounded-full flex flex-row justify-evenly",
                                                onClick: ()=>setIsModalOpen_change_password(true),
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                        src: _images__WEBPACK_IMPORTED_MODULE_1__/* ["default"].profile_user */ .Z.profile_user,
                                                        width: 25,
                                                        className: "",
                                                        alt: ""
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                        className: " w-48 dropdown_text text-center capitalize",
                                                        children: "Change Password"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "py-1 my-2  ps-3 w-100 rounded-full flex flex-row justify-evenly",
                                                onClick: ()=>setIsModalOpenlogout(true),
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                        src: _images__WEBPACK_IMPORTED_MODULE_1__/* ["default"].logout */ .Z.logout,
                                                        width: 25,
                                                        height: 18,
                                                        className: "",
                                                        alt: ""
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                        className: "w-48 dropdown_text rounded-lg capitalize",
                                                        children: "Sign Out"
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: " text-center my-10",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                    className: "font-bold my-5 capitalize",
                                    children: "Brand One"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "w-100 rounded-full bg-slate-800 text-white py-1 cursor-pointer",
                                    onClick: ()=>setIsModalOpen_edit_prof(true),
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                        children: "Edit"
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "mt-10",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: `my-5 w-100 rounded-full py-1 flex flex-row justify-evenly ${activePage === "home" ? "py-2 bg-black text-white" : "bg-white text-black"}`,
                                    onClick: handleHome,
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                            className: activePage === "home" ? "active-svg" : "",
                                            xmlns: "http://www.w3.org/2000/svg",
                                            version: "1.0",
                                            width: "20.000000pt",
                                            height: "20.000000pt",
                                            viewBox: "0 0 512.000000 512.000000",
                                            preserveAspectRatio: "xMidYMid meet",
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("g", {
                                                transform: "translate(0.000000,512.000000) scale(0.100000,-0.100000)",
                                                // fill='#000000'
                                                stroke: "none",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                        d: "M2487 4590 c-27 -5 -72 -20 -100 -34 -31 -16 -520 -416 -1212 -994 -1222 -1019 -1188 -988 -1172 -1054 4 -13 58 -85 122 -160 96 -114 121 -138 149 -144 19 -3 44 -3 55 1 11 3 517 420 1123 925 607 506 1105 920 1108 920 3 0 501 -414 1108 -920 606 -505 1112 -922 1123 -925 11 -4 36 -4 55 -1 28 6 53 30 149 144 64 75 118 147 122 160 15 62 3 74 -367 382 l-355 296 -5 672 -5 672 -28 27 -27 28 -323 3 c-210 2 -335 0 -358 -7 -68 -20 -68 -22 -71 -386 l-3 -327 -408 340 c-437 365 -450 374 -572 385 -33 3 -82 2 -108 -3z"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                        d: "M1642 3018 l-912 -752 0 -780 c0 -537 4 -794 11 -821 15 -55 83 -119 142 -133 32 -9 228 -12 656 -12 l611 0 0 610 0 610 410 0 410 0 0 -610 0 -610 611 0 c407 0 625 4 653 11 56 14 114 62 137 113 18 39 19 84 19 832 l0 790 -909 749 c-499 412 -912 750 -917 752 -5 2 -420 -335 -922 -749z"
                                                    })
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                            className: "w-32 text-start",
                                            children: "Home"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    // className=' my-5 w-100 rounded-full py-1 flex flex-row justify-evenly'
                                    className: `my-5 w-100 rounded-full py-1 flex flex-row justify-evenly ${activePage === "live_campaign" ? "py-2 bg-black text-white" : ""}`,
                                    onClick: handleLiveCampaign,
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                            className: activePage === "live_campaign" ? "active-svg" : "",
                                            xmlns: "http://www.w3.org/2000/svg",
                                            version: "1.0",
                                            width: "20.000000pt",
                                            height: "20.000000pt",
                                            viewBox: "0 0 512.000000 512.000000",
                                            preserveAspectRatio: "xMidYMid meet",
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("g", {
                                                transform: "translate(0.000000,512.000000) scale(0.100000,-0.100000)",
                                                // fill="#000000"
                                                stroke: "none",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                        d: "M3816 4788 c-30 -31 -35 -47 -85 -286 -58 -279 -58 -301 -1 -342 34 -24 106 -27 138 -4 37 26 48 59 101 312 47 223 50 245 37 275 -20 50 -60 77 -113 77 -37 0 -50 -5 -77 -32z"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                        d: "M2565 4609 c-45 -12 -110 -72 -134 -122 -15 -30 -21 -63 -21 -108 0 -79 -67 44 732 -1339 551 -953 638 -1098 675 -1126 197 -150 465 68 359 291 -13 28 -120 217 -238 422 l-215 372 57 35 c76 47 135 113 173 194 30 63 32 74 32 177 0 103 -2 114 -31 176 -111 233 -383 317 -609 189 l-51 -29 -226 392 c-125 216 -242 406 -260 424 -18 18 -50 39 -70 47 -40 17 -124 20 -173 5z"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                        d: "M4516 4042 c-179 -105 -223 -134 -238 -163 -30 -55 -12 -121 43 -153 59 -35 89 -24 324 112 196 113 222 131 239 165 16 33 17 45 7 77 -16 54 -62 90 -114 90 -35 -1 -78 -22 -261 -128z"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                        d: "M2189 3998 c-259 -330 -619 -675 -967 -928 -72 -52 -131 -98 -132 -102 0 -8 847 -1479 858 -1489 4 -4 59 17 122 46 405 184 831 312 1267 380 86 14 158 27 160 29 6 5 -1229 2146 -1237 2146 -4 0 -35 -37 -71 -82z"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                        d: "M4415 3216 c-77 -34 -93 -141 -29 -198 25 -22 471 -168 513 -168 98 0 152 100 99 181 -22 32 -38 39 -268 116 -135 45 -254 82 -265 82 -11 0 -34 -6 -50 -13z"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                        d: "M625 2697 c-222 -128 -259 -152 -331 -223 -66 -65 -90 -97 -122 -165 -78 -161 -91 -334 -38 -491 26 -79 233 -449 310 -555 54 -75 137 -142 233 -189 101 -49 195 -67 318 -61 157 8 179 18 659 296 44 25 80 48 80 51 1 8 -848 1480 -854 1480 -3 0 -118 -64 -255 -143z"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                        d: "M1760 1093 c-140 -80 -257 -148 -260 -150 -7 -6 603 -613 632 -629 35 -18 101 -18 136 0 40 22 259 247 271 279 15 40 13 83 -5 120 -14 29 -500 527 -514 527 -3 0 -120 -66 -260 -147z"
                                                    })
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                            className: "w-32 text-start",
                                            children: "Campaigns"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: `my-5 w-100 rounded-full py-1 flex flex-row justify-evenly ${activePage === "marketplace" ? "py-2 bg-black text-white" : ""}`,
                                    onClick: handleMarketplace,
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                            className: activePage === "marketplace" ? "active-svg" : "",
                                            xmlns: "http://www.w3.org/2000/svg",
                                            version: "1.0",
                                            width: "20.000000pt",
                                            height: "20.000000pt",
                                            viewBox: "0 0 512.000000 512.000000",
                                            preserveAspectRatio: "xMidYMid meet",
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("g", {
                                                transform: "translate(0.000000,512.000000) scale(0.100000,-0.100000)",
                                                // fill="#000000" 
                                                stroke: "none",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                        d: "M1110 4694 c-84 -17 -229 -90 -305 -151 -162 -131 -260 -325 -272 -538 -8 -139 13 -239 79 -375 44 -91 62 -115 142 -195 76 -76 106 -99 186 -138 121 -59 207 -80 335 -80 136 0 262 31 361 88 39 23 42 28 64 112 44 170 156 357 277 460 l56 48 -6 90 c-14 205 -113 399 -272 528 -77 63 -220 133 -310 152 -87 18 -249 18 -335 -1z"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                        d: "M3670 4695 c-85 -19 -229 -91 -305 -152 -150 -122 -251 -310 -271 -508 l-6 -61 43 -29 c191 -125 352 -384 384 -612 6 -48 9 -52 48 -67 93 -35 173 -49 277 -49 133 0 217 20 340 80 80 39 110 62 186 138 80 80 98 104 142 195 66 136 87 236 79 375 -18 318 -228 583 -538 680 -75 24 -292 30 -379 10z"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                        d: "M2473 3930 c-184 -33 -357 -138 -468 -285 -63 -84 -95 -145 -127 -245 -19 -64 -23 -96 -23 -215 0 -154 14 -213 77 -338 214 -424 782 -541 1144 -235 277 234 350 610 181 933 -31 60 -65 103 -132 170 -101 101 -196 158 -325 195 -86 24 -247 34 -327 20z"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                        d: "M769 3140 c-379 -80 -671 -375 -749 -757 -19 -95 -20 -131 -18 -539 l3 -437 150 -43 c168 -49 419 -105 570 -129 100 -16 351 -45 391 -45 21 0 22 4 27 208 4 181 8 220 31 307 50 191 172 400 313 537 110 107 298 222 421 259 23 7 42 15 42 19 0 3 -14 19 -31 36 -119 113 -225 346 -245 540 l-7 64 -406 -1 c-352 0 -417 -3 -492 -19z"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                        d: "M3526 3138 c-3 -13 -8 -48 -11 -78 -17 -151 -95 -330 -201 -461 -36 -45 -64 -82 -62 -84 2 -1 29 -12 60 -23 268 -99 492 -301 623 -562 87 -174 113 -293 122 -557 6 -189 6 -193 27 -188 12 2 66 7 121 10 294 19 631 96 838 192 l77 36 0 430 c0 393 -2 437 -21 530 -77 385 -370 679 -753 758 -79 16 -138 19 -453 19 l-363 0 -4 -22z"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                        d: "M2177 2379 c-242 -25 -480 -153 -636 -341 -73 -87 -163 -261 -193 -373 -21 -76 -22 -103 -26 -556 l-3 -476 123 -36 c262 -77 483 -124 728 -157 199 -27 637 -38 814 -21 331 33 616 100 814 192 l84 39 -5 452 c-5 504 -8 529 -74 688 -140 333 -440 553 -802 590 -119 12 -709 11 -824 -1z"
                                                    })
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                            className: "w-32 text-start",
                                            children: "Marketplace"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: `my-5 w-100 rounded-full py-1 flex flex-row justify-evenly ${activePage === "communication" ? "py-2 bg-black text-white" : ""}`,
                                    onClick: handleChats,
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                            className: activePage === "communication" ? "active-svg" : "",
                                            xmlns: "http://www.w3.org/2000/svg",
                                            version: "1.0",
                                            width: "20.000000pt",
                                            height: "20.000000pt",
                                            viewBox: "0 0 512.000000 512.000000",
                                            preserveAspectRatio: "xMidYMid meet",
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("g", {
                                                transform: "translate(0.000000,512.000000) scale(0.100000,-0.100000)",
                                                // fill="#000000" 
                                                stroke: "none",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                        d: "M461 4559 c-185 -50 -349 -177 -424 -329 l-32 -65 0 -1040 0 -1040 30 -53 c61 -111 199 -206 365 -251 41 -12 87 -21 102 -21 17 0 28 -5 28 -14 0 -7 -36 -150 -80 -317 -44 -167 -79 -307 -77 -311 1 -3 246 137 544 313 l543 319 1195 0 c1339 0 1280 -3 1432 72 93 45 181 129 217 208 21 45 21 54 24 1070 3 1147 6 1094 -68 1208 -73 112 -180 197 -308 245 l-57 22 -1680 2 c-1647 2 -1681 2 -1754 -18z m719 -1051 c76 -23 150 -94 181 -173 20 -53 15 -154 -11 -213 -43 -99 -154 -172 -260 -172 -176 0 -316 171 -280 343 35 171 199 266 370 215z m1112 -13 c95 -48 158 -153 158 -264 0 -72 -44 -166 -98 -211 -47 -39 -130 -70 -187 -70 -57 0 -140 31 -187 70 -54 45 -98 139 -98 211 0 145 102 268 239 288 56 8 128 -2 173 -24z m1039 14 c87 -22 168 -115 190 -217 38 -184 -121 -358 -308 -339 -237 25 -343 317 -176 484 80 80 171 102 294 72z"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                        d: "M4620 2713 c0 -864 -1 -877 -55 -983 -54 -106 -156 -184 -273 -209 -37 -8 -464 -11 -1444 -11 l-1390 0 3 -77 c3 -60 10 -91 32 -135 54 -111 163 -206 293 -256 l69 -27 1100 -5 1100 -5 388 -228 c214 -126 391 -226 394 -223 4 4 -78 356 -103 437 -4 13 7 17 55 22 164 17 281 133 320 315 17 83 15 1861 -3 1927 -48 179 -165 255 -396 255 l-90 0 0 -797z"
                                                    })
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                            className: "w-32 text-start",
                                            children: "Chats"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: `my-5 w-100 rounded-full py-1 flex flex-row justify-evenly ${activePage === "invoice" ? "py-2 bg-black text-white" : ""}`,
                                    onClick: handleInvoice,
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                            className: activePage === "invoice" ? "active-svg" : "",
                                            xmlns: "http://www.w3.org/2000/svg",
                                            version: "1.0",
                                            width: "20.000000pt",
                                            height: "20.000000pt",
                                            viewBox: "0 0 512.000000 512.000000",
                                            preserveAspectRatio: "xMidYMid meet",
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("g", {
                                                transform: "translate(0.000000,512.000000) scale(0.100000,-0.100000)",
                                                // fill="#000000" 
                                                stroke: "none",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                        d: "M2577 4556 c-477 -151 -770 -239 -772 -232 -2 6 -8 34 -15 61 -33 144 -141 285 -266 346 -64 32 -75 34 -169 34 -89 0 -106 -3 -150 -26 -78 -42 -151 -121 -195 -214 -51 -107 -58 -143 -66 -328 l-7 -157 -145 -47 c-82 -26 -156 -56 -172 -70 -43 -36 -65 -102 -52 -155 6 -24 241 -771 521 -1661 382 -1213 515 -1625 533 -1644 28 -31 77 -53 117 -53 31 0 327 91 1176 360 275 87 644 204 820 259 783 245 754 234 799 294 13 17 20 43 20 74 0 63 -1015 3292 -1050 3339 -28 38 -80 64 -126 63 -18 0 -379 -110 -801 -243z m-1189 -28 c57 -14 126 -79 141 -134 12 -44 14 -532 2 -819 -6 -169 -8 -184 -34 -237 -93 -189 -311 -235 -452 -94 -35 34 -60 72 -76 111 -22 58 -23 72 -27 371 l-3 312 32 11 c49 17 78 13 104 -14 l25 -24 0 -278 c0 -269 1 -280 23 -323 25 -50 77 -90 116 -90 41 0 86 34 110 84 22 44 23 58 28 493 6 416 5 450 -11 466 -13 13 -22 15 -37 7 -18 -10 -19 -26 -19 -445 l0 -434 -22 -25 c-34 -37 -85 -39 -118 -4 -20 21 -20 33 -20 473 0 452 0 452 23 495 26 50 56 75 113 95 49 18 46 17 102 3z m806 -602 c26 -11 38 -25 55 -68 21 -53 24 -55 74 -67 29 -6 69 -24 90 -38 46 -32 87 -98 87 -140 0 -40 -39 -76 -82 -75 -32 1 -45 12 -89 73 -23 33 -84 32 -111 -1 -27 -34 -21 -87 14 -113 25 -19 31 -19 82 -7 154 37 293 -59 304 -210 5 -70 -10 -120 -50 -166 l-31 -35 17 -42 c22 -58 20 -96 -6 -124 -23 -24 -66 -30 -98 -13 -10 5 -26 31 -36 57 -20 55 -38 73 -71 73 -32 0 -81 26 -121 64 -79 73 -84 159 -12 185 42 14 76 0 101 -43 28 -47 67 -63 108 -42 51 27 56 94 9 129 -26 19 -32 20 -93 8 -89 -18 -148 -3 -211 52 -57 50 -83 105 -84 175 0 58 18 109 55 158 24 31 24 33 9 70 -33 80 -13 138 54 153 1 1 18 -5 36 -13z m1375 -1082 c27 -34 27 -67 -1 -98 -20 -22 -159 -67 -953 -307 -511 -154 -945 -281 -964 -282 -25 -1 -39 6 -57 27 -52 60 -24 105 89 141 353 113 1800 543 1829 544 28 1 41 -5 57 -25z m166 -519 c17 -16 25 -35 25 -58 0 -37 -19 -59 -64 -77 -77 -29 -1858 -560 -1878 -560 -67 1 -97 95 -45 138 9 7 330 108 714 224 384 115 806 243 938 283 132 40 250 74 263 74 13 1 34 -10 47 -24z m175 -525 c29 -29 30 -83 2 -112 -10 -10 -399 -132 -967 -303 -850 -255 -953 -284 -978 -274 -51 21 -65 89 -24 126 15 14 288 101 862 273 462 139 881 265 930 281 109 34 148 36 175 9z"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                        d: "M591 1795 l-1 -1341 23 -44 c14 -30 36 -53 62 -67 40 -22 44 -23 448 -23 l409 0 -36 42 c-20 22 -42 59 -51 82 -8 23 -199 628 -425 1346 -225 718 -414 1314 -419 1325 -6 13 -10 -472 -10 -1320z"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                        d: "M3320 731 c-201 -64 -573 -182 -827 -261 l-461 -145 769 -3 c853 -2 813 -5 865 64 l29 37 3 214 c2 117 -1 213 -5 212 -4 -1 -172 -54 -373 -118z"
                                                    })
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                            className: "w-32 text-start",
                                            children: "Invoices"
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Left_Dashboard);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;