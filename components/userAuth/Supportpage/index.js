import React from "react";
import Image from "next/image";
import logo from "../../../images/logo.png";
import { useState } from "react";
import Link from "next/link";
import Colors from "@/styles/Colors";

const Supportpage = () => {
  return (
    <>
      <div className="container h-full flex bg-zinc-100">
        <div className="whalf h-full  ">
          <div
            className="flex flex-col justify-center pl-10 height-15"
            style={{ backgroundColor: Colors.white_clr }}
          >
            <Image src={logo} alt="" width={60} />
          </div>
          <div className="flex justify-center height-70  items-center px-10 ">
            <div className="p-10  bg-white border-gray-300 border-solid w-full  rounded-lg border-1">
              <h1 className="font-bold text-left text-gray-900   ">
                Need Help And Support
              </h1>

              <form>
                <input
                  type="email"
                  id="name"
                  className="appearance-none border rounded-md w-full mt-5 bg-gray-100  py-5 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Michal.mosiak12@gmail.com"
                />
                <input
                  type="tel"
                  id="name"
                  className="appearance-none border rounded-md w-full mt-5 bg-gray-100  py-5 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Contact No."
                />
                <div class="relative inline-block w-full">
                  <select class="block appearance-none border rounded-md w-full mt-5 bg-gray-100  py-5 px-3 text-gray-400 leading-tight focus:outline-none focus:shadow-outline">
                    <option>Query Type</option>
                    <option>Option 2</option>
                    <option>Option 3</option>
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
                </div>

                <textarea
                  id="descriptionInput"
                  type="text"
                  placeholder="Explain your query in short."
                  className="appearance-none border rounded-md w-full align-top mt-5 bg-gray-100  py-5 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  rows={3}
                ></textarea>
                <div className="flex items-center justify-end pt-4 pb-4">
                  <label style={{ color: Colors.pink_clr }}>
                    Max Characters : 0 / 250
                  </label>
                </div>

                <button
                  type="submit"
                  className=" rounded-3xl  text-white w-full py-3 px-4 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl focus:outline-none focus:shadow-outline"
                  style={{ background: Colors.logo_clr }}
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
          <div className="flex height-15 align-center  p-10 gap-10">
            <h4 style={{ color: Colors.pink_clr }}>Imprint</h4>
            <h4 style={{ color: Colors.pink_clr }}>Terms of use</h4>
            <h4 style={{ color: Colors.pink_clr }}>Dribble</h4>
          </div>
        </div>
        <div className="flex h-full whalf-r">
          <div className="w-1/2">
            <logo-slider>
              <div>
                <Image
                  src="https://images.unsplash.com/photo-1686538653516-7e2c9ced00aa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxM3x8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                  alt=""
                  width={400}
                  height={100}
                />
                <Image
                  src="https://images.unsplash.com/photo-1686538653516-7e2c9ced00aa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxM3x8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                  alt=""
                  width={400}
                  height={100}
                />
                <Image
                  src="https://images.unsplash.com/photo-1686538653516-7e2c9ced00aa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxM3x8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                  alt=""
                  width={400}
                  height={100}
                />
                <Image
                  src="https://images.unsplash.com/photo-1686538653516-7e2c9ced00aa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxM3x8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                  alt=""
                  width={400}
                  height={100}
                />
                <Image
                  src="https://images.unsplash.com/photo-1686538653516-7e2c9ced00aa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxM3x8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                  alt=""
                  width={400}
                  height={100}
                />
                <Image
                  src="https://images.unsplash.com/photo-1686538653516-7e2c9ced00aa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxM3x8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                  alt=""
                  width={400}
                  height={100}
                />
                <Image
                  src="https://images.unsplash.com/photo-1686538653516-7e2c9ced00aa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxM3x8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                  alt=""
                  width={400}
                  height={100}
                />
                <Image
                  src="https://images.unsplash.com/photo-1686538653516-7e2c9ced00aa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxM3x8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                  alt=""
                  width={400}
                  height={100}
                />
              </div>

              <div>
                <Image
                  src="https://images.unsplash.com/photo-1686538653516-7e2c9ced00aa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxM3x8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                  alt=""
                  width={400}
                  height={100}
                />
                <Image
                  src="https://images.unsplash.com/photo-1686538653516-7e2c9ced00aa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxM3x8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                  alt=""
                  width={400}
                  height={100}
                />
                <Image
                  src="https://images.unsplash.com/photo-1686538653516-7e2c9ced00aa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxM3x8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                  alt=""
                  width={400}
                  height={100}
                />
                <Image
                  src="https://images.unsplash.com/photo-1686538653516-7e2c9ced00aa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxM3x8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                  alt=""
                  width={400}
                  height={100}
                />
                <Image
                  src="https://images.unsplash.com/photo-1686538653516-7e2c9ced00aa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxM3x8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                  alt=""
                  width={400}
                  height={100}
                />
                <Image
                  src="https://images.unsplash.com/photo-1686538653516-7e2c9ced00aa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxM3x8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                  alt=""
                  width={400}
                  height={100}
                />
                <Image
                  src="https://images.unsplash.com/photo-1686538653516-7e2c9ced00aa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxM3x8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                  alt=""
                  width={400}
                  height={100}
                />
                <Image
                  src="https://images.unsplash.com/photo-1686538653516-7e2c9ced00aa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxM3x8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                  alt=""
                  width={400}
                  height={100}
                />
              </div>
            </logo-slider>
          </div>
          <div className="w-1/2">
            <logo-slider className="lslider">
              <div>
                <Image
                  src="https://images.unsplash.com/photo-1686538653516-7e2c9ced00aa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxM3x8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                  alt=""
                  width={400}
                  height={100}
                />
                <Image
                  src="https://images.unsplash.com/photo-1686538653516-7e2c9ced00aa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxM3x8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                  alt=""
                  width={400}
                  height={100}
                />
                <Image
                  src="https://images.unsplash.com/photo-1686538653516-7e2c9ced00aa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxM3x8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                  alt=""
                  width={400}
                  height={100}
                />
                <Image
                  src="https://images.unsplash.com/photo-1686538653516-7e2c9ced00aa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxM3x8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                  alt=""
                  width={400}
                  height={100}
                />
                <Image
                  src="https://images.unsplash.com/photo-1686538653516-7e2c9ced00aa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxM3x8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                  alt=""
                  width={400}
                  height={100}
                />
                <Image
                  src="https://images.unsplash.com/photo-1686538653516-7e2c9ced00aa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxM3x8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                  alt=""
                  width={400}
                  height={100}
                />
                <Image
                  src="https://images.unsplash.com/photo-1686538653516-7e2c9ced00aa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxM3x8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                  alt=""
                  width={400}
                  height={100}
                />
                <Image
                  src="https://images.unsplash.com/photo-1686538653516-7e2c9ced00aa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxM3x8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                  alt=""
                  width={400}
                  height={100}
                />
              </div>
              <div>
                <Image
                  src="https://images.unsplash.com/photo-1686538653516-7e2c9ced00aa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxM3x8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                  alt=""
                  width={400}
                  height={100}
                />
                <Image
                  src="https://images.unsplash.com/photo-1686538653516-7e2c9ced00aa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxM3x8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                  alt=""
                  width={400}
                  height={100}
                />
                <Image
                  src="https://images.unsplash.com/photo-1686538653516-7e2c9ced00aa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxM3x8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                  alt=""
                  width={400}
                  height={100}
                />
                <Image
                  src="https://images.unsplash.com/photo-1686538653516-7e2c9ced00aa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxM3x8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                  alt=""
                  width={400}
                  height={100}
                />
                <Image
                  src="https://images.unsplash.com/photo-1686538653516-7e2c9ced00aa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxM3x8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                  alt=""
                  width={400}
                  height={100}
                />
                <Image
                  src="https://images.unsplash.com/photo-1686538653516-7e2c9ced00aa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxM3x8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                  alt=""
                  width={400}
                  height={100}
                />
                <Image
                  src="https://images.unsplash.com/photo-1686538653516-7e2c9ced00aa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxM3x8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                  alt=""
                  width={400}
                  height={100}
                />
                <Image
                  src="https://images.unsplash.com/photo-1686538653516-7e2c9ced00aa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxM3x8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                  alt=""
                  width={400}
                  height={100}
                />
              </div>
            </logo-slider>
          </div>
        </div>
      </div>
    </>
  );
};

export default Supportpage;
