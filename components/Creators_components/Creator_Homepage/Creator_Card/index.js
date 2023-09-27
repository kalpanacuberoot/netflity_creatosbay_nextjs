import Images from "@/images"
import Colors from "@/styles/Colors"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"

const Creator_Card = (item) => {

    console.log("Creator_Card", item);

    const router = useRouter();
    const [cardfirstshowmore, setCardfirstshowmore] = useState(false);
    const [start_date, setStart_date] = useState(null);
    const [end_date, setEnd_date] = useState(null);

    console.log("Home_Card1", item);

    // useEffect(() => {

    //     const staring_dateparts = item?.starting_date.split("-");
    //     // Check if the array has enough elements
    //     if (staring_dateparts?.length === 3) {

    //         // Rearrange the parts in the desired order (dd-mm-yyyy)
    //         const startreversedDate = `${staring_dateparts[2]}-${staring_dateparts[1]}-${staring_dateparts[0]}`;
    //         console.log(startreversedDate); // Output: "01-01-1970"
    //         setStart_date(startreversedDate)
    //     } else {
    //         console.log("Invalid date format");
    //     }


    //     const endparts = item?.ending_date.split("-");
    //     if (endparts?.length === 3) {

    //         const endreversedDate = `${endparts[2]}-${endparts[1]}-${endparts[0]}`;
    //         console.log(endreversedDate); // Output: "01-01-1970"
    //         setEnd_date(endreversedDate)
    //     } else {
    //         console.log("Invalid date format");
    //     }

    //     console.log("items", item);


    // }, [item]);

    // console.log("creatro start_date",start_date,end_date);

    // there will be no starting and ending date in api

    return (
        <>
            <div className="my-5 mx-2">
                <div className=" flex flex-col w-full">
                    <div className="max-h-64 border rounded-t-lg max-w-96">
                        <Image
                            src={item?.item?.campaign?.brand?.logo ? item?.item?.campaign?.brand?.logo : Images.card_img}
                            width={200}
                            height={100}
                            alt=""
                            className="w-full mx-auto border rounded-t-lg "
                        />
                    </div>
                    <div className="px-5 py-5 border rounded-b-lg" style={{ background: Colors.white_clr }}>
                        <div className="flex flex-row justify-between items-end mt-4  mx-0">
                            <div className="font_size_17 flex items-center flex-column">
                                <span className="me-3">
                                    Image
                                    <span

                                        className="px-3 py-1 rounded-md border ms-2 text-white bg-slate-800">
                                        {item?.item?.image_count}
                                    </span>
                                </span>
                                <span>
                                    Video
                                    <span

                                        className="px-3 py-1 rounded-md border ms-2 text-white bg-slate-800">
                                        {item?.item?.video_count}
                                    </span>
                                </span>
                            </div>
                            <div
                                className="flex flex-row px-3 py-1 items-center rounded-md mx-0"
                                style={{ backgroundColor: Colors.delay_clr }}
                            >
                                <Image
                                    src={Images.clock}
                                    width={12}
                                    height={10}
                                    alt=""
                                    className="me-2"
                                />
                                <h5 className="">draft</h5>
                            </div>
                        </div>
                        <h2 className="font-bold ">{item?.item?.campaign?.name}</h2>
                        <div className="font_size_12">
                            {item?.item?.campaign?.description}

                        </div>
                        <div className="px-5 border py-3 rounded-md text-center  mt-2">
                            {/* <h6>10-21-23</h6> */}
                            <Link href={'/creator_chat'}>
                                <div className="w-100 rounded-full border edit_button_clr py-1 cursor-pointer" >
                                    <buttton> Check Details</buttton>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Creator_Card