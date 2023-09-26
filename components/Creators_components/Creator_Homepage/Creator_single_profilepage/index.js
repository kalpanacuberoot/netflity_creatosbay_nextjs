import Images from "@/images"
import Colors from "@/styles/Colors"
import Cookies from "js-cookie"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/router"
import { useEffect } from "react"

const Creator_single_profilepage = () => {

    const router = useRouter();

    const creator_details = JSON.parse(Cookies.get('creator_profile_id'))[0]
    console.log("creator_details", creator_details);

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

    const convertHeight = (heightCms) => {
        const inchesPerFoot = 12;
        const feet = Math.floor(heightCms / (inchesPerFoot * 2.54));
        const inches = Math.round((heightCms / 2.54) % inchesPerFoot);

        return `${feet}' ${inches}"`;
    }

    // Example usage
    const heightInCms = creator_details?.height;
    const heightInFeetAndInches = convertHeight(heightInCms);

    return (
        <>
            <div
                className="flex container_capmapign_info w-full"
                style={{ backgroundColor: Colors.button_light_clr }}
            >

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
                                            src={creator_details ? creator_details?.profile_pic : Images.avatar1}
                                            // src={Images.avatar1}
                                            alt="Creator_name"
                                        />
                                    </div>
                                    <div className="flex flex-col  ">
                                        <h3>{creator_details ? creator_details?.user?.name : ""}</h3>
                                        {/* <p>I like Yor confidence</p> */}
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

                                <div >
                                    <h4 className="text-gray-400">Languages</h4>
                                    {creator_details?.languages ? creator_details?.languages.map((item) =>
                                        <h3>{item?.name}</h3>
                                    ) :
                                        ""
                                    }
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
                            <div className="grid grid-cols-3 mt-8 ">
                                <div>
                                    <h4 className="text-gray-400">Gender</h4>
                                    <h3>{creator_details ? creator_details?.gender : ""}</h3>
                                </div>
                                <div>
                                    <h4 className="text-gray-400">Age</h4>
                                    <h3>{creator_details ? creator_details?.age : ""}</h3>
                                </div>
                            </div>

                            <div className="flex gap-10 h-20 items-center align-middle absolute w-11/12  bottom-0 ">

                                <button
                                    className=" w-full rounded-full h-10"
                                    style={{
                                        border: "1px solid #9357FF",
                                        color: Colors.logo_clr,
                                    }}
                                    onClick={() => router.push('/creator_home')}
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

                                >
                                    <Link href={'/creator_edit_form'}>
                                        {" "}
                                        Edit Profile
                                    </Link>
                                </button>

                            </div>
                        </div>

                        {/* right */}
                        <div className="auto-cols-max p-5 border rounded-md shadow-md min-h-screen flex flex-col m-2 w-2/4 ">
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


                            <div className="grid max-h-[700px] grid-cols-2 gap-5 overflow-y-auto mt-10 portfolio">

                                {links?.length > 0 ? links?.map((link, index) => (
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
                                ))
                                    :
                                    <div className="flex items-center justify-center  ">
                                        <h1 className="mt-10">
                                            No Portfolio found
                                        </h1>
                                    </div>
                                }

                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}

export default Creator_single_profilepage