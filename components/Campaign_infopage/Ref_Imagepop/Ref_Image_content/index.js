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

const Ref_Image_content = ({ refpopupData }) => {

    const IMAGE_URL = "https://creatorsbay-media-bucket.s3.ap-south-1.amazonaws.com";

    const [file2, setFile2] = useState(null);
    const [description, setDescription] = useState('');
    const [name, setName] = useState('');
    const [previewRefImage, setPreviewRefImage] = useState(null);
    const refImage2 = useRef(null);

    const handleRefFileChange = (event) => {
        const selectedRefFile = event.target.files[0];
        console.log("fileslected and ref", file2, selectedRefFile);
        if (selectedRefFile) {
            const reader = new FileReader();

            reader.onloadend = () => {
                setFile2(selectedRefFile); 
                setPreviewRefImage(reader.result); 
            };
            reader.readAsDataURL(selectedRefFile);

        } else {
            setFile2(null); 
            setPreviewRefImage(null); 
        }
    };

    console.log("fileslected and ref", file2);

    const handleRefUploadClick = async (refimageUrl) => {

        if (!file2) {
            alert('Please select an image to upload.');
            return;
        }

        const cookieValue = JSON.parse(Cookies.get('user_data'))
        console.log('categories cookieValue------------2', cookieValue?.token);

        const formData = new FormData();
        formData.append('file', file2);

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
                setFile2(data?.url)
                console.log("image response ok", data?.url);
                toast.success('Image Uploaded Successfully', {
                    position: 'top-center',
                    autoClose: 2000,
                });

                await sendRefDataToParent(data?.url);
            }
            else if (response.status === 413) {
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


    console.log("dftyftyfrefernce", file2);

    const sendRefDataToParent = async (refimageUrl) => {

        const link = file2;
        console.log('imgrddsa product popup----1', file2, link)

        console.log('imgrddsa product popup-----2', file2)

        const data = [
            {
                link: refimageUrl,
                description,
                name,
            },
        ]

        console.log("refpopupdata---", data);

        refpopupData(data);
        toast.success('Data is saved', {
            position: 'top-center', 
            autoClose: 3000, 
        });
        onClose();
        
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
                                placeholder="Reference Name"
                                required
                                value={name}
                                onChange={(e) => setName(e.target.value)}

                            />
                        </div>
                        <div className=" ">
                            <div
                                className=" border-dotted h-34 align-middle border-4 rounded-lg bg-white py-4 px-6 flex flex-col items-center justify-center"
                                onChange={handleRefFileChange}
                            >
                                <label
                                    htmlFor="reffileInput"
                                    style={{ borderColor: Colors.logo_clr }}
                                    className=" "
                                >
                                    <div className=" w-full text-center">
                                        <input
                                            id="reffileInput"
                                            type="file"
                                            accept="image/*"
                                            ref={refImage2}
                                            className="hidden absolute w-full"

                                        />
                                        {!file2 && (
                                            <Image
                                                src={Images.plus_icon}
                                                width={15}
                                                height={15}
                                                alt=""
                                                className="cursor-default mx-auto m-5 "
                                            />
                                        )}
                                    </div>
                                    {previewRefImage && (
                                        <Image
                                            src={previewRefImage}
                                            alt="Selected"
                                            style={{ maxWidth: '100%', maxHeight: '300px' }}
                                            width={50}
                                            height={50}
                                            className="mx-auto"
                                        />
                                    )}
                                    {file2 && (
                                        <h6 className="text-base text-center">{file2?.name}</h6>
                                    )}

                                    {!file2 && (

                                        <div className="p-10 text-base   text-gray-300 p-5 rounded"

                                        >
                                            Upload Media

                                        </div>
                                    )}
                                </label>

                            </div>

                        </div>
                        <textarea
                            // id="descriptionInput"
                            type="text"
                            placeholder="Reference Description"
                            className="appearance-none border rounded-md w-full align-top mt-5 bg-gray-100 h-40 py-5 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            rows={4}
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            required
                        ></textarea>
                        <Buttons
                            buttoncss="font_size_24 leading-6 py-3 button_clr my-5"
                            label={"Submit"}
                            onClick={handleRefUploadClick}
                            // onClick={handleRefUploadClick}
                        // onClick={sendRefDataToParent}
                        />
                    </div>
                </div>

            </div>
        </>
    )
}

export default Ref_Image_content