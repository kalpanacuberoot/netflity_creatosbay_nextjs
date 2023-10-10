import React, { useState } from "react";
import Link from "next/link";
import Colors from "@/styles/Colors";
import { useRouter } from 'next/navigation';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
import Terms_of_service from "@/components/Homepage/Termsofservice";
import Terms_of_service_content from "@/components/Homepage/Termsofservice/Terms_of_service_content";
import { apiCall, url } from "@/generalfunctions";
import Cookies from 'js-cookie';
import Image from "next/image";
import Images from "@/images";

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

        if (postResponse.user.type === 'creator') {
          Cookies.set('creator_user_data', JSON.stringify(postResponse));
          toast.success(postResponse?.message, {
            position: 'top-center',
            autoClose: 5000,
          });
          router.push('/creator_home');
        }

        if (postResponse.user.type === 'brand') {

          router.push('/home');
          Cookies.set('user_data', JSON.stringify(postResponse), { expires: 106500 });
          toast.success(postResponse?.message, {
            position: 'top-center',
            autoClose: 5000,
          });
          getUser_Brand();
          setLoading(false)
        }

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

        if (responseData.status) {

          if (responseData?.data?.data.length === 0) {
            router.push('/brand');
          }
          else if (responseData?.data?.data?.length === 1) {
            Cookies.set('brand_detail', JSON.stringify(responseData?.data?.data[0]));
            setBrandData(responseData?.data?.data[0]);
            router.push('/home');
          }
          else {
            router.push('/brand-selection');
          }

        } else {
          console.error('Error:', responseData.message);

        }
      } else {
        console.error('Error:', response.statusText);

      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  console.log("brand_detailbrand_detail", brandData);


  return (
    <>
      {loading ? ( // Show loader if loading is true
        <div className="w-full h-full flex items-center justify-center">
          <Image
            width={100}
            height={100}
            alt=""
            src={Images.Loader}
          />
        </div>
      ) : (
        <>
          <Terms_of_service isOpen={isModalOpen_terms_service} onClose={() => setIsModalOpen_terms_service(false)}>
            <div className="relative w-full max-w-4xl max-h-full min-w-3xl">

              <Terms_of_service_content />
            </div>
          </Terms_of_service>

          <div className="container p-5 xl:p-10 lg:p-10 w-full h-full flex bg-zinc-100 items-center px-10">
            <div className=" auto-col-max w-full height-70">
              <div className="flex justify-center  items-center px-10 ">
                <div className="p-5  xl:p-10 lg:p-10  bg-white border-gray-300 border-solid w-full  rounded-lg border-1">
                  <h4>
                    Don&apos;t have an Account ?
                    <span
                      className="shadow-lg  bg-purple-100 text-purple-800 font-bold mr-2 px-2.5 py-1 rounded dark:bg-gray-700 dark:text-purple-400 border border-purple-400 mx-4"
                      style={{ color: Colors.logo_clr }}
                    >
                      <Link href={"/signup"}>Sign Up </Link>
                    </span>
                  </h4>
                  <h1 className="my-5  font-bold text-left text-gray-900   ">
                    Welcome back.
                  </h1>

                  {/* <form
                    onSubmit={handleSubmit}
                  > */}

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
                        style={{ backgroundColor: Colors.logo_clr }}
                      />
                      <label htmlFor="myCheckbox" className=" ml-2 text-black">
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
                  {/* </form> */}
                  <ToastContainer />
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Loginpage;
