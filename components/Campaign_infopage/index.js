import Colors from "@/styles/Colors"
import Left_Dashboard from "../Homepage/leftDashboard"
import { useRef } from "react";
import Image from "next/image";
import Images from "@/images";
import Calendar from "./Calendar";
import Buttons from "../Button";

const Campaign_infopage = () => {
    const inputFileRef = useRef(null);

    const onFilechange = (e) => {
        /*Selected files data can be collected here.*/
        console.log(e.target.files);
    }
    const onBtnClick = () => {
        /*Collecting node-element and performing click*/
        inputFileRef.current.click();
    }
    return (
        <>
            <div

                className="flex container_capmapign_info"
                style={{ backgroundColor: Colors.button_light_clr }}
            >
                <div
                    className='auto-cols-max w-80 px-3 py-5 border'
                    style={{ backgroundColor: Colors.white_clr }}
                >
                   
                    <Left_Dashboard />
                </div>
                <div className="m-2 w-full">
                    <div style={{ backgroundColor: Colors.white_clr }} className=" p-3 rounded-md flex flex-row">
                        <div className="p-3 border rounded-md shadow-md m-2" >
                            <h2 style={{ color: Colors.pending_clr }} className="font-bold campaign_info_title">Campaign Info</h2>
                            <h5>Qorem ipsum dolor sit amet, consectetur adipiscing elit.</h5>
                            <div className=" my-5"><hr className="divider_line"/></div>
                            <div className="my-3">
                                <h4 className="">Campaign Name</h4>
                                <h6 className="mb-3">Qorem ipsum dolor sit amet, consectetur adipiscing elit.</h6>

                                <input
                                    type="text"
                                    id="small-input"
                                    className="shadow-md block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-white-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                />

                            </div>
                            <div  className="my-3">
                                <h4>Campaign Description</h4>
                                <h6 className="mb-3">Qorem ipsum dolor sit amet, consectetur adipiscing elit.</h6>

                                <textarea
                                    id="message"
                                    rows="4"
                                    className=" shadow-mdblock p-2.5 w-full text-sm text-gray-900 bg-white-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="Start Typing..."></textarea>

                            </div>
                            <div className="my-3">
                                <h4>Product</h4>
                                <h6 className="mb-3">Qorem ipsum dolor sit amet, consectetur adipiscing elit.</h6>

                                <div className="flex flex-row justify-between">
                                    <div className="border h-48 rounded-md  w-full me-3 shadow-md">
                                        <input
                                            type="file"
                                            ref={inputFileRef}
                                            onChange={(e) => onFilechange(e)}
                                            hidden
                                            className=""
                                        />
                                        <button onClick={() => onBtnClick()} className="h-48  w-full ">
                                            <Image
                                                src={Images.plus_icon}
                                                width={20}
                                                className="mx-auto "
                                            />
                                            <p className="mt-3" style={{ color: Colors.logo_clr }}>Add Image</p>
                                        </button>
                                    </div>
                                    <div className="border h-48 rounded-md  w-full ms-3 shadow-md">
                                        <input
                                            type="file"
                                            ref={inputFileRef}
                                            onChange={(e) => onFilechange(e)}
                                            hidden
                                        />
                                        <button onClick={() => onBtnClick()} className="h-48  w-full">
                                            <Image
                                                src={Images.plus_icon}
                                                width={20}
                                                className="mx-auto "
                                            />
                                            <p className="mt-3" style={{ color: Colors.logo_clr }}>Add Image</p>
                                        </button>
                                    </div>
                                </div>
                                <div>
                                    <button className="border w-full my-3 py-2 rounded-md shadow-md">Paste link</button>
                                </div>

                            </div>
                            <div className="my-3">
                                <h3>Timelines</h3>
                                <h6>Set Creating Date</h6>
                                
                                <Calendar />
                            </div>
                            <div  className="my-3">
                                <h4>Content Reference</h4>
                                <h6 className="mb-3">Qorem ipsum dolor sit amet, consectetur adipiscing elit.</h6>

                               
                                <div className="flex flex-row justify-between">
                                    <div className="border h-48 rounded-md  w-full me-3 shadow-md">
                                        <input
                                            type="file"
                                            ref={inputFileRef}
                                            onChange={(e) => onFilechange(e)}
                                            hidden
                                            className=""
                                        />
                                        <button onClick={() => onBtnClick()} className="h-48  w-full ">
                                            <Image
                                                src={Images.plus_icon}
                                                width={20}
                                                className="mx-auto "
                                            />
                                            <p className="mt-3" style={{ color: Colors.logo_clr }}>Add Image</p>
                                        </button>
                                    </div>
                                    <div className="border h-48 rounded-md  w-full ms-3 shadow-md">
                                        <input
                                            type="file"
                                            ref={inputFileRef}
                                            onChange={(e) => onFilechange(e)}
                                            hidden
                                        />
                                        <button onClick={() => onBtnClick()} className="h-48  w-full">
                                            <Image
                                                src={Images.plus_icon}
                                                width={20}
                                                className="mx-auto "
                                            />
                                            <p className="mt-3" style={{ color: Colors.logo_clr }}>Add Image</p>
                                        </button>
                                    </div>
                                </div>
                                <div>
                                    <button className="border w-full my-3 py-2 rounded-md shadow-md">Paste link</button>
                                </div>

                            </div>
                            <Buttons label={"Proceed"} />
                        </div>

                        {/* right */}
                        <div className="p-3 border rounded-md shadow-md min-h-screen flex flex-col m-2 ">
                            <h3>Today Highlights</h3>
                            <h5>Qorem ipsum dolor sit amet, consectetur adipiscing elit.</h5>
                            {/* <div className="h-full "> */}
                                <Image
                                    src={Images.campaign_info_imgs}
                                    className="image_capign_info"
                                    // height={1000}
                                />
                            {/* </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Campaign_infopage