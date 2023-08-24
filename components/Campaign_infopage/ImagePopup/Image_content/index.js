import Images from "@/images";
import Image from "next/image";
import Buttons from "@/components/Button";
import Colors from "@/styles/Colors";
import Social_media_icons from "@/components/four_social_media";
import ModalHeader from "@/components/Homepage/ModalHeader";
import { useState } from "react";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
import Cookies from 'js-cookie';
import { url } from "@/generalfunation";

const Image_content = ({ onPopupData }) => {

    const [link, setLink] = useState(null);
    const [description, setDescription] = useState('');
    const [name, setName] = useState('');



    const handleFileChange = (event) => {
        const selectedFile = event.target.files[0];
        setLink(selectedFile);

    };


    console.log("fileslected", link);

    const handleUploadClick = async () => {
        // handleFileChange();
        if (!link) {
            alert('Please select an image to upload.');
            return;
        }

        const cookieValue = JSON.parse(Cookies.get('user_data'))
        console.log('categories cookieValue------------2', cookieValue?.token);

        const formData = new FormData();
        formData.append('file', link);

        try {
            const response = await fetch(`${url}/saveimage`, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${cookieValue?.token}`,
                    'Accept': '/application/json',
                },
                body: formData,
            });

            console.log("response image data popup", response);

            if (response.ok) {
                const data = await response.json();
                console.log("image response ok", data?.url);
                toast.success('Image Uploaded Successfully', {
                    position: 'top-center',
                    autoClose: 5000,
                });
                // alert('Image uploaded successfully.');
                setLink(data?.url)
            } else {
                // alert('Image upload failed.');
                toast.error('Image upload failed', {
                    position: 'top-center', // Set the toast position
                    autoClose: 3000, // Close the toast after 3 seconds
                });
            }
        } catch (error) {
            console.error('Error uploading image:', error);
            toast.error('Please uplaod the image again', {
                position: 'top-center', // Set the toast position
                autoClose: 3000, // Close the toast after 3 seconds0
            });
        }
    };

    const sendDataToParent = () => {
        const data = [
            {
                link,
                description,
                name,
            },
        ]

        console.log("popupdata---", data);
        // Call the callback function with the data to send to the parent
        // onPopupData(data);
        onPopupData(data);
        toast.success('Data is saved', {
            position: 'top-center', // Set the toast position
            autoClose: 3000, // Close the toast after 3 seconds0
        });
    };


    return (
        <>

            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">

                <ModalHeader />
                <div className="space-y-6 container-fluid p-14 pb-5">
                    <div className="border rounded-lg px-10  text-center shadow-lg">
                        <div className="my-3">
                            <input
                                type="text"
                                id="text"
                                className="appearance-none border rounded-md w-full mt-5 bg-gray-100  py-5 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                placeholder="Product Name"
                                required
                                value={name}
                                onChange={(e) => setName(e.target.value)}

                            />
                        </div>
                        <div className=" ">
                            <div
                                className=" cursor-not-allowed border-dotted h-34 align-middle border-4 rounded-lg bg-white py-4 px-6 flex flex-col items-center justify-center"
                            >
                                <label
                                    htmlFor="fileInput"
                                    style={{ borderColor: Colors.logo_clr }}
                                    className=" cursor-not-allowed   w-auto"
                                >
                                    <div className="cursor-not-allowed">
                                        <input
                                            id="fileInput"
                                            type="file"
                                            accept="image/*"
                                            className="hidden "
                                            onChange={handleFileChange} // Triggered when a file is selected
                                        />
                                        <Image
                                            src={Images.plus_icon}
                                            width={15}
                                            height={15}
                                            alt=""
                                            className=" cursor-default m-5 mb-0"
                                        />
                                    </div>

                                </label>
                                {/* <button
                                    className=" text-base text-gray-300 p-10 cursor-grabbing"
                                    onClick={handleUploadClick} // Triggered when "Company Logo" text is clicked
                                    style={{ cursor: 'grabbing' }}
                                >
                                     Upload Product Image
                                </button> */}
                                <Buttons
                                    label={"Upload Product Image"}
                                    buttoncss="py-3 my-5 text-base text-gray-300 p-10 cursor-grabbing"
                                    onClick={handleUploadClick}
                                />
                            </div>

                        </div>
                        <textarea
                            id="descriptionInput"
                            type="text"
                            placeholder="Product Description"
                            className="appearance-none border rounded-md w-full align-top mt-5 bg-gray-100 h-40 py-5 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            rows={4}
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            required
                        ></textarea>
                        <Buttons
                            buttoncss="font_size_24 leading-6 py-3 button_clr my-5"
                            label={"Submit"}
                            onClick={sendDataToParent}
                        />
                    </div>
                </div>
                <ToastContainer />
            </div>
        </>
    )
}

export default Image_content