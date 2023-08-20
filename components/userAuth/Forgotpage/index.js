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
        // alert('forgot api response else', response)
      }
    } catch (error) {
      console.error('forgot Error:', error);
    }
  };
  return (
    <>
      <div className="container h-full flex bg-zinc-100 items-center height-70 px-10">
        <div className=" auto-col-max w-full">
          <div className="flex justify-center  height-70  items-center px-10 ">
            <div className="p-10  bg-white border-gray-300 border-solid w-full  rounded-lg border-1">
              <h4>
                Don`&apos;t have an account ?
                <span
                  className="  pl-3 font-bold"
                  style={{ color: Colors.logo_clr }}
                >
                  <Link href={"/login"}>Log in </Link>
                </span>
              </h4>
              <h1 className="mt-0 mb-5  font-bold text-left text-gray-900   ">
                Forgot Your Password?.
              </h1>

              <form onSubmit={handleSubmit}>
                <input
                  type="email"
                  id="name"
                  className="appearance-none border rounded-md w-full mt-5 bg-gray-100  py-5 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Michal.mosiak12@gmail.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                {/* <div className=" flex my-5 justify-between">
                  <div className="flex items-center">
                    <label className="ml-2" style={{ color: Colors.pink_clr }}>
                      Code is sent to nickname@mail.com
                    </label>
                  </div>
                </div> */}
                {/* <Link href={"/verify"}> */}
                <button
                  type="submit"
                  className=" rounded-3xl my-5 text-white w-full py-3 px-4 focus:outline-none focus:shadow-outline"
                  style={{ background: Colors.logo_clr }}
                >
                  Continue
                </button>
                
                {/* </Link> */}
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
