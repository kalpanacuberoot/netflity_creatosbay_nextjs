import React from 'react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import Creator_invoice_pdf_page from '../Creator_invoice_pdf';

const PDFGenerator = () => {
  // const generatePDF = async () => {
  //   const contentDiv = document.createElement('div');
  //   contentDiv.innerHTML = contentToConvert;

  //   const canvas = await html2canvas(contentDiv);
  //   const imgData = canvas.toDataURL('image/png');

  //   const pdf = new jsPDF('p', 'mm', 'a4');
  //   pdf.addImage(imgData, 'PNG', 0, 0, 210, 297); // Adjust dimensions as needed
  //   pdf.save('invoice.pdf'); // Specify the desired PDF filename
  // };

  const handleDownload = () => {
    const element = document.getElementById("invoice");

    if (!element) {
      console.error("Element with ID 'invoice' not found.");
      return;
    }

    html2pdf()
      .from(element)
      .save();
  };

  return (
    <div>
      <button id="downloadPdf" onClick={handleDownload}>
        Download PDF
      </button>
      <div id="invoice">
       
        <h1>Your Invoice</h1>
        {/* <p>Invoice details go here...</p>
        ndskjfhkjwhgjj
        <Creator_invoice_pdf_page/> */}
      </div>
    </div>
  );
};

export default PDFGenerator;
