import Image from "next/image";
// import company_logo from '../../images/logo_.png';
import Images from "@/images";
import Colors from "@/styles/Colors";
import styled from "styled-components";
import { useState } from 'react';
import Right_side_Dashboard from './rightDashboard';
import Left_Dashboard from './leftDashboard';
import Link from 'next/link';
import Home_Card1 from "./Card/Card1";
import Home_Card2 from "./Card/Card2";
import Home_Card3 from "./Card/Card3";
import Home_Card4 from "./Card/Card4";
import Terms_of_service from "./Termsofservice";


const Homepage = () => {




  return (
    <>
      {/* <div id="defaultModal" tabindex="-1" aria-hidden="true" className="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
        <Terms_of_service />
      </div> */}

      <div className="flex" style={{ backgroundColor: Colors.button_light_clr }}>
        <div
          className="auto-cols-max w-96 px-3 py-5 border"
          style={{ backgroundColor: Colors.white_clr }}
        >
          <div>
            <Left_Dashboard />
          </div>
        </div>
        <div
          // className="grid grid-flow-col border w-100 px-3"
          className="w-full auto-cols-max me-3 ps-5 rounded-md"
        >
          <div
            className="my-4 ps-3 rounded-md"
            style={{ backgroundColor: Colors.white_clr }}
          >
            <div className="flex flex-row  w-full justify-between">
              <div className="flex flex-col w-full justify-evenly">
                <div className="home_title">
                  Welcome to <small className="golden_home_title">Creators</small>{" "}
                  bay
                </div>
                {/* <div className='home_title'>Welcome to Creators bay</div> */}
                <h3>Your content is just a click away !</h3>
                <Link href={'/campaign_info'}>
                  <button className="start_campaign_btn px-5 py-1 rounded-full w-48">
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
            className="flex flex-row justify-evenly py-4 rounded-md flex-wrap"
            style={{ backgroundColor: Colors.white_clr }}
          >
            <Home_Card1 />
            <Home_Card2 />
            <Home_Card3 />
            <Home_Card4 />
          </div>
        </div>

        <div
          // className="grid grid-flow-col border"
          className="w-96 auto-cols-max rounded-md grid grid-cols-1 divide-y mt-4"
        >
          <div
            style={{ backgroundColor: Colors.white_clr }}
            className="  px-2 py-3 rounded-md"
          >
            <h3 className="font-bold">Top Creators</h3>
            <div className="craetor_height ">
              <div className="child_creator">
                <div className=" px-2 border rounded-md p-3 my-2 ">
                  <div className="flex flex-row justify-between items-center mb-2">
                    <h6 className="font-bold">Amrish patel</h6>
                    <div className="">
                      <div className="flex flex-row justify-evenly items-center w-24">
                        <Image
                          src={Images.fill_star}
                          width={12}
                          height={5}
                          alt=""
                          className=""
                        />
                        <Image
                          src={Images.fill_star}
                          width={12}
                          height={5}
                          alt=""
                          className=""
                        />
                        <Image
                          src={Images.fill_star}
                          width={12}
                          height={5}
                          alt=""
                          className=""
                        />
                        <Image
                          src={Images.fill_star}
                          width={12}
                          height={5}
                          alt=""
                          className=""
                        />
                        <Image
                          src={Images.empty_star}
                          width={12}
                          height={5}
                          alt=""
                          className=""
                        />
                        <h6>4.5</h6>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row items-center">
                    <Image
                      src={Images.profile_user}
                      width={40}
                      // height={30}
                      alt=""
                    />
                    <div className="flex flex-row flex-wrap">
                      <div>
                        <p className="creator_top px-3 rounded-full my-1 mx-1">
                          #unplugged
                        </p>
                      </div>
                      <div>
                        <p className="creator_top px-3 rounded-full my-1 mx-1">
                          #unplugged
                        </p>
                      </div>
                      <div>
                        <p className="creator_top px-3 rounded-full my-1 mx-1">
                          #go
                        </p>
                      </div>
                      <div>
                        <p className="creator_top px-3 rounded-full my-1 mx-1">
                          #livemusic
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className=" px-2 border rounded-md p-3 my-2  ">
                  <div className="flex flex-row justify-between items-center mb-2">
                    <h6 className="font-bold">Amrish patel</h6>
                    <div className="">
                      <div className="flex flex-row justify-evenly items-center w-24">
                        <Image
                          src={Images.fill_star}
                          width={12}
                          height={5}
                          alt=""
                          className=""
                        />
                        <Image
                          src={Images.fill_star}
                          width={12}
                          height={5}
                          alt=""
                          className=""
                        />
                        <Image
                          src={Images.fill_star}
                          width={12}
                          height={5}
                          alt=""
                          className=""
                        />
                        <Image
                          src={Images.fill_star}
                          width={12}
                          height={5}
                          alt=""
                          className=""
                        />
                        <Image
                          src={Images.empty_star}
                          width={12}
                          height={5}
                          alt=""
                          className=""
                        />
                        <h6>4.5</h6>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row items-center">
                    <Image
                      src={Images.profile_user}
                      width={40}
                      // height={30}
                      alt=""
                    />
                    <div className="flex flex-row flex-wrap">
                      <div>
                        <p className="creator_top px-3 rounded-full my-1 mx-1">
                          #unplugged
                        </p>
                      </div>
                      <div>
                        <p className="creator_top px-3 rounded-full my-1 mx-1">
                          #unplugged
                        </p>
                      </div>
                      <div>
                        <p className="creator_top px-3 rounded-full my-1 mx-1">
                          #go
                        </p>
                      </div>
                      <div>
                        <p className="creator_top px-3 rounded-full my-1 mx-1">
                          #livemusic
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className=" px-2 border rounded-md p-3 my-2 ">
                  <div className="flex flex-row justify-between items-center mb-2">
                    <h6 className="font-bold">Amrish patel</h6>
                    <div className="">
                      <div className="flex flex-row justify-evenly items-center w-24">
                        <Image
                          src={Images.fill_star}
                          width={12}
                          height={5}
                          alt=""
                          className=""
                        />
                        <Image
                          src={Images.fill_star}
                          width={12}
                          height={5}
                          alt=""
                          className=""
                        />
                        <Image
                          src={Images.fill_star}
                          width={12}
                          height={5}
                          alt=""
                          className=""
                        />
                        <Image
                          src={Images.fill_star}
                          width={12}
                          height={5}
                          alt=""
                          className=""
                        />
                        <Image
                          src={Images.empty_star}
                          width={12}
                          height={5}
                          alt=""
                          className=""
                        />
                        <h6>4.5</h6>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row items-center">
                    <Image
                      src={Images.profile_user}
                      width={40}
                      // height={30}
                      alt=""
                    />
                    <div className="flex flex-row flex-wrap">
                      <div>
                        <p className="creator_top px-3 rounded-full my-1 mx-1">
                          #unplugged
                        </p>
                      </div>
                      <div>
                        <p className="creator_top px-3 rounded-full my-1 mx-1">
                          #unplugged
                        </p>
                      </div>
                      <div>
                        <p className="creator_top px-3 rounded-full my-1 mx-1">
                          #go
                        </p>
                      </div>
                      <div>
                        <p className="creator_top px-3 rounded-full my-1 mx-1">
                          #livemusic
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className=" px-2 border rounded-md p-3 my-2 ">
                  <div className="flex flex-row justify-between items-center mb-2">
                    <h6 className="font-bold">Amrish patel</h6>
                    <div className="">
                      <div className="flex flex-row justify-evenly items-center w-24">
                        <Image
                          src={Images.fill_star}
                          width={12}
                          height={5}
                          alt=""
                          className=""
                        />
                        <Image
                          src={Images.fill_star}
                          width={12}
                          height={5}
                          alt=""
                          className=""
                        />
                        <Image
                          src={Images.fill_star}
                          width={12}
                          height={5}
                          alt=""
                          className=""
                        />
                        <Image
                          src={Images.fill_star}
                          width={12}
                          height={5}
                          alt=""
                          className=""
                        />
                        <Image
                          src={Images.empty_star}
                          width={12}
                          height={5}
                          alt=""
                          className=""
                        />
                        <h6>4.5</h6>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row items-center">
                    <Image
                      src={Images.profile_user}
                      width={40}
                      // height={30}
                      alt=""
                    />
                    <div className="flex flex-row flex-wrap">
                      <div>
                        <p className="creator_top px-3 rounded-full my-1 mx-1">
                          #unplugged
                        </p>
                      </div>
                      <div>
                        <p className="creator_top px-3 rounded-full my-1 mx-1">
                          #unplugged
                        </p>
                      </div>
                      <div>
                        <p className="creator_top px-3 rounded-full my-1 mx-1">
                          #go
                        </p>
                      </div>
                      <div>
                        <p className="creator_top px-3 rounded-full my-1 mx-1">
                          #livemusic
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full text-center">
              <button className="start_campaign_btn px-5 py-1 w-48 rounded-full bg-white my-3">
                View All
              </button>
            </div>
          </div>
          <div
            style={{ backgroundColor: Colors.white_clr }}
            className=" py-3 px-2  my-3 rounded-md"
          >
            <h3 className="font-bold">Suggested Creators</h3>
            <div className="craetor_height ">
              <div className="child_creator">
                <div className=" px-2 border rounded-md p-3 my-2 ">
                  <div className="flex flex-row justify-between items-center mb-2">
                    <h6 className="font-bold">Amrish patel</h6>
                    <div className="">
                      <div className="flex flex-row justify-evenly items-center w-24">
                        <Image
                          src={Images.fill_star}
                          width={12}
                          height={5}
                          alt=""
                          className=""
                        />
                        <Image
                          src={Images.fill_star}
                          width={12}
                          height={5}
                          alt=""
                          className=""
                        />
                        <Image
                          src={Images.fill_star}
                          width={12}
                          height={5}
                          alt=""
                          className=""
                        />
                        <Image
                          src={Images.fill_star}
                          width={12}
                          height={5}
                          alt=""
                          className=""
                        />
                        <Image
                          src={Images.empty_star}
                          width={12}
                          height={5}
                          alt=""
                          className=""
                        />
                        <h6>4.5</h6>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row items-center">
                    <Image
                      src={Images.profile_user}
                      width={40}
                      // height={30}
                      alt=""
                    />
                    <div className="flex flex-row flex-wrap">
                      <div>
                        <p className="creator_top px-3 rounded-full my-1 mx-1">
                          #unplugged
                        </p>
                      </div>
                      <div>
                        <p className="creator_top px-3 rounded-full my-1 mx-1">
                          #unplugged
                        </p>
                      </div>
                      <div>
                        <p className="creator_top px-3 rounded-full my-1 mx-1">
                          #go
                        </p>
                      </div>
                      <div>
                        <p className="creator_top px-3 rounded-full my-1 mx-1">
                          #livemusic
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className=" px-2 border rounded-md p-3 my-2  ">
                  <div className="flex flex-row justify-between items-center mb-2">
                    <h6 className="font-bold">Amrish patel</h6>
                    <div className="">
                      <div className="flex flex-row justify-evenly items-center w-24">
                        <Image
                          src={Images.fill_star}
                          width={12}
                          height={5}
                          alt=""
                          className=""
                        />
                        <Image
                          src={Images.fill_star}
                          width={12}
                          height={5}
                          alt=""
                          className=""
                        />
                        <Image
                          src={Images.fill_star}
                          width={12}
                          height={5}
                          alt=""
                          className=""
                        />
                        <Image
                          src={Images.fill_star}
                          width={12}
                          height={5}
                          alt=""
                          className=""
                        />
                        <Image
                          src={Images.empty_star}
                          width={12}
                          height={5}
                          alt=""
                          className=""
                        />
                        <h6>4.5</h6>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row items-center">
                    <Image
                      src={Images.profile_user}
                      width={40}
                      // height={30}
                      alt=""
                    />
                    <div className="flex flex-row flex-wrap">
                      <div>
                        <p className="creator_top px-3 rounded-full my-1 mx-1">
                          #unplugged
                        </p>
                      </div>
                      <div>
                        <p className="creator_top px-3 rounded-full my-1 mx-1">
                          #unplugged
                        </p>
                      </div>
                      <div>
                        <p className="creator_top px-3 rounded-full my-1 mx-1">
                          #go
                        </p>
                      </div>
                      <div>
                        <p className="creator_top px-3 rounded-full my-1 mx-1">
                          #livemusic
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className=" px-2 border rounded-md p-3 my-2 ">
                  <div className="flex flex-row justify-between items-center mb-2">
                    <h6 className="font-bold">Amrish patel</h6>
                    <div className="">
                      <div className="flex flex-row justify-evenly items-center w-24">
                        <Image
                          src={Images.fill_star}
                          width={12}
                          height={5}
                          alt=""
                          className=""
                        />
                        <Image
                          src={Images.fill_star}
                          width={12}
                          height={5}
                          alt=""
                          className=""
                        />
                        <Image
                          src={Images.fill_star}
                          width={12}
                          height={5}
                          alt=""
                          className=""
                        />
                        <Image
                          src={Images.fill_star}
                          width={12}
                          height={5}
                          alt=""
                          className=""
                        />
                        <Image
                          src={Images.empty_star}
                          width={12}
                          height={5}
                          alt=""
                          className=""
                        />
                        <h6>4.5</h6>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row items-center">
                    <Image
                      src={Images.profile_user}
                      width={40}
                      // height={30}
                      alt=""
                    />
                    <div className="flex flex-row flex-wrap">
                      <div>
                        <p className="creator_top px-3 rounded-full my-1 mx-1">
                          #unplugged
                        </p>
                      </div>
                      <div>
                        <p className="creator_top px-3 rounded-full my-1 mx-1">
                          #unplugged
                        </p>
                      </div>
                      <div>
                        <p className="creator_top px-3 rounded-full my-1 mx-1">
                          #go
                        </p>
                      </div>
                      <div>
                        <p className="creator_top px-3 rounded-full my-1 mx-1">
                          #livemusic
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full text-center">
              <button className="start_campaign_btn px-5 py-1 w-48 rounded-full bg-white my-3">
                View All
              </button>
            </div>
          </div>
        </div>

      </div>

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
