import Colors from "@/styles/Colors";
import Left_Dashboard from "../Homepage/leftDashboard";
import { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/router";
import Creators_popup from "./Creators_popup";
import Creators_popup_content from "./Creators_popup/Creators_popup_content";
import Image from "next/image";
import { url } from "@/generalfunctions";
import Cookies from "js-cookie";
import Images from "@/images";

const Creators_profilepage = () => {

  const router = useRouter();

  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [creator_details, setCreator_details] = useState(null);
  const [hasReloaded, setHasReloaded] = useState(false);

  const convertHeight = (heightCms) => {
    const inchesPerFoot = 12;
    const feet = Math.floor(heightCms / (inchesPerFoot * 2.54));
    const inches = Math.round((heightCms / 2.54) % inchesPerFoot);

    return `${feet}' ${inches}"`;
  }

  // Example usage
  const heightInCms = creator_details?.height;
  const heightInFeetAndInches = convertHeight(heightInCms);
  console.log('heightInFeetAndInches', heightInFeetAndInches); // Output: 5' 5"
  Cookies.set('creator_name', JSON.stringify(creator_details?.user?.name), { expires: 106500 });
  console.log("creator_details", creator_details);

  const handleSubmit = async () => {

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

      } else {
        console.error('Error:', response.statusText);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };


  useEffect(() => {

    handleSubmit();

  }, []);

  const handleReload = () => {
    // if (!hasReloaded) {
    //   window.location.reload();
    //   setHasReloaded(true); // Set the state to indicate that the reload has occurred
    //   setIsModalOpen(true)
    // }
    setIsModalOpen(true)
    // window.location.reload();

  };

  // const links = [
  //   "https://www.youtube.com/shorts/5S9W8onR_9I",
  //   "https://www.youtube.com/shorts/2B2-joqRoHc",
  //   "https://www.youtube.com/shorts/iqJafrKSrhM",
  //   "https://www.instagram.com/reel/CwWw3_BoIGL",
  //   "https://www.instagram.com/p/CuwZHA5rWPV",
  //   "https://www.instagram.com/reel/CsFgzPeIGkq",
  // ];  

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

  console.log("filterURL(links[0])", links);

  return (
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
        {/* <div
          className="auto-cols-max  px-5 py-5 border w-1/5"
          style={{ backgroundColor: Colors.white_clr }}
        >
          <Left_Dashboard />
        </div> */}
        <div className="m-2 w-full auto-cols-max border">
          <div
            style={{ backgroundColor: Colors.white_clr }}
            className="auto-cols-max  p-3 rounded-md flex flex-row "
          >
            {/* right******** */}

            <div className="p-10 rounded-md shadow-md m-2 divider_line w-2/3 relative h-auto">
              <div
                className=" flex justify-between pb-4 "
                style={{ borderBottom: "1px solid hsla(330, 93%, 66%, 0.5)" }}
              >
                <div className="flex gap-2 justify-center align-middle ">
                  <div>
                    <Image
                      width={50}
                      height={100}
                      className=" object-cover rounded-full"
                      src={creator_details ? creator_details?.profile_pic : ""}
                      alt="Creator_name"
                    />
                  </div>
                  <div className="flex flex-col  ">
                    <h3>{creator_details ? creator_details?.user?.name : ""}</h3>
                    <p>I like Yor confidence</p>
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
                    <h6>Creators rating</h6>
                    <p>220 Reviews</p>
                  </div>
                </div>
              </div>

              <div className="pt-5 pb-3"
                style={{ borderBottom: "1px solid hsla(330, 93%, 66%, 0.5)" }}
              >
                <div
                  className="pb-3 "

                >
                  <h3>About me</h3>
                </div>
                <h4 className=" pt-5 mb-5">
                  {creator_details ? creator_details?.bio : ""}
                </h4>

              </div>

              <div className="grid grid-cols-3 mt-8 ">
                <div>
                  <h4 className="text-gray-400">Height</h4>
                  <h3>{heightInFeetAndInches}</h3>
                </div>
                <div>
                  <h4 className="text-gray-400">Weight</h4>
                  <h3>{creator_details ? creator_details?.weight : ""}</h3>
                </div>
                <div>
                  <h4 className="text-gray-400">Hairs</h4>
                  <h3>00000k</h3>
                </div>
              </div>
              <div className="grid grid-cols-3 mt-8 ">
                <div>
                  <h4 className="text-gray-400">Skin Color</h4>
                  <h3>{creator_details ? creator_details?.skintype?.name : ""}</h3>
                </div>
                <div>
                  <h4 className="text-gray-400">Eye Color</h4>
                  <h3>{creator_details ? creator_details?.eyetype?.name : ""}</h3>
                </div>
                <div>
                  <h4 className="text-gray-400">Hairs Color</h4>
                  <h3>{creator_details ? creator_details?.hairtype?.name : ""}</h3>
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
                  <h3>{creator_details ? creator_details?.city : ""}</h3>
                </div>

              </div>
              <div className="flex gap-10 h-20 items-center align-middle absolute w-11/12  bottom-0 ">
                <button
                  className=" w-full rounded-full h-10"
                  style={{
                    border: "1px solid #9357FF",
                    color: Colors.logo_clr,
                  }}
                >
                  {" "}
                  Back
                </button>
                <button
                  className=" w-full rounded-full h-10"
                  style={{
                    background: Colors.logo_clr,
                    color: Colors.white_clr,
                  }}
                  // onClick={() => setIsModalOpen(true) && window.location.reload()}
                  onClick={handleReload}
                >
                  {" "}
                  Send Campaign
                </button>
              </div>
            </div>

            {/* right */}
            <div className="auto-cols-max p-5 border rounded-md shadow-md min-h-screen flex flex-col m-2 w-2/4">
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
                    videos
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


              {/* dropdown ************* */}

              {/* <div className="grid h-full grid-cols-2 gap-5 overflow-y-scroll mt-10 min-h-screen"> */}
              <div className="grid max-h-[700px] grid-cols-2 gap-5 overflow-y-auto mt-10 portfolio">
                {/* <Image
                  width={500}
                  height={100}
                  className=" rounded-lg"
                  src={Images.creator_profile_img}
                  alt="Post"
                />
                <Image
                  width={500}
                  height={100}
                  className=" rounded-lg"
                  src={Images.creator_profile_img}
                  alt="Post"
                />
                <Image
                  width={500}
                  height={100}
                  className=" rounded-lg"
                  src={Images.creator_profile_img}
                  alt="Post"
                />
                <Image
                  width={500}
                  height={100}
                  className=" rounded-lg"
                  src={Images.creator_profile_img}
                  alt="Post"
                />
                <Image
                  width={500}
                  height={100}
                  className=" rounded-lg"
                  src={Images.creator_profile_img}
                  alt="Post"
                />
                <Image
                  width={500}
                  height={100}
                  className=" rounded-lg"
                  src={Images.creator_profile_img}
                  alt="Post"
                />
                <Image
                  width={500}
                  height={100}
                  className=" rounded-lg"
                  src={Images.creator_profile_img}
                  alt="Post"
                />
                <Image
                  width={500}
                  height={100}
                  className=" rounded-lg"
                  src={Images.creator_profile_img}
                  alt="Post"
                />
                <Image
                  width={500}
                  height={100}
                  className=" rounded-lg"
                  src={Images.creator_profile_img}
                  alt="Post"
                />
                <Image
                  width={500}
                  height={100}
                  className=" rounded-lg"
                  src={Images.creator_profile_img}
                  alt="Post"
                />
                <Image
                  width={500}
                  height={100}
                  className=" rounded-lg"
                  src={Images.creator_profile_img}
                  alt="Post"
                /> */}
                {/* <div class="col col1">
                  <div class="row" id="slot1">
                  </div>
                  <div class="row" id="slot3">
                  </div>
                  <div class="row" id="slot5">
                  </div>
                </div>
                <div class="col col1">
                  <div class="row" id="slot2">
                  </div>
                  <div class="row" id="slot4">
                  </div>
                  <div class="row" id="slot6">
                  </div>
                </div> */}
                {/* <div className="col col1">
                  <div className="row" id="slot1">
                    <div className="icontainer">
                      <iframe
                        src={filterURL(links[0])}
                        scrolling="no"
                        height="360"
                        frameBorder="0"
                      ></iframe>
                    </div>
                  </div>
                  <div className="row" id="slot3">
                    <div className="icontainer">
                      <iframe
                        src={filterURL(links[2])}
                        scrolling="no"
                        height="360"
                        frameBorder="0"
                      ></iframe>
                    </div>
                  </div>
                  <div className="row" id="slot5">
                    <div className="icontainer">
                      <iframe
                        src={filterURL(links[4])}
                        scrolling="no"
                        height="360"
                        frameBorder="0"
                      ></iframe>
                    </div>
                  </div>
                </div>
                <div className="col col1">
                  <div className="row" id="slot2">
                    <div className="icontainer">
                      <iframe
                        src={filterURL(links[1])}
                        scrolling="no"
                        height="360"
                        frameBorder="0"
                      ></iframe>
                    </div>
                  </div>
                  <div className="row" id="slot4">
                    <div className="icontainer">
                      <iframe
                        src={filterURL(links[3])}
                        scrolling="no"
                        height="360"
                        frameBorder="0"
                      ></iframe>
                    </div>
                  </div>
                  <div className="row" id="slot6">
                    <div className="icontainer">
                      <iframe
                        src={filterURL(links[5])}
                        scrolling="no"
                        height="360"
                        frameBorder="0"
                      ></iframe>
                    </div>
                  </div>
                </div> */}
                {/* <div className="col col1"> */}
                  {links && links?.map((link, index) => (
                    <div className="row mt-5 " id={`slot${index + 1}`} key={index}>
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
                  ))}
                {/* </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Creators_profilepage;
