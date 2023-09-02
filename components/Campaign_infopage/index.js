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
import { apiCall, url } from "@/generalfunctions";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
import { useRouter } from 'next/router';
import Ref_Imagepop from './Ref_Imagepop';
import Ref_Image_content from './Ref_Imagepop/Ref_Image_content';
import Date_range_picker from '../Invoicepage/daterangepicker';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import 'tailwindcss/tailwind.css';

const Campaign_infopage = () => {

  const router = useRouter();

  const currentDate = new Date();

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
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [product_link, setProduct_link] = useState('');
  const [ref_link, setRef_link] = useState('');

  // Function to update state with data from the popup
  const handleRefPopupData = (data) => {
    setPopupData(data);
  };
  // Function to update state with data from the popup
  const handlePopupData = (data) => {
    setRefpopupData(data);
  };



  useEffect(() => {
    // Retrieve and parse the query parameters from the URL
    const { start_date, end_date } = router.query;

    if (start_date && end_date) {
      setStartRangeDate(new Date(start_date));
      setEndRangeDate(new Date(end_date));
    }
  }, [router.query]);

  const handleSubmit = async (e) => {

    e.preventDefault();


    const cookieValue = JSON.parse(Cookies.get('user_data'));
    console.log('campaigns cookieValue------------1', cookieValue?.token);

    const brand_detail = Cookies.get('brand_detail');
    const brandIds = Cookies.get('brand_id');

    let brandId = null;

    if (brand_detail) {
      try {
        brandId = JSON.parse(brand_detail)?.brand?.id;
      } catch (error) {
        console.error('Error parsing brand_detail:', error);
      }
    }

    if (!brandId && brandIds) {
      try {
        brandId = JSON.parse(brandIds);
      } catch (error) {
        console.error('Error parsing brand_ids:', error);
      }
    }
    console.log('brandId:', brandId);

    try {

      const postData = {
        "name": campaign_name,
        "description": campaign_desc,
        "starting_date": startformattedDate,
        "ending_date": endformattedDate,
        "brand_id": brandId,
        "status": "draft",
        "products": popupData || product_link,
        "references": refpopupData || ref_link,
      };
      const headers = {
        'Authorization': `Bearer ${cookieValue?.token}`,
      }
      const postResponse = await apiCall(`${url}/campaigns`, 'post', postData, headers);

      console.log('POST response campaigns-------------:', postResponse);
      if (postResponse?.status === "success") {


        Cookies.set('campaign_id', JSON.stringify(postResponse?.data?.id), { expires: 106500 });
        Cookies.set('campaign_name', JSON.stringify(postResponse?.data?.name), { expires: 106500 });

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
      // console.error('POST response register catrch error-------------', error);
      // toast.error('please enter the valid token campaigns', {
      //   position: 'top-center',
      //   autoClose: 5000,
      // });
    }
  };

  const refpopupData_link = refpopupData.map((item) => item?.link);
  const imagerefArray = refpopupData_link;

  // Use the join method to convert the array to a string
  const imagerefString = imagerefArray.join('');

  console.log('imagerefString', imagerefString);

  const propopupData_link = popupData.map((item) => item?.link);
  const imageproArray = propopupData_link;

  // Use the join method to convert the array to a string
  const imageproString = imageproArray.join('');

  console.log('imagerefString', imagerefString);

  console.log("popupData", popupData, refpopupData, imagerefString,imageproString);

  function formatDateToYYYYMMDD(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Add 1 to month because it is 0-based
    const day = String(date.getDate()).padStart(2, '0');

    return `${year}-${month}-${day}`;
  }

  // Example usage:
  const start_date = new Date(startDate);
  const end_date = new Date(endDate);
  const startformattedDate = formatDateToYYYYMMDD(start_date);
  const endformattedDate = formatDateToYYYYMMDD(end_date);
  // console.log(formattedDate); 

  console.log("startingfate", startDate, endDate, startformattedDate, endformattedDate);

  const handleStartDateChange = (date) => {

    setStartDate(date);
    // Calculate the minimum allowed end date (15 days from the start date)
    const minEndDate = new Date(date);
    minEndDate.setDate(minEndDate.getDate() + 14);
    if (endDate < minEndDate) {
      // If the current end date is less than the minimum allowed end date, update the end date
      setEndDate(minEndDate);
    }
  };


  return (
    <>
      <Image_popup isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      // onSubmit={handlePopupData}   
      >
        <div className="relative w-screen max-w-2xl max-h-full  min-w-xl ">

          <Image_content onPopupData={handlePopupData} />
        </div>
      </Image_popup>
      <Ref_Imagepop
        isOpen={isModalOpenRef}
        onClose={() => setIsModalOpenRef(false)}
      >
        <div className="relative w-screen max-w-2xl max-h-full   min-w-xl">
          <Ref_Image_content refpopupData={handleRefPopupData} />
        </div>
      </Ref_Imagepop>
      <div
        className="flex container_capmapign_info w-full"
        style={{ backgroundColor: Colors.button_light_clr }}
      >
        <div
          className="auto-cols-max  px-5 py-5 w-1/5"
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
              {/* <form
                onSubmit={handleSubmit}
              > */}
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
                        {imagerefString &&
                          <>
                            {/* <h3>{imagerefString}</h3> */}
                            <input
                            type="url"
                            value={imagerefString}
                            className='w-full p-3'
                            onChange={() => setIsModalOpen(false)}
                            readOnly
                            />
                          </>
                        }
                      </button>

                    </div>

                    {/* <div className="border h-48 rounded-md  w-full ms-3 shadow-md">
                        <input
                          type="file"
                          ref={inputFileRef}
                          
                          hidden
                        />
                        <button
                         
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
                      </div> */}
                  </div>
                  <div className="flex items-center mt-5">
                    <div className="flex-grow border-t border-gray-300"></div>
                    <div className="px-4 text-gray-600">OR</div>
                    <div className="flex-grow border-t border-gray-300"></div>
                  </div>
                  <div>
                    {/* <button className="border w-full my-3 py-2 rounded-md shadow-md">      </button> */}
                    <input
                      type="url"
                      id="url"
                      className="shadow-md appearance-none border rounded-md text-center w-full my-5 bg-white  py-5 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      placeholder="Paste link"
                      value={product_link}
                      onChange={(e) => setProduct_link(e.target.value)}
                    />
                  </div>
                </div>

                {/* <h1>Received data from popup: {popupData?.file}</h1> */}
                <div className="my-3">
                  <h3>Timelines</h3>
                  <h6>Set Creating Date</h6>

                  {/* <Calendar_component /> */}
                  {/* dater pocker start */}

                  <div className="flex flex-row my-5 border rounded-md justify-between items-center px-5">
                    <div className='relative w-full'>
                      <DatePicker
                        selected={startDate}
                        // onChange={(date) => setStartDate(date)}
                        onChange={handleStartDateChange}
                        selectsStart
                        startDate={startDate}
                        endDate={endDate}
                        placeholderText="Start Date"
                        className="w-full text-center p-2 rounded "
                        minDate={currentDate} // Set the minimum date to the current date
                      />
                      <div className="absolute top-2.5 left-0 text-gray-400 ps-2 ">
                        <Image
                          src={Images.calendar_icon}
                          alt=""
                          width={20}
                        />
                      </div>
                    </div>

                    <span className="mx-4 mt-0 text-gray-500">-</span>

                    <div className='relative mt-0 w-full'>

                      <DatePicker
                        selected={endDate}
                        onChange={(date) => setEndDate(date)}
                        selectsEnd
                        startDate={startDate}
                        endDate={endDate}
                        // minDate={startDate}
                        placeholderText="End Date"
                        className="w-full text-center p-2 rounded "
                        minDate={startDate || currentDate} // Set the minimum date to the current date
                      />
                      <div className="absolute top-2.5 left-0 text-gray-400 ps-2">
                        <Image
                          src={Images.calendar_icon}
                          alt=""
                          width={20}
                        />
                      </div>
                    </div>
                  </div>


                  {/* date picker end */}
                  <div className=''>
                    {/* <h2>Campaign Info Page date range</h2> */}
                    {startRangeDate !== null && endRangeDate !== null && (
                      <p>
                        Selected Date Range: {startRangeDate.toDateString()} - {endRangeDate.toDateString()}
                      </p>
                    )}
                    <div className='text-center w-full' style={{color:Colors.logo_clr}}>We required min 15 days to complete the campaign</div>
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
                        {imageproString &&
                          <>
                            {/* <h3>{imagerefString}</h3> */}
                            <input
                            type="url"
                            value={imageproString}
                            className='w-full p-3'
                            onChange={() => setIsModalOpenRef(false)}
                            readOnly
                            />
                          </>
                        }

                      </button>
                    </div>
                   

                    {/* <div className="border h-48 rounded-md  w-full ms-3 shadow-md"
                        onClick={() => setIsModalOpenRef(true)}
                      >
                        <button
                         
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
                      </div> */}
                  </div>
                  <div className="flex items-center mt-5">
                    <div className="flex-grow border-t border-gray-300"></div>
                    <div className="px-4 text-gray-600">OR</div>
                    <div className="flex-grow border-t border-gray-300"></div>
                  </div>
                  <div>
                    {/* <button className="border w-full my-3 py-2 rounded-md shadow-md">      </button> */}
                    <input
                      type="url"
                      id="url"
                      className="shadow-md appearance-none border rounded-md text-center w-full my-5 bg-white  py-5 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      placeholder="Paste link"
                      value={ref_link}
                      onChange={(e) => setRef_link(e.target.value)}
                    />
                  </div>
                </div>
                <Buttons label={"Proceed"} buttoncss={"py-3"}
                  onClick={handleSubmit}
                />
              </div>
              {/* </form> */}
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
