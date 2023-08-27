import React from "react";
import Image from "next/image";

import { useState } from "react";
import Link from "next/link";
import Colors from "@/styles/Colors";

import { useRouter } from 'next/navigation';

const Contact_Us = () => {



  return (
    <>
      {/* <div className="container h-full flex bg-zinc-100 items-center height-70 px-10"> */}
      <div className=" p-4 lg:p-10 border-gray-300 border-solid  bg-zinc-100   ">
        <div className=" auto-col-max w-full ">

          <div className="sm:flex items-center w-full gap-2 ">
            <div className=" bg-white border-gray-300 border-solid sm:w-6/12 rounded-lg border-1 p-5">
              <h1 className="font-bold text-left text-gray-900   ">
                Need Help And Support
              </h1>

              <form>
                <input
                  type="email"
                  id="name"
                  className="appearance-none border rounded-md w-full mt-5 bg-gray-100  py-5 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Email"
                //   required
                //   value={email}
                //   onChange={(e) => setEmail(e.target.value)}
                />
                <input
                  type="number"
                  id="name"
                  className="appearance-none border rounded-md w-full mt-5 bg-gray-100  py-5 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Contact No."
                //   required
                //   value={phone}
                //   onChange={(e) => setPhone(e.target.value)}
                //   pattern="[0-9]{10}" title="10 digit number is required"
                />


                <select id="countries"
                  className="block appearance-none border rounded-md w-full mt-5 bg-gray-100  py-5 px-3 text-gray-400 leading-tight focus:outline-none focus:shadow-outline"
                //   value={options}
                //   onChange={(e) => setOptions(e.target.value)}
                >
                  {/* {dropdown_options.map((item, index) => (
                    <option key={index}

                    >{item}</option>
                  ))} */}
                </select>

                <textarea
                  id="descriptionInput"
                  type="text"
                  placeholder="Explain your query in short."
                  className="appearance-none border rounded-md w-full align-top mt-5 bg-gray-100  py-5 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  rows={3}
                //   value={desc}
                //   onChange={handleTextChange}
                //   placeholder={`Max Characters: ${maxCharacters}`}

                ></textarea>


                <button
                  type="submit"
                  className=" rounded-3xl  text-white w-full py-3 px-4 focus:outline-none focus:shadow-outline my-5"
                  style={{ background: Colors.logo_clr }}
                >
                  Submit
                </button>
              </form>
            </div>
            <div className="sm:w-6/12"><iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224611.86194800303!2d77.15426027976997!3d28.402344350134463!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cdc15f5a424b1%3A0xe4f50576c850e0f2!2sFaridabad%2C%20Haryana!5e0!3m2!1sen!2sin!4v1693129689532!5m2!1sen!2sin"
              width="100%"
              height="540"
              style={{ border: "0" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            </div>
          </div>
        </div>

      </div>
    </>
  );
};

export default Contact_Us;
