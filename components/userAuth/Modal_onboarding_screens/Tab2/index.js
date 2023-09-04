import Buttons from "@/components/Button";
import Colors from "@/styles/Colors";
import { useEffect } from "react";

const Tab2 = ({onClick,onSkipClick}) => {


    return (
        <>
            <div className="text-start">
                <div className="line-height-[42px] font-bold font_size_42  py-3"
                    style={{ color: Colors.pink_clr }}
                >
                    Step 2: Manage Your Campaign
                </div>
                <div className="font_size_31 ine-height-[37.17px]  py-3">
                    Once your campaign is created, you can easily monitor its status and progress. Use the &quot;Active&quot; tab to view ongoing campaigns and the &quot;Pending&quot; tab to review campaigns awaiting approval.
                </div>
                <div className="py-3">
                    <Buttons
                        label={"Next"}
                        buttoncss={"font_size_24  button_clr my-3 leading-6  py-3"}
                        onClick={onClick}
                    />
                    <Buttons
                        label={"Skip"}
                        buttoncss={"font_size_24  button_clr  my-3 leading-6  py-3"}
                        onClick={onSkipClick}
                    />
                </div>
            </div>
        </>
    )
}

export default Tab2