import Images from "@/images";
import Image from "next/image";
import Buttons from "@/components/Button";
import Colors from "@/styles/Colors";
import Social_media_icons from "@/components/four_social_media";
import Creator_Modal_Header from "../../Creator_Modal_Header";

const Creator_InviteMem_Content = () => {
    return (
        <>

            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">

              <Creator_Modal_Header/>

                <div className="space-y-6 container-fluid p-14">
                    <div className="border rounded-lg p-10  text-center shadow-lg">
                        <div className="font_size_40 line-height-[53.32px]"
                            style={{ color: Colors.pink_clr }}
                        >
                            Invite a team member
                        </div>
                        <div className="font_size_21  line-height-[25.18px] my-3">
                        &quot;Suggest Creators&quot; feature. Engage in active conversations with influencers to
                            discuss campaign details and collaboration opportunities.
                        </div>

                        <Social_media_icons />
                        <div className="font_size_21 line-height-[25.41px] border rounded-lg px-3 py-2 my-4 text-base sm:text-sm md:text-md lg:text-lg xl:text-xl"
                            style={{ color: Colors.orange_clr }}>
                            https : // www.LoremIpsum.com/LoremIpsum.php?gen+link
                        </div>
                        <Buttons
                                buttoncss="font_size_24 leading-6 py-3 button_clr my-5"
                                label={"Copy link"}
                            />
                    </div>
                </div>

            </div>
        </>
    )
}

export default Creator_InviteMem_Content