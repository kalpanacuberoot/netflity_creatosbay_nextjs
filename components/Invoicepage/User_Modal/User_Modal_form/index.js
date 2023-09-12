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

const User_Modal_form = () => {

    const router = useRouter();

    const [formData, setFormData] = useState({
        // Initialize formData with default values
        firstname: '',
        lastname: '',
        email: '',
        phone: '',
        address_1: '',
        address_2: '',
        city: '',
        state: '', // Assuming 'Uttar Pradesh' is the default state
        pincode: '',
        gstin: '',
    });

    const handlePayClick = () => {
        // Log the formData to the console
        console.log('formData', formData);

        // You can also submit the hidden form here if needed
        // document.getElementById('payment_form').submit();
        const paymentForm = document.getElementById('payment_form');

        // Serialize the form data into an object
        const formDataObject = {};
        const formDataArray = new FormData(paymentForm);

        for (const [key, value] of formDataArray.entries()) {
            formDataObject[key] = value;
        }

        // Log the serialized form data to the console
        console.log('formDataObject', formDataObject);

        // You can also submit the hidden form here if needed
        // paymentForm.submit();
    };

    // Get below details from cookies
    const campaign_id = 5;
    const campaign_name = "Social Media 2023";

    // Get below details from calculation
    const amount = 1000;

    // Get below details from form
    const firstname = ''; // Initialize as empty string (we'll update this in useEffect)
    const lastname = ''; // Initialize as empty string (we'll update this in useEffect)
    const email = ''; // Initialize as empty string (we'll update this in useEffect)
    const phone = ''; // Initialize as empty string (we'll update this in useEffect)
    const address_line_1 = ''; // Initialize as empty string (we'll update this in useEffect)
    const address_line_2 = ''; // Initialize as empty string (we'll update this in useEffect)
    const city = ''; // Initialize as empty string (we'll update this in useEffect)
    const state_element = ''; // Initialize as empty string (we'll update this in useEffect)
    const pincode = ''; // Initialize as empty string (we'll update this in useEffect)
    const gstin = ''; // Initialize as empty string (we'll update this in useEffect)

    // Get below details from env (replace with your actual environment variables)
    const key = "rAI8gg";
    const salt = "MIIEwAIBADANBgkqhkiG9w0BAQEFAASCBKowggSmAgEAAoIBAQDYOj+2W8ND8u00fYhV7ghwuBByDNJmDCIg7WzQE+SOBgOpARj7X8UOMr8idZCTbt+o898gObxNz8nNe4pBxLhJkMwaX3sHEgM9bDxkcOz7+RfZHnw41Bpair/1nTBaRBIgDNIzdPfOdxyET50oof/qrL9L4qpISXy/NiDSLgtOZcF6mev+zP+1FiklEXCu2IsqHVwyMMt7ynwS27t3m+ZliMKsPdXL5X0JrKD8TtchrNBzAphJctpQAjgNOL/+VUpHLQeQcks+0O1i/oXqiJ64akHumoGkFHRNaMdbmlUxgp7npmSjMnyCi9O3crcsZEFlyKSx0AwI3E7qgBu1Kz13AgMBAAECggEBAMJwVtywVb4jlESwYcoL29Eo47j7aLPVU1dSyZevW8aPB/mRABsD+tqSrafaGmFJwZxXeJys7nT2Vl0OK7yKnsGgkLlihOpNu1Yfn4setSy8yUI4FLKxoOUsggPnDxUMw1PI07jsBO7H03/za7qfOteX8gnWURPh6Wi0zvzR5N7gIIPVXj9xCHG6lgbr+bBQe5ranW7QUleDcVImpGtJUZAdI3fYmYQujePTWlyEc9nTUCdgA9lV7w27p5pnqzQfrJJq86P5RZHUNEw6GV5I0pw2hAPJQ1fIaB4vLEZhQ9Y3lExwznG8AC1gzu9U92PqhZRTM8U8jEpVXmHelHun5kECgYEA9UAEYYXvj5dqgS9xm71fb+nUvKsiv3KPWEWDvQWpgI6ITsUhoK7dGHURs/FmhoSKvuUVk1ebdao6ShKaMhRuZ4NmtoVqJOZ3rWzXomi3NjCEZ7h97SCPnMbz5QD/y+PK8+Rk0NvC44v9hQas9TORtNDAsLBm1Ck7DhQf4KIcL+ECgYEA4bSQ753fukoPlagGTVi+nSH6xS7f24PmWOq9OfYezmrxnaFoTFvQqhuI62sl0rnVJqQgexAcWMbweWjkkAaV1p1KJlsSvgMzPo+YPHtblrg0vKZTqi5V95XI9Wz3ps4shps0tOzUrS2UkMut29K3z2jc8q3ACa5NRyXoqJnV+FcCgYEAq8PmTZdMrTjTMx9TZkw/p1YR1QHXGFbX5m7pUV3B1XP+K40NfEh8OUDk4S5VLClwMzqm3cch7ksHABH/RMvid0Ukjvjp2mY/s4rji6/jgWSBl1MzfvyrGJaPAvisLtSftClmIpGH8W5+ZMjEIge4KPd7vUQPANDPt5CIsv9W1oECgYEAiL3VpWZXekyOXpP6pXejnB1PCZGZjCvALZSh6fDDvzkpgt+cCc8Cf1zJOh+jPaTaj1uWVhhvpBV68YNsHhnvQ6PtnYlFtJrJvBhRGit+VLTrNnPqcks6SBKWOqK283croK19ZDOrsfPQc10CyxBBzkXwvpInq3XPWdCMwUDaUmcCgYEAsiAOPU/0U3+zdHhzmUUTCIoQlm4gltNXmu1QuDruOdxDrhFNAVSkwhBD/IrwY6LRBOtAhk5oyakAZ1xw6GXZ24w1xH32DXoSWzYJSCFveFnwoSiLusvjn4isQls2FuFZR8uGuKg1+SZMOQ0EloGfgwfikP+Tu73HDMoPPsqQqqU=";
    const payu_url = "https://test.payu.in/_payment";
    const site_url = "staging.creatorsbay.app"

    // Generate below data
    const state_text = ''; // Initialize as empty string (we'll update this in useEffect)
    const transation_id = md5(campaign_id).toString();
    const productinfo = `Campaign: ${campaign_name}`;
    const surl = `https://${site_url}/payment-success`;
    const furl = `https://${site_url}/payment-failure`;
    const curl = `https://${site_url}/payment-cancelled`;
    const udf1 = campaign_id;
    const udf2 = gstin;
    const udf3 = pincode;
    const udf4 = '';
    const udf5 = '';

    const hash = sha512([
        key ?? '',
        transation_id ?? '',
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
    ].join('|')).toString()

    // Get this as fixed values;
    const country = "India";
    const api_version = 1;

    useEffect(() => {
        // Access form field values when needed (e.g., on form submission)
        const firstname = document.getElementById('first_name').value;
        const lastname = document.getElementById('last_name').value;
        const email = document.getElementById('email_id').value;
        const phone = document.getElementById('phone_number').value;
        const address_line_1 = document.getElementById('address_line_1').value;
        const address_line_2 = document.getElementById('address_line_2').value;
        const city = document.getElementById('city_name').value;
        const state_element = document.getElementById('state_name');
        const pincode = document.getElementById('pin_code').value;
        const gstin = document.getElementById('gstin').value;
        const state_text = state_element.options[state_element.selectedIndex].text;

        console.log('Firstname:', firstname);
        console.log('Lastname:', lastname);
        console.log('Email:', email);
        console.log('Phone:', phone);
        console.log('Address Line 1:', address_line_1);
        console.log('Address Line 2:', address_line_2);
        console.log('City:', city);
        console.log('State:', state_text);
        console.log('Pincode:', pincode);
        console.log('GSTIN:', gstin);
    }, []);

    // const handlePayClick = () => {
    //     // Set PAYU URL (This should be done using React state)
    //     // Example: setPayuUrl(payu_url);

    //     // You can also update other form field values here
    // }

    return (
        <>

            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">

                <ModalHeader />

                <div className="space-y-6 container-fluid p-14 ">
                    <div className="border rounded-lg p-10 h-96 text-center shadow-lg  overflow-y-auto">

                        <input
                            id="first_name"
                            type="text"
                            name="firstname"
                            className=" focus:border-purple-500 focus:ring-purple-500 appearance-none border rounded-md w-full py-5 bg-gray-100 px-3 mr-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"

                            value={formData.firstname}
                            onChange={(e) => setFormData({ ...formData, firstname: e.target.value })}
                        />
                        <input id="last_name" type="text" name="lastname"

                            value={formData.lastname}
                            onChange={(e) => setFormData({ ...formData, lastname: e.target.value })}
                            className=" focus:border-purple-500 focus:ring-purple-500 appearance-none border rounded-md w-full py-5 bg-gray-100 px-3 mr-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                        <input id="email_id" type="email" name="email"

                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className=" focus:border-purple-500 focus:ring-purple-500 appearance-none border rounded-md w-full py-5 bg-gray-100 px-3 mr-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                        <input id="phone_number" type="number" name="phone"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            className=" focus:border-purple-500 focus:ring-purple-500 appearance-none border rounded-md w-full py-5 bg-gray-100 px-3 mr-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                        <input id="address_line_1" type="text" name="address_1"
                            value={formData.address_1}
                            onChange={(e) => setFormData({ ...formData, address_1: e.target.value })}
                            className=" focus:border-purple-500 focus:ring-purple-500 appearance-none border rounded-md w-full py-5 bg-gray-100 px-3 mr-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                        <input id="address_line_2" type="text" name="address_2"
                            value={formData.address_2}
                            onChange={(e) => setFormData({ ...formData, address_2: e.target.value })}
                            className=" focus:border-purple-500 focus:ring-purple-500 appearance-none border rounded-md w-full py-5 bg-gray-100 px-3 mr-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                        <input id="city_name" type="text" name="city"
                            value={formData.city}
                            onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                            className=" focus:border-purple-500 focus:ring-purple-500 appearance-none border rounded-md w-full py-5 bg-gray-100 px-3 mr-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                        <select id="state_name" name="state" value=""
                            className=" focus:border-purple-500 focus:ring-purple-500 appearance-none border rounded-md w-full py-5 bg-gray-100 px-3 mr-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        >
                            <option value="">Select State</option>
                            <option value="26" selected>Uttar Pradesh</option>
                        </select>
                        <input id="pin_code" type="number" name="pincode"
                            value={formData.pincode}
                            onChange={(e) => setFormData({ ...formData, pincode: e.target.value })}
                            className=" focus:border-purple-500 focus:ring-purple-500 appearance-none border rounded-md w-full py-5 bg-gray-100 px-3 mr-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                        <input id="gstin" type="text" name="gstin"
                            value={formData.gstin}
                            onChange={(e) => setFormData({ ...formData, gstin: e.target.value })}
                            className=" focus:border-purple-500 focus:ring-purple-500 appearance-none border rounded-md w-full py-5 bg-gray-100 px-3 mr-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />

                        <button onClick={handlePayClick}>Pay</button>

                        <form id="payment_form" action="" method="post">

                            <input
                                type="hidden"
                                name="key"
                                id="key"
                                value=""

                            />
                            <input type="hidden" name="txnid" id="txnid" value="" />
                            <input type="hidden" name="productinfo" id="productinfo" value="" />
                            <input type="hidden" name="amount" id="amount" value="" />
                            <input type="hidden" name="email" id="email" value={formData.email} />
                            <input type="hidden" name="firstname" id="firstname" value={formData.firstname} />
                            <input type="hidden" name="surl" id="surl" value="" />
                            <input type="hidden" name="furl" id="furl" value="" />
                            <input type="hidden" name="phone" id="phone" value={formData.phone} />
                            <input type="hidden" name="hash" id="hash" value="" />


                            <input type="hidden" name="api_version" id="api_version" value="" />
                            <input type="hidden" name="lastname" id="lastname" value={formData.lastname} />
                            <input type="hidden" name="address1" id="address1" value={formData.address_1} />
                            <input type="hidden" name="address2" id="address2" value={formData.address_2} />
                            <input type="hidden" name="city" id="city" value={formData.city} />
                            <input type="hidden" name="state" id="state" value="" />
                            <input type="hidden" name="country" id="country" value="" />
                            <input type="hidden" name="pincode" id="pincode" value={formData.pincode} />
                            <input type="hidden" name="curl" id="curl" value="" />
                            <input type="hidden" name="udf1" id="udf1" value="" />
                            <input type="hidden" name="udf2" id="udf2" value="" />
                            <input type="hidden" name="udf3" id="udf3" value="" />
                            <input type="hidden" name="udf4" id="udf4" value="" />
                            <input type="hidden" name="udf5" id="udf5" value="" />
                            {/* <input type="submit" value="Pay" /> */}
                        </form>
                        {/* <div className="py-3">
                            <Buttons
                                buttoncss="font_size_24 leading-6 py-3 button_clr my-3"
                                label={"Pay"}
                            />

                        </div> */}
                        {/* <input
                            type="text"
                            name="firstname"
                            id="first_name"
                            value={formData.firstname}
                            onChange={(e) => setFormData({ ...formData, firstname: e.target.value })}
                        />
                        

                        <button onClick={handlePayClick}>Pay</button>

                        <form id="payment_form" action="" method="post">
                           
                            <input type="hidden" name="key" id="key" value={formData.firstname} />
                           
                        </form> */}
                    </div>

                </div>
                <ToastContainer />

            </div>
        </>
    )
}

export default User_Modal_form