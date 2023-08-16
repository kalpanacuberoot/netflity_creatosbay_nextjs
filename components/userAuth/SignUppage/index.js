import Colors from "@/styles/Colors"
import Link from "next/link"

const Signuppage = () => {
    return (
        <>
            <div className="container p-4 lg:p-10 border-gray-300 border-solid  bg-zinc-100  rounded-lg border-1">
                <div className="bg-white p-5 rounded-md">
                    <h4 className=" text-base">
                        {" "}
                        Already a member ?{" "}
                        <span
                            className="  pl-3 font-bold"
                            style={{ color: Colors.logo_clr }}
                        >
                            {" "}
                            <Link href={"/login"}>Login </Link>
                        </span>
                    </h4>
                    <h1 className="mt-0 mb-5  font-bold text-left text-gray-900   ">
                        Create New Account.
                    </h1>

                    <form>
                        <div className="flex">
                            <input
                                type="text"
                                id="name"
                                className="appearance-none border rounded-md w-full py-5 bg-gray-100 px-3 mr-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                placeholder="First Name"
                            />
                            <input
                                type="text"
                                id="name"
                                className="appearance-none border rounded-md w-full ml-2 py-5 bg-gray-100 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                placeholder="Last Name"
                            />
                        </div>
                        <input
                            type="email"
                            id="name"
                            className="appearance-none border rounded-md w-full mt-5 bg-gray-100  py-5 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            placeholder="exampl@123.com"
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
                        <div className=" flex my-5 justify-between">
                            <div className="flex items-center">
                                <input
                                    type="checkbox"
                                    id="myCheckbox"
                                    className="form-checkbox h-5 w-5 "
                                    style={{ backgroundColor: Colors.logo_clr }}
                                />
                                <label htmlFor="myCheckbox" className="ml-2 text-black">
                                    I accept co. Name{" "}
                                    <span style={{ color: Colors.pink_clr }}>
                                        {" "}
                                        Terms & Condition
                                    </span>
                                </label>
                            </div>
                            <Link href={"/forgot"}>
                                <button
                                    className="  float-right"
                                    style={{ color: Colors.pink_clr }}
                                >
                                    {" "}
                                    Forgot Password ?
                                </button>
                            </Link>
                        </div>
                        <Link href={'/brand'}>
                            <button
                                // onClick={handleGetStarted}
                                type="submit"
                                className=" rounded-3xl  text-white w-full py-3 px-4  focus:outline-none focus:shadow-outline"
                                style={{ background: Colors.logo_clr }}
                            >
                                Create Account
                            </button>
                        </Link>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Signuppage