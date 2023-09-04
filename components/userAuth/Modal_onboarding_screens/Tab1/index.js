import Buttons from "@/components/Button";
import Colors from "@/styles/Colors";
import { useEffect } from "react";

const Tab1 = ({ onClick, onSkipClick }) => {



    return (
        <>

            <div className=" text-start">
                <div className="line-height-[42px] font-bold font_size_42  py-3"
                    style={{ color: Colors.pink_clr }}
                >
                    Step 1: Create Your Campaign
                </div>
                <div className="font_size_31 ine-height-[37.17px]  py-3">
                    Get started by creating a new campaign. Provide a unique campaign name, set the duration in months, and assign a unique ID for tracking purposes.
                </div>
                <div className="py-3">
                    <Buttons
                        label={"Next"}
                        buttoncss={"font_size_24 button_clr my-3 leading-6  py-3"}
                        onClick={onClick}

                    />
                  
                        <Buttons
                            label={"Skip"}
                            buttoncss={"font_size_24 button_clr  my-3 leading-6  py-3"}
                            onClick={onSkipClick}
                        />
                  
                </div>
            </div>

        </>
    )
}

export default Tab1