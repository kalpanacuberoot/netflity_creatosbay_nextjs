import React, { useState } from "react";
import Link from "next/link";
import Colors from "@/styles/Colors";
import { useRouter } from 'next/router';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 
import { toast } from 'react-toastify';

const Forgotpage = () => {

  const router = useRouter();

  const [email, setEmail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const options = {
      "email": email,

    }
    try {
      const response = await fetch('https://backend.creatorsbay.app/api/forgotpassword', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },

        body: JSON.stringify(options),
      });
      console.log("forgor response --------------------", response);
      if (response.ok) {
        const result = await response.json();

        console.log('forgot------------result.message', result);
        toast.success('Code is sent to your emailId', {
          position: 'top-center', // Set the toast position
          autoClose: 3000, // Close the toast after 3 seconds
        });
        router.push(`/verify?email=${email}`);

        // alert('', result.message);

      } else {
        console.error('Error:', response);
        toast.error('Please send the valid email Id', {
          position: 'top-center', // Set the toast position
          autoClose: 3000, // Close the toast after 3 seconds
        });
        // alert('forgot api response else', response)
      }
    } catch (error) {
      console.error('forgot Error:', error);
      toast.error('Please try again after sometime', {
        position: 'top-center', // Set the toast position
        autoClose: 3000, // Close the toast after 3 seconds
      });
    }
  };
  return (
    <>
      <div className="container h-full flex bg-zinc-100 items-center height-70 px-10">
        <div className=" auto-col-max w-full">
          <div className="flex justify-center p-5 xl:p-10 lg:p-10">
            <div className="p-5   xl:p-10 lg:p-10  bg-white border-gray-300 border-solid w-full  rounded-lg border-1">
              <h4>
                Don&apos;t have an account ?
                <span
                   className="shadow-lg bg-purple-100 text-purple-800 font-bold mr-2 px-2.5 py-1 rounded dark:bg-gray-700 dark:text-purple-400 border border-purple-400 mx-3"
                  style={{ color: Colors.logo_clr }}
                >
                  <Link href={"/login"}>Login </Link>
                </span>
              </h4>
              <h1 className="my-5  font-bold text-left text-gray-900   ">
                Forgot Your Password?.
              </h1>

              <form onSubmit={handleSubmit}>
                <input
                  type="email"
                  id="email"
                  className="appearance-none border rounded-md w-full bg-gray-100 py-5 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              
                <button
                  type="submit"
                  className=" rounded-3xl my-5 text-white w-full py-3 px-4 focus:outline-none focus:shadow-outline"
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

export default Forgotpage;
