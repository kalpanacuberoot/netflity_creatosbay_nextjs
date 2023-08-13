import React from "react";
import Link from "next/link";
import Colors from "@/styles/Colors";

const Forgotpage = () => {
  return (
    <>
      <div className="container h-full flex bg-zinc-100 items-center height-70 px-10">
        <div className=" auto-col-max w-full">
          <div className="flex justify-center  height-70  items-center px-10 ">
            <div className="p-10  bg-white border-gray-300 border-solid w-full  rounded-lg border-1">
              <h4>
                Don't have an account ?
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

              <form>
                <input
                  type="email"
                  id="name"
                  className="appearance-none border rounded-md w-full mt-5 bg-gray-100  py-5 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Michal.mosiak12@gmail.com"
                />
                <div className=" flex my-5 justify-between">
                  <div className="flex items-center">
                    <label className="ml-2" style={{ color: Colors.pink_clr }}>
                      Code is sent to nickname@mail.com
                    </label>
                  </div>
                </div>
                <Link href={"/verify"}>
                  <button
                    type="submit"
                    className=" rounded-3xl  text-white w-full py-3 px-4 focus:outline-none focus:shadow-outline"
                    style={{ background: Colors.logo_clr }}
                  >
                    Continue
                  </button>
                </Link>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Forgotpage;
