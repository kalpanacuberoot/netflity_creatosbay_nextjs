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
  const [loading, setLoading] = useState(false);
  const [isMobile, setIsMobile] = useState(false); 

  useEffect(() => {
    
    checkIsMobile();

    window.addEventListener('resize', checkIsMobile);

    const cookieValue = Cookies.get('user_data');

    if (!cookieValue) {
      router.push('/login');
    }


    const allCampaignData = async () => { 
      setLoading(true)
      try {
        let cookieValue = Cookies.get('user_data');

        console.log('categories cookieValue------------1', JSON.parse(cookieValue).user.type);
        const checkBrand = JSON.parse(cookieValue)?.user?.type

        if (typeof cookieValue === 'undefined' || checkBrand !== 'brand') {
          console.log('User not authenticated, navigating to login page...');
          router.push('/login');
          console.log('categories cookieValue----brand--------userId', cookieValue?.token);

        }
        else {
          let cookieValue = JSON.parse(Cookies.get('user_data'))
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

          try {

            const headers = {
              'Authorization': `Bearer ${cookieValue?.token}`,
            };

            const response = await fetch(`${url}/campaigns?brand=${brandId}&&per_page=55&order=desc`, {
              method: 'Get',
              headers: headers,

            });
            if (response.status === 429) {
              const retryAfter = parseInt(response.headers.get('Retry-After')) || 60;
              console.log(`Rate limited. Retrying after ${retryAfter} seconds.`);
              await new Promise(resolve => setTimeout(resolve, retryAfter * 1000));
              return makeRequest();
            }

            console.log('GET campaigns?brand=1 response:', response);
            if (response?.ok) {
              const responseData = await response.json();
              console.log('campaigns response:', responseData?.data?.data);
              const campaignData = responseData?.data?.data;

              if (responseData.status) {
                setCampaign_data(campaignData);
                setLoading(false)

              } else {
                console.error('Error:', responseData.message);
              }
            } else {
              console.error('Error:', response.statusText);
            }
          } catch (error) {
            console.error('Error:', error);
          }
        }
      } catch (error) {
        console.error('Error parsing user_data cookie:', error);
      }

    }

    allCampaignData();
    return () => {
      window.removeEventListener('resize', checkIsMobile);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log("campaign_data", campaign_data);

  const itemsPerPage = 6;

  const endIndex = startIndex + itemsPerPage;

  const itemsToShow = campaign_data.slice(startIndex, endIndex);

  console.log("itemsToShow", itemsToShow);

  const handleNextClick = () => {
    setStartIndex(startIndex + itemsPerPage);
  };

  const handlePreviousClick = () => {
    setStartIndex(startIndex - itemsPerPage);
  };


  const checkIsMobile = () => {
    setIsMobile(window.innerWidth <= 768); // Adjust the breakpoint as needed
    // setIsMobile(window.innerWidth <= 800);
  };


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

          <div className="flex flex-col md:flex-row" style={{ backgroundColor: Colors.button_light_clr }}>

            <div
              className={`w-full auto-cols-max me-3 ${isMobile ? '' : 'ps-5'} rounded-md `}
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
                className={`${isMobile ? '' : 'min-h-screen h-auto'} flex flex-row justify-evenly items-start p-5 pb-0 rounded-md flex-wrap overflow-y-auto `}
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

              className={`${isMobile ? 'w-full' : 'w-96'} auto-cols-max rounded-md grid grid-cols-1 divide-y mt-4`}
            >

              <Right_side_Dashboard />
            </div>
            <ToastContainer />
          </div >
        </>
      )}
    </>
  );
};

export default Homepage;
