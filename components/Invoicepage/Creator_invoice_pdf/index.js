import Images from "@/images"
import Colors from "@/styles/Colors"
import Image from "next/image"

const Creator_invoice_pdf_page = () => {
    return (
        <>


            <div className=" flex items-center flex-col justify-center h-full  bg-zinc-100">
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

                            {/* <div className=" border-r-4 ms-5"> </div> */}

                            <h1 className="font-bold ps-3">CreatorsBay</h1>

                        </div>
                        <h1>TAX INVOICE </h1>
                        {/* Your logo or header here */}
                    </div>
                    <div className="invoice-details">
                        <div className="invoice-info">
                        
                            <h5 className="mb-2">Invoice Date: September 11, 2023</h5>
                            <h5 className="font-bold">Remit To:</h5>
                            <h5>CreatorsBay LLP</h5>
                           
                            <h5 className="mb-2">414, Square One Mall, district city centre, Saket</h5>
                            <h5 className="mb-2">GST No. 9922CHE29001OSR</h5>
                            <h5 className="font-bold">Invoice Id: #WE234345-A</h5>
                        </div>
                        <div className="invoice-client">
                        <h5 className="font-bold">Invoice To:</h5>
                            <h5> Name: John Doe</h5>
                            <h5> Address: 123 Main St, City, State</h5>
                            <h5> PinCode: 121001</h5>
                            <h5 className="mb-2"> Mobile No.: 1234567890</h5>
                            <h5> GST No. 12ABS34567890FS</h5>
                        </div>
                    </div>
                    {/* <table className="invoice-items">
                    <thead>
                        <tr>
                            <th>Description</th>
                            <th>Quantity</th>
                            <th>Unit Price</th>
                            <th>Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Item 1</td>
                            <td>2</td>
                            <td>$50.00</td>
                            <td>$100.00</td>
                        </tr>
                        <tr>
                            <td>Item 2</td>
                            <td>3</td>
                            <td>$30.00</td>
                            <td>$90.00</td>
                        </tr>
                    </tbody>
                </table> */}
                    <div className="relative overflow-x-auto shadow-md sm:rounded-lg border mt-5">
                        <table className=" w-full text-sm text-left text-gray-500 dark:text-gray-400">
                            <thead className="border-b border-gray-300 text-xs text-gray-700 uppercase dark:bg-gray-700 dark:text-gray-400">
                                <tr className="text-base">
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
                                    {/* <th scope="col" className="px-6 py-5">
                                        Credited On
                                    </th> */}


                                    {/* <th scope="col" className="px-6 py-3">
                                <span className="sr-only">Edit</span>
                            </th> */}
                                </tr>

                            </thead>

                            <tbody>
                                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                    {/* <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        <h4> Jhon Smith</h4>
                                        <div className="font_size_14">smith@gmail.com</div>
                                    </th> */}
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
                                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                    {/* <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        <h4> Jhon Smith</h4>
                                        <div className="font_size_14">smith@gmail.com</div>
                                    </th> */}
                                    <td className="px-6 py-4">
                                        Creator 2
                                    </td>
                                    <td className="px-6 py-4">
                                        500
                                    </td>
                                    <td className="px-6 py-4">
                                        2
                                    </td>
                                    <td className="px-6 py-4">
                                        500
                                    </td>
                                    <td className="px-6 py-4">
                                        2
                                    </td>
                                    <td className="px-6 py-4">
                                        2000.00
                                    </td>
                                   
                                </tr>


                            </tbody>
                        </table>
                    </div>

                    <div className="invoice-total mt-5">

                        <table className="ms-auto">
                            <tr>
                                <th>Sub Total :</th>
                                <td>3000.00</td>
                            </tr>
                            <tr>
                                <th>First Amount :</th>
                                <td>1500.00</td>
                            </tr>
                            <tr>
                                <th>GST (18%) :</th>
                                <td>270.00</td>
                            </tr>
                            <tr className="font-bold mb-1" style={{ color: Colors.pink_clr }}>
                                <th>Total Amount :</th>
                                <td>1770.00</td>
                            </tr>


                        </table>


                       
                    </div>
                    <div className="text-center text-gray-300">Note: This is computer generated, no signature is required.</div>
                </div>
            </div>
        </>
    )
}

export default Creator_invoice_pdf_page
