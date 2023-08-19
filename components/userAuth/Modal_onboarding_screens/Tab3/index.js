import Buttons from "@/components/Button"
import Colors from "@/styles/Colors"


const Tab3 = ({onClick}) => {



    return (
        <>

            <div className="text-start">
                <div className="line-height-[42px] font-bold font_size_42 py-3"
                    style={{ color: Colors.pink_clr }}
                >
                    Step 3: Engage with Influencers
                </div>
                <div className="font_size_31 ine-height-[37.17px] py-3">
                Discover top creators by browsing the "Top Creators" section or get personalized recommendations through the "Suggest Creators" feature. Engage in active conversations with influencers to discuss campaign details and collaboration opportunities.
                </div>
                <div className="py-3">
                    <Buttons
                        label={"Get Started"}
                        buttoncss={"font_size_24  button_clr my-3 leading-6  py-3"}
                        onClick={onClick}
                    />
                </div>
            </div>

        </>
    )
}

export default Tab3