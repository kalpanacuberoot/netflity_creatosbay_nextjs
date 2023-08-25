import Colors from "@/styles/Colors"
import Tab1 from "../Tab1"
import Tab2 from "../Tab2"
import Tab3 from "../Tab3"
import ModalHeader from "@/components/Homepage/ModalHeader"
import { useEffect, useState } from "react"

const Onbording_content = ({ tabs, onClose, isOpen }) => {

    const [activeTab, setActiveTab] = useState(0);

    const handleTabClick = (index) => {
        setActiveTab(index);
    };

    const handleNextClick = () => {
        // setActiveTab((prevTab) => (prevTab < tabs.length - 1 ? prevTab + 1 : 0));
        if (activeTab < tabs.length - 1) {
            setActiveTab(activeTab + 1);
        } else {
            // If it's the last tab, close the modal
            onClose();
        }
    };
    if (!isOpen) return null;

    return (
        <>
            {/* {activeTab < tabs.length - 1 ? */}
                <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">

                    <ModalHeader />

                    <div className="space-y-6 container-fluid p-14">
                        <div className="border rounded-lg p-10  text-center shadow-lg">
                            <div className="flex items-center justify-between relative ">
                                <div className=" border border-3 border-zinc-300 absolute w-full"></div>
                                {tabs.map((tab, index) => (
                                    <button
                                        key={index}
                                        onClick={() => handleTabClick(index) ||  onClose()}
                                        // className={`${activeTab === index ? 'bg-purple-500 text-white' : 'bg-gray-200 text-gray-700'
                                        //     } relative px-2 py-2  my-3 rounded-md`}
                                        // className={`line-height-[42px] font-bold text-lg py-3 ${activeTab === 0 ? 'text-pink-500' : 'text-gray-600'
                                        //     }`}
                                        className={`relative px-2 py-2  my-3 rounded-md ${activeTab === index ? 'bg-purple-500 text-white' : 'bg-gray-200 text-gray-700'
                                        }`}
                                    >
                                        {tab.title}
                                    </button>
                                ))}
                            </div>
                            <div className="mt-4">
                                <div className="mb-4"
                                    onClick={handleNextClick}
                                > {tabs[activeTab].content}</div>
                            </div>
                        </div>
                    </div>


                </div>
           

        </>
    )
}

export default Onbording_content