"use strict";
exports.id = 711;
exports.ids = [711];
exports.modules = {

/***/ 711:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5158);
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jspdf__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var html2canvas__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7276);
/* harmony import */ var html2canvas__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(html2canvas__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Creator_invoice_pdf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9783);





const PDFGenerator = ()=>{
    const invoiceRef = useRef(null);
    const [showContent, setShowContent] = useState(true);
    const handleDownload = ()=>{
        // Create a new jsPDF instance
        const pdf = new jsPDF();
        // Get the element containing the invoice content
        const element = document.getElementById("invoice");
        // Convert the HTML element to an image using html2canvas
        html2canvas(element).then((canvas)=>{
            // Get the image data URL from the canvas
            const imageData = canvas.toDataURL("image/png");
            // Add the image to the PDF
            pdf.addImage(imageData, "PNG", 10, 10, 190, 0);
            // Save or open the PDF
            pdf.save("invoice.pdf");
        });
    };
    // const handleDownload = () => {
    //   setShowContent(false); // Hide content when generating the PDF
    //   // Create a new jsPDF instance
    //   const pdf = new jsPDF();
    //   // Get the element containing the invoice content
    //   const element = document.getElementById('invoice');
    //   // Convert the HTML element to an image using html2canvas
    //   html2canvas(element).then((canvas) => {
    //     // Get the image data URL from the canvas
    //     const imageData = canvas.toDataURL('image/png');
    //     // Add the image to the PDF
    //     pdf.addImage(imageData, 'PNG', 10, 10, 190, 0);
    //     // Save or open the PDF
    //     pdf.save('invoice.pdf');
    //     setShowContent(true);
    //   });
    // };
    const pdfRef = useRef(null);
    const generatePDF = ()=>{
        const doc = new jsPDF();
        doc.text(content, 10, 10); // Replace with your PDF content
        // Save the PDF in a ref so it can be accessed later
        pdfRef.current = doc;
    };
    const hidePDF = ()=>{
        // Clear the PDF content in the ref to hide it
        pdfRef.current = null;
    };
    return /*#__PURE__*/ _jsxs("div", {
        className: "hidden",
        children: [
            /*#__PURE__*/ _jsx("button", {
                className: "border ",
                children: "Download PDF"
            }),
            /*#__PURE__*/ _jsx("button", {
                onClick: generatePDF,
                children: "Generate PDF"
            }),
            /*#__PURE__*/ _jsx("button", {
                onClick: hidePDF,
                children: "Hide PDF"
            }),
            pdfRef.current && /*#__PURE__*/ _jsx("iframe", {
                src: pdfRef.current.output("bloburl"),
                width: "100%",
                height: "500px",
                title: "PDF Preview"
            }),
            /*#__PURE__*/ _jsx("div", {
                className: "",
                children: /*#__PURE__*/ _jsx(Creator_invoice_pdf_page, {})
            })
        ]
    });
};
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (PDFGenerator)));


/***/ })

};
;