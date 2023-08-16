import Colors from "@/styles/Colors";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from 'next/navigation'
import Brand2page from "../Brand2";


const Brand1page = ({onClick}) => {

    const router = useRouter();

    const [open,setOpen] = useState(false);

    const options = ["Option 1", "Option 2", "Option 3"];

    const [selectedOption, setSelectedOption] = useState("");

    const handleChange = (e) => {
        setSelectedOption(e.target.value);
    };

    const onNextpage = () => {
        // router.push('/Brand2')
        setOpen(!true)
    }
    return (
        <>

            <div className="p-4 lg:p-10   bg-zinc-100 border-gray-300 border-solid w-full w-90 rounded-lg border-1">

                <div className="bg-white p-5  rounded-md">
                    <h4 className="font-bold" style={{ color: Colors.logo_clr }}>
                        1/2
                    </h4>

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
                                    <h4ath d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                                </svg>
                            </div>
                        </div>

                        <button
                            type="submit"
                            // onClick={handleGetStarted}
                            // onClick={() =>  onNextpage()}
                            onClick={onClick}
                            className=" rounded-3xl mt-5 text-white w-full  font-bold py-3 px-4  focus:outline-none focus:shadow-outline"
                            style={{ backgroundColor: Colors.logo_clr }}
                        >
                            Next
                        </button>
                       
                    </form>
                </div>
            </div>
            
        </>
    )
}
export default Brand1page