import Colors from "@/styles/Colors"
import Creator_avatar_red from "./Creator_avatar_red"
import Creator_chats from "./Creator_chats"

const Creator_Chatspage = () => {
    return (
        <>

            <div className="flex container_invoice w-full "
                style={{ background: Colors.logo_background_clr }}
            >


                <div className="m-2  auto-cols-max text-start p-2  w-full"

                >
                    <div
                        style={{ background: Colors.invoice_gradient_clr }}
                        // style={style}
                        className="auto-cols-max p-3 rounded-md flex flex-row"
                    >
                        <div className="flex flex-row justify-between items-center  w-full">
                            <div className="font_size_40" style={{ color: Colors.white_clr }}>
                                Communication
                            </div>
                        </div>


                    </div>
                    <div className="flex flex-row items-start  justify-between w-full">

                        <div style={{ background: Colors.white_clr }} className="rounded-md my-3 me-3 w-2/4 h-screen overflow-y-auto">

                            <div className=" p-4 border shadow rounded m-3 "
                            >

                                <div className="flex flex-row items-center justify-between ">
                                    <div className="font_size_21">
                                        Active Conversations
                                    </div>
                                    <span
                                        style={{ background: Colors.gray2, borderColor: Colors.light_grey_clr }}
                                        className="px-2 rounded-md border">

                                    </span>
                                </div>


                                <hr className="" />
                                <div className="">
                                    <div className="py-3">

                                    </div>

                                </div>
                            </div>

                            <div className="  p-4 border shadow rounded m-3"
                            >
                                <div className="flex flex-row items-center justify-between ">
                                    <div className="font_size_21">
                                        InActive Conversations
                                    </div>
                                    <span
                                        style={{ background: Colors.gray2, borderColor: Colors.light_grey_clr }}
                                        className="px-2 rounded-md border">

                                    </span>
                                </div>
                                <hr className="" />
                                <div className="">

                                    <div className="py-3">
                                        <Creator_avatar_red/>
                                    </div>

                                </div>
                            </div>
                           

                        </div>
                        <div className=" h-screen  rounded-md my-3 overflow-y-auto me-3 w-full" style={{ background: Colors.white_clr }}>

                            <div className=" bg-zinc-100 h-full">
                                <Creator_chats/>
                            </div>
                        </div>
                        <div style={{ background: Colors.white_clr }} className="rounded-md my-3 w-2/4   h-screen overflow-y-auto">

                            <div className="font_size_21  p-4">
                                Campaign info
                            </div>

                            <hr className="" />
                            <div className=" border shadow rounded m-3">
                                <div className="p-4">
                                    {/* <Avatar_green width={38} height={38} /> */}
                                    <h3>campaign</h3>
                                </div>
                                <div className="px-4">

                                    <p className="font_size_16 communication_text py-2">
                                        Qorem ipsum Lorem Ipsum is simply dummy text of
                                        the printing and typesetting industry. Lorem Ipsum
                                        has been the industry&apos;s standard dummy text ever
                                        since the 1500s, when an unknown printer took a
                                        galley of type and scrambled it to make a type
                                        specimen book. It has survived not only five
                                        centuries, but also the leap into electronic
                                        typesetting, remaining essentially unchanged. It
                                        was popularised in the 1960s with the release of
                                        

                                    </p>

                                </div>


                            </div>
                            
                        </div>
                    </div>

                </div>

            </div>
        </>
    )
}

export default Creator_Chatspage