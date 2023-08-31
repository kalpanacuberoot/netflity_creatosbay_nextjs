import Colors from "@/styles/Colors";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from 'next/navigation';
import Brand2page from "../Brand2";
import { apiCall, url } from "@/generalfunctions";
import Cookies from 'js-cookie';

const Brand1page = ({ onClick }) => {

    const router = useRouter();

    const [companyName, setCompanyName] = useState('');
    const [password, setPassword] = useState('');
    const [open, setOpen] = useState(false);
    const [dropdownvalues, setDropdownvalues] = useState([]);

    const options = ["Option 1", "Option 2", "Option 3"];

    const [selectedOption, setSelectedOption] = useState("");

    const handleChange = (e) => {
        setSelectedOption(e.target.value);
    };

    const onNextpage = () => {
        // router.push('/Brand2')
        setOpen(!true)
    }

    // const getCompanyCategories = async() => {
    //    
    //     console.log("brand dcreens------------", token);
    //     try {

    //         const headers = {
    //             'Authorization': `Bearer ${token?.token}`,

    //         }
    //         const getResponse = await apiCall(`${url}/categories`, 'get', headers);
    //         console.log('GET feedbacks response:', getResponse);
    //         if (getResponse.ok) {

    //             console.log('categories result------------', result);
    //         } else {
    //             console.error('Error:', response.statusText);
    //             alert('categories api response else', response.statusText)
    //         }

    //     } catch (error) {
    //         console.error('Get response register catrch error-------------', error);
    //     }
    // };
    const getCompanyCategories = async () => {
      
        const cookieValue = JSON.parse(Cookies.get('user_data'))
        console.log('categories cookieValue------------', cookieValue.token);


        try {
            const response = await fetch(`${url}/categories`, {
                method: 'Get',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${cookieValue.token}`,
                },

            });

            console.log('categories response------', response)

            if (response.ok) {
                const result = await response.json();
                console.log("brand result------------", result?.data?.data);
              
                setDropdownvalues(result?.data?.data);
                toast.success('Code is sent to your emailId', {
                    position: 'top-center', // Set the toast position
                    autoClose: 3000, // Close the toast after 3 seconds
                  });



            } else {
                console.error('Error:', response.statusText);
                // alert('categories api response else', response?.statusText)
                toast.error('Unauthorized', {
                    position: 'top-center', // Set the toast position
                    autoClose: 3000, // Close the toast after 3 seconds
                  });
            }
        } catch (error) {
            console.error('Error:', error);
            toast.error('Code is sent to your emailId', {
                position: 'top-center', // Set the toast position
                autoClose: 3000, // Close the toast after 3 seconds
              });
        }
    };

    useEffect(() => {
        getCompanyCategories();
    }, [])

    console.log("setDropdownvalues", dropdownvalues);


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

                    <form >
                        <input
                            type="compant"
                            id="name"
                            className="appearance-none border rounded-md w-full mt-5 bg-gray-100  py-5 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            placeholder="Company Name"
                            value={companyName}
                            onChange={(e) => setCompanyName(e.target.value)}
                            required
                        />
                        <input
                            type="password"
                            id="name"
                            className="appearance-none border rounded-md w-full mt-5 bg-gray-100  py-5 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            placeholder="Create Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
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
                                {/* {options.map((option) => (
                                    <option key={option} value={option}>
                                        {option}
                                    </option>
                                ))} */}
                                {dropdownvalues.map((item, index) => (
                                    <option key={index}>
                                        {item?.name}
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
