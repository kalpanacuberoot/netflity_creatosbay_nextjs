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

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdownf = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  const imageUrl = "https://t4.ftcdn.net/jpg/02/24/86/95/360_F_224869519_aRaeLneqALfPNBzg0xxMZXghtvBXkfIA.jpg";

  const handleSubmit = useCallback(async () => {

    const { data } = router.query;
    if (data) {
      const parsedData = JSON.parse(data);
      console.log("Received Data:", parsedData);
    }


    const parsedData = JSON?.parse(data);
    const cookieValue = JSON.parse(Cookies.get('user_data'));
    console.log('categories cookieValue-----parsedData-------1', cookieValue?.token, parsedData?.key);
    Cookies.set('creator_id', JSON.stringify(parsedData?.key), { expires: 106500 });
    Cookies.set('creator_name', JSON.stringify(creator_details?.user?.name), { expires: 106500 });

    try {

      const headers = {
        'Authorization': `Bearer ${cookieValue?.token}`,
        'Content-Type': 'application/json',
      };

      const response = await fetch(`${url}/creators/${parsedData?.key}`, {
        method: 'Get',
        headers: headers,

      });
      console.log('creator_details response:1', response);
      if (response?.ok) {
        const responseData = await response.json();
        console.log('creator_details response:', responseData?.data);
        setCreator_details(responseData?.data)

        // Cookies.set('brand_id', JSON.stringify(responseData?.data?.id), { expires: 106500 });

        if (responseData.status) {
          // toast.success('Brand Successfully Created', {
          //     position: 'top-center',
          //     autoClose: 5000,
          // });

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
 }, []);

  console.log("creator_details", creator_details);


  useEffect(() => {

    handleSubmit();
  }, [handleSubmit]);

  function convertHeight(heightCms) {
    const inchesPerFoot = 12;
    const feet = Math.floor(heightCms / (inchesPerFoot * 2.54));
    const inches = Math.round((heightCms / 2.54) % inchesPerFoot);
    
    return `${feet}' ${inches}"`;
}

// Example usage
const heightInCms = creator_details?.height;
const heightInFeetAndInches = convertHeight(heightInCms);
console.log('heightInFeetAndInches',heightInFeetAndInches); // Output: 5' 5"


  return (
    <>

      <Creators_popup isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      // onSubmit={handlePopupData}   
      >
        <div className="relative w-full max-w-2xl max-h-full">

          <Creators_popup_content />
        </div>
      </Creators_popup>
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
            className="auto-cols-max  p-3 rounded-md flex flex-row"
          >
            {/* right******** */}

            <div className="p-10 border rounded-md shadow-md m-2 divider_line w-2/3 relative">
              <div
                className=" flex justify-between pb-4"
                style={{ borderBottom: "1px solid hsla(330, 93%, 66%, 0.5)" }}
              >
                <div className="flex gap-2 justify-center align-middle">
                  <div>
                    <Image
                      width={500}
                      height={100}
                      className="w-10 h-10 object-cover rounded-full"
                      // src={imageUrl}
                      src={creator_details?.profile_pic}
                      alt=""
                    />
                  </div>
                  <div className="flex flex-col  ">
                    <h3>{creator_details?.user?.name}</h3>
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
                      alt=""
                    />
                  </div>
                  <div className="flex flex-col justify-center">
                    <h6>Creators rating</h6>
                    <p>220 Reviews</p>
                  </div>
                </div>
              </div>

              {/* <div className="grid grid-cols-3 mt-8">
                <div>
                  <h4 className="text-gray-400">Followers</h4>
                  <h3>00000k</h3>
                </div>
                <div>
                  <h4 className="text-gray-400">Reach</h4>
                  <h3>00000k</h3>
                </div>
                <div>
                  <h4 className="text-gray-400">Impression</h4>
                  <h3>00000k</h3>
                </div>
              </div>
              <div className="grid grid-cols-3 mt-8">0
                <div>
                  <h4 className="text-gray-400">Location</h4>
                  <h3>{creator_details?.city}</h3>
                </div>
                <div>
                  <h4 className="text-gray-400">Engagement Rate</h4>
                  <h3>00000k</h3>
                </div>
                <div>
                  <h4 className="text-gray-400">Avg. </h4>
                  <h3>00000k</h3>
                </div>
              </div>
              <div className="grid grid-cols-3 mt-8">
                <div>
                  <h4 className="text-gray-400">Website Click</h4>
                  <h3>00000k</h3>
                </div>
                <div>
                  <h4 className="text-gray-400">Avg Likes</h4>
                  <h3>00000k</h3>
                </div>
                <div>
                  <h4 className="text-gray-400">CPE</h4>
                  <h3>00000k</h3>
                </div>
              </div> */}
              <div className="pt-5 pb-3"
                style={{ borderBottom: "1px solid hsla(330, 93%, 66%, 0.5)" }}
              >
                <div
                  className="pb-3 "

                >
                  <h3>About me</h3>
                </div>
                <h4 className=" pt-5 mb-5">
                  {creator_details?.bio}
                </h4>

              </div>

              <div className="grid grid-cols-3 mt-8">
                <div>
                  <h4 className="text-gray-400">Height</h4>
                  <h3>{heightInFeetAndInches}</h3>
                </div>
                <div>
                  <h4 className="text-gray-400">Weight</h4>
                  <h3>{creator_details?.weight}</h3>
                </div>
                <div>
                  <h4 className="text-gray-400">Hairs</h4>
                  <h3>00000k</h3>
                </div>
              </div>
              <div className="grid grid-cols-3 mt-8">
                <div>
                  <h4 className="text-gray-400">Skin Color</h4>
                  <h3>{creator_details?.skintype?.name}</h3>
                </div>
                <div>
                  <h4 className="text-gray-400">Eye Color</h4>
                  <h3>{creator_details?.eyetype?.name}</h3>
                </div>
                <div>
                  <h4 className="text-gray-400">Hairs Color</h4>
                  <h3>{creator_details?.hairtype?.name}</h3>
                </div>
              </div>
              <div className="grid grid-cols-3 mt-8">
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
                  <h3>{creator_details?.city}</h3>
                </div>

              </div>
              <div className="flex gap-10 h-20 items-center align-middle absolute w-11/12  bottom-0">
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
                  onClick={() => setIsModalOpen(true)}
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
                    onClick={toggleDropdownf}
                  >
                    videos
                  </h3>

                  <div className="relative inline-block text-left">
                    {isDropdownOpen && (
                      <div
                        className="origin-top-right absolute right-0 mt-10 w-96  rounded-md shadow-lg bg-gray-500 ring-1 ring-black ring-opacity-5 focus:outline-none"
                        role="menu"
                        aria-orientation="vertical"
                      >
                        <button
                          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
                          onClick={closeDropdown}
                        >
                          XXXXXXXXXXXXXXXX
                        </button>
                        <div>
                          jgjgjhg
                        </div>
                      </div>
                    )}
                  </div>
                  <h3
                    className=" pl-3 pr-3 border-2 rounded-full inline-flex "
                    type="button"
                    onClick={toggleDropdown}
                    aria-expanded={isOpen}
                    // aria-haspopup="true"
                    style={{
                      borderColor: Colors.logo_clr,
                      color: Colors.logo_clr,
                    }}
                  >
                    Post
                  </h3>
                </div>
              </div>

              {/* dropdown notifiaction ************* */}
              <div className="relative inline-block text-left">
                {isOpen && (
                  <div
                    className="origin-top-right absolute right-0 mt-2 w-96  rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                    role="menu"
                    aria-orientation="vertical"
                  >
                    <div className="py-1" role="none">
                      <div
                        className=" flex justify-between align-middle  p-4 items-center"
                        style={{
                          borderBottom: "1px solid hsla(330, 93%, 66%, 0.5)",
                        }}
                      >
                        <h2>Notification</h2>
                        <button className="bg-purple-100 p-2 rounded-md w-12 h-10  ">
                          5
                        </button>
                      </div>
                      <div className="p-5">
                        <div className=" bg-purple-100 rounded-md mt-7 p-5">
                          <div className=" flex justify-between gap-5">
                            <div className="  ">
                              <h4 className="mb-3">Something has happened</h4>
                              <h6>
                                Lucas ipsum dolor sit amet chewbacca aayla
                                dantooine obi-wan atrivis.
                              </h6>
                            </div>
                            <p>x</p>
                          </div>
                          <h5 className="text-right">12:18</h5>
                        </div>
                        <div className=" bg-purple-100 rounded-md mt-7 p-5">
                          <div className=" flex justify-between gap-5">
                            <div> &</div>
                            <div>
                              <h4 className="mb-3 font-bold text-green-700">
                                Well done Anakin!
                              </h4>
                              <h6>
                                Qrygg elomin kashyyyk skirata. Oswaft mirta
                                omwati kohl shmi.
                              </h6>
                            </div>
                            <p>x</p>
                          </div>
                          <h5 className="text-right">13 H ago</h5>
                        </div>
                        <div className=" bg-purple-100 rounded-md mt-7 p-5">
                          <div className=" flex justify-between gap-5">
                            <div> &</div>
                            <div>
                              <h4 className="mb-3 font-bold text-green-700">
                                Well done Anakin!
                              </h4>
                              <h6>
                                Qrygg elomin kashyyyk skirata. Oswaft mirta
                                omwati kohl shmi.
                              </h6>
                            </div>
                            <p>x</p>
                          </div>
                          <h5 className="text-right">13 H ago</h5>
                        </div>
                        <div className=" bg-purple-100 rounded-md mt-7 p-5">
                          <div className=" flex justify-between gap-5">
                            <div> &</div>
                            <div>
                              <h4 className="mb-3 font-bold text-green-700">
                                Well done Anakin!
                              </h4>
                              <h6>
                                Qrygg elomin kashyyyk skirata. Oswaft mirta
                                omwati kohl shmi.
                              </h6>
                            </div>
                            <p>x</p>
                          </div>
                          <h5 className="text-right">13 H ago</h5>
                        </div>
                        <div className=" bg-purple-100 rounded-md mt-7 p-5">
                          <div className=" flex justify-between gap-5">
                            <div> &</div>
                            <div>
                              <h4 className="mb-3 font-bold text-green-700">
                                Well done Anakin!
                              </h4>
                              <h6>
                                Qrygg elomin kashyyyk skirata. Oswaft mirta
                                omwati kohl shmi.
                              </h6>
                            </div>
                            <p>x</p>
                          </div>
                          <h5 className="text-right">13 H ago</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              {/* dropdown ************* */}

              <div className="grid h-full grid-cols-2 gap-5 overflow-y-scroll mt-10">
                <Image
                  width={500}
                  height={100}
                  className="h-60 rounded-lg"
                  src={imageUrl}
                  alt=""
                />
                <Image
                  width={500}
                  height={100}
                  className="h-60 rounded-lg"
                  src={imageUrl}
                  alt=""
                />
                <Image
                  width={500}
                  height={100}
                  className="h-60 rounded-lg"
                  src={imageUrl}
                  alt=""
                />
                <Image
                  width={500}
                  height={100}
                  className="h-60 rounded-lg"
                  src={imageUrl}
                  alt=""
                />
                <Image
                  width={500}
                  height={100}
                  className="h-60 rounded-lg"
                  src={imageUrl}
                  alt=""
                />
                <Image
                  width={500}
                  height={100}
                  className="h-60 rounded-lg"
                  src={imageUrl}
                  alt=""
                />
                <Image
                  width={500}
                  height={100}
                  className="h-60 rounded-lg"
                  src={imageUrl}
                  alt=""
                />
                <Image
                  width={500}
                  height={100}
                  className="h-60 rounded-lg"
                  src={imageUrl}
                  alt=""
                />
                <Image
                  width={500}
                  height={100}
                  className="h-60 rounded-lg"
                  src={imageUrl}
                  alt=""
                />
                <Image
                  width={500}
                  height={100}
                  className="h-60 rounded-lg"
                  src={imageUrl}
                  alt=""
                />
                <Image
                  width={500}
                  height={100}
                  className="h-60 rounded-lg"
                  src={imageUrl}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Creators_profilepage;
