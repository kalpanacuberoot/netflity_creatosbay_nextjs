import React, { useState, useEffect } from 'react';
import { apiCall } from "@/generalfunctions";
import Colors from "@/styles/Colors";
import Link from "next/link";
import { useRouter } from 'next/navigation';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
import Terms_of_service from '@/components/Homepage/Termsofservice';
import Terms_of_service_content from '@/components/Homepage/Termsofservice/Terms_of_service_content';
import Cookies from 'js-cookie';
import Image from 'next/image';
import Images from '@/images';
import Modal_onboarding_screens from '../Modal_onboarding_screens';
import Onbording_content from '../Modal_onboarding_screens/Onbording_content';
import Tab1 from '../Modal_onboarding_screens/Tab1';
import Tab2 from '../Modal_onboarding_screens/Tab2';
import Tab3 from '../Modal_onboarding_screens/Tab3';

const Signuppage = () => {

    const router = useRouter();

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [passwordsMatch, setPasswordsMatch] = useState(true);
    const [isModalOpen_terms_service, setIsModalOpen_terms_service] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [showconfirmPassword, setShowconfirmPassword] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);


    const openModal = () => {
        setIsModalOpen(true);
    };

    // useEffect(() => {
    //     const hasSeenModal = Cookies.get('hasSeenModal');

    //     if (!hasSeenModal) {
    //         setIsModalOpen(true);

    //         // Set a cookie to indicate that the user has seen the modal
    //         Cookies.set('hasSeenModal', true, { path: '/' });
    //     }
    //     // openModal();
    //     // setIsModalOpen(true)
    // }, [])

    const closeModal = () => {
        setIsModalOpen(false);
        router.push('/brand')
    };

    const onRemoveCookies = () =>{
        
        router.push('/brand')
    }   

    const tabs = [
        {
            title: '',
            content: <Tab1 onSkipClick={closeModal} />,
        },
        {
            title: '',
            content: <Tab2 onSkipClick={closeModal} />,
        },  
        {
            title: '',
            content: <Tab3 onRemoveCookies={onRemoveCookies}/>,
        },
    ];


    const handleRegisterSubmit = async (e) => {
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
                const hasSeenModal = Cookies.get('hasSeenModal');

                if (!hasSeenModal) {
                    setIsModalOpen(true);

                    // Set a cookie to indicate that the user has seen the modal
                    Cookies.set('hasSeenModal', true, { path: '/' });
                }
                Cookies.set('user_data', JSON.stringify(result), { expires: 106500 });
                toast.success('Registration Successfully', {
                    position: 'top-center', // Set the toast position
                    autoClose: 3000, // Close the toast after 3 seconds
                });
                setTimeout(() => {
                    // Your code to execute after 5 minutes
                    setIsModalOpen(true);   
                    router.push('/brand')
                    console.log('Function executed after 5 minutes');
                }, 300000); // 300,000 milliseconds = 5 minutes


                console.log('register result------------', result);
                // alert('', result.message); 


            } else {
                console.error('Error:', response?.statusText);
                toast.error('Please enter the UniqueID', {
                    position: 'top-center', // Set the toast position
                    autoClose: 3000, // Close the toast after 3 seconds
                });
                // alert('register api response else', response.statusText)
            }
        } catch (error) {
            console.error('Error:', error);
            toast.error('Please enter the UniqueID', {
                position: 'top-center', // Set the toast position
                autoClose: 3000, // Close the toast after 3 seconds
            });
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

    // showw password
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };
    // end show password

    // show confirm password
    const toggleConfirmPasswordVisibility = () => {
        setShowconfirmPassword(!showconfirmPassword)
    }
    // end show confirm password

    return (
        <>
            <Modal_onboarding_screens isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
                <div className="relative w-full max-w-4xl max-h-full min-w-xl min-h-0">

                    <Onbording_content tabs={tabs} isOpen={isModalOpen} onClose={closeModal} />
                </div>
            </Modal_onboarding_screens>
            <Terms_of_service isOpen={isModalOpen_terms_service} onClose={() => setIsModalOpen_terms_service(false)}>
                <div className="relative w-full max-w-4xl max-h-full min-w-3xl">

                    <Terms_of_service_content />
                </div>
            </Terms_of_service>
            <div className="container p-5 xl:p-10 lg:p-10 border-gray-300 border-solid  bg-zinc-100  rounded-lg border-1">
                <div className="bg-white p-5 rounded-md  xl:p-10 lg:p-10">
                    <h4 className=" text-base">
                        {" "}
                        Already a member ?{" "}
                        <span
                            className="shadow-lg  bg-purple-100 text-purple-800 font-bold mr-2 px-2.5 py-1 rounded dark:bg-gray-700 dark:text-purple-400 border border-purple-400"
                            style={{ color: Colors.logo_clr }}
                        >
                            {" "}
                            <Link href={"/login"}>Login </Link>
                        </span>
                    </h4>
                    <h1 className="mt-5 mb-5  font-bold text-left text-gray-900   ">
                        Create New Account.
                    </h1>

                    <form 
                    onSubmit={handleRegisterSubmit}
                    >
                        <div className="flex">
                            <input
                                type="text"
                                id="first_name"
                                className=" focus:border-purple-500 focus:ring-purple-500 appearance-none border rounded-md w-full py-5 bg-gray-100 px-3 mr-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                placeholder="First Name"
                                required
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                                pattern="[a-zA-Z ]{3,190}" title="Only Alphabets and Spaces are allowed. Minimum characters 3"
                            />
                            <input
                                type="text"
                                id="last_name"
                                className=" focus:border-purple-500 focus:ring-purple-500 appearance-none border rounded-md w-full ml-2 py-5 bg-gray-100 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                placeholder="Last Name"
                                required
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                                pattern="[a-zA-Z ]{3,190}" title="Only Alphabets and Spaces are allowed. Minimum characters 3"
                            />
                        </div>
                        <input
                            type="email"
                            id="email"
                            className=" focus:border-purple-500 focus:ring-purple-500 appearance-none border rounded-md w-full mt-5 bg-gray-100  py-5 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            placeholder="Email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <div className='flex items-center relative'>
                            <input
                                type={showPassword ? 'text' : 'password'}
                                id="password"
                                className=" focus:border-purple-500 focus:ring-purple-500 appearance-none border rounded-md w-full mt-5 bg-gray-100  py-5 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                placeholder="Create Password"
                                required
                                value={password}
                                // onChange={(e) => setPassword(e.target.value)}
                                onChange={handlePasswordChange}
                                pattern="^.{8,}$" title="Minimum 8 characters allowed"
                            />
                            <button
                                className="absolute text-black rounded-r-md p-5 pb-0 right-0"
                                onClick={togglePasswordVisibility}
                            >
                                {/* {showPassword ? 'Hide' : 'Show'} */}
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

                        <div className='flex items-center relative'>
                            <input
                                type={showconfirmPassword ? 'text' : 'password'}
                                id="confirm_password"
                                className=" focus:border-purple-500 focus:ring-purple-500 appearance-none border rounded-md w-full mt-5 bg-gray-100  py-5 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                placeholder="Confirm Password"
                                value={confirmPassword}
                                required
                                // onChange={(e) => setPasswordsMatch(e.target.value)}
                                onChange={handleConfirmPasswordChange}
                            />
                            <button
                                className="absolute text-black rounded-r-md p-5 pb-0 right-0"
                                onClick={toggleConfirmPasswordVisibility}
                            >
                                {/* {showPassword ? 'Hide' : 'Show'} */}
                                {showconfirmPassword ?
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
                                    I accept Creatorsbay{" "}

                                </label>
                                <span style={{ color: Colors.pink_clr }}
                                    onClick={() => setIsModalOpen_terms_service(true)}
                                    className='ms-2 cursor-pointer'
                                >
                                    {" "}
                                    terms & conditions
                                </span>
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
                            // onClick={handleRegisterSubmit}
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