import Images from "@/images";
import Colors from "@/styles/Colors";
import Image from "next/image";
import { useEffect, useState } from "react";

const Home_Card1 = ({ items }) => {
    const [cardfirstshowmore, setCardfirstshowmore] = useState(false);
    const [start_date, setStart_date] = useState(null);
    const [end_date, setEnd_date] = useState(null);

    useEffect(() => {
        const staring_dateparts = items?.starting_date.split("-");
        // Check if the array has enough elements
        if (staring_dateparts?.length === 3) {
    
            // Rearrange the parts in the desired order (dd-mm-yyyy)
            const startreversedDate = `${staring_dateparts[2]}-${staring_dateparts[1]}-${staring_dateparts[0]}`;
            console.log(startreversedDate); // Output: "01-01-1970"
            setStart_date(startreversedDate)
        } else {
            console.log("Invalid date format");
        }
    
    
        const endparts = items?.ending_date.split("-");
        if (endparts?.length === 3) {
    
            const endreversedDate = `${endparts[2]}-${endparts[1]}-${endparts[0]}`;
            console.log(endreversedDate); // Output: "01-01-1970"
            setEnd_date(endreversedDate)
        } else {
            console.log("Invalid date format");
        }
    
        console.log("items", items);
    },[items])


    return (
        <>
            <div className="my-2 mx-2 h-auto">
                <div className="relative">
                    <Image
                        src={Images.card_img}
                        width={500}
                        height={100}
                        alt=""
                        className=" mx-auto"
                    />
                    {/* <Image
                        src={Images.reel_creator_card}
                        width={50}
                        height={50}
                        alt=""
                        className="reel_creator_card mx-auto"
                    /> */}
                </div>
                <div className="px-5 py-5 border rounded-b-lg" style={{ background: Colors.white_clr }}>
                    <div className="flex flex-row justify-between items-end mt-4  mx-0">
                        <div className="font_size_17 ">Reels creators {items?.creators?.length}</div>
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
                            <h5 className="">{items?.status}</h5>
                        </div>
                    </div>
                    <h2 className="font-bold ">{items?.name}</h2>
                    <div className="font_size_12">
                        {items?.description}
                        {cardfirstshowmore && (
                            <>
                                {" "}
                                Lorem Ipsum is simply dummy text of the printing and
                                typesetting industry......
                            </>
                        )}
                        <div
                            className="text-red-600 font_size_12"
                            onClick={() => setCardfirstshowmore(!cardfirstshowmore)}
                        >
                            {cardfirstshowmore ? "Less More" : "Read More"}
                        </div>
                    </div>
                    <div className="px-5 border py-3 rounded-md text-center  mt-2">
                        <h6>{start_date} - {end_date}</h6>
                        <div className="w-100 rounded-full border edit_button_clr py-1">
                            <buttton> Check Details</buttton>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


export default Home_Card1