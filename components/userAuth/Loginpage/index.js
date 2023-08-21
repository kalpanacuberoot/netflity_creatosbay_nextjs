import React, { useState } from "react";
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

const Loginpage = () => {

  const router = useRouter();

  const [data, setData] = useState({ message: '' });
  const [isModalOpen_terms_service, setIsModalOpen_terms_service] = useState(false);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = (e) => {
    // const { name, value } = e.target;
    // setFormData({ ...formData, [name]: value });

    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // const getResponse = await apiCall('https://jsonplaceholder.typicode.com/posts/1', 'get');
      // console.log('GET response:', getResponse);

      const postData = {
        "email": email,
        "password": password,
      };
      const postResponse = await apiCall(`${url}/login`, 'post', postData);

      console.log('POST response register-------------:', postResponse);
      if (postResponse?.message) {
        //  localStorage.setItem('user_data', JSON.stringify(postResponse.token));
        Cookies.set('user_data',JSON.stringify(postResponse), { expires: 106500 });
        toast.success('Login Successfully', {
          position: 'top-center',
          autoClose: 5000,
        });

        router.push('/brand')
      } else {
        console.error('Error:', postResponse?.statusText);
        alert('logibn api response else', postResponse?.statusText)
      }
      // const usertoken = localStorage.setItem('user_data', JSON.stringify(postResponse.token));
    } catch (error) {
      console.error('POST response register catrch error-------------', error);
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
                Don`&apos;t have an account ?
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
                  className="appearance-none border rounded-md w-full mt-5 bg-gray-100  py-5 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Michal.mosiak12@gmail.com"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <input
                  type="password"
                  id="password"
                  className="appearance-none border rounded-md w-full mt-5 bg-gray-100  py-5 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  // placeholder="Create Password"
                  placeholder="Password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />

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
                      I accept co. Name
                      <span style={{ color: Colors.pink_clr }} className="cursor-pointer ml-2"
                        onClick={() => setIsModalOpen_terms_service(true)}
                      >
                        Terms & Condition
                      </span>
                    </label>
                  </div>
                  <Link href={"/forgot"}>
                    {" "}
                    <button
                      className=" float-right "
                      style={{ color: Colors.pink_clr }}
                    >
                      Forgot Password ?
                    </button>
                  </Link>
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
