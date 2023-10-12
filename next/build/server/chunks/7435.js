exports.id = 7435;
exports.ids = [7435];
exports.modules = {

/***/ 9761:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _images__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8417);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_datepicker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(983);
/* harmony import */ var react_datepicker__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_datepicker__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_datepicker_dist_react_datepicker_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5994);
/* harmony import */ var react_datepicker_dist_react_datepicker_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_datepicker_dist_react_datepicker_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var tailwindcss_tailwind_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(600);
/* harmony import */ var tailwindcss_tailwind_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(tailwindcss_tailwind_css__WEBPACK_IMPORTED_MODULE_6__);







const Date_range_picker = ()=>{
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    return /*#__PURE__*/ _jsx(_Fragment, {
        children: /*#__PURE__*/ _jsx("div", {
            className: "flex flex-row space-y-4 border rounded-md",
            children: /*#__PURE__*/ _jsxs("div", {
                className: "relative",
                children: [
                    /*#__PURE__*/ _jsx(DatePicker, {
                        selected: startDate,
                        onChange: (date)=>setStartDate(date),
                        selectsStart: true,
                        startDate: startDate,
                        endDate: endDate,
                        placeholderText: "Start Date",
                        className: "w-full p-2 rounded ps-9"
                    }),
                    /*#__PURE__*/ _jsx("div", {
                        className: "absolute top-2.5 left-0 text-gray-400 ps-2",
                        children: /*#__PURE__*/ _jsx(Image, {
                            src: Images.calendar_icon,
                            alt: "",
                            width: 20
                        })
                    }),
                    /*#__PURE__*/ _jsx("span", {
                        className: "mx-4 text-gray-500",
                        children: "-"
                    }),
                    /*#__PURE__*/ _jsx(DatePicker, {
                        selected: endDate,
                        onChange: (date)=>setEndDate(date),
                        selectsEnd: true,
                        startDate: startDate,
                        endDate: endDate,
                        minDate: startDate,
                        placeholderText: "End Date",
                        className: "w-full p-2 rounded ps-9"
                    })
                ]
            })
        })
    });
};
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (Date_range_picker)));


/***/ }),

/***/ 4553:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Homepage_leftDashboard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6255);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_Homepage_leftDashboard__WEBPACK_IMPORTED_MODULE_2__]);
_components_Homepage_leftDashboard__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
// components/Layout.js



const All_routing = ({ children  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "w-full flex flex-col md:flex-row justify-between",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Homepage_leftDashboard__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {}),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "content w-full",
                    children: children
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (All_routing);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5994:
/***/ (() => {



/***/ }),

/***/ 600:
/***/ (() => {



/***/ })

};
;