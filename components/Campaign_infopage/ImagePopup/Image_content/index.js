import Images from "@/images";
import Image from "next/image";
import Buttons from "@/components/Button";
import Colors from "@/styles/Colors";
import Social_media_icons from "@/components/four_social_media";
import ModalHeader from "@/components/Homepage/ModalHeader";
import { useRef, useState } from "react";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
import Cookies from 'js-cookie';
import { url } from "@/generalfunctions";
import { useRouter } from "next/router";

const Image_content = ({ onPopupData }) => {

    const router = useRouter();

    const IMAGE_URL = "https://creatorsbay-media-bucket.s3.ap-south-1.amazonaws.com";

    const [file, setFile] = useState(null);
    const [description, setDescription] = useState('');
    const [name, setName] = useState('');
    const [previewImage, setPreviewImage] = useState(null);
    const refImage1 = useRef(null);         


    const handleFileChange = (event) => {
        const selectedFile = event.target.files[0];
        console.log("fileslected and product", file, selectedFile);
        if (selectedFile) {
            // Create a FileReader instance
            const reader = new FileReader();

            // Set up a callback function for when the FileReader has loaded the image
            reader.onloadend = () => {
                setFile(selectedFile); // Save the selected image file
                setPreviewImage(reader.result); // Set the image preview
            };

            // Read the image file as a data URL
            reader.readAsDataURL(selectedFile);
        } else {
            setFile(null); // Reset the selected image
            setPreviewImage(null); // Reset the image preview
        }
        // setFile(selectedFile);

    };


    console.log("fileslected product image", file);

    const handleUploadClick = async () => {
        // handleFileChange();
        if (!file) {
            alert('Please select an image to upload.');
            return;
        }

        const cookieValue = JSON.parse(Cookies.get('user_data'))
        console.log('categories cookieValue------------2', cookieValue?.token);

        const formData = new FormData();
        formData.append('file', file);

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
                console.log("image response ok produvt image", data?.url);
                toast.success('Image Uploaded Successfully', {
                    position: 'top-center',
                    autoClose: 5000,
                });
                // alert('Image uploaded successfully.');
                setFile(data?.url)
            } else {
                // alert('Image upload failed.');
                toast.success('Image Uploaded Successfully', {  
                    position: 'top-center',
                    autoClose: 5000,
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

    console.log("dfdsafdsfds",file);

    const sendDataToParent = () => {
        // const link = `${IMAGE_URL}/uploads/${file?.name}`;
        const link = file;
        console.log('imgrddsa product popup----1', file, link)

        handleUploadClick();
        console.log('imgrddsa product popup-----2', file)

        const data = [
            {
                link:file,
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
        // router.push('/campaign_info')


    };



    return (
        <>

            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700 ">

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
                                className=" border-dotted h-34 align-middle border-4 rounded-lg bg-white py-4 px-6 flex flex-col items-center justify-center"
                            >
                                <label
                                    htmlFor="fileInput"
                                    style={{ borderColor: Colors.logo_clr }}
                                    className=" w-auto"
                                >
                                    <div className=" w-full text-center">
                                        <input
                                            id="fileInput"
                                            type="file"
                                            accept="image/*"
                                            className="hidden absolute w-full"
                                            ref={refImage1}
                                            onChange={handleFileChange} // Triggered when a file is selected
                                        />
                                        {!file && (
                                            <Image
                                                src={Images.plus_icon}
                                                width={15}
                                                height={15}
                                                alt=""
                                                className=" cursor-default m-5  mx-auto"
                                            />
                                        )}
                                    </div>
                                    {previewImage && (
                                        <Image
                                            src={previewImage}
                                            alt="Selected product preview" 
                                            style={{ maxWidth: '100%', maxHeight: '300px' }}
                                            width={50}
                                            height={50}
                                            className="mx-auto"
                                        />
                                    )}
                                    {file && (
                                        <h6 className="text-base text-center">{file?.name}</h6>
                                    )}

                                    {/* <h6>{file ? file?.name : " Image not found"}</h6> */}
                                    {!file && (

                                        <div className="p-10 text-base   text-gray-300 p-5 rounded"

                                        >
                                            Upload Media

                                        </div>
                                    )}

                                </label>

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