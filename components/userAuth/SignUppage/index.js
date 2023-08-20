import React, { useState, useEffect } from 'react';
import { apiCall } from "@/generalfunation";
import Colors from "@/styles/Colors";
import Link from "next/link";
import { useRouter } from 'next/navigation';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 
import { toast } from 'react-toastify';

const Signuppage = () => {

    const router = useRouter();

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [passwordsMatch, setPasswordsMatch] = useState(true);


    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     try {
    //         // const getResponse = await apiCall('https://jsonplaceholder.typicode.com/posts/1', 'get');
    //         // console.log('GET response:', getResponse);

    //         const postData = { name: `${firstName} ${lastName}`, email: email, password: password, type: "brand" };
    //         const postResponse = await apiCall('https://backend.creatorsbay.app/api/register', 'post', postData);
    //         console.log('POST response register-------------:', postResponse);
    //         const usertoken = localStorage.setItem('user_data', JSON.stringify(postResponse.token));
    //     } catch (error) {
    //         console.error('POST response register catrch error-------------', error);
    //     }
    // };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const options = {
            "name": `${firstName} ${lastName}`,
            "email": email,
            "password": password,
            "type": "brand"
        }
        try {
            const response = await fetch('https://backend.creatorsbay.app/api/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },

                body: JSON.stringify(options),
            });

            console.log('register response------', response)

            if (response.ok) {
                const result = await response.json();

                const usertoken = localStorage.setItem('user_data', JSON.stringify(result.token));
                toast.success('Registration Successfully', {
                    position: 'top-center', // Set the toast position
                    autoClose: 3000, // Close the toast after 3 seconds
                  });
                router.push('/home');
                console.log('register result------------', result);
                // alert('', result.message); 
                

            } else {
                console.error('Error:', response.statusText);
                alert('register api response else', response.statusText)
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };


    const handlePasswordChange = (e) => {
        const newPassword = e.target.value;
        setPassword(newPassword);

        // Check if passwords match
        setPasswordsMatch(newPassword === confirmPassword);
    };

    const handleConfirmPasswordChange = (e) => {
        const newConfirmPassword = e.target.value;
        setConfirmPassword(newConfirmPassword);

        // Check if passwords match
        setPasswordsMatch(password === newConfirmPassword);
    };

    return (
        <>
            <div className="container p-4 lg:p-10 border-gray-300 border-solid  bg-zinc-100  rounded-lg border-1">
                <div className="bg-white p-5 rounded-md">
                    <h4 className=" text-base">
                        {" "}
                        Already a member ?{" "}
                        <span
                            className="  pl-3 font-bold"
                            style={{ color: Colors.logo_clr }}
                        >
                            {" "}
                            <Link href={"/login"}>Login </Link>
                        </span>
                    </h4>
                    <h1 className="mt-0 mb-5  font-bold text-left text-gray-900   ">
                        Create New Account.
                    </h1>

                    <form onSubmit={handleSubmit}>
                        <div className="flex">
                            <input
                                type="text"
                                id="name"
                                className="appearance-none border rounded-md w-full py-5 bg-gray-100 px-3 mr-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                placeholder="First Name"
                                required
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}

                            />
                            <input
                                type="text"
                                id="name"
                                className="appearance-none border rounded-md w-full ml-2 py-5 bg-gray-100 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                placeholder="Last Name"
                                required
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                            />
                        </div>
                        <input
                            type="email"
                            id="name"
                            className="appearance-none border rounded-md w-full mt-5 bg-gray-100  py-5 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            placeholder="exampl@123.com"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <input
                            type="password"
                            id="name"
                            className="appearance-none border rounded-md w-full mt-5 bg-gray-100  py-5 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            placeholder="Create Password"
                            required
                            value={password}
                            // onChange={(e) => setPassword(e.target.value)}
                            onChange={handlePasswordChange}
                        />
                        <input
                            type="password"
                            id="name"
                            className="appearance-none border rounded-md w-full mt-5 bg-gray-100  py-5 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            placeholder="Confirm Password"
                            value={confirmPassword}
                            required
                            // onChange={(e) => setPasswordsMatch(e.target.value)}
                            onChange={handleConfirmPasswordChange}
                        />
                        {!passwordsMatch && <p>Passwords do not match</p>}
                        <div className=" flex my-5 justify-between">
                            <div className="flex items-center">
                                <input
                                    type="checkbox"
                                    id="myCheckbox"
                                    className="form-checkbox h-5 w-5 "
                                    style={{ backgroundColor: Colors.logo_clr }}
                                    required
                                />
                                <label htmlFor="myCheckbox" className="ml-2 text-black">
                                    I accept co. Name{" "}
                                    <span style={{ color: Colors.pink_clr }}>
                                        {" "}
                                        Terms & Condition
                                    </span>
                                </label>
                            </div>
                            <Link href={"/forgot"}>
                                <button
                                    className="  float-right"
                                    style={{ color: Colors.pink_clr }}
                                >
                                    {" "}
                                    Forgot Password ?
                                </button>
                            </Link>
                        </div>
                        {/* <Link href={'/brand'}> */}
                        <button
                            // onClick={handleGetStarted}
                            type="submit"
                            className=" rounded-3xl  text-white w-full py-3 px-4  focus:outline-none focus:shadow-outline"
                            style={{ background: Colors.logo_clr }}
                        >
                            Create Account
                        </button>
                        {/* </Link> */}
                    </form>
                    <ToastContainer />
                </div>
            </div>
        </>
    )
}

export default Signuppage