import React, { useState } from "react";
import Link from "next/link";
import Colors from "@/styles/Colors";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
import Cookies from 'js-cookie';
import Image from "next/image";
import Images from "@/images";
import { apiCall, url } from "@/generalfunation";
import { useRouter } from "next/router";

const Loginpage = () => {

    const router = useRouter();

    const [data, setData] = useState({ message: '' });
    const [isModalOpen_terms_service, setIsModalOpen_terms_service] = useState(false);
    const [brand_user, setBrand_user] = useState([]);
    const [loading, setLoading] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [brandData, setBrandData] = useState([]);

    const handleSubmit = async (e) => {

        e.preventDefault();
        setLoading(true)
        try {

            const postData = {
                "email": email,
                "password": password,
            };
            const postResponse = await apiCall(`${url}/login`, 'post', postData);

            console.log('POST response register-------------:', postResponse);

            if (postResponse?.message) {
                console.log('POST response register-------------:', postResponse.user.type);
                Cookies.set('creator_user_data', JSON.stringify(postResponse));
                toast.success(postResponse?.message, {
                    position: 'top-center',
                    autoClose: 5000,
                });
                //     router.push('/creator_form');
                // if (postResponse.user.type === 'creator') {
                //     Cookies.set('creator_user_data', JSON.stringify(postResponse));
                //     toast.success(postResponse?.message, {
                //         position: 'top-center',
                //         autoClose: 5000,
                //     });
                //     router.push('/creator_form');
                // }

            } else {
                toast.error("Have you register yourself with emailId", {
                    position: 'top-center',
                    autoClose: 5000,
                });
            }

        } catch (error) {
            toast.error('please register yourself or login again after sometime', {
                position: 'top-center',
                autoClose: 5000,
            });
        }
    };


    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };


    return (
        <>


            <div
                className=" p-5 xl:p-10 lg:p-10 w-screen h-screen flex bg-zinc-100 items-center px-10"
            >
                <div className=" mx-auto max-w-3xl auto-col-max w-full">
                    <div className="flex justify-center  items-center px-10 ">
                        <div className="p-5  xl:p-10 lg:p-10  bg-white border-gray-300 border-solid w-full  rounded-lg border-1">
                            <h4>
                                Don&apos;t have an Account ?
                            </h4>
                            <h1 className="my-5  font-bold text-left text-gray-900   ">
                                Welcome back.
                            </h1>

                            <input
                                type="email"
                                id="email"
                                className=" focus:border-gray-100 focus:ring-gray-100 appearance-none border rounded-md w-full mt-5 bg-gray-100  py-5 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                placeholder="Email"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}

                            />

                            <div className="flex items-center relative">
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    id="password"
                                    className=" focus:border-gray-100 focus:ring-gray-100 appearance-none border rounded-md w-full mt-5 bg-gray-100  py-5 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    placeholder="Password"
                                    required
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    pattern="^.{8,}$" title="Minimum 8 characters allowed"
                                />
                                <button
                                    className="absolute text-black rounded-r-md p-5 pb-0 right-0"
                                    onClick={togglePasswordVisibility}
                                >

                                    {showPassword ?
                                        <Image
                                            src={Images.show_eye}
                                            width={20}
                                            height={20}
                                            alt=""
                                        />
                                        :
                                        <Image
                                            src={Images.hide_eye}
                                            width={20}
                                            height={20}
                                            alt=""
                                        />
                                    }
                                </button>
                            </div>

                            <div className=" flex my-5 justify-between font_size_16">
                                <div className="flex items-center">
                                    <input
                                        type="checkbox"
                                        id="myCheckbox"
                                        className="form-checkbox h-5 w-5 "
                                        style={{ backgroundColor: Colors.logo_clr }}
                                    />
                                    <label htmlFor="myCheckbox" className=" ml-2 text-black" style={{ transform: 'none' }}>
                                        Remember Me
                                    </label>
                                </div>

                                {" "}
                                <button
                                    className=" float-right "
                                    style={{ color: Colors.pink_clr }}
                                    onClick={() => router.push('/forgot')}
                                >
                                    Forgot Password ?
                                </button>

                            </div>
                            <button
                                type="submit"
                                className=" rounded-3xl  text-white w-full py-3 px-4 focus:outline-none focus:shadow-outline"
                                style={{ background: Colors.logo_clr }}
                                onClick={handleSubmit}
                            >
                                Login
                            </button>
                            <ToastContainer />
                        </div>
                    </div>
                </div>
            </div>


        </>
    );
};

export default Loginpage;
