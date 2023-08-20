import React, { useState } from "react";
import Link from "next/link";
import Colors from "@/styles/Colors";
import { useRouter } from 'next/navigation';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify'; 

const Loginpage = () => {

  const router = useRouter();

  const [data, setData] = useState({ message: '' });
  const [formData, setFormData] = useState({
   email:'',
   password:'',
  });

  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('')

  const handleChange = (e) => {
    // const { name, value } = e.target;
    // setFormData({ ...formData, [name]: value });
    
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const options = {
      "email":email,
      "password":password,
    }
    try {
      const response = await fetch('https://backend.creatorsbay.app/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },

        body: JSON.stringify(options),
      });

      console.log('login response------', response)

      if (response.ok) {
        const result = await response.json();

        const usertoken = localStorage.setItem('user_data', JSON.stringify(result));
     
        // console.log('result.message',result.token);
        toast.success('Login Successfully', {
          position: 'top-center', // Set the toast position
          autoClose: 3000, // Close the toast after 3 seconds
        });
        // alert('', result.message); 
        router.push('/home')
      } else {
        console.error('Error:', response.statusText);
        alert('logibn api response else', response.statusText)
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };


  return (
    <>
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
                      <span style={{ color: Colors.pink_clr }} className="ml-2">
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
                  Create Account
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
