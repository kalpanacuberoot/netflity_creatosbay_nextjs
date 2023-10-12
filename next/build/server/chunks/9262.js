"use strict";
exports.id = 9262;
exports.ids = [9262];
exports.modules = {

/***/ 9262:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HQ": () => (/* binding */ url),
/* harmony export */   "k_": () => (/* binding */ apiCall),
/* harmony export */   "xb": () => (/* binding */ isEmpty)
/* harmony export */ });
/* unused harmony export getApiCall */
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_0__);

const isEmpty = (value)=>{
    if (value === undefined || value === null || value?.length === 0) {
        return true;
    } else {
        return false;
    }
};
const url = "https://backend.creatorsbay.app/api";
const apiCall = async (url, method, data = null, headers = {})=>{
    try {
        const options = {
            method,
            // headers,
            headers: {
                ...headers,
                "Accept": "application/json"
            }
        };
        if (method.toLowerCase() === "post") {
            options.headers["Content-Type"] = "application/json";
            options.body = JSON.stringify(data);
        }
        const response = await fetch(url, options);
        if (!response.ok) {
            throw new Error(`Request failed with status: ${response.status}`);
        }
        const responseData = await response.json();
        return responseData;
    } catch (error) {
        throw new Error(`API call error: ${error.message}`);
    }
};
const getApiCall = async (url, method, headers = {})=>{
    const router = useRouter();
    try {
        const options = {
            method,
            headers: {
                ...headers,
                "Accept": "application/json"
            }
        };
        if (method.toLowerCase() === "get") {
            options.headers["Content-Type"] = "application/json";
        }
        const response = await fetch(url, options);
        const responseData = await response.json();
        if (response.ok) {
            const responseData = await response.json();
            return responseData;
        }
        if (!response.ok) {
            throw new Error(`Request failed with status: ${response.status}`);
        }
    } catch (error) {
        console.error("Error:", error);
    }
};


/***/ })

};
;