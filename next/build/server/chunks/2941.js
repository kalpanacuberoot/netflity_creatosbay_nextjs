"use strict";
exports.id = 2941;
exports.ids = [2941];
exports.modules = {

/***/ 4678:
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
/* harmony import */ var _CollapseLeftDashboard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9744);
/* harmony import */ var _styles_Colors__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6029);
/* harmony import */ var _Homepage_Card_Card1__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1534);
/* harmony import */ var _Homepage_Card_Card2__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2856);
/* harmony import */ var _Homepage_Card_Card3__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(9466);
/* harmony import */ var _Homepage_Card_Card4__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(9229);
/* harmony import */ var _generalfunctions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(9262);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(9915);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_13__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Homepage_Card_Card1__WEBPACK_IMPORTED_MODULE_7__, js_cookie__WEBPACK_IMPORTED_MODULE_12__]);
([_Homepage_Card_Card1__WEBPACK_IMPORTED_MODULE_7__, js_cookie__WEBPACK_IMPORTED_MODULE_12__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);














const Live_Campaignpage = ()=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_13__.useRouter)();
    const [dropdown_menu, setDropdown_menu] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);
    const [campaign_data, setCampaign_data] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)([]);
    const allCampaignData = async ()=>{
        const cookieValue = JSON.parse(js_cookie__WEBPACK_IMPORTED_MODULE_12__["default"].get("user_data"));
        console.log("categories cookieValue------------1", cookieValue?.token);
        const brand_detail = js_cookie__WEBPACK_IMPORTED_MODULE_12__["default"].get("brand_detail");
        const brandIds = js_cookie__WEBPACK_IMPORTED_MODULE_12__["default"].get("brand_id");
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
        try {
            const headers = {
                "Authorization": `Bearer ${cookieValue?.token}`
            };
            // const getResponse = await getApiCall(`${url}/campaigns?brand=${brandId}`, 'get', headers);
            const response = await fetch(`${_generalfunctions__WEBPACK_IMPORTED_MODULE_11__/* .url */ .HQ}/campaigns?brand=${brandId}`, {
                method: "Get",
                headers: headers
            });
            console.log("GET campaigns?brand=1 response:", response);
            if (response?.ok) {
                const responseData = await response.json();
                console.log("campaigns response:", responseData?.data?.data);
                if (responseData.status) {
                    // toast.success('All campaigns', {
                    //   position: 'top-center',
                    //   autoClose: 5000,
                    // });
                    setCampaign_data(responseData?.data?.data);
                // setBrand_user(responseData?.data?.data)
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
    // useEffect(() => {
    //     allCampaignData();
    // }, [])
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "flex container_invoice container w-full",
            style: {
                background: _styles_Colors__WEBPACK_IMPORTED_MODULE_6__/* ["default"].logo_background_clr */ .Z.logo_background_clr
            },
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "m-2 w-full auto-cols-max text-start p-2",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        style: {
                            background: _styles_Colors__WEBPACK_IMPORTED_MODULE_6__/* ["default"].invoice_gradient_clr */ .Z.invoice_gradient_clr
                        },
                        // style={style}
                        className: "auto-cols-max p-3 rounded-md flex flex-row",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "flex flex-row justify-between items-center  w-full",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "font_size_40",
                                    style: {
                                        color: _styles_Colors__WEBPACK_IMPORTED_MODULE_6__/* ["default"].white_clr */ .Z.white_clr
                                    },
                                    children: "Live Campaign"
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    style: {
                                        background: _styles_Colors__WEBPACK_IMPORTED_MODULE_6__/* ["default"].white_clr */ .Z.white_clr
                                    },
                                    className: "rounded-md flex flex-row justify-between items-center px-3 py-2",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                            className: "font_size_21 mx-4",
                                            onClick: ()=>router.push("/campaign_info"),
                                            children: "Add Campaign"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                                            src: _images__WEBPACK_IMPORTED_MODULE_1__/* ["default"].pink_plus_icon */ .Z.pink_plus_icon,
                                            width: 24,
                                            height: 24,
                                            alt: ""
                                        })
                                    ]
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex flex-row flex-wrap items-start mt-5 justify-evenly",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Homepage_Card_Card3__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {}),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Homepage_Card_Card3__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {}),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Homepage_Card_Card3__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {}),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Homepage_Card_Card3__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {})
                        ]
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Live_Campaignpage);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2941:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _components_Live_Campaignpage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4678);
/* harmony import */ var _all_routing__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4553);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9915);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_Live_Campaignpage__WEBPACK_IMPORTED_MODULE_1__, _all_routing__WEBPACK_IMPORTED_MODULE_2__, js_cookie__WEBPACK_IMPORTED_MODULE_4__]);
([_components_Live_Campaignpage__WEBPACK_IMPORTED_MODULE_1__, _all_routing__WEBPACK_IMPORTED_MODULE_2__, js_cookie__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





const Live_Campaign = ()=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    if (false) {}
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_all_routing__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Live_Campaignpage__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {})
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Live_Campaign);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;