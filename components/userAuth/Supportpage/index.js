import React from "react";
import Image from "next/image";
import logo from "../../../images/logo.png";
import { useState } from "react";
import Link from "next/link";
import Colors from "@/styles/Colors";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
import { apiCall, url } from "@/generalfunation";
import { useRouter } from 'next/navigation';

const Supportpage = () => {

  const router = useRouter();

  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [options, setOptions] = useState('');
  const [desc,setDesc] = useState('');
  const dropdown_options = [
    "Select your option",
    "suggestion",
    "query",
    "support",
    "complain",
  ]


  // console.log("token",token);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // const getResponse = await apiCall('https://jsonplaceholder.typicode.com/posts/1', 'get');
      // console.log('GET response:', getResponse);
      const cookieValue = JSON.parse(Cookies.get('user_data'));
      console.log('categories cookieValue------------1', cookieValue?.token);
      const postData = {
        "email": email,
        "phone": phone,
        "type": options,
        "text": desc,
      };
      const headers = {
        'Authorization': `Bearer ${cookieValue?.token}`,
      }
      
      const postResponse = await apiCall(`${url}/feedbacks`, 'post', postData,headers);

      console.log('support response-------------:', postResponse);
      if (postResponse?.status) {
        // const usertoken = localStorage.setItem('user_data', JSON.stringify(postResponse));
        toast.success('Feedback Successfully', {
          position: 'top-center',
          autoClose: 5000,
        });

        router.push('/')
      } else {
        console.error('Error:', postResponse?.statusText);
        toast.error('Please enter the correct User Details', {
          position: 'top-center', // Set the toast position
          autoClose: 3000, // Close the toast after 3 seconds
        });
        // alert('logibn api response else', postResponse?.statusText)
      }
      // const usertoken = localStorage.setItem('user_data', JSON.stringify(postResponse.token));
    } catch (error) {
      console.error('support response catrch error-------------', error);
      toast.error('Please try again after sometime', {
        position: 'top-center', // Set the toast position
        autoClose: 3000, // Close the toast after 3 seconds
      });
    }
  };


  return (
    <>
      {/* <div className="container h-full flex bg-zinc-100 items-center height-70 px-10"> */}
      <div className="container p-4 lg:p-10 border-gray-300 border-solid  bg-zinc-100  rounded-lg border-1">
        <div className=" auto-col-max w-full">

          <div className="flex items-center w-full justify-center">
            <div className=" bg-white border-gray-300 border-solid rounded-lg border-1 p-5">
              <h1 className="font-bold text-left text-gray-900   ">
                Need Help And Support
              </h1>

              <form onSubmit={handleSubmit}>
                <input
                  type="email"
                  id="name"
                  className="appearance-none border rounded-md w-full mt-5 bg-gray-100  py-5 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Michal.mosiak12@gmail.com"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <input
                  type="number"
                  id="name"
                  className="appearance-none border rounded-md w-full mt-5 bg-gray-100  py-5 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Contact No."
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  pattern="[0-9]{10}" title="10 digit number is required"
                />
                {/* <div class="relative inline-block w-full">
                  <select class="block appearance-none border rounded-md w-full mt-5 bg-gray-100  py-5 px-3 text-gray-400 leading-tight focus:outline-none focus:shadow-outline">

                    {options.map((item, index) => (
                      <option key={index}

                      >{item}</option>
                    ))}
                  </select>
                  <div
                    class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2"
                    style={{ color: Colors.pink_clr }}
                  >
                    <svg
                      class="fill-current h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M12 8v4l8-4-8-4v4H2v4h10z" />
                    </svg>
                  </div>
                </div> */}

                <select id="countries"
                  className="block appearance-none border rounded-md w-full mt-5 bg-gray-100  py-5 px-3 text-gray-400 leading-tight focus:outline-none focus:shadow-outline"
                  value={options}
                  onChange={(e) => setOptions(e.target.value)}
                >
                  {dropdown_options.map((item, index) => (
                    <option key={index}

                    >{item}</option>
                  ))}
                </select>

                <textarea
                  id="descriptionInput"
                  type="text"
                  placeholder="Explain your query in short."
                  className="appearance-none border rounded-md w-full align-top mt-5 bg-gray-100  py-5 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  rows={3}
                  value={desc}
                  onChange={(e) => setDesc(e.target.value)}
                  minLength={0}
                  maxLength={250}
                ></textarea>
                <div className="flex items-center justify-end pt-4 pb-4">
                  <label style={{ color: Colors.pink_clr }}>
                    Max Characters : 0 / 250
                  </label>
                </div>

                <button
                  type="submit"
                  className=" rounded-3xl  text-white w-full py-3 px-4 focus:outline-none focus:shadow-outline"
                  style={{ background: Colors.logo_clr }}
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
        <ToastContainer />
      </div>
    </>
  );
};

export default Supportpage;
