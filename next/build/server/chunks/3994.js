"use strict";
exports.id = 3994;
exports.ids = [3994];
exports.modules = {

/***/ 3994:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _images__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8417);
/* harmony import */ var _styles_Colors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6029);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9915);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([js_cookie__WEBPACK_IMPORTED_MODULE_3__]);
js_cookie__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];








const Creator_Card = (item)=>{
    console.log("Creator_Card", item);
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter)();
    const [cardfirstshowmore, setCardfirstshowmore] = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(false);
    const [start_date, setStart_date] = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(null);
    const [end_date, setEnd_date] = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(null);
    console.log("Home_Card1", item);
    (0,react__WEBPACK_IMPORTED_MODULE_7__.useEffect)(()=>{
        const staring_dateparts = item?.item?.campaign?.starting_date.split("-");
        if (staring_dateparts?.length === 3) {
            const startreversedDate = `${staring_dateparts[2]}-${staring_dateparts[1]}-${staring_dateparts[0]}`;
            console.log(startreversedDate); // Output: "01-01-1970"
            setStart_date(startreversedDate);
        } else {
            console.log("Invalid date format");
        }
        const endparts = item?.item?.campaign?.ending_date.split("-");
        if (endparts?.length === 3) {
            const endreversedDate = `${endparts[2]}-${endparts[1]}-${endparts[0]}`;
            console.log(endreversedDate); // Output: "01-01-1970"
            setEnd_date(endreversedDate);
        } else {
            console.log("Invalid date format");
        }
    }, [
        item
    ]);
    const handleId = (item)=>{
        js_cookie__WEBPACK_IMPORTED_MODULE_3__["default"].set("creator_campaign_id", JSON.stringify(item?.item?.campaign?.id));
        js_cookie__WEBPACK_IMPORTED_MODULE_3__["default"].set("creator_brand_id", JSON.stringify(item?.item?.campaign?.brand?.id));
        router.push("/creator_single_chat");
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "my-5 mx-2",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: " flex flex-col w-full rounded-lg shadow-md",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "max-h-60 border rounded-t-lg max-w-96 h-60 w-80",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {
                            src: item?.item?.campaign?.brand?.logo ? item?.item?.campaign?.brand?.logo : _images__WEBPACK_IMPORTED_MODULE_1__/* ["default"].card_img */ .Z.card_img,
                            width: 200,
                            height: 50,
                            alt: "",
                            className: "w-full mx-auto border rounded-t-lg "
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "px-5 py-5 border rounded-b-lg",
                        style: {
                            background: _styles_Colors__WEBPACK_IMPORTED_MODULE_2__/* ["default"].white_clr */ .Z.white_clr
                        },
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "flex flex-row justify-between items-end mt-4  mx-0",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "font_size_17 flex items-center flex-column me-5"
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "flex flex-row px-3 py-1 items-center rounded-md mx-0",
                                        style: {
                                            backgroundColor: _styles_Colors__WEBPACK_IMPORTED_MODULE_2__/* ["default"].delay_clr */ .Z.delay_clr
                                        },
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {
                                                src: _images__WEBPACK_IMPORTED_MODULE_1__/* ["default"].clock */ .Z.clock,
                                                width: 12,
                                                height: 10,
                                                alt: "",
                                                className: "me-2"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                                                className: "capitalize",
                                                children: "Draft"
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                className: "font-bold text-center mt-3 capitalize",
                                children: item?.item?.campaign?.name
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "px-5  py-3 rounded-md text-center  mt-2",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h5", {
                                        className: "mb-2",
                                        children: [
                                            start_date,
                                            " ",
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: "font-bold mx-1",
                                                children: "-"
                                            }),
                                            " ",
                                            end_date
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "w-100 rounded-full border edit_button_clr py-1 cursor-pointer",
                                        onClick: ()=>handleId(item),
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("buttton", {
                                            children: " Check Details"
                                        })
                                    })
                                ]
                            })
                        ]
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Creator_Card);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;