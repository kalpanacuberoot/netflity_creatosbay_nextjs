import Images from "@/images";
import Image from "next/image";
import Buttons from "@/components/Button";
import ModalHeader from "../../ModalHeader";
import Colors from "@/styles/Colors";
import Social_media_icons from "@/components/four_social_media";
import { useState } from "react";

const Edit_profile_content = () => {

    const [selectedOption, setSelectedOption] = useState("");

    const options = ["Option 1", "Option 2", "Option 3"];

    const handleChange = (e) => {
        setSelectedOption(e.target.value);
    };

    return (
        <>

            <div className="overflow-x-hidden w-full overflow-y-auto h-full relative bg-white rounded-lg shadow dark:bg-gray-700 edit_profile_ht">

                <div className="flex items-start justify-between border-b rounded-t dark:border-gray-600">

                    <div className="w-full px-5 py-3 flex items-center">
                        <button
                            type="button"
                            className="px-1 py-1 text-gray-900 bg-transparent rounded-lg text-sm w-8 h-8 inline-flex justify-center items-center "
                            data-modal-hide="defaultModal"
                        >
                            <svg className="w-15 h-15 p-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                            </svg>
                            <span className="sr-only">Close modal</span>

                        </button>
                        <div className="font_size_21  line-height-[26.52px] text-center w-full">Edit Profile</div>


                    </div>

                </div>
                <hr />

                <div className="space-y-6 h-screen p-5">
                    <div className="font_size_21  line-height-[26.52px]">
                        Brand Details.
                    </div>
                    <form>
                        <input
                            type="compant"
                            id="name"
                            className="appearance-none border rounded-md w-full bg-gray-100  py-5 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            placeholder="Brand Name"
                        />
                        <input
                            type="password"
                            id="name"
                            className="appearance-none border rounded-md w-full mt-5 bg-gray-100  py-5 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            placeholder="Brand Website"
                        />

                        <div className="relative">
                            <select
                                value={selectedOption}
                                onChange={handleChange}
                                className="block appearance-none  border rounded-md w-full mt-5 bg-gray-100 outline-none  py-5 px-3 text-gray-700  focus:shadow-outline border-gray-300 pr-8 leading-tight focus:outline-none focus:border-gray-700 "
                                id="grid-state"
                            >
                                <option value="" disabled>
                                Brand Type
                                </option>
                                {options.map((option) => (
                                    <option key={option} value={option}>
                                        {option}
                                    </option>
                                ))}
                            </select>
                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                <svg
                                    className="fill-current h-4 w-4"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                >
                                    <h4ath d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                                </svg>
                            </div>
                        </div>

                        <div className="relative w-full mt-5">
                            <label
                                htmlFor="fileInput"
                                className="w-full border-dotted h-44  align-middle border-4 rounded-lg bg-white   py-4 px-6 flex flex-col items-center justify-center cursor-pointer"
                                style={{ borderColor: Colors.logo_clr }}
                            >
                                <div className="mb-2">
                                    {/* <h4 className=" text-gray-300">+</h4> */}
                                    <Image
                                        src={Images.plus_icon}
                                        width={23.33}
                                        height={23.33}
                                        alt=""
                                        className="p-1"
                                    />
                                </div>
                                <span className="text-base  text-gray-700">
                                Brand Logo
                                </span>
                            </label>
                            <input
                                id="fileInput"
                                className="absolute inset-0 opacity-0 w-full"
                                type="file"
                            />
                        </div>
                        <textarea
                            id="descriptionInput"
                            type="text"
                            placeholder="Brand Description"
                            className="appearance-none border rounded-md w-full align-top mt-5 bg-gray-100 h-40 py-5 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            rows={4}
                        ></textarea>


                    </form>
                    {/* <div className="font_size_21  line-height-[26.52px]">
                        Account Details.
                    </div>
                    <form>


                        <div className="flex">
                            <input
                                type="text"
                                id="name"
                                className="appearance-none border rounded-md w-full py-5 bg-gray-100 px-3 mr-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                placeholder="First Name"
                            />
                            <input
                                type="text"
                                id="name"
                                className="appearance-none border rounded-md w-full ml-2 py-5 bg-gray-100 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                placeholder="Last Name"
                            />
                        </div>
                        <input
                            type="email"
                            id="name"
                            className="appearance-none border rounded-md w-full mt-5 bg-gray-100  py-5 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            placeholder="exampl@123.com"
                        />
                        <input
                            type="password"
                            id="name"
                            className="appearance-none border rounded-md w-full mt-5 bg-gray-100  py-5 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            placeholder="Create Password"
                        />
                        <input
                            type="password"
                            id="name"
                            className="appearance-none border rounded-md w-full mt-5 bg-gray-100  py-5 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            placeholder="Confirm Password"
                        />
                        <div className=" flex my-5 justify-between">
                            <div className="flex items-center">
                                <input
                                    type="checkbox"
                                    id="myCheckbox"
                                    className="form-checkbox h-5 w-5 "
                                    style={{ backgroundColor: Colors.logo_clr }}
                                />
                                <label htmlFor="myCheckbox" className="ml-2 text-black font_size_12">
                                    Send reminders until the form is completed

                                </label>
                            </div>

                        </div>

                    </form> */}
                    <Buttons
                        buttoncss="font_size_24 leading-6 py-3 my-5"
                        label={"Apply Changes"}
                    />
                </div>


            </div>
        </>
    )
}

export default Edit_profile_content