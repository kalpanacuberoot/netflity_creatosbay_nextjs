import Creator_invoice_pdf_page from "@/components/Invoicepage/Creator_invoice_pdf"
import Images from "@/images"
import Colors from "@/styles/Colors"
import Image from "next/image"

const Creator_invoice_pdf = () => {
    return (
        <>
            {/* <div className=" flex items-center flex-col justify-center h-full  bg-zinc-100">
                <div className="invoice-container max-w-5xl mx-auto rounded  p-10">
                    <div className="invoice-header flex items-center justify-between">
                        <div className="flex items-center  divide-x-[3px] ">
                            <Image
                                src={Images.company_logo}
                                width={50}
                                height={30}
                                alt=""
                                className="me-3"
                            />

                          

                            <h1 className="font-bold ps-3">CreatorsBay</h1>

                        </div>
                        <h1>TAX INVOICE </h1>
                       
                    </div>
                    <div className="invoice-details">
                        <div className="invoice-info">
                            <h5>Invoice Date: September 8, 2023</h5>
                            <h5>Due Date: October 8, 2023</h5>
                            <h5>Invoice Id: #WE234345</h5>
                        </div>
                        <div className="invoice-client">
                            <h5>Creator Name: John Doe</h5>
                            <h5>Creator Address: 123 Main St, City, Country</h5>
                            <h5>Creator PinCode: 121001</h5>
                            <h5>Creator Mobile No.: 1234567890</h5>
                        </div>
                    </div>
                   
                    <div className="relative overflow-x-auto shadow-md sm:rounded-lg border mt-5">
                        <table className="text-center w-full text-sm text-left text-gray-500 dark:text-gray-400">
                            <thead className="border-b border-gray-300 text-xs text-gray-700 uppercase dark:bg-gray-700 dark:text-gray-400">
                                <tr className="font_size_17">
                                    <th scope="col" className="px-6 py-5">
                                        Creator Name
                                    </th>
                                    <th scope="col" className="px-6 py-5">
                                        unit price image
                                    </th>
                                    <th scope="col" className="px-6 py-5">
                                        Images
                                    </th>
                                    <th scope="col" className="px-6 py-5">
                                        unit price video
                                    </th>
                                    <th scope="col" className="px-6 py-5">
                                        Videos
                                    </th>
                                    <th scope="col" className="px-6 py-5">
                                        Amount
                                    </th>
                                  
                                </tr>

                            </thead>

                            <tbody>
                                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                   
                                    <td className="px-6 py-4">
                                        John Doe
                                    </td>
                                    <td className="px-6 py-4">
                                        500
                                    </td>
                                    <td className="px-6 py-4">
                                        1
                                    </td>
                                    <td className="px-6 py-4">
                                        500
                                    </td>
                                    <td className="px-6 py-4">
                                        1
                                    </td>
                                    <td className="px-6 py-4">
                                        1000.00
                                    </td>

                                </tr>


                            </tbody>
                        </table>
                    </div>

                    <div className="invoice-total mt-5">
                       
                            <table className="ms-auto">
                                <tr>
                                    <th>Sub Total :</th>
                                    <td>1000.00</td>
                                </tr>
                                <tr>
                                    <th>First Amount :</th>
                                    <td>500.00</td>
                                </tr>
                                <tr>
                                    <th>GST (18%) :</th>
                                    <td>90.00</td>
                                </tr>
                                <tr  className="font-bold" style={{ color: Colors.pink_clr }}>
                                    <th>Total Amount :</th>
                                    <td>590.00</td>
                                </tr>
                               

                            </table>
                            
                        

                    </div>
                </div>
            </div> */}
            <Creator_invoice_pdf_page/>
        </>
    )
}

export default Creator_invoice_pdf

