import Image from "next/image";
// import company_logo from '../../images/logo_.png';
import Images from "@/images";
import Colors from "@/styles/Colors";
import styled from "styled-components";
import { useEffect, useState } from 'react';
import Right_side_Dashboard from './rightDashboard';
import Left_Dashboard from './leftDashboard';
import Link from 'next/link';
import Home_Card1 from "./Card/Card1";
import Home_Card2 from "./Card/Card2";
import Home_Card3 from "./Card/Card3";
import Home_Card4 from "./Card/Card4";
import Terms_of_service from "./Termsofservice";
import { apiCall, getApiCall, isEmpty, url } from "@/generalfunctions";
import { useRouter } from "next/router";
import Cookies from "js-cookie";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
import { ca } from "date-fns/locale";
import Campaign_infopage from "../Campaign_infopage";


const Homepage = () => {

  const router = useRouter();

  const [campaign_data, setCampaign_data] = useState([]);
  const [startIndex, setStartIndex] = useState(0);
  const [showChild, setShowChild] = useState(false);

  const handleButtonClick = () => {
    setShowChild(true); // Set the state to display the ChildComponent
  };

  useEffect(() => {


    const allCampaignData = async () => {

      const cookieValue = JSON.parse(Cookies.get('user_data'));
      console.log('categories cookieValue------------1', cookieValue?.token);

      const brand_detail = Cookies.get('brand_detail');
      const brandIds = Cookies.get('brand_id');

      console.log('brandIds:', brand_detail);

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
      console.log('brandId:', brandIds);

      // const startIndex = (currentPage - 1) * perPage;

      try {

        const headers = {
          'Authorization': `Bearer ${cookieValue?.token}`,
        };
        // const getResponse = await getApiCall(`${url}/campaigns?brand=${brandId}`, 'get', headers);
        const response = await fetch(`${url}/campaigns?brand=${brandId}&&per_page=55&order=desc`, {
          method: 'Get',
          headers: headers,

        });
        if (response.status === 429) {
          const retryAfter = parseInt(response.headers.get('Retry-After')) || 60; // Default to 60 seconds
          console.log(`Rate limited. Retrying after ${retryAfter} seconds.`);
          await new Promise(resolve => setTimeout(resolve, retryAfter * 1000)); // Convert seconds to milliseconds
          return makeRequest(); // Retry the request
        }

        console.log('GET campaigns?brand=1 response:', response);
        if (response?.ok) {
          const responseData = await response.json();
          console.log('campaigns response:', responseData?.data?.data);
          const campaignData = responseData?.data?.data;

          if (responseData.status) {
            setCampaign_data(campaignData);

            // toast.success('All campaigns', {
            //   position: 'top-center',
            //   autoClose: 5000,
            // });

            // setCampaign_data(responseData?.data?.data);
            // setBrand_user(responseData?.data?.data)

          } else {
            console.error('Error:', responseData.message);
            // alert('Brand creation failed');
          }
        } else {
          console.error('Error:', response.statusText);
          // alert('Brand creation failed');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    }
    // Fetch data based on currentPage and perPage values

    allCampaignData();
  }, []);

  console.log("campaign_data", campaign_data);

  const itemsPerPage = 6;

  // Calculate the end index based on the start index and items per page
  const endIndex = startIndex + itemsPerPage;

  // Slice the data array to get the items to display
  const itemsToShow = campaign_data.slice(startIndex, endIndex);

  console.log("itemsToShow", itemsToShow);

  // Function to handle the "Next" button click
  const handleNextClick = () => {
    setStartIndex(startIndex + itemsPerPage);
  };

  const handlePreviousClick = () => {
    setStartIndex(startIndex - itemsPerPage);
  };

  // const handleStart = () =>{
  //   return (<Campaign_infopage/>)
  // };


  return (
    <>
     {/* Conditionally render the ChildComponent */}
     {/* {showChild && <Campaign_infopage />} */}
      {/* <div id="defaultModal" tabindex="-1" aria-hidden="true" className="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
        <Terms_of_service />
      </div> */}

      <div className="flex" style={{ backgroundColor: Colors.button_light_clr }}>
        <div
          className="auto-cols-max  px-5 py-5  w-1/4"
          style={{ backgroundColor: Colors.white_clr }}
        >
          <Left_Dashboard />
        </div>
        <div
          // className="grid grid-flow-col border w-100 px-3"
          className="w-full auto-cols-max me-3 ps-5 rounded-md pb-3 "
        >
          <div
            className="my-4 ps-3 rounded-md"
            style={{ backgroundColor: Colors.white_clr }}
          >
            <div className="flex flex-row  w-full justify-between">
              <div className="flex flex-col w-full justify-evenly ps-10 pb-5">
                <div className="home_title">

                  Welcome to

                  <span className="golden_home_title"> Creators</span>{" "}
                  bay

                </div>

                <h3>Your content is just a click away !</h3>
                <Link href={'/campaign_info'}>
                  <button className="start_campaign_btn px-5 py-1 rounded-full w-48" >
                    Start Campaign
                  </button>
                </Link>
              </div>
              <Image
                src={Images.home_title_bg}
                width={200}
                height={100}
                alt=""
                className=""
              />
            </div>
          </div>
          <div
            className="flex flex-row justify-evenly items-start p-5 rounded-md flex-wrap overflow-y-auto min-h-screen h-auto"
            style={{ backgroundColor: Colors.white_clr }}
          >

            {itemsToShow?.length > 0 ? itemsToShow?.map((item, index) => (
              <>
                <Home_Card1 items={item} key={index} />

              </>
            ))

              :
              <div className="w-full h-full flex flex-col items-center justify-center rounded p-10">
                <div className=" justify-center">
                  <Image
                    src={Images.no_campaign_found}
                    width={100}
                    height={100}
                    alt=""
                    className="w-96 rounded-t-lg "
                  />
                  <div className="flex flex-col border px-5 py-5 rounded-b-lg">
                    <h1 className="py-5   ">
                      {"No Campaigns Found"}
                    </h1>
                    <Link href={'/campaign_info'}>
                   
                      <button className="start_campaign_btn px-5 py-1 rounded-full w-48"  >
                        Start Campaign
                      </button>
                      </Link>
                  </div>
                </div>
              </div>
            }

            {campaign_data?.length > 6 &&
              <div className="w-full text-end p-5 mx-2">
                <button onClick={handlePreviousClick} disabled={startIndex === 0} className=" edit_button_clr py-2 px-5 rounded mx-3">
                  Previous
                </button>
                <button onClick={handleNextClick} disabled={endIndex >= campaign_data.length} className=" edit_button_clr py-2 px-5 rounded mx-3">
                  Next
                </button>
              </div>
            }



          </div>
        </div>

        <div
         
          className="w-96 auto-cols-max rounded-md grid grid-cols-1 divide-y mt-4"
        >

          <Right_side_Dashboard />
        </div>
        <ToastContainer />
      </div >

    </>
  );
};

export default Homepage;

const Buttonn = styled.button`
  background: "#CBD2E0";
  width: 200px;
  height: 50px;
  bordercolor: black;
  font-size: 24px;
  color: black;
  text-align: center;
  &:hover {
    background: black;
    color: white;
  }
`;
