import Images from "@/images"
import Colors from "@/styles/Colors"
import Image from "next/image"
import Creator_Card from "../Creator_Homepage/Creator_Card"

const Find_Campaignpage = () => {
    return (
        <>
            {/* <h1>Find_Campaign.js</h1> */}
            <div className="flex container_invoice container w-full"
                style={{ background: Colors.logo_background_clr }}
            >
                {/* <div className="auto-cols-max  px-3 py-5 border w-1/7"
                    style={{ background: Colors.white_clr }}
                >
                    <CollapseLeftDashboard />
                </div> */}

                <div className="m-2 w-full auto-cols-max text-start p-2"

                >
                    <div
                        style={{ background: Colors.invoice_gradient_clr }}
                        // style={style}
                        className="auto-cols-max p-3 rounded-md flex flex-row"
                    >
                        <div className="flex flex-row justify-between items-center  w-full">



                            <div className="font_size_40" style={{ color: Colors.white_clr }}>
                                Live Campaign
                            </div>
                            <div
                                style={{ background: Colors.white_clr }}
                                className="rounded-md flex flex-row justify-between items-center px-3 py-2">
                                <button className="font_size_21 mx-4" onClick={() => router.push('/campaign_info')}>
                                    Add Campaign
                                </button>
                                <Image
                                    src={Images.pink_plus_icon}
                                    width={24}
                                    height={24}
                                    alt=""
                                />
                            </div>

                        </div>


                    </div>
                    <div className="flex flex-row flex-wrap items-start  justify-evenly">
                        <Creator_Card />
                    </div>

                </div>

            </div>
        </>
    )
}

export default Find_Campaignpage