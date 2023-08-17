import React from "react";
import Link from "next/link";
import Colors from "@/styles/Colors";

const Loginpage = () => {
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

              <form>
                <input
                  type="email"
                  id="name"
                  className="appearance-none border rounded-md w-full mt-5 bg-gray-100  py-5 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Michal.mosiak12@gmail.com"
                />
                <input
                  type="password"
                  id="name"
                  className="appearance-none border rounded-md w-full mt-5 bg-gray-100  py-5 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Create Password"
                />
                <input
                  type="password"
                  id="name"
                  className="appearance-none border rounded-md w-full mt-5 bg-gray-100  py-5 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Confirm Password"
                />
                <div className=" flex my-5 justify-between font_size_16">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="myCheckbox"
                      className="form-checkbox h-5 w-5 "
                      style={{ backgroundColor: Colors.logo_clr }}
                    />
                    <label htmlFor="myCheckbox" className=" ml-2 text-black">
                      I accept co. Name
                      <span style={{ color: Colors.pink_clr }}  className="ml-2">
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Loginpage;
