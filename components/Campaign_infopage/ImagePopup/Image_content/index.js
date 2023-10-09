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

const Image_content = ({ onPopupData,onClose }) => {

    const router = useRouter();

    const IMAGE_URL = "https://creatorsbay-media-bucket.s3.ap-south-1.amazonaws.com";

    const [file, setFile] = useState(null);
    const [description, setDescription] = useState('');
    const [name, setName] = useState('');
    const [previewImage, setPreviewImage] = useState(null);
    const refImage1 = useRef(null);


    const handleFileChange = (event) => {
        const selectedFile = event.target.files[0];

        console.log("product handleFileChange",selectedFile);
        if (selectedFile) {
            const reader = new FileReader();

            reader.onloadend = () => {
                setFile(selectedFile); 
                setPreviewImage(reader.result); 
            };
            reader.readAsDataURL(selectedFile);
        } else {
            setFile(null); 
            setPreviewImage(null); 
        }
    };



    console.log("fileslected product image", file);

    const handleSubmit = async () => {

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
                },
                body: formData,
            });

            console.log("response image data", response);

            if (response.ok) {
                const data = await response.json();
                setFile(data?.url)
                console.log("image response ok", data?.url);
                toast.success('Image Uploaded Successfully', {
                    position: 'top-center',
                    autoClose: 2000,
                });

                await sendDataToParent(data?.url);
            } 
            else if(response.status===413 ){
                toast.success('Image size is too large', {
                    position: 'top-center',
                    autoClose: 2000,
                });
            }
            else {

                toast.error('Image upload failed', {
                    position: 'top-center', 
                    autoClose: 3000, 
                });
            }
        } catch (error) {
            console.error('Error uploading image:', error);
            toast.error('Please uplaod the image again', {
                position: 'top-center', 
                autoClose: 3000, 
            });
        }
    };

    console.log("dfdsafdsfds", file);

    const sendDataToParent = async (imageUrl) => {

        const link = file;
        console.log('imgrddsa product popup----1', file, link)
        const data = [
            {
                link: imageUrl,
                description,
                name,
            },
        ]

        console.log("popupdata---", data);
        onPopupData(data);
        toast.success('Data is saved', {
            position: 'top-center', 
            autoClose: 3000, 
        });
        onClose();
    };



    return (
        <>

            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700 min-w-sm">

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
                                className=" focus:border-purple-500 focus:ring-purple-500 border-dotted h-48 align-middle border-4 rounded-lg bg-white py-4 px-6 flex flex-col items-center justify-center"
                                onChange={handleFileChange}
                            >
                                <label
                                    htmlFor="productfileInput"
                                    style={{ borderColor: Colors.logo_clr }}
                                    className="w-auto py-5"
                                >
                                    <div className="">
                                        <input
                                            id="productfileInput"
                                            type="file"
                                            accept="image/*"
                                            className="absolute w-screen hidden "
                                        />
                                        {!file && (
                                            <Image
                                                src={Images.plus_icon}
                                                width={15}
                                                height={15}
                                                alt=""
                                                className="mx-auto cursor-default m-5 mb-0"
                                            />
                                        )}
                                    </div>
                                    {previewImage && (
                                        <Image
                                            src={previewImage}
                                            alt="Selected"
                                            style={{ maxWidth: '100%', maxHeight: '300px' }}
                                            width={50}
                                            height={50}
                                            className="mx-auto"
                                        />
                                    )}
                                    {file && (
                                        <p className="text-base text-center">{file?.name}</p>
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
                            // onClick={sendDataToParent}
                            onClick={handleSubmit}
                        />
                    </div>
                </div>
                <ToastContainer />
            </div>
        </>
    )
}

export default Image_content
