import React from "react";
import Image from "next/image";
import logo from "../../../images/logo.png";
import { useState } from "react";
import Link from "next/link";
import Colors from "@/styles/Colors";

const Verifypage = () => {
  return (
    <>
     <div className="container h-full flex bg-zinc-100 items-center height-70 px-10">
        <div className=" auto-col-max w-full">
          <div className="flex justify-center height-70  items-center px-10 ">
            <div className="p-10  bg-white border-gray-300 border-solid w-full rounded-lg border-1">
              <h4>
                Don`&apos;t have an account ?
                <span
                  className="  pl-3 font-bold"
                  style={{ color: Colors.logo_clr }}
                >
                  <Link href={"/login"}>Log in </Link>
                </span>
              </h4>
              <h1 className="mt-0 mb-4   font-bold text-left text-gray-900   ">
                Enter Verify Code
              </h1>

              <form>
                <div className="flex gap-4">
                  <input
                    type="num"
                    id="name"
                    className="appearance-none border rounded-md w-1/3 text-center mb-5 bg-gray-100  py-5 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="0"
                  />
                  <input
                    type="num"
                    id="name"
                    className="appearance-none border rounded-md w-1/3 text-center mb-5 bg-gray-100  py-5 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="0"
                  />
                  <input
                    type="num"
                    id="name"
                    className="appearance-none border rounded-md w-1/3 text-center mb-5 bg-gray-100  py-5 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="0"
                  />
                  <input
                    type="num"
                    id="name"
                    className="appearance-none border rounded-md w-1/3 text-center mb-5 bg-gray-100  py-5 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="0"
                  />
                  <input
                    type="num"
                    id="name"
                    className="appearance-none border rounded-md w-1/3 text-center mb-5 bg-gray-100  py-5 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="0"
                  />
                  <input
                    type="num"
                    id="name"
                    className="appearance-none border rounded-md w-1/3 text-center mb-5 bg-gray-100  py-5 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="0"
                  />
                </div>
                <div className=" flex my-5 justify-between">
                  <div className="flex items-center">
                    <label
                      htmlFor="myCheckbox"
                      className="ml-2"
                      style={{ color: Colors.pink_clr }}
                    >
                      Verify Code Valid for 05:00
                    </label>
                  </div>
                </div>
                <Link href={'/login'}>
                <button
                  type="submit"
                  className=" rounded-3xl  text-white w-full py-3 px-4  focus:outline-none focus:shadow-outline"
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

export default Verifypage;
