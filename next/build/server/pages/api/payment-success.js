"use strict";
(() => {
var exports = {};
exports.id = 7793;
exports.ids = [7793];
exports.modules = {

/***/ 3328:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
// export default async function handler(req, res) {
//     console.log("payementsucess", "payementsucess");
//     if (req.method === 'POST') {
//         try {
//             const data = req.body
//             console.log("payementsucess--------", data);
//             res.status(200).json({ message: 'Data received successfully' });
//         } catch (error) {
//             console.error(error);
//             res.status(400).json({ error: 'Invalid JSON data' });
//         }
//     } 
//     else {
//         res.status(405).end();
//     }
// };
async function handler(req, res) {
    // console.log("Received POST request to /api/handler");
    // console.log("Request Method:", req.method);
    // console.log("Request Body:", req.body);
    if (req.method === "POST") {
        try {
            const data = req.body;
            console.log("payementsucess--------", data);
            // res.status(200).json({ message: 'Data received successfully' });
            res.status(200).json({
                data
            });
        } catch (error) {
            console.error(error);
            res.status(400).json({
                error: "Invalid JSON data"
            });
        }
    } else {
        res.status(405).end();
    }
}
;


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(3328));
module.exports = __webpack_exports__;

})();