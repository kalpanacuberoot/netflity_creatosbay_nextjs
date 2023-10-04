import Left_Dashboard from "@/components/Homepage/leftDashboard";
import Colors from "@/styles/Colors";

import Link from "next/link";



const Payment_cancelpage = () => {

    return (
        <>
            <div className="flex h-full" style={{ backgroundColor: Colors.button_light_clr }}>

                <div
                    className="w-full flex justify-center align-middle items-center flex-col border"
                    style={{ backgroundColor: Colors.white_clr }}
                >
                    <div className="border p-10 shadow-lg  text-red-800 border border-red-300 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400 dark:border-red-800">
                        {/* <h1 className="text-center font-bold" style={{ color: Colors.red_clr }}>Your Payment is <br /> Failed</h1> */}
                        <h1 className="text-center font-bold" 
                        // style={{ color: Colors.red_clr }}
                        >Your Transaction is <br /> Cancelled</h1>
                       
                        <Link href={"/home"}>
                            <button className="mt-5 px-12 py-2 rounded-md w-full bg-red-800 text-white"
                               
                                >       
                                OK
                            </button>
                        </Link>
                    </div>
                </div>
            </div>

        </>
    );
};

export default Payment_cancelpage;