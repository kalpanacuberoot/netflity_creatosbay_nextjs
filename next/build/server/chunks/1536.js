exports.id = 1536;
exports.ids = [1536];
exports.modules = {

/***/ 9132:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);

const Buttons = ({ label , buttoncss , onClick  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: `w-100 rounded-full border edit_button_clr py-1 text-center cursor-pointer ${buttoncss}`,
        onClick: onClick,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
            children: label
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Buttons);


/***/ }),

/***/ 4772:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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







const Invite_members_content = ()=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "relative bg-white rounded-lg shadow dark:bg-gray-700",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ModalHeader__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {}),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "space-y-6 container-fluid p-14",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "border rounded-lg p-10  text-center shadow-lg",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "font_size_40 line-height-[53.32px] capitalize",
                                style: {
                                    color: _styles_Colors__WEBPACK_IMPORTED_MODULE_5__/* ["default"].pink_clr */ .Z.pink_clr
                                },
                                children: "Invite a team member"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "font_size_21  line-height-[25.18px] my-3",
                                children: '"Suggest Creators" feature. Engage in active conversations with influencers to discuss campaign details and collaboration opportunities.'
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_four_social_media__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {}),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "font_size_21 line-height-[25.41px] border rounded-lg px-3 py-2 my-4 text-base sm:text-sm md:text-md lg:text-lg xl:text-xl",
                                style: {
                                    color: _styles_Colors__WEBPACK_IMPORTED_MODULE_5__/* ["default"].orange_clr */ .Z.orange_clr
                                },
                                children: "https : // www.LoremIpsum.com/LoremIpsum.php?gen+link"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Button__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                buttoncss: "font_size_24 leading-6 py-3 button_clr my-5",
                                label: "Copy Link"
                            })
                        ]
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Invite_members_content);


/***/ }),

/***/ 4236:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const Modal_Invite_members = ({ isOpen , onClose , children  })=>{
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Modal_Invite_members);


/***/ }),

/***/ 5334:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _images__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8417);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);



const Social_media_icons = ()=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "flex items-center justify-between",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "mx-2 border flex flex-col rounded-lg  w-screen ",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: " p-3 ",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                                src: _images__WEBPACK_IMPORTED_MODULE_1__/* ["default"].instagram_inv_mem */ .Z.instagram_inv_mem,
                                width: 50,
                                height: 50,
                                className: "mx-auto p-1",
                                alt: ""
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "font_size_21 line-height-[26.52px]",
                                children: "Instagram"
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "mx-2 border flex flex-col rounded-lg  w-screen ",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: " p-3 ",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                                src: _images__WEBPACK_IMPORTED_MODULE_1__/* ["default"].twitter_inv_mem */ .Z.twitter_inv_mem,
                                width: 50,
                                height: 50,
                                className: "mx-auto p-1",
                                alt: ""
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "font_size_21 line-height-[26.52px]",
                                children: "Twitter"
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "mx-2 border flex flex-col rounded-lg  w-screen ",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: " p-3 ",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                                src: _images__WEBPACK_IMPORTED_MODULE_1__/* ["default"].whatsapp_inv_mem */ .Z.whatsapp_inv_mem,
                                width: 50,
                                height: 50,
                                className: "mx-auto p-1",
                                alt: ""
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "font_size_21 line-height-[26.52px]",
                                children: "WhatsApp"
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "mx-2 border flex flex-col rounded-lg  w-screen ",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: " p-3 ",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                                src: _images__WEBPACK_IMPORTED_MODULE_1__/* ["default"].facebook_inv_mem */ .Z.facebook_inv_mem,
                                width: 50,
                                height: 50,
                                className: "mx-auto p-1",
                                alt: ""
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "font_size_21 line-height-[26.52px]",
                                children: "Facebook"
                            })
                        ]
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Social_media_icons);


/***/ }),

/***/ 8819:
/***/ (() => {



/***/ })

};
;