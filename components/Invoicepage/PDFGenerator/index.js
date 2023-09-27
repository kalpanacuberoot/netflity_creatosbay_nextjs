import React, { useEffect, useRef, useState } from 'react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import Creator_invoice_pdf_page from '../Creator_invoice_pdf';

const PDFGenerator = () => {

  const invoiceRef = useRef(null);
  const [showContent, setShowContent] = useState(true);

  
  const handleDownload = () => {
    // Create a new jsPDF instance
    const pdf = new jsPDF();

    // Get the element containing the invoice content
    const element = document.getElementById('invoice');

    // Convert the HTML element to an image using html2canvas
    html2canvas(element).then((canvas) => {
      // Get the image data URL from the canvas
      const imageData = canvas.toDataURL('image/png');

      // Add the image to the PDF
      pdf.addImage(imageData, 'PNG', 10, 10, 190, 0);

      // Save or open the PDF
      pdf.save('invoice.pdf');
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

  const generatePDF = () => {
    const doc = new jsPDF();
    doc.text(content, 10, 10); // Replace with your PDF content

    // Save the PDF in a ref so it can be accessed later
    pdfRef.current = doc;
  };

  const hidePDF = () => {
    // Clear the PDF content in the ref to hide it
    pdfRef.current = null;
  };

  return (
    <div className='hidden'>
      <button className="border ">
        Download PDF
      </button>
      <button onClick={generatePDF}>Generate PDF</button>
      <button onClick={hidePDF}>Hide PDF</button>
      {pdfRef.current && (
        <iframe
          src={pdfRef.current.output('bloburl')}
          width="100%"
          height="500px"
          title="PDF Preview"
        />
      )}
      <div className=''>

        <Creator_invoice_pdf_page />

      </div>
    </div>
  );
};

export default PDFGenerator;
