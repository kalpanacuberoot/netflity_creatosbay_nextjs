require('dotenv').config();
import Images from "@/images";
import Image from "next/image";

import Buttons from "@/components/Button";
import Colors from "@/styles/Colors";
import Cookies from "js-cookie";
import { apiCall, getApiCall, url } from "@/generalfunctions";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import ModalHeader from "@/components/Homepage/ModalHeader";
import md5 from 'crypto-js/md5';
import sha512 from 'crypto-js/sha512';


const Creators_form_content = () => {

    const router = useRouter();

    const [statesData, setStatesData] = useState([]);
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [address1, setAddress1] = useState('');
    const [address2, setAddress2] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [pincode, setPincode] = useState('');
    const [gstin, setGstin] = useState('');

   
    const key = process.env.NEXT_PUBLIC_PAYU_MERCHANT_KEY;   
    
    console.log("PAYU_MERCHANT_KEY", process.env.NEXT_PUBLIC_PAYU_MERCHANT_KEY);

    const salt = process.env.NEXT_PUBLIC_PAYU_MERCHANT_SALT2;
    const payu_url = process.env.NEXT_PUBLIC_PAYU_URL;
    
    // const site_url = "https://pro-coral-equally.ngrok-free.app/";
    const site_url = "https://staging.creatorsbay.app/";
    const country = "India";
    const api_version = 1;

    const campaign_id = Cookies.get('campaign_id');
    const campaign_name = Cookies.get('campaign_name');

    const amount = Cookies.get('firstAmountWithGST')

    // const amount = 590;

    console.log("PAYU_MERCHANT_KEY1", key);

    const txnid = md5(campaign_id).toString();
    const productinfo = `Campaign: ${campaign_name}`;
    const surl = `${site_url}payment-success`;
    const furl = `${site_url}payment-failure`;
    const curl = `${site_url}payment-cancelled`;
    const udf1 = campaign_id;
    const udf2 = gstin;
    const udf3 = pincode;
    const udf4 = '';
    const udf5 = '';

    let hash = '';

    
    const getAllStates = async () => {

        const cookieValue = JSON.parse(Cookies.get('user_data'))
        console.log('categories cookieValue------------1', cookieValue?.token);

        try {
            const requestOptions = {

                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${cookieValue?.token}` // Include the token if provided
                },
            }


            const response = await fetch(`${url}/states?per_page=40&sort=name&order=ASC`, requestOptions);
            console.log('states------', response)

            if (response.status === 401) {
                toast.error("Session Expired: Please login again to continue.", {
                    position: 'top-center',
                    autoClose: 5000,
                });

            } else if (response.status === 429) {
                toast.error("Too many requests: Please wait for a few minutes to try and login again.", {
                    position: 'top-center',
                    autoClose: 5000,
                });

                // showToastMessage("Too many requests: Please wait for a few minutes to try and login again.");
            } else if (response.status === 500) {
                toast.error("Server Error: Please wait while we fix this problem for you.", {
                    position: 'top-center',
                    autoClose: 5000,
                });

            } else if (!response.ok) {
                throw new Error(`Request failed with status: ${response.status}`);
            }

            // return await response.json();
            const responseData = await response.json();
            console.log('states response:', responseData?.data?.data);
            setStatesData(responseData?.data?.data);
        } catch (error) {
            console.error('Error:', error);
            throw error;
        }

    };

    useEffect(() => {
        getAllStates();
    }, []);


    function paybuttonClick(event) {
        const payment_form = document.getElementById('payment_form');

        // Prevent the default form submission behavior
        event.preventDefault();

        // Perform your task here
         hash = sha512([
                key ?? '',
                txnid ?? '',
                amount ?? '',
                productinfo ?? '',
                firstname ?? '',
                email ?? '',
                udf1 ?? '',
                udf2 ?? '',
                udf3 ?? '',
                udf4 ?? '',
                udf5 ?? '',
                '',
                '',
                '',
                '',
                '',
                salt ?? ''
            ].join('|')).toString();
         document.getElementById("hash").value=hash;
        console.log("hask valye0", hash,key);


        // task completed, submit the form
        payment_form.submit();
    };




    console.log("selected state", statesData);

    return (
        <>

            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">

                <ModalHeader />

                <div className="space-y-6 container-fluid p-14 ">

                    <div className=" border rounded-lg p-10  pt-3 text-center shadow-lg  overflow-y-auto">
                        <h1 className="font-bold my-5 text-xl">Billing Form</h1>
                        <div className="flex flex-row">
                            <input
                                id="first_name"
                                type="text"
                                name="firstname"
                                className=" focus:border-purple-500 focus:ring-purple-500 appearance-none border rounded-md w-full bg-gray-100 py-3 px-3 my-2 me-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                placeholder="First Name"
                                value={firstname}
                                onChange={(e) => setFirstname(e.target.value)}
                            />
                            <input id="last_name" type="text" name="lastname"
                                placeholder="Last Name"
                                value={lastname}
                                onChange={(e) => setLastname(e.target.value)}
                                className=" focus:border-purple-500 focus:ring-purple-500 appearance-none border rounded-md w-full bg-gray-100 py-3 px-3 my-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            />
                        </div>
                        <input id="email_id" type="email" name="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className=" focus:border-purple-500 focus:ring-purple-500 appearance-none border rounded-md w-full py-3 my-2 me-2 bg-gray-100 px-3 mr-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                        <select id="state_name" name="state"

                            onChange={(e) => setState(e.target.value)}
                            value={state}
                            className=" focus:border-purple-500 focus:ring-purple-500 appearance-none border rounded-md w-full py-3 bg-gray-100 px-3 my-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        >
                            <option value="" disabled>Select State</option>
                            {/* <option value="26" selected>Uttar Pradesh</option> */}
                            {statesData && statesData.map((item, index) => (
                                <option
                                    value={item?.name}
                                    key={index}
                                    defaultValue
                                >{item?.name}</option>
                            ))}
                        </select>
                        <div className="flex flex-row">
                            <input id="city_name" type="text" name="city"
                                placeholder="City"
                                value={city}
                                onChange={(e) => setCity(e.target.value)}
                                className=" focus:border-purple-500 focus:ring-purple-500 appearance-none border rounded-md w-full py-3 bg-gray-100 px-3 my-2 me-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            />
                            <input id="phone_number" type="number" name="phone"
                                placeholder="Phone No."
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                className=" focus:border-purple-500 focus:ring-purple-500 appearance-none border rounded-md w-full py-3 bg-gray-100 px-3  my-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            />
                        </div>

                        <div className="flex flex-row">
                            <input id="pin_code" type="number" name="pincode"
                                placeholder="Pincode"
                                value={pincode}
                                onChange={(e) => setPincode(e.target.value)}
                                className=" focus:border-purple-500 focus:ring-purple-500 appearance-none border rounded-md w-full py-3 bg-gray-100 px-3 my-2 me-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            />
                            <input id="gstin" type="text" name="gstin"
                                placeholder="Gstin"
                                value={gstin}
                                onChange={(e) => setGstin(e.target.value)}
                                className=" focus:border-purple-500 focus:ring-purple-500 appearance-none border rounded-md w-full py-3 bg-gray-100 px-3 my-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            />
                        </div>

                        <input id="address1" type="text" name="address_1"
                            placeholder="Address Line 1"
                            value={address1}
                            onChange={(e) => setAddress1(e.target.value)}
                            className=" focus:border-purple-500 focus:ring-purple-500 appearance-none border rounded-md w-full py-3 bg-gray-100 px-3 my-2 me-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                        <input id="address2" type="text" name="address_2"
                            placeholder="Address Line 2"
                            value={address2}
                            onChange={(e) => setAddress2(e.target.value)}
                            className=" focus:border-purple-500 focus:ring-purple-500 appearance-none border rounded-md w-full py-3 bg-gray-100 px-3 my-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />


                        <form id="payment_form" action="https://test.payu.in/_payment" method="post">

                            <input
                                type="hidden"
                                name="key"
                                id="key"
                                value={key}

                            />
                            <input type="hidden" name="txnid" id="txnid" value={txnid} />
                            <input type="hidden" name="productinfo" id="productinfo" value={productinfo} />
                            <input type="hidden" name="amount" id="amount" value={amount} />
                            <input type="hidden" name="email" id="email" value={email} />
                            <input type="hidden" name="firstname" id="firstname" value={firstname} />
                            <input type="hidden" name="surl" id="surl" value={surl} />
                            <input type="hidden" name="furl" id="furl" value={furl} />
                            <input type="hidden" name="phone" id="phone" value={phone} />
                            <input type="hidden" name="hash" id="hash" value={hash} />


                            <input type="hidden" name="api_version" id="api_version" value={api_version} />
                            <input type="hidden" name="lastname" id="lastname" value={lastname} />
                            <input type="hidden" name="address1" id="address1" value={address1} />
                            <input type="hidden" name="address2" id="address2" value={address2} />
                            <input type="hidden" name="city" id="city" value={city} />
                            <input type="hidden" name="state" id="state" value={state} />
                            <input type="hidden" name="country" id="country" value={country} />
                            <input type="hidden" name="pincode" id="pincode" value={pincode} />
                            <input type="hidden" name="curl" id="curl" value={curl} />
                            <input type="hidden" name="udf1" id="udf1" value={udf1} />
                            <input type="hidden" name="udf2" id="udf2" value={udf2} />
                            <input type="hidden" name="udf3" id="udf3" value={udf3} />
                            <input type="hidden" name="udf4" id="udf4" value={udf4} />
                            <input type="hidden" name="udf5" id="udf5" value={udf5} />
                            <input type="submit" value="Pay" className="font_size_24 leading-6 py-3 bg-purple-600 rounded-lg text-white my-3 w-full"
                                onClick={paybuttonClick}
                            />

                        </form>

                    </div>

                </div>
                <ToastContainer />

            </div>
        </>
    )
}

export default Creators_form_content