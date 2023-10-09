import Images from "@/images"
import Colors from "@/styles/Colors"
import Cookies from "js-cookie"
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

    useEffect(() => {
        const staring_dateparts = item?.item?.campaign?.starting_date.split("-");

        if (staring_dateparts?.length === 3) {
            const startreversedDate = `${staring_dateparts[2]}-${staring_dateparts[1]}-${staring_dateparts[0]}`;
            console.log(startreversedDate); // Output: "01-01-1970"
            setStart_date(startreversedDate)
        } else {
            console.log("Invalid date format");
        }

        const endparts = item?.item?.campaign?.ending_date.split("-");
        if (endparts?.length === 3) {
            const endreversedDate = `${endparts[2]}-${endparts[1]}-${endparts[0]}`;
            console.log(endreversedDate); // Output: "01-01-1970"
            setEnd_date(endreversedDate)
        } else {
            console.log("Invalid date format");
        }
    }, [item]);

    const handleId = (item) => {
        Cookies.set('creator_campaign_id', JSON.stringify(item?.item?.campaign?.id));
        Cookies.set('creator_brand_id', JSON.stringify(item?.item?.campaign?.brand?.id));
        router.push('/creator_single_chat')
    }

    return (
        <>
            <div className="my-5 mx-2">
                <div className=" flex flex-col w-full rounded-lg shadow-md">
                    <div className="max-h-60 border rounded-t-lg max-w-96 h-60 w-80">
                        <Image
                            src={item?.item?.campaign?.brand?.logo ? item?.item?.campaign?.brand?.logo : Images.card_img}
                            width={200}
                            height={50}
                            alt=""
                            className="w-full mx-auto border rounded-t-lg "
                        />
                    </div>
                    <div className="px-5 py-5 border rounded-b-lg" style={{ background: Colors.white_clr }}>
                        <div className="flex flex-row justify-between items-end mt-4  mx-0">
                            <div className="font_size_17 flex items-center flex-column me-5">
                                {/* <span className="me-3">
                                    Image
                                    <span

                                        className="px-3 py-1 rounded-md border ms-2 text-white bg-slate-800">
                                        {item?.item?.image_count ? item?.item?.image_count : 0}
                                    </span>
                                </span>
                                <span>
                                    Video
                                    <span

                                        className="px-3 py-1 rounded-md border ms-2 text-white bg-slate-800">
                                        {item?.item?.video_count ? item?.item?.video_count : 0}
                                    </span>
                                </span> */}
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
                        <h2 className="font-bold text-center mt-3">{item?.item?.campaign?.name}</h2>
                        {/* <div className="font_size_12">
                            {item?.item?.campaign?.description}

                        </div> */}
                        <div className="px-5  py-3 rounded-md text-center  mt-2">
                            <h6 className="mb-2">{start_date} - {end_date}</h6>
                            {/* <Link href={'/creator_single_chat'}> */}
                            <div className="w-100 rounded-full border edit_button_clr py-1 cursor-pointer" onClick={() => handleId(item)}>
                                <buttton> Check Details</buttton>
                            </div>
                            {/* </Link> */}
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Creator_Card