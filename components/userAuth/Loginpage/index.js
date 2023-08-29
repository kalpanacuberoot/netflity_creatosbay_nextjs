import React, { useEffect, useState } from "react";
import Link from "next/link";
import Colors from "@/styles/Colors";
import { useRouter } from 'next/navigation';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
import Terms_of_service from "@/components/Homepage/Termsofservice";
import Terms_of_service_content from "@/components/Homepage/Termsofservice/Terms_of_service_content";
import { apiCall, url } from "@/generalfunation";
import Cookies from 'js-cookie';
import Image from "next/image";
import Images from "@/images";

const Loginpage = () => {

  const router = useRouter();

  const [data, setData] = useState({ message: '' });
  const [isModalOpen_terms_service, setIsModalOpen_terms_service] = useState(false);
  const [brand_user, setBrand_user] = useState([]);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {

      const postData = {
        "email": email,
        "password": password,
      };
      const postResponse = await apiCall(`${url}/login`, 'post', postData);

      console.log('POST response register-------------:', postResponse);
      if (postResponse?.message) {
        console.log('POST response register-------------:', postResponse);
        Cookies.set('user_data', JSON.stringify(postResponse), { expires: 106500 });
        toast.success(postResponse?.message, {
          position: 'top-center',
          autoClose: 5000,
        });
        getUser_Brand();
        // router.push('/user_brand_name');
      } else {
        // console.error('Error:', postResponse?.statusText);
        // alert('logibn api response else', postResponse?.statusText)
        toast.error("Have you register yourself with emailId", {
          position: 'top-center',
          autoClose: 5000,
        });
      }

    } catch (error) {
      // console.error('POST response register catrch error-------------', error);
      toast.error('please register yourself or login again after sometime', {
        position: 'top-center',
        autoClose: 5000,
      });
    }
  };

  // showw password
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  // end show password



  const getUser_Brand = async () => {


    const cookieValue = JSON?.parse(Cookies?.get('user_data'));
    console.log('categories cookieValue------------1', cookieValue?.token);

    const userId = JSON?.parse(Cookies?.get('user_data'));
    console.log('categories cookieValue------------1', userId?.user?.id);

    try {

      const headers = {
        'Authorization': `Bearer ${cookieValue?.token}`,
        'Content-Type': 'application/json',
      };

      const response = await fetch(`${url}/brandusers?user=${userId?.user?.id}`, {
        method: 'Get',
        headers: headers,

      });

      if (response?.ok) {
        const responseData = await response.json();
        console.log('brandusers response:', responseData?.data?.data);


        // Cookies.set('brand_id', JSON.stringify(responseData?.data?.id), { expires: 106500 });

        if (responseData.status) {
          // toast.success('brandusers Name', {
          //     position: 'top-center',
          //     autoClose: 5000,
          // });
          if (responseData?.data?.data.length === 0) {
            router.push('/brand'); // Redirect to the brand page
          } else {
            router.push('/user_brand_name'); // Redirect to the brand_user page
          }
          // setBrand_user(responseData?.data?.data)

        } else {
          console.error('Error:', responseData.message);
          // alert('Brand creation failed');
        }
      } else {
        console.error('Error:', response.statusText);
        // alert('Brand creation failed');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };


  return (
    <>
      <Terms_of_service isOpen={isModalOpen_terms_service} onClose={() => setIsModalOpen_terms_service(false)}>
        <div className="relative w-full max-w-4xl max-h-full min-w-3xl">

          <Terms_of_service_content />
        </div>
      </Terms_of_service>
      <div className="container p-4 lg:p-10  h-full flex bg-zinc-100 items-center px-10">
        <div className=" auto-col-max w-full height-70">
          <div className="flex justify-center  items-center px-10 ">
            <div className="p-10  bg-white border-gray-300 border-solid w-full  rounded-lg border-1">
              <h4>
                Don&apos;t have an account ?
                <span
                  className="  pl-3 font-bold"
                  style={{ color: Colors.logo_clr }}
                >
                  <Link href={"/signup"}>Sign up </Link>
                </span>
              </h4>
              <h1 className="mt-0 mb-5  font-bold text-left text-gray-900   ">
                Welcome back.
              </h1>

              <form onSubmit={handleSubmit}>

                <input
                  type="email"
                  id="email"
                  className=" focus:border-purple-500 focus:ring-purple-500 appearance-none border rounded-md w-full mt-5 bg-gray-100  py-5 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}

                />

                <div className="flex items-center relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    id="password"
                    className=" focus:border-purple-500 focus:ring-purple-500 appearance-none border rounded-md w-full mt-5 bg-gray-100  py-5 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    // placeholder="Create Password"
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
                    {/* {showPassword ? 'Hide' : 'Show'} */}
                    {showPassword ? <Image
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
                      required
                      style={{ backgroundColor: Colors.logo_clr }}
                    />
                    <label htmlFor="myCheckbox" className=" ml-2 text-black">
                      Remember Me
                    </label>
                  </div>
                  {/* <Link href={"/forgot"}> */}
                  {" "}
                  <button
                    className=" float-right "
                    style={{ color: Colors.pink_clr }}
                    onClick={() => router.push('/forgot')}
                  >
                    Forgot Password ?
                  </button>
                  {/* </Link> */}
                </div>
                <button
                  type="submit"
                  className=" rounded-3xl  text-white w-full py-3 px-4 focus:outline-none focus:shadow-outline"
                  style={{ background: Colors.logo_clr }}
                >
                  Login
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

export default Loginpage;
