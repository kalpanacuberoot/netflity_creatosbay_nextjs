import Colors from "@/styles/Colors";
import ModalHeader from "../../ModalHeader";
import { useState } from "react";
import Buttons from "@/components/Button";

const Change_password_content = () => {


    const [currentpassword,setCurrentpassword] = useState('');
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

    return (
        <>
            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                <ModalHeader />

                <div className="space-y-6 container-fluid p-14">
                    <div className="border rounded-lg p-10 shadow-lg">
                        <h1 className="font-bold line-height-[26.52px] mb-5">
                            Change Password
                        </h1>
                        <form>

                            <div className="flex flex-col">
                                <input
                                    type="email"
                                    id="name"
                                    className="appearance-none border rounded-md w-full py-5 bg-gray-100 px-3 mr-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    placeholder="Current Password"
                                    value={currentpassword}
                                    onChange={() => setCurrentpassword(e.target.value)}
                                />
                                <input
                                    type="password"
                                    id="name"
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
                                    id="name"
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
                            />

                        </form>


                    </div>
                </div>

            </div>
        </>
    )
}

export default Change_password_content