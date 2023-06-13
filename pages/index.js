import Image from "next/image";
import logo from "../images/logo.png";
import { useState } from "react";

export default function Home() {
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
      <div className="container flex min-w-full mx-auto bg-zinc-100">
        <div className="whalf ">
          <Image src={logo} width={190} alt="" />
          <div className="flex justify-center px-4 lg:px-12">
            {currentSection === 1 && (
              <div className="p-4 lg:px-10 bg-white border-gray-300 border-solid w-full  rounded-2xl border-1">
                <h4 className="mt-0 mb-5 font-extrabold text-left text-gray-900 leading-20 text-base sm:text-lg md:text2xl lg:text-3xl xl:text-5xl ">
                  Make Your Brand a next social media star &#x2B50;
                </h4>
                <p className="pt-5  text-base sm:text-lg md:text-lg lg:text-xl xl:text-xl ">
                  Sets the width of the element to a specific width of 64
                  pixels. Additionally, you can combine the w-1/2 className with
                  other utility classNamees or use responsive variants to apply
                  different widths at different screen
                </p>
                <p className="pt-4  text-base sm:text-lg md:text-lg lg:text-xl xl:text-xl">
                  different widths at different screen sizes. For example,
                  md:w-2/3 sets the width of the element
                </p>
                <div className="flex justify-between pt-5 mt-10 align-middle ">
                  <button
                    onClick={handleGetStarted}
                    className="flex font-bold tracking-wider align-middle justify-center items-center text-white w-full text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl rounded-full px-6 lg:px-8 lg:py-4 py-2 bg-cyan-600"
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
                  <h6 className="flex items-center w-full justify-center text-base font-bold leading-9 text-cyan-600">
                    How it's Works
                  </h6>
                </div>
              </div>
            )}
            {currentSection === 2 && (
              <div className="p-4 lg:px-10 bg-white border-gray-300 border-solid w-full w-90 rounded-2xl border-1">
                <p className=" text-base">
                  {" "}
                  Already a member ?{" "}
                  <span className=" text-cyan-700 pl-3 font-bold">Login</span>
                </p>
                <h4 className="mt-0 mb-5  font-extrabold text-left text-gray-900 leading-20 text-base sm:text-lg md:text2xl lg:text-3xl xl:text-5xl ">
                  Create New Account.
                </h4>

                <form>
                  <div className="flex">
                    <input
                      type="text"
                      id="name"
                      className="appearance-none border rounded-2xl w-full py-5 bg-gray-100 px-3 mr-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      placeholder="First Name"
                    />
                    <input
                      type="text"
                      id="name"
                      className="appearance-none border rounded-2xl w-full ml-2 py-5 bg-gray-100 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      placeholder="Last Name"
                    />
                  </div>
                  <input
                    type="email"
                    id="name"
                    className="appearance-none border rounded-2xl w-full mt-5 bg-gray-100  py-5 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="exampl@123.com"
                  />
                  <input
                    type="password"
                    id="name"
                    className="appearance-none border rounded-2xl w-full mt-5 bg-gray-100  py-5 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="Create Password"
                  />
                  <input
                    type="password"
                    id="name"
                    className="appearance-none border rounded-2xl w-full mt-5 bg-gray-100  py-5 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="Confirm Password"
                  />
                  <div className=" flex mt-5 justify-between">
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="myCheckbox"
                        className="form-checkbox h-5 w-5 text-cyan-600"
                      />
                      <label htmlFor="myCheckbox" className="ml-2 text-black">
                        I accept co. Name{" "}
                        <span className=" text-cyan-600 font-bold text-md text-sm sm:text-base md:text-sm lg:text-lg xl:text-xl">
                          {" "}
                          Terms & Condition
                        </span>
                      </label>
                    </div>
                    <button className=" text-cyan-600 font-bold text-md float-right text-sm sm:text-base md:text-sm lg:text-lg xl:text-xl">
                      {" "}
                      Forgot Password ?
                    </button>
                  </div>
                  <button
                    onClick={handleGetStarted}
                    type="submit"
                    className="bg-cyan-600 hover:bg-cyan-600 rounded-3xl mt-5 text-white w-full  font-bold py-3 px-4 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl focus:outline-none focus:shadow-outline"
                  >
                    Create Account
                  </button>
                </form>
              </div>
            )}
            {currentSection === 3 && (
              <div className="p-4 lg:px-10 bg-white border-gray-300 border-solid w-full w-90 rounded-2xl border-1">
                <h6 className=" text-cyan-600 font-bold text-xl">1/2</h6>

                <h4 className="mt-0 mb-5 font-extrabold text-left text-gray-900 leading-20  text-base sm:text-lg md:text2xl lg:text-3xl xl:text-5xl">
                  Brand Details.
                </h4>

                <form>
                  <input
                    type="compant"
                    id="name"
                    className="appearance-none border rounded-2xl w-full mt-5 bg-gray-100  py-5 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="Company Name"
                  />
                  <input
                    type="password"
                    id="name"
                    className="appearance-none border rounded-2xl w-full mt-5 bg-gray-100  py-5 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="Create Password"
                  />

                  <div className="relative">
                    <select
                      value={selectedOption}
                      onChange={handleChange}
                      className="block appearance-none   border   rounded-2xl w-full mt-5 bg-gray-100  py-5 px-3 text-gray-700  focus:shadow-outline border-gray-300 pr-8 leading-tight focus:outline-none focus:border-gray-500 outline-none"
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
                    className="bg-cyan-600 hover:bg-cyan-600 rounded-3xl mt-5 text-white w-full  font-bold py-3 px-4 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl focus:outline-none focus:shadow-outline"
                  >
                    Next
                  </button>
                </form>
              </div>
            )}

            {currentSection === 4 && (
              <div className="p-4 lg:px-10 bg-white border-gray-300 border-solid w-full w-90 rounded-2xl border-1">
                <h6 className=" text-cyan-600 font-bold text-xl">1/2</h6>
                <h4 className="mt-0 mb-5  font-extrabold text-left text-gray-900 leading-20 text-base sm:text-lg md:text2xl lg:text-3xl xl:text-5xl">
                  Brand Details.
                </h4>

                <form>
                  <div className="relative w-full">
                    <label
                      htmlFor="fileInput"
                      className="w-full border-dotted border-cyan-600 h-44  align-middle border-4 rounded-2xl bg-white   py-4 px-6 flex flex-col items-center justify-center cursor-pointer"
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
                    className="appearance-none border rounded-2xl w-full align-top mt-5 bg-gray-100 h-40 py-5 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    rows={4}
                  ></textarea>

                  <button
                    type="submit"
                    className="bg-cyan-600 hover:bg-cyan-600 rounded-3xl mt-5 text-white w-full  font-bold py-3 px-4 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl focus:outline-none focus:shadow-outline"
                  >
                    Save
                  </button>
                </form>
              </div>
            )}
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
}
