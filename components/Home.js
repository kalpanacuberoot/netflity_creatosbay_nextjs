import React from "react";
import Image from "next/image";
import logo from "../images/logo.png";
import { useState } from "react";
import Link from "next/link";
import Colors from "@/styles/Colors";
import Layout from "./Layout";
import Splash_screen_slider from "./splash_screen_slider";

const Home = () => {
  const [currentSection, setCurrentSection] = useState(1);

  const handleGetStarted = () => {
    setCurrentSection(currentSection + 1);
  };

  const [selectedOption, setSelectedOption] = useState("");
  const options = ["Option 1", "Option 2", "Option 3"];

  const handleChange = (e) => {
    setSelectedOption(e.target.value);
  };
  return (
    <>
      <div className="flex bg-zinc-100 " >
        <div className="auto-cols-max w-full">
          
          <div className="flex justify-center items-center p-10 w-full">
            {currentSection === 1 && (
              <div className=" p-10 bg-white border-gray-300 border-solid w-full  rounded-lg border-1">
                {/* <Link href={"/home"}>
                  <h6>Home Page</h6>
                </Link> */}
                <h1 className="mt-0 mb-5 text-left font-bold  ">
                  Make Your Brand a next social media star &#x2B50;
                  {/* <Link href={"/login"}>Login Page</Link> */}
                </h1>
                <p className="pt-5  text-base sm:text-lg md:text-lg lg:text-xl xl:text-lg ">
                  Sets the width of the element to a specific width of 64
                  pixels. Additionally, you can combine the w-1/2 className with
                  other utility classNamees or use responsive variants to apply
                  different widths at different screen
                </p>
                <p className="pt-4  text-base sm:text-lg md:text-lg lg:text-xl xl:text-lg">
                  different widths at different screen sizes. For example,
                  md:w-2/3 sets the width of the element
                </p>
                <div className="flex justify-between pt-5 mt-5 align-middle ">
                  <button
                    onClick={handleGetStarted}
                    className="flex  tracking-wider align-middle justify-center items-center text-white w-full text-sm sm:text-base md:text-lg lg:text-lg xl:text-xl rounded-full px-6 lg:px-8 lg:py-4 py-2 bg-cyan-600"
                    style={{ backgroundColor: Colors.logo_clr }}
                  >
                    Get Started{" "}
                    <svg
                      data-te-animation-init
                      data-te-animation-reset="true"
                      data-te-animation="[slide-right_1s_ease-in-out]"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-7 w-8 pl-3"
                    >
                      <path d="M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.405z" />
                    </svg>
                  </button>
                  <h6
                    className="flex items-center w-full justify-center text-base font-bold leading-9"
                    style={{ color: Colors.logo_clr }}
                  >
                    <Link href={"/support"}> How it&lsquo;s Works</Link>
                  </h6>


                </div>
              </div>
            )}
            {currentSection === 2 && (
              <div className="p-4 lg:p-10 bg-white border-gray-300 border-solid rounded-lg border-1">
                <p className=" text-sm">
                  {" "}
                  Already a member ?{" "}
                  <span
                    className="  pl-3 font-bold"
                    style={{ color: Colors.logo_clr }}
                  >
                    {" "}
                    <Link href={"/login"}>Login </Link>
                  </span>
                </p>
                <h1 className="mt-0 mb-3 font-bold text-left text-gray-900   ">
                  Create New Account
                </h1>

                <form>
                  <div className="flex h-auto">
                    <input
                      type="text"
                      className="text-sm py-2 h-auto border rounded-md w-full bg-gray-100 px-3 mr-2 text-gray-700  focus:outline-none focus:shadow-outline"
                      placeholder="First Name"
                    />
                    <input
                      type="text"
                      id="name"
                      className="text-sm appearance-none border rounded-md w-full ml-2 py-2 bg-gray-100 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      placeholder="Last Name"
                    />
                  </div>
                  <input
                    type="email"
                    id="name"
                    className="text-sm appearance-none border rounded-md w-full mt-5 bg-gray-100  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="exampl@123.com"
                  />
                  <input
                    type="password"
                    id="name"
                    className="text-sm appearance-none border rounded-md w-full mt-5 bg-gray-100  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="Create Password"
                  />
                  <input
                    type="password"
                    id="name"
                    className="text-sm appearance-none border rounded-md w-full mt-5 bg-gray-100  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="Confirm Password"
                  />
                  <div className=" flex my-5 justify-between">
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="myCheckbox"
                        className="form-checkbox h-5 w-5 "
                        style={{ backgroundColor: Colors.logo_clr }}
                      />
                      <label htmlFor="myCheckbox" className="text-sm ml-2 text-black">
                        I accept co. Name{" "}
                        <span
                          // className="text-xs sm:text-sm md:text-sm lg:text-lg xl:text-xl"
                          className="text-base"
                          style={{ color: Colors.pink_clr }}
                        >
                        
                          Terms & Condition
                        </span>
                      </label>
                    </div>
                    <button
                      // className=" text-sm float-right text-sm sm:text-base md:text-sm lg:text-lg xl:text-xl"
                      className=" text-base"
                      style={{ color: Colors.pink_clr }}
                    >
                      {" "}
                      Forgot Password ?
                    </button>
                  </div>
                  <button
                    onClick={handleGetStarted}
                    type="submit"
                    // className=" rounded-3xl  text-white w-full py-2 px-4 text-xs sm:text-base md:text-lg lg:text-xl xl:text-2xl focus:outline-none focus:shadow-outline"
                    className=" rounded-3xl  text-white w-full py-2 focus:outline-none focus:shadow-outline"
                    style={{ background: Colors.logo_clr }}
                  >
                    Create Account
                  </button>
                </form>
              </div>
            )}
            {currentSection === 3 && (
              <div className="p-4 lg:p-10 bg-white border-gray-300 border-solid w-full w-90 rounded-lg border-1">
                <h6
                  className="  font-bold text-xl"
                  style={{ color: Colors.logo_clr }}
                >
                  1/2
                </h6>

                <h1 className="mt-0 mb-5 font-bold text-left text-gray-900   ">
                  Brand Details.
                </h1>

                <form>
                  <input
                    type="compant"
                    id="name"
                    className="appearance-none border rounded-md w-full mt-5 bg-gray-100  py-5 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="Company Name"
                  />
                  <input
                    type="password"
                    id="name"
                    className="appearance-none border rounded-md w-full mt-5 bg-gray-100  py-5 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="Create Password"
                  />

                  <div className="relative">
                    <select
                      value={selectedOption}
                      onChange={handleChange}
                      className="block appearance-none  border rounded-md w-full mt-5 bg-gray-100 outline-none  py-5 px-3 text-gray-700  focus:shadow-outline border-gray-300 pr-8 leading-tight focus:outline-none focus:border-gray-500 "
                      id="grid-state"
                    >
                      <option value="" disabled>
                        Company Type
                      </option>
                      {options.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                      <svg
                        className="fill-current h-4 w-4"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                      </svg>
                    </div>
                  </div>

                  <button
                    type="submit"
                    onClick={handleGetStarted}
                    className=" rounded-3xl mt-5 text-white w-full  font-bold py-3 px-4 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl focus:outline-none focus:shadow-outline"
                    style={{ backgroundColor: Colors.logo_clr }}
                  >
                    Next
                  </button>
                </form>
              </div>
            )}

            {currentSection === 4 && (
              <div className="p-4 lg:p-10 bg-white border-gray-300 border-solid w-full w-90 rounded-lg border-1">
                <h6
                  className="  font-bold text-xl"
                  style={{ color: Colors.logo_clr }}
                >
                  2/2
                </h6>
                <h1 className="mt-0 mb-5  font-bold text-left text-gray-900 ">
                  Brand Details.
                </h1>

                <form>
                  <div className="relative w-full">
                    <label
                      htmlFor="fileInput"
                      className="w-full border-dotted h-44  align-middle border-4 rounded-lg bg-white   py-4 px-6 flex flex-col items-center justify-center cursor-pointer"
                      style={{ borderColor: Colors.logo_clr }}
                    >
                      <div className="mb-2">
                        <p className=" text-gray-300 text-4xl">+</p>
                      </div>
                      <span className="text-base text-gray-300">
                        Company Logo
                      </span>
                    </label>
                    <input
                      id="fileInput"
                      className="absolute inset-0 opacity-0 w-full"
                      type="file"
                    />
                  </div>

                  <textarea
                    id="descriptionInput"
                    type="text"
                    placeholder="Company Description"
                    className="appearance-none border rounded-md w-full align-top mt-5 bg-gray-100 h-40 py-5 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    rows={4}
                  ></textarea>
                  <Link href={'/home'}>
                    <button
                      type="submit"
                      className="rounded-3xl mt-5 text-white w-full  font-bold py-3 px-4 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl focus:outline-none focus:shadow-outline"
                      style={{ backgroundColor: Colors.logo_clr }}
                    >
                      Save
                    </button>
                  </Link>
                </form>
              </div>
            )}
          </div>
          {/* <div className="flex align-center  p-10 gap-10">
            <h4 style={{ color: Colors.pink_clr }}>Imprint</h4>
            <h4 style={{ color: Colors.pink_clr }}>Terms of use</h4>
            <h4 style={{ color: Colors.pink_clr }}>Dribble</h4>
          </div> */}
        </div>
       
      </div>
      
    </>
  );
};

export default Home;
