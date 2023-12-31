import Colors from "@/styles/Colors";
import Left_Dashboard from "../Homepage/leftDashboard";
import React, { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/router";
import Creators_popup from "./Creators_popup";
import Creators_popup_content from "./Creators_popup/Creators_popup_content";
import Image from "next/image";
import { url } from "@/generalfunctions";
import Cookies from "js-cookie";
import Images from "@/images";
import Link from "next/link";

const Creators_profilepage = () => {

  const router = useRouter();

  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [creator_details, setCreator_details] = useState(null);
  const [hasReloaded, setHasReloaded] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const convertHeight = (heightCms) => {
    const inchesPerFoot = 12;
    const feet = Math.floor(heightCms / (inchesPerFoot * 2.54));
    const inches = Math.round((heightCms / 2.54) % inchesPerFoot);

    return `${feet}' ${inches}"`;
  }

  const heightInCms = creator_details?.height;
  const heightInFeetAndInches = convertHeight(heightInCms);
  console.log('heightInFeetAndInches', heightInFeetAndInches);
  Cookies.set('creator_name', JSON.stringify(creator_details?.user?.name), { expires: 106500 });
  console.log("creator_details", creator_details);

  const handleSubmit = async () => {
    setLoading(true)
    const cookieValue = JSON.parse(Cookies.get('user_data'));
    const creator_profile_id = JSON.parse(Cookies.get('creator_profile_id'));

    try {

      const headers = {
        'Authorization': `Bearer ${cookieValue?.token}`,
        'Content-Type': 'application/json',
      };

      const response = await fetch(`${url}/creators/${creator_profile_id}`, {
        method: 'Get',
        headers: headers,

      });
      console.log('creator_details response:1', response);
      if (response?.ok) {
        const responseData = await response.json();
        console.log('creator_details response:', responseData?.data);
        setCreator_details(responseData?.data)
        setLoading(false)
      } else {
        console.error('Error:', response.statusText);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };


  useEffect(() => {

    checkIsMobile();

    window.addEventListener('resize', checkIsMobile);

    // handleSubmit();
    return () => {
      window.removeEventListener('resize', checkIsMobile);
    };

  }, []);

  const handleReload = () => {
    setLoading(true)
    const hasReloaded = Cookies.get('hasReloaded');
    if (hasReloaded !== 'true') {

      window.location.reload();
      Cookies.set('hasReloaded', 'true');
      setIsModalOpen(false);
      setLoading(false)
    }
    else {
      setIsModalOpen(true);
      setLoading(false)
    }

  };


  console.log("creadtor+deauodl", creator_details?.portfolios.map((item) => item?.link));

  const links = creator_details?.portfolios.map((item) => item?.link);

  function filterURL(link) {
    var url_parts = new URL(link);
    if (url_parts.host === "www.youtube.com") {
      return (
        "https://www.youtube.com" +
        url_parts.pathname.replace("shorts", "embed") +
        "?rel=0&controls=0&showinfo=0"
      );
    } else if (url_parts.host === "www.instagram.com") {
      return "https://www.instagram.com" + url_parts.pathname + "/embed/";
    } else {
      return "";
    }
  }

  const checkIsMobile = () => {
    setIsMobile(window.innerWidth <= 768); // Adjust the breakpoint as needed
    // setIsMobile(window.innerWidth <= 800);
  };


  console.log("filterURL(links[0])", links, creator_details);

  return (
    <>
      {/* {loading ? ( // Show loader if loading is true
        <div className="w-full h-full flex items-center justify-center">
          <Image
            width={100}
            height={100}
            alt=""
            src={Images.Loader}
          />
        </div>
      ) : ( */}
        <>
          <Creators_popup isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
          >
            <div className="relative w-full max-w-3xl max-h-full">

              <Creators_popup_content />
            </div>
          </Creators_popup>
          <div
            className="flex container_capmapign_info w-full"
            style={{ backgroundColor: Colors.button_light_clr }}
          >

            <div className="m-2 w-full auto-cols-max border">
              <div
                style={{ backgroundColor: Colors.white_clr }}
                className={`${isMobile ? '' : 'p-3'} auto-cols-max rounded-md flex md:flex-row flex-col w-full`}
              >


                <div className={` rounded-md shadow-md m-2 divider_line ${isMobile ? 'w-full p-5' : 'w-2/3 p-10'}  relative h-auto`}>
                  <div
                    className=" flex justify-between pb-4 "
                    style={{ borderBottom: "1px solid hsla(330, 93%, 66%, 0.5)" }}
                  >
                    <div className="flex gap-2 justify-center align-middle ">
                      <div>
                        <Image
                          width={50}
                          height={100}
                          className=" object-cover rounded-full "
                          src={creator_details ? creator_details?.profile_pic : Images.avatar1}
                          alt="Creator_name"
                        />
                      </div>
                      <div className="flex flex-col  ">
                        <h3 className="capitalize">{creator_details ? creator_details?.user?.name : "Creator One"}</h3>
                        <p className="text-xs text-gray-500">I like Yor confidence</p>
                      </div>
                    </div>
                    <div className="flex gap-2  align-middle items-center">
                      <div className="flex gap-2 align-middle items-center justify-center">
                        <h3>4.8</h3>
                        <Image
                          width={500}
                          height={100}
                          className="w-4 h-4  "
                          src={Images.fill_star}
                          alt="star"
                        />
                      </div>
                      <div className="flex flex-col justify-center">
                        <h6>Creators Rating</h6>
                        <p className="text-xs text-gray-500">220 Reviews</p>
                      </div>
                    </div>
                  </div>

                  <div className="pt-5 pb-3"
                    style={{ borderBottom: "1px solid hsla(330, 93%, 66%, 0.5)" }}
                  >
                    <div
                      className="pb-3 "

                    >
                      <h3>About Me</h3>
                    </div>
                    <h4 className=" pt-5 mb-5 normal-case">
                      {creator_details ? creator_details?.bio : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}
                    </h4>

                  </div>

                  <div className="grid grid-cols-3 mt-8 ">
                    <div>
                      <h4 className="text-gray-400">Height</h4>
                      {/* <h3>{heightInFeetAndInches}</h3> */}
                      <h3>5&apos;&apos; 5&apos;</h3>
                    </div>
                    <div>
                      <h4 className="text-gray-400">Weight</h4>
                      <h3>{creator_details ? creator_details?.weight : "55"}</h3>
                    </div>

                    <div >
                      <h4 className="text-gray-400">Languages</h4>
                      {/* {creator_details?.languages.map((item) =>
                        <h3 key={item?.id} className="capitalize">{item?.name}</h3>
                      )} */}
                      <h3 className="capitalize">Hindi</h3>
                    </div>

                  </div>
                  <div className="grid grid-cols-3 mt-8 ">
                    <div>
                      <h4 className="text-gray-400">Skin Color</h4>
                      <h3 className="capitalize">{creator_details ? creator_details?.skintype?.name : "fair"}</h3>
                    </div>
                    <div>
                      <h4 className="text-gray-400">Eye Color</h4>
                      <h3 className="capitalize">{creator_details ? creator_details?.eyetype?.name : "blue"}</h3>
                    </div>
                    <div>
                      <h4 className="text-gray-400">Hairs Color</h4>
                      <h3 className="capitalize">{creator_details ? creator_details?.hairtype?.name : "black"}</h3>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 mt-8 ">
                    <div>
                      <h4 className="text-gray-400">Kids</h4>
                      <h3>{creator_details?.kids === 0 ? "No" : "Yes"}</h3>
                    </div>
                    <div>
                      <h4 className="text-gray-400">Pets</h4>
                      <h3>{creator_details?.pets === 0 ? "No" : "Yes"}</h3>
                    </div>
                    <div>
                      <h4 className="text-gray-400">Location</h4>
                      <h3 className="capitalize">{creator_details ? creator_details?.city : "Faridabad"}</h3>
                    </div>

                  </div>
                  <div className="grid grid-cols-3 mt-8 ">
                    <div>
                      <h4 className="text-gray-400 capitalize">Body Type</h4>
                      <h3 className="capitalize">{creator_details?.bodytype?.name ? creator_details?.bodytype?.name : 'None'}</h3>
                    </div>
                    <div>
                      <h4 className="text-gray-400">Gender</h4>
                      <h3 className="capitalize">{creator_details?.gender ? creator_details?.gender : 'None'}</h3>
                    </div>
                    <div>
                      <h4 className="text-gray-400">Platforms</h4>
                      {creator_details ? creator_details?.platforms.map((item) =>
                        <h3 key={item?.id} className="capitalize my-1">{item?.name}</h3>
                      )
                        :
                        <h3 className="capitalize">Instagram</h3>
                      }
                    </div>

                  </div>
                  <div className="grid grid-cols-3 mt-8 ">
                    <div>
                      <h4 className="text-gray-400">State</h4>
                      <h3 className="capitalize">{creator_details ? creator_details?.state?.name : "Male"}</h3>
                    </div>
                    <div>
                      <h4 className="text-gray-400">Age</h4>
                      <h3 className="capitalize">{creator_details ? creator_details?.age : "22"}</h3>
                    </div>
                    <div>
                      <h4 className="text-gray-400 capitalize">Categories</h4>
                      {creator_details ? creator_details?.categories.map((item) =>
                        <h3 key={item?.id} className="capitalize my-1">{item?.name}</h3>
                      )
                        :
                        <h3 className="capitalize">None</h3>
                      }
                    </div>
                  </div>

                  <div className={`flex ${isMobile ? 'h-56 gap-10' : 'h-64 gap-5'}  items-end align-middle w-11/12  bottom-0 justify-center`}>

                    <button
                      className=" w-full rounded-full h-10"
                      style={{
                        border: "1px solid #9357FF",
                        color: Colors.logo_clr,
                      }}
                      onClick={() => router.push('/marketplace')}
                    >

                      Back
                    </button>

                    <button
                      className={`w-full rounded-full  md:text-base ${isMobile ? 'py-1 px-1 text-base' : 'h-10'}`}
                      style={{
                        background: Colors.logo_clr,
                        color: Colors.white_clr,
                      }}
                      // onClick={() => setIsModalOpen(true) && window.location.reload()}
                      // onClick={handleReload}
                      onClick={() => setIsModalOpen(true)}
                    >

                      Send Campaign
                    </button>
                  </div>
                </div>

                <div className={`auto-cols-max border rounded-md shadow-md flex flex-col m-2 h-auto min-h-screen ${isMobile ? 'w-full h-auto  p-5' : 'w-2/4  p-5'} `}>
                  <div
                    className=" flex justify-between  pb-4"
                    style={{ borderBottom: "1px solid hsla(330, 93%, 66%, 0.5)" }}
                  >
                    <div className=" ">
                      <h3 style={{ color: Colors.pending_clr }}>Portfolio</h3>
                    </div>
                    <div className="flex gap-10">
                      <h3
                        className=" pl-3 pr-3 border-2 rounded-full inline-flex "
                        style={{
                          borderColor: Colors.logo_clr,
                          color: Colors.logo_clr,
                        }}

                      >
                        Videos
                      </h3>


                      <h3
                        className=" pl-3 pr-3 border-2 rounded-full inline-flex "
                        type="button"

                        style={{
                          borderColor: Colors.logo_clr,
                          color: Colors.logo_clr,
                        }}
                      >
                        Post
                      </h3>
                    </div>
                  </div>

                  <div className="grid max-h-[700px] grid-cols-2 gap-5 overflow-y-auto mt-10 portfolio">

                    {links?.length > 0 ? links?.map((link, index) => (
                      <div className="row mt-5 " id={`slot${index + 1}`} key={link?.id}>
                        <div className="icontainer ">
                          <iframe
                            src={filterURL(link)}
                            scrolling="no"
                            height="360"
                            width="250"
                            frameBorder="0"
                            className=""
                          ></iframe>
                        </div>
                      </div>
                    ))
                      :
                      <div className="flex items-center justify-center  ">
                        <h1 className="mt-10">
                          No Portfolio Found
                        </h1>
                      </div>
                    }

                  </div>
                </div>
              </div>
            </div>
          </div >
        </>
      {/* )} */}
    </>
  );
};

export default React.memo(Creators_profilepage);
