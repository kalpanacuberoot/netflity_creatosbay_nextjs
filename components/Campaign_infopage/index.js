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
import dayjs, { Dayjs } from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { StaticDateRangePicker } from '@mui/x-date-pickers-pro/StaticDateRangePicker';
import { PickersShortcutsItem } from '@mui/x-date-pickers/PickersShortcuts';
import { DateRange } from '@mui/x-date-pickers-pro';
import TextField from '@mui/material/TextField';



const Campaign_infopage = () => {

  const router = useRouter();


  const shortcutsItems = [
    // {
    //   label: 'This Week',
    //   getValue: () => {
    //     const startOfCurrentWeek = today.startOf('week');
    //     const endOfCurrentWeek = today.endOf('week');
    //     return [startOfCurrentWeek, endOfCurrentWeek];
    //   },
    // },
    {
      label: 'Current Month',
      getValue: () => {
        const startOfCurrentMonth = today.startOf('month');
        const endOfCurrentMonth = today.endOf('month');
        return [startOfCurrentMonth, endOfCurrentMonth];
      },
    },
    {
      label: 'Next Month',
      getValue: () => {
        const startOfNextMonth = today.endOf('month').add(1, 'day');
        const endOfNextMonth = startOfNextMonth.endOf('month');
        return [startOfNextMonth, endOfNextMonth];
      },
    },
    { label: 'Reset', getValue: () => [null, null] },
  ];

  const today = dayjs();
  const initialDateRange = shortcutsItems[0].getValue(); // Set initial date range

  const handleDateChange = (dateRange) => {
    const [start, end] = dateRange;
    console.log("handleDateChange", start, end);
    const minimumDate = start.add(15, 'day');
    // const starting_data = start[0]?.$D-start[0]?.$M-start[0]?.$y
    console.log("starting_data", start.format('YYYY-MM-DD'));
    setManualStartDate(start.format('YYYY-MM-DD'))
    setManualEndDate(end.format('YYYY-MM-DD'))
    if (end.isBefore(minimumDate)) {
      alert('Please select a date range with a minimum of 15 days between the start and end dates.');
    } else {
      setSelectedRange(dateRange);
    }
  };

  const [selectedRange, setSelectedRange] = useState(initialDateRange);
  const [dateInput, setDateInput] = useState('');
  const [manualStartDate, setManualStartDate] = useState('');
  const [manualEndDate, setManualEndDate] = useState('');
  const [calendarVisible, setCalendarVisible] = useState(false);




  // const handleDateChange = (dateRange) => {
  //   setSelectedRange(dateRange);
  // };

  const handleDateInputChange = (event) => {
    setDateInput(event.target.value);
  };

  console.log("selectedRangeselectedRange", selectedRange);

  const handleApplyDateInput = () => {
    setManualStartDate(selectedRange[0])
    setManualEndDate(selectedRange[1])
    // const parsedDate = dayjs(dateInput, 'YYYY-MM-DD');
    // if (parsedDate.isValid()) {
    //   const newDateRange = [parsedDate, parsedDate];
    //   setSelectedRange(newDateRange);
    // } else {
    //   alert('Invalid date format. Please use YYYY-MM-DD.');
    // }
  };

  const currentDate = new Date();

  const [selectedDate, setSelectedDate] = useState(null);
  const [startRangeDate, setStartRangeDate] = useState(null);
  const [endRangeDate, setEndRangeDate] = useState(null);
  const inputFileRef = useRef(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpenRef, setIsModalOpenRef] = useState(false);
  const [campaign_name, setCampaign_name] = useState('');
  const [campaign_desc, setCampaign_desc] = useState('');
  const [popupData, setPopupData] = useState([] ? [] : null);
  const [refpopupData, setRefpopupData] = useState([] ? [] : null);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [product_link, setProduct_link] = useState('');
  const [ref_link, setRef_link] = useState('');
  const [loading, setLoading] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [suggestions, setSuggestions] = useState([]);

  const handleRefPopupData = (data) => {
    setPopupData(data);
  };

  const handlePopupData = (data) => {
    setRefpopupData(data);
  };



  useEffect(() => {

    checkIsMobile();

    window.addEventListener('resize', checkIsMobile);

    const { start_date, end_date } = router.query;

    if (start_date && end_date) {
      setStartRangeDate(new Date(start_date));
      setEndRangeDate(new Date(end_date));
    }

    return () => {
      window.removeEventListener('resize', checkIsMobile);
    };
  }, [router.query]);

  // const handleGrammarCheck = async () => {
  //   try {
  //     const response = await fetch('https://api.grammarly.com/v1/check', {
  //       method: 'POST',
  //       headers: {
  //         'Authorization': 'Bearer 212|uidNhXXZLJ56a0K4HF1kuKUa1AbSu3G8p3cvapNl', // Replace with your Grammarly API key
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify({
  //         "text":campaign_desc,
  //         "language": 'en-US',
  //       }),
  //     });

  //     if (!response.ok) {
  //       throw new Error('Failed to fetch data');
  //     }
  //     console.log("handlegrammarcheckresponse",response);
  //     const data = await response.json();

  //     console.log("handlegrammarcheck",data);

  //     // Extract suggestions from the API response
  //     const grammarSuggestions = data.suggestions || [];

  //     // Update the state with suggestions
  //     setSuggestions(grammarSuggestions);
  //   } catch (error) {
  //     console.error('Error:', error);
  //   }
  // };


  console.log("suggestionssuggestions", suggestions);

  const handleSubmit = async (e) => {
    setLoading(true)
    e.preventDefault();

    try {
      let cookieValue = Cookies.get('user_data');
      let userId = Cookies?.get('user_data');
      console.log('categories cookieValue------------1', userId?.user?.id);

      console.log('categories cookieValue------------1', cookieValue);
      const checkBrand = JSON.parse(cookieValue)?.user?.type

      if (typeof cookieValue === 'undefined' || checkBrand !== 'brand') {
        console.log('User not authenticated, navigating to login page...');
        router.push('/login');
        console.log('categories cookieValue----brand--------userId', cookieValue?.token);

      }
      else {

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
        console.log('brandId:campaign_info', brandId);

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

            toast.success('Campaign is created Successfully', {
              position: 'top-center',
              autoClose: 5000,
            });

            router.push('/marketplace')
            setLoading(false)
          } else {

            toast.error("PLease enter the correct campaign details", {
              position: 'top-center',
              autoClose: 5000,
            });
          }

        } catch (error) {

        }
      }
    } catch (error) {
      console.error('Error parsing user_data cookie:', error);
    }
  };

  const refpopupData_link = refpopupData.map((item) => item?.link);
  const imagerefArray = refpopupData_link;

  const imagerefString = imagerefArray.join('');

  console.log('imagerefString', imagerefString);

  const propopupData_link = popupData.map((item) => item?.link);
  const imageproArray = propopupData_link;

  const imageproString = imageproArray.join('');

  console.log('imagerefString', imagerefString);

  console.log("popupData", popupData, refpopupData, imagerefString, imageproString);

  function formatDateToYYYYMMDD(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');

    return `${year}-${month}-${day}`;
  }

  const start_date = new Date(startDate);
  const end_date = new Date(endDate);
  const startformattedDate = formatDateToYYYYMMDD(start_date);
  const endformattedDate = formatDateToYYYYMMDD(end_date);


  console.log("startingfate", startDate, endDate, startformattedDate, endformattedDate);

  const handleStartDateChange = (date) => {

    setStartDate(date);

    const minEndDate = new Date(date);
    minEndDate.setDate(minEndDate.getDate() + 14);
    if (endDate < minEndDate) {

      setEndDate(minEndDate);
    }
  };

  const checkIsMobile = () => {
    setIsMobile(window.innerWidth <= 768); // Adjust the breakpoint as needed
    // setIsMobile(window.innerWidth <= 800);
  };



  const minSelectableDate = today.add(15, 'day');

  // const initialDateRange = [minSelectableDate, today];

  // const shortcutsItems = [
  //   {
  //     label: 'This Week',
  //     getValue: () => {
  //       const today = dayjs();
  //       return [today.startOf('week'), today.endOf('week')];
  //     },
  //   },
  //   {
  //     label: 'Last Week',
  //     getValue: () => {
  //       const today = dayjs();
  //       const prevWeek = today.subtract(7, 'day');
  //       return [prevWeek.startOf('week'), prevWeek.endOf('week')];
  //     },
  //   },
  //   {
  //     label: 'Last 7 Days',
  //     getValue: () => {
  //       const today = dayjs();
  //       return [today.subtract(7, 'day'), today];
  //     },
  //   },
  //   {
  //     label: 'Current Month',
  //     getValue: () => {
  //       const today = dayjs();
  //       return [today.startOf('month'), today.endOf('month')];
  //     },
  //   },
  //   {
  //     label: 'Next Month',
  //     getValue: () => {
  //       const today = dayjs();
  //       const startOfNextMonth = today.endOf('month').add(1, 'day');
  //       return [startOfNextMonth, startOfNextMonth.endOf('month')];
  //     },
  //   },
  //   { label: 'Reset', getValue: () => [null, null] },
  // ];



  // const initialDateRange = shortcutsItems[0].getValue();

  console.log("selecteddatse", selectedDate);

  return (
    <>
      {loading ? ( // Show loader if loading is true
        <div className="w-full h-full flex items-center justify-center">
          <Image
            width={100}
            height={100}
            alt=""
            src={Images.Loader}
          />
        </div>
      ) : (
        <>
          <Image_popup isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
          >
            <div className="relative w-screen max-w-2xl max-h-full  min-w-xl ">

              <Image_content onPopupData={handlePopupData} onClose={() => setIsModalOpen(false)} />
            </div>
          </Image_popup>
          <Ref_Imagepop
            isOpen={isModalOpenRef}
            onClose={() => setIsModalOpenRef(false)}
          >
            <div className="relative w-screen max-w-2xl max-h-full   min-w-xl">
              <Ref_Image_content refpopupData={handleRefPopupData} onClose={() => setIsModalOpen(false)} />
            </div>
          </Ref_Imagepop>
          <div
            className="flex container_capmapign_info w-full"
            style={{ backgroundColor: Colors.button_light_clr }}
          >

            <div className="m-2 w-full auto-cols-max ">
              <div
                style={{ backgroundColor: Colors.white_clr }}
                className="auto-cols-max  p-3 rounded-md flex flex-row "
              >
                <div className={`${isMobile ? 'w-full' : ' w-2/3'} p-5 border rounded-md shadow-md m-2 divider_line border  min-h-screen`}>

                  <div className="">
                    <h1
                      style={{ color: Colors.pending_clr }}
                      className="font-bold campaign_info_title text-2xl"
                    >
                      Campaign Info
                    </h1>

                    <hr className="divider_line my-5" />
                    <div className="my-3">
                      <h3 className="mb-2">Campaign Name</h3>

                      <input
                        type="text"
                        id="small-input"
                        className="shadow-md block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-white-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        value={campaign_name}
                        onChange={(e) => setCampaign_name(e.target.value)}

                      />
                    </div>
                    <div className="my-3">
                      <h3 className="mb-2">Campaign Description</h3>
                      <textarea
                        id="message"
                        rows="4"
                        className=" shadow-mdblock p-2.5 w-full text-sm text-gray-900 bg-white-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Start Typing..."
                        value={campaign_desc}
                        onChange={(e) => setCampaign_desc(e.target.value)}
                        spellCheck="true"
                      ></textarea>
                      {/* <button onClick={handleGrammarCheck}>Check Grammar</button>
                      <div>
                        <h2>Suggestions:</h2>
                        <ul>
                          {suggestions.map((suggestion, index) => (
                            <li key={index}>{suggestion.text}</li>
                          ))}
                        </ul>
                      </div> */}

                    </div>

                    <div className="my-3">
                      <h3 className="mb-2">Product</h3>

                      <div className="flex flex-row justify-between">
                        <div className="border h-48 rounded-md  w-full me-3 shadow-md"
                          onClick={() => setIsModalOpen(true)}
                        >
                          <button
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

                      </div>
                      <div className="flex items-center mt-5">
                        <div className="flex-grow border-t border-gray-300"></div>
                        <div className="px-4 text-gray-600">OR</div>
                        <div className="flex-grow border-t border-gray-300"></div>
                      </div>
                      <div>
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

                    <div className="my-3">
                      <h3 className="mb-2">Timelines</h3>
                      <h6>Set Creating Date</h6>

                      {/* <div className="flex flex-row my-5 border rounded-md justify-between items-center px-5">
                        <div className='relative w-full'>
                          <DatePicker
                            selected={startDate}
                            onChange={handleStartDateChange}
                            selectsStart
                            startDate={startDate}
                            endDate={endDate}
                            placeholderText="Start Date"
                            className="w-full text-center p-2 rounded "
                            minDate={currentDate}
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
                            placeholderText="End Date"
                            className="w-full text-center p-2 rounded "
                            minDate={startDate || currentDate}
                          />
                          <div className="absolute top-2.5 left-0 text-gray-400 ps-2">
                            <Image
                              src={Images.calendar_icon}
                              alt=""
                              width={20}
                            />
                          </div>
                        </div>
                      </div> */}
                      <div className="flex flex-row my-5 border rounded-md justify-between items-center px-5">
                        {/* <div className="relative w-full">
                          <DatePicker
                            selected={selectedDate}
                            onChange={handleDateChange}
                            selectsStart
                            startDate={selectedDate}
                            endDate={selectedDate}
                            placeholderText="Start/End Date"
                            className="w-full text-center p-2 rounded"
                            minDate={currentDate}
                            isClearable={true}
                          />
                          <div className="absolute top-2.5 left-0 text-gray-400 ps-2">
                            <img src={Images.calendar_icon} alt="" width={20} />
                          </div>
                        </div> */}
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                          <div className='w-full'>
                            <div className='w-full flex'>
                              <TextField
                                // label="Start Date"
                                type="date"
                                value={manualStartDate}
                                onChange={(e) => setManualStartDate(e.target.value)}
                                className='w-full'
                                onClick={() => setCalendarVisible(true)}
                              />
                              <TextField
                                // label="End Date"
                                type="date"
                                value={manualEndDate}
                                onChange={(e) => setManualEndDate(e.target.value)}
                                className='w-full'
                                onClick={() => setCalendarVisible(true)}
                              />
                              {/* <button
                                className='flex border rounded-full bg-green-100 my-3 text-sm px-2 py-1'
                                variant="contained"
                                onClick={handleApplyDateInput}
                              >
                                Apply Date
                              </button> */}
                            </div>
                            <div className='w-full flex items-center justify-between'>
                              <div>
                                {shortcutsItems.map((shortcut, index) => (
                                  <button
                                    key={index}
                                    onClick={() => handleDateChange(shortcut.getValue())}
                                    variant="contained"
                                    className='flex border rounded-full bg-blue-100 my-3 text-sm px-2 py-1'
                                  >
                                    {shortcut?.label}
                                  </button>
                                ))}
                              </div>
                              {calendarVisible && (
                                <StaticDateRangePicker
                                  calendars={2}
                                  value={selectedRange}
                                  minDate={today}
                                  shortcuts={shortcutsItems}
                                  onChange={handleDateChange}
                                />
                              )}
                            </div>
                          </div>
                        </LocalizationProvider>
                      </div>
                      <div className=''>

                        {startRangeDate !== null && endRangeDate !== null && (
                          <p>
                            Selected Date Range: {startRangeDate.toDateString()} - {endRangeDate.toDateString()}
                          </p>
                        )}
                        <div className='text-center w-full' style={{ color: Colors.logo_clr }}>We required min 15 days to complete the campaign</div>
                      </div>

                    </div>
                    <div className="my-3">
                      <h3 className="mb-2">Content Reference</h3>

                      <div className="flex flex-row justify-between">
                        <div className="border h-48 rounded-md  w-full me-3 shadow-md"
                          onClick={() => setIsModalOpenRef(true)}
                        >

                          <button
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
                      </div>
                      <div className="flex items-center mt-5">
                        <div className="flex-grow border-t border-gray-300"></div>
                        <div className="px-4 text-gray-600">OR</div>
                        <div className="flex-grow border-t border-gray-300"></div>
                      </div>
                      <div>

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

                  <ToastContainer />
                </div>
                {/* right */}
                <div className={`${isMobile ? 'hidden' : 'auto-cols-max p-5 border rounded-md shadow-md min-h-screen flex flex-col m-2 w-2/4'}`}>
                  <h3>Today Highlights</h3>

                  <Image
                    src={Images.campaign_info_imgs}
                    className="image_capign_info w-full"
                    // height={1000}
                    alt=""
                  />

                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};
export default Campaign_infopage;
