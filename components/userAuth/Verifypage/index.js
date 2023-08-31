import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import logo from "../../../images/logo.png";
import Link from "next/link";
import Colors from "@/styles/Colors";
import { useRouter } from 'next/router';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';

const Verifypage = () => {

  const router = useRouter();
  const { email } = router.query;

  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordsMatch, setPasswordsMatch] = useState(true);
  const [digits, setDigits] = useState(['', '', '', '', '', '']);
  const inputRefs = useRef([
    React.createRef(),
    React.createRef(),
    React.createRef(),
    React.createRef(),
    React.createRef(),
    React.createRef(),
  ]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const options = {
      "email": email,
      "token": "123456",
      "password": password,
    }
    try {
      const response = await fetch('https://backend.creatorsbay.app/api/resetpassword ', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },

        body: JSON.stringify(options),
      });

      console.log('resetpassword response------', response)

      if (response.ok) {
        const result = await response.json();

        // const usertoken = localStorage.setItem('user_data', JSON.stringify(result.token));
        toast.success('Password Successfully Changed', {
          position: 'top-center', // Set the toast position
          autoClose: 3000, // Close the toast after 3 seconds
        });
        router.push('/login');
        console.log('resetpassword result------------', result);
        // alert('', result.message); 


      } else {
        console.error('Error:', response.statusText);
        // alert('resetpassword api response else', response.statusText)
        toast.error('Please enter the correct User Details', {
          position: 'top-center', // Set the toast position
          autoClose: 3000, // Close the toast after 3 seconds
        });
      }
    } catch (error) {
      console.error('Error:', error);
      toast.error('Please try again after sometime', {
        position: 'top-center', // Set the toast position
        autoClose: 3000, // Close the toast after 3 seconds
      });
    }
  };

  const handleInputChange = (e, index) => {
    const { value } = e.target;
    if (/^[0-9]*$/.test(value) && value.length <= 1) {
      const newDigits = [...digits];
      newDigits[index] = value;
      setDigits(newDigits);

      // Automatically move to the next input field
      if (value !== '') {
        if (index < 5) {
          inputRefs.current[index + 1].focus();
        }
      }
    }
  };

  // Function to paste the 6-digit code
  const pasteCode = (code) => {
    const newDigits = code.split('').slice(0, 6); // Ensure only 6 digits are taken
    setDigits(newDigits);

    // Focus the first input field
    inputRefs.current[0].focus();
  };

  // Listen for Ctrl+V key press
  useEffect(() => {
    const handlePaste = (e) => {
      // Prevent the default paste behavior
      e.preventDefault();

      // Get the clipboard contents using Clipboard API
      navigator.clipboard.readText()
        .then(pastedText => {
          // Call pasteCode with the pasted text
          pasteCode(pastedText);
        })
        .catch(error => {
          console.error('Failed to read clipboard data: ', error);
        });
    };

    window.addEventListener('paste', handlePaste);

    return () => {
      // Clean up the event listener when the component unmounts
      window.removeEventListener('paste', handlePaste);
    };
  }, []);

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
      <div className="container h-full flex bg-zinc-100 items-center height-70 px-10">
        <div className=" auto-col-max w-full">
          <div className="flex justify-center height-70  items-center p-5  xl:p-10 lg:p-10">
            <div className="p-5  xl:p-10 lg:p-10  bg-white border-gray-300 border-solid w-full rounded-lg border-1">
              <h4>
                Don&apos;t have an account ?
                <span
                   className="shadow-lg bg-purple-100 text-purple-800 font-bold mr-2 px-2.5 py-1 rounded dark:bg-gray-700 dark:text-purple-400 border border-purple-400 mx-3"
                  style={{ color: Colors.logo_clr }}
                >
                  <Link href={"/login"}>Login </Link>
                </span>
              </h4>
              <h1 className="mt-0 mb-4 pt-3   font-bold text-left text-gray-900   ">
                Enter Verify Code
              </h1>

              <form onSubmit={handleSubmit}>
                <div className="flex gap-4">
                 
                  {digits?.map((digit, index) => (
                    <input
                      key={index}
                      ref={inputRefs.current[index]}
                      type="text"
                      value={digit}
                      onChange={(e) => handleInputChange(e, index)}
                      className="appearance-none border rounded-md w-1/3 text-center mb-5 bg-gray-100  py-5 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      placeholder="0"
                    />
                  ))}
                </div>
                <input
                  type="password"
                  id="password"
                  className="appearance-none border rounded-md w-full mt-5 bg-gray-100  py-5 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Create Password"
                  required
                  value={password}
                  onChange={handlePasswordChange}
                  pattern="^.{8,}$" title="Minimum 8 characters allowed"
                />
                <input
                  type="password"
                  id="confirm_password"
                  className="appearance-none border rounded-md w-full mt-5 bg-gray-100  py-5 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Confirm Password"
                  value={confirmPassword}
                  required
                  onChange={handleConfirmPasswordChange}
                />
                {!passwordsMatch && <p>Passwords do not match</p>}
                {email && <div className=" mt-4 flex justify-between">
                  <div className="flex items-center">
                    <label className="ml-2" style={{ color: Colors.pink_clr }}>
                      Code is sent to {email}
                    </label>
                  </div>
                </div>}
                {/* <div>Verifying email for: {email}</div>; */}

               
                <button
                  type="submit"
                  className=" rounded-3xl  text-white w-full py-3 px-4 my-5 focus:outline-none focus:shadow-outline"
                  style={{ background: Colors.logo_clr }}
                >
                  Continue
                </button>
               
              </form>
              <ToastContainer />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Verifypage;
