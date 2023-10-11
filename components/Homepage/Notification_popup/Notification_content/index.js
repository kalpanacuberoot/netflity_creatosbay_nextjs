import Colors from "@/styles/Colors";
import { useState } from "react";

const Notification_content = () => {

    return (
        <>
            {/* dropdown notifiaction *************************************** */}
            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700 text-left min-h-4xl overflow-y-auto">

                <div
                    className="h-full origin-top-right w-96  rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                    role="menu"
                    aria-orientation="vertical"
                >
                    <div className="py-1" role="none">
                        <div
                            className=" flex justify-between align-middle  p-4 items-center"
                            style={{
                                borderBottom: "1px solid hsla(330, 93%, 66%, 0.5)",
                            }}
                        >
                            <h2>Notification</h2>
                            <button className="bg-purple-100 p-2 rounded-md w-12  ">
                                5
                            </button>
                        </div>
                        <div className="p-5 scroll">
                            <div className=" bg-purple-100 rounded-md mt-7 p-5">
                                <div className=" flex justify-between gap-5">
                                    <div className="  ">
                                        <h4 className="mb-3">Something has happened</h4>
                                        <h6>
                                            Lucas ipsum dolor sit amet chewbacca aayla
                                            dantooine obi-wan atrivis.
                                        </h6>
                                    </div>
                                    <p>x</p>
                                </div>
                                <h5 className="text-right">12:18</h5>
                            </div>
                            <div className=" bg-purple-100 rounded-md mt-7 p-5">
                                <div className=" flex justify-between gap-5">
                                    <div> &</div>
                                    <div>
                                        <h4 className="mb-3 font-bold" 
                                        style={{color:Colors.notification_green}}
                                        >
                                            Well done Anakin!
                                        </h4>
                                        <h6>
                                            Qrygg elomin kashyyyk skirata. Oswaft mirta
                                            omwati kohl shmi.
                                        </h6>
                                    </div>
                                    <p>x</p>
                                </div>
                                <h5 className="text-right">13 H ago</h5>
                            </div>
                            <div className=" bg-purple-100 rounded-md mt-7 p-5">
                                <div className=" flex justify-between gap-5">
                                    <div> &</div>
                                    <div>
                                        <h4 className="mb-3 font-bold text-green-700">
                                            Well done Anakin!
                                        </h4>
                                        <h6>
                                            Qrygg elomin kashyyyk skirata. Oswaft mirta
                                            omwati kohl shmi.
                                        </h6>
                                    </div>
                                    <p>x</p>
                                </div>
                                <h5 className="text-right">13 H ago</h5>
                            </div>
                            <div className=" bg-purple-100 rounded-md mt-7 p-5">
                                <div className=" flex justify-between gap-5">
                                    <div> &</div>
                                    <div>
                                        <h4 className="mb-3 font-bold text-green-700">
                                            Well done Anakin!
                                        </h4>
                                        <h6>
                                            Qrygg elomin kashyyyk skirata. Oswaft mirta
                                            omwati kohl shmi.
                                        </h6>
                                    </div>
                                    <p>x</p>
                                </div>
                                <h5 className="text-right">13 H ago</h5>
                            </div>
                            <div className=" bg-purple-100 rounded-md mt-7 p-5">
                                <div className=" flex justify-between gap-5">
                                    <div> &</div>
                                    <div>
                                        <h4 className="mb-3 font-bold text-green-700">
                                            Well done Anakin!
                                        </h4>
                                        <h6>
                                            Qrygg elomin kashyyyk skirata. Oswaft mirta
                                            omwati kohl shmi.
                                        </h6>
                                    </div>
                                    <p>x</p>
                                </div>
                                <h5 className="text-right">13 H ago</h5>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </>
    )
}

export default Notification_content