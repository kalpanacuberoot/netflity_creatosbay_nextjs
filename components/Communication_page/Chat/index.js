import { apiCall, url } from "@/generalfunctions";
import Colors from "@/styles/Colors";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';

const Chat = ({ creatorId, chatcreator_data }) => {

    const router = useRouter();

    const [allMessages, setAllMessages] = useState([]);
    const [messageSent, setMessageSent] = useState();

 


    const uniqueData = [];

    // Use an object to keep track of unique IDs
    const idSet = new Set();

    for (const item of creatorId) {
        const id = item.data;
        if (!idSet.has(id)) {
            idSet.add(id);
            uniqueData.push(item);
        }
    }

    console.log('uniqueDatastringWithoutBrackets', uniqueData);
    const stringWithoutBrackets = uniqueData.join(', ');
    console.log("chatcreator_data", stringWithoutBrackets, chatcreator_data);




    const getAllMessages = async () => {

        const cookieValue = JSON.parse(Cookies.get('user_data'));
        console.log('categories cookieValue------------1', cookieValue?.token);

        const campaign_id = JSON.parse(Cookies.get('campaign_id'));
        const apiUrl = process.env.API_URL + url; // Use the environment variable

        // const creatorId = JSON.parse(Cookies.get('brand_detail'))
        // console.log("brand detail creator_id", creatorId?.creator);

        const brand_detail = Cookies.get('brand_detail');
        const brandIds = Cookies.get('brand_id');

        let brandId = null;

        if (brand_detail) {
            try {
                brandId = JSON.parse(brand_detail)?.brand?.id;
            } catch (error) {
                console.error('Error parsing brand_detail:', error);
            }
        }

        if (!brandId && brandIds) {
            try {
                brandId = JSON.parse(brandIds);
            } catch (error) {
                console.error('Error parsing brand_ids:', error);
            }
        }
        console.log('brandId: all msg', brandId);

        try {


            const requestOptions = {

                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${cookieValue?.token}` // Include the token if provided
                },
            }

            const params = new URLSearchParams({
                brand: brandId,
                creator: stringWithoutBrackets,
            });


            const response = await fetch(`${url}/messages`, requestOptions);
            console.log('campaigns communication------', response)

            if (response.status === 401) {
                toast.error("Session Expired: Please login again to continue.", {
                    position: 'top-center',
                    autoClose: 5000,
                });
                router.push('/login');
            } else if (response.status === 429) {
                toast.error("Too many requests: Please wait for a few minutes to try and login again.", {
                    position: 'top-center',
                    autoClose: 5000,
                });
                router.push('/login');
                // showToastMessage("Too many requests: Please wait for a few minutes to try and login again.");
            } else if (response.status === 500) {
                toast.error("Server Error: Please wait while we fix this problem for you.", {
                    position: 'top-center',
                    autoClose: 5000,
                });
                router.push('/login');
            } else if (!response.ok) {
                throw new Error(`Request failed with status: ${response.status}`);
            }

            // return await response.json();
            const responseData = await response.json();
            console.log('all messages communication response:', responseData?.data);
            setAllMessages(responseData?.data?.data)

        } catch (error) {
            console.error('Error:', error);
            throw error;
        }

    };

    const handleSubmit = async (e) => {

        e.preventDefault();


        const cookieValue = JSON.parse(Cookies.get('user_data'));
        console.log('campaigns cookieValue------------1', cookieValue?.token);

        const brand_detail = Cookies.get('brand_detail');
        const brandIds = Cookies.get('brand_id');

        let brandId = null;

        if (brand_detail) {
            try {
                brandId = JSON.parse(brand_detail)?.brand?.id;
            } catch (error) {
                console.error('Error parsing brand_detail:', error);
            }
        }

        if (!brandId && brandIds) {
            try {
                brandId = JSON.parse(brandIds);
            } catch (error) {
                console.error('Error parsing brand_ids:', error);
            }
        }
        console.log('brandId:', brandId);

        try {

            const postData = {
                "brand_id": brandId,
                "campaign_id": 1,
                "creator_id": stringWithoutBrackets,
                "sender_type": "creator",
                "type": "text",
                "data": "I am fine."
            };
            const headers = {
                'Authorization': `Bearer ${cookieValue?.token}`,
            }
            const postResponse = await apiCall(`${url}/messages`, 'post', postData, headers);


            if (postResponse.status === 'success') {
                console.log('POST response campaigns-------------:', postResponse?.data);
                console.log('post messages communication response:', responseData);

                toast.success("Message is Sent", {
                    position: 'top-center',
                    autoClose: 5000,
                });

            } else {
                toast.error("Too many requests: Please wait for a few minutes to try and login again.", {
                    position: 'top-center',
                    autoClose: 5000,
                });

            }


        } catch (error) {
            console.log(error);
        }
    };


    useEffect(() => {
        
        getAllMessages();

    }, []);   // eslint-disable-next-line react-hooks/exhaustive-deps
    console.log("messages----", allMessages);


    return (
        <>

            <div className="px-5 py-10 h-full rounded  overflow-y-auto h-auto" style={{ backgroundColor: Colors.light_bg_clr }}>
                {allMessages.map((message, index) => {
                    const brand_type = JSON.parse(Cookies.get('user_data'));
                    console.log("chat brand_type", brand_type?.user?.type, message.sender_type);
                    const isBrandSender = message.sender_type === 'brand';
                    const isBrandReceiver = message.sender_type === 'creator';
                    const isLeftAlign = isBrandReceiver;
                    const isRightAlign = isBrandSender;

                    const messageClass = isLeftAlign ? 'left-message' : isRightAlign ? 'right-message' : '';
                    const textMessageClass = isLeftAlign ? 'left-text-message' : isRightAlign ? 'right-text-message' : '';

                    const isoDateString = message?.created_at;
                    const date = new Date(isoDateString);

                    const year = date.getFullYear();
                    const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Add 1 because months are zero-based
                    const day = date.getDate().toString().padStart(2, '0');
                    const hours = date.getHours().toString().padStart(2, '0');
                    const minutes = date.getMinutes().toString().padStart(2, '0');
                    const seconds = date.getSeconds().toString().padStart(2, '0');

                    const formattedDate = `${year}-${month}-${day}`;
                    const formattedTime = `${hours}:${minutes}:${seconds}`;

                    console.log("message Formatted Date:", formattedDate);
                    console.log("message Formatted Time:", formattedTime);
                    const timeString = "14:17:02";
                    const parts = timeString.split(':');
                    const twelvehours = parseInt(parts[0], 10);

                    let ampm = "AM";

                    if (twelvehours >= 12) {
                        ampm = "PM";
                    }

                    let twelveHourFormat = twelvehours;

                    if (twelvehours > 12) {
                        twelveHourFormat = twelvehours - 12;
                    }

                    const formattedtweleveTime = `${twelveHourFormat}:${parts[1]}:${parts[2]} ${ampm}`;

                    console.log("formattedtweleveTime Time:", formattedtweleveTime);



                    return (
                        <>
                            <div className="px-10" key={index}>
                                <div className={`chat-message shadow-lg ${messageClass}`}>
                                    {message?.data}

                                </div>
                                <p className={` ${textMessageClass}`} >{formattedtweleveTime}</p>
                            </div>
                        </>
                    )
                })}
            </div>
            <div className=" flex flex-col h-auto justify-end">
                <hr className="my-5" />
                <form className="flex items-center">
                    <label htmlFor="voice-search" className="sr-only">Search</label>
                    <div className="relative w-full overflow-y-auto">

                        <input type="text" id="voice-search"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-5 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Type something here......"
                        />
                        <button className="absolute inset-y-0 right-0 flex items-center pr-10">

                            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.408 7.5h.01m-6.876 0h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM4.6 11a5.5 5.5 0 0 0 10.81 0H4.6Z" />
                            </svg>
                        </button>
                        <button type="button" className="absolute inset-y-0 right-0 flex items-center pr-3">

                            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 12 20">
                                <path stroke="currentColor" strokeLinejoin="round" strokeWidth="2" d="M1 6v8a5 5 0 1 0 10 0V4.5a3.5 3.5 0 1 0-7 0V13a2 2 0 0 0 4 0V6" />
                            </svg>
                        </button>
                    </div>


                    <button
                        type="submit"
                        className="inline-flex items-center py-2.5 px-3 ml-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        onClick={(e) => handleSubmit(e)}
                    >
                        <svg className="w-4 h-4 rotate-90" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                            <path d="m17.914 18.594-8-18a1 1 0 0 0-1.828 0l-8 18a1 1 0 0 0 1.157 1.376L8 18.281V9a1 1 0 0 1 2 0v9.281l6.758 1.689a1 1 0 0 0 1.156-1.376Z" />
                        </svg>
                    </button>
                </form>
            </div>

        </>
    )
}

export default Chat