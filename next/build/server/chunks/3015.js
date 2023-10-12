"use strict";
exports.id = 3015;
exports.ids = [3015];
exports.modules = {

/***/ 5423:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _images__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8417);
/* harmony import */ var _styles_Colors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6029);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _PDFGenerator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(711);
/* harmony import */ var _Creator_invoice_pdf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9783);
/* harmony import */ var _User_Modal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6020);
/* harmony import */ var _User_Modal_User_Modal_form__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(3495);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_User_Modal_User_Modal_form__WEBPACK_IMPORTED_MODULE_8__]);
_User_Modal_User_Modal_form__WEBPACK_IMPORTED_MODULE_8__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];










const Invoice_Table = ()=>{
    const [isModalOpenlogout, setIsModalOpenlogout] = (0,react__WEBPACK_IMPORTED_MODULE_9__.useState)(false);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_User_Modal__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                isOpen: isModalOpenlogout,
                onClose: ()=>setIsModalOpenlogout(false),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "relative w-full max-w-2xl max-h-full",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_User_Modal_User_Modal_form__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {})
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "relative overflow-x-auto shadow-md sm:rounded-lg border",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("table", {
                    className: "text-center w-full text-sm text-left text-gray-500 dark:text-gray-400",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("thead", {
                            className: "border-b border-gray-300 text-xs text-gray-700 uppercase dark:bg-gray-700 dark:text-gray-400",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                className: "font_size_17",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                        scope: "col",
                                        className: "px-6 py-5",
                                        children: "Unique ID"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                        scope: "col",
                                        className: "px-6 py-5",
                                        children: "Campaign\xa0Name"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                        scope: "col",
                                        className: "px-6 py-5",
                                        children: "Amount"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                        scope: "col",
                                        className: "px-6 py-5",
                                        children: "Paid On"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
                                        href: "/creator_invoice_pdf",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                                scope: "col",
                                                className: "px-6 py-5 uppercase",
                                                children: "Download"
                                            })
                                        })
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tbody", {
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                    className: "bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                            className: "px-6 py-4",
                                            children: "#WE234345"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                            scope: "row",
                                            className: "px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                                children: " Jhon Smith"
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                            className: "px-6 py-4",
                                            children: "₹ 6000.00"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                            className: "px-8 py-4 text-red-600 ",
                                            style: {},
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                style: {
                                                    background: _styles_Colors__WEBPACK_IMPORTED_MODULE_2__/* ["default"].credited_date */ .Z.credited_date
                                                },
                                                className: "rounded-full p-2  text-sm flex flex-row items-center justify-center",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                        src: _images__WEBPACK_IMPORTED_MODULE_1__/* ["default"].circle_icon */ .Z.circle_icon,
                                                        alt: "",
                                                        width: 6,
                                                        height: 6,
                                                        className: "me-3"
                                                    }),
                                                    "12/06/23"
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
                                            href: "/creator_invoice_pdf",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                className: "px-6 py-4 ",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                    src: _images__WEBPACK_IMPORTED_MODULE_1__/* ["default"].download_icon */ .Z.download_icon,
                                                    width: 40,
                                                    height: 40,
                                                    alt: "",
                                                    className: "mx-auto"
                                                })
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                    className: "bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                            className: "px-6 py-4",
                                            children: "#WE234345"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                            scope: "row",
                                            className: "px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                                children: " Jhon Smith"
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                            className: "px-6 py-4",
                                            children: "₹ 6000.00"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                            className: "px-8 py-4 text-red-600 ",
                                            style: {},
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                style: {
                                                    background: _styles_Colors__WEBPACK_IMPORTED_MODULE_2__/* ["default"].credited_date */ .Z.credited_date
                                                },
                                                className: "rounded-full p-1   flex flex-row items-center justify-center",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                        src: _images__WEBPACK_IMPORTED_MODULE_1__/* ["default"].circle_icon */ .Z.circle_icon,
                                                        alt: "",
                                                        width: 6,
                                                        height: 6,
                                                        className: "me-3"
                                                    }),
                                                    "12/06/23"
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
                                            href: "/creator_invoice_pdf",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                className: "px-6 py-4",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                    src: _images__WEBPACK_IMPORTED_MODULE_1__/* ["default"].download_icon */ .Z.download_icon,
                                                    width: 40,
                                                    height: 40,
                                                    alt: "",
                                                    className: "mx-auto"
                                                })
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                    className: "bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                            className: "px-6 py-4",
                                            children: "#WE234345"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                            scope: "row",
                                            className: "px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                                children: " Jhon Smith"
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                            className: "px-6 py-4",
                                            children: "₹ 6000.00"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                            className: "px-8 py-4 text-red-600 ",
                                            style: {},
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                style: {
                                                    background: _styles_Colors__WEBPACK_IMPORTED_MODULE_2__/* ["default"].credited_date */ .Z.credited_date
                                                },
                                                className: "rounded-full p-1   flex flex-row items-center justify-center",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                        src: _images__WEBPACK_IMPORTED_MODULE_1__/* ["default"].circle_icon */ .Z.circle_icon,
                                                        alt: "",
                                                        width: 6,
                                                        height: 6,
                                                        className: "me-3"
                                                    }),
                                                    "12/06/23"
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
                                            href: "/creator_invoice_pdf",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                className: "px-6 py-4",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                    src: _images__WEBPACK_IMPORTED_MODULE_1__/* ["default"].download_icon */ .Z.download_icon,
                                                    width: 40,
                                                    height: 40,
                                                    alt: "",
                                                    className: "mx-auto"
                                                })
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                    className: "bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                            className: "px-6 py-4",
                                            children: "#WE234345"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                            scope: "row",
                                            className: "px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                                children: " Jhon Smith"
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                            className: "px-6 py-4",
                                            children: "₹ 6000.00"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                            className: "px-8 py-4 text-red-600 ",
                                            style: {},
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                style: {
                                                    background: _styles_Colors__WEBPACK_IMPORTED_MODULE_2__/* ["default"].credited_date */ .Z.credited_date
                                                },
                                                className: "rounded-full p-1   flex flex-row items-center justify-center",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                        src: _images__WEBPACK_IMPORTED_MODULE_1__/* ["default"].circle_icon */ .Z.circle_icon,
                                                        alt: "",
                                                        width: 6,
                                                        height: 6,
                                                        className: "me-3"
                                                    }),
                                                    "12/06/23"
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
                                            href: "/creator_invoice_pdf",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                className: "px-6 py-4",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                    src: _images__WEBPACK_IMPORTED_MODULE_1__/* ["default"].download_icon */ .Z.download_icon,
                                                    width: 40,
                                                    height: 40,
                                                    alt: "",
                                                    className: "mx-auto"
                                                })
                                            })
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Invoice_Table);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3495:
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
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9915);
/* harmony import */ var _generalfunctions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9262);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3590);
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(8819);
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _components_Homepage_ModalHeader__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(8070);
/* harmony import */ var crypto_js_md5__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(616);
/* harmony import */ var crypto_js_md5__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(crypto_js_md5__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var crypto_js_sha512__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(2407);
/* harmony import */ var crypto_js_sha512__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(crypto_js_sha512__WEBPACK_IMPORTED_MODULE_13__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([js_cookie__WEBPACK_IMPORTED_MODULE_5__, react_toastify__WEBPACK_IMPORTED_MODULE_7__]);
([js_cookie__WEBPACK_IMPORTED_MODULE_5__, react_toastify__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);















const User_Modal_form = ()=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_10__.useRouter)();
    const [formData, setFormData] = (0,react__WEBPACK_IMPORTED_MODULE_9__.useState)({
        // Initialize formData with default values
        firstname: "",
        lastname: "",
        email: "",
        phone: "",
        address_1: "",
        address_2: "",
        city: "",
        state: "",
        pincode: "",
        gstin: ""
    });
    const handlePayClick = ()=>{
        // Log the formData to the console
        console.log("formData", formData);
        // You can also submit the hidden form here if needed
        // document.getElementById('payment_form').submit();
        const paymentForm = document.getElementById("payment_form");
        // Serialize the form data into an object
        const formDataObject = {};
        const formDataArray = new FormData(paymentForm);
        for (const [key, value] of formDataArray.entries()){
            formDataObject[key] = value;
        }
        // Log the serialized form data to the console
        console.log("formDataObject", formDataObject);
    // You can also submit the hidden form here if needed
    // paymentForm.submit();
    };
    // Get below details from cookies
    const campaign_id = 5;
    const campaign_name = "Social Media 2023";
    // Get below details from calculation
    const amount = 1000;
    // Get below details from form
    const firstname = ""; // Initialize as empty string (we'll update this in useEffect)
    const lastname = ""; // Initialize as empty string (we'll update this in useEffect)
    const email = ""; // Initialize as empty string (we'll update this in useEffect)
    const phone = ""; // Initialize as empty string (we'll update this in useEffect)
    const address_line_1 = ""; // Initialize as empty string (we'll update this in useEffect)
    const address_line_2 = ""; // Initialize as empty string (we'll update this in useEffect)
    const city = ""; // Initialize as empty string (we'll update this in useEffect)
    const state_element = ""; // Initialize as empty string (we'll update this in useEffect)
    const pincode = ""; // Initialize as empty string (we'll update this in useEffect)
    const gstin = ""; // Initialize as empty string (we'll update this in useEffect)
    // Get below details from env (replace with your actual environment variables)
    const key = "rAI8gg";
    const salt = "MIIEwAIBADANBgkqhkiG9w0BAQEFAASCBKowggSmAgEAAoIBAQDYOj+2W8ND8u00fYhV7ghwuBByDNJmDCIg7WzQE+SOBgOpARj7X8UOMr8idZCTbt+o898gObxNz8nNe4pBxLhJkMwaX3sHEgM9bDxkcOz7+RfZHnw41Bpair/1nTBaRBIgDNIzdPfOdxyET50oof/qrL9L4qpISXy/NiDSLgtOZcF6mev+zP+1FiklEXCu2IsqHVwyMMt7ynwS27t3m+ZliMKsPdXL5X0JrKD8TtchrNBzAphJctpQAjgNOL/+VUpHLQeQcks+0O1i/oXqiJ64akHumoGkFHRNaMdbmlUxgp7npmSjMnyCi9O3crcsZEFlyKSx0AwI3E7qgBu1Kz13AgMBAAECggEBAMJwVtywVb4jlESwYcoL29Eo47j7aLPVU1dSyZevW8aPB/mRABsD+tqSrafaGmFJwZxXeJys7nT2Vl0OK7yKnsGgkLlihOpNu1Yfn4setSy8yUI4FLKxoOUsggPnDxUMw1PI07jsBO7H03/za7qfOteX8gnWURPh6Wi0zvzR5N7gIIPVXj9xCHG6lgbr+bBQe5ranW7QUleDcVImpGtJUZAdI3fYmYQujePTWlyEc9nTUCdgA9lV7w27p5pnqzQfrJJq86P5RZHUNEw6GV5I0pw2hAPJQ1fIaB4vLEZhQ9Y3lExwznG8AC1gzu9U92PqhZRTM8U8jEpVXmHelHun5kECgYEA9UAEYYXvj5dqgS9xm71fb+nUvKsiv3KPWEWDvQWpgI6ITsUhoK7dGHURs/FmhoSKvuUVk1ebdao6ShKaMhRuZ4NmtoVqJOZ3rWzXomi3NjCEZ7h97SCPnMbz5QD/y+PK8+Rk0NvC44v9hQas9TORtNDAsLBm1Ck7DhQf4KIcL+ECgYEA4bSQ753fukoPlagGTVi+nSH6xS7f24PmWOq9OfYezmrxnaFoTFvQqhuI62sl0rnVJqQgexAcWMbweWjkkAaV1p1KJlsSvgMzPo+YPHtblrg0vKZTqi5V95XI9Wz3ps4shps0tOzUrS2UkMut29K3z2jc8q3ACa5NRyXoqJnV+FcCgYEAq8PmTZdMrTjTMx9TZkw/p1YR1QHXGFbX5m7pUV3B1XP+K40NfEh8OUDk4S5VLClwMzqm3cch7ksHABH/RMvid0Ukjvjp2mY/s4rji6/jgWSBl1MzfvyrGJaPAvisLtSftClmIpGH8W5+ZMjEIge4KPd7vUQPANDPt5CIsv9W1oECgYEAiL3VpWZXekyOXpP6pXejnB1PCZGZjCvALZSh6fDDvzkpgt+cCc8Cf1zJOh+jPaTaj1uWVhhvpBV68YNsHhnvQ6PtnYlFtJrJvBhRGit+VLTrNnPqcks6SBKWOqK283croK19ZDOrsfPQc10CyxBBzkXwvpInq3XPWdCMwUDaUmcCgYEAsiAOPU/0U3+zdHhzmUUTCIoQlm4gltNXmu1QuDruOdxDrhFNAVSkwhBD/IrwY6LRBOtAhk5oyakAZ1xw6GXZ24w1xH32DXoSWzYJSCFveFnwoSiLusvjn4isQls2FuFZR8uGuKg1+SZMOQ0EloGfgwfikP+Tu73HDMoPPsqQqqU=";
    const payu_url = "https://test.payu.in/_payment";
    const site_url = "staging.creatorsbay.app";
    // Generate below data
    const state_text = ""; // Initialize as empty string (we'll update this in useEffect)
    const transation_id = crypto_js_md5__WEBPACK_IMPORTED_MODULE_12___default()(campaign_id).toString();
    const productinfo = `Campaign: ${campaign_name}`;
    const surl = `https://${site_url}/payment-success`;
    const furl = `https://${site_url}/payment-failure`;
    const curl = `https://${site_url}/payment-cancelled`;
    const udf1 = campaign_id;
    const udf2 = gstin;
    const udf3 = pincode;
    const udf4 = "";
    const udf5 = "";
    const hash = crypto_js_sha512__WEBPACK_IMPORTED_MODULE_13___default()([
        key ?? "",
        transation_id ?? "",
        amount ?? "",
        productinfo ?? "",
        firstname ?? "",
        email ?? "",
        udf1 ?? "",
        udf2 ?? "",
        udf3 ?? "",
        udf4 ?? "",
        udf5 ?? "",
        "",
        "",
        "",
        "",
        "",
        salt ?? ""
    ].join("|")).toString();
    // Get this as fixed values;
    const country = "India";
    const api_version = 1;
    (0,react__WEBPACK_IMPORTED_MODULE_9__.useEffect)(()=>{
        // Access form field values when needed (e.g., on form submission)
        const firstname = document.getElementById("first_name").value;
        const lastname = document.getElementById("last_name").value;
        const email = document.getElementById("email_id").value;
        const phone = document.getElementById("phone_number").value;
        const address_line_1 = document.getElementById("address_line_1").value;
        const address_line_2 = document.getElementById("address_line_2").value;
        const city = document.getElementById("city_name").value;
        const state_element = document.getElementById("state_name");
        const pincode = document.getElementById("pin_code").value;
        const gstin = document.getElementById("gstin").value;
        const state_text = state_element.options[state_element.selectedIndex].text;
        console.log("Firstname:", firstname);
        console.log("Lastname:", lastname);
        console.log("Email:", email);
        console.log("Phone:", phone);
        console.log("Address Line 1:", address_line_1);
        console.log("Address Line 2:", address_line_2);
        console.log("City:", city);
        console.log("State:", state_text);
        console.log("Pincode:", pincode);
        console.log("GSTIN:", gstin);
    }, []);
    // const handlePayClick = () => {
    //     // Set PAYU URL (This should be done using React state)
    //     // Example: setPayuUrl(payu_url);
    //     // You can also update other form field values here
    // }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "relative bg-white rounded-lg shadow dark:bg-gray-700",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Homepage_ModalHeader__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {}),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "space-y-6 container-fluid p-14 ",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "border rounded-lg p-10 h-96 text-center shadow-lg  overflow-y-auto",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                id: "first_name",
                                type: "text",
                                name: "firstname",
                                className: " focus:border-purple-500 focus:ring-purple-500 appearance-none border rounded-md w-full py-5 bg-gray-100 px-3 mr-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",
                                value: formData.firstname,
                                onChange: (e)=>setFormData({
                                        ...formData,
                                        firstname: e.target.value
                                    })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                id: "last_name",
                                type: "text",
                                name: "lastname",
                                value: formData.lastname,
                                onChange: (e)=>setFormData({
                                        ...formData,
                                        lastname: e.target.value
                                    }),
                                className: " focus:border-purple-500 focus:ring-purple-500 appearance-none border rounded-md w-full py-5 bg-gray-100 px-3 mr-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                id: "email_id",
                                type: "email",
                                name: "email",
                                value: formData.email,
                                onChange: (e)=>setFormData({
                                        ...formData,
                                        email: e.target.value
                                    }),
                                className: " focus:border-purple-500 focus:ring-purple-500 appearance-none border rounded-md w-full py-5 bg-gray-100 px-3 mr-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                id: "phone_number",
                                type: "number",
                                name: "phone",
                                value: formData.phone,
                                onChange: (e)=>setFormData({
                                        ...formData,
                                        phone: e.target.value
                                    }),
                                className: " focus:border-purple-500 focus:ring-purple-500 appearance-none border rounded-md w-full py-5 bg-gray-100 px-3 mr-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                id: "address_line_1",
                                type: "text",
                                name: "address_1",
                                value: formData.address_1,
                                onChange: (e)=>setFormData({
                                        ...formData,
                                        address_1: e.target.value
                                    }),
                                className: " focus:border-purple-500 focus:ring-purple-500 appearance-none border rounded-md w-full py-5 bg-gray-100 px-3 mr-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                id: "address_line_2",
                                type: "text",
                                name: "address_2",
                                value: formData.address_2,
                                onChange: (e)=>setFormData({
                                        ...formData,
                                        address_2: e.target.value
                                    }),
                                className: " focus:border-purple-500 focus:ring-purple-500 appearance-none border rounded-md w-full py-5 bg-gray-100 px-3 mr-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                id: "city_name",
                                type: "text",
                                name: "city",
                                value: formData.city,
                                onChange: (e)=>setFormData({
                                        ...formData,
                                        city: e.target.value
                                    }),
                                className: " focus:border-purple-500 focus:ring-purple-500 appearance-none border rounded-md w-full py-5 bg-gray-100 px-3 mr-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("select", {
                                id: "state_name",
                                name: "state",
                                value: "",
                                className: " focus:border-purple-500 focus:ring-purple-500 appearance-none border rounded-md w-full py-5 bg-gray-100 px-3 mr-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                        value: "",
                                        children: "Select State"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                        value: "26",
                                        selected: true,
                                        children: "Uttar Pradesh"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                id: "pin_code",
                                type: "number",
                                name: "pincode",
                                value: formData.pincode,
                                onChange: (e)=>setFormData({
                                        ...formData,
                                        pincode: e.target.value
                                    }),
                                className: " focus:border-purple-500 focus:ring-purple-500 appearance-none border rounded-md w-full py-5 bg-gray-100 px-3 mr-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                id: "gstin",
                                type: "text",
                                name: "gstin",
                                value: formData.gstin,
                                onChange: (e)=>setFormData({
                                        ...formData,
                                        gstin: e.target.value
                                    }),
                                className: " focus:border-purple-500 focus:ring-purple-500 appearance-none border rounded-md w-full py-5 bg-gray-100 px-3 mr-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                onClick: handlePayClick,
                                children: "Pay"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                                id: "payment_form",
                                action: "",
                                method: "post",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                        type: "hidden",
                                        name: "key",
                                        id: "key",
                                        value: ""
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                        type: "hidden",
                                        name: "txnid",
                                        id: "txnid",
                                        value: ""
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                        type: "hidden",
                                        name: "productinfo",
                                        id: "productinfo",
                                        value: ""
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                        type: "hidden",
                                        name: "amount",
                                        id: "amount",
                                        value: ""
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                        type: "hidden",
                                        name: "email",
                                        id: "email",
                                        value: formData.email
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                        type: "hidden",
                                        name: "firstname",
                                        id: "firstname",
                                        value: formData.firstname
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                        type: "hidden",
                                        name: "surl",
                                        id: "surl",
                                        value: ""
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                        type: "hidden",
                                        name: "furl",
                                        id: "furl",
                                        value: ""
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                        type: "hidden",
                                        name: "phone",
                                        id: "phone",
                                        value: formData.phone
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                        type: "hidden",
                                        name: "hash",
                                        id: "hash",
                                        value: ""
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                        type: "hidden",
                                        name: "api_version",
                                        id: "api_version",
                                        value: ""
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                        type: "hidden",
                                        name: "lastname",
                                        id: "lastname",
                                        value: formData.lastname
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                        type: "hidden",
                                        name: "address1",
                                        id: "address1",
                                        value: formData.address_1
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                        type: "hidden",
                                        name: "address2",
                                        id: "address2",
                                        value: formData.address_2
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                        type: "hidden",
                                        name: "city",
                                        id: "city",
                                        value: formData.city
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                        type: "hidden",
                                        name: "state",
                                        id: "state",
                                        value: ""
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                        type: "hidden",
                                        name: "country",
                                        id: "country",
                                        value: ""
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                        type: "hidden",
                                        name: "pincode",
                                        id: "pincode",
                                        value: formData.pincode
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                        type: "hidden",
                                        name: "curl",
                                        id: "curl",
                                        value: ""
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                        type: "hidden",
                                        name: "udf1",
                                        id: "udf1",
                                        value: ""
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                        type: "hidden",
                                        name: "udf2",
                                        id: "udf2",
                                        value: ""
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                        type: "hidden",
                                        name: "udf3",
                                        id: "udf3",
                                        value: ""
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                        type: "hidden",
                                        name: "udf4",
                                        id: "udf4",
                                        value: ""
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                        type: "hidden",
                                        name: "udf5",
                                        id: "udf5",
                                        value: ""
                                    })
                                ]
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_toastify__WEBPACK_IMPORTED_MODULE_7__.ToastContainer, {})
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (User_Modal_form);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6020:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const User_Modal = ({ isOpen , onClose , children  })=>{
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
            className: `fixed inset-0 flex  z-50 justify-center items-center bg-black bg-opacity-50  ${isOpen ? "visible" : "hidden"}`,
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "modal-content bg-white rounded shadow-md ",
                children: children
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (User_Modal);


/***/ }),

/***/ 9681:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _styles_Colors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6029);
/* harmony import */ var _Homepage_leftDashboard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6255);
/* harmony import */ var _images__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8417);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _daterangepicker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9761);
/* harmony import */ var _Invoicetable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5423);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _User_Modal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6020);
/* harmony import */ var _User_Modal_User_Modal_form__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(3495);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Homepage_leftDashboard__WEBPACK_IMPORTED_MODULE_2__, _Invoicetable__WEBPACK_IMPORTED_MODULE_6__, _User_Modal_User_Modal_form__WEBPACK_IMPORTED_MODULE_9__]);
([_Homepage_leftDashboard__WEBPACK_IMPORTED_MODULE_2__, _Invoicetable__WEBPACK_IMPORTED_MODULE_6__, _User_Modal_User_Modal_form__WEBPACK_IMPORTED_MODULE_9__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);










const Invoicepage = ()=>{
    const [totalAmount, setTotalAmount] = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(1000);
    const [isModalOpenlogout, setIsModalOpenlogout] = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(false);
    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(false);
    const usageChargePercent = 15;
    const gstRate = 18;
    const calculateAmountWithGST = (amount)=>{
        const gstAmount = amount * gstRate / 100;
        return amount + gstAmount;
    };
    const firstAmount = totalAmount / 2;
    const secondAmount = totalAmount / 2;
    const firstAmountWithGST = calculateAmountWithGST(firstAmount);
    const secondAmountWithGST = calculateAmountWithGST(secondAmount);
    const refundAmount = usageChargePercent * totalAmount / 100;
    (0,react__WEBPACK_IMPORTED_MODULE_7__.useEffect)(()=>{
        const timeout = setTimeout(()=>{
            setLoading(false); // Set loading to false after a delay (simulating loading completion)
        }, 2000); // Adjust the delay time as needed
        return ()=>clearTimeout(timeout); // Clear the timeout if the component unmounts
    }, []);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: loading ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "w-full h-full flex items-center justify-center",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {
                width: 100,
                height: 100,
                alt: "",
                src: _images__WEBPACK_IMPORTED_MODULE_3__/* ["default"].Loader */ .Z.Loader
            })
        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "flex container_invoice container w-full",
                style: {
                    backgroundColor: _styles_Colors__WEBPACK_IMPORTED_MODULE_1__/* ["default"].button_light_clr */ .Z.button_light_clr
                },
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "m-2 w-full auto-cols-max ",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            style: {
                                background: _styles_Colors__WEBPACK_IMPORTED_MODULE_1__/* ["default"].invoice_gradient_clr */ .Z.invoice_gradient_clr
                            },
                            className: "auto-cols-max mx-4 mt-4 p-3 rounded-md flex flex-row grid grid-cols-3",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "text-white shadow-md rounded-md mx-3 p-4",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "font_size_31",
                                        children: [
                                            "Completed",
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "flex flex-row justify-between items-center",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                                        children: "157"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {
                                                        src: _images__WEBPACK_IMPORTED_MODULE_3__/* ["default"].overdue_icon */ .Z.overdue_icon,
                                                        width: 50,
                                                        height: 50,
                                                        alt: ""
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "text-white shadow-md rounded-md mx-3 p-4",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "font_size_31",
                                        children: [
                                            "Paid",
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "flex flex-row justify-between items-center",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                                        children: "02"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {
                                                        src: _images__WEBPACK_IMPORTED_MODULE_3__/* ["default"].overdue_icon */ .Z.overdue_icon,
                                                        width: 50,
                                                        height: 50,
                                                        alt: ""
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "text-white shadow-md rounded-md mx-3 p-4",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "font_size_31",
                                        children: [
                                            "Pending",
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "flex flex-row justify-between items-center",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                                        children: "57"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {
                                                        src: _images__WEBPACK_IMPORTED_MODULE_3__/* ["default"].overdue_icon */ .Z.overdue_icon,
                                                        width: 50,
                                                        height: 50,
                                                        alt: ""
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            style: {
                                backgroundColor: _styles_Colors__WEBPACK_IMPORTED_MODULE_1__/* ["default"].white_clr */ .Z.white_clr
                            },
                            className: "rounded-md container-fluid h-screen p-5 mt-5 mb-4 mx-4",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "font_size_31 capitalize font-bold",
                                    children: "Recent invoices"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "py-5",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Invoicetable__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {})
                                })
                            ]
                        })
                    ]
                })
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Invoicepage);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3015:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _components_Invoicepage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9681);
/* harmony import */ var _all_routing__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4553);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9915);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_Invoicepage__WEBPACK_IMPORTED_MODULE_1__, _all_routing__WEBPACK_IMPORTED_MODULE_2__, js_cookie__WEBPACK_IMPORTED_MODULE_4__]);
([_components_Invoicepage__WEBPACK_IMPORTED_MODULE_1__, _all_routing__WEBPACK_IMPORTED_MODULE_2__, js_cookie__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





const Invoice = ()=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    if (false) {}
    // const router = useRouter();
    // if (typeof window !== 'undefined') {
    //     const router = useRouter();
    //     const user_data = Cookies.get('user_data');
    //     const brand_detail = Cookies.get('brand_detail');
    //     const brand_id = Cookies.get('brand_id');
    //     if (typeof user_data === 'undefined') {
    //         router.push('/login')
    //     }
    // }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_all_routing__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Invoicepage__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {})
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Invoice);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;