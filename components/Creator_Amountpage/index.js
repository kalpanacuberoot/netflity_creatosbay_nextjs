import Colors from "@/styles/Colors"
import Left_Dashboard from "../Homepage/leftDashboard"
import Images from "@/images";
import Image from "next/image";

import Date_range_picker from "../Invoicepage/daterangepicker";
import Creator_table from "./Creator_table";
import Buttons from "../Button";
import { useRouter } from "next/router";

const Creator_Amountpage = () => {

    const router = useRouter();

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
                    {/* <div
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



                    </div> */}
                    {/* invoices data */}
                    <div style={{ backgroundColor: Colors.white_clr }}
                        className="rounded-md container-fluid h-screen p-5 my-2 flex flex-col justify-between"
                    >
                        <div className="font_size_31 ">
                            Creator Invoice/Campaign Name
                            <div className="py-5">
                                <Creator_table />
                            </div>
                        </div>


                        <div className="w-32  ms-auto">
                            <Buttons
                                label={"Continue"}
                                buttoncss={"bottom-0"}
                                onClick={() => router.push('/payment_gateway')}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


export default Creator_Amountpage