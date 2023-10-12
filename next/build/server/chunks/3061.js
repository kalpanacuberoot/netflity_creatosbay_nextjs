"use strict";
exports.id = 3061;
exports.ids = [3061];
exports.modules = {

/***/ 3143:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _components_Homepage_Modal_Invite_members__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4236);
/* harmony import */ var _components_Homepage_Modal_Invite_members_Invite_members_content__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4772);
/* harmony import */ var _components_Homepage_Termsofservice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2978);
/* harmony import */ var _components_Homepage_Termsofservice_Terms_of_service_content__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8910);
/* harmony import */ var _generalfunctions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9262);
/* harmony import */ var _images__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8417);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9915);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _ModalBox_Creator_Invite_Members_Creator_InviteMem_Content__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(4948);
/* harmony import */ var _ModalBox_Creator_Invite_Members__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(4313);
/* harmony import */ var _ModalBox_Creator_Terms_of_Service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(7398);
/* harmony import */ var _ModalBox_Creator_Terms_of_Service_Creator_TermsService_Content__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(5793);
/* harmony import */ var _ModalBox_Creator_logout__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(7003);
/* harmony import */ var _ModalBox_Creator_logout_Creator_logout_content__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(752);
/* harmony import */ var _ModalBox_Creator_change_password__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(9069);
/* harmony import */ var _ModalBox_Creator_change_password_Creator_changepass_content__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(9322);
/* harmony import */ var _ModalBox_Creator_notification__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(9045);
/* harmony import */ var _ModalBox_Creator_notification_Creator_notification_content__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(1701);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([js_cookie__WEBPACK_IMPORTED_MODULE_7__, _ModalBox_Creator_logout_Creator_logout_content__WEBPACK_IMPORTED_MODULE_16__, _ModalBox_Creator_change_password_Creator_changepass_content__WEBPACK_IMPORTED_MODULE_18__]);
([js_cookie__WEBPACK_IMPORTED_MODULE_7__, _ModalBox_Creator_logout_Creator_logout_content__WEBPACK_IMPORTED_MODULE_16__, _ModalBox_Creator_change_password_Creator_changepass_content__WEBPACK_IMPORTED_MODULE_18__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





















const Creator_leftsidebar = ({ toggleDropdown , dropdown_menu  })=>{
    const [creator_img, setCreator_img] = (0,react__WEBPACK_IMPORTED_MODULE_10__.useState)(null);
    // const [dropdown_menu, setDropdown_menu] = useState(false);
    const [isModalOpen_terms_service, setIsModalOpen_terms_service] = (0,react__WEBPACK_IMPORTED_MODULE_10__.useState)(false);
    const [isModalOpen_invite_mem, setIsModalOpen_invite_mem] = (0,react__WEBPACK_IMPORTED_MODULE_10__.useState)(false);
    const [isModalOpenlogout, setIsModalOpenlogout] = (0,react__WEBPACK_IMPORTED_MODULE_10__.useState)(false);
    const [isModalOpen_change_password, setIsModalOpen_change_password] = (0,react__WEBPACK_IMPORTED_MODULE_10__.useState)(false);
    const [isModalOpen_notification, setIsModalOpen_notification] = (0,react__WEBPACK_IMPORTED_MODULE_10__.useState)(false);
    const settingdropdownRef = (0,react__WEBPACK_IMPORTED_MODULE_10__.useRef)(null);
    const creatorImage = async ()=>{
        const cookieValue = JSON.parse(js_cookie__WEBPACK_IMPORTED_MODULE_7__["default"].get("creator_user_data"));
        const userId = JSON?.parse(js_cookie__WEBPACK_IMPORTED_MODULE_7__["default"]?.get("creator_user_data"));
        console.log("cookieValue creator", cookieValue?.token, userId?.user?.id);
        try {
            const headers = {
                "Authorization": `Bearer ${cookieValue?.token}`,
                "Content-Type": "application/json"
            };
            const response = await fetch(`${_generalfunctions__WEBPACK_IMPORTED_MODULE_5__/* .url */ .HQ}/creators/?user=${userId?.user?.id}`, {
                method: "Get",
                headers: headers
            });
            console.log("response get creators", response);
            if (response?.ok) {
                const responseData = await response.json();
                console.log("creators response:", responseData?.data?.data);
                if (responseData?.status === "success") {
                    js_cookie__WEBPACK_IMPORTED_MODULE_7__["default"].set("creator_profile_id", JSON.stringify(responseData?.data?.data));
                    setCreator_img(responseData?.data?.data);
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
    (0,react__WEBPACK_IMPORTED_MODULE_10__.useEffect)(()=>{
        creatorImage();
    }, []);
    console.log("creator_img", creator_img);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ModalBox_Creator_notification__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .Z, {
                isOpen: isModalOpen_notification,
                onClose: ()=>setIsModalOpen_notification(false),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "relative w-full max-w-4xl max-h-full min-w-3xl ",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ModalBox_Creator_notification_Creator_notification_content__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .Z, {})
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ModalBox_Creator_Invite_Members__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                isOpen: isModalOpen_invite_mem,
                onClose: ()=>setIsModalOpen_invite_mem(false),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "relative w-full max-w-2xl max-h-full",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ModalBox_Creator_Invite_Members_Creator_InviteMem_Content__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {})
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ModalBox_Creator_Terms_of_Service__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                isOpen: isModalOpen_terms_service,
                onClose: ()=>setIsModalOpen_terms_service(false),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "relative w-full max-w-4xl max-h-full min-w-3xl",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ModalBox_Creator_Terms_of_Service_Creator_TermsService_Content__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {})
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ModalBox_Creator_change_password__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {
                isOpen: isModalOpen_change_password,
                onClose: ()=>setIsModalOpen_change_password(false),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "relative w-full max-w-4xl max-h-full min-w-3xl",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ModalBox_Creator_change_password_Creator_changepass_content__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z, {})
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ModalBox_Creator_logout__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
                isOpen: isModalOpenlogout,
                onClose: ()=>setIsModalOpenlogout(false),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "relative w-full max-w-2xl max-h-full",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ModalBox_Creator_logout_Creator_logout_content__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {})
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "h-screen  w-1/5  px-10",
                ref: settingdropdownRef,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "my-10  cursor-pointer",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_8___default()), {
                            src: _images__WEBPACK_IMPORTED_MODULE_6__/* ["default"].company_logo */ .Z.company_logo,
                            width: 100,
                            height: 100,
                            alt: "",
                            className: " mx-auto"
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "border relative flex flex-row my-5 justify-between rounded-full",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_9___default()), {
                                href: "/creator_single_profile_id",
                                children: creator_img?.length > 0 && creator_img.slice(0, 1).map((item, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: " my-2 ms-3 w-100 rounded-full flex flex-row justify-evenly cursor-pointer",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_8___default()), {
                                            src: item ? item?.profile_pic : _images__WEBPACK_IMPORTED_MODULE_6__/* ["default"].notification */ .Z.notification,
                                            width: 35,
                                            height: 30,
                                            alt: ""
                                        })
                                    }, index))
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "flex  flex-row items-center justify-end text-right block rounded-md w-full outline-none text-gray-700 leading-tight",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        onClick: ()=>setIsModalOpen_notification(true),
                                        className: " cursor-pointer",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_8___default()), {
                                            src: _images__WEBPACK_IMPORTED_MODULE_6__/* ["default"].notification */ .Z.notification,
                                            width: 20,
                                            height: 20,
                                            className: "my-2 mx-1",
                                            alt: ""
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_8___default()), {
                                        src: _images__WEBPACK_IMPORTED_MODULE_6__/* ["default"].dropdown_icon */ .Z.dropdown_icon,
                                        width: 15,
                                        height: 30,
                                        className: "my-1 mx-1 cursor-pointer",
                                        alt: "",
                                        // onClick={() => setDropdown_menu(!dropdown_menu)}
                                        onClick: toggleDropdown
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
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_8___default()), {
                                                    src: _images__WEBPACK_IMPORTED_MODULE_6__/* ["default"].market_place_icon */ .Z.market_place_icon,
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
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_9___default()), {
                                            href: "/support",
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "py-1 my-2 ps-3 w-100 rounded-full flex flex-row justify-evenly",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_8___default()), {
                                                        src: _images__WEBPACK_IMPORTED_MODULE_6__/* ["default"].support_icon */ .Z.support_icon,
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
                                            onClick: ()=>setIsModalOpen_terms_service(true),
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_8___default()), {
                                                    src: _images__WEBPACK_IMPORTED_MODULE_6__/* ["default"].terms_of_service */ .Z.terms_of_service,
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
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_8___default()), {
                                                    src: _images__WEBPACK_IMPORTED_MODULE_6__/* ["default"].profile_user */ .Z.profile_user,
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
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_8___default()), {
                                                    src: _images__WEBPACK_IMPORTED_MODULE_6__/* ["default"].logout */ .Z.logout,
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
                            creator_img?.length > 0 && creator_img.slice(0, 1).map((item, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: " my-2 ms-3 w-100 rounded-full flex flex-row justify-evenly cursor-pointer capitalize",
                                    children: item?.user?.name
                                }, index)),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_9___default()), {
                                href: "/creator_edit_form",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "w-100 rounded-full bg-slate-800 text-white py-1 cursor-pointer",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                        children: "Edit"
                                    })
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "mt-10",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_9___default()), {
                                href: "/creator_home",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "my-5 items-center w-100 rounded-full py-1 flex flex-row justify-evenly",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_8___default()), {
                                            src: _images__WEBPACK_IMPORTED_MODULE_6__/* ["default"].home_icon */ .Z.home_icon,
                                            width: 25,
                                            className: " ",
                                            alt: ""
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                            className: "w-32 text-start",
                                            children: "Home"
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_9___default()), {
                                href: "/creator_find_campaign",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: " my-5 w-100 rounded-full py-1 flex flex-row justify-evenly",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_8___default()), {
                                            src: _images__WEBPACK_IMPORTED_MODULE_6__/* ["default"].campaign_icon */ .Z.campaign_icon,
                                            width: 25,
                                            className: "",
                                            alt: ""
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                            className: "w-32 text-start",
                                            children: "Campaign"
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_9___default()), {
                                href: "/creator_chat",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: " my-5 w-100 rounded-full  py-1 flex flex-row justify-evenly",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_8___default()), {
                                            src: _images__WEBPACK_IMPORTED_MODULE_6__/* ["default"].chats_icon */ .Z.chats_icon,
                                            width: 25,
                                            className: "",
                                            alt: ""
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                            className: "w-32 text-start",
                                            children: "Chats"
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_9___default()), {
                                href: "/creator_invoices",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: " my-5 w-100 rounded-full  py-1 flex flex-row justify-evenly",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_8___default()), {
                                            src: _images__WEBPACK_IMPORTED_MODULE_6__/* ["default"].invoices_icon */ .Z.invoices_icon,
                                            width: 25,
                                            className: "",
                                            alt: ""
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                            className: "w-32 text-start",
                                            children: "Invoices"
                                        })
                                    ]
                                })
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Creator_leftsidebar);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4948:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
/* harmony import */ var _Creator_Modal_Header__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1468);







const Creator_InviteMem_Content = ()=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "relative bg-white rounded-lg shadow dark:bg-gray-700",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Creator_Modal_Header__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {}),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "space-y-6 container-fluid p-14",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "border rounded-lg p-10  text-center shadow-lg",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "font_size_40 line-height-[53.32px] capitalize",
                                style: {
                                    color: _styles_Colors__WEBPACK_IMPORTED_MODULE_4__/* ["default"].pink_clr */ .Z.pink_clr
                                },
                                children: "Invite a team member"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "font_size_21  line-height-[25.18px] my-3",
                                children: '"Suggest Creators" feature. Engage in active conversations with influencers to discuss campaign details and collaboration opportunities.'
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_four_social_media__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {}),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "font_size_21 line-height-[25.41px] border rounded-lg px-3 py-2 my-4 text-base sm:text-sm md:text-md lg:text-lg xl:text-xl",
                                style: {
                                    color: _styles_Colors__WEBPACK_IMPORTED_MODULE_4__/* ["default"].orange_clr */ .Z.orange_clr
                                },
                                children: "https : // www.LoremIpsum.com/LoremIpsum.php?gen+link"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Button__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                buttoncss: "font_size_24 leading-6 py-3 button_clr my-5 capitalize",
                                label: "Copy Link"
                            })
                        ]
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Creator_InviteMem_Content);


/***/ }),

/***/ 4313:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const Creator_Invite_Members = ({ isOpen , onClose , children  })=>{
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Creator_Invite_Members);


/***/ }),

/***/ 1468:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _images__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8417);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);



const Creator_Modal_Header = ()=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "flex items-start justify-between border-b rounded-t dark:border-gray-600",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "bg-image w-full relative p-10",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                    type: "button",
                    "data-modal-hide": "defaultModal",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        className: "w-30 absolute bottom-0 right-10 transform translate-y-1/4 popup_logo rounded-full",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                            src: _images__WEBPACK_IMPORTED_MODULE_1__/* ["default"].popup_logo */ .Z.popup_logo,
                            alt: "",
                            className: "",
                            width: 250,
                            height: 50
                        })
                    })
                })
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Creator_Modal_Header);


/***/ }),

/***/ 5793:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _images__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8417);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_Colors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6029);
/* harmony import */ var _Creator_Modal_Header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1468);





const Creator_TermsService_Content = ()=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "relative bg-white rounded-lg shadow dark:bg-gray-700",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Creator_Modal_Header__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {}),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "p-10 space-y-6",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                            className: "font-bold capitalize",
                            children: "Terms of services"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "popup_para_container",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "popup_para font_size_20 text-base leading-relaxed text-gray-500 dark:text-gray-400",
                                children: "\uD83D\uDC4B Hi I’m Ben Low, Lead Experience Designer based in Perth, Western Australia. Firstly, thanks for looking at this file! I’m stoked you’ve taken the time to explore it further. I hope you learn something new from it \uD83D\uDE4C. I’ve set myself a goal. To give back to the design community which I’ve learnt so much from over the past 10+ years. I am motivated to help you and others learn and upskill their UX/UI skills to take them to the next level \uD83D\uDE80. I put in a lot of time and effort making simple design files that are well structured, leverage Figma’s updates and are easy for you change to suit your needs. If you like this work, and want to see more, drop a ❤️ for this file in the Figma Community. If you’re feeling really generous, you can buy me a coffee @benlow244 For any new file suggestions, questions or feedback, follow me on twitter @benlow24. \uD83D\uDC4B Hi I’m Ben Low, Lead Experience Designer based in Perth, Western Australia. Firstly, thanks for looking at this file! I’m stoked you’ve taken the time to explore it further. I hope you learn something new from it \uD83D\uDE4C. I’ve set myself a goal. To give back to the design community which I’ve learnt so much from over the past 10+ years. I am motivated to help you and others learn and upskill their UX/UI skills to take them to the next level \uD83D\uDE80. I put in a lot of time and effort making simple design files that are well structured, leverage Figma’s updates and are easy for you change to suit your needs. If you like this work, and want to see more, drop a ❤️ for this file in the Figma Community. If you’re feeling really generous, you can buy me a coffee @benlow244 For any new file suggestions, questions or feedback, follow me on twitter @benlow24. \uD83D\uDC4B Hi I’m Ben Low, Lead Experience Designer based in Perth, Western Australia. Firstly, thanks for looking at this file! I’m stoked you’ve taken the time to explore it further. I hope you learn something new from it \uD83D\uDE4C. I’ve set myself a goal. To give back to the design community which I’ve learnt so much from over the past 10+ years. I am motivated to help you and others learn and upskill their UX/UI skills to take them to the next level \uD83D\uDE80. I put in a lot of time and effort making simple design files that are well structured, leverage Figma’s updates and are easy for you change to suit your needs. If you like this work, and want to see more, drop a ❤️ for this file in the Figma Community. If you’re feeling really generous, you can buy me a coffee @benlow244 For any new file suggestions, questions or feedback, follow me on twitter @benlow24."
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "flex flex-col p-10 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600",
                    style: {
                        background: _styles_Colors__WEBPACK_IMPORTED_MODULE_3__/* ["default"].light_bg_clr */ .Z.light_bg_clr
                    },
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                            className: "font-bold mb-3 capitalize",
                            children: "Ways to support"
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "flex",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "flex flex-col me-3",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                                            src: _images__WEBPACK_IMPORTED_MODULE_1__/* ["default"].share_like */ .Z.share_like,
                                            width: 64,
                                            height: 64,
                                            className: "mx-auto p-1",
                                            alt: ""
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "font_size_20 leading-6",
                                            children: "Share a Like"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "flex flex-col ms-3",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                                            src: _images__WEBPACK_IMPORTED_MODULE_1__/* ["default"].twitter */ .Z.twitter,
                                            width: 64,
                                            height: 64,
                                            className: "mx-auto  p-1",
                                            alt: ""
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "font_size_20  leading-6",
                                            children: "Follow me on Twitter"
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Creator_TermsService_Content);


/***/ }),

/***/ 7398:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const Creator_Terms_of_Service = ({ isOpen , onClose , children  })=>{
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Creator_Terms_of_Service);


/***/ }),

/***/ 9322:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9132);
/* harmony import */ var _generalfunctions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9262);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3590);
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8819);
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9915);
/* harmony import */ var _Creator_Modal_Header__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1468);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_toastify__WEBPACK_IMPORTED_MODULE_4__, js_cookie__WEBPACK_IMPORTED_MODULE_6__]);
([react_toastify__WEBPACK_IMPORTED_MODULE_4__, js_cookie__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);









const Creator_changepass_content = ()=>{
    const [currentpassword, setCurrentpassword] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [password, setPassword] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [confirmPassword, setConfirmPassword] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [passwordsMatch, setPasswordsMatch] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
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
        const cookieValue = JSON.parse(js_cookie__WEBPACK_IMPORTED_MODULE_6__["default"].get("creator_user_data"));
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
            const response = await fetch(`${_generalfunctions__WEBPACK_IMPORTED_MODULE_3__/* .url */ .HQ}/changepassword`, {
                method: "POST",
                headers: headers,
                body: JSON.stringify(postData)
            });
            console.log("changepassword response:", response);
            if (response?.ok) {
                const responseData = await response.json();
                console.log("changepassword response:2", responseData);
                if (responseData.status) {
                    react_toastify__WEBPACK_IMPORTED_MODULE_4__.toast.success("Password is Successfully Created", {
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
                    react_toastify__WEBPACK_IMPORTED_MODULE_4__.toast.error("Invalid old password", {
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
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Creator_Modal_Header__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {}),
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
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Button__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Creator_changepass_content);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9069:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const Creator_change_password = ({ isOpen , onClose , children  })=>{
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Creator_change_password);


/***/ }),

/***/ 752:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9132);
/* harmony import */ var _styles_Colors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6029);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9915);
/* harmony import */ var _generalfunctions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9262);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3590);
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8819);
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _Creator_Modal_Header__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1468);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([js_cookie__WEBPACK_IMPORTED_MODULE_3__, react_toastify__WEBPACK_IMPORTED_MODULE_5__]);
([js_cookie__WEBPACK_IMPORTED_MODULE_3__, react_toastify__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);











const Creator_logout_content = ()=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_8__.useRouter)();
    const [logout, setLogout] = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(null);
    const onLogout = async ()=>{
        const cookieValue = JSON.parse(js_cookie__WEBPACK_IMPORTED_MODULE_3__["default"].get("creator_user_data"));
        console.log("categories cookieValue------------1", cookieValue?.token);
        try {
            const response = await fetch(`${_generalfunctions__WEBPACK_IMPORTED_MODULE_4__/* .url */ .HQ}/logout`, {
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
                react_toastify__WEBPACK_IMPORTED_MODULE_5__.toast.success("onLogout Successfully", {
                    position: "top-center",
                    autoClose: 2000
                });
                router.push("/login");
                const cookies = Object.keys(js_cookie__WEBPACK_IMPORTED_MODULE_3__["default"].get());
                cookies.forEach((cookie)=>{
                    js_cookie__WEBPACK_IMPORTED_MODULE_3__["default"].remove(cookie);
                });
            // Cookies.remove('brand_id');
            // Cookies.remove('user_data');
            } else {
                react_toastify__WEBPACK_IMPORTED_MODULE_5__.toast.error("Logout cancelled", {
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
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Creator_Modal_Header__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {}),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "space-y-6 container-fluid p-14",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "border rounded-lg p-10  text-center shadow-lg",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "font_size_40 line-height-[53.32px]",
                                style: {
                                    color: _styles_Colors__WEBPACK_IMPORTED_MODULE_2__/* ["default"].blue_clr */ .Z.blue_clr
                                },
                                children: [
                                    "Oh no! You,re leaving...",
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                    "Are You Sure ?"
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "font_size_18  line-height-[27px] my-3",
                                children: "Sign up for our newletter to stay always up to date."
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "py-3",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Button__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                                        buttoncss: "font_size_24 leading-6 py-3 button_clr my-3",
                                        label: "No, Just Kidding "
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Button__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                                        buttoncss: "font_size_24 leading-6 py-3 button_clr my-3",
                                        label: "Yes, Log Me Out",
                                        onClick: onLogout
                                    })
                                ]
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_toastify__WEBPACK_IMPORTED_MODULE_5__.ToastContainer, {})
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Creator_logout_content);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7003:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const Creator_logout = ({ isOpen , onClose , children  })=>{
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Creator_logout);


/***/ }),

/***/ 1701:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _styles_Colors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6029);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);



const Creator_notification_content = ()=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "relative bg-white rounded-lg shadow dark:bg-gray-700 text-left h-4xl overflow-y-auto",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "overflow-y-auto origin-top-right  rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none",
                role: "menu",
                "aria-orientation": "vertical",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "overflow-y-auto py-1",
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
                            className: "p-5 overflow-y-auto",
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Creator_notification_content);


/***/ }),

/***/ 9045:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const Creator_notification = ({ isOpen , onClose , children  })=>{
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Creator_notification);


/***/ }),

/***/ 3061:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Creator_Homepage_Creator_leftsidebar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3143);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Creator_Homepage_Creator_leftsidebar__WEBPACK_IMPORTED_MODULE_2__]);
_Creator_Homepage_Creator_leftsidebar__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const Creator_layout = ({ children  })=>{
    const [dropdown_menu, setDropdown_menu] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const toggleDropdown = ()=>{
        setDropdown_menu(!dropdown_menu);
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Creator_Homepage_Creator_leftsidebar__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
            toggleDropdown: toggleDropdown,
            dropdown_menu: dropdown_menu,
            children: children
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Creator_layout);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;