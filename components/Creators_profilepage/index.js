import Colors from "@/styles/Colors";
import Left_Dashboard from "../Homepage/leftDashboard";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Creators_popup from "./Creators_popup";
import Creators_popup_content from "./Creators_popup/Creators_popup_content";
import Image from "next/image";

const Creators_profilepage = () => {

  const router = useRouter();

  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

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

  useEffect(() => {
    const { data } = router.query;
    if (data) {
      const parsedData = JSON.parse(data);
      console.log("Received Data:", parsedData);
    }
  }, []);

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
                      src={imageUrl}
                      alt=""
                    />
                  </div>
                  <div className="flex flex-col  ">
                    <h3>Vishal Kumar Singh</h3>
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
                      src={imageUrl}
                      alt=""
                    />
                  </div>
                  <div className="flex flex-col justify-center">
                    <h6>Creators rating</h6>
                    <p>220 Reviews</p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-3 mt-8">
                <div>
                  <h4>Followers</h4>
                  <h3>00000k</h3>
                </div>
                <div>
                  <h4>Reach</h4>
                  <h3>00000k</h3>
                </div>
                <div>
                  <h4>Impression</h4>
                  <h3>00000k</h3>
                </div>
              </div>
              <div className="grid grid-cols-3 mt-8">
                <div>
                  <h4>Followers</h4>
                  <h3>00000k</h3>
                </div>
                <div>
                  <h4>Reach</h4>
                  <h3>00000k</h3>
                </div>
                <div>
                  <h4>Impression</h4>
                  <h3>00000k</h3>
                </div>
              </div>
              <div className="grid grid-cols-3 mt-8">
                <div>
                  <h4>Followers</h4>
                  <h3>00000k</h3>
                </div>
                <div>
                  <h4>Reach</h4>
                  <h3>00000k</h3>
                </div>
                <div>
                  <h4>Impression</h4>
                  <h3>00000k</h3>
                </div>
              </div>
              <div className="pt-5">
                <div
                  className="pb-3 "
                  style={{ borderBottom: "1px solid hsla(330, 93%, 66%, 0.5)" }}
                >
                  <h3>About</h3>
                </div>
                <div className="grid grid-cols-3 mt-8">
                  <div>
                    <h4>Followers</h4>
                    <h3>00000k</h3>
                  </div>
                  <div>
                    <h4>Reach</h4>
                    <h3>00000k</h3>
                  </div>
                  <div>
                    <h4>Impression</h4>
                    <h3>00000k</h3>
                  </div>
                </div>
                <div className="grid grid-cols-3 mt-8">
                  <div>
                    <h4>Followers</h4>
                    <h3>00000k</h3>
                  </div>
                  <div>
                    <h4>Reach</h4>
                    <h3>00000k</h3>
                  </div>
                  <div>
                    <h4>Impression</h4>
                    <h3>00000k</h3>
                  </div>
                </div>
                <div className="grid grid-cols-3 mt-8">
                  <div>
                    <h4>Followers</h4>
                    <h3>00000k</h3>
                  </div>
                  <div>
                    <h4>Reach</h4>
                    <h3>00000k</h3>
                  </div>
                  <div>
                    <h4>Impression</h4>
                    <h3>00000k</h3>
                  </div>
                </div>
              </div>
              <h4 className=" pt-5">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </h4>

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
                    aria-haspopup="true"
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