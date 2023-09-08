import Colors from "@/styles/Colors"
import Left_Dashboard from "../Homepage/leftDashboard"
import Images from "@/images";
import Image from "next/image";
import Date_range_picker from "./daterangepicker";
import Invoice_Table from "./Invoicetable";
import { useState } from "react";

const Invoicepage = () => {

    const [totalAmount, setTotalAmount] = useState(1000);
    const usageChargePercent = 15;
    const gstRate = 18;

    const calculateAmountWithGST = (amount) => {
        const gstAmount = (amount * gstRate) / 100;
        return amount + gstAmount;
    };

    const firstAmount = totalAmount / 2;
    const secondAmount = totalAmount / 2;
    const firstAmountWithGST = calculateAmountWithGST(firstAmount);
    const secondAmountWithGST = calculateAmountWithGST(secondAmount);

    const refundAmount = usageChargePercent * totalAmount / 100;


    return (
        <>
            <div
                className="flex container_invoice container w-full"
                style={{ backgroundColor: Colors.button_light_clr }}
            >
                <div
                    className="auto-cols-max  px-5 py-5 border w-1/5"
                    style={{ backgroundColor: Colors.white_clr }}
                >
                    <Left_Dashboard />
                </div>
                {/* top section */}
                <div className="m-2 w-full auto-cols-max ">
                    <div
                        style={{ background: Colors.invoice_gradient_clr }}
                        // style={style}
                        className="auto-cols-max  p-3 rounded-md flex flex-row grid grid-cols-3"
                    >

                        <div className="text-white shadow-md rounded-md mx-3 p-4">
                            <div className="font_size_31">
                                Overdue
                                <div className="flex flex-row justify-between items-center">
                                    <h1>157</h1>
                                    <Image
                                        src={Images.overdue_icon}
                                        width={50}
                                        height={50}
                                        alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="text-white shadow-md rounded-md mx-3 p-4">
                            <div className="font_size_31">
                                Paid
                                <div className="flex flex-row justify-between items-center">
                                    <h1>02</h1>
                                    <Image
                                        src={Images.overdue_icon}
                                        width={50}
                                        height={50}
                                        alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="text-white shadow-md rounded-md mx-3 p-4">
                            <div className="font_size_31">
                                Unpaid
                                <div className="flex flex-row justify-between items-center">
                                    <h1>57</h1>
                                    <Image
                                        src={Images.overdue_icon}
                                        width={50}
                                        height={50}
                                        alt="" />
                                </div>
                            </div>
                        </div>



                    </div>
                    {/* invoices data */}
                    <div style={{ backgroundColor: Colors.white_clr }} className="rounded-md container-fluid h-screen p-5 my-2">
                        <div className="font_size_31 ">
                            Recent invoices
                        </div>
                        <div className="rounded-md flex flex-row justify-between border p-3">
                            <div>
                                <label className="relative block">
                                    <span className="sr-only">Search</span>
                                    <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                                        <Image src={Images.search_icon} alt="" width={16} height={16} />
                                        {/* <svg className="h-5 w-5 fill-slate-300" viewBox="0 0 20 20">gfdgdfg</svg> */}
                                    </span>
                                    <input
                                        className=" placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
                                        placeholder="Search here..."
                                        type="text"
                                        name="search" />
                                </label>
                            </div>
                            <div className="">
                                <Date_range_picker />
                            </div>
                        </div>
                        <div className="py-5">
                            <Invoice_Table />
                        </div>
                    </div>
                    <div>
                        <h1>Total Amount: {totalAmount}</h1>
                        <h2>First Amount:</h2>
                        <p>Base Amount: {firstAmount}</p>
                        <p>GST ({gstRate}%): {calculateAmountWithGST(firstAmount) - firstAmount}</p>
                        <p>Total: {firstAmountWithGST}</p>
                        <h2>Second Amount:</h2>
                        <p>Base Amount: {secondAmount}</p>
                        <p>GST ({gstRate}%): {calculateAmountWithGST(secondAmount) - secondAmount}</p>
                        <p>Total: {secondAmountWithGST}</p>
                        <button onClick={() => console.log('Accept')} >Accept</button>
                        <button onClick={() => console.log('Reject')} >Reject</button>
                        <h2>Refund Amount:</h2>
                        <p>{refundAmount}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Invoicepage