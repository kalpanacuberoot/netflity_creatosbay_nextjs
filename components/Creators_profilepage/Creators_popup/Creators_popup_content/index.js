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
import { apiCall, url } from "@/generalfunctions";
import { Router, useRouter } from "next/router";

const Creators_popup_content = () => {

    const router = useRouter();

    const [imageCount, setImageCount] = useState(1);
    const [videoCount, setVideoCount] = useState(0);
    const [isOpen, setIsopen] = useState(false);
    const [isToggled, setIsToggled] = useState(true);
    const [loading, setLoading] = useState(false);

    const handleSubmit = async () => {
        setLoading(true)
        const cookieValue = JSON.parse(Cookies.get('user_data'));
        console.log('categories cookieValue------------1', cookieValue?.token);
        const campaign_id = JSON.parse(Cookies.get('campaign_id'));
        // const creator_id = JSON.parse(Cookies.get('creator_id'));
        const creator_profile_id = JSON.parse(Cookies.get('creator_profile_id'));
        const creator_name = JSON.parse(Cookies.get('creator_name'));
        const campaign_name = JSON.parse(Cookies.get('campaign_name'));


        // e.preventDefault();
        console.log("imageCount", imageCount, videoCount, campaign_id, creator_profile_id);
        try {


            const postData = {
                "campaign_id": campaign_id,
                "creator_id": creator_profile_id,
                "image_count": imageCount,
                "video_count": videoCount,
                "approved": false
            };

            console.log('campaigncreators', postData);

            const headers = {
                'Authorization': `Bearer ${cookieValue?.token}`,
                // 'Content-Type': 'application/json',
                // 'Accept':'application/json',
            };

            const postResponse = await apiCall(`${url}/campaigncreators`, 'post', postData, headers);

            console.log('POST response campaigncreators-------------:', postResponse);
            if (postResponse?.status) {

                toast.success(`${creator_name} to the campaign ${campaign_name}`, {
                    position: 'top-center',
                    autoClose: 5000,
                });

                setIsopen(true);
                setLoading(false)
            } else {
                toast.error(message, {
                    position: 'top-center',
                    autoClose: 5000,
                });
                setLoading(false)
            }

        } catch (error) {
            toast.error('please register yourself or login again after sometime', {
                position: 'top-center',
                autoClose: 5000,
            });
        }
    };

    const onBack = () => {
        setLoading(true)
        router.push('/marketplace')
        setLoading(false)
    }

    const onCompleteProcess = () => {
        setLoading(true)
        router.push('/creator_amount')
        setLoading(false)
    }

    return (
        <>
            {loading ? ( // Show loader if loading is true
                <div className="w-full h-full flex items-center justify-center">
                    <Image
                        width={100}
                        height={100}
                        alt=""
                        src={Images.Loader}
                    />
                </div>
            ) : (
                <>

                    <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">

                        <ModalHeader />
                        <div className="space-y-6 container-fluid p-14 pb-5">
                            <div className="border rounded-lg px-10  text-start shadow-lg p-5">
                                {!isOpen &&
                                    <>

                                        <h3>How many images or videos this creator should create?</h3>
                                        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0 flex flex-row w-full items-center my-1">
                                            <label className="block text-gray-700 text-base mb-2 me-3" htmlFor="grid-first-name">
                                                Image
                                            </label>
                                            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-grey-500 rounded py-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                                id="grid-first-name"
                                                type="number"
                                                placeholder="0"
                                                value={imageCount}
                                                onChange={(e) => setImageCount(e.target.value)}
                                            />

                                        </div>
                                        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0 flex flex-row w-full items-center my-1">
                                            <label className="block text-gray-700 text-base mb-2 me-3" htmlFor="grid-first-name">
                                                Video
                                            </label>
                                            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-grey-500 rounded py-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                                id="grid-first-name"
                                                type="number"
                                                placeholder="0"
                                                value={videoCount}
                                                onChange={(e) => setVideoCount(e.target.value)}
                                            />

                                        </div>
                                        <Buttons
                                            buttoncss="font_size_24 leading-6 py-3 button_clr my-5"
                                            label={"Confirm Button"}
                                            onClick={() => handleSubmit()}
                                        />
                                    </>
                                }

                                {isOpen &&
                                    <>
                                        <h3>Do you want to add another creator to this campaign?</h3>
                                        <div className="py-3">
                                            <Buttons
                                                label={"Yes, Add Another"}
                                                onClick={() => onBack()}
                                                buttoncss={"my-2 font_size_24 leading-6 py-3 button_clr my-5"}
                                            />
                                            <Buttons
                                                label={"No, complete process"}
                                                onClick={() => onCompleteProcess()}
                                                buttoncss={"my-2 font_size_24 leading-6 py-3 button_clr my-5 "} />
                                        </div>
                                    </>
                                }

                            </div>
                        </div>
                        <ToastContainer />
                    </div>
                </>
            )}
        </>
    )
}

export default Creators_popup_content