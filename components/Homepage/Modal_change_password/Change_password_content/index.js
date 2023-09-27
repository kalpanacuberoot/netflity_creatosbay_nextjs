import Colors from "@/styles/Colors";
import ModalHeader from "../../ModalHeader";
import { useState } from "react";
import Buttons from "@/components/Button";
import { apiCall, url } from "@/generalfunctions";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
import Cookies from "js-cookie";

const Change_password_content = () => {


    const [currentpassword, setCurrentpassword] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [passwordsMatch, setPasswordsMatch] = useState(true);


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

    const handleSubmit = async (e) => {

        e.preventDefault();

        const cookieValue = JSON.parse(Cookies.get('user_data'));
        console.log('categories cookieValue------------1', cookieValue?.token);

        try {
            const postData = {
                "old_password": currentpassword,
                "new_password": password
            };

            const headers = {
                'Authorization': `Bearer ${cookieValue?.token}`,
                'Content-Type': 'application/json',
            };

            const response = await fetch(`${url}/changepassword`, {
                method: 'POST',
                headers: headers,
                body: JSON.stringify(postData),
            });
            console.log('changepassword response:', response);

            if (response?.ok) {
                const responseData = await response.json();
                console.log('changepassword response:2', responseData);

                if (responseData.status) {
                    toast.success('changepassword response: Successfully Created', {
                        position: 'top-center',
                        autoClose: 5000,
                    });

                    // router.push('/home');
                } else {
                    console.error('changepassword Error:', responseData.message);
                    // alert('Brand creation failed');
                }
            } else {
                if(response?.status === 401){
                    console.error('changepassword---Error:', response?.statusText);
                // alert('Brand creation failed');

                toast.error('Invalid old password', {
                    position: 'top-center',
                    autoClose: 5000,
                });
                }
                
            }
        } catch (error) {
            console.error('changepassword changepassword Error:', error);
        }
    };

    return (
        <>
            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                <ModalHeader />

                <div className="space-y-6 container-fluid p-14">
                    <div className="border rounded-lg p-10 shadow-lg">
                        <h1 className="font-bold line-height-[26.52px] mb-5">
                            Change Password
                        </h1>
                        <form onSubmit={handleSubmit}>

                            <div className="flex flex-col">
                                <input
                                    type="password"
                                    id="current_password"
                                    className="appearance-none border rounded-md w-full py-5 bg-gray-100 px-3 mr-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    placeholder="Current Password"
                                    value={currentpassword}
                                    onChange={(e) => setCurrentpassword(e.target.value)}
                                    required
                                />
                                <input
                                    type="password"
                                    id="new_password"
                                    className=" focus:border-purple-500 focus:ring-purple-500 appearance-none border rounded-md w-full mt-5 bg-gray-100  py-5 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    placeholder="Create New Password"
                                    required
                                    value={password}
                                    // onChange={(e) => setPassword(e.target.value)}
                                    onChange={handlePasswordChange}
                                    pattern="^.{8,}$" title="Minimum 8 characters allowed"
                                />
                                <input
                                    type="password"
                                    id="confirm_password"
                                    className=" focus:border-purple-500 focus:ring-purple-500 appearance-none border rounded-md w-full mt-5 bg-gray-100  py-5 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    placeholder="Confirm New Password"
                                    value={confirmPassword}
                                    required
                                    // onChange={(e) => setPasswordsMatch(e.target.value)}
                                    onChange={handleConfirmPasswordChange}
                                />
                                {!passwordsMatch && <p>Passwords do not match</p>}
                            </div>
                            <Buttons
                                buttoncss="font_size_24 leading-6 py-3 button_clr my-5"
                                label={"Change Password"}
                                onClick={handleSubmit}
                            />

                        </form>


                    </div>
                </div>

            </div>
        </>
    )
}

export default Change_password_content