import React from "react";
import Image from "next/image";
import logo from "../images/logo.png";
import { useState } from "react";
import Link from "next/link";
import images from "@/images";
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
      <div className="flex items-center bg-zinc-100 height-70 ">
        <div className="auto-cols-max w-full">
          <div className="flex justify-center items-center p-10 w-full ">
            <div className=" p-10 bg-white screen1 border-gray-300 border-solid w-full min-h-800 rounded-lg border-1">
              <h1 className="mt-0 mb-5 text-left font-bold  mobile_title">
                Make Your Brand a next <br /> social media star &#x2B50;
              </h1>
              <h4 className="pt-5 mobile_para">
                Sets the width of the element to a specific width of 64
                pixels. Additionally, you can combine the w-1/2 className with
                other utility classNamees or use responsive variants to apply
                different widths at different screen
              </h4>
              <h4 className="pt-4 mobile_para">
                different widths at different screen sizes. For example,
                md:w-2/3 sets the width of the element
              </h4>
              <div className="flex justify-between pt-5 mt-5 align-middle items-center ">
                <Link href={'/signup'}
                 className="flex  tracking-wider align-middle justify-center items-center text-white w-full text-sm sm:text-base md:text-lg lg:text-lg xl:text-xl rounded-full px-6 lg:px-8 lg:py-4 py-2 bg-cyan-600"
                 style={{ backgroundColor: Colors.logo_clr }}
                >
                  <button
                    // onClick={handleGetStarted}
                   className="flex mobile_btn border items-center"
                   
                  >
                    Get Started{" "}
                    <svg
                      data-te-animation-init
                      data-te-animation-reset="true"
                      data-te-animation="[slide-right_1s_ease-in-out]"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-7 w-8 pl-3 mobile_arrow_icon"
                    >
                      <path d="M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.405z" />
                    </svg>
                  </button>
                </Link>
                <h6
                  className="flex items-center w-full justify-center text-base font-bold leading-9"
                  style={{ color: Colors.logo_clr }}
                >
                  <Link href={"/support"}> How it&lsquo;s Works</Link>
                </h6>
              </div>
            </div>           
          </div>
         
        </div>
      </div>
    </>
  );
};

export default Home;
