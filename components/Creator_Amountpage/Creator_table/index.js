import PDFGenerator from "@/components/Invoicepage/PDFGenerator";
import { url } from "@/generalfunctions";
import Images from "@/images"
import Colors from "@/styles/Colors"
import Cookies from "js-cookie";
import Image from "next/image"
import { useEffect, useRef, useState } from "react";
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

import Creator_invoice_pdf_page from "@/components/Invoicepage/Creator_invoice_pdf";
import { Document, Page } from 'react-pdf';


// export const PDFContent = () => {
//     return (
//         <div>
//             <h1>This is the PDF Content</h1>
//             <p>You can add your React components here.</p>
//         </div>
//     );
// }

const Creator_table = ({ creatorData }) => {

    const [creator_name, setCreator_name] = useState(null);
    const [showPDF, setShowPDF] = useState(false);
    console.log("creatorData table", creatorData);
    const pdfRef = useRef(null);
        

    const handleSubmit = async () => {

        // const creator_id = JSON.parse(Cookies.get('creator_id'));
        // console.log("creator_id campaign_id", creator_id);

        const creator_id = Cookies.get('creator_id');
        const creator_profile_id = Cookies.get('creator_profile_id');

        let creatorId = null;

        if (creator_id) {
            try {
                creatorId = JSON.parse(brand_detail);
            } catch (error) {
                console.error('Error parsing brand_detail:', error);
            }
        }

        if (!creatorId && creator_profile_id) {
            try {
                creatorId = JSON.parse(brandIds);
            } catch (error) {
                console.error('Error parsing brand_ids:', error);
            }
        }
        console.log('creator_profile_id:', creator_profile_id);
        const cookieValue = JSON.parse(Cookies.get('user_data'));
        console.log('categories cookieValue-----parsedData-------1', cookieValue?.token);

        try {

            const headers = {
                'Authorization': `Bearer ${cookieValue?.token}`,
                'Content-Type': 'application/json',
            };

            const response = await fetch(`${url}/creators/${creatorData?.creator_id}`, {
                method: 'Get',
                headers: headers,

            });
            console.log('creator_details response:1 amount papge', response);
            if (response?.ok) {
                const responseData = await response.json();
                console.log('creator_details response: amount papge', responseData?.data);
                setCreator_name(responseData?.data)

                // Cookies.set('brand_id', JSON.stringify(responseData?.data?.id), { expires: 106500 });

                if (responseData?.status) {
                    // toast.success('Brand Successfully Created', {
                    //     position: 'top-center',
                    //     autoClose: 5000,
                    // });

                } else {
                    console.error('Error:', responseData.message);
                    // alert('Brand creation failed');
                }
            } else {
                console.error('Error:', response.statusText);
                // alert('Brand creation failed');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    useEffect(() => {
        handleSubmit();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])



    console.log("creator_name", creator_name?.user?.name);

    const result = (creatorData?.image_count || 0) * 500 + (creatorData?.video_count || 0) * 500 ;

    console.log(result);


    // Cookies.remove('creator_amount', result);

    // const generatePDF = async () => {
    //     const pdf = new jsPDF();
    //     const contentHtml = pdfRef.current;

    //     const canvas = await html2canvas(contentHtml);
    //     const imageData = canvas.toDataURL('image/png');

    //     pdf.addImage(imageData, 'PNG', 10, 10, 190, 0); // You can adjust the dimensions

    //     pdf.save('generated.pdf');
    // };


    // const handleDownload = () => {
    //     generatePDF();
    // };

    console.log("amountpayout",result)



    return (
        <>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    <h4> {creator_name?.user?.name}</h4>

                </th>
                {/* <td className="px-6 py-4">
                    500
                </td> */}
                <td className="px-6 py-4">
                    {creatorData?.image_count}
                </td>
                {/* <td className="px-6 py-4">
                    500
                </td> */}
                <td className="px-6 py-4">
                    {creatorData?.video_count}
                </td>
                <td className="px-6 py-4">
                    {result}

                </td>
                <td className="px-6 py-4 border">
                    <Image
                        src={Images.download_icon}
                        width={40}
                        height={40}
                        alt=""
                        className="mx-auto cursor-pointer"
                        // onClick={handleDownload}
                    />

                    {/* <div ref={pdfRef} className="hidden" id="invoice">
                        <PDFContent />
                        <Creator_invoice_pdf_page />
                        hello
                    </div> */}

                </td>


            </tr>
        </>
    )
}

export default Creator_table