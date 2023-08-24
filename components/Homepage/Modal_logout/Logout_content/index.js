import Images from "@/images";
import Image from "next/image";
import ModalHeader from "../../ModalHeader";
import Buttons from "@/components/Button";
import Colors from "@/styles/Colors";

const Logout_content = () => {
    return (
        <>

            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">

                <ModalHeader />

                <div className="space-y-6 container-fluid p-14">
                    <div className="border rounded-lg p-10  text-center shadow-lg">
                        <div className="font_size_40 line-height-[53.32px]" 
                        style={{color:Colors.blue_clr}}
                        >
                            Oh no! You,re leaving...<br></br>
                            Are you sure ?
                        </div>
                        <div className="font_size_18  line-height-[27px] my-3">
                            Sign up for our newletter to stay always up to date.
                        </div>
                        <div className="py-3">
                            <Buttons
                                buttoncss="font_size_24 leading-6 py-3 button_clr my-3"
                                label={"No, Just Kidding "}
                            />
                            <Buttons
                                buttoncss="font_size_24 leading-6 py-3 button_clr my-3"
                                label={"Yes, Log Me Out"}
                            />
                        </div>
                    </div>

                </div>


            </div>
        </>
    )
}

export default Logout_content