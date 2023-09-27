import Images from "@/images"
import Colors from "@/styles/Colors"
import Image from "next/image"
import Creator_invoice_table from "./Creator_invoice_table"

const Creator_Invoicespage = () => {
    return (
        <>

            <div
                className="flex container_invoice container w-full"
                style={{ backgroundColor: Colors.button_light_clr }}
            >

                <div className="m-4 w-full auto-cols-max ">
                    <div
                        style={{ background: Colors.invoice_gradient_clr }}
                        // style={style}
                        className="auto-cols-max  p-4 rounded-md flex flex-row grid grid-cols-3 mb-4"
                    >

                        <div className="text-white shadow-md rounded-md mx-3 p-4">
                            <div className="font_size_31">
                                Campaigns
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
                                Pending
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

                    <div style={{ backgroundColor: Colors.white_clr }} className="rounded-md container-fluid h-screen p-10 my-2">
                        <div className="font_size_31 ">
                            Recent invoices
                        </div>

                        <div className="py-5">
                            <Creator_invoice_table />
                        </div>
                    </div>

                </div>
            </div>
        </>         
    )
}

export default Creator_Invoicespage