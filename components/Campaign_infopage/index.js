import React, { useEffect } from 'react';
import Colors from "@/styles/Colors";
import Left_Dashboard from "../Homepage/leftDashboard";
import { useRef, useState } from "react";
import Image from "next/image";
import Images from "@/images";
import Buttons from "../Button";
import Calendar_component from "./Calendar";
import Image_popup from "./ImagePopup";
import Image_content from "./ImagePopup/Image_content";
// import CalendarStripeCard from '../components/CalendarStripeCard';
import Cookies from 'js-cookie';
import { apiCall, url } from "@/generalfunation";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
import { useRouter } from 'next/router';
import Ref_Imagepop from './Ref_Imagepop';
import Ref_Image_content from './Ref_Imagepop/Ref_Image_content';

const Campaign_infopage = () => {

  const router = useRouter();

  const [selectedDate, setSelectedDate] = useState(null);
  const [startRangeDate, setStartRangeDate] = useState(null);
  const [endRangeDate, setEndRangeDate] = useState(null);
  const inputFileRef = useRef(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpenRef, setIsModalOpenRef] = useState(false);
  const [campaign_name, setCampaign_name] = useState('');
  const [campaign_desc, setCampaign_desc] = useState('');
  const [popupData, setPopupData] = useState([] ? [] : null); // State to hold popup data
  const [refpopupData, setRefpopupData] = useState([] ? [] : null); // State to hold popup data

  // Function to update state with data from the popup
  const handleRefPopupData = (data) => {
    setPopupData(data);
  };
  // Function to update state with data from the popup
  const handlePopupData = (data) => {
    setRefpopupData(data);
  };

  const namearray = popupData.filter((item) => item.name).join(", ");
  const descriptionarray = popupData.filter((item) => item.description).join(", ");
  const filearray = popupData.filter((item) => item.file).join(", ");

  console.log("namearray", namearray, descriptionarray, filearray);


  useEffect(() => {
    // Retrieve and parse the query parameters from the URL
    const { start_date, end_date } = router.query;

    if (start_date && end_date) {
      setStartRangeDate(new Date(start_date));
      setEndRangeDate(new Date(end_date));
    }
  }, [router.query]);

  console.log("startRangeDate startRangeDate", startRangeDate?.toDateString(), endRangeDate?.toDateString());

  const formatDateToYMD = (inputDate) => {
    const date = new Date(inputDate); // Convert the input date string to a Date object

    // Get the year, month, and day components
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Month is zero-based
    const day = String(date.getDate()).padStart(2, '0');

    // Combine them in the "yyyy-MM-dd" format
    const formattedDate = `${year}-${month}-${day}`;

    return formattedDate;
  }



  // Example usage:
  const endinputDateString = endRangeDate?.toDateString();
  const startinputDateString = startRangeDate?.toDateString();
  const endformattedDate = formatDateToYMD(endinputDateString);
  const startformattedDate = formatDateToYMD(startinputDateString);
  console.log('formattedDate', startformattedDate, endformattedDate); // Output: "2023-08-23"


  const handleSubmit = async (e) => {

    e.preventDefault();


    const cookieValue = JSON.parse(Cookies.get('user_data'));
    console.log('campaigns cookieValue------------1', cookieValue?.token);

    const brandId = JSON.parse(Cookies.get('brand_id'));
    console.log('categories cookieValue------------1', brandId);

    try {

      const postData = {
        "name": campaign_name,
        "description": campaign_desc,
        "starting_date": startformattedDate,
        "ending_date": endformattedDate,
        "brand_id": brandId,
        "status": "draft",
        "products": popupData,
        "references": refpopupData,

      };
      const headers = {
        'Authorization': `Bearer ${cookieValue?.token}`,
      }
      const postResponse = await apiCall(`${url}/campaigns`, 'post', postData, headers);

      console.log('POST response campaigns-------------:', postResponse);
      if (postResponse?.status) {


        Cookies.set('campaign_id', JSON.stringify(postResponse?.data?.id), { expires: 106500 });

        toast.success(postResponse?.message, {
          position: 'top-center',
          autoClose: 5000,
        });
        router.push('/marketplace')
        // router.push({
        //   pathname: '/marketplace',
        //   query: { apiData: JSON.stringify(data) },
        // });
      } else {
        // console.error('Error:', postResponse?.statusText);
        // alert('logibn api response else', postResponse?.statusText)
        toast.error("PLease enter the correct campaign details", {
          position: 'top-center',
          autoClose: 5000,
        });
      }

    } catch (error) {
      console.error('POST response register catrch error-------------', error);
      // toast.error('please enter the valid token campaigns', {
      //   position: 'top-center',
      //   autoClose: 5000,
      // });
    }
  };

  console.log("popupData", popupData);

  return (
    <>
      <Image_popup isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      // onSubmit={handlePopupData}   
      >
        <div className="relative w-full max-w-2xl max-h-full">

          <Image_content onPopupData={handlePopupData} />
        </div>
      </Image_popup>
      <Ref_Imagepop
        isOpen={isModalOpenRef}
        onClose={() => setIsModalOpenRef(false)}
      >
        <div className="relative w-full max-w-2xl max-h-full">
          <Ref_Image_content onPopupData={handleRefPopupData} />
        </div>
      </Ref_Imagepop>
      <div
        className="flex container_capmapign_info w-full"
        style={{ backgroundColor: Colors.button_light_clr }}
      >
        <div
          className="auto-cols-max  px-5 py-5 border w-1/5"
          style={{ backgroundColor: Colors.white_clr }}
        >
          <Left_Dashboard />
        </div>


        <div className="m-2 w-full auto-cols-max ">
          <div
            style={{ backgroundColor: Colors.white_clr }}
            className="auto-cols-max  p-3 rounded-md flex flex-row "
          >
            <div className="p-3 border rounded-md shadow-md m-2 divider_line w-2/3">
              <form onSubmit={handleSubmit}>
                <div className="">
                  <h2
                    style={{ color: Colors.pending_clr }}
                    className="font-bold campaign_info_title"
                  >
                    Campaign Info
                  </h2>
                  <h5>Qorem ipsum dolor sit amet, consectetur adipiscing elit.</h5>
                  {/* <p className="divider_line">fuyfudydyd</p> */}
                  {/* <p class="border-imaged-element">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tincidunt dolor non ante feugiat gravida. Vivamus hendrerit metus sit amet ligula pretium, a dapibus ante semper.</p> */}
                  <hr className="divider_line my-5" />
                  <div className="my-3">
                    <h4 className="">Campaign Name</h4>
                    <h6 className="mb-3">
                      Qorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </h6>

                    <input
                      type="text"
                      id="small-input"
                      className="shadow-md block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-white-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      value={campaign_name}
                      onChange={(e) => setCampaign_name(e.target.value)}
                    />
                  </div>
                  <div className="my-3">
                    <h4>Campaign Description</h4>
                    <h6 className="mb-3">
                      Qorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </h6>

                    <textarea
                      id="message"
                      rows="4"
                      className=" shadow-mdblock p-2.5 w-full text-sm text-gray-900 bg-white-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Start Typing..."
                      value={campaign_desc}
                      onChange={(e) => setCampaign_desc(e.target.value)}
                    ></textarea>
                  </div>

                  <div className="my-3">
                    <h4>Product</h4>
                    <h6 className="mb-3">
                      Qorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </h6>

                    <div className="flex flex-row justify-between">
                      <div className="border h-48 rounded-md  w-full me-3 shadow-md"
                        onClick={() => setIsModalOpen(true)}
                      >
                        {/* <input
                      type="file"
                      ref={inputFileRef}
                      onChange={(e) => onFilechange(e)}
                      hidden
                      className=""
                    /> */}
                        <button
                          // onClick={() => onBtnClick()}
                          className="h-48  w-full "
                        >
                          <Image
                            src={Images.plus_icon}
                            width={20}
                            className="mx-auto "
                            alt=""
                          />
                          <p className="mt-3" style={{ color: Colors.logo_clr }}>
                            Add Image
                          </p>
                        </button>
                      </div>
                      <div className="border h-48 rounded-md  w-full ms-3 shadow-md">
                        <input
                          type="file"
                          ref={inputFileRef}
                          // onChange={(e) => onFilechange(e)}
                          hidden
                        />
                        <button
                          // onClick={() => onBtnClick()}
                          className="h-48  w-full"
                        >
                          <Image
                            src={Images.plus_icon}
                            width={20}
                            className="mx-auto "
                            alt=""
                          />
                          <p className="mt-3" style={{ color: Colors.logo_clr }}>
                            Add Image
                          </p>
                        </button>
                      </div>
                    </div>
                    <div>
                      {/* <button className="border w-full my-3 py-2 rounded-md shadow-md">      </button> */}
                      <input
                        type="url"
                        id="url"
                        className="shadow-md appearance-none border rounded-md text-center w-full my-5 bg-white  py-5 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        placeholder="Paste link"
                      />
                    </div>
                  </div>

                  {/* <h1>Received data from popup: {popupData?.file}</h1> */}
                  <div className="my-3">
                    <h3>Timelines</h3>
                    <h6>Set Creating Date</h6>

                    <Calendar_component />
                    <div>
                      {/* <h2>Campaign Info Page date range</h2> */}
                      {startRangeDate !== null && endRangeDate !== null && (
                        <p>
                          Selected Date Range: {startRangeDate.toDateString()} - {endRangeDate.toDateString()}
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="my-3">
                    <h4>Content Reference</h4>
                    <h6 className="mb-3">
                      Qorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </h6>

                    <div className="flex flex-row justify-between">
                      <div className="border h-48 rounded-md  w-full me-3 shadow-md"
                        onClick={() => setIsModalOpenRef(true)}
                      >

                        <button
                          // onClick={() => onBtnClick()}
                          className="h-48  w-full "
                        >
                          <Image
                            src={Images.plus_icon}
                            width={20}
                            className="mx-auto "
                            alt=""
                          />
                          <p className="mt-3" style={{ color: Colors.logo_clr }}>
                            Add Image
                          </p>
                        </button>
                      </div>

                      <div className="border h-48 rounded-md  w-full ms-3 shadow-md"
                       onClick={() => setIsModalOpenRef(true)}
                      >
                        {/* <input
                      type="file"
                      ref={inputFileRef}
                      onChange={(e) => onFilechange(e)}
                      hidden
                    /> */}
                        <button
                          // onClick={() => onBtnClick()}
                          className="h-48  w-full"
                        >
                          <Image
                            src={Images.plus_icon}
                            width={20}
                            className="mx-auto "
                            alt=""
                          />
                          <p className="mt-3" style={{ color: Colors.logo_clr }}>
                            Add Image
                          </p>
                        </button>
                      </div>
                    </div>
                    <div>
                      {/* <button className="border w-full my-3 py-2 rounded-md shadow-md">      </button> */}
                      <input
                        type="url"
                        id="url"
                        className="shadow-md appearance-none border rounded-md text-center w-full my-5 bg-white  py-5 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        placeholder="Paste link"
                      />
                    </div>
                  </div>
                  <Buttons label={"Proceed"} buttoncss={"py-3"} />
                </div>
              </form>
              <ToastContainer />
            </div>
            {/* right */}
            <div className="auto-cols-max p-5 border rounded-md shadow-md min-h-screen flex flex-col m-2 w-2/4">
              <h3>Today Highlights</h3>
              <h5>Qorem ipsum dolor sit amet, consectetur adipiscing elit.</h5>
              {/* <div className="h-full "> */}
              <Image
                src={Images.campaign_info_imgs}
                className="image_capign_info w-full"
                // height={1000}
                alt=""
              />
              {/* </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Campaign_infopage;
