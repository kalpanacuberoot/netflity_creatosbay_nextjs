import { useState, useEffect, useRef } from "react";
import Brand1page from "./Brand1";
import Brand2page from "./Brand2";
import { useRouter } from 'next/navigation';
import Colors from "@/styles/Colors";
import Link from "next/link";
import { apiCall, url } from "@/generalfunation";
import Cookies from 'js-cookie';

const Brandscreens = () => {
    const router = useRouter();

    const [companyName, setCompanyName] = useState('');
    const [password, setPassword] = useState('');
    const [open, setOpen] = useState(false);
    const [dropdownvalues, setDropdownvalues] = useState([]);
    const [file, setFile] = useState(null);
    const fileInputRef = useRef(null);



    const handleFileChange = (event) => {
        const selectedFile = event.target.files[0];
        setFile(selectedFile);
      };

    console.log("file", file);


    const options = ["Option 1", "Option 2", "Option 3"];

    const [selectedOption, setSelectedOption] = useState("");



    const onNextpage = () => {
        // router.push('/Brand2')
        setOpen(!open)
    }

    // const handleSubmit = async () => {

    //     try {
    //         // const getResponse = await apiCall('https://jsonplaceholder.typicode.com/posts/1', 'get');
    //         // console.log('GET response:', getResponse);

    //         const postData = {
    //             "email": email,
    //             "phone": phone,
    //             "type": options,
    //             "text": desc,
    //         };
    //         const headers = {
    //             'Authorization': `Bearer ${token?.token}`,
    //         }

    //         const postResponse = await apiCall(`${url}/feedbacks`, 'post', postData, headers);

    //         console.log('support response-------------:', postResponse);
    //         if (postResponse?.status) {
    //             // const usertoken = localStorage.setItem('user_data', JSON.stringify(postResponse));
    //             toast.success('Feedback Successfully', {
    //                 position: 'top-center',
    //                 autoClose: 5000,
    //             });

    //             router.push('/')
    //         } else {
    //             console.error('Error:', postResponse?.statusText);
    //             alert('logibn api response else', postResponse?.statusText)
    //         }
    //         // const usertoken = localStorage.setItem('user_data', JSON.stringify(postResponse.token));
    //     } catch (error) {
    //         console.error('support response catrch error-------------', error);
    //     }
    // };

    const handleUploadClick = async () => {
        if (!file) {
          alert('Please select an image to upload.');
          return;
        }

        const cookieValue = JSON.parse(Cookies.get('user_data'))
        console.log('categories cookieValue------------2', cookieValue?.token);
    
        const formData = new FormData();
        formData.append('file', file);
    
        try {
          const response = await fetch('https://backend.creatorsbay.app/api/saveimage', {
            method: 'POST',
            headers: {
              'Authorization': `Bearer ${cookieValue?.token}`,
            },
            body: formData,
          });

          console.log("response image data",response);
    3
          if (response.ok) {
            console.log("image response ok",response);
            alert('Image uploaded successfully.');
          } else {
            alert('Image upload failed.');
          }
        } catch (error) {
          console.error('Error uploading image:', error);
        }
      };
    
    


    const getCompanyCategories = async () => {
        // const token = JSON.parse(localStorage.getItem('user_data'));


        const cookieValue = JSON.parse(Cookies.get('user_data'))
        console.log('categories cookieValue------------1', cookieValue?.token);

        try {
            const response = await fetch(`${url}/categories`, {
                method: 'Get',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${cookieValue?.token}`,
                },

            });

            console.log('categories response------', response)

            if (response.ok) {
                const result = await response.json();
                console.log("brand result------------", result?.data?.data);
                // localStorage.setItem('user_data', JSON.stringify(result.token));
                setDropdownvalues(result?.data?.data);




            } else {
                console.error('Error:', response.statusText);
                alert('categories api response else', response.statusText)
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    useEffect(() => {
        getCompanyCategories();
    }, [])

    console.log("setDropdownvalues", dropdownvalues);



    return (
        <>
            {/* {!open && <Brand1page onClick={() => onNextpage()} />}
            {open && <Brand2page />} */}

            <div className="p-4 lg:p-10   bg-zinc-100 border-gray-300 border-solid w-full w-90 rounded-lg border-1">

                {/* {!open &&
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

                                    {dropdownvalues.map((item, index) => (
                                        <option key={index}>
                                            {item.name}
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
                                onClick={() => onNextpage()}
                                // onClick={() => setOpen(false)}
                                className=" rounded-3xl mt-5 text-white w-full  font-bold py-3 px-4  focus:outline-none focus:shadow-outline"
                                style={{ backgroundColor: Colors.logo_clr }}
                            >
                                Next
                            </button>

                        </form>
                    </div>} */}
                {/* {open && */}
                <div className="p-4 lg:p-10 bg-zinc-100 border-gray-300 border-solid w-full w-90 rounded-lg border-1">
                    <div className="bg-white p-5 rounded-md">
                        <h6 className="  font-bold" style={{ color: Colors.logo_clr }}>
                            2/2
                        </h6>
                        <h1 className="mt-0 mb-5  font-bold text-left text-gray-900 ">
                            Brand Details.
                        </h1>

                        <form
                        // onSubmit={onhandleFileSubmit}
                        >
                            {/* <div className="relative w-full" onClick={onhandleFileSubmit}> */}
                            {/* <label
                                        htmlFor="fileInput"
                                        className="w-full border-dotted h-44  align-middle border-4 rounded-lg bg-white   py-4 px-6 flex flex-col items-center justify-center cursor-pointer"
                                        style={{ borderColor: Colors.logo_clr }}
                                    >
                                        <div className="mb-2">
                                            <h4 className=" text-gray-300">+</h4>
                                        </div>
                                        <span className="text-base text-gray-300">
                                            Company Logo
                                        </span>
                                    </label> */}
                            {/* <input
                                        id="fileInput"
                                        className="absolute inset-0 opacity-0 w-full"
                                        type="file"
                                        accept="image/*" onChange={handleFileChange}
                                    /> */}
                            {/* <input
                                        id="fileInput"
                                        className="absolute inset-0 opacity-0 w-full"
                                        type="file"
                                        accept="image/*" onChange={handleFileChange}
                                    /> */}
                            {/* </div> */}

                            <div className="flex items-center justify-center w-full"
                            // onClick={() => onhandleFileSubmit()}
                            >
                                <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                        {/* <svg className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                                            </svg> */}
                                        {/* <h4 classNameName=" text-gray-300">+</h4> */}
                                        <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                                        {/* <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p> */}
                                    </div>
                                    <input id="dropzone-file" type="file" className="" accept="image/*"
                                        //  ref={fileInputRef}
                                        // onChange={(event) => handleFileChange(event)}
                                    />
                                    {/* <button onClick={() => onhandleFileSubmit()}>Upload File</button> */}
                                    {/* // onChange={(event) => handleFileChange(event)} /> */}
                                </label>
                            </div>

                            <input type="file" accept="image/*" onChange={handleFileChange} />
                            <div onClick={handleUploadClick}>Upload Image</div>
                            <textarea
                                id="descriptionInput"
                                type="text"
                                placeholder="Company Description"
                                className="appearance-none border rounded-md w-full align-top mt-5 bg-gray-100 h-40 py-5 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                rows={4}
                            ></textarea>
                            {/* <Link href={"/home"}> */}
                            <button
                                type="submit"
                                className="rounded-3xl mt-5 text-white w-full py-3 px-4  focus:outline-none focus:shadow-outline"
                                style={{ backgroundColor: Colors.logo_clr }}
                            >
                                Save
                            </button>
                            {/* </Link> */}
                        </form>
                    </div>
                </div>
                {/* } */}
            </div>

        </>
    )
}
export default Brandscreens